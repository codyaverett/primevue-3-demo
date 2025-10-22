<template>
  <div class="main-layout">
    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Sidebar :isVisible="sidebarVisible" @close="closeSidebar" />
      <div class="content-wrapper">
        <div class="page-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

const sidebarVisible = ref(false)

const { loadSavedTheme } = useTheme()

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

const closeSidebar = () => {
  sidebarVisible.value = false
}

onMounted(() => {
  loadSavedTheme()
})
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  display: flex;
  flex: 1;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
</style>
