# 🏢 Site-Plataforma Institucional Helena Mêre

### 🌐 Acesse a aplicação em produção

🔗 https://site-helena-mere.vercel.app/

Plataforma institucional de desenvolvida para **Helena Mêre**, projetada para fortalecer sua presença digital, apresentar imóveis de forma estratégica e otimizar a geração de leads por meio de conversão direta via WhatsApp.

---

## ⚡ Performance & Core Web Vitals

Desenvolvido com forte foco em **performance** e **eficiência de renderização**, utilizando **geração estática com Next.js**, **assets otimizados**, **imagens responsivas** e o **mínimo de JavaScript no client-side**.

- **Carregamento abaixo de 1 segundo** em conexões padrão.
- **Layout estável (CLS zero)**, eliminando deslocamentos perceptíveis de tela.
- **SEO & UX integrados**, unindo engenharia frontend com foco em conversão comercial.

---

## 🚀 Principais Destaques

- **Vitrine Dinâmica:** Filtros inteligentes por tipo, preço, localização e dormitórios.
- **Foco em Lead Gen:** CTAs estratégicos para WhatsApp e formulários otimizados.
- **Páginas Estáticas (SSG/ISR):** Detalhes dos imóveis carregam instantaneamente.
- **SEO Avançado:** Estrutura completa de metadados, Open Graph e JSON-LD.
- **Mobile-First:** Experiência de navegação fluida em smartphones e tablets.
- **Dark Mode:** Suporte nativo a tema claro/escuro via Tailwind.

---

## 🛠️ Stack Tecnológica

- **Next.js 16 (App Router) + React 19:**
- **TypeScript:** Tipagem estática rigorosa para maior manutenibilidade.
- **Tailwind CSS v4:**
- **shadcn/ui & Embla:** Componentes totalmente acessíveis (Radix UI) e carrosséis leves de toque.

---

## 📐 Arquitetura do Projeto

Estrutura limpa e orientada a componentes, separando responsabilidades e facilitando a escalabilidade:

app/ # Roteamento baseado em arquivos (App Router) e páginas
components/ # Componentes atômicos de interface e blocos de negócio
lib/ # Configurações globais, clientes de API e utilitários

### Componentes Chave:

- 📱 Navegação responsiva com estados híbridos.
- 🏠 Cards de imóveis otimizados com `next/image`.
- ✉️ Formulários de captação blindados contra submissões duplicadas.
- 💬 Botão flutuante integrado à API do WhatsApp.

---

## ⚙️ Foco de Engenharia

- **Otimização de Performance:** Divisão de código automática e eliminação de CSS não utilizado.
- **Arquitetura Limpa:** Código desacoplado e funções utilitárias puras.
- **Acessibilidade:** Tags semânticas e conformidade inicial com padrões WCAG.

---

## 📦 Deploy & CI/CD

O deploy é gerenciado de forma automatizada na plataforma **Vercel** através de pipelines de integração contínua vinculados ao repositório do **GitHub**, disparados a cada nova atualização na branch principal.
