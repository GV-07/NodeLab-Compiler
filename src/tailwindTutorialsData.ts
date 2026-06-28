import { TutorialTopic } from './cssTutorialsData';

export const TAILWIND_TOPICS: TutorialTopic[] = [
  {
    id: 'tailwind-intro',
    title: 'Tailwind Intro',
    description: 'Learn the core concepts of Tailwind CSS, a utility-first CSS framework for rapid UI development.',
    explanation: [
      'Tailwind CSS is utility-first, meaning you style elements by applying pre-defined classes.',
      'Unlike component-based frameworks like Bootstrap, Tailwind does not impose design choices.',
      'It allows building completely custom user interfaces directly within the markup.'
    ],
    code: `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="text-xl font-medium text-black">Tailwind CSS</div>
  <p class="text-gray-500">Utility-first framework!</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'tailwind-installation',
    title: 'Tailwind Installation',
    description: 'How to set up and integrate Tailwind CSS into your web development project.',
    explanation: [
      'You can install Tailwind CSS via npm (recommended for production) or use the Play CDN for prototyping.',
      'For npm, install the package, initialize the config, and add the directives to your CSS file.',
      'Play CDN is extremely simple for quickly testing layouts directly in the browser.'
    ],
    code: `<!-- Prototyping with the Play CDN -->
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 p-8">
  <h1 class="text-3xl font-bold text-indigo-600">Tailwind Installed!</h1>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'tailwind-configuration',
    title: 'Tailwind Configuration',
    description: 'Customizing Tailwind CSS via the tailwind.config.js file.',
    explanation: [
      'The tailwind.config.js file is used to configure your design system values.',
      'You can customize colors, spacing, fonts, breakpoints, and themes under the theme.extend object.',
      'The content array specifies which files to scan for utility classes to build your production stylesheet.'
    ],
    code: `// Example tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6',
      }
    }
  },
  plugins: [],
}`,
    languageId: 'javascript_prog'
  },
  {
    id: 'tailwind-utility-first',
    title: 'Tailwind Utility First',
    description: 'Understanding the power of utility-first class styling vs semantic classes.',
    explanation: [
      'Instead of writing custom CSS rules under class names like .btn-primary, you compose styles using utility classes.',
      'This eliminates writing CSS files, prevents style leaks, and ensures a smaller final CSS build.',
      'Common utilities include layout (flex, grid), sizing (w-12, h-12), spacing (m-4, p-2), and colors.'
    ],
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
  Interactive Button
</button>`,
    languageId: 'html'
  },
  {
    id: 'tailwind-responsive-design',
    title: 'Tailwind Responsive Design',
    description: 'Using mobile-first responsive modifiers in Tailwind CSS.',
    explanation: [
      'Tailwind uses mobile-first responsive variants like sm:, md:, lg:, xl:, and 2xl:.',
      'The base styling (without prefix) targets mobile, while sm: and larger apply to larger viewports.',
      'Example: w-full md:w-1/2 styles an element to be full width on mobile, and half-width on tablet/desktop.'
    ],
    code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <div class="bg-white p-6 rounded shadow">Card 1</div>
  <div class="bg-white p-6 rounded shadow">Card 2</div>
  <div class="bg-white p-6 rounded shadow">Card 3</div>
</div>`,
    languageId: 'html'
  },
  {
    id: 'tailwind-states',
    title: 'Tailwind Hover, Focus, & Active States',
    description: 'Adding interactivity feedback with interactive state modifiers.',
    explanation: [
      'Tailwind allows styling states easily using variants like hover:, focus:, active:, and disabled:.',
      'You can also use group-hover: and peer-hover: for parent-child or sibling styling constraints.',
      'Transitions (transition, duration-200) can make state transitions look organic.'
    ],
    code: `<input type="text" placeholder="Type here..." 
  class="border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded px-3 py-2 text-sm bg-white" />`,
    languageId: 'html'
  },
  {
    id: 'tailwind-dark-mode',
    title: 'Tailwind Dark Mode',
    description: 'Configuring and applying dark-theme styling using the dark: modifier.',
    explanation: [
      'Tailwind makes dark theme creation simple using the dark: prefix modifier.',
      'By default, Tailwind reads the system prefers-color-scheme setting, but can be configured to use a class variant instead.',
      'Example: bg-white dark:bg-slate-900 changes background color seamlessly when dark mode is enabled.'
    ],
    code: `<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8 rounded-lg shadow-md border dark:border-slate-800">
  <h3 class="text-lg font-bold">Responsive Card</h3>
  <p class="text-sm text-slate-500 dark:text-slate-400">Supporting light and dark mode styling natively.</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'tailwind-flex-grid',
    title: 'Tailwind Flexbox & Grid Layouts',
    description: 'Constructing modern, flexible page structures with grid-cols and flex directions.',
    explanation: [
      'Tailwind includes robust flexbox (flex, flex-row, items-center, justify-between) and CSS Grid (grid, grid-cols-12, gap-4) wrappers.',
      'It lets you align elements cleanly and scale structures beautifully.',
      'You can combine these with responsive modifiers to re-arrange layouts for smaller screen sizes.'
    ],
    code: `<div class="flex flex-col md:flex-row items-center justify-between p-4 bg-slate-800 text-white rounded-lg">
  <div>Logo / Brand</div>
  <div class="flex space-x-4 mt-2 md:mt-0">
    <a href="#" class="hover:text-sky-400">Home</a>
    <a href="#" class="hover:text-sky-400">About</a>
  </div>
</div>`,
    languageId: 'html'
  },
  {
    id: 'tailwind-padding-sizing',
    title: 'Tailwind Padding, Margin, & Sizing',
    description: 'Applying dimensions, margins, and paddings using the Tailwind spacing system.',
    explanation: [
      'Padding uses p-*, px-*, py-*, pt-*, etc. (where * corresponds to 0.25rem or 4px steps).',
      'Margin uses m-*, mx-*, my-*, mt-*, and also supports negative margins like -mt-4.',
      'Sizing elements is handled using width (w-12, w-full, w-screen) and height (h-6, h-full, h-screen) tokens.'
    ],
    code: `<div class="m-4 p-6 w-64 h-32 bg-sky-500 text-white rounded flex items-center justify-center">
  Explicitly sized box (16rem x 8rem)
</div>`,
    languageId: 'html'
  },
  {
    id: 'tailwind-typography-colors',
    title: 'Tailwind Typography & Colors',
    description: 'Manipulating text size, weights, line heights, and element coloring.',
    explanation: [
      'Tailwind provides extensive text modifiers (text-xs, text-xl, font-medium, leading-tight, tracking-tight).',
      'Colors span a curated default spectrum including slate, red, amber, emerald, blue, indigo, violet, and rose.',
      'Opacity variants can adjust color weightings dynamically, like bg-blue-500/20 for light background tints.'
    ],
    code: `<div class="space-y-2">
  <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Main Header</h1>
  <p class="text-sm font-normal text-slate-500 leading-relaxed">Secondary body description text showing line spacing details.</p>
</div>`,
    languageId: 'html'
  }
];
