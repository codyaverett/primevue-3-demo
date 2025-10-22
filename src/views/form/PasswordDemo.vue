<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Password</h1>
      <p class="description">
        Password displays strength indicator for password fields.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Password" :code="basicCode">
        <Password v-model="value1" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Meter">
      <DemoCard title="With Strength Meter" :code="meterCode">
        <Password v-model="value2" toggleMask />
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
import Password from 'primevue/password'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref('')
const value2 = ref('')

const basicCode = `<Password v-model="value" />`
const meterCode = `<Password v-model="value" toggleMask />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'toggleMask', type: 'boolean', default: 'false', description: 'Whether to show toggle button for password.' },
  { name: 'feedback', type: 'boolean', default: 'true', description: 'Whether to show the strength indicator or not.' }
]
</script>
