<template>
  <div class="api-table">
    <DataTable
      :value="items"
      :rows="10"
      :paginator="items.length > 10"
      responsiveLayout="scroll"
      stripedRows
    >
      <Column field="name" header="Name" :sortable="true" style="min-width: 12rem">
        <template #body="slotProps">
          <code class="api-name">{{ slotProps.data.name }}</code>
        </template>
      </Column>
      <Column field="type" header="Type" :sortable="true" style="min-width: 10rem">
        <template #body="slotProps">
          <Tag :value="slotProps.data.type" severity="info" />
        </template>
      </Column>
      <Column v-if="showDefault" field="default" header="Default" :sortable="true" style="min-width: 8rem">
        <template #body="slotProps">
          <code v-if="slotProps.data.default" class="api-default">{{ slotProps.data.default }}</code>
          <span v-else class="text-color-secondary">-</span>
        </template>
      </Column>
      <Column field="description" header="Description" style="min-width: 20rem">
        <template #body="slotProps">
          <span class="api-description">{{ slotProps.data.description }}</span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'

defineProps({
  items: {
    type: Array,
    required: true
  },
  showDefault: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.api-table {
  margin-top: 1rem;
}

.api-name {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  color: var(--primary-color);
  background-color: var(--surface-b);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.api-default {
  font-family: 'Courier New', Courier, monospace;
  color: var(--text-color-secondary);
  background-color: var(--surface-b);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.api-description {
  color: var(--text-color);
  line-height: 1.6;
}
</style>
