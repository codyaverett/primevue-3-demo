<template>
  <div class="code-block">
    <div class="code-header">
      <span class="code-language">{{ language }}</span>
      <Button
        icon="pi pi-copy"
        label="Copy"
        class="p-button-sm p-button-text"
        @click="copyCode"
        :disabled="copied"
      />
    </div>
    <pre class="code-content"><code>{{ code }}</code></pre>
    <div v-if="copied" class="copy-notification">
      <i class="pi pi-check"></i> Copied!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'markup'
  }
})

const copied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
.code-block {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--surface-b);
  border: 1px solid var(--surface-border);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--surface-c);
  border-bottom: 1px solid var(--surface-border);
}

.code-language {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-color-secondary);
  text-transform: uppercase;
}

.code-content {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-color);
}

.code-content code {
  background: transparent;
  padding: 0;
}

.copy-notification {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeInOut 2s ease;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  80% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
}

@media (max-width: 768px) {
  .code-content {
    font-size: 0.75rem;
  }
}
</style>
