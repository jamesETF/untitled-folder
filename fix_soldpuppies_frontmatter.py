import os
import re

jsonld_template = '''
<script type="application/ld+json">
{{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "{title}",
  "offers": {{
    "@type": "Offer",
    "priceCurrency": "{currency}",
    "price": "{price}",
    "availability": "https://schema.org/{availability}"
  }}
}}
</script>
'''

def extract_frontmatter(content):
    match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL | re.MULTILINE)
    if match:
        frontmatter = match.group(1)
        return frontmatter
    return None

def parse_frontmatter(frontmatter):
    data = {}
    for line in frontmatter.splitlines():
        if ':' in line:
            key, val = line.split(':', 1)
            data[key.strip()] = val.strip().strip('"').strip("'")
    return data

folder = "SoldPuppies"

for filename in os.listdir(folder):
    if filename.endswith('.md'):
        filepath = os.path.join(folder, filename)
        with open(filepath, 'r') as f:
            content = f.read()
        frontmatter = extract_frontmatter(content)
        if frontmatter:
            data = parse_frontmatter(frontmatter)
            title = data.get('title', 'Unknown')
            price = data.get('price', '0')
            currency = data.get('currency', 'USD')
            status = data.get('status', 'sold').lower()
            availability = "SoldOut" if status == "sold" else "InStock"
            jsonld = jsonld_template.format(title=title, price=price, currency=currency, availability=availability)
            if jsonld not in content:
                content += "\n" + jsonld
                with open(filepath, 'w') as f:
                    f.write(content)
