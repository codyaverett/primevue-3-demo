<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>AutoComplete</h1>
      <p class="description">
        AutoComplete is an input component that provides real-time suggestions while being typed.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic AutoComplete" :code="basicCode">
        <AutoComplete v-model="selectedCountry" :suggestions="filteredCountries" @complete="search" optionLabel="name" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Dropdown">
      <DemoCard title="With Dropdown" :code="dropdownCode">
        <AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries2" @complete="search2" dropdown optionLabel="name" />
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
import AutoComplete from 'primevue/autocomplete'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const selectedCountry = ref()
const selectedCountry2 = ref()
const filteredCountries = ref()
const filteredCountries2 = ref()

const countries = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
])

const search = (event) => {
  filteredCountries.value = countries.value.filter((country) => {
    return country.name.toLowerCase().startsWith(event.query.toLowerCase())
  })
}

const search2 = (event) => {
  filteredCountries2.value = countries.value.filter((country) => {
    return country.name.toLowerCase().startsWith(event.query.toLowerCase())
  })
}

const basicCode = `<AutoComplete v-model="selectedCountry" :suggestions="filteredCountries" @complete="search" optionLabel="name" />`
const dropdownCode = `<AutoComplete v-model="selectedCountry" :suggestions="filteredCountries" @complete="search" dropdown optionLabel="name" />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'suggestions', type: 'array', default: 'null', description: 'An array of suggestions to display.' },
  { name: 'optionLabel', type: 'string', default: 'null', description: 'Property name or getter function to use as the label of an option.' },
  { name: 'dropdown', type: 'boolean', default: 'false', description: 'Displays a button next to the input field when enabled.' }
]
</script>
