import { TutorialTopic } from './cssTutorialsData';

export const PARCEL_TOPICS: TutorialTopic[] = [
  {
    id: 'parcel-home',
    title: 'Parcel HOME',
    description: 'Welcome to Parcel! Parcel is a modern, zero-configuration web application bundler.',
    explanation: [
      'Parcel is an out-of-the-box, extremely fast application bundler.',
      'Unlike Webpack, Parcel requires zero configurations to get started bundling HTML, CSS, JS, and images.',
      'Utilizes multicore processing and caching for lightning-fast incremental builds.'
    ],
    code: `// To start Parcel bundling:
// npx parcel index.html`,
    languageId: 'javascript'
  },
  {
    id: 'parcel-intro',
    title: 'Parcel Intro',
    description: 'Understand the benefits of Parcel compared to other traditional bundlers like Webpack or Rollup.',
    explanation: [
      'Parcel supports all standard assets natively (HTML, CSS, JS, Sass, Less, images, and fonts) without plugins.',
      'Built-in support for Hot Module Replacement (HMR) to refresh browser views immediately without reloading states.'
    ],
    code: `// index.js
import { greet } from './greet.js';
console.log(greet("Parcel User"));`,
    languageId: 'javascript'
  },
  {
    id: 'parcel-get-started',
    title: 'Parcel Get Started',
    description: 'Set up an app workspace, install the parcel package, and run your dev bundler.',
    explanation: [
      'Initialize npm: npm init -y.',
      'Install parcel as dev dependency: npm install --save-dev parcel.',
      'Point parcel to your HTML entry point: npx parcel src/index.html.'
    ],
    code: `// package.json scripts configuration:
{
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}`,
    languageId: 'json'
  },
  {
    id: 'parcel-configuration',
    title: 'Parcel Configuration',
    description: 'Modify configurations optionally using .parcelrc or package.json overrides.',
    explanation: [
      'Although "zero-config", you can customize Parcel using .parcelrc configurations.',
      'Supports target configurations (e.g., target engines, browserslists, and environments).'
    ],
    code: `{
  "extends": "@parcel/config-default",
  "reporters": ["...", "@parcel/reporter-bundle-analyzer"]
}`,
    languageId: 'json'
  },
  {
    id: 'parcel-production',
    title: 'Parcel Production',
    description: 'Compile highly optimized production assets using "parcel build".',
    explanation: [
      'The parcel build command optimizes and minifies your code for production deployment.',
      'Automatically structures content hashing, bundle splitting, tree shaking, and image optimization.'
    ],
    code: `// Compile production files into the dist/ directory:
// npx parcel build index.html`,
    languageId: 'javascript'
  }
];
