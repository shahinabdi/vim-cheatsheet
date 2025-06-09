# 🚀 Vim C IDE Interactive Cheatsheet

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://vifc.netlify.app)
[![GitHub Stars](https://img.shields.io/github/stars/shahinabdi/vim-cheatsheet?style=for-the-badge&logo=github)](https://github.com/shahinabdi/vim-cheatsheet/stargazers)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

**An interactive, modern cheatsheet for mastering Vim as a C development IDE**

[📖 View Demo](https://vifc.netlify.app) • [🐛 Report Bug](https://github.com/shahinabdi/vim-cheatsheet/issues) • [💡 Request Feature](https://github.com/shahinabdi/vim-cheatsheet/issues/new)

</div>

## ✨ Features

### 🎯 **Interactive Learning**
- **10 organized pages** covering essential Vim commands
- **Keyboard navigation** with arrow keys (← →)
- **Visual categorization** with color-coded sections
- **Responsive design** for desktop and mobile

### 🛠️ **C Development Focus**
- **Native Vim features** for text editing and navigation
- **Plugin integrations** (NERDTree, CtrlP, LSP)
- **Custom mappings** for C development workflow
- **Build and debug shortcuts** (F5, F6)

### 🎨 **Modern UI/UX**
- **Dark theme** optimized for developers
- **Smooth animations** and hover effects
- **Professional typography** with syntax highlighting
- **Glassmorphism design** elements

### 📱 **Developer Experience**
- **TypeScript** for type safety
- **Modular architecture** for easy maintenance
- **Performance optimized** with React best practices
- **SEO friendly** and accessible

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/shahinabdi/vim-cheatsheet.git
cd vim-cheatsheet

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
# 🔥 Start development server
npm run dev

# 🏗️ Build for production
npm run build

# 👀 Preview production build
npm run preview

# 🔍 Run linting
npm run lint

# 🧹 Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
vim-cheatsheet/
├── 📁 src/
│   ├── 📁 components/          # React components
│   │   ├── VimCheatsheet.tsx   # Main app component
│   │   ├── Header.tsx          # App header
│   │   ├── NavigationTab.tsx   # Tab navigation
│   │   ├── PageContent.tsx     # Page display
│   │   ├── Section.tsx         # Command sections
│   │   ├── CommandItem.tsx     # Individual commands
│   │   ├── NavigationControls.tsx
│   │   ├── Footer.tsx
│   │   └── GitHubProfile.tsx   # Contribution section
│   ├── 📁 data/
│   │   └── pagesData.ts        # All cheatsheet content
│   ├── 📁 types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Root component
│   └── main.tsx               # Entry point
├── 📁 public/                 # Static assets
├── 📄 index.html              # HTML template
├── 📄 package.json            # Dependencies
├── 📄 tsconfig.json           # TypeScript config
├── 📄 vite.config.ts          # Vite configuration
└── 📄 netlify.toml            # Deployment config
```

## 🎯 Usage Guide

### Navigation
- **Arrow Keys**: Use ← → to navigate between pages
- **Tab Buttons**: Click on colored tabs to jump to specific pages
- **Dot Navigation**: Click dots at bottom for quick page access

### Command Categories

| Page | Content | Type |
|------|---------|------|
| 🧭 **Navigation** | Cursor movement, jumping, marks | Native |
| 📝 **Text Objects** | Advanced text manipulation | Native |
| 🔍 **Search & Replace** | Pattern matching, substitution | Native |
| 📁 **Buffers & Windows** | File and window management | Native |
| 🌲 **NERDTree** | File explorer commands | Plugin |
| 🎯 **CtrlP** | Fuzzy file finding | Plugin |
| 🧠 **LSP** | Language server features | Plugin |
| ⚙️ **Custom Mappings** | C development shortcuts | Custom |
| ⚡ **Advanced** | Macros, registers, folding | Native |
| 🛠️ **Quick Commands** | Help, debugging, operations | Native |

## 🛠️ Technology Stack

### Frontend
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Lucide React](https://lucide.dev/)** - Icons

### Development
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

### Deployment
- **[Netlify](https://netlify.com/)** - Hosting and CDN
- **[GitHub Pages](https://pages.github.com/)** - Alternative hosting

## 🚀 Deployment

### Contributing via Pull Request (Recommended)

To contribute to the live site, follow these steps:

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/vim-cheatsheet.git
   cd vim-cheatsheet
   ```
3. **Create your feature branch**:
   ```bash
   git checkout -b feature/your-amazing-feature
   # or
   git checkout -b fix/bug-description
   ```
4. **Make your changes** and test locally:
   ```bash
   npm install
   npm run dev
   npm run build  # Test production build
   ```
5. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Add: your descriptive commit message"
   git push origin feature/your-amazing-feature
   ```
6. **Create Pull Request** on GitHub with:
   - Clear description of changes
   - Screenshots (if UI changes)
   - Reference any related issues

### Manual Deployment (Your Own Copy)

To deploy your own version:

```bash
# Build the project
npm run build

# Option 1: Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# Option 2: Deploy to Vercel
npm install -g vercel
vercel --prod

# Option 3: Upload dist/ folder to any static hosting
# (GitHub Pages, Surge.sh, etc.)
```

## 🤝 Contributing

We love contributions! Here's how you can help:

### 🎯 Ways to Contribute

- 🐛 **Report bugs** or suggest improvements
- 📝 **Add new Vim commands** or correct descriptions
- 🎨 **Improve UI/UX** design and animations
- 🔧 **Add plugin integrations** for popular Vim plugins
- 🌍 **Translate** to other languages
- 📚 **Improve documentation**

### 📋 Contribution Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes and test thoroughly
4. **Commit** with clear messages: `git commit -m 'Add amazing feature'`
5. **Push** to your fork: `git push origin feature/amazing-feature`
6. **Open** a Pull Request with detailed description

### 🏗️ Development Guidelines

- **Follow TypeScript** best practices
- **Write clear, descriptive** commit messages
- **Test your changes** across different browsers
- **Follow existing** code style and patterns
- **Update documentation** if needed

## 📝 Adding New Content

### Adding Commands

Edit `src/data/pagesData.ts`:

```typescript
{
  title: "Your Section",
  commands: [
    { key: "your-command", desc: "Command description" },
    // Add more commands...
  ]
}
```

### Adding New Pages

1. **Add page data** in `pagesData.ts`
2. **Import appropriate icons** from Lucide React
3. **Choose color scheme** for the page
4. **Test navigation** and responsiveness

## 🎨 Customization

### Themes
The app uses Tailwind CSS. To customize:

```css
/* Add to src/index.css */
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Adding Features
- **New command types**: Extend `CommandType` interface
- **New sections**: Add to `SectionType` interface  
- **New pages**: Follow existing page structure

## 📊 Performance

### Metrics
- **Lighthouse Score**: 95+ on all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Bundle Size**: < 500KB gzipped

### Optimizations
- **Code splitting** with React.lazy
- **Image optimization** with modern formats
- **CSS purging** with Tailwind
- **Tree shaking** with Vite

## 🐛 Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**TypeScript Errors**
```bash
# Check types
npm run type-check
# Fix common issues
npm run lint:fix
```

**Deployment Issues**
- Verify `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` are set
- Check build command in `netlify.toml`
- Ensure `dist/` folder is generated

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Vim Community](https://www.vim.org/)** - For the amazing editor
- **[Plugin Authors](https://vimawesome.com/)** - For incredible Vim plugins
- **[React Team](https://reactjs.org/community/team.html)** - For the excellent framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For beautiful, utility-first CSS
- **[Lucide](https://lucide.dev/)** - For clean, customizable icons

## 🔗 Related Projects

- 🛠️ **[Vim C IDE Config](https://github.com/shahinabdi/vim-c-ide-config)** - Complete Vim setup for C development
- ⚙️ **[Neovim Config](https://github.com/shahinabdi/nvim-config)** - Modern Neovim configuration
- 📚 **[Awesome Vim](https://github.com/mhinz/vim-galore)** - Everything you need to know about Vim

## 📈 Project Stats

![GitHub language count](https://img.shields.io/github/languages/count/shahinabdi/vim-cheatsheet)
![GitHub top language](https://img.shields.io/github/languages/top/shahinabdi/vim-cheatsheet)
![GitHub code size](https://img.shields.io/github/languages/code-size/shahinabdi/vim-cheatsheet)
![GitHub last commit](https://img.shields.io/github/last-commit/shahinabdi/vim-cheatsheet)

---

<div align="center">

**Made with ❤️ by [Shahin Abdi](https://github.com/shahinabdi)**

[⭐ Star this repo](https://github.com/shahinabdi/vim-cheatsheet/stargazers) • [🍴 Fork it](https://github.com/shahinabdi/vim-cheatsheet/fork) • [📢 Share it](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20Vim%20cheatsheet!&url=https://github.com/shahinabdi/vim-cheatsheet)

**If this project helped you, please consider giving it a ⭐!**

</div>