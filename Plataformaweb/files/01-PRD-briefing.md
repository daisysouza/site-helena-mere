# PRD — Site Helena Mere Corretora de Imóveis

## 1. Visão Geral

**Nome do projeto:** Site Institucional Helena Mere Corretora  
**Tipo:** Site vitrine / institucional com catálogo de imóveis  
**Tecnologia:** Next.js 14 (App Router) + Tailwind CSS  
**Objetivo principal:** Gerar leads qualificados para compra de imóveis, transmitindo confiança, sofisticação e conexão com a natureza.

---

## 2. Sobre a Corretora

- **Nome:** Helena Mere
- **Atuação:** Corretora de imóveis — foco exclusivo em **venda**
- **Posicionamento:** Profissional sofisticada, próxima do cliente, especializada em conectar pessoas ao imóvel certo
- **Diferenciais:** Atendimento personalizado, curadoria de imóveis, experiência no mercado

---

## 3. Identidade Visual

### Paleta de Cores
| Nome | Hex | Uso |
|---|---|---|
| Verde Floresta | `#2D5016` | Cor primária, CTAs principais |
| Verde Salva | `#4A7C3F` | Hover, destaques |
| Verde Menta | `#8FBC8F` | Backgrounds suaves, bordas |
| Bege Natureza | `#F5F0E8` | Background principal |
| Dourado Suave | `#C9A84C` | Acentos de sofisticação |
| Branco Puro | `#FFFFFF` | Cards, contraste |
| Cinza Escuro | `#1C1C1C` | Textos principais |

### Tipografia
- **Display (títulos):** Playfair Display — elegância, sofisticação
- **Body (textos):** Inter — leiturabilidade moderna, clean
- **Tamanho base:** 16px | Escala: 1.25

### Estilo Visual
- Fotografia com natureza e luminosidade (janelas grandes, jardins, áreas verdes)
- Elementos orgânicos: bordas suaves (border-radius: 12px), sombras leves
- Muito espaço em branco — sente-se como respirar
- Ícones de linha fina (Lucide Icons)
- Assinatura única: **faixa verde vertical à esquerda** em seções de destaque, como uma folha de árvore

---

## 4. Estrutura de Páginas

### 4.1 Home (`/`)
- Hero com headline forte + foto de imóvel de destaque
- Barra de busca de imóveis (filtros: tipo, cidade, faixa de preço)
- Seção "Imóveis em Destaque" (grid de cards)
- Seção "Por que escolher a Helena?" (3 diferenciais)
- Depoimentos de clientes
- CTA final: "Fale com a Helena"

### 4.2 Imóveis (`/imoveis`)
- Listagem com filtros laterais (tipo, quartos, preço, bairro)
- Cards com: foto, título, preço, localização, badges (Novo, Destaque)
- Paginação

### 4.3 Detalhe do Imóvel (`/imoveis/[slug]`)
- Galeria de fotos
- Informações completas (área, quartos, vagas, valor)
- Mapa de localização
- Formulário de interesse / WhatsApp direto

### 4.4 Sobre (`/sobre`)
- Foto profissional da Helena
- História e trajetória
- CRECI e certificações
- Valores e missão

### 4.5 Contato (`/contato`)
- Formulário (nome, e-mail, telefone, mensagem)
- Link para WhatsApp
- Redes sociais (Instagram)

---

## 5. Funcionalidades

### MVP (Fase 1)
- [x] Catálogo de imóveis estático (JSON local ou mock data)
- [x] Filtros de busca no frontend
- [x] Formulário de contato (mailto ou WhatsApp)
- [x] Design responsivo (mobile first)
- [x] SEO básico (meta tags, Open Graph)

### Fase 2 (Futuro)
- [ ] CMS headless (Sanity ou Contentful) para Helena gerenciar imóveis
- [ ] Integração com portais (VivaReal, Zap)
- [ ] Analytics (Google Analytics 4)
- [ ] Chat ao vivo

---

## 6. Requisitos Técnicos

```
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
Fontes: Google Fonts (Playfair Display + Inter)
Ícones: Lucide React
Imagens: Next/Image (otimização automática)
Deploy: Vercel
SEO: next-metadata API
```

---

## 7. Tom de Voz

- **Sofisticado mas acessível** — não arrogante
- **Confiante** — sabe o que faz
- **Próxima** — fala com o cliente, não para o cliente
- **Inspirador** — vender imóvel é realizar sonho

Exemplos de copy:
- ❌ "Temos os melhores imóveis"
- ✅ "O imóvel certo para o próximo capítulo da sua vida"
- ❌ "Entre em contato"
- ✅ "Vamos conversar sobre o seu imóvel"

---

## 8. Referências Visuais (para usar no Stitch)

Sites de referência para inspirar o design:
- Sotheby's International Realty (sofisticação)
- Loft.com.br (modernidade + usabilidade)
- Christie's Real Estate (elegância + natureza)

Palavras-chave para busca no Pinterest:
- "real estate website green luxury"
- "imobiliária site natureza sofisticado"
- "property website minimal elegant green"
