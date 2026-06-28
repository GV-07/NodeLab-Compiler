import { TutorialTopic } from './cssTutorialsData';

export const HTMX_TOPICS: TutorialTopic[] = [
  {
    id: 'htmx-introduction',
    title: 'HTMX Introduction',
    description: 'Understand the core concepts of HTMX and how it lets you access AJAX, CSS Transitions, and WebSockets directly in HTML.',
    explanation: [
      'HTMX is a lightweight JavaScript library that extends HTML capabilities.',
      'It allows any HTML element (not just anchors or forms) to make HTTP requests and update the DOM directly.',
      'By serving raw HTML fragments from your server instead of JSON, you can build dynamic UIs with very little JS.'
    ],
    code: `<!-- Click button to load dynamic content without full page reload -->
<button hx-get="/api/message" hx-target="#msg-box" class="btn btn-primary">
  Get Dynamic Message
</button>
<div id="msg-box" class="mt-4 p-4 border border-dashed text-slate-500">
  Click the button to load contents here...
</div>`,
    languageId: 'html'
  },
  {
    id: 'htmx-installation',
    title: 'HTMX Installation (CDN/NPM)',
    description: 'Integrating HTMX into your project using the unpkg CDN or package installation.',
    explanation: [
      'For quick prototyping, you can load HTMX directly from a popular CDN in a single script tag.',
      'For production development, install the npm package: npm install htmx.org.',
      'After installation, ensure the library is loaded on your main page layout.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Load HTMX via CDN -->
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
</head>
<body class="p-8">
  <h3>HTMX Library Loaded!</h3>
  <button hx-get="/ping" class="btn">Ping Server</button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'htmx-ajax',
    title: 'HTMX AJAX Requests (hx-get, hx-post)',
    description: 'Triggering background HTTP GET, POST, PUT, and DELETE requests natively.',
    explanation: [
      'HTMX provides direct action attributes: hx-get, hx-post, hx-put, and hx-delete.',
      'When the user triggers the element, HTMX initiates a background fetch to that endpoint.',
      'The server response is expected to be a valid HTML fragment representing the new UI state.'
    ],
    code: `<form hx-post="/api/users/add" hx-target="#user-list" hx-swap="beforeend" class="space-y-4">
  <input type="text" name="username" placeholder="Enter username" class="input" />
  <button type="submit" class="btn btn-primary">Add User</button>
</form>`,
    languageId: 'html'
  },
  {
    id: 'htmx-triggering',
    title: 'HTMX Triggering (hx-trigger)',
    description: 'Customizing user actions that trigger the background request.',
    explanation: [
      'By default, HTMX requests are triggered by natural events (click for buttons, submit for forms, change for inputs).',
      'You can override this default behavior using the hx-trigger attribute.',
      'Modifiers like delay:200ms, changed, and once let you build advanced behaviors like search-as-you-type.'
    ],
    code: `<input type="text" name="search" placeholder="Type to search..."
  hx-get="/api/search" 
  hx-trigger="keyup changed delay:500ms" 
  hx-target="#search-results" 
  class="input-field" />
<div id="search-results"></div>`,
    languageId: 'html'
  },
  {
    id: 'htmx-targets-swapping',
    title: 'HTMX Targets & Swapping (hx-target, hx-swap)',
    description: 'Controlling where and how server HTML fragments are inserted into your layout.',
    explanation: [
      'hx-target specifies the CSS selector of the target element that receives the server response.',
      'hx-swap controls exactly how the response content is loaded relative to the target element.',
      'Popular swap strategies include innerHTML (default), outerHTML, beforebegin, afterbegin, beforeend, and afterend.'
    ],
    code: `<div id="dashboard">
  <button hx-get="/api/refresh-stats" hx-target="#stats" hx-swap="outerHTML">
    Refresh Dashboard
  </button>
  <div id="stats" class="p-4 bg-slate-900 text-white rounded">
    Active Users: 104
  </div>
</div>`,
    languageId: 'html'
  },
  {
    id: 'htmx-indicators',
    title: 'HTMX Indicators & Loading States',
    description: 'Displaying visual feedback (spinners, messages) while requests are in-flight.',
    explanation: [
      'HTMX automatically appends classes like .htmx-request to active elements during background transfers.',
      'You can use the hx-indicator attribute to toggle visibility of other UI elements (like loading spinners).',
      'The designated indicator will change opacity or display style automatically while the request resolves.'
    ],
    code: `<div>
  <button hx-get="/api/long-job" hx-indicator="#spinner" class="btn">
    Start Task
  </button>
  <span id="spinner" class="htmx-indicator ml-2 text-sky-500 animate-spin">
    ⌛ Processing...
  </span>
</div>`,
    languageId: 'html'
  },
  {
    id: 'htmx-css-transitions',
    title: 'HTMX CSS Transitions',
    description: 'Adding beautiful animations when swapping content with HTMX.',
    explanation: [
      'HTMX supports smooth animations by synchronizing swaps with native browser CSS Transitions.',
      'When swapping, HTMX briefly adds and removes helper class flags, allowing your custom CSS to trigger.',
      'You can use CSS transition variables on margins, opacity, or transforms to fade-in content.'
    ],
    code: `<style>
  .fade-me-in.htmx-added {
    opacity: 0;
  }
  .fade-me-in {
    opacity: 1;
    transition: opacity 1s ease-out;
  }
</style>
<button hx-get="/api/fade-in-content" hx-target="#fade-box" hx-swap="innerHTML">
  Fade In Content
</button>
<div id="fade-box" class="fade-me-in">
  Initial Static State
</div>`,
    languageId: 'html'
  }
];
