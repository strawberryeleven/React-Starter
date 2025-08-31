# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Intern Starter Template 🚀

A comprehensive React TypeScript starter template designed specifically for interns and junior developers. This template provides a solid foundation for learning modern web development practices while building scalable applications.

## 📚 **NEW INTERNS: Start Here!**
👉 **[Quick Setup Guide](./SETUP.md)** - Get up and running in 5 minutes  
👉 **[Complete Intern's Guide](./INTERN_GUIDE.md)** - Step-by-step learning guide with resources  
👉 **[Contributing Guide](./CONTRIBUTING.md)** - How to contribute to this project  

## 🎯 Purpose

This template serves as an educational platform that demonstrates:
- Modern React development with TypeScript
- Component-based architecture
- Responsive design with Bootstrap
- Industry best practices
- Clean, maintainable code structure

## 🛠️ Technologies Used

- **React 18** - Latest React with functional components and hooks
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework for responsive design
- **Reactstrap** - Bootstrap components for React

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone this repository or use it as a template
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Header.tsx      # Navigation header
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── ExamplePage.tsx # Example demonstrations
│   └── AboutPage.tsx   # About the template
├── assets/             # Static assets
├── App.tsx             # Main application component
├── App.css             # Application styles
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎓 Learning Objectives

### Beginner Level
- Understanding React functional components
- Working with props and state
- Basic hooks (useState, useEffect)
- JSX syntax and TypeScript basics

### Intermediate Level
- React Router for navigation
- Event handling and form management
- Component composition
- Responsive design principles

### Advanced Level
- TypeScript interfaces and types
- Performance optimization
- Testing strategies
- Deployment practices

## 📚 What's Included

### Components
- **Header**: Responsive navigation with React Router integration
- **HomePage**: Hero section, feature cards, and statistics
- **ExamplePage**: Interactive examples demonstrating React patterns
- **AboutPage**: Template information and learning path

### Features
- Fully responsive design
- TypeScript integration
- React Router setup
- Bootstrap styling
- Clean code structure
- Comprehensive documentation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Customization

This template is designed to be easily customized:

1. **Styling**: Modify `src/App.css` and `src/index.css`
2. **Components**: Add new components in `src/components/`
3. **Pages**: Create new pages in `src/pages/`
4. **Routes**: Update routes in `src/App.tsx`

## 📈 Next Steps

Once you're comfortable with the template, consider adding:

- State management (Redux Toolkit, Zustand)
- API integration (Axios, React Query)
- Form handling (React Hook Form, Formik)
- Testing (Jest, React Testing Library)
- UI libraries (Material-UI, Chakra UI)
- Authentication (Auth0, Firebase Auth)

## 🤝 Contributing

This template is open for improvements! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your projects built with this template

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Target Audience

- **Interns**: Starting their first web development projects
- **Junior Developers**: Learning React and TypeScript
- **Students**: Working on coursework or personal projects
- **Bootcamp Graduates**: Building portfolio projects

## 🌟 Support

If you find this template helpful, please consider:
- Starring the repository
- Sharing it with fellow developers
- Contributing to its improvement

---

**Happy Coding!** 🎉

Built with ❤️ for the developer community

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
