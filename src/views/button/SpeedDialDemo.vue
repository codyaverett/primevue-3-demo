<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>SpeedDial</h1>
      <p class="description">
        SpeedDial is a floating action button with a popup menu.
      </p>
    </div>

    <DemoSection title="Linear">
      <DemoCard title="Linear Direction" :code="linearCode">
        <div class="flex gap-3" style="height: 500px; position: relative">
          <SpeedDial :model="items" direction="up" style="position: absolute; left: 0; bottom: 0" />
          <SpeedDial :model="items" direction="down" style="position: absolute; left: 80px; top: 0" />
          <SpeedDial :model="items" direction="left" style="position: absolute; right: 0; top: 0" />
          <SpeedDial :model="items" direction="right" style="position: absolute; left: 160px; top: 0" />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Circle">
      <DemoCard title="Circle Direction" :code="circleCode">
        <div class="flex gap-3" style="height: 500px; position: relative">
          <SpeedDial :model="items" type="circle" showIcon="pi pi-bars" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
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
import SpeedDial from 'primevue/speeddial'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const items = ref([
  {
    label: 'Add',
    icon: 'pi pi-pencil'
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash'
  }
])

const linearCode = `<SpeedDial :model="items" direction="up" />
<SpeedDial :model="items" direction="down" />
<SpeedDial :model="items" direction="left" />
<SpeedDial :model="items" direction="right" />`

const circleCode = `<SpeedDial :model="items" type="circle" showIcon="pi pi-bars" />`

const props = [
  { name: 'model', type: 'array', default: 'null', description: 'MenuModel instance to define the action items.' },
  { name: 'direction', type: 'string', default: 'up', description: 'Specifies the opening direction of actions. Valid values are "up", "down", "left", "right".' },
  { name: 'type', type: 'string', default: 'linear', description: 'Specifies the opening type of actions.' },
  { name: 'showIcon', type: 'string', default: 'pi pi-plus', description: 'Show icon of the button element.' }
]
</script>
