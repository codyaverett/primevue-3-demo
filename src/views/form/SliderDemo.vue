<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Slider</h1>
      <p class="description">
        Slider is a component to provide input with a drag handle.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Slider" :code="basicCode">
        <Slider v-model="value1" class="w-14rem" />
        <p class="mt-2">Value: {{ value1 }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Range">
      <DemoCard title="Range Slider" :code="rangeCode">
        <Slider v-model="value2" range class="w-14rem" />
        <p class="mt-2">Values: {{ value2 }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Vertical">
      <DemoCard title="Vertical Slider" :code="verticalCode">
        <Slider v-model="value3" orientation="vertical" style="height: 14rem" />
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
import Slider from 'primevue/slider'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref(50)
const value2 = ref([20, 80])
const value3 = ref(50)

const basicCode = `<Slider v-model="value" class="w-14rem" />`
const rangeCode = `<Slider v-model="value" range class="w-14rem" />`
const verticalCode = `<Slider v-model="value" orientation="vertical" style="height: 14rem" />`

const props = [
  { name: 'modelValue', type: 'number|array', default: '0', description: 'Value of the component.' },
  { name: 'min', type: 'number', default: '0', description: 'Mininum boundary value.' },
  { name: 'max', type: 'number', default: '100', description: 'Maximum boundary value.' },
  { name: 'orientation', type: 'string', default: 'horizontal', description: 'Orientation of the slider, valid values are horizontal and vertical.' },
  { name: 'step', type: 'number', default: '1', description: 'Step factor to increment/decrement the value.' },
  { name: 'range', type: 'boolean', default: 'false', description: 'When enabled, two boundary values can be picked.' }
]
</script>
