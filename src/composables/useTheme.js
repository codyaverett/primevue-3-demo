import { ref, computed } from 'vue'

const currentTheme = ref('lara-light-blue')

export function useTheme() {
  const themes = [
    // Lara Light
    { name: 'lara-light-blue', label: 'Lara Light Blue', type: 'light', family: 'lara' },
    { name: 'lara-light-indigo', label: 'Lara Light Indigo', type: 'light', family: 'lara' },
    { name: 'lara-light-purple', label: 'Lara Light Purple', type: 'light', family: 'lara' },
    { name: 'lara-light-teal', label: 'Lara Light Teal', type: 'light', family: 'lara' },

    // Lara Dark
    { name: 'lara-dark-blue', label: 'Lara Dark Blue', type: 'dark', family: 'lara' },
    { name: 'lara-dark-indigo', label: 'Lara Dark Indigo', type: 'dark', family: 'lara' },
    { name: 'lara-dark-purple', label: 'Lara Dark Purple', type: 'dark', family: 'lara' },
    { name: 'lara-dark-teal', label: 'Lara Dark Teal', type: 'dark', family: 'lara' },

    // Bootstrap
    { name: 'bootstrap4-light-blue', label: 'Bootstrap Light Blue', type: 'light', family: 'bootstrap' },
    { name: 'bootstrap4-light-purple', label: 'Bootstrap Light Purple', type: 'light', family: 'bootstrap' },
    { name: 'bootstrap4-dark-blue', label: 'Bootstrap Dark Blue', type: 'dark', family: 'bootstrap' },
    { name: 'bootstrap4-dark-purple', label: 'Bootstrap Dark Purple', type: 'dark', family: 'bootstrap' },

    // Material Design
    { name: 'md-light-indigo', label: 'Material Light Indigo', type: 'light', family: 'material' },
    { name: 'md-light-deeppurple', label: 'Material Light Deep Purple', type: 'light', family: 'material' },
    { name: 'md-dark-indigo', label: 'Material Dark Indigo', type: 'dark', family: 'material' },
    { name: 'md-dark-deeppurple', label: 'Material Dark Deep Purple', type: 'dark', family: 'material' },

    // Legacy Themes
    { name: 'saga-blue', label: 'Saga Blue', type: 'light', family: 'saga' },
    { name: 'saga-green', label: 'Saga Green', type: 'light', family: 'saga' },
    { name: 'saga-orange', label: 'Saga Orange', type: 'light', family: 'saga' },
    { name: 'saga-purple', label: 'Saga Purple', type: 'light', family: 'saga' },
    { name: 'vela-blue', label: 'Vela Blue', type: 'dark', family: 'vela' },
    { name: 'vela-green', label: 'Vela Green', type: 'dark', family: 'vela' },
    { name: 'vela-orange', label: 'Vela Orange', type: 'dark', family: 'vela' },
    { name: 'vela-purple', label: 'Vela Purple', type: 'dark', family: 'vela' },
    { name: 'arya-blue', label: 'Arya Blue', type: 'dark', family: 'arya' },
    { name: 'arya-green', label: 'Arya Green', type: 'dark', family: 'arya' },
    { name: 'arya-orange', label: 'Arya Orange', type: 'dark', family: 'arya' },
    { name: 'arya-purple', label: 'Arya Purple', type: 'dark', family: 'arya' }
  ]

  const isDark = computed(() => {
    const theme = themes.find(t => t.name === currentTheme.value)
    return theme?.type === 'dark'
  })

  const changeTheme = (themeName) => {
    const themeLink = document.getElementById('app-theme')
    const newThemePath = `/node_modules/primevue/resources/themes/${themeName}/theme.css`

    if (themeLink) {
      themeLink.href = newThemePath
    } else {
      const newLink = document.createElement('link')
      newLink.id = 'app-theme'
      newLink.rel = 'stylesheet'
      newLink.href = newThemePath
      document.head.appendChild(newLink)
    }

    currentTheme.value = themeName

    // Update body class for dark mode
    if (isDark.value) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }

    // Save to localStorage
    localStorage.setItem('primevue-theme', themeName)
  }

  const loadSavedTheme = () => {
    const savedTheme = localStorage.getItem('primevue-theme')
    if (savedTheme && themes.some(t => t.name === savedTheme)) {
      changeTheme(savedTheme)
    }
  }

  return {
    currentTheme,
    isDark,
    themes,
    changeTheme,
    loadSavedTheme
  }
}
