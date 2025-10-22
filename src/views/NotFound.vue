<template>
  <div class="not-found-page">
    <div class="not-found-content">
      <i class="pi pi-exclamation-triangle not-found-icon"></i>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Button
        label="Go to Home"
        icon="pi pi-home"
        @click="goHome"
        size="large"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.not-found-icon {
  font-size: 6rem;
  color: var(--orange-500);
  margin-bottom: 2rem;
}

.not-found-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.not-found-content p {
  font-size: 1.125rem;
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .not-found-icon {
    font-size: 4rem;
  }

  .not-found-content h1 {
    font-size: 1.75rem;
  }

  .not-found-content p {
    font-size: 1rem;
  }
}
</style>
