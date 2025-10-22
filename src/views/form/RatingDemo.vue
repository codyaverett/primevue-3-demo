<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Rating</h1>
      <p class="description">
        Rating component is a star based selection input.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Rating" :code="basicCode">
        <Rating v-model="value1" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Without Cancel">
      <DemoCard title="Without Cancel" :code="cancelCode">
        <Rating v-model="value2" :cancel="false" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="ReadOnly">
      <DemoCard title="ReadOnly" :code="readonlyCode">
        <Rating v-model="value3" readonly :cancel="false" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="API">
      <h3>Props</h3>
      <ApiTable :items="props" />
    </DemoSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Rating from 'primevue/rating'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref()
const value2 = ref()
const value3 = ref(4)

const basicCode = `<Rating v-model="value" />`
const cancelCode = `<Rating v-model="value" :cancel="false" />`
const readonlyCode = `<Rating v-model="value" readonly :cancel="false" />`

const props = [
  { name: 'modelValue', type: 'number', default: 'null', description: 'Value of the rating.' },
  { name: 'stars', type: 'number', default: '5', description: 'Number of stars.' },
  { name: 'cancel', type: 'boolean', default: 'true', description: 'When specified, a cancel icon is displayed to allow clearing the value.' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'When present, it specifies that the element should be read-only.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the element should be disabled.' }
]
</script>
