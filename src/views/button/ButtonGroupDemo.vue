<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>ButtonGroup</h1>
      <p class="description">
        Multiple buttons are grouped together to display related actions.
      </p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic ButtonGroup" :code="basicCode">
        <ButtonGroup>
          <Button label="Save" icon="pi pi-check" />
          <Button label="Delete" icon="pi pi-trash" />
          <Button label="Cancel" icon="pi pi-times" />
        </ButtonGroup>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Icons">
      <DemoCard title="Icon Only" :code="iconsCode">
        <ButtonGroup>
          <Button icon="pi pi-align-left" />
          <Button icon="pi pi-align-center" />
          <Button icon="pi pi-align-right" />
          <Button icon="pi pi-align-justify" />
        </ButtonGroup>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Severities">
      <DemoCard title="Different Severities" :code="severitiesCode">
        <ButtonGroup>
          <Button label="Save" severity="success" />
          <Button label="Info" severity="info" />
          <Button label="Warning" severity="warning" />
        </ButtonGroup>
      </DemoCard>
    </DemoSection>

    <DemoSection title="API">
      <p>ButtonGroup is a CSS component. Use it as a wrapper around buttons.</p>
    </DemoSection>
  </div>
</template>

<script setup>
import ButtonGroup from 'primevue/buttongroup'
import Button from 'primevue/button'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'

const basicCode = `<ButtonGroup>
  <Button label="Save" icon="pi pi-check" />
  <Button label="Delete" icon="pi pi-trash" />
  <Button label="Cancel" icon="pi pi-times" />
</ButtonGroup>`

const iconsCode = `<ButtonGroup>
  <Button icon="pi pi-align-left" />
  <Button icon="pi pi-align-center" />
  <Button icon="pi pi-align-right" />
  <Button icon="pi pi-align-justify" />
</ButtonGroup>`

const severitiesCode = `<ButtonGroup>
  <Button label="Save" severity="success" />
  <Button label="Info" severity="info" />
  <Button label="Warning" severity="warning" />
</ButtonGroup>`
</script>
