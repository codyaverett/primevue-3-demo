<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>InputGroup</h1>
      <p class="description">
        Text, icon, buttons and other content can be grouped next to an input.
      </p>
    </div>

    <DemoSection title="Addons">
      <DemoCard title="With Addons" :code="addonsCode">
        <div class="flex flex-column gap-3">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Username" />
          </InputGroup>

          <InputGroup>
            <InputText placeholder="Price" />
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupAddon>.00</InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <InputText placeholder="Website" />
          </InputGroup>
        </div>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Multiple">
      <DemoCard title="Multiple Inputs" :code="multipleCode">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-clock"></i>
          </InputGroupAddon>
          <InputText placeholder="Price" />
          <InputGroupAddon>$</InputGroupAddon>
          <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Button">
      <DemoCard title="With Buttons" :code="buttonCode">
        <InputGroup>
          <Button label="Search" />
          <InputText placeholder="Keyword" />
        </InputGroup>
      </DemoCard>
    </DemoSection>

    <DemoSection title="API">
      <p>InputGroup is a CSS component. Use PrimeFlex utility classes for styling.</p>
    </DemoSection>
  </div>
</template>

<script setup>
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'

const addonsCode = `<InputGroup>
  <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
  <InputText placeholder="Username" />
</InputGroup>

<InputGroup>
  <InputText placeholder="Price" />
  <InputGroupAddon>$</InputGroupAddon>
  <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>`

const multipleCode = `<InputGroup>
  <InputGroupAddon><i class="pi pi-clock"></i></InputGroupAddon>
  <InputText placeholder="Price" />
  <InputGroupAddon>$</InputGroupAddon>
  <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>`

const buttonCode = `<InputGroup>
  <Button label="Search" />
  <InputText placeholder="Keyword" />
</InputGroup>`
</script>
