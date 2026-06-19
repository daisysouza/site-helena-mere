# 🗺️ Guia de Execução — Site Helena Mere

## Visão Geral do Fluxo

```
ChatGPT          Stitch            VS Code + Claude Code
   │                │                      │
   ▼                ▼                      ▼
Briefing  →   Design visual  →   Código Next.js pronto
  PRD           (telas)            para publicar
```

---

## ✅ Checklist de Execução

### FASE 1 — Planejamento (ChatGPT)
- [ ] Abrir chatgpt.com
- [ ] Colar o Prompt 1 (identidade visual) do arquivo 02-prompts-fluxo.md
- [ ] Colar o Prompt 2 (estrutura de páginas)
- [ ] Salvar as respostas

### FASE 2 — Design (Stitch)
- [ ] Acessar stitch.withgoogle.com
- [ ] Colar o prompt do Passo 3
- [ ] Pedir ajustes se necessário
- [ ] Exportar o ZIP das telas
- [ ] Descompactar na pasta `/prototype`

### FASE 3 — Código (VS Code + Claude Code)
- [ ] Criar pasta `helena-mere-site/`
- [ ] Criar subpastas `context/` e `prototype/`
- [ ] Copiar os arquivos .md de contexto para `context/`
- [ ] Jogar o ZIP descompactado em `prototype/`
- [ ] Abrir VS Code na pasta
- [ ] Abrir Claude Code (Ctrl+Shift+P → "Claude Code")
- [ ] Colar o prompt do Passo 4
- [ ] Aguardar geração e revisar
- [ ] Rodar `npm run dev` para visualizar
- [ ] Usar prompts de refinamento conforme necessário

### FASE 4 — SEO
- [ ] Colar o prompt do Passo 5 no Claude Code
- [ ] Verificar metadata em cada página
- [ ] Testar com Google Rich Results Test

### FASE 5 — Segurança
- [ ] Colar o prompt do Passo 6 no Claude Code
- [ ] Revisar o relatório gerado
- [ ] Confirmar headers no next.config.js

### FASE 6 — Deploy
- [ ] Criar conta na Vercel (vercel.com)
- [ ] Conectar repositório GitHub
- [ ] `vercel --prod`
- [ ] Configurar domínio personalizado (se tiver)

---

## 🛠️ Comandos Úteis

```bash
# Criar projeto Next.js
npx create-next-app@latest helena-mere-site \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

# Instalar dependências
cd helena-mere-site
npm install lucide-react

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Deploy na Vercel
npx vercel --prod
```

---

## 🔗 Links Importantes

| Ferramenta | URL |
|---|---|
| ChatGPT | https://chatgpt.com |
| Stitch (Google) | https://stitch.withgoogle.com |
| VS Code | https://code.visualstudio.com |
| Claude Code | (extensão no VS Code) |
| Vercel | https://vercel.com |
| Google Fonts | https://fonts.google.com |
| Lucide Icons | https://lucide.dev |
| Pinterest (referências) | https://pinterest.com |

---

## ⚠️ Erros Comuns a Evitar

1. **Não dar referência visual** → sempre leve imagens de referência ao Stitch
2. **Ignorar SEO** → use o agente de SEO antes de publicar
3. **Publicar sem segurança** → rode o agente de segurança primeiro
4. **Imagens sem otimização** → sempre use `next/image`
5. **Sem .env.local** → nunca coloque dados sensíveis no código
