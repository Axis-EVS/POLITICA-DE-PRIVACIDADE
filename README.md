# Guesbay — Site de Vendas & Divulgação (GitHub Pages)

Esta pasta contém o site estático completo de apresentação e vendas do **Guesbay**, pronto para ser publicado no **GitHub Pages**.

---

## 📁 Estrutura dos Arquivos

- `index.html`: Página principal com proposta de valor, recursos, compartilhamento de equipes, dashboards, tabela de planos, plataformas e FAQ.
- `styles.css`: Estilização moderna em tema escuro (Dark Obsidian + Verde Esmeralda `#0B4627` / `#10B981`), glassmorphism e responsividade total.
- `script.js`: Menu mobile, accordion de dúvidas frequentes, animações e redirecionamento inteligente de deep link para Google Play.
- `assets/`: Logotipos e ícones oficiais da marca Guesbay.
- `.nojekyll`: Garante que o GitHub Pages sirva todos os arquivos estáticos sem processamento Jekyll.

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

### Opção 1: Publicar a partir de um repositório dedicado no GitHub
1. Crie um novo repositório no seu GitHub (ex: `guesbay-landing` ou `guesbay-site`).
2. Envie os arquivos desta pasta (`index.html`, `styles.css`, `script.js`, `assets/`, `.nojekyll`) para a branch principal (`main`).
3. No GitHub, vá em **Settings** > **Pages** (no menu lateral esquerdo).
4. Em **Build and deployment** > **Source**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Clique em **Save**. Em 1 a 2 minutos seu site estará no ar na URL do GitHub Pages (ex: `https://seu-usuario.github.io/guesbay-landing/`).

### Opção 2: Publicar dentro do próprio repositório existente
1. No repositório, vá em **Settings** > **Pages**.
2. Escolha a branch e a pasta de publicação (ou use uma branch `gh-pages`).

---

## 🔗 Links Oficiais Integrados

- **Web App**: [https://guesbay.axisevs.com/](https://guesbay.axisevs.com/)
- **Google Play Store (Android)**: `https://play.google.com/store/apps/details?id=com.guesbay.app`
- **Deep Link Android**: `market://details?id=com.guesbay.app`
