# Helena Mêre Corretora — Site Institucional

Site institucional para corretora de imóveis, com vitrine de imóveis, páginas institucionais e integração direta com WhatsApp.

## Tech Stack

- **Next.js 16** (App Router) — renderização híbrida (SSG + ISR)
- **TypeScript** — tipagem estática
- **Tailwind CSS v4** — estilização utilitária com design system próprio
- **shadcn/ui** — componentes headless acessíveis (Button, Input, Select, etc.)
- **Embla Carousel** — carrossel performático de depoimentos

## Arquitetura

```
app/                  # App Router (7 rotas)
  page.tsx            # Home: hero, imóveis em destaque, depoimentos, CTA
  imoveis/
    page.tsx          # Listagem com filtros (tipo, preço, bairro, quartos)
    [slug]/page.tsx   # Detalhe do imóvel com galeria e especificações
  sobre/page.tsx      # Página institucional
  contato/page.tsx    # Canais de contato + formulário + mapa
  anuncie-seu-imovel/ # Formulário para vendedores
components/
  ui/                 # Componentes base (shadcn/ui)
  home/               # Seções da página inicial
  header.tsx          # Navbar responsiva com menu mobile
  footer.tsx          # Footer 4 colunas
  contact-form.tsx    # Formulário → WhatsApp
  list-property-form.tsx # Formulário → WhatsApp
  property-card.tsx   # Card reutilizável
  whatsapp-float.tsx  # Botão flutuante
lib/
  site.ts            # Config centralizada (contato, redes, links)
  properties.ts      # Dados e utilitários dos imóveis
```

## Funcionalidades

- **Vitrine de imóveis** com filtros combinados e ordenação
- **Páginas estáticas** geradas em build (SSG) com revalidação incremental (ISR)
- **Formulários** que enviam mensagem pronta para o WhatsApp
- **Galeria de fotos** com miniaturas selecionáveis
- **SEO completo** — Open Graph, Twitter Cards, metadados por página
- **Tema claro/escuro** via `next-themes`
- **Design responsivo** — mobile-first com breakpoints Tailwind
- **Botão flutuante do WhatsApp** com animação pulse

## Deploy

**Vercel** via GitHub Actions (push na `main` dispara build e deploy automático).

---

Desenvolvido com foco em performance, acessibilidade e experiência mobile.
