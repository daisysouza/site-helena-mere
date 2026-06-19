# Design Tokens — Helena Mere

## Para colar no tailwind.config.js

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          floresta: '#2D5016',   // primária — CTAs, header
          salva:    '#4A7C3F',   // hover, links
          menta:    '#8FBC8F',   // backgrounds suaves
          claro:    '#D4EDDA',   // badges, highlights
        },
        bege: {
          natureza: '#F5F0E8',   // background principal
          escuro:   '#E8E0D0',   // bordas, divisores
        },
        dourado: {
          suave:    '#C9A84C',   // acentos sofisticados
          claro:    '#E8D48F',   // hover do dourado
        },
        cinza: {
          texto:    '#1C1C1C',   // texto principal
          medio:    '#6B7280',   // texto secundário
          claro:    '#F9FAFB',   // backgrounds alternativos
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':  ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'title': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'subtitle': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'card': '12px',
        'btn':  '8px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(45, 80, 22, 0.08)',
        'card-hover': '0 8px 40px rgba(45, 80, 22, 0.16)',
        'btn': '0 2px 8px rgba(45, 80, 22, 0.24)',
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
    },
  },
  plugins: [],
}
```

---

## Mock Data — Imóveis (para /data/imoveis.json)

```json
[
  {
    "id": "1",
    "slug": "casa-4-quartos-alphaville-bauru",
    "titulo": "Casa Alto Padrão em Alphaville",
    "preco": 1850000,
    "tipo": "Casa",
    "status": "Disponível",
    "badge": "Destaque",
    "cidade": "Bauru",
    "bairro": "Alphaville",
    "area": 320,
    "quartos": 4,
    "banheiros": 4,
    "vagas": 3,
    "descricao": "Linda casa em condomínio fechado com amplo jardim, piscina e espaço gourmet. Perfeita para famílias que valorizam qualidade de vida e segurança.",
    "imagens": ["/images/imovel-1-a.jpg", "/images/imovel-1-b.jpg"],
    "diferenciais": ["Piscina", "Jardim amplo", "Espaço gourmet", "Condomínio fechado"]
  },
  {
    "id": "2",
    "slug": "apartamento-3-quartos-centro-bauru",
    "titulo": "Apartamento Moderno no Centro",
    "preco": 680000,
    "tipo": "Apartamento",
    "status": "Disponível",
    "badge": "Novo",
    "cidade": "Bauru",
    "bairro": "Centro",
    "area": 145,
    "quartos": 3,
    "banheiros": 2,
    "vagas": 2,
    "descricao": "Apartamento com acabamento premium, vista privilegiada e localização central. Ideal para quem busca praticidade sem abrir mão do conforto.",
    "imagens": ["/images/imovel-2-a.jpg", "/images/imovel-2-b.jpg"],
    "diferenciais": ["Varanda gourmet", "2 vagas", "Portaria 24h", "Academia"]
  },
  {
    "id": "3",
    "slug": "terreno-condominio-bauru",
    "titulo": "Terreno em Condomínio de Alto Padrão",
    "preco": 420000,
    "tipo": "Terreno",
    "status": "Disponível",
    "badge": null,
    "cidade": "Bauru",
    "bairro": "Jardim Europa",
    "area": 600,
    "quartos": null,
    "banheiros": null,
    "vagas": null,
    "descricao": "Terreno plano em condomínio fechado com infraestrutura completa. Oportunidade única para construir a casa dos seus sonhos.",
    "imagens": ["/images/imovel-3-a.jpg"],
    "diferenciais": ["Plano", "Condomínio fechado", "Infraestrutura completa"]
  }
]
```
