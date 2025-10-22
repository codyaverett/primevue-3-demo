<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>ColorPicker</h1>
      <p class="description">
        ColorPicker is an input component to select a color.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic ColorPicker" :code="basicCode">
        <ColorPicker v-model="color1" />
        <p v-if="color1" class="mt-2">Color: #{{ color1 }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Inline">
      <DemoCard title="Inline ColorPicker" :code="inlineCode">
        <ColorPicker v-model="color2" inline />
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
import ColorPicker from 'primevue/colorpicker'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const color1 = ref()
const color2 = ref('1976D2')

const basicCode = `<ColorPicker v-model="color" />`
const inlineCode = `<ColorPicker v-model="color" inline />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'inline', type: 'boolean', default: 'false', description: 'Whether to display as an overlay or not.' },
  { name: 'format', type: 'string', default: 'hex', description: 'Format to use in value binding, supported formats are "hex", "rgb" and "hsb".' }
]
</script>
