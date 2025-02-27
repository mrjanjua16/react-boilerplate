# Vite React Boilerplate

A modern, production-ready boilerplate for React applications using Vite.

## Features

- 🚀 Vite for lightning-fast development
- ⚛️ React 18 with TypeScript
- 📦 PNPM for efficient package management
- 🔐 Authentication state management with Zustand
- 🛣️ React Router for navigation
- 🔒 Private routes and route guards
- 🔄 Swagger API integration
- 🌐 Axios for HTTP requests
- 📡 Basic API receptors
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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) [Year] [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
