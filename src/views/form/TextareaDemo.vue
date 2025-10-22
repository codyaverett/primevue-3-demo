<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Textarea</h1>
      <p class="description">
        Textarea is a multi-line text input element.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Textarea" :code="basicCode">
        <Textarea v-model="value1" rows="5" cols="30" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Auto Resize">
      <DemoCard title="Auto Resize" :code="autoResizeCode">
        <Textarea v-model="value2" autoResize rows="3" cols="30" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Disabled">
      <DemoCard title="Disabled State" :code="disabledCode">
        <Textarea v-model="value3" rows="5" cols="30" disabled />
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
import Textarea from 'primevue/textarea'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('Disabled text area content')

const basicCode = `<Textarea v-model="value" rows="5" cols="30" />`
const autoResizeCode = `<Textarea v-model="value" autoResize rows="3" cols="30" />`
const disabledCode = `<Textarea v-model="value" rows="5" cols="30" disabled />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'autoResize', type: 'boolean', default: 'false', description: 'When present, height of textarea changes as being typed.' },
  { name: 'rows', type: 'number', default: 'null', description: 'Number of rows.' },
  { name: 'cols', type: 'number', default: 'null', description: 'Number of columns.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the element should be disabled.' }
]
</script>
