<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>SelectButton</h1>
      <p class="description">
        SelectButton is used to choose single or multiple items from a list using buttons.
      </p>
    </div>

    <DemoSection title="Single">
      <DemoCard title="Single Selection" :code="singleCode">
        <SelectButton v-model="value1" :options="options" optionLabel="name" />
        <p v-if="value1" class="mt-2">Selected: {{ value1.name }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Multiple">
      <DemoCard title="Multiple Selection" :code="multipleCode">
        <SelectButton v-model="value2" :options="options" optionLabel="name" multiple />
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
import SelectButton from 'primevue/selectbutton'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref()
const value2 = ref()

const options = ref([
  { name: 'Option 1', value: 1 },
  { name: 'Option 2', value: 2 },
  { name: 'Option 3', value: 3 }
])

const singleCode = `<SelectButton v-model="value" :options="options" optionLabel="name" />`
const multipleCode = `<SelectButton v-model="value" :options="options" optionLabel="name" multiple />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'options', type: 'array', default: 'null', description: 'An array of selectitems to display as the available options.' },
  { name: 'optionLabel', type: 'string', default: 'null', description: 'Property name or getter function to use as the label of an option.' },
  { name: 'multiple', type: 'boolean', default: 'false', description: 'When specified, allows selecting multiple values.' }
]
</script>
