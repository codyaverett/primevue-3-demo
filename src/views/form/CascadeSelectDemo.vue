<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>CascadeSelect</h1>
      <p class="description">
        CascadeSelect is a form component to select a value from a nested structure of options.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic CascadeSelect" :code="basicCode">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" placeholder="Select a City" class="w-full md:w-14rem" />
        <p v-if="selectedCity" class="mt-2">Selected: {{ selectedCity.cname }}</p>
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
import CascadeSelect from 'primevue/cascadeselect'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const selectedCity = ref()

const countries = ref([
  {
    name: 'Australia',
    code: 'AU',
    states: [
      {
        name: 'New South Wales',
        cities: [
          { cname: 'Sydney', code: 'A-SY' },
          { cname: 'Newcastle', code: 'A-NE' },
          { cname: 'Wollongong', code: 'A-WO' }
        ]
      },
      {
        name: 'Queensland',
        cities: [
          { cname: 'Brisbane', code: 'A-BR' },
          { cname: 'Townsville', code: 'A-TO' }
        ]
      }
    ]
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Quebec',
        cities: [
          { cname: 'Montreal', code: 'C-MO' },
          { cname: 'Quebec City', code: 'C-QU' }
        ]
      },
      {
        name: 'Ontario',
        cities: [
          { cname: 'Ottawa', code: 'C-OT' },
          { cname: 'Toronto', code: 'C-TO' }
        ]
      }
    ]
  }
])

const basicCode = `<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" placeholder="Select a City" />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'options', type: 'array', default: 'null', description: 'An array of selectitems to display as the available options.' },
  { name: 'optionLabel', type: 'string', default: 'null', description: 'Property name or getter function to use as the label of an option.' },
  { name: 'optionGroupLabel', type: 'string', default: 'null', description: 'Property name or getter function to use as the label of an option group.' },
  { name: 'optionGroupChildren', type: 'array | string', default: 'null', description: 'Property name or getter function that refers to the children options of option group.' }
]
</script>
