<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>InputText</h1>
      <p class="description">
        InputText is an extension to standard input element with theming and keyfiltering.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard
        title="Basic Input"
        :code="basicCode"
      >
        <div class="flex flex-column gap-3" style="max-width: 400px">
          <InputText v-model="value1" placeholder="Enter text" />
          <p v-if="value1">Value: {{ value1 }}</p>
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Floating Label">
      <DemoCard
        title="Float Label"
        :code="floatLabelCode"
      >
        <div class="flex flex-column gap-3" style="max-width: 400px">
          <FloatLabel>
            <InputText id="username" v-model="value2" />
            <label for="username">Username</label>
          </FloatLabel>
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Icons">
      <DemoCard
        title="Input with Icons"
        :code="iconsCode"
      >
        <div class="flex flex-column gap-3" style="max-width: 400px">
          <IconField iconPosition="left">
            <InputIcon class="pi pi-search" />
            <InputText v-model="value3" placeholder="Search" />
          </IconField>

          <IconField iconPosition="right">
            <InputIcon class="pi pi-spin pi-spinner" />
            <InputText v-model="value4" placeholder="Loading..." />
          </IconField>
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Sizes">
      <DemoCard
        title="Input Sizes"
        :code="sizesCode"
      >
        <div class="flex flex-column gap-3" style="max-width: 400px">
          <InputText v-model="value5" placeholder="Small" size="small" />
          <InputText v-model="value6" placeholder="Normal" />
          <InputText v-model="value7" placeholder="Large" size="large" />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="States">
      <DemoCard
        title="Invalid and Disabled States"
        :code="statesCode"
      >
        <div class="flex flex-column gap-3" style="max-width: 400px">
          <InputText v-model="value8" placeholder="Disabled" disabled />
          <InputText v-model="value9" placeholder="Invalid" invalid />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="API">
      <h3>Props</h3>
      <ApiTable :items="props" />

      <h3 class="mt-4">Events</h3>
      <ApiTable :items="events" :showDefault="false" />
    </DemoSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('Disabled value')
const value9 = ref('')

const basicCode = `<InputText v-model="value" placeholder="Enter text" />`

const floatLabelCode = `<FloatLabel>
  <InputText id="username" v-model="value" />
  <label for="username">Username</label>
</FloatLabel>`

const iconsCode = `<IconField iconPosition="left">
  <InputIcon class="pi pi-search" />
  <InputText v-model="value" placeholder="Search" />
</IconField>

<IconField iconPosition="right">
  <InputIcon class="pi pi-spin pi-spinner" />
  <InputText v-model="value" placeholder="Loading..." />
</IconField>`

const sizesCode = `<InputText v-model="value" placeholder="Small" size="small" />
<InputText v-model="value" placeholder="Normal" />
<InputText v-model="value" placeholder="Large" size="large" />`

const statesCode = `<InputText v-model="value" placeholder="Disabled" disabled />
<InputText v-model="value" placeholder="Invalid" invalid />`

const props = [
  {
    name: 'modelValue',
    type: 'any',
    default: 'null',
    description: 'Value of the component.'
  },
  {
    name: 'size',
    type: 'string',
    default: 'null',
    description: 'Size of the input field, valid values are "small" and "large".'
  },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'When present, it specifies that the component should have invalid state style.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When present, it specifies that the element should be disabled.'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: 'null',
    description: 'Placeholder text for the input.'
  }
]

const events = [
  {
    name: 'input',
    type: 'Event',
    description: 'Callback to invoke on input.'
  },
  {
    name: 'change',
    type: 'Event',
    description: 'Callback to invoke on value change.'
  }
]
</script>

<style scoped>
.demo-section + .demo-section {
  margin-top: 3rem;
}
</style>
