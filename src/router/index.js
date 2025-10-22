import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  // Form Components
  {
    path: '/form/autocomplete',
    name: 'AutoComplete',
    component: () => import('../views/form/AutoCompleteDemo.vue')
  },
  {
    path: '/form/calendar',
    name: 'Calendar',
    component: () => import('../views/form/CalendarDemo.vue')
  },
  {
    path: '/form/cascadeselect',
    name: 'CascadeSelect',
    component: () => import('../views/form/CascadeSelectDemo.vue')
  },
  {
    path: '/form/checkbox',
    name: 'Checkbox',
    component: () => import('../views/form/CheckboxDemo.vue')
  },
  {
    path: '/form/chips',
    name: 'Chips',
    component: () => import('../views/form/ChipsDemo.vue')
  },
  {
    path: '/form/colorpicker',
    name: 'ColorPicker',
    component: () => import('../views/form/ColorPickerDemo.vue')
  },
  {
    path: '/form/dropdown',
    name: 'Dropdown',
    component: () => import('../views/form/DropdownDemo.vue')
  },
  {
    path: '/form/editor',
    name: 'Editor',
    component: () => import('../views/form/EditorDemo.vue')
  },
  {
    path: '/form/inputgroup',
    name: 'InputGroup',
    component: () => import('../views/form/InputGroupDemo.vue')
  },
  {
    path: '/form/inputmask',
    name: 'InputMask',
    component: () => import('../views/form/InputMaskDemo.vue')
  },
  {
    path: '/form/inputnumber',
    name: 'InputNumber',
    component: () => import('../views/form/InputNumberDemo.vue')
  },
  {
    path: '/form/inputswitch',
    name: 'InputSwitch',
    component: () => import('../views/form/InputSwitchDemo.vue')
  },
  {
    path: '/form/inputtext',
    name: 'InputText',
    component: () => import('../views/form/InputTextDemo.vue')
  },
  {
    path: '/form/knob',
    name: 'Knob',
    component: () => import('../views/form/KnobDemo.vue')
  },
  {
    path: '/form/listbox',
    name: 'Listbox',
    component: () => import('../views/form/ListboxDemo.vue')
  },
  {
    path: '/form/multiselect',
    name: 'MultiSelect',
    component: () => import('../views/form/MultiSelectDemo.vue')
  },
  {
    path: '/form/password',
    name: 'Password',
    component: () => import('../views/form/PasswordDemo.vue')
  },
  {
    path: '/form/radiobutton',
    name: 'RadioButton',
    component: () => import('../views/form/RadioButtonDemo.vue')
  },
  {
    path: '/form/rating',
    name: 'Rating',
    component: () => import('../views/form/RatingDemo.vue')
  },
  {
    path: '/form/selectbutton',
    name: 'SelectButton',
    component: () => import('../views/form/SelectButtonDemo.vue')
  },
  {
    path: '/form/slider',
    name: 'Slider',
    component: () => import('../views/form/SliderDemo.vue')
  },
  {
    path: '/form/textarea',
    name: 'Textarea',
    component: () => import('../views/form/TextareaDemo.vue')
  },
  {
    path: '/form/togglebutton',
    name: 'ToggleButton',
    component: () => import('../views/form/ToggleButtonDemo.vue')
  },
  {
    path: '/form/treeselect',
    name: 'TreeSelect',
    component: () => import('../views/form/TreeSelectDemo.vue')
  },
  {
    path: '/form/tristatecheckbox',
    name: 'TriStateCheckbox',
    component: () => import('../views/form/TriStateCheckboxDemo.vue')
  },

  // Button Components
  {
    path: '/button/button',
    name: 'Button',
    component: () => import('../views/button/ButtonDemo.vue')
  },
  {
    path: '/button/buttongroup',
    name: 'ButtonGroup',
    component: () => import('../views/button/ButtonGroupDemo.vue')
  },
  {
    path: '/button/speeddial',
    name: 'SpeedDial',
    component: () => import('../views/button/SpeedDialDemo.vue')
  },
  {
    path: '/button/splitbutton',
    name: 'SplitButton',
    component: () => import('../views/button/SplitButtonDemo.vue')
  },

  // Data Components
  {
    path: '/data/datatable',
    name: 'DataTable',
    component: () => import('../views/data/DataTableDemo.vue')
  },
  {
    path: '/data/dataview',
    name: 'DataView',
    component: () => import('../views/data/DataViewDemo.vue')
  },
  {
    path: '/data/orderlist',
    name: 'OrderList',
    component: () => import('../views/data/OrderListDemo.vue')
  },
  {
    path: '/data/organizationchart',
    name: 'OrganizationChart',
    component: () => import('../views/data/OrganizationChartDemo.vue')
  },
  {
    path: '/data/paginator',
    name: 'Paginator',
    component: () => import('../views/data/PaginatorDemo.vue')
  },
  {
    path: '/data/picklist',
    name: 'PickList',
    component: () => import('../views/data/PickListDemo.vue')
  },
  {
    path: '/data/timeline',
    name: 'Timeline',
    component: () => import('../views/data/TimelineDemo.vue')
  },
  {
    path: '/data/tree',
    name: 'Tree',
    component: () => import('../views/data/TreeDemo.vue')
  },
  {
    path: '/data/treetable',
    name: 'TreeTable',
    component: () => import('../views/data/TreeTableDemo.vue')
  },
  {
    path: '/data/virtualscroller',
    name: 'VirtualScroller',
    component: () => import('../views/data/VirtualScrollerDemo.vue')
  },

  // Panel Components
  {
    path: '/panel/accordion',
    name: 'Accordion',
    component: () => import('../views/panel/AccordionDemo.vue')
  },
  {
    path: '/panel/card',
    name: 'Card',
    component: () => import('../views/panel/CardDemo.vue')
  },
  {
    path: '/panel/deferredcontent',
    name: 'DeferredContent',
    component: () => import('../views/panel/DeferredContentDemo.vue')
  },
  {
    path: '/panel/divider',
    name: 'Divider',
    component: () => import('../views/panel/DividerDemo.vue')
  },
  {
    path: '/panel/fieldset',
    name: 'Fieldset',
    component: () => import('../views/panel/FieldsetDemo.vue')
  },
  {
    path: '/panel/panel',
    name: 'Panel',
    component: () => import('../views/panel/PanelDemo.vue')
  },
  {
    path: '/panel/scrollpanel',
    name: 'ScrollPanel',
    component: () => import('../views/panel/ScrollPanelDemo.vue')
  },
  {
    path: '/panel/splitter',
    name: 'Splitter',
    component: () => import('../views/panel/SplitterDemo.vue')
  },
  {
    path: '/panel/stepper',
    name: 'Stepper',
    component: () => import('../views/panel/StepperDemo.vue')
  },
  {
    path: '/panel/tabview',
    name: 'TabView',
    component: () => import('../views/panel/TabViewDemo.vue')
  },
  {
    path: '/panel/toolbar',
    name: 'Toolbar',
    component: () => import('../views/panel/ToolbarDemo.vue')
  },

  // Overlay Components
  {
    path: '/overlay/confirmdialog',
    name: 'ConfirmDialog',
    component: () => import('../views/overlay/ConfirmDialogDemo.vue')
  },
  {
    path: '/overlay/confirmpopup',
    name: 'ConfirmPopup',
    component: () => import('../views/overlay/ConfirmPopupDemo.vue')
  },
  {
    path: '/overlay/dialog',
    name: 'Dialog',
    component: () => import('../views/overlay/DialogDemo.vue')
  },
  {
    path: '/overlay/dynamicdialog',
    name: 'DynamicDialog',
    component: () => import('../views/overlay/DynamicDialogDemo.vue')
  },
  {
    path: '/overlay/overlaypanel',
    name: 'OverlayPanel',
    component: () => import('../views/overlay/OverlayPanelDemo.vue')
  },
  {
    path: '/overlay/sidebar',
    name: 'Sidebar',
    component: () => import('../views/overlay/SidebarDemo.vue')
  },
  {
    path: '/overlay/tooltip',
    name: 'Tooltip',
    component: () => import('../views/overlay/TooltipDemo.vue')
  },

  // File Components
  {
    path: '/file/fileupload',
    name: 'FileUpload',
    component: () => import('../views/file/FileUploadDemo.vue')
  },

  // Menu Components
  {
    path: '/menu/breadcrumb',
    name: 'Breadcrumb',
    component: () => import('../views/menu/BreadcrumbDemo.vue')
  },
  {
    path: '/menu/contextmenu',
    name: 'ContextMenu',
    component: () => import('../views/menu/ContextMenuDemo.vue')
  },
  {
    path: '/menu/dock',
    name: 'Dock',
    component: () => import('../views/menu/DockDemo.vue')
  },
  {
    path: '/menu/menu',
    name: 'Menu',
    component: () => import('../views/menu/MenuDemo.vue')
  },
  {
    path: '/menu/menubar',
    name: 'Menubar',
    component: () => import('../views/menu/MenubarDemo.vue')
  },
  {
    path: '/menu/megamenu',
    name: 'MegaMenu',
    component: () => import('../views/menu/MegaMenuDemo.vue')
  },
  {
    path: '/menu/panelmenu',
    name: 'PanelMenu',
    component: () => import('../views/menu/PanelMenuDemo.vue')
  },
  {
    path: '/menu/steps',
    name: 'Steps',
    component: () => import('../views/menu/StepsDemo.vue')
  },
  {
    path: '/menu/tabmenu',
    name: 'TabMenu',
    component: () => import('../views/menu/TabMenuDemo.vue')
  },
  {
    path: '/menu/tieredmenu',
    name: 'TieredMenu',
    component: () => import('../views/menu/TieredMenuDemo.vue')
  },

  // Chart Components
  {
    path: '/chart/chart',
    name: 'Chart',
    component: () => import('../views/chart/ChartDemo.vue')
  },

  // Messages Components
  {
    path: '/messages/message',
    name: 'Message',
    component: () => import('../views/messages/MessageDemo.vue')
  },
  {
    path: '/messages/toast',
    name: 'Toast',
    component: () => import('../views/messages/ToastDemo.vue')
  },

  // Media Components
  {
    path: '/media/carousel',
    name: 'Carousel',
    component: () => import('../views/media/CarouselDemo.vue')
  },
  {
    path: '/media/galleria',
    name: 'Galleria',
    component: () => import('../views/media/GalleriaDemo.vue')
  },
  {
    path: '/media/image',
    name: 'Image',
    component: () => import('../views/media/ImageDemo.vue')
  },

  // Misc Components
  {
    path: '/misc/avatar',
    name: 'Avatar',
    component: () => import('../views/misc/AvatarDemo.vue')
  },
  {
    path: '/misc/avatargroup',
    name: 'AvatarGroup',
    component: () => import('../views/misc/AvatarGroupDemo.vue')
  },
  {
    path: '/misc/badge',
    name: 'Badge',
    component: () => import('../views/misc/BadgeDemo.vue')
  },
  {
    path: '/misc/blockui',
    name: 'BlockUI',
    component: () => import('../views/misc/BlockUIDemo.vue')
  },
  {
    path: '/misc/chip',
    name: 'Chip',
    component: () => import('../views/misc/ChipDemo.vue')
  },
  {
    path: '/misc/focustrap',
    name: 'FocusTrap',
    component: () => import('../views/misc/FocusTrapDemo.vue')
  },
  {
    path: '/misc/inplace',
    name: 'Inplace',
    component: () => import('../views/misc/InplaceDemo.vue')
  },
  {
    path: '/misc/metergroup',
    name: 'MeterGroup',
    component: () => import('../views/misc/MeterGroupDemo.vue')
  },
  {
    path: '/misc/progressbar',
    name: 'ProgressBar',
    component: () => import('../views/misc/ProgressBarDemo.vue')
  },
  {
    path: '/misc/progressspinner',
    name: 'ProgressSpinner',
    component: () => import('../views/misc/ProgressSpinnerDemo.vue')
  },
  {
    path: '/misc/scrolltop',
    name: 'ScrollTop',
    component: () => import('../views/misc/ScrollTopDemo.vue')
  },
  {
    path: '/misc/skeleton',
    name: 'Skeleton',
    component: () => import('../views/misc/SkeletonDemo.vue')
  },
  {
    path: '/misc/styleclass',
    name: 'StyleClass',
    component: () => import('../views/misc/StyleClassDemo.vue')
  },
  {
    path: '/misc/tag',
    name: 'Tag',
    component: () => import('../views/misc/TagDemo.vue')
  },
  {
    path: '/misc/terminal',
    name: 'Terminal',
    component: () => import('../views/misc/TerminalDemo.vue')
  },

  // 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
