<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>ToggleButton</h1>
      <p class="description">
        ToggleButton is used to select a boolean value using a button.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic ToggleButton" :code="basicCode">
        <ToggleButton v-model="checked" onLabel="Yes" offLabel="No" />
        <p class="mt-2">Status: {{ checked ? 'Yes' : 'No' }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="With Icon">
      <DemoCard title="With Icons" :code="iconCode">
        <ToggleButton v-model="checked2" onIcon="pi pi-check" offIcon="pi pi-times" />
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
import ToggleButton from 'primevue/togglebutton'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const checked = ref(false)
const checked2 = ref(false)

const basicCode = `<ToggleButton v-model="checked" onLabel="Yes" offLabel="No" />`
const iconCode = `<ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" />`

const props = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: 'Value of the component.' },
  { name: 'onLabel', type: 'string', default: 'Yes', description: 'Label for the on state.' },
  { name: 'offLabel', type: 'string', default: 'No', description: 'Label for the off state.' },
  { name: 'onIcon', type: 'string', default: 'null', description: 'Icon for the on state.' },
  { name: 'offIcon', type: 'string', default: 'null', description: 'Icon for the off state.' }
]
</script>
