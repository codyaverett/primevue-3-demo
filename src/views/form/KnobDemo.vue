<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Knob</h1>
      <p class="description">
        Knob is a form component to define number inputs with a dial.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Knob" :code="basicCode">
        <Knob v-model="value1" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Min/Max">
      <DemoCard title="Custom Range" :code="rangeCode">
        <Knob v-model="value2" :min="-50" :max="50" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="ReadOnly">
      <DemoCard title="ReadOnly" :code="readonlyCode">
        <Knob v-model="value3" readonly />
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
import Knob from 'primevue/knob'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref(0)
const value2 = ref(10)
const value3 = ref(75)

const basicCode = `<Knob v-model="value" />`
const rangeCode = `<Knob v-model="value" :min="-50" :max="50" />`
const readonlyCode = `<Knob v-model="value" readonly />`

const props = [
  { name: 'modelValue', type: 'number', default: 'null', description: 'Value of the component.' },
  { name: 'min', type: 'number', default: '0', description: 'Mininum boundary value.' },
  { name: 'max', type: 'number', default: '100', description: 'Maximum boundary value.' },
  { name: 'step', type: 'number', default: '1', description: 'Step factor to increment/decrement the value.' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'When present, it specifies that the component should be read-only.' }
]
</script>
