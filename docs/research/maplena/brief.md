# maplena.com → SollyBloom (FR, bleu marine)

Source: https://maplena.com/ (homepage). Local route: `/` (src/app/page.tsx).

Section order (source → local component):
1. Countdown bar → `announcement-bar.tsx`
2. Header (logo, 5 nav links, account/search/cart) → `header.tsx`
3. Hero slideshow (3 slides, dots) → `hero-slider.tsx`
4. Scrolling trust bar → `TrustMarquee` in `sections.tsx`
5. Best sellers grid (8 cards, badges, swatches) → `BestSellers`
6. Tile "Cozy season" (text left, image right) → `ImageText`
7. Featured product (gallery + benefits + CTA) → `featured-product.tsx`
8. Tile "Holiday season" → `ImageText`
9. FAQ (2-column accordions) → `faq.tsx`
10. Newsletter → `Newsletter`
11. Footer → `footer.tsx`

Customisations vs source: SollyBloom brand, marine-blue palette (navy #0B2545, ice #EAF1F8, gold #F2C14E),
all copy in French, prices in AUD, links point to sollybloom.com product pages.
Images are SollyBloom's own product photos (cdn.shopify.com, store files), chosen without baked-in English text.
Fonts: Poppins (headings), Lato (body) as on source, self-hosted via @fontsource.
