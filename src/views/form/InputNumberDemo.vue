<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>InputNumber</h1>
      <p class="description">
        InputNumber is an input component to provide numerical input.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic InputNumber" :code="basicCode">
        <InputNumber v-model="value1" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Buttons">
      <DemoCard title="With Buttons" :code="buttonsCode">
        <InputNumber v-model="value2" showButtons mode="decimal" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Min/Max">
      <DemoCard title="Min and Max" :code="minMaxCode">
        <InputNumber v-model="value3" showButtons :min="0" :max="100" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Currency">
      <DemoCard title="Currency Format" :code="currencyCode">
        <InputNumber v-model="value4" mode="currency" currency="USD" locale="en-US" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Prefix/Suffix">
      <DemoCard title="Prefix and Suffix" :code="prefixSuffixCode">
        <div class="flex flex-column gap-3">
          <InputNumber v-model="value5" prefix="$" />
          <InputNumber v-model="value6" suffix=" %" />
        </div>
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
import InputNumber from 'primevue/inputnumber'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref()
const value2 = ref()
const value3 = ref(50)
const value4 = ref(1500)
const value5 = ref()
const value6 = ref()

const basicCode = `<InputNumber v-model="value" />`
const buttonsCode = `<InputNumber v-model="value" showButtons mode="decimal" />`
const minMaxCode = `<InputNumber v-model="value" showButtons :min="0" :max="100" />`
const currencyCode = `<InputNumber v-model="value" mode="currency" currency="USD" locale="en-US" />`
const prefixSuffixCode = `<InputNumber v-model="value" prefix="$" />
<InputNumber v-model="value" suffix=" %" />`

const props = [
  { name: 'modelValue', type: 'number', default: 'null', description: 'Value of the component.' },
  { name: 'showButtons', type: 'boolean', default: 'false', description: 'Displays spinner buttons.' },
  { name: 'min', type: 'number', default: 'null', description: 'Mininum boundary value.' },
  { name: 'max', type: 'number', default: 'null', description: 'Maximum boundary value.' },
  { name: 'mode', type: 'string', default: 'decimal', description: 'Defines the behavior, valid values are "decimal" and "currency".' },
  { name: 'currency', type: 'string', default: 'null', description: 'The currency to use in currency formatting.' },
  { name: 'prefix', type: 'string', default: 'null', description: 'Text to display before the value.' },
  { name: 'suffix', type: 'string', default: 'null', description: 'Text to display after the value.' }
]
</script>
