# Meridian — Professional Website

Website profissional construído com **React 19**, **Vite** e **CSS Modules**,
usando "Meridian" (um produto fictício de agendamento para times distribuídos
em vários fusos horários) como conteúdo de exemplo.

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

## 🚀 Deploy no GitHub Pages

1. Instale as dependências:

```bash
npm install
```

2. Atualize o `package.json` com a sua URL do GitHub Pages:

```json
{
  "homepage": "https://SEU_USERNAME.github.io/SEU_REPOSITORIO"
}
```

3. Faça o build:

```bash
npm run build
```

4. Deploy:

```bash
npm run deploy
```

5. Configure o GitHub Pages:
   - Vá em **Settings > Pages**
   - Source: **Deploy from branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**

## 📁 Estrutura

```
src/
├── components/
│   ├── ui/          # Button, Card, Badge, Container, Section, Title,
│   │                #   Input, Modal, Tooltip, Spinner, Toast, ProgressBar
│   ├── layout/       # Header, Footer, Sidebar, Navigation
│   └── features/     # Hero, Features, About, Stats, Pricing,
│                      #   Testimonials, FAQ, Contact
├── hooks/            # useTheme, useLocalStorage, useMediaQuery,
│                      #   useScrollPosition, useOnScreen
├── context/          # ThemeContext, AppContext
├── utils/            # helpers.js, constants.js
├── styles/           # variables.css, global.css, animations.css
├── pages/            # HomePage.jsx, ComponentsShowcase.jsx
├── App.jsx
├── main.jsx
└── index.css
```

Cada componente em `ui/` segue o padrão:

```
Button/
├── Button.jsx          # componente + PropTypes + JSDoc
├── Button.module.css   # estilos com escopo local
└── index.js             # export { default } from "./Button"
```

## 🧩 Componentes de UI

| Componente | Recursos |
|---|---|
| `Button` | variantes (primary/secondary/outline/ghost), tamanhos, loading, ícones, fullWidth |
| `Card` | header/body/footer, hover, 4 níveis de elevação |
| `Badge` | variantes de cor, contador, dismissible |
| `Container` | responsivo, max-width configurável (sm/md/lg/xl/full) |
| `Section` | padding configurável, variantes de background |
| `Title` | subtitle, alignment, texto em gradiente |
| `Input` | label, estado de erro, helper text, ícones |
| `Modal` | backdrop, animações, fecha com Esc |
| `Tooltip` | 4 direções (top/bottom/left/right) |
| `Spinner` | tamanhos e cores diferentes |

## ✨ Funcionalidades incluídas

- Dark/Light mode com persistência em `localStorage`
- Smooth scroll para navegação interna
- Contadores animados (Stats) disparados por Intersection Observer
- Animações de entrada ao rolar a página (`data-reveal`)
- Header sticky com efeito de blur
- Menu mobile com animação de slide
- Validação de formulário com feedback visual (Contact)
- Notificações toast
- Carrossel de depoimentos com autoplay
- Barra de progresso de leitura no topo da página
- Acordeão de FAQ com expand/collapse animado

## 🎨 Customização

Edite `src/styles/variables.css` para mudar cores, fontes e espaçamentos —
tudo é controlado por CSS Custom Properties, incluindo o tema claro/escuro
(`[data-theme="light"]`).

## 📦 Build

```bash
npm run build
```

O build final é gerado na pasta `dist/`.
