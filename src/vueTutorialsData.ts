import { TutorialTopic } from './cssTutorialsData';

export const VUE_TOPICS: TutorialTopic[] = [
  {
    id: 'vue-home',
    title: 'Vue HOME',
    description: 'Welcome to the Vue.js tutorial! Vue is an approachable, performant, and versatile framework for building web user interfaces.',
    explanation: [
      'Vue is a progressive JavaScript framework focused on building reactive user interfaces.',
      'It supports incremental adoption, starting with simple script imports up to complex single-page apps (SPAs).',
      'The core library features highly intuitive declarative bindings and efficient Virtual DOM renders.'
    ],
    code: `<!-- Simple Vue interactive container -->
<div id="app" class="p-8 text-center bg-slate-900 text-white rounded-lg">
  <h2 class="text-2xl font-black">Vue HOME</h2>
  <p class="text-slate-400 mt-2">Start exploring the reactive reactive view system!</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'vue-intro',
    title: 'Vue Intro',
    description: 'Understanding what Vue is, the Options API vs Composition API, and the virtual DOM.',
    explanation: [
      'Vue provides two code organization styles: Options API (classic) and Composition API (modern).',
      'Composition API (using <script setup> in SFCs) enables better logic reuse, flexibility, and type safety.',
      'Vue uses a Virtual DOM to compute changes before updating the actual browser document efficiently.'
    ],
    code: `// Modern Vue 3 Composition API structure
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello composition API!');
    return { message };
  }
}`,
    languageId: 'javascript_prog'
  },
  {
    id: 'vue-get-started',
    title: 'Vue Get Started',
    description: 'How to embed Vue in a page using CDNs, or start a new Vite-powered project.',
    explanation: [
      'For quick testing, import Vue using a script tag and call Vue.createApp().',
      'For production, run npm create vue@latest to scaffold a full Vite-powered TypeScript project.',
      'Ensure you mount the Vue app instance to a target HTML element (like #app).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body class="p-4">
  <div id="app">{{ greeting }}</div>
  <script>
    const { createApp } = Vue;
    createApp({
      data() {
        return { greeting: 'Hello Vue CDN!' }
      }
    }).mount('#app')
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'vue-v-bind',
    title: 'Vue v-bind Directive',
    description: 'Binding HTML attributes like href, src, and disabled to reactive state data.',
    explanation: [
      'In Vue, you bind reactive values to HTML attributes using the v-bind directive.',
      'The colon modifier (:) is the standard shorthand syntax for v-bind.',
      'Example: :src="imageUrl" dynamically sets the src attribute whenever imageUrl changes.'
    ],
    code: `<div id="app" class="p-4">
  <a :href="url" :title="tooltip" class="text-blue-500 font-bold">
    Go to W3Schools
  </a>
</div>`,
    languageId: 'html'
  },
  {
    id: 'vue-conditionals',
    title: 'Vue v-if/v-else Conditionals',
    description: 'Controlling layout elements conditionally using v-if, v-else-if, and v-else.',
    explanation: [
      'v-if completely adds or removes elements from the DOM based on a truthy condition.',
      'Use v-else-if and v-else immediately following a v-if element to define alternative states.',
      'For simple visibility toggling without DOM insertion cost, prefer using v-show (which toggles display: none).'
    ],
    code: `<div id="app">
  <p v-if="score >= 90" class="text-green-500">Grade A</p>
  <p v-else-if="score >= 60" class="text-yellow-500">Grade B</p>
  <p v-else class="text-red-500">Grade C</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'vue-v-for',
    title: 'Vue v-for Loops',
    description: 'Iterating and rendering lists of array objects dynamically.',
    explanation: [
      'v-for="item in items" lets you generate multiple elements in a loop.',
      'Always bind a unique :key attribute to help Vues Virtual DOM track item identity during updates.',
      'You can also get the current loop index using syntax like v-for="(item, index) in items".'
    ],
    code: `<ul>
  <li v-for="user in users" :key="user.id" class="p-2 border-b">
    {{ user.name }} (Role: {{ user.role }})
  </li>
</ul>`,
    languageId: 'html'
  },
  {
    id: 'vue-events',
    title: 'Vue v-on Events',
    description: 'Handling user clicks and keyboard entries with v-on and standard modifiers.',
    explanation: [
      'v-on binds event listeners to layout elements. The @ symbol is its popular shorthand.',
      'Modifiers like @click.prevent or @keyup.enter add clean, simple behaviors to events directly in HTML.',
      'Callbacks refer to methods declared on your Vue app context.'
    ],
    code: `<button @click="count++" class="btn btn-primary">
  Clicks: {{ count }}
</button>
<input @keyup.enter="submitForm" placeholder="Press Enter to Submit" />`,
    languageId: 'html'
  },
  {
    id: 'vue-v-model',
    title: 'Vue v-model Forms',
    description: 'Enabling real-time two-way data binding on text fields, checkboxes, and selectors.',
    explanation: [
      'v-model sets up a two-way data connection between form input fields and reactive variables.',
      'When the user types, the variable updates. If the variable is modified, the field value updates instantly.',
      'Modifiers like v-model.number or v-model.trim handle basic sanitization automatically.'
    ],
    code: `<div>
  <input v-model="username" placeholder="Type username..." />
  <p class="mt-2 text-slate-500">Preview: <strong>{{ username }}</strong></p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'vue-computed',
    title: 'Vue Computed Properties',
    description: 'Declaring optimized, cached derivative state properties using computed().',
    explanation: [
      'Computed properties are derivative states computed from other active reactive variables.',
      'Vue caches computed calculations, only updating them when their dependent variables shift.',
      'This is highly superior to placing complex inline math logic directly inside your HTML template tags.'
    ],
    code: `import { ref, computed } from 'vue';

const count = ref(0);
const doubled = computed(() => count.value * 2);`,
    languageId: 'javascript_prog'
  },
  {
    id: 'vue-watchers',
    title: 'Vue Watchers',
    description: 'Triggering background side-effects when reactive states undergo change.',
    explanation: [
      'Watchers (watch) let you run custom asynchronous side-effects in response to state shifts.',
      'Excellent for triggering analytical pings, saving to localStorage, or making background network fetch calls.',
      'Use deep: true to watch for deep property changes in nested object arrays.'
    ],
    code: `import { ref, watch } from 'vue';

const userId = ref(1);
watch(userId, (newVal, oldVal) => {
  console.log(\`User switched from \${oldVal} to \${newVal}\`);
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'vue-methods',
    title: 'Vue Methods',
    description: 'Declaring custom callback handler functions inside your component.',
    explanation: [
      'Methods are standard functions defined in your component context that execute logic on trigger.',
      'Unlike computed properties, methods are not cached and re-run on every single invoke.',
      'They typically handle forms, database requests, and custom state modifications.'
    ],
    code: `export default {
  data() {
    return { balance: 100 }
  },
  methods: {
    addFunds(amount) {
      this.balance += amount;
    }
  }
}`,
    languageId: 'javascript_prog'
  },
  {
    id: 'vue-css-binding',
    title: 'Vue CSS Binding',
    description: 'Binding classes and styles dynamically using object or array syntax.',
    explanation: [
      'You can bind dynamic class lists using objects: :class="{ active: isActive, \'text-danger\': hasError }".',
      'You can also bind inline styles dynamically: :style="{ color: activeColor, fontSize: fontSize + \'px\' }".',
      'This pairs perfectly with state variables to make elements change style smoothly on click.'
    ],
    code: `<div :class="['p-4', isDark ? 'bg-black text-white' : 'bg-white text-black']">
  Flexible styled box layout!
</div>`,
    languageId: 'html'
  },
  {
    id: 'vue-sfc',
    title: 'Vue Single-File Components (SFC)',
    description: 'Bundling <template>, <script>, and <style> together in clean *.vue files.',
    explanation: [
      'A Single-File Component (SFC) places structure, script, and style tags together in a *.vue file.',
      'This modular system makes building complex page layouts clean and self-contained.',
      'Vue compiler optimizes SFC templates at build time for high runtime performance.'
    ],
    code: `<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <button @click="count++" class="btn">SFC Click: {{ count }}</button>
</template>

<style scoped>
.btn { background: #3b82f6; color: white; border-radius: 8px; }
</style>`,
    languageId: 'html'
  },
  {
    id: 'vue-props',
    title: 'Vue Props',
    description: 'Passing parameters and settings down into child components.',
    explanation: [
      'Props are custom attributes defined on child components to receive data from parent elements.',
      'In <script setup>, use defineProps() to declare prop names, types, and defaults.',
      'Props follow a one-way-down binding flow, meaning child components cannot mutate incoming values.'
    ],
    code: `<script setup>
const props = defineProps({
  title: { type: String, default: 'Default title' },
  clicks: Number
});
</script>

<template>
  <h3>{{ title }} - Clicks: {{ clicks }}</h3>
</template>`,
    languageId: 'html'
  },
  {
    id: 'vue-emits',
    title: 'Vue Emits',
    description: 'Communicating events from child components back up to parent elements.',
    explanation: [
      'To notify parent elements of dynamic changes, a child component emits an event.',
      'Use defineEmits() to declare the list of supported event emitters.',
      'Parents listen to these custom triggers using standard syntax like @my-event="parentCallback".'
    ],
    code: `<!-- Child Component: MyButton.vue -->
<script setup>
const emit = defineEmits(['trigger-action']);
</script>
<template>
  <button @click="emit('trigger-action', 42)">Emit 42</button>
</template>`,
    languageId: 'html'
  },
  {
    id: 'vue-fallthrough',
    title: 'Vue Fallthrough Attributes',
    description: 'Understanding attribute inheritance on component root nodes.',
    explanation: [
      'A fallthrough attribute is an attribute (like class, style, id) passed to a component but not declared in props.',
      'These attributes automatically get applied to the child components single root element.',
      'You can disable this behavior using inheritAttrs: false and bind them manually with v-bind="$attrs".'
    ],
    code: `<script setup>
defineOptions({ inheritAttrs: false });
</script>
<template>
  <div class="custom-wrapper">
    <!-- Bind class/style attributes explicitly here instead of outer element -->
    <button v-bind="$attrs">Click Me</button>
  </div>
</template>`,
    languageId: 'html'
  },
  {
    id: 'vue-slots',
    title: 'Vue Slots',
    description: 'Using content placeholders to compose layouts dynamically.',
    explanation: [
      'Slots allow parents to insert HTML fragments or other widgets inside child templates.',
      'Use the <slot /> element inside the child component as a placeholder.',
      'You can define named slots (v-slot:header) and scoped slots to pass variables back up.'
    ],
    code: `<!-- Child Component: Card.vue -->
<div class="card p-4 shadow">
  <div class="header-slot"><slot name="header"></slot></div>
  <div class="body-slot"><slot></slot></div>
</div>`,
    languageId: 'html'
  },
  {
    id: 'vue-provide-inject',
    title: 'Vue Provide/Inject',
    description: 'Passing settings deep down component hierarchies without prop-drilling.',
    explanation: [
      'Provide/Inject lets you share global states deep into descendant components directly.',
      'A grandfather component calls provide(key, value) to supply the shared variable.',
      'Any descendant component anywhere in the tree calls inject(key) to read it.'
    ],
    code: `// Grandfather Component
import { provide } from 'vue';
provide('theme', 'dark');

// Deep Grandchild Component
import { inject } from 'vue';
const activeTheme = inject('theme');`,
    languageId: 'javascript_prog'
  },
  {
    id: 'vue-lifecycle',
    title: 'Vue Lifecycle Hooks',
    description: 'Responding to setup, mount, update, and unmount component life events.',
    explanation: [
      'Lifecycle hooks let you run custom routines at specific intervals in a components life.',
      'Common hooks include onMounted() (load API data), onUpdated() (dom sync), and onBeforeUnmount() (clear timers).',
      'These functions are imported directly from the \'vue\' library package.'
    ],
    code: `import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => {
  console.log("Component inserted into DOM!");
});
onBeforeUnmount(() => {
  console.log("Cleanup active before deletion.");
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'vue-animations',
    title: 'Vue Animations & Transitions',
    description: 'Using the native <Transition> element to animate entering and exiting items.',
    explanation: [
      'Vue provides a built-in <Transition> wrapper to add entering/exiting CSS animations to elements.',
      'It automatically toggles CSS class hooks like .v-enter-active and .v-leave-active during swaps.',
      'You can also use custom name prefixes like <Transition name="fade"> to separate styling triggers.'
    ],
    code: `<Transition name="fade">
  <p v-if="visible" class="text-lg">Fading item content!</p>
</Transition>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>`,
    languageId: 'html'
  },
  {
    id: 'vue-teleport',
    title: 'Vue Teleport Component',
    description: 'Mounting widgets into parent DOM containers outside the Vue mount element.',
    explanation: [
      'The <Teleport> wrapper allows rendering elements inside target DOM elements elsewhere in the document.',
      'Excellent for full-screen modals, drawers, or notifications that should break out of nested containers.',
      'It targets elements using standard CSS selectors, like <Teleport to="body">.'
    ],
    code: `<button @click="openModal = true">Launch Modal</button>

<Teleport to="body">
  <div v-if="openModal" class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow-lg text-black">
      <h2>Teleported Modal!</h2>
      <button @click="openModal = false">Close</button>
    </div>
  </div>
</Teleport>`,
    languageId: 'html'
  },
  {
    id: 'vue-routing',
    title: 'Vue Routing',
    description: 'Integrating client-side multi-page routing with Vue Router.',
    explanation: [
      'Vue Router is the official routing package to handle navigation inside Single Page Apps (SPAs).',
      'It maps browser paths to respective component views dynamically.',
      'Use <RouterLink to="..."> for navigation anchors, and <RouterView /> to mount active routes.'
    ],
    code: `import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('./AboutView.vue') }
  ]
});`,
    languageId: 'javascript_prog'
  }
];
