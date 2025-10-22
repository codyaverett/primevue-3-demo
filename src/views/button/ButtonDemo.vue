<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>Button</h1>
      <p class="description">
        Button is an extension to standard button element with icons and theming.
      </p>
    </div>

    <DemoSection title="Basic Buttons">
      <DemoCard
        title="Default Buttons"
        :code="basicCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button label="Primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Info" severity="info" />
          <Button label="Warning" severity="warning" />
          <Button label="Help" severity="help" />
          <Button label="Danger" severity="danger" />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Button Variants">
      <DemoCard
        title="Text Buttons"
        :code="textCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button label="Primary" text />
          <Button label="Secondary" severity="secondary" text />
          <Button label="Success" severity="success" text />
          <Button label="Info" severity="info" text />
          <Button label="Warning" severity="warning" text />
          <Button label="Help" severity="help" text />
          <Button label="Danger" severity="danger" text />
        </div>
      </DemoCard>

      <DemoCard
        title="Outlined Buttons"
        :code="outlinedCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button label="Primary" outlined />
          <Button label="Secondary" severity="secondary" outlined />
          <Button label="Success" severity="success" outlined />
          <Button label="Info" severity="info" outlined />
          <Button label="Warning" severity="warning" outlined />
          <Button label="Help" severity="help" outlined />
          <Button label="Danger" severity="danger" outlined />
        </div>
      </DemoCard>

      <DemoCard
        title="Raised Buttons"
        :code="raisedCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button label="Primary" raised />
          <Button label="Secondary" severity="secondary" raised />
          <Button label="Success" severity="success" raised />
          <Button label="Info" severity="info" raised />
          <Button label="Warning" severity="warning" raised />
          <Button label="Help" severity="help" raised />
          <Button label="Danger" severity="danger" raised />
        </div>
      </DemoCard>

      <DemoCard
        title="Rounded Buttons"
        :code="roundedCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button label="Primary" rounded />
          <Button label="Secondary" severity="secondary" rounded />
          <Button label="Success" severity="success" rounded />
          <Button label="Info" severity="info" rounded />
          <Button label="Warning" severity="warning" rounded />
          <Button label="Help" severity="help" rounded />
          <Button label="Danger" severity="danger" rounded />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Icons">
      <DemoCard
        title="Icon Buttons"
        :code="iconCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button icon="pi pi-check" />
          <Button icon="pi pi-check" severity="secondary" />
          <Button icon="pi pi-check" severity="success" />
          <Button icon="pi pi-check" severity="info" />
          <Button icon="pi pi-check" severity="warning" />
          <Button icon="pi pi-check" severity="help" />
          <Button icon="pi pi-check" severity="danger" />
        </div>
      </DemoCard>

      <DemoCard
        title="Icon with Label"
        :code="iconLabelCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button label="Submit" icon="pi pi-check" />
          <Button label="Cancel" icon="pi pi-times" severity="secondary" />
          <Button label="Search" icon="pi pi-search" iconPos="right" />
          <Button label="Delete" icon="pi pi-trash" severity="danger" iconPos="right" />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Sizes">
      <DemoCard
        title="Button Sizes"
        :code="sizesCode"
      >
        <div class="flex flex-wrap align-items-center gap-3">
          <Button label="Small" size="small" />
          <Button label="Normal" />
          <Button label="Large" size="large" />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="States">
      <DemoCard
        title="Loading and Disabled"
        :code="statesCode"
      >
        <div class="flex flex-wrap gap-3">
          <Button label="Loading" :loading="loading" @click="load" />
          <Button label="Disabled" disabled />
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="API">
      <h3>Props</h3>
      <ApiTable :items="props" />

      <h3 class="mt-4">Events</h3>
      <ApiTable :items="events" :showDefault="false" />
    </DemoSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

const loading = ref(false)

const load = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const basicCode = `<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Info" severity="info" />
<Button label="Warning" severity="warning" />
<Button label="Help" severity="help" />
<Button label="Danger" severity="danger" />`

const textCode = `<Button label="Primary" text />
<Button label="Secondary" severity="secondary" text />
<Button label="Success" severity="success" text />`

const outlinedCode = `<Button label="Primary" outlined />
<Button label="Secondary" severity="secondary" outlined />
<Button label="Success" severity="success" outlined />`

const raisedCode = `<Button label="Primary" raised />
<Button label="Secondary" severity="secondary" raised />
<Button label="Success" severity="success" raised />`

const roundedCode = `<Button label="Primary" rounded />
<Button label="Secondary" severity="secondary" rounded />
<Button label="Success" severity="success" rounded />`

const iconCode = `<Button icon="pi pi-check" />
<Button icon="pi pi-check" severity="secondary" />
<Button icon="pi pi-check" severity="success" />`

const iconLabelCode = `<Button label="Submit" icon="pi pi-check" />
<Button label="Cancel" icon="pi pi-times" severity="secondary" />
<Button label="Search" icon="pi pi-search" iconPos="right" />`

const sizesCode = `<Button label="Small" size="small" />
<Button label="Normal" />
<Button label="Large" size="large" />`

const statesCode = `<Button label="Loading" :loading="loading" @click="load" />
<Button label="Disabled" disabled />`

const props = [
  {
    name: 'label',
    type: 'string',
    default: 'null',
    description: 'Text of the button.'
  },
  {
    name: 'icon',
    type: 'string',
    default: 'null',
    description: 'Name of the icon.'
  },
  {
    name: 'iconPos',
    type: 'string',
    default: 'left',
    description: 'Position of the icon, valid values are "left", "right", "top" and "bottom".'
  },
  {
    name: 'severity',
    type: 'string',
    default: 'null',
    description: 'Severity of the button. Valid values are "secondary", "success", "info", "warning", "help" and "danger".'
  },
  {
    name: 'size',
    type: 'string',
    default: 'null',
    description: 'Size of the button, valid values are "small" and "large".'
  },
  {
    name: 'text',
    type: 'boolean',
    default: 'false',
    description: 'Whether the button is text only.'
  },
  {
    name: 'outlined',
    type: 'boolean',
    default: 'false',
    description: 'Whether the button is outlined.'
  },
  {
    name: 'raised',
    type: 'boolean',
    default: 'false',
    description: 'Whether the button has a shadow.'
  },
  {
    name: 'rounded',
    type: 'boolean',
    default: 'false',
    description: 'Whether the button corners are rounded.'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Whether the button is in loading state.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'When present, it specifies that the element should be disabled.'
  }
]

const events = [
  {
    name: 'click',
    type: 'Event',
    description: 'Callback to invoke when button is clicked.'
  }
]
</script>

<style scoped>
.demo-section + .demo-section {
  margin-top: 3rem;
}
</style>
