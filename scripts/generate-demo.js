#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Component definitions with examples
const componentDefinitions = {
  // Form Components
  Calendar: {
    category: 'form',
    description: 'Calendar is an input component to select a date.',
    import: 'Calendar',
    examples: [
      { title: 'Basic', code: '<Calendar v-model="date" />', props: ['date'] },
      { title: 'Icon', code: '<Calendar v-model="date" showIcon />', props: ['date'] },
      { title: 'Time Picker', code: '<Calendar v-model="datetime" showTime hourFormat="12" />', props: ['datetime'] },
      { title: 'Date Range', code: '<Calendar v-model="dates" selectionMode="range" />', props: ['dates'] }
    ],
    props: [
      { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the component.' },
      { name: 'showIcon', type: 'boolean', default: 'false', description: 'When enabled, displays a button with icon next to input.' },
      { name: 'showTime', type: 'boolean', default: 'false', description: 'Whether to display timepicker.' },
      { name: 'selectionMode', type: 'string', default: 'single', description: 'Defines the quantity of the selection, valid values are "single", "multiple" and "range".' }
    ]
  },

  Checkbox: {
    category: 'form',
    description: 'Checkbox is an extension to standard checkbox element with theming.',
    import: 'Checkbox',
    examples: [
      { title: 'Basic', code: '<Checkbox v-model="checked" binary />', props: ['checked'] },
      { title: 'Multiple', code: '<Checkbox v-model="categories" value="Technology" />', props: ['categories'] }
    ],
    props: [
      { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the checkbox.' },
      { name: 'binary', type: 'boolean', default: 'false', description: 'Allows to select a boolean value instead of multiple values.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the element should be disabled.' }
    ]
  },

  RadioButton: {
    category: 'form',
    description: 'RadioButton is an extension to standard radio button element with theming.',
    import: 'RadioButton',
    examples: [
      { title: 'Basic', code: '<RadioButton v-model="selectedOption" value="Option 1" />', props: ['selectedOption'] }
    ],
    props: [
      { name: 'modelValue', type: 'any', default: 'null', description: 'Value of the checkbox.' },
      { name: 'value', type: 'any', default: 'null', description: 'Value binding of the checkbox.' }
    ]
  },

  // Add more component definitions as needed
};

function generateComponentDemo(componentName, definition) {
  const { category, description, import: importName, examples, props } = definition;

  const propsDeclarations = examples.flatMap(ex => ex.props || [])
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(prop => `const ${prop} = ref(${
      prop.includes('date') ? 'null' :
      prop.includes('checked') ? 'false' :
      prop.includes('categories') || prop.includes('items') ? '[]' :
      prop.includes('selected') ? 'null' :
      "''"
    })`).join('\n');

  const exampleSections = examples.map(({ title, code, props }, index) => `
    <DemoSection title="${title}">
      <DemoCard
        title="${title} ${componentName}"
        :code="example${index}Code"
      >
        ${code}
      </DemoCard>
    </DemoSection>`).join('\n');

  const codeSections = examples.map(({ code }, index) =>
    `const example${index}Code = \`${code}\``
  ).join('\n\n');

  const propsArray = props.map(p =>
    `  { name: '${p.name}', type: '${p.type}', default: '${p.default}', description: '${p.description}' }`
  ).join(',\n');

  return `<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1>${componentName}</h1>
      <p class="description">
        ${description}
      </p>
    </div>
${exampleSections}

    <DemoSection title="API">
      <h3>Props</h3>
      <ApiTable :items="props" />
    </DemoSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ${importName} from 'primevue/${importName.toLowerCase()}'
import DemoCard from '@/components/shared/DemoCard.vue'
import DemoSection from '@/components/shared/DemoSection.vue'
import ApiTable from '@/components/shared/ApiTable.vue'

${propsDeclarations}

${codeSections}

const props = [
${propsArray}
]
</script>

<style scoped>
.demo-section + .demo-section {
  margin-top: 3rem;
}
</style>
`;
}

// Generate all defined components
for (const [componentName, definition] of Object.entries(componentDefinitions)) {
  const { category } = definition;
  const fileName = `${componentName}Demo.vue`;
  const filePath = path.join(__dirname, '..', 'src', 'views', category, fileName);

  const content = generateComponentDemo(componentName, definition);

  fs.writeFileSync(filePath, content);
  console.log(`✅ Generated ${fileName}`);
}

console.log(`\n✨ Generated ${Object.keys(componentDefinitions).length} component demos!`);
