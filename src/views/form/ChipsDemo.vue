<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Chips</h1>
      <p class="description">
        Chips is used to enter multiple values on an input field.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Chips" :code="basicCode">
        <Chips v-model="value" />
        <p v-if="value" class="mt-2">Values: {{ value.join(', ') }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Separator">
      <DemoCard title="Comma Separator" :code="separatorCode">
        <Chips v-model="value2" separator="," />
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
import Chips from 'primevue/chips'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value = ref()
const value2 = ref()

const basicCode = `<Chips v-model="value" />`
const separatorCode = `<Chips v-model="value" separator="," />`

const props = [
  { name: 'modelValue', type: 'array', default: 'null', description: 'Value of the component.' },
  { name: 'separator', type: 'string', default: 'null', description: 'Separator char to add an item when pressed in addition to the enter key.' },
  { name: 'max', type: 'number', default: 'null', description: 'Maximum number of entries allowed.' }
]
</script>
