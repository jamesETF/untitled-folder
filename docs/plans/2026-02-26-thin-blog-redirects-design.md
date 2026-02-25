# Thin Blog Post Redirects — Design

## Strategy
Reduce thin/low-content pages so Google sees a higher percentage of quality content.
Redirect 5 thin blog posts to topically-relevant stronger pages (not just /blog/).

## Redirect Map

| FROM | Impr | Clicks | → TO | Reasoning |
|------|------|--------|------|-----------|
| `/4-signs-of-a-french-bulldog-scam-and-4-ways-you-can-avoid-them-ethical-frenchie` | 157 | 1 | `/faq/` | Cannibalizes homepage on branded queries. FAQ has "Avoiding Scams" section. |
| `/the-ethics-of-where-to-find-a-french-bulldog-puppy-for-your-family/` | 140 | 0 | `/about-us/` | Homepage ranks 10x better for every query this page targets. About page is topical match. |
| `/blog/french-bulldog-theft` | 99 | 1 | `/faq/` | Dead weight (pos 23-88, 1 click/year). Theft adjacent to scams/safety. |
| `/french-bulldogs-health-concerns-care-tips` | 47 | 0 | `/blog/french-bulldog-health-risks-welfare-problems-behind-the-cute-face/` | Direct cannibalization — two pages fighting for "french bulldog health issues", both at pos 96-99. |
| `/potty-train-your-frenchie/` | 5 | 0 | `/blog/` | Zero queries registered. Non-original content. Dead page. |

## Complication: Theft Post redirect_from
The theft post has `redirect_from` in its front matter pointing 4 pricing URLs to it:
- `/cheap-french-bulldog-puppies-under-500/`
- `/locations-blue-jay-ohio-french-bulldog-puppies/`
- `/french-bulldog-price/`
- `/french-bulldog-price-how-much-does-a-frenchie-cost/`

These need to be rerouted before redirecting the theft post:
- Pricing URLs → `/blog/why-french-bulldogs-are-expensive-before-adoption/`
- Ohio locations URL → `/french-bulldog-puppies/`

## Data Source
GSC API (365 days, Feb 22 2025 – Feb 22 2026), cannibalization analysis from `scripts/gsc-output/query-page-cannibalization.csv`
