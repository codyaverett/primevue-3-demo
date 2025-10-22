<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>SplitButton</h1>
      <p class="description">
        SplitButton groups a set of commands in an overlay with a default command.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic SplitButton" :code="basicCode">
        <SplitButton label="Save" :model="items" @click="save" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Severities">
      <DemoCard title="Different Severities" :code="severitiesCode">
        <div class="flex flex-wrap gap-3">
          <SplitButton label="Primary" :model="items" />
          <SplitButton label="Secondary" :model="items" severity="secondary" />
          <SplitButton label="Success" :model="items" severity="success" />
          <SplitButton label="Info" :model="items" severity="info" />
          <SplitButton label="Warning" :model="items" severity="warning" />
          <SplitButton label="Danger" :model="items" severity="danger" />
        </div>
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
import { useToast } from 'primevue/usetoast'
import SplitButton from 'primevue/splitbutton'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const toast = useToast()

const items = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
      toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 })
    }
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
    command: () => {
      toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 })
    }
  }
])

const save = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 })
}

const basicCode = `<SplitButton label="Save" :model="items" @click="save" />`
const severitiesCode = `<SplitButton label="Primary" :model="items" />
<SplitButton label="Secondary" :model="items" severity="secondary" />
<SplitButton label="Success" :model="items" severity="success" />`

const props = [
  { name: 'label', type: 'string', default: 'null', description: 'Text of the button.' },
  { name: 'model', type: 'array', default: 'null', description: 'MenuModel instance to define the overlay items.' },
  { name: 'severity', type: 'string', default: 'null', description: 'Severity of the button.' },
  { name: 'icon', type: 'string', default: 'null', description: 'Name of the icon.' }
]
</script>
