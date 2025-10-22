# Theme System Documentation

## Overview

The PrimeVue 3 Demo Site implements a comprehensive theme switching system that allows users to dynamically change the visual appearance of all components in real-time. Theme preferences are persisted across sessions using localStorage.

## Available Themes

PrimeVue 3 ships with multiple pre-built themes. Our demo site supports all of them:

### Material Design Themes
- **lara-light-blue** - Default light theme with blue primary color
- **lara-light-indigo** - Light theme with indigo primary color
- **lara-light-purple** - Light theme with purple primary color
- **lara-light-teal** - Light theme with teal primary color
- **lara-dark-blue** - Dark theme with blue primary color
- **lara-dark-indigo** - Dark theme with indigo primary color
- **lara-dark-purple** - Dark theme with purple primary color
- **lara-dark-teal** - Dark theme with teal primary color

### Material Compact
- **material-light** - Material design light theme
- **material-dark** - Material design dark theme

### Bootstrap
- **bootstrap4-light-blue** - Bootstrap 4 inspired light theme
- **bootstrap4-light-purple** - Bootstrap 4 inspired light purple theme
- **bootstrap4-dark-blue** - Bootstrap 4 inspired dark theme
- **bootstrap4-dark-purple** - Bootstrap 4 inspired dark purple theme

### Legacy Themes
- **md-light-indigo** - Material design light indigo
- **md-light-deeppurple** - Material design light deep purple
- **md-dark-indigo** - Material design dark indigo
- **md-dark-deeppurple** - Material design dark deep purple
- **saga-blue** - Saga blue theme
- **saga-green** - Saga green theme
- **saga-orange** - Saga orange theme
- **saga-purple** - Saga purple theme
- **vela-blue** - Vela blue theme (dark)
- **vela-green** - Vela green theme (dark)
- **vela-orange** - Vela orange theme (dark)
- **vela-purple** - Vela purple theme (dark)
- **arya-blue** - Arya blue theme (dark)
- **arya-green** - Arya green theme (dark)
- **arya-orange** - Arya orange theme (dark)
- **arya-purple** - Arya purple theme (dark)

### Premium Themes (if available)
- **fluent-light** - Microsoft Fluent design light
- **tailwind-light** - Tailwind CSS inspired light theme
- And more...

## Architecture

### Theme File Structure

PrimeVue themes are CSS files located in the PrimeVue package:

```
node_modules/primevue/resources/themes/
├── lara-light-blue/
│   └── theme.css
├── lara-dark-blue/
│   └── theme.css
├── material-light/
│   └── theme.css
└── ... (other themes)
```

### Theme Switching Implementation

#### 1. Theme Composable

**File:** `src/composables/useTheme.js`

```javascript
import { ref, onMounted } from 'vue'

export function useTheme() {
  const currentTheme = ref('lara-light-blue')
  const isDark = ref(false)

  const themes = [
    {
      name: 'lara-light-blue',
      label: 'Lara Light Blue',
      type: 'light',
      family: 'lara'
    },
    {
      name: 'lara-dark-blue',
      label: 'Lara Dark Blue',
      type: 'dark',
      family: 'lara'
    },
    {
      name: 'material-light',
      label: 'Material Light',
      type: 'light',
      family: 'material'
    },
    {
      name: 'material-dark',
      label: 'Material Dark',
      type: 'dark',
      family: 'material'
    },
    // ... more themes
  ]

  const changeTheme = (theme) => {
    const themeLink = document.getElementById('app-theme')

    if (themeLink) {
      // Update existing link
      themeLink.href = `/node_modules/primevue/resources/themes/${theme}/theme.css`
    } else {
      // Create new link element
      const newLink = document.createElement('link')
      newLink.id = 'app-theme'
      newLink.rel = 'stylesheet'
      newLink.href = `/node_modules/primevue/resources/themes/${theme}/theme.css`
      document.head.appendChild(newLink)
    }

    currentTheme.value = theme

    // Update dark mode state
    const themeObj = themes.find(t => t.name === theme)
    isDark.value = themeObj?.type === 'dark'

    // Save to localStorage
    localStorage.setItem('primevue-theme', theme)

    // Update body class for custom dark mode styles
    if (isDark.value) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }

  const loadSavedTheme = () => {
    const savedTheme = localStorage.getItem('primevue-theme')
    if (savedTheme) {
      changeTheme(savedTheme)
    } else {
      changeTheme('lara-light-blue')
    }
  }

  onMounted(() => {
    loadSavedTheme()
  })

  return {
    currentTheme,
    isDark,
    themes,
    changeTheme,
    loadSavedTheme
  }
}
```

#### 2. Theme Picker Component

**File:** `src/components/layout/ThemePicker.vue`

```vue
<template>
  <Dropdown
    v-model="selectedTheme"
    :options="themeGroups"
    optionLabel="label"
    optionGroupLabel="label"
    optionGroupChildren="items"
    placeholder="Select Theme"
    @change="handleThemeChange"
    class="theme-picker"
  >
    <template #value="slotProps">
      <div class="flex align-items-center" v-if="slotProps.value">
        <i :class="getThemeIcon(slotProps.value)"></i>
        <span class="ml-2">{{ slotProps.value.label }}</span>
      </div>
      <span v-else>Select Theme</span>
    </template>

    <template #option="slotProps">
      <div class="flex align-items-center">
        <i :class="getThemeIcon(slotProps.option)"></i>
        <span class="ml-2">{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Dropdown>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { currentTheme, themes, changeTheme } = useTheme()

const selectedTheme = ref(null)

const themeGroups = computed(() => [
  {
    label: 'Lara Light',
    items: themes.filter(t => t.family === 'lara' && t.type === 'light')
  },
  {
    label: 'Lara Dark',
    items: themes.filter(t => t.family === 'lara' && t.type === 'dark')
  },
  {
    label: 'Material',
    items: themes.filter(t => t.family === 'material')
  },
  {
    label: 'Bootstrap',
    items: themes.filter(t => t.family === 'bootstrap')
  },
  {
    label: 'Legacy',
    items: themes.filter(t => ['saga', 'vela', 'arya'].includes(t.family))
  }
])

const handleThemeChange = (event) => {
  if (event.value) {
    changeTheme(event.value.name)
  }
}

const getThemeIcon = (theme) => {
  return theme.type === 'dark' ? 'pi pi-moon' : 'pi pi-sun'
}

onMounted(() => {
  // Set initial selected theme
  selectedTheme.value = themes.find(t => t.name === currentTheme.value)
})
</script>

<style scoped>
.theme-picker {
  min-width: 200px;
}
</style>
```

#### 3. Integration in Main Layout

**File:** `src/components/layout/Navbar.vue`

```vue
<template>
  <div class="navbar">
    <div class="navbar-start">
      <h1>PrimeVue 3 Demo</h1>
    </div>

    <div class="navbar-end">
      <ThemePicker />
    </div>
  </div>
</template>

<script setup>
import ThemePicker from './ThemePicker.vue'
</script>
```

## Theme CSS Structure

Each PrimeVue theme follows a consistent CSS variable structure:

```css
/* theme.css */
:root {
  /* Primary Colors */
  --primary-color: #3B82F6;
  --primary-color-text: #ffffff;

  /* Surface Colors */
  --surface-a: #ffffff;
  --surface-b: #f8f9fa;
  --surface-c: #e9ecef;
  --surface-d: #dee2e6;
  --surface-e: #ffffff;
  --surface-f: #ffffff;

  /* Text Colors */
  --text-color: #495057;
  --text-color-secondary: #6c757d;

  /* Component-specific variables */
  --content-padding: 1rem;
  --inline-spacing: 0.5rem;
  --border-radius: 6px;
  --surface-border: #dee2e6;

  /* State colors */
  --surface-hover: #e9ecef;
  --surface-overlay: #ffffff;
  --focus-ring: 0 0 0 0.2rem #BFDBFE;

  /* ... many more variables */
}
```

## Custom Theme Overrides

While we use PrimeVue's built-in themes, we can override specific variables:

**File:** `src/assets/styles/theme-overrides.css`

```css
/* Custom overrides for all themes */
:root {
  --border-radius: 8px; /* Rounder corners */
  --transition-duration: 0.2s; /* Faster transitions */
}

/* Dark mode specific overrides */
body.dark-mode {
  background-color: #1e1e1e;
  color: #e0e0e0;
}

/* Custom scrollbar for all themes */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface-b);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-d);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-color-secondary);
}
```

## Performance Considerations

### 1. Lazy Theme Loading

Themes are loaded on demand, not bundled with the main app:

```javascript
// Vite config - exclude themes from bundle
export default {
  build: {
    rollupOptions: {
      external: [
        /primevue\/resources\/themes/
      ]
    }
  }
}
```

### 2. Theme Caching

Browsers automatically cache theme CSS files. To bust cache on updates:

```javascript
const themeVersion = '1.0.0'
const themePath = `/node_modules/primevue/resources/themes/${theme}/theme.css?v=${themeVersion}`
```

### 3. Transition Smoothness

Add CSS transitions for smooth theme changes:

```css
* {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease;
}
```

## localStorage Schema

```javascript
{
  "primevue-theme": "lara-light-blue" // Current theme name
}
```

## Accessibility

### Color Contrast
- All themes meet WCAG AA standards for color contrast
- Dark themes provide sufficient contrast for readability

### Reduced Motion
Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}
```

### Theme Announcement
Announce theme changes to screen readers:

```vue
<div role="status" aria-live="polite" class="sr-only">
  Theme changed to {{ currentTheme }}
</div>
```

## Testing Theme Switching

### Manual Testing Checklist
- [ ] Theme persists after page reload
- [ ] All components render correctly in each theme
- [ ] No FOUC (Flash of Unstyled Content)
- [ ] Dark/light mode icons update
- [ ] Dropdown shows correct current theme
- [ ] Theme changes don't break layout

### Automated Testing

```javascript
// Example Vitest test
describe('Theme Switching', () => {
  it('should save theme to localStorage', () => {
    const { changeTheme } = useTheme()
    changeTheme('lara-dark-blue')
    expect(localStorage.getItem('primevue-theme')).toBe('lara-dark-blue')
  })

  it('should update theme link href', () => {
    const { changeTheme } = useTheme()
    changeTheme('material-dark')
    const themeLink = document.getElementById('app-theme')
    expect(themeLink.href).toContain('material-dark')
  })
})
```

## Troubleshooting

### Theme Not Loading

**Issue:** Theme doesn't apply after selection

**Solutions:**
1. Check console for CSS loading errors
2. Verify theme file exists in node_modules
3. Check theme name spelling
4. Ensure link element is created correctly

### FOUC (Flash of Unstyled Content)

**Issue:** Brief moment of unstyled content on load

**Solution:** Load theme in index.html before app:

```html
<head>
  <link id="app-theme" rel="stylesheet" href="/default-theme.css">
</head>
```

### Theme Persistence Issues

**Issue:** Theme resets after refresh

**Solutions:**
1. Check localStorage is enabled
2. Verify loadSavedTheme() is called on mount
3. Check for localStorage errors in console

## Future Enhancements

1. **Custom Theme Builder**: Allow users to create custom color schemes
2. **Theme Preview**: Show theme preview before applying
3. **System Theme Detection**: Auto-switch based on OS dark/light mode
4. **Per-Component Theming**: Allow different themes for different sections
5. **Theme Import/Export**: Save custom themes as JSON

## Resources

- [PrimeVue Theming Guide](https://primevue.org/theming)
- [CSS Variables Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
