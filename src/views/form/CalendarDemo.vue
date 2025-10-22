<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Calendar</h1>
      <p class="description">
        Calendar is an input component to select a date.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Calendar" :code="basicCode">
        <Calendar v-model="date1" />
        <p v-if="date1" class="mt-2">Selected: {{ date1.toLocaleDateString() }}</p>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Icon">
      <DemoCard title="With Icon" :code="iconCode">
        <Calendar v-model="date2" showIcon iconDisplay="input" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Time Picker">
      <DemoCard title="Date and Time" :code="timeCode">
        <Calendar v-model="datetime" showTime hourFormat="12" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Date Range">
      <DemoCard title="Range Selection" :code="rangeCode">
        <Calendar v-model="dates" selectionMode="range" />
      </DemoCard>
    </DemoSection>

    <DemoSection title="Multiple">
      <DemoCard title="Multiple Dates" :code="multipleCode">
        <Calendar v-model="multipleDates" selectionMode="multiple" />
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
import Calendar from 'primevue/calendar'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const date1 = ref()
const date2 = ref()
const datetime = ref()
const dates = ref()
const multipleDates = ref()

const basicCode = `<Calendar v-model="date" />`
const iconCode = `<Calendar v-model="date" showIcon iconDisplay="input" />`
const timeCode = `<Calendar v-model="datetime" showTime hourFormat="12" />`
const rangeCode = `<Calendar v-model="dates" selectionMode="range" />`
const multipleCode = `<Calendar v-model="multipleDates" selectionMode="multiple" />`

const props = [
  { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
  { name: 'selectionMode', type: 'string', default: 'single', description: 'Defines the quantity of the selection, valid values are "single", "multiple" and "range".' },
  { name: 'showIcon', type: 'boolean', default: 'false', description: 'When enabled, displays a button with icon next to input.' },
  { name: 'showTime', type: 'boolean', default: 'false', description: 'Whether to display timepicker.' },
  { name: 'hourFormat', type: 'string', default: '24', description: 'Specifies 12 or 24 hour format.' },
  { name: 'dateFormat', type: 'string', default: 'mm/dd/yy', description: 'Format of the date.' },
  { name: 'inline', type: 'boolean', default: 'false', description: 'When enabled, displays the calendar as inline.' }
]
</script>
