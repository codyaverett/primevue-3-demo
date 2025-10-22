<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Editor</h1>
      <p class="description">
        Editor is rich text editor component based on Quill.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Editor" :code="basicCode">
        <Editor v-model="text" editorStyle="height: 320px" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="API">
      <h3>Props</h3>
      <ApiTable :items="props" />
      <p class="mt-3"><strong>Note:</strong> Editor requires Quill library to be installed separately. Run: <code>npm install quill</code></p>
    </DemoSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Editor from 'primevue/editor'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const text = ref('<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>')

const basicCode = `<Editor v-model="text" editorStyle="height: 320px" />`

const props = [
  { name: 'modelValue', type: 'string', default: 'null', description: 'Value of the content.' },
  { name: 'placeholder', type: 'string', default: 'null', description: 'Placeholder text to show when editor is empty.' },
  { name: 'editorStyle', type: 'any', default: 'null', description: 'Inline style of the container.' }
]
</script>
