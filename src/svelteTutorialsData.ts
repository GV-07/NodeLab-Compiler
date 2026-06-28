import { TutorialTopic } from './cssTutorialsData';

export const SVELTE_TOPICS: TutorialTopic[] = [
  {
    id: 'svelte-home',
    title: 'Svelte HOME',
    description: 'Welcome to Svelte! Svelte compiles your components to highly efficient vanilla JavaScript, removing the virtual DOM overhead.',
    explanation: [
      'Svelte is a radical new approach to building user interfaces.',
      'Unlike traditional frameworks like React and Vue, Svelte runs as a compiler at build time.',
      'This translates into ultra-small bundle sizes, excellent performance, and zero runtime library overhead.'
    ],
    code: `<!-- A simple Svelte greeting -->
<script>
  let framework = 'Svelte';
</script>

<h1 class="text-indigo-500 font-bold">Welcome to {{ framework }}!</h1>`,
    languageId: 'html'
  },
  {
    id: 'svelte-intro',
    title: 'Svelte Intro',
    description: 'How Svelte differs from other frameworks, compiler basics, and the Svelte ecosystem.',
    explanation: [
      'Traditional frameworks run a Virtual DOM in the browser to calculate page changes before rendering.',
      'Svelte shifts this work into a build-time compile step, compiling components into surgical DOM updates.',
      'Svelte code is exceptionally clean, requiring very little boilerplate or structure.'
    ],
    code: `<script>
  let val = 10;
</script>
<p>Value: {val}</p>`,
    languageId: 'html'
  },
  {
    id: 'svelte-get-started',
    title: 'Svelte Get Started',
    description: 'Setting up Svelte and launching a SvelteKit workspace.',
    explanation: [
      'SvelteKit is the official robust framework for building full-stack web projects with Svelte.',
      'To start a new project, run npm create svelte@latest inside your terminal directory.',
      'This scaffolds a modern workspace configured with Vite, routing, and hot-reload support.'
    ],
    code: `// Initial package.json structure for a Svelte project
{
  "name": "my-svelte-app",
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^3.0.0",
    "svelte": "^4.0.0",
    "vite": "^5.0.0"
  }
}`,
    languageId: 'javascript_prog'
  },
  {
    id: 'svelte-reactivity',
    title: 'Svelte Reactivity',
    description: 'Declaring local states, triggering updates, and using reactive declarations ($:).',
    explanation: [
      'In Svelte, local variables are reactive by default. Assigning a value automatically schedules a DOM update.',
      'Svelte uses the dollar sign syntax ($:) to declare reactive derivative statements.',
      'Whenever the dependent variables change, the $: blocks automatically re-execute.'
    ],
    code: `<script>
  let count = 0;
  // Reactive statement: auto-recalculates when count changes
  $: doubled = count * 2;
</script>

<button on:click={() => count++}>Count: {count}</button>
<p>Doubled: {doubled}</p>`,
    languageId: 'html'
  },
  {
    id: 'svelte-props',
    title: 'Svelte Props',
    description: 'Passing parameters down into child components using export let.',
    explanation: [
      'To declare that a component receives props, use the export keyword inside your script tag.',
      'You can assign defaults directly, e.g. export let title = "Standard Header".',
      'Parents supply these properties using standard attribute assignment syntax.'
    ],
    code: `<!-- Inside Widget.svelte -->
<script>
  export let label = 'Submit';
  export let status = 'active';
</script>

<button class="status-{status}">{label}</button>`,
    languageId: 'html'
  },
  {
    id: 'svelte-logic',
    title: 'Svelte Logic ({#if}, {#each}, {#await})',
    description: 'Handling conditional trees, lists, and asynchronous promises in Svelte templates.',
    explanation: [
      'Svelte uses clean templating tags like {#if condition} ... {:else} ... {/if} for conditionals.',
      'Iterating through lists uses {#each items as item, index (item.id)} ... {/each}.',
      'The {#await promise} tag lets you handle and display loading states for active JavaScript promises natively.'
    ],
    code: `{#if loading}
  <p>Loading records...</p>
{:then results}
  <ul>
    {#each results as user (user.id)}
      <li>{user.name}</li>
    {/each}
  </ul>
{/if}`,
    languageId: 'html'
  },
  {
    id: 'svelte-events',
    title: 'Svelte Events',
    description: 'Handling events, dispatcher utilities, and custom mouse modifiers.',
    explanation: [
      'Listen to DOM events using on:event syntax, like on:click={callback}.',
      'Modifiers can be chained directly to events, e.g., on:click|preventDefault|once={callback}.',
      'To communicate back to parents, use createEventDispatcher() inside the script block.'
    ],
    code: `<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('notify', { value: 100 })}>
  Send Notification
</button>`,
    languageId: 'html'
  },
  {
    id: 'svelte-bindings',
    title: 'Svelte Bindings',
    description: 'Binding variables to input values, media elements, or container dimensions.',
    explanation: [
      'Use bind:value={var} to establish real-time two-way data bindings on inputs.',
      'Svelte supports bindings for check states (bind:checked), groups, and dimensions (bind:clientWidth).',
      'This eliminates writing manual change handlers for form elements completely.'
    ],
    code: `<script>
  let name = '';
  let accepted = false;
</script>

<input bind:value={name} placeholder="Name" />
<input type="checkbox" bind:checked={accepted} /> I accept terms.`,
    languageId: 'html'
  },
  {
    id: 'svelte-lifecycle',
    title: 'Svelte Lifecycle Hooks',
    description: 'Responding to mount, update, destroy, and tick event phases.',
    explanation: [
      'Svelte provides lifecycle functions like onMount, beforeUpdate, afterUpdate, and onDestroy.',
      'onMount is perfect for loading database data or establishing DOM operations.',
      'tick() returns a promise that resolves once pending reactive modifications are synchronized in the browser.'
    ],
    code: `<script>
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    console.log('Component initialized!');
  });
  onDestroy(() => {
    console.log('Cleanup finished!');
  });
</script>`,
    languageId: 'html'
  },
  {
    id: 'svelte-stores',
    title: 'Svelte Stores (Writable, Readable, Derived)',
    description: 'Sharing global states across unrelated components cleanly using Svelte stores.',
    explanation: [
      'Stores represent an observable state container designed to hold reactive variables outside components.',
      'writable stores can be updated, readable stores only observed, and derived stores recalculate on changes.',
      'Inside Svelte templates, prepend the dollar sign ($store) to automatically subscribe and unsubscribe to stores.'
    ],
    code: `// Inside stores.js
import { writable } from 'svelte/store';
export const count = writable(0);

// Inside Component.svelte
<script>
  import { count } from './stores.js';
</script>
<button on:click={() => count.update(n => n + 1)}>
  Value: {$count}
</button>`,
    languageId: 'html'
  },
  {
    id: 'svelte-transitions',
    title: 'Svelte Transitions & Animations',
    description: 'Applying built-in smooth visual fade, slide, and fly transitions.',
    explanation: [
      'Svelte features dynamic built-in transition hooks (fade, slide, fly, scale, draw) under svelte/transition.',
      'Simply add transition:fade or transition:fly={{ y: 200, duration: 500 }} to layout tags.',
      'Transitions run automatically when elements enter or exit conditional Svelte scopes.'
    ],
    code: `<script>
  import { fade } from 'svelte/transition';
  let visible = true;
</script>

{#if visible}
  <div transition:fade class="p-4 bg-green-500 text-white">
    Fading message box
  </div>
{/if}`,
    languageId: 'html'
  },
  {
    id: 'svelte-actions',
    title: 'Svelte Actions',
    description: 'Executing custom functions when elements are added to the DOM using the use: directive.',
    explanation: [
      'Actions are functions (use:action) designed to hook custom logic onto DOM element lifecycle stages.',
      'An action runs when its target element is mounted, and can return an object containing destroy callbacks.',
      'Perfect for integrating custom tooltip libraries, charting engines, or focus traps.'
    ],
    code: `<script>
  function selectTextOnFocus(node) {
    const handleFocus = () => node.select();
    node.addEventListener('focus', handleFocus);
    return {
      destroy() {
        node.removeEventListener('focus', handleFocus);
      }
    };
  }
</script>

<input use:selectTextOnFocus value="Click to select all text" />`,
    languageId: 'html'
  },
  {
    id: 'svelte-classes',
    title: 'Svelte Classes',
    description: 'Toggling stylesheet class lists dynamically using class: directive shorthand.',
    explanation: [
      'Svelte simplifies CSS class toggles using class:classname={condition} attributes.',
      'If the condition evaluates to true, Svelte applies the class. Otherwise, it is removed.',
      'Shorthand class:active is supported when the class name matches your state variable name.'
    ],
    code: `<script>
  let active = false;
</script>

<button class:active on:click={() => active = !active}>
  Toggle Active State
</button>

<style>
  .active { background-color: purple; color: white; }
</style>`,
    languageId: 'html'
  },
  {
    id: 'svelte-composition',
    title: 'Svelte Component Composition',
    description: 'Composing scalable UI structures with nested child components.',
    explanation: [
      'Import other Svelte files directly inside your script block to use them as layout components.',
      'Svelte automatically handles encapsulation, preventing scoped styles from leaking to other components.',
      'Pass variables and events to coordinate complex UI views across your structures.'
    ],
    code: `<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<Header title="My Dashboard" />
<main><slot></slot></main>
<Footer />`,
    languageId: 'html'
  },
  {
    id: 'svelte-slots',
    title: 'Svelte Content Slots',
    description: 'Using slot elements to render parent-defined HTML inside components.',
    explanation: [
      'Svelte components can act as shell wrappers by embedding <slot /> tags.',
      'Any markup placed inside the component tags by the parent will render where the <slot /> sits.',
      'You can also use named slots (<slot name="footer" />) to define multiple insert coordinates.'
    ],
    code: `<!-- Card.svelte -->
<div class="border rounded p-4">
  <div class="card-header"><slot name="header"></slot></div>
  <div class="card-body"><slot></slot></div>
</div>`,
    languageId: 'html'
  }
];
