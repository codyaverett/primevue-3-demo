<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Dropdown</h1>
      <p class="description">
        Dropdown is used to select an item from a collection of options.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard
        title="Basic Dropdown"
        :code="basicCode"
      >
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
        <p v-if="selectedCity" class="mt-3">Selected: {{ selectedCity.name }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Editable">
      <DemoCard
        title="Editable Dropdown"
        :code="editableCode"
      >
        <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" editable placeholder="Select a City" class="w-full md:w-14rem" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Grouped">
      <DemoCard
        title="Grouped Options"
        :code="groupedCode"
      >
        <Dropdown v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select a City" class="w-full md:w-14rem" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Filter">
      <DemoCard
        title="With Filter"
        :code="filterCode"
      >
        <Dropdown v-model="selectedCity3" :options="cities" optionLabel="name" filter placeholder="Select a City" class="w-full md:w-14rem" />
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
import Dropdown from 'primevue/dropdown'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const selectedCity = ref()
const selectedCity2 = ref()
const selectedCity3 = ref()
const selectedGroupedCity = ref()

const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const groupedCities = ref([
  {
    label: 'Germany',
    code: 'DE',
    items: [
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' }
    ]
  },
  {
    label: 'USA',
    code: 'US',
    items: [
      { label: 'Chicago', value: 'Chicago' },
      { label: 'Los Angeles', value: 'Los Angeles' },
      { label: 'New York', value: 'New York' },
      { label: 'San Francisco', value: 'San Francisco' }
    ]
  }
])

const basicCode = `<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />`

const editableCode = `<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" editable placeholder="Select a City" />`

const groupedCode = `<Dropdown v-model="selectedGroupedCity" :options="groupedCities"
  optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
  placeholder="Select a City" />`

const filterCode = `<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" filter placeholder="Select a City" />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'options', type: 'array', default: 'null', description: 'An array of selectitems to display as the available options.' },
  { name: 'optionLabel', type: 'string', default: 'null', description: 'Property name or getter function to use as the label of an option.' },
  { name: 'optionValue', type: 'string', default: 'null', description: 'Property name or getter function to use as the value of an option.' },
  { name: 'placeholder', type: 'string', default: 'null', description: 'Default text to display when no option is selected.' },
  { name: 'filter', type: 'boolean', default: 'false', description: 'When specified, displays a filter input at header.' },
  { name: 'editable', type: 'boolean', default: 'false', description: 'When present, custom value instead of predefined options can be entered using the editable input field.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the component should be disabled.' }
]
</script>
</template>