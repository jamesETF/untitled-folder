#!/usr/bin/env ruby
# Builds uploads/Puppy_Supply_List.pdf from _data/supply_list.yml, the same data the
# /french-bulldog-preparation-list/ page renders, so the PDF and the page never drift.
#
#   ruby scripts/supply-list/build-pdf.rb
#
# Needs only the macOS system Ruby and Google Chrome (headless print-to-PDF).
# Fonts load from Google Fonts, so run it online.
require 'yaml'
require 'erb'
require 'cgi'
require 'tmpdir'

HERE   = __dir__
ROOT   = File.expand_path('../..', HERE)
DATA   = YAML.load_file(File.join(ROOT, '_data', 'supply_list.yml'))
OUT    = File.join(ROOT, 'uploads', 'Puppy_Supply_List.pdf')
CHROME = ENV.fetch('CHROME', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')

def h(text)
  CGI.escapeHTML(text.to_s)
end

# Chrome re-encodes WebP when printing, which bloats the PDF, so every image under
# /uploads/supply-list/ is handed to Chrome as a JPEG (PNG if it has transparency)
# made with macOS `sips`, capped at `max` pixels on its long side.
def asset(rel, max = 900)
  src = File.join(ROOT, 'uploads', 'supply-list', rel)
  info  = `sips -g pixelWidth -g pixelHeight -g hasAlpha "#{src}" 2>/dev/null`
  alpha = info.include?('hasAlpha: yes') # transparent art (the cartoons) must stay PNG
  out   = File.join($print_dir, rel.tr('/', '_').sub(/\.\w+\z/, alpha ? '.png' : '.jpg'))
  unless File.exist?(out)
    dims = info.scan(/pixel(?:Width|Height): (\d+)/).flatten.map(&:to_i)
    cmd = alpha ? ['sips', '-s', 'format', 'png'] : ['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '82']
    cmd += ['-Z', max.to_s] if dims.max.to_i > max
    ok = system(*cmd, src, '--out', out, out: File::NULL, err: File::NULL)
    abort "sips could not convert #{rel}" unless ok && File.size?(out)
  end
  "file://#{out}"
end

# file:// URL for a root-relative site path such as /uploads/logo-light.png
def site_file(path)
  "file://#{File.join(ROOT, path)}"
end

# file:// URL for a print-only asset kept next to this script (logo marks)
def local(name)
  "file://#{File.join(HERE, name)}"
end

def count_for(section)
  (section['feature'] ? 1 : 0) + section['groups'].sum { |g| g['items'].size }
end

sections = DATA['sections']
items    = sections.flat_map { |s| s['groups'].flat_map { |g| g['items'] } }
total    = items.size + sections.count { |s| s['feature'] }
musts    = items.count { |i| i['must'] }

template = File.read(File.join(HERE, 'print.html.erb'), encoding: 'UTF-8')

Dir.mktmpdir('supply-list') do |dir|
  $print_dir = dir
  html = ERB.new(template, trim_mode: '-').result(binding)
  File.write(ENV['KEEP_HTML'], html) if ENV['KEEP_HTML'] # debug: KEEP_HTML=/path/to/copy.html
  src = File.join(dir, 'supply-list.html')
  File.write(src, html, encoding: 'UTF-8')
  # A private profile per run: headless Chrome hangs when two runs share one.
  args = [CHROME, '--headless=new', '--disable-gpu', "--user-data-dir=#{dir}/profile",
          '--no-pdf-header-footer', '--print-to-pdf-no-header', '--generate-pdf-document-outline',
          '--virtual-time-budget=20000', "--print-to-pdf=#{OUT}", "file://#{src}"]
  File.delete(OUT) if File.exist?(OUT)
  pid = Process.spawn(*args, out: File::NULL, err: File::NULL)
  # Headless Chrome on this Mac writes the PDF and then never exits, so stop it
  # once the file has stopped growing.
  deadline = Time.now + 150
  last = -1
  stable = 0
  loop do
    break if Process.wait(pid, Process::WNOHANG)
    size = File.size?(OUT).to_i
    stable = size.positive? && size == last ? stable + 1 : 0
    last = size
    if stable >= 4
      Process.kill('KILL', pid)
      Process.wait(pid)
      break
    end
    if Time.now > deadline
      Process.kill('KILL', pid)
      abort 'Chrome timed out while printing the PDF'
    end
    sleep 0.5
  end
end

abort "PDF was not written: #{OUT}" unless File.size?(OUT)
puts format('Wrote %s (%.1f MB, %d picks, %d must-haves)', OUT.sub("#{ROOT}/", ''), File.size(OUT) / 1048576.0, total, musts)
