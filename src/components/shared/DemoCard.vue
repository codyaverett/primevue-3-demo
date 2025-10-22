<template>
  <Card class="demo-card">
    <template #title>
      <div class="demo-card-header">
        <span>{{ title }}</span>
        <Button
          v-if="code"
          :icon="showCode ? 'pi pi-code' : 'pi pi-code'"
          :label="showCode ? 'Hide Code' : 'Show Code'"
          class="p-button-sm p-button-text"
          @click="toggleCode"
        />
      </div>
    </template>
    <template #content>
      <div class="demo-preview">
        <slot></slot>
      </div>

      <div v-if="showCode && code" class="demo-code-section">
        <Divider />
        <CodeBlock :code="code" :language="language" />
      </div>

      <div v-if="description" class="demo-description">
        <Divider />
        <p>{{ description }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import CodeBlock from './CodeBlock.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'markup'
  },
  description: {
    type: String,
    default: ''
  }
})

const showCode = ref(false)

const toggleCode = () => {
  showCode.value = !showCode.value
}
</script>

<style scoped>
.demo-card {
  margin-bottom: 2rem;
}

.demo-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-preview {
  padding: 1rem 0;
}

.demo-code-section {
  margin-top: 1rem;
}

.demo-description {
  margin-top: 1rem;
}

.demo-description p {
  margin: 0;
  color: var(--text-color-secondary);
  line-height: 1.6;
}
</style>
