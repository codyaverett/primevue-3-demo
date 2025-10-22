<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Listbox</h1>
      <p class="description">
        Listbox is used to select one or more values from a list of items.
      </p>
    </div>

    <DemoSection title="Single">
      <DemoCard title="Single Selection" :code="singleCode">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Multiple">
      <DemoCard title="Multiple Selection" :code="multipleCode">
        <Listbox v-model="selectedCities" :options="cities" optionLabel="name" multiple class="w-full md:w-14rem" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Filter">
      <DemoCard title="With Filter" :code="filterCode">
        <Listbox v-model="selectedCity2" :options="cities" optionLabel="name" filter class="w-full md:w-14rem" />
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
import Listbox from 'primevue/listbox'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const selectedCity = ref()
const selectedCity2 = ref()
const selectedCities = ref()

const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const singleCode = `<Listbox v-model="selectedCity" :options="cities" optionLabel="name" />`
const multipleCode = `<Listbox v-model="selectedCities" :options="cities" optionLabel="name" multiple />`
const filterCode = `<Listbox v-model="selectedCity" :options="cities" optionLabel="name" filter />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'options', type: 'array', default: 'null', description: 'An array of selectitems to display as the available options.' },
  { name: 'optionLabel', type: 'string', default: 'null', description: 'Property name or getter function to use as the label of an option.' },
  { name: 'multiple', type: 'boolean', default: 'false', description: 'When specified, allows selecting multiple values.' },
  { name: 'filter', type: 'boolean', default: 'false', description: 'When specified, displays a filter input at header.' }
]
</script>
