# Design System — Plataforma Helena Mêre Corretora

## Paleta de Cores (HEX)
- Primary Green: `#028940`
- Secondary Green: `#6EA24C`
- Accent Green: `#B1D182`
- Warm Neutral Background: `#F4F1E9`
- White: `#FFFFFF`
- Text Primary: `#1F2937`
- Text Muted: `#6B7280`
- Border Light: `#E5E7EB`
- Success: `#16A34A`
- Warning: `#F59E0B`

## Design Tokens
### Typography
- Heading: Playfair Display
- Body: Inter

### Spacing
4, 8, 16, 24, 32, 48, 64, 80, 96

### Radius
8, 16, 24, 32

## Componentes
### UI
- Button
- Input
- Select
- Badge
- Card

### Business
- PropertyCard
- PropertyGallery
- PropertySearchBar
- FeatureItem
- ContactCTA

## Estrutura de Páginas (Markdown)
- /
  - hero
  - search
  - featured-properties
  - about
  - testimonials
  - cta
- /imoveis
- /imoveis/[slug]
- /sobre
- /anuncie-seu-imovel
- /contato

## Estrutura de Páginas (JSON)
```json
{
  "routes": [
    {
      "path": "/",
      "sections": [
        "hero",
        "search",
        "featured-properties",
        "about",
        "testimonials",
        "cta"
      ]
    },
    {"path": "/imoveis"},
    {"path": "/imoveis/[slug]"},
    {"path": "/sobre"},
    {"path": "/anuncie-seu-imovel"},
    {"path": "/contato"}
  ]
}
```

## Stack
- Next.js
- Tailwind CSS
- shadcn/ui
- Radix UI
- Embla Carousel
