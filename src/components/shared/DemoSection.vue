<template>
  <div class="demo-section">
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.section-description {
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>
