<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>TriStateCheckbox</h1>
      <p class="description">
        TriStateCheckbox is used to select either "true", "false" or "null" as the value.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic TriStateCheckbox" :code="basicCode">
        <TriStateCheckbox v-model="value" />
        <p class="mt-2">Value: {{ value === null ? 'null' : value.toString() }}</p>
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
import TriStateCheckbox from 'primevue/tristatecheckbox'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const value = ref(null)

const basicCode = `<TriStateCheckbox v-model="value" />`

const props = [
  { name: 'modelValue', type: 'boolean', default: 'null', description: 'Value of the component.' }
]
</script>
