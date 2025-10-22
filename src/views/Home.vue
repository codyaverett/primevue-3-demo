<template>
  <div class="home-page demo-page">
    <div class="hero-section">
      <div class="hero-content">
        <i class="pi pi-prime hero-icon"></i>
        <h1>PrimeVue 3 Comprehensive Demo</h1>
        <p class="hero-description">
          Explore all {{ totalComponents }} PrimeVue components with live examples, code snippets, and complete API documentation.
          Switch between multiple themes in real-time to see how components adapt to different design systems.
        </p>
        <div class="hero-actions">
          <Button
            label="Get Started"
            icon="pi pi-arrow-right"
            size="large"
            @click="scrollToCategories"
          />
          <Button
            label="View on GitHub"
            icon="pi pi-github"
            size="large"
            severity="secondary"
            outlined
            @click="openGithub"
          />
        </div>
      </div>
    </div>

    <Divider />

    <div id="categories" class="categories-section">
      <h2 class="section-title">Component Categories</h2>
      <p class="section-description">
        Browse through our organized collection of PrimeVue components. Each category contains multiple components with comprehensive examples.
      </p>

      <div class="category-grid">
        <Card
          v-for="category in categories"
          :key="category.name"
          class="category-card"
          @click="navigateToFirstComponent(category)"
        >
          <template #header>
            <div class="category-icon-wrapper">
              <i :class="category.icon" class="category-icon"></i>
            </div>
          </template>
          <template #title>
            {{ category.name }}
          </template>
          <template #content>
            <p class="category-description">{{ category.description }}</p>
            <div class="category-count">
              <Tag :value="`${category.count} Components`" severity="info" />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <Divider />

    <div class="features-section">
      <h2 class="section-title">Features</h2>
      <div class="features-grid">
        <div class="feature-item">
          <i class="pi pi-palette feature-icon"></i>
          <h3>30+ Themes</h3>
          <p>Switch between multiple pre-built themes instantly. Light and dark mode support for all themes.</p>
        </div>
        <div class="feature-item">
          <i class="pi pi-code feature-icon"></i>
          <h3>Copy-Paste Ready</h3>
          <p>Every example includes copy-ready code snippets. Start using components immediately in your project.</p>
        </div>
        <div class="feature-item">
          <i class="pi pi-mobile feature-icon"></i>
          <h3>Fully Responsive</h3>
          <p>All components and demos are mobile-friendly and tested across different screen sizes.</p>
        </div>
        <div class="feature-item">
          <i class="pi pi-book feature-icon"></i>
          <h3>Complete API Docs</h3>
          <p>Comprehensive documentation for props, events, methods, and slots for every component.</p>
        </div>
        <div class="feature-item">
          <i class="pi pi-bolt feature-icon"></i>
          <h3>Vue 3 + Vite</h3>
          <p>Built with the latest Vue 3 Composition API and powered by Vite for blazing fast development.</p>
        </div>
        <div class="feature-item">
          <i class="pi pi-eye feature-icon"></i>
          <h3>Live Examples</h3>
          <p>Interactive demos for every component. See components in action before implementing them.</p>
        </div>
      </div>
    </div>

    <Divider />

    <div class="getting-started-section">
      <h2 class="section-title">Quick Start</h2>
      <Card>
        <template #content>
          <h3>Install PrimeVue</h3>
          <CodeBlock
            :code="installCode"
            language="bash"
          />

          <h3 class="mt-4">Configure in your Vue app</h3>
          <CodeBlock
            :code="configCode"
            language="javascript"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'
import CodeBlock from '@/components/shared/CodeBlock.vue'

const router = useRouter()

const totalComponents = 87

const categories = ref([
  {
    name: 'Form',
    icon: 'pi pi-fw pi-pencil',
    description: 'Input controls, selectors, and form utilities for building interactive forms.',
    count: 25,
    firstComponent: '/form/inputtext'
  },
  {
    name: 'Button',
    icon: 'pi pi-fw pi-mobile',
    description: 'Various button styles and button-related components.',
    count: 4,
    firstComponent: '/button/button'
  },
  {
    name: 'Data',
    icon: 'pi pi-fw pi-table',
    description: 'Components for displaying and manipulating data collections.',
    count: 10,
    firstComponent: '/data/datatable'
  },
  {
    name: 'Panel',
    icon: 'pi pi-fw pi-tablet',
    description: 'Container and layout components for organizing content.',
    count: 11,
    firstComponent: '/panel/card'
  },
  {
    name: 'Overlay',
    icon: 'pi pi-fw pi-clone',
    description: 'Modal dialogs, popups, and overlay interfaces.',
    count: 7,
    firstComponent: '/overlay/dialog'
  },
  {
    name: 'File',
    icon: 'pi pi-fw pi-upload',
    description: 'File upload with preview and multiple file support.',
    count: 1,
    firstComponent: '/file/fileupload'
  },
  {
    name: 'Menu',
    icon: 'pi pi-fw pi-bars',
    description: 'Navigation and menu components.',
    count: 10,
    firstComponent: '/menu/menubar'
  },
  {
    name: 'Chart',
    icon: 'pi pi-fw pi-chart-bar',
    description: 'Data visualization with Chart.js integration.',
    count: 1,
    firstComponent: '/chart/chart'
  },
  {
    name: 'Messages',
    icon: 'pi pi-fw pi-comment',
    description: 'User feedback and notification components.',
    count: 2,
    firstComponent: '/messages/toast'
  },
  {
    name: 'Media',
    icon: 'pi pi-fw pi-image',
    description: 'Image galleries, carousels, and media components.',
    count: 3,
    firstComponent: '/media/image'
  },
  {
    name: 'Misc',
    icon: 'pi pi-fw pi-star',
    description: 'Avatars, badges, progress indicators, and utility components.',
    count: 15,
    firstComponent: '/misc/avatar'
  }
])

const installCode = `npm install primevue primeicons primeflex
# or
yarn add primevue primeicons primeflex
# or
pnpm add primevue primeicons primeflex`

const configCode = `import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')`

const scrollToCategories = () => {
  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
}

const openGithub = () => {
  window.open('https://github.com/primefaces/primevue', '_blank')
}

const navigateToFirstComponent = (category) => {
  router.push(category.firstComponent)
}
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 4rem 0;
}

.hero-icon {
  font-size: 5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-600) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Categories Section */
.categories-section {
  padding: 2rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-description {
  text-align: center;
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.category-card {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.category-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-600) 100%);
}

.category-icon {
  font-size: 3rem;
  color: white;
}

.category-description {
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.category-count {
  margin-top: 1rem;
}

/* Features Section */
.features-section {
  padding: 2rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: var(--text-color-secondary);
  line-height: 1.6;
}

/* Getting Started Section */
.getting-started-section {
  padding: 2rem 0 4rem;
}

.getting-started-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}

.getting-started-section h3:first-of-type {
  margin-top: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-icon {
    font-size: 3rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .category-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
