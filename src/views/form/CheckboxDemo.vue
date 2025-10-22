<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Checkbox</h1>
      <p class="description">
        Checkbox is an extension to standard checkbox element with theming.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Binary Checkbox" :code="basicCode">
        <div class="flex align-items-center">
          <Checkbox v-model="checked" binary inputId="binary" />
          <label for="binary" class="ml-2">Accept terms and conditions</label>
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Multiple">
      <DemoCard title="Multiple Selection" :code="multipleCode">
        <div class="flex flex-column gap-3">
          <div class="flex align-items-center">
            <Checkbox v-model="categories" inputId="category1" value="Technology" />
            <label for="category1" class="ml-2">Technology</label>
          </div>
          <div class="flex align-items-center">
            <Checkbox v-model="categories" inputId="category2" value="Sports" />
            <label for="category2" class="ml-2">Sports</label>
          </div>
          <div class="flex align-items-center">
            <Checkbox v-model="categories" inputId="category3" value="Entertainment" />
            <label for="category3" class="ml-2">Entertainment</label>
          </div>
        </div>
        <p v-if="categories.length" class="mt-3">Selected: {{ categories.join(', ') }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Disabled">
      <DemoCard title="Disabled State" :code="disabledCode">
        <Checkbox v-model="checked" binary disabled />
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
import Checkbox from 'primevue/checkbox'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const checked = ref(false)
const categories = ref([])

const basicCode = `<Checkbox v-model="checked" binary inputId="binary" />
<label for="binary" class="ml-2">Accept terms and conditions</label>`

const multipleCode = `<Checkbox v-model="categories" inputId="category1" value="Technology" />
<Checkbox v-model="categories" inputId="category2" value="Sports" />
<Checkbox v-model="categories" inputId="category3" value="Entertainment" />`

const disabledCode = `<Checkbox v-model="checked" binary disabled />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the checkbox.' },
  { name: 'value', type: 'any', default: 'null', description: 'Value binding of the checkbox.' },
  { name: 'binary', type: 'boolean', default: 'false', description: 'Allows to select a boolean value instead of multiple values.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the element should be disabled.' }
]
</script>
