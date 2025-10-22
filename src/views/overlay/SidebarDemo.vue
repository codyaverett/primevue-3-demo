<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>{{ componentName }}</h1>
      <p class="description">
        This component demo is coming soon.
      </p>
    </div>

    <div class="placeholder-content">
      <i class="pi pi-wrench" style="font-size: 4rem; color: var(--primary-color);"></i>
      <h2 class="mt-4">Under Construction</h2>
      <p class="mt-3">
        This demo page is planned but not yet implemented. Check back soon!
      </p>
      <p class="mt-2">
        See <code>COMPLETION-STATUS.md</code> for implementation progress.
      </p>
      <Button
        label="View Component Docs on PrimeVue.org"
        icon="pi pi-external-link"
        class="mt-4"
        @click="openDocs"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Button from 'primevue/button'

const route = useRoute()
const componentName = computed(() => route.name || 'Component')

const openDocs = () => {
  window.open('https://primevue.org/', '_blank')
}
</script>

<style scoped>
.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  padding: 2rem;
}

.placeholder-content h2 {
  font-size: 2rem;
  color: var(--text-color);
}

.placeholder-content p {
  color: var(--text-color-secondary);
  font-size: 1.125rem;
}

.placeholder-content code {
  background-color: var(--surface-b);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}
</style>
