<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>RadioButton</h1>
      <p class="description">
        RadioButton is an extension to standard radio button element with theming.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Radio Buttons" :code="basicCode">
        <div class="flex flex-column gap-3">
          <div class="flex align-items-center">
            <RadioButton v-model="selectedOption" inputId="option1" value="Option 1" />
            <label for="option1" class="ml-2">Option 1</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="selectedOption" inputId="option2" value="Option 2" />
            <label for="option2" class="ml-2">Option 2</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="selectedOption" inputId="option3" value="Option 3" />
            <label for="option3" class="ml-2">Option 3</label>
          </div>
        </div>
        <p v-if="selectedOption" class="mt-3">Selected: {{ selectedOption }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Dynamic">
      <DemoCard title="Dynamic Options" :code="dynamicCode">
        <div class="flex flex-column gap-3">
          <div v-for="category in categories" :key="category.key" class="flex align-items-center">
            <RadioButton v-model="selectedCategory" :inputId="category.key" :value="category" />
            <label :for="category.key" class="ml-2">{{ category.name }}</label>
          </div>
        </div>
        <p v-if="selectedCategory" class="mt-3">Selected: {{ selectedCategory.name }}</p>
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
import RadioButton from 'primevue/radiobutton'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const selectedOption = ref()
const selectedCategory = ref()

const categories = ref([
  { name: 'Technology', key: 'T' },
  { name: 'Sports', key: 'S' },
  { name: 'Entertainment', key: 'E' }
])

const basicCode = `<RadioButton v-model="selectedOption" inputId="option1" value="Option 1" />
<RadioButton v-model="selectedOption" inputId="option2" value="Option 2" />
<RadioButton v-model="selectedOption" inputId="option3" value="Option 3" />`

const dynamicCode = `<div v-for="category in categories" :key="category.key">
  <RadioButton v-model="selectedCategory" :inputId="category.key" :value="category" />
  <label :for="category.key">{{ category.name }}</label>
</div>`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the checkbox.' },
  { name: 'value', type: 'any', default: 'null', description: 'Value binding of the checkbox.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the element should be disabled.' }
]
</script>
