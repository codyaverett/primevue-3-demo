<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>TreeSelect</h1>
      <p class="description">
        TreeSelect is a form component to choose from hierarchical data.
      </p>
    </div>

    <DemoSection title="Single">
      <DemoCard title="Single Selection" :code="singleCode">
        <TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item" class="w-full md:w-20rem" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Multiple">
      <DemoCard title="Multiple Selection" :code="multipleCode">
        <TreeSelect v-model="selectedNodes" :options="nodes" selectionMode="multiple" metaKeySelection placeholder="Select Items" class="w-full md:w-20rem" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Checkbox">
      <DemoCard title="Checkbox Selection" :code="checkboxCode">
        <TreeSelect v-model="selectedNodesCheckbox" :options="nodes" selectionMode="checkbox" placeholder="Select Items" class="w-full md:w-20rem" />
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
import TreeSelect from 'primevue/treeselect'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const selectedNode = ref()
const selectedNodes = ref()
const selectedNodesCheckbox = ref()

const nodes = ref([
  {
    key: '0',
    label: 'Documents',
    children: [
      { key: '0-0', label: 'Work', children: [{ key: '0-0-0', label: 'Expenses.doc' }, { key: '0-0-1', label: 'Resume.doc' }] },
      { key: '0-1', label: 'Home', children: [{ key: '0-1-0', label: 'Invoice.pdf' }] }
    ]
  },
  {
    key: '1',
    label: 'Events',
    children: [
      { key: '1-0', label: 'Meeting' },
      { key: '1-1', label: 'Product Launch' },
      { key: '1-2', label: 'Report Review' }
    ]
  }
])

const singleCode = `<TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item" />`
const multipleCode = `<TreeSelect v-model="selectedNodes" :options="nodes" selectionMode="multiple" metaKeySelection placeholder="Select Items" />`
const checkboxCode = `<TreeSelect v-model="selectedNodes" :options="nodes" selectionMode="checkbox" placeholder="Select Items" />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'options', type: 'array', default: 'null', description: 'An array of treenodes.' },
  { name: 'selectionMode', type: 'string', default: 'single', description: 'Defines the selection mode, valid values "single", "multiple", and "checkbox".' },
  { name: 'placeholder', type: 'string', default: 'null', description: 'Placeholder text for the input.' }
]
</script>
