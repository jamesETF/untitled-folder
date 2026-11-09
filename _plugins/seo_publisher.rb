# frozen_string_literal: true

# Jekyll 3.9 loads _plugins before the gems listed in _config.yml, so load seo-tag first.
require "jekyll-seo-tag"

# jekyll-seo-tag (2.8) names the JSON-LD publisher after the page author (site.author.name =
# "James Harrison"), so every page said the publishing Organization was "James Harrison".
# The publisher is the business; James stays the author (byline). This keeps seo-tag's own
# logic (and logo) and only replaces the publisher's name. Name matches _includes/schema.html.
module EthicalFrenchieSeoPublisher
  PUBLISHER_NAME = "Ethical Frenchie LLC"

  def publisher
    output = super
    return output unless output.is_a?(Hash)

    output.merge("name" => PUBLISHER_NAME)
  end
end

Jekyll::SeoTag::JSONLDDrop.prepend(EthicalFrenchieSeoPublisher)
