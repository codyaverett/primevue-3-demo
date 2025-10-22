<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>InputMask</h1>
      <p class="description">
        InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Phone Number" :code="basicCode">
        <InputMask v-model="value1" mask="(999) 999-9999" placeholder="(999) 999-9999" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Date">
      <DemoCard title="Date Format" :code="dateCode">
        <InputMask v-model="value2" mask="99/99/9999" placeholder="99/99/9999" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Serial">
      <DemoCard title="Serial Number" :code="serialCode">
        <InputMask v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" />
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
import InputMask from 'primevue/inputmask'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref()
const value2 = ref()
const value3 = ref()

const basicCode = `<InputMask v-model="value" mask="(999) 999-9999" placeholder="(999) 999-9999" />`
const dateCode = `<InputMask v-model="value" mask="99/99/9999" placeholder="99/99/9999" />`
const serialCode = `<InputMask v-model="value" mask="a*-999-a999" placeholder="a*-999-a999" />`

const props = [
  { name: 'modelValue', type: 'string', default: 'null', description: 'Value of the component.' },
  { name: 'mask', type: 'string', default: 'null', description: 'Mask pattern.' },
  { name: 'placeholder', type: 'string', default: 'null', description: 'Placeholder character in mask, default is underscore.' }
]
</script>
