<template>
  <div class="sidebar" :class="{ 'sidebar-mobile-active': isVisible }">
    <div class="sidebar-header">
      <h3>Components</h3>
      <Button
        icon="pi pi-times"
        class="p-button-text p-button-rounded close-btn"
        @click="$emit('close')"
      />
    </div>

    <div class="sidebar-content">
      <PanelMenu :model="menuItems" class="component-menu" />
    </div>
  </div>
  <div
    v-if="isVisible"
    class="sidebar-overlay"
    @click="$emit('close')"
  ></div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PanelMenu from 'primevue/panelmenu'
import Button from 'primevue/button'

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

const router = useRouter()

const menuItems = ref([
  {
    label: 'Form',
    icon: 'pi pi-fw pi-pencil',
    items: [
      { label: 'AutoComplete', command: () => router.push('/form/autocomplete') },
      { label: 'Calendar', command: () => router.push('/form/calendar') },
      { label: 'CascadeSelect', command: () => router.push('/form/cascadeselect') },
      { label: 'Checkbox', command: () => router.push('/form/checkbox') },
      { label: 'Chips', command: () => router.push('/form/chips') },
      { label: 'ColorPicker', command: () => router.push('/form/colorpicker') },
      { label: 'Dropdown', command: () => router.push('/form/dropdown') },
      { label: 'Editor', command: () => router.push('/form/editor') },
      { label: 'InputGroup', command: () => router.push('/form/inputgroup') },
      { label: 'InputMask', command: () => router.push('/form/inputmask') },
      { label: 'InputNumber', command: () => router.push('/form/inputnumber') },
      { label: 'InputSwitch', command: () => router.push('/form/inputswitch') },
      { label: 'InputText', command: () => router.push('/form/inputtext') },
      { label: 'Knob', command: () => router.push('/form/knob') },
      { label: 'Listbox', command: () => router.push('/form/listbox') },
      { label: 'MultiSelect', command: () => router.push('/form/multiselect') },
      { label: 'Password', command: () => router.push('/form/password') },
      { label: 'RadioButton', command: () => router.push('/form/radiobutton') },
      { label: 'Rating', command: () => router.push('/form/rating') },
      { label: 'SelectButton', command: () => router.push('/form/selectbutton') },
      { label: 'Slider', command: () => router.push('/form/slider') },
      { label: 'Textarea', command: () => router.push('/form/textarea') },
      { label: 'ToggleButton', command: () => router.push('/form/togglebutton') },
      { label: 'TreeSelect', command: () => router.push('/form/treeselect') },
      { label: 'TriStateCheckbox', command: () => router.push('/form/tristatecheckbox') }
    ]
  },
  {
    label: 'Button',
    icon: 'pi pi-fw pi-mobile',
    items: [
      { label: 'Button', command: () => router.push('/button/button') },
      { label: 'ButtonGroup', command: () => router.push('/button/buttongroup') },
      { label: 'SpeedDial', command: () => router.push('/button/speeddial') },
      { label: 'SplitButton', command: () => router.push('/button/splitbutton') }
    ]
  },
  {
    label: 'Data',
    icon: 'pi pi-fw pi-table',
    items: [
      { label: 'DataTable', command: () => router.push('/data/datatable') },
      { label: 'DataView', command: () => router.push('/data/dataview') },
      { label: 'OrderList', command: () => router.push('/data/orderlist') },
      { label: 'OrganizationChart', command: () => router.push('/data/organizationchart') },
      { label: 'Paginator', command: () => router.push('/data/paginator') },
      { label: 'PickList', command: () => router.push('/data/picklist') },
      { label: 'Timeline', command: () => router.push('/data/timeline') },
      { label: 'Tree', command: () => router.push('/data/tree') },
      { label: 'TreeTable', command: () => router.push('/data/treetable') },
      { label: 'VirtualScroller', command: () => router.push('/data/virtualscroller') }
    ]
  },
  {
    label: 'Panel',
    icon: 'pi pi-fw pi-tablet',
    items: [
      { label: 'Accordion', command: () => router.push('/panel/accordion') },
      { label: 'Card', command: () => router.push('/panel/card') },
      { label: 'DeferredContent', command: () => router.push('/panel/deferredcontent') },
      { label: 'Divider', command: () => router.push('/panel/divider') },
      { label: 'Fieldset', command: () => router.push('/panel/fieldset') },
      { label: 'Panel', command: () => router.push('/panel/panel') },
      { label: 'ScrollPanel', command: () => router.push('/panel/scrollpanel') },
      { label: 'Splitter', command: () => router.push('/panel/splitter') },
      { label: 'Stepper', command: () => router.push('/panel/stepper') },
      { label: 'TabView', command: () => router.push('/panel/tabview') },
      { label: 'Toolbar', command: () => router.push('/panel/toolbar') }
    ]
  },
  {
    label: 'Overlay',
    icon: 'pi pi-fw pi-clone',
    items: [
      { label: 'ConfirmDialog', command: () => router.push('/overlay/confirmdialog') },
      { label: 'ConfirmPopup', command: () => router.push('/overlay/confirmpopup') },
      { label: 'Dialog', command: () => router.push('/overlay/dialog') },
      { label: 'DynamicDialog', command: () => router.push('/overlay/dynamicdialog') },
      { label: 'OverlayPanel', command: () => router.push('/overlay/overlaypanel') },
      { label: 'Sidebar', command: () => router.push('/overlay/sidebar') },
      { label: 'Tooltip', command: () => router.push('/overlay/tooltip') }
    ]
  },
  {
    label: 'File',
    icon: 'pi pi-fw pi-upload',
    items: [
      { label: 'FileUpload', command: () => router.push('/file/fileupload') }
    ]
  },
  {
    label: 'Menu',
    icon: 'pi pi-fw pi-bars',
    items: [
      { label: 'Breadcrumb', command: () => router.push('/menu/breadcrumb') },
      { label: 'ContextMenu', command: () => router.push('/menu/contextmenu') },
      { label: 'Dock', command: () => router.push('/menu/dock') },
      { label: 'Menu', command: () => router.push('/menu/menu') },
      { label: 'Menubar', command: () => router.push('/menu/menubar') },
      { label: 'MegaMenu', command: () => router.push('/menu/megamenu') },
      { label: 'PanelMenu', command: () => router.push('/menu/panelmenu') },
      { label: 'Steps', command: () => router.push('/menu/steps') },
      { label: 'TabMenu', command: () => router.push('/menu/tabmenu') },
      { label: 'TieredMenu', command: () => router.push('/menu/tieredmenu') }
    ]
  },
  {
    label: 'Chart',
    icon: 'pi pi-fw pi-chart-bar',
    items: [
      { label: 'Chart', command: () => router.push('/chart/chart') }
    ]
  },
  {
    label: 'Messages',
    icon: 'pi pi-fw pi-comment',
    items: [
      { label: 'Message', command: () => router.push('/messages/message') },
      { label: 'Toast', command: () => router.push('/messages/toast') }
    ]
  },
  {
    label: 'Media',
    icon: 'pi pi-fw pi-image',
    items: [
      { label: 'Carousel', command: () => router.push('/media/carousel') },
      { label: 'Galleria', command: () => router.push('/media/galleria') },
      { label: 'Image', command: () => router.push('/media/image') }
    ]
  },
  {
    label: 'Misc',
    icon: 'pi pi-fw pi-star',
    items: [
      { label: 'Avatar', command: () => router.push('/misc/avatar') },
      { label: 'AvatarGroup', command: () => router.push('/misc/avatargroup') },
      { label: 'Badge', command: () => router.push('/misc/badge') },
      { label: 'BlockUI', command: () => router.push('/misc/blockui') },
      { label: 'Chip', command: () => router.push('/misc/chip') },
      { label: 'FocusTrap', command: () => router.push('/misc/focustrap') },
      { label: 'Inplace', command: () => router.push('/misc/inplace') },
      { label: 'MeterGroup', command: () => router.push('/misc/metergroup') },
      { label: 'ProgressBar', command: () => router.push('/misc/progressbar') },
      { label: 'ProgressSpinner', command: () => router.push('/misc/progressspinner') },
      { label: 'ScrollTop', command: () => router.push('/misc/scrolltop') },
      { label: 'Skeleton', command: () => router.push('/misc/skeleton') },
      { label: 'StyleClass', command: () => router.push('/misc/styleclass') },
      { label: 'Tag', command: () => router.push('/misc/tag') },
      { label: 'Terminal', command: () => router.push('/misc/terminal') }
    ]
  }
])
</script>

<style scoped>
.sidebar {
  width: 280px;
  background-color: var(--surface-card);
  border-right: 1px solid var(--surface-border);
  height: calc(100vh - 73px);
  overflow-y: auto;
  position: sticky;
  top: 73px;
  transition: transform 0.3s ease;
}

.sidebar-header {
  padding: 1.5rem 1rem;
  border-bottom: 1px solid var(--surface-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
}

.close-btn {
  display: none;
}

.sidebar-content {
  padding: 0.5rem 0;
}

.component-menu {
  border: none;
  background: transparent;
}

.sidebar-overlay {
  display: none;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1100;
    transform: translateX(-100%);
  }

  .sidebar-mobile-active {
    transform: translateX(0);
  }

  .close-btn {
    display: inline-flex;
  }

  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1099;
  }
}
</style>
