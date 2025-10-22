# PrimeVue 3 Comprehensive Demo Site

A comprehensive demonstration site showcasing all 87 PrimeVue 3 components with live examples, code snippets, and complete API documentation.

## Features

- **Complete Component Coverage**: Demos for all 87 PrimeVue components
- **Dynamic Theme Switching**: Live theme picker supporting 30+ themes
- **Interactive Examples**: Live, editable examples for each component
- **Code Snippets**: Copy-paste ready code for every component
- **Comprehensive Documentation**: Props, events, and usage patterns
- **Responsive Design**: Mobile-first approach using PrimeFlex
- **Organized Navigation**: Components categorized by function

## Tech Stack

- Vue 3.5.22
- Vite 7.1.11
- PrimeVue 3.53.1
- Vue Router 4.6.3
- PrimeIcons 7.0.0
- PrimeFlex 4.0.0
- pnpm 10.19.0

## Getting Started

### Prerequisites

- Node.js 18+
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

## Project Structure

```
primevue-3-demo/
├── docs/                   # Comprehensive documentation
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Sidebar, MainLayout
│   │   └── shared/        # CodeBlock, DemoCard, ApiTable
│   ├── composables/       # useTheme composable
│   ├── router/            # All 87 component routes
│   ├── views/             # Component demo pages (11 categories)
│   └── assets/            # Styles and static files
└── ...
```

## Component Categories (87 Total)

- **Form** (25): Input controls and selectors
- **Button** (4): Button variants
- **Data** (10): Tables, trees, and data displays
- **Panel** (11): Containers and layouts
- **Overlay** (7): Dialogs and popups
- **File** (1): File upload
- **Menu** (9): Navigation components
- **Chart** (1): Data visualization
- **Messages** (2): Notifications
- **Media** (3): Image galleries
- **Misc** (15): Utility components

## Available Themes

30+ PrimeVue themes including:
- Lara Light/Dark (Blue, Indigo, Purple, Teal)
- Bootstrap Light/Dark
- Material Design
- Saga, Vela, Arya themes

## Documentation

See `docs/` directory for detailed documentation:
- Architecture
- Component list
- Theme system
- Implementation plan

## Resources

- [PrimeVue Documentation](https://primevue.org/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

## License

MIT
