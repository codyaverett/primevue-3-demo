# Architecture Documentation

## System Architecture

### High-Level Overview

The PrimeVue 3 Demo Site follows a component-based architecture using Vue 3's Composition API, with a focus on modularity, reusability, and maintainability.

```
┌─────────────────────────────────────────────────┐
│              Browser (Client)                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │         Vue 3 Application                │  │
│  │                                          │  │
│  │  ┌────────────────────────────────────┐ │  │
│  │  │      App.vue (Root)                │ │  │
│  │  │  ┌──────────────────────────────┐  │ │  │
│  │  │  │   Layout Components         │  │ │  │
│  │  │  │   - Navbar (Theme Picker)   │  │ │  │
│  │  │  │   - Sidebar (Navigation)    │  │ │  │
│  │  │  │   - Main Content Area       │  │ │  │
│  │  │  └──────────────────────────────┘  │ │  │
│  │  │  ┌──────────────────────────────┐  │ │  │
│  │  │  │   Router View                │  │ │  │
│  │  │  │   (Component Demo Pages)     │  │ │  │
│  │  │  └──────────────────────────────┘  │ │  │
│  │  └────────────────────────────────────┘ │  │
│  │                                          │  │
│  │  ┌────────────────────────────────────┐ │  │
│  │  │   Vue Router                       │ │  │
│  │  │   - Route Definitions              │ │  │
│  │  │   - Navigation Guards              │ │  │
│  │  └────────────────────────────────────┘ │  │
│  │                                          │  │
│  │  ┌────────────────────────────────────┐ │  │
│  │  │   PrimeVue Plugin                  │ │  │
│  │  │   - Component Registration         │ │  │
│  │  │   - Theme Management               │ │  │
│  │  └────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## Core Modules

### 1. Application Entry (main.js)

**Responsibilities:**
- Initialize Vue application
- Register PrimeVue plugin and components
- Configure Vue Router
- Load initial theme
- Mount application to DOM

**Key Operations:**
```javascript
createApp(App)
  .use(PrimeVue)
  .use(router)
  .mount('#app')
```

### 2. Router Module (router/index.js)

**Responsibilities:**
- Define routes for all component demos
- Organize routes by component category
- Handle 404/not found routes
- Implement navigation guards if needed

**Route Structure:**
```
/                          → Home
/form/autocomplete         → AutoComplete Demo
/form/calendar             → Calendar Demo
/button/button             → Button Demo
/data/datatable            → DataTable Demo
...
```

### 3. Layout System

#### Navbar Component
**File:** `src/components/layout/Navbar.vue`

**Responsibilities:**
- Display application branding
- Render theme picker dropdown
- Handle theme switching logic
- Persist theme selection to localStorage

**State Management:**
- Current theme (reactive ref)
- Available themes (constant array)

**Methods:**
- `changeTheme(theme)` - Dynamically load theme CSS
- `loadTheme(themeName)` - Inject theme stylesheet

#### Sidebar Component
**File:** `src/components/layout/Sidebar.vue`

**Responsibilities:**
- Display categorized navigation menu
- Show component count per category
- Highlight active route
- Responsive collapse/expand on mobile

**Data Structure:**
```javascript
{
  categories: [
    {
      label: 'Form Components',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'AutoComplete', to: '/form/autocomplete' },
        ...
      ]
    },
    ...
  ]
}
```

#### MainLayout Component
**File:** `src/components/layout/MainLayout.vue`

**Responsibilities:**
- Compose Navbar, Sidebar, and RouterView
- Handle responsive layout switching
- Manage sidebar visibility state

### 4. Demo Pages

Each component demo page follows a consistent structure:

**File:** `src/views/{category}/{ComponentName}Demo.vue`

**Template Structure:**
```vue
<template>
  <div class="component-demo">
    <!-- Header -->
    <div class="demo-header">
      <h1>{{ componentName }}</h1>
      <p class="description">{{ description }}</p>
    </div>

    <!-- Examples Section -->
    <div class="demo-section">
      <h2>Basic Example</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <!-- Live component demo -->
        </div>
        <div class="demo-code">
          <!-- Code snippet -->
        </div>
      </div>
    </div>

    <!-- Additional Examples -->
    <div class="demo-section">
      <h2>Advanced Features</h2>
      <!-- More examples -->
    </div>

    <!-- API Documentation -->
    <div class="demo-section">
      <h2>API</h2>
      <!-- Props, events, methods tables -->
    </div>
  </div>
</template>
```

**Script Structure:**
```vue
<script setup>
import { ref, reactive } from 'vue'
// Component-specific imports

// Demo data
const sampleData = ref([...])

// Component state
const selectedValue = ref(null)

// Event handlers
const handleEvent = (event) => { ... }
</script>
```

### 5. Theme System

#### Theme Management Composable
**File:** `src/composables/useTheme.js`

**Exports:**
```javascript
export function useTheme() {
  const currentTheme = ref('lara-light-blue')

  const themes = [
    { name: 'lara-light-blue', label: 'Lara Light Blue' },
    { name: 'lara-dark-blue', label: 'Lara Dark Blue' },
    // ... more themes
  ]

  const changeTheme = (theme) => {
    // Remove old theme link
    // Add new theme link
    // Save to localStorage
  }

  const loadSavedTheme = () => {
    // Load from localStorage
    // Apply theme
  }

  return { currentTheme, themes, changeTheme, loadSavedTheme }
}
```

#### Theme Loading Strategy

1. **Initial Load:**
   - Check localStorage for saved theme
   - Default to 'lara-light-blue' if none found
   - Inject theme CSS into document head

2. **Theme Switch:**
   - Remove existing theme `<link>` element
   - Create new `<link>` element with new theme
   - Update localStorage
   - Update reactive state

3. **Theme Files:**
   - Imported from PrimeVue package
   - Path pattern: `primevue/resources/themes/{theme-name}/theme.css`

### 6. Shared Components

#### CodeBlock Component
**File:** `src/components/shared/CodeBlock.vue`

**Responsibilities:**
- Display formatted code snippets
- Syntax highlighting
- Copy to clipboard functionality

#### DemoCard Component
**File:** `src/components/shared/DemoCard.vue`

**Responsibilities:**
- Wrapper for demo examples
- Consistent card styling
- Collapsible code section

#### ApiTable Component
**File:** `src/components/shared/ApiTable.vue`

**Responsibilities:**
- Display component API documentation
- Tables for props, events, methods
- Type highlighting

## Data Flow

### Theme Switching Flow

```
User clicks theme → Navbar.changeTheme()
                         ↓
                 Remove old <link> tag
                         ↓
                 Create new <link> tag
                         ↓
                 Update localStorage
                         ↓
                 Update reactive state
                         ↓
                 Vue re-renders with new theme
```

### Navigation Flow

```
User clicks sidebar item → Router.push()
                               ↓
                         Route guard (if any)
                               ↓
                         Load component
                               ↓
                         Render demo page
                               ↓
                         Highlight active item
```

## State Management

### Local Component State
- Each demo page manages its own state
- Uses Vue 3 `ref()` and `reactive()`
- No global state management needed (Vuex/Pinia)

### Shared State
- Theme preference: managed by composable + localStorage
- Router state: managed by Vue Router

## Performance Optimizations

### 1. Code Splitting
- Route-level code splitting via dynamic imports
- Each demo page is a separate chunk
- Loads only when user navigates to that route

### 2. Lazy Loading
- Demo pages lazy loaded: `component: () => import('./views/...')`
- PrimeVue components loaded on-demand

### 3. Asset Optimization
- Theme CSS loaded dynamically (only active theme)
- Icons loaded via PrimeIcons package
- Images optimized and served from public directory

### 4. Caching
- Theme preference cached in localStorage
- Browser caches static assets
- Service worker (optional future enhancement)

## Styling Strategy

### Global Styles
**File:** `src/assets/styles/global.css`
- App-wide layout styles
- Typography
- Color variables
- Spacing utilities

### Component Styles
- Scoped styles in each `.vue` file
- Uses PrimeFlex utility classes
- Custom styles for demo-specific needs

### Theme Styles
- Loaded dynamically from PrimeVue
- Override theme variables if needed
- Consistent with PrimeVue design system

## Build & Deployment

### Development Build
- Vite dev server with HMR
- Source maps enabled
- Fast refresh for Vue components

### Production Build
- Minification and tree-shaking
- CSS extraction and optimization
- Chunk splitting for optimal loading
- Asset hashing for cache busting

### Build Output
```
dist/
├── assets/
│   ├── index-[hash].js      # Main bundle
│   ├── [component]-[hash].js # Route chunks
│   └── index-[hash].css      # Styles
├── index.html
└── ...
```

## Security Considerations

1. **No Backend**: Static site, no API calls or data persistence (except localStorage)
2. **XSS Prevention**: Vue's template escaping prevents XSS
3. **CSP**: Content Security Policy can be added via meta tags
4. **Dependencies**: Regular updates to patch vulnerabilities

## Extensibility

### Adding New Components
1. Create demo page in appropriate category folder
2. Add route to router configuration
3. Add navigation item to sidebar
4. Follow existing demo page template

### Adding New Themes
1. Ensure theme exists in PrimeVue
2. Add theme to themes array in composable
3. Theme will automatically appear in picker

### Adding New Features
1. Create composable for shared logic
2. Add to appropriate component
3. Update documentation

## Testing Strategy (Future)

### Unit Tests
- Test composables (theme switching logic)
- Test utility functions
- Test individual components in isolation

### Integration Tests
- Test navigation flow
- Test theme switching across pages
- Test responsive behavior

### E2E Tests
- Test complete user journeys
- Test all component demos load correctly
- Test theme persistence

## Documentation Standards

### Code Comments
- JSDoc for functions and composables
- Inline comments for complex logic
- Component prop descriptions

### File Headers
- Purpose of file
- Key exports
- Dependencies

### Demo Pages
- Component description
- Usage examples
- API documentation
- Best practices
