# PrimeVue 3 Comprehensive Demo Site

## Overview

This is a comprehensive demonstration site showcasing all components available in PrimeVue 3. The site serves as both a component library showcase and a practical reference for developers implementing PrimeVue in their projects.

## Features

- **Complete Component Coverage**: Demos for all 80+ PrimeVue components
- **Dynamic Theme Switching**: Live theme picker in navbar supporting multiple PrimeVue themes
- **Interactive Examples**: Live, editable examples for each component
- **Code Snippets**: Copy-paste ready code for every component
- **Comprehensive Documentation**: Props, events, and usage patterns for each component
- **Responsive Design**: Mobile-first approach using PrimeFlex
- **Organized Navigation**: Components categorized by function (Form, Data, Panel, etc.)
- **Theme Persistence**: Selected theme saved in localStorage

## Tech Stack

- **Vue 3**: Latest Vue.js framework with Composition API
- **Vite**: Next-generation frontend tooling
- **PrimeVue 3.53.1**: UI component library
- **Vue Router 4**: Client-side routing
- **PrimeIcons**: Icon library
- **PrimeFlex 4**: CSS utility library for responsive design
- **pnpm**: Fast, disk space efficient package manager

## Component Categories

### 1. Form Components (25 components)
Input controls, selectors, and form utilities

### 2. Button Components (4 components)
Button variants and button groups

### 3. Data Components (10 components)
Tables, lists, trees, and data visualization

### 4. Panel Components (10 components)
Containers and layout components

### 5. Overlay Components (7 components)
Dialogs, popups, and overlays

### 6. File Components (1 component)
File upload functionality

### 7. Menu Components (9 components)
Navigation and menu components

### 8. Chart Components (1 component)
Chart.js integration

### 9. Messages Components (2 components)
User feedback and notifications

### 10. Media Components (3 components)
Image galleries and carousels

### 11. Misc Components (15 components)
Avatars, badges, progress indicators, and more

## Project Structure

```
primevue-3-demo/
├── docs/                    # Project documentation
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images, styles, etc.
│   ├── components/         # Reusable components
│   │   ├── layout/        # Layout components (Navbar, Sidebar)
│   │   └── shared/        # Shared utility components
│   ├── views/             # Page components for each demo
│   │   ├── form/          # Form component demos
│   │   ├── button/        # Button component demos
│   │   ├── data/          # Data component demos
│   │   ├── panel/         # Panel component demos
│   │   ├── overlay/       # Overlay component demos
│   │   ├── file/          # File component demos
│   │   ├── menu/          # Menu component demos
│   │   ├── chart/         # Chart component demos
│   │   ├── messages/      # Message component demos
│   │   ├── media/         # Media component demos
│   │   ├── misc/          # Misc component demos
│   │   └── Home.vue       # Landing page
│   ├── router/            # Vue Router configuration
│   ├── composables/       # Composition API utilities
│   ├── utils/             # Helper functions
│   ├── App.vue            # Root component
│   └── main.js            # Application entry point
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js 18+ (currently using v22.0.0)
- pnpm 10+

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Visit `http://localhost:5173` to view the application.

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Usage Guide

1. **Navigate**: Use the sidebar to browse component categories
2. **View Examples**: See live, interactive examples on each component page
3. **Copy Code**: Click code snippets to copy implementation examples
4. **Switch Themes**: Use the theme picker in the top navbar to try different themes
5. **Test Responsive**: Resize your browser to see responsive behavior

## Available Themes

The demo supports all official PrimeVue themes:
- Lara Light / Dark (Default)
- Material Light / Dark
- Bootstrap Light / Dark
- MD Light / Dark
- Fluent Light / Dark
- Tailwind Light / Dark
- Saga / Vela / Arya

## Contributing

This is a demonstration project. For PrimeVue contributions, visit the [official PrimeVue repository](https://github.com/primefaces/primevue).

## License

MIT

## Resources

- [PrimeVue Documentation](https://primevue.org/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
