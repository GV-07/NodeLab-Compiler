import { TutorialTopic } from './cssTutorialsData';

export const BACKBONE_TOPICS: TutorialTopic[] = [
  {
    id: 'backbone-intro',
    title: 'Backbone.js Introduction',
    description: 'Learn Backbone.js, a lightweight classic framework providing structure to JavaScript web applications.',
    explanation: [
      'Backbone.js is an ultra-lightweight client-side library designed to structure JavaScript code.',
      'It represents an early MVC (Model-View-Controller) solution that binds data elements to user interfaces.',
      'It depends on Underscore.js for utility helper functions and jQuery for DOM selections.'
    ],
    code: `<!-- Complete classic Backbone layout script injection -->
<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.5.0/backbone-min.js"></script>
</head>
<body class="p-4">
  <div id="app"></div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'backbone-mvc',
    title: 'Backbone.js MVC Pattern Architecture',
    description: 'Understanding the Model-View-Router design setup inside Backbone.',
    explanation: [
      'Backbone adapts the MVC pattern: Models hold data, Collections manage lists of models, and Views handle layout renders.',
      'Unlike modern frameworks, Backbone does not feature automated two-way template binding.',
      'Instead, Views explicitly listen to Model change events and manually rewrite the DOM when updates occur.'
    ],
    code: `// High-level architecture layout of a Backbone application
const Todo = Backbone.Model.extend({});
const TodoList = Backbone.Collection.extend({ model: Todo });
const TodoView = Backbone.View.extend({
  render: function() {
    this.$el.html("Rendered Todo Item");
    return this;
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'backbone-models',
    title: 'Backbone.js Core Models & Attributes',
    description: 'Creating Models, defining default values, and accessing attributes using .get() and .set().',
    explanation: [
      'Models hold raw data structures alongside related logic (validation, behaviors, getters, setters).',
      'Use model.get("key") and model.set("key", "value") to inspect or modify properties.',
      'Modifying attributes via .set() automatically fires standard events (like change) that you can listen to.'
    ],
    code: `const Book = Backbone.Model.extend({
  defaults: {
    title: 'Untitled',
    read: false
  }
});

const myBook = new Book({ title: 'Backbone 101' });
myBook.set('read', true);
console.log("Book Title:", myBook.get('title'));`,
    languageId: 'javascript_prog'
  },
  {
    id: 'backbone-collections',
    title: 'Backbone.js Collections Framework',
    description: 'Grouping lists of Models inside Collections to perform searches, counts, and filters.',
    explanation: [
      'Collections manage sets of models. They provide rich utilities like sorting, filtering, and indexing.',
      'You can subscribe to events on collections (like add, remove, reset) to trigger updates.',
      'Collections inherit Underscore.js array methods, letting you use .each(), .map(), and .filter() natively.'
    ],
    code: `const Member = Backbone.Model.extend({});
const Team = Backbone.Collection.extend({
  model: Member
});

const team = new Team();
team.add(new Member({ name: 'Alice', active: true }));
team.add(new Member({ name: 'Bob', active: false }));

const activeMembers = team.where({ active: true });
console.log("Active count:", activeMembers.length);`,
    languageId: 'javascript_prog'
  },
  {
    id: 'backbone-syncing',
    title: 'Backbone.js Syncing Server Side Data',
    description: 'Saving, updating, and fetching RESTful API endpoint records automatically.',
    explanation: [
      'Backbone integrates out-of-the-box with RESTful server-side JSON APIs.',
      'Specify a url or urlRoot parameter inside your model or collection definitions.',
      'Calling .fetch() reads records, .save() triggers a POST/PUT request, and .destroy() issues a DELETE command.'
    ],
    code: `const User = Backbone.Model.extend({
  urlRoot: '/api/v1/users'
});

const user = new User({ id: 42 });
// Performs an AJAX GET request to /api/v1/users/42
user.fetch({
  success: () => console.log("Fetched user!"),
  error: () => console.error("Error fetching user.")
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'backbone-views',
    title: 'Backbone.js Views & Event Listening',
    description: 'Hooking views onto HTML nodes, rendering templates, and listening to interactions.',
    explanation: [
      'Views manage specific DOM elements (assigned via el, or created automatically using tagName).',
      'The events object lists DOM triggers and maps them directly to handler callback methods.',
      'This cleanly isolates click and input handling logic from the rest of your scripts.'
    ],
    code: `const ContactView = Backbone.View.extend({
  tagName: 'div',
  className: 'contact-card',
  events: {
    'click .call-btn': 'callContact',
    'change .status-input': 'updateStatus'
  },
  callContact: function() {
    alert("Calling contact!");
  },
  render: function() {
    this.$el.html('<button class="call-btn">Call Now</button>');
    return this;
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'backbone-routing',
    title: 'Backbone.js Client-Side Routing',
    description: 'Creating client routers to handle URL hash transitions seamlessly.',
    explanation: [
      'Backbone.Router maps client-side browser hash paths to target callback methods.',
      'This allows creating multi-view apps without performing full page refreshes.',
      'Call Backbone.history.start() to initiate routing once configurations are set.'
    ],
    code: `const AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'help': 'help',
    'search/:query': 'search'
  },
  home: function() { console.log("Home View Active"); },
  search: function(query) { console.log("Search Query:", query); }
});

const myRouter = new AppRouter();
Backbone.history.start();`,
    languageId: 'javascript_prog'
  }
];
