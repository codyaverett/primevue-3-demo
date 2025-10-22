<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>MultiSelect</h1>
      <p class="description">
        MultiSelect is used to select multiple items from a collection.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic MultiSelect" :code="basicCode">
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities" class="w-full md:w-20rem" />
        <p v-if="selectedCities" class="mt-2">Selected: {{ selectedCities.map(c => c.name).join(', ') }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Filter">
      <DemoCard title="With Filter" :code="filterCode">
        <MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" class="w-full md:w-20rem" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Chips">
      <DemoCard title="Chip Display" :code="chipsCode">
        <MultiSelect v-model="selectedCities3" :options="cities" optionLabel="name" display="chip" placeholder="Select Cities" class="w-full md:w-20rem" />
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
import MultiSelect from 'primevue/multiselect'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const selectedCities = ref()
const selectedCities2 = ref()
const selectedCities3 = ref()

const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const basicCode = `<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities" />`
const filterCode = `<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities" />`
const chipsCode = `<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" display="chip" placeholder="Select Cities" />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'options', type: 'array', default: 'null', description: 'An array of selectitems to display as the available options.' },
  { name: 'optionLabel', type: 'string', default: 'null', description: 'Property name or getter function to use as the label of an option.' },
  { name: 'filter', type: 'boolean', default: 'false', description: 'When specified, displays a filter input at header.' },
  { name: 'display', type: 'string', default: 'comma', description: 'Defines how the selected items are displayed, valid values are "comma" and "chip".' }
]
</script>
