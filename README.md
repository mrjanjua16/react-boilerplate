# Vite React Boilerplate

A modern, production-ready boilerplate for React applications using Vite.

## Features

- 🚀 Vite for lightning-fast development
- ⚛️ React 18 with TypeScript
- 📦 PNPM for efficient package management
- 🔐 Authentication state management with Zustand
- 🛣️ React Router for navigation
- 🔄 Swagger API integration
- 🎨 TailwindCSS for styling
- 📁 Well-organized folder structure
- 🐶 Husky for pre-commit hooks
- 🧹 Prettier for code formatting

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_api_url
```

## Folder Structure

```
```
└── 📁src
    └── 📁api
        └── axios.instance.ts
        └── 📁generated
            └── index.ts
        └── 📁hooks
            └── useApi.ts
        └── index.ts
        └── README.md
        └── 📁types
            └── index.ts
    └── 📁components
        └── 📁forms
            └── README.md
        └── 📁layout
            └── README.md
        └── README.md
        └── 📁ui
            └── README.md
    └── 📁constants
        └── README.md
    └── 📁features
        └── README.md
    └── 📁hooks
        └── README.md
    └── 📁lib
        └── README.md
    └── 📁pages
        └── 📁auth
            └── Login.tsx
            └── Register.tsx
        └── 📁dashboard
            └── Dashboard.tsx
            └── Profile.tsx
    └── 📁routes
        └── 📁guards
            └── PrivateRoute.tsx
        └── index.tsx
        └── private.routes.tsx
        └── public.routes.tsx
    └── 📁store
        └── auth.store.ts
    └── 📁styles
        └── index.css
    └── 📁utils
        └── utils.ts
    └── App.tsx
    └── main.tsx
    └── vite-env.d.ts
```
```
