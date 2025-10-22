<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="navbar-start">
        <Button
          icon="pi pi-bars"
          class="p-button-text menu-toggle"
          @click="$emit('toggle-sidebar')"
        />
        <router-link to="/" class="navbar-brand">
          <i class="pi pi-prime text-primary text-3xl mr-2"></i>
          <span class="brand-text">PrimeVue 3 Demo</span>
        </router-link>
      </div>

      <div class="navbar-end">
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
              <i :class="getThemeIcon(slotProps.value)" class="mr-2"></i>
              <span>{{ slotProps.value.label }}</span>
            </div>
            <span v-else>Select Theme</span>
          </template>

          <template #option="slotProps">
            <div class="flex align-items-center">
              <i :class="getThemeIcon(slotProps.option)" class="mr-2"></i>
              <span>{{ slotProps.option.label }}</span>
            </div>
          </template>
        </Dropdown>

        <a
          href="https://primevue.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="docs-link ml-3"
        >
          <Button
            label="PrimeVue Docs"
            icon="pi pi-external-link"
            class="p-button-text"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'

defineEmits(['toggle-sidebar'])

const { currentTheme, themes, changeTheme } = useTheme()

const selectedTheme = ref(null)

const themeGroups = computed(() => {
  const groups = []

  // Lara Light
  const laraLight = themes.filter(t => t.family === 'lara' && t.type === 'light')
  if (laraLight.length) {
    groups.push({ label: 'Lara Light', items: laraLight })
  }

  // Lara Dark
  const laraDark = themes.filter(t => t.family === 'lara' && t.type === 'dark')
  if (laraDark.length) {
    groups.push({ label: 'Lara Dark', items: laraDark })
  }

  // Bootstrap
  const bootstrap = themes.filter(t => t.family === 'bootstrap')
  if (bootstrap.length) {
    groups.push({ label: 'Bootstrap', items: bootstrap })
  }

  // Material
  const material = themes.filter(t => t.family === 'material')
  if (material.length) {
    groups.push({ label: 'Material Design', items: material })
  }

  // Saga
  const saga = themes.filter(t => t.family === 'saga')
  if (saga.length) {
    groups.push({ label: 'Saga', items: saga })
  }

  // Vela
  const vela = themes.filter(t => t.family === 'vela')
  if (vela.length) {
    groups.push({ label: 'Vela', items: vela })
  }

  // Arya
  const arya = themes.filter(t => t.family === 'arya')
  if (arya.length) {
    groups.push({ label: 'Arya', items: arya })
  }

  return groups
})

const handleThemeChange = (event) => {
  if (event.value) {
    changeTheme(event.value.name)
  }
}

const getThemeIcon = (theme) => {
  return theme.type === 'dark' ? 'pi pi-moon' : 'pi pi-sun'
}

onMounted(() => {
  selectedTheme.value = themes.find(t => t.name === currentTheme.value)
})
</script>

<style scoped>
.navbar {
  background-color: var(--surface-card);
  border-bottom: 1px solid var(--surface-border);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}

.navbar-start {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-toggle {
  display: none;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 700;
  gap: 0.5rem;
}

.brand-text {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-600) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-end {
  display: flex;
  align-items: center;
}

.theme-picker {
  min-width: 220px;
}

.docs-link {
  text-decoration: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .brand-text {
    display: none;
  }

  .theme-picker {
    min-width: 180px;
  }

  .docs-link span {
    display: none;
  }
}

@media (max-width: 576px) {
  .theme-picker {
    min-width: 150px;
  }

  .navbar-end {
    gap: 0.5rem;
  }

  .docs-link {
    display: none;
  }
}
</style>
