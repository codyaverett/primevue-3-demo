<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>InputSwitch</h1>
      <p class="description">
        InputSwitch is used to select a boolean value.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic InputSwitch" :code="basicCode">
        <InputSwitch v-model="checked1" />
        <p class="mt-2">Status: {{ checked1 ? 'On' : 'Off' }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Preselected">
      <DemoCard title="Preselected" :code="preselectedCode">
        <InputSwitch v-model="checked2" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Disabled">
      <DemoCard title="Disabled State" :code="disabledCode">
        <InputSwitch v-model="checked3" disabled />
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
import InputSwitch from 'primevue/inputswitch'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)

const basicCode = `<InputSwitch v-model="checked" />`
const preselectedCode = `<InputSwitch v-model="checked" /> <!-- checked = true -->`
const disabledCode = `<InputSwitch v-model="checked" disabled />`

const props = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: 'Specifies whether a inputswitch should be checked or not.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the component should be disabled.' }
]
</script>
