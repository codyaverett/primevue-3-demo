<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>DataTable</h1>
      <p class="description">DataTable displays data in tabular format with powerful features.</p>
    </div>

    <DemoSection title="Basic">
      <DemoCard title="Basic Table" :code="basicCode">
        <DataTable :value="products">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Sortable">
      <DemoCard title="Sortable Columns" :code="sortableCode">
        <DataTable :value="products">
          <Column field="code" header="Code" sortable></Column>
          <Column field="name" header="Name" sortable></Column>
          <Column field="category" header="Category" sortable></Column>
          <Column field="quantity" header="Quantity" sortable></Column>
        </DataTable>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Paginator">
      <DemoCard title="With Pagination" :code="paginatorCode">
        <DataTable :value="products" paginator :rows="5">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
        </DataTable>
      </DemoCard>
    </DemoSection>

    <DemoSection title="Selection">
      <DemoCard title="Row Selection" :code="selectionCode">
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="code">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
        </DataTable>
        <p v-if="selectedProduct" class="mt-2">Selected: {{ selectedProduct.name }}</p>
      </DemoCard>
    </DemoSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'

const selectedProduct = ref()
const products = ref([
  { code: 'P001', name: 'Laptop', category: 'Electronics', quantity: 12 },
  { code: 'P002', name: 'Mouse', category: 'Accessories', quantity: 50 },
  { code: 'P003', name: 'Keyboard', category: 'Accessories', quantity: 30 },
  { code: 'P004', name: 'Monitor', category: 'Electronics', quantity: 8 },
  { code: 'P005', name: 'Headphones', category: 'Audio', quantity: 25 },
  { code: 'P006', name: 'Webcam', category: 'Electronics', quantity: 15 },
  { code: 'P007', name: 'Desk Lamp', category: 'Furniture', quantity: 20 }
])

const basicCode = `<DataTable :value="products">
  <Column field="code" header="Code"></Column>
  <Column field="name" header="Name"></Column>
  <Column field="category" header="Category"></Column>
</DataTable>`

const sortableCode = `<DataTable :value="products">
  <Column field="code" header="Code" sortable></Column>
  <Column field="name" header="Name" sortable></Column>
</DataTable>`

const paginatorCode = `<DataTable :value="products" paginator :rows="5">
  <Column field="code" header="Code"></Column>
  <Column field="name" header="Name"></Column>
</DataTable>`

const selectionCode = `<DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="code">
  <Column field="code" header="Code"></Column>
  <Column field="name" header="Name"></Column>
</DataTable>`
</script>
