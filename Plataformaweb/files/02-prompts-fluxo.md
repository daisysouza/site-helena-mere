# Prompts Prontos — Fluxo Helena Mere

---

## PASSO 1 — ChatGPT: Identidade Visual

Cole esse prompt no ChatGPT para refinar a identidade visual:

```
Preciso da identidade visual completa para o site de Helena Mere, corretora de imóveis focada em venda. O estilo deve combinar natureza, tons de verde e sofisticação.

Me retorne:
1. Paleta de cores (6 cores com hex codes e quando usar cada uma)
2. Tipografia (fonte para títulos, corpo e UI — preferencialmente Google Fonts)
3. Estilo visual (adjetivos, referências, elementos gráficos)
4. 3 exemplos de headline para o hero do site
5. 3 diferenciais para usar na seção "Por que escolher a Helena?"
6. Tom de voz em 5 adjetivos
```

---

## PASSO 2 — ChatGPT: Estrutura de Páginas

```
Com base na identidade visual acima, me retorne a estrutura completa de páginas para um site de corretora de imóveis (foco em venda). Para cada página liste:
- URL
- Objetivo da página
- Seções com descrição breve
- Call-to-action principal

Páginas: Home, Catálogo de Imóveis, Detalhe do Imóvel, Sobre, Contato.
```

---

## PASSO 3 — Stitch (stitch.withgoogle.com): Geração do Design

### Prompt principal para o Stitch:

```
Create a real estate website for Helena Mere, a sophisticated Brazilian real estate agent specializing in property sales.

Visual style:
- Color palette: deep forest green (#2D5016) as primary, sage green (#8FBC8F) as secondary, warm beige (#F5F0E8) as background, soft gold (#C9A84C) as accent
- Typography: Playfair Display for headings, Inter for body text
- Aesthetic: nature-inspired luxury, lots of white space, organic shapes, soft shadows
- Photography: bright interiors with large windows, gardens, greenery

Pages to design:
1. HOME PAGE with:
   - Hero section: full-width photo, headline "O imóvel certo para o próximo capítulo da sua vida", search bar with filters
   - Featured properties grid (3 cards)
   - "Why Helena" section with 3 differentials + icons
   - Client testimonials (2-3)
   - Final CTA "Let's talk about your property"

2. PROPERTIES LISTING PAGE with:
   - Sidebar filters (type, bedrooms, price range, neighborhood)
   - Property cards grid with photo, title, price, location

3. PROPERTY DETAIL PAGE with:
   - Full photo gallery
   - Property specs (area, bedrooms, parking)
   - Contact/WhatsApp button

Make it feel premium, trustworthy, and connected to nature. Mobile responsive.
```

### Pedidos de ajuste no Stitch (use se precisar):
- "Make the hero section more immersive with a full-height photo"
- "Add a vertical green accent stripe on the left side of feature sections"
- "Make the property cards feel more luxurious with subtle gold borders"
- "Increase white space between sections"

---

## PASSO 4 — Claude Code (VS Code): Geração do Código

### Estrutura de pastas a criar no seu computador:

```
helena-mere-site/
├── context/           ← cole o PRD aqui
│   ├── PRD.md
│   └── design-tokens.md
├── prototype/         ← cole o ZIP do Stitch aqui (descompactado)
│   └── [arquivos do Stitch]
└── (Next.js será gerado aqui pelo Claude Code)
```

### Prompt inicial para o Claude Code:

```
Você é um desenvolvedor senior especialista em Next.js 14 e Tailwind CSS.

Leia os arquivos em /context para entender o projeto.
Analise o protótipo visual em /prototype para replicar o design.

Crie um projeto Next.js 14 completo com App Router para o site da Helena Mere Corretora.

Requisitos técnicos:
- Next.js 14 com App Router
- Tailwind CSS configurado com os design tokens do PRD
- Fontes: Playfair Display + Inter via next/font/google
- Ícones: lucide-react
- Imagens: next/image
- Mock data em JSON local para os imóveis

Páginas a criar:
1. / (Home)
2. /imoveis (Listagem)
3. /imoveis/[slug] (Detalhe)
4. /sobre (Sobre)
5. /contato (Contato)

Componentes globais:
- Header com navegação e logo
- Footer com links e redes sociais
- PropertyCard reutilizável
- SearchBar com filtros

Comece criando a estrutura do projeto e o tailwind.config.js com os tokens de cor e tipografia. Depois implemente página por página.
```

### Prompts de refinamento para usar no Claude Code:

```
# Após gerar a Home:
"Adicione animações suaves de entrada (fade-in) para as seções ao fazer scroll. Use Intersection Observer nativo, sem biblioteca extra."

# Para o catálogo:
"Implemente os filtros de busca no frontend usando useState. Os filtros devem ser: tipo de imóvel, número de quartos, faixa de preço (slider), e bairro."

# Para SEO:
"Adicione metadata completo em todas as páginas usando a Metadata API do Next.js 14. Inclua title, description, Open Graph e Twitter Card."

# Para WhatsApp:
"No formulário de interesse do imóvel, adicione um botão que abre WhatsApp com mensagem pré-preenchida: 'Olá Helena! Tenho interesse no imóvel [nome do imóvel]. Podemos conversar?'"
```

---

## PASSO 5 — Agente de SEO

Prompt para criar um agente de SEO no Claude Code:

```
Crie um agente de SEO para o site da Helena Mere. O agente deve:

1. Verificar todas as páginas e garantir:
   - title único e descritivo em cada página (máx 60 chars)
   - meta description relevante (máx 155 chars)
   - Open Graph tags completas
   - Structured data (Schema.org) para RealEstateAgent e ListingPage
   - robots.txt configurado
   - sitemap.xml gerado automaticamente

2. Para cada imóvel, gerar automaticamente:
   - slug amigável baseado no título
   - alt text para imagens
   - Structured data de Product/RealEstateListing

Implemente tudo usando a Metadata API do Next.js 14 e o pacote next-sitemap.
```

---

## PASSO 6 — Agente de Segurança

Prompt para criar um agente de segurança no Claude Code:

```
Faça uma auditoria de segurança completa no site Next.js e implemente as correções:

1. Headers de segurança no next.config.js:
   - Content-Security-Policy
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - Referrer-Policy
   - Permissions-Policy

2. Formulários:
   - Sanitização de inputs
   - Rate limiting (se houver API routes)
   - Proteção contra XSS

3. Variáveis de ambiente:
   - Mover dados sensíveis para .env.local
   - Garantir que nenhuma chave está exposta no client bundle

4. Gere um relatório das vulnerabilidades encontradas e o que foi corrigido.
```
