import { TutorialTopic } from './cssTutorialsData';

export const ANGULARJS_TOPICS: TutorialTopic[] = [
  {
    id: 'ng-home',
    title: 'AngularJS HOME',
    description: 'Welcome to AngularJS! AngularJS is a structural framework for dynamic web apps.',
    explanation: [
      'AngularJS is a JavaScript framework. It can be added to an HTML page with a <script> tag.',
      'It extends HTML with custom attributes (Directives), and binds data directly to HTML with Expressions.'
    ],
    code: `<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>
  <div ng-app="">
    <p>Name: <input type="text" ng-model="name"></p>
    <h1>Hello {{name}}</h1>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'ng-intro',
    title: 'AngularJS Intro',
    description: 'Learn how AngularJS simplifies single-page web application development.',
    explanation: [
      'AngularJS was created by Miško Hevery and released in 2010.',
      'It targets the MVC (Model-View-Controller) pattern, providing two-way data binding out of the box.'
    ],
    code: `<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="">
  <p>AngularJS handles data binding automatically without manual DOM selectors!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'ng-get-started',
    title: 'AngularJS Get Started',
    description: 'Add AngularJS CDN to your project and boot up the first ng-app.',
    explanation: [
      'Download AngularJS or include it from a public CDN (Google, Cloudflare).',
      'The ng-app directive is the core starting point, telling AngularJS to activate on that container.'
    ],
    code: `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>`,
    languageId: 'html'
  },
  {
    id: 'ng-expressions',
    title: 'AngularJS Expressions',
    description: 'Output dynamic model properties using double curly braces: {{ expression }}.',
    explanation: [
      'AngularJS expressions are written inside double braces: {{ expression }}.',
      'They behave similarly to JavaScript expressions, resolving variables and basic calculations.'
    ],
    code: `<div ng-app="" ng-init="quantity=2;cost=5">
  <p>Total cost: {{ quantity * cost }} USD</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-modules',
    title: 'AngularJS Modules',
    description: 'Organize application code blocks into modules using angular.module().',
    explanation: [
      'An AngularJS module defines an application context.',
      'It is the container for the different parts of your application (controllers, services, filters).'
    ],
    code: `<div ng-app="myApp" ng-controller="myCtrl">
  {{ firstName + " " + lastName }}
</div>

<script>
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  });
</script>`,
    languageId: 'html'
  },
  {
    id: 'ng-directives',
    title: 'AngularJS Directives',
    description: 'Extend HTML vocabularies with ng-directives like ng-repeat, ng-init, and ng-if.',
    explanation: [
      'Directives are custom markers on DOM nodes that tell AngularJS to attach specific behaviors.',
      'Core directives: ng-app (initializes app), ng-model (binds inputs), ng-repeat (loops over items).'
    ],
    code: `<div ng-app="" ng-init="names=['Jani','Hege','Kai']">
  <ul>
    <li ng-repeat="x in names">
      {{ x }}
    </li>
  </ul>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-model',
    title: 'AngularJS Model',
    description: 'Establish live two-way synchronization on input fields using ng-model.',
    explanation: [
      'The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.',
      'Provides instant field validation status (e.g., ng-valid, ng-invalid).'
    ],
    code: `<div ng-app="">
  <form name="myForm">
    Email: <input type="email" name="myEmail" ng-model="text">
    <span ng-show="myForm.myEmail.$error.email">Not a valid email!</span>
  </form>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-data-binding',
    title: 'AngularJS Data Binding',
    description: 'Synchronize models and views instantly under two-way bindings.',
    explanation: [
      'Data binding in AngularJS is the synchronization between the model and the view.',
      'When the model changes, the view updates automatically, and vice-versa.'
    ],
    code: `<div ng-app="" ng-init="color='lightblue'">
  <input ng-model="color">
  <div style="background-color:{{color}}; padding: 20px;">
    Change my color in the input field!
  </div>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-controllers',
    title: 'AngularJS Controllers',
    description: 'Control data flows and scopes using controller functions.',
    explanation: [
      'AngularJS controllers control the data of AngularJS applications.',
      'Use ng-controller directive to assign standard JS controllers to specific views.'
    ],
    code: `<div ng-app="myApp" ng-controller="personCtrl">
  <button ng-click="toggle()">Toggle Info</button>
  <p ng-show="visible">My name is {{ name }}</p>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
  $scope.name = "Robert";
  $scope.visible = true;
  $scope.toggle = function() {
    $scope.visible = !$scope.visible;
  };
});
</script>`,
    languageId: 'html'
  },
  {
    id: 'ng-scopes',
    title: 'AngularJS Scopes',
    description: 'Explore the $scope execution context linking HTML views to controllers.',
    explanation: [
      '$scope is the glue between application controllers and views.',
      'It is an object with available properties and methods.'
    ],
    code: `<script>
// inside a controller
app.controller('myCtrl', function($scope) {
    $scope.carname = "Volvo";
});
</script>`,
    languageId: 'javascript'
  },
  {
    id: 'ng-filters',
    title: 'AngularJS Filters',
    description: 'Format data displays using filters: uppercase, currency, orderBy, and filter.',
    explanation: [
      'Filters can be added to expressions and directives using the pipe character |.',
      'E.g., currency formats numbers into local currencies.'
    ],
    code: `<div ng-app="" ng-init="names=['Jani','Carl','Margareth']">
  <p>Sorted Names:</p>
  <ul>
    <li ng-repeat="x in names | orderBy">{{ x }}</li>
  </ul>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-services',
    title: 'AngularJS Services',
    description: 'Utilize built-in context services like $location, $timeout, and $interval.',
    explanation: [
      'AngularJS has many built-in services, prefixed with $.',
      'Services are reusable modules or functions injected into controllers.'
    ],
    code: `<div ng-app="myApp" ng-controller="myCtrl">
  <p>Current URL: {{ myUrl }}</p>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $location) {
  $scope.myUrl = $location.absUrl();
});
</script>`,
    languageId: 'html'
  },
  {
    id: 'ng-http',
    title: 'AngularJS Http',
    description: 'Read remote server payloads using the built-in $http service.',
    explanation: [
      'The $http service is a core AngularJS service for reading data from remote servers.',
      'Uses XMLHttpRequest or JSONP requests.'
    ],
    code: `<script>
app.controller('customersCtrl', function($scope, $http) {
  $http.get("customers.php").then(function (response) {
      $scope.myData = response.data.records;
  });
});
</script>`,
    languageId: 'javascript'
  },
  {
    id: 'ng-select',
    title: 'AngularJS Select',
    description: 'Create responsive dropdown menus using ng-options and ng-model.',
    explanation: [
      'Use ng-options directive to dynamically populate select lists from objects/arrays.'
    ],
    code: `<div ng-app="myApp" ng-controller="myCtrl">
  <select ng-model="selectedCar" ng-options="x for x in cars"></select>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.cars = ["Tesla", "BMW", "Audi"];
});
</script>`,
    languageId: 'html'
  },
  {
    id: 'ng-sql',
    title: 'AngularJS SQL',
    description: 'Bind database tables returned from SQL backends dynamically into lists.',
    explanation: [
      'Query databases using backend languages (PHP, ASP), returning JSON arrays, which AngularJS loops through seamlessly.'
    ],
    code: `<div ng-app="myApp" ng-controller="dbCtrl">
  <table>
    <tr ng-repeat="x in customers">
      <td>{{ x.Name }}</td>
      <td>{{ x.City }}</td>
    </tr>
  </table>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-dom',
    title: 'AngularJS Dom',
    description: 'Deactivate, hide, and show HTML elements dynamically using ng-disabled and ng-show.',
    explanation: [
      'Directives like ng-disabled, ng-show, and ng-hide bind DOM attributes directly to boolean models.'
    ],
    code: `<div ng-app="">
  <p><button ng-disabled="mySwitch">Click Me!</button></p>
  <p><input type="checkbox" ng-model="mySwitch">Disable Button</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-events',
    title: 'AngularJS Events',
    description: 'Add trigger operations to standard clicks, keypresses, and hovers.',
    explanation: [
      'AngularJS event directives allow executing functions on specific interactions (ng-click, ng-dblclick, ng-mouseenter).'
    ],
    code: `<div ng-app="myApp" ng-controller="clickCtrl">
  <button ng-click="count = count + 1">Increment</button>
  <p>Total clicks: {{ count }}</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-forms',
    title: 'AngularJS Forms',
    description: 'Build managed form fields with automatic user values mapping.',
    explanation: [
      'AngularJS forms bind inputs, dropdowns, and textareas into structured states.'
    ],
    code: `<div ng-app="myApp" ng-controller="formCtrl">
  <form novalidate>
    First Name:<br>
    <input type="text" ng-model="user.firstName"><br>
    Last Name:<br>
    <input type="text" ng-model="user.lastName">
  </form>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-validation',
    title: 'AngularJS Validation',
    description: 'Set up strict, client-side input validations (dirty, pristine, invalid).',
    explanation: [
      'AngularJS forms and inputs provide state validations:',
      '$dirty (user interacted with), $pristine (never touched), $valid (passes rules).'
    ],
    code: `<form name="myForm" ng-app="">
  <input type="text" name="myInput" ng-model="myVal" required>
  <span ng-show="myForm.myInput.$touched && myForm.myInput.$invalid">The field is required!</span>
</form>`,
    languageId: 'html'
  },
  {
    id: 'ng-api',
    title: 'AngularJS API',
    description: 'Explore global helper functions like angular.lowercase, angular.isString, and angular.copy.',
    explanation: [
      'The global angular object contains built-in APIs for checking types, converting case, and copying datasets.'
    ],
    code: `<script>
  var myStr = "HELLO WORLD";
  var lowerStr = angular.lowercase(myStr); // "hello world"
  var checkString = angular.isString(myStr); // true
</script>`,
    languageId: 'javascript'
  },
  {
    id: 'ng-w3css',
    title: 'AngularJS W3.CSS',
    description: 'Implement modern card and lists layouts utilizing structural frameworks.',
    explanation: [
      'AngularJS applications style beautifully when integrated with CSS templates.'
    ],
    code: `<div class="w3-container w3-card-4" ng-app="">
  <h2>Styled Card header</h2>
  <p>AngularJS template within structured CSS classes.</p>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-include',
    title: 'AngularJS Include',
    description: 'Include HTML file snippets directly using the ng-include directive.',
    explanation: [
      'The ng-include directive fetches, compiles, and includes external HTML fragments inside your page.'
    ],
    code: `<div ng-app="myApp" ng-controller="myCtrl">
  <div ng-include="'myTable.html'"></div>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-application',
    title: 'AngularJS Application',
    description: 'Review a complete, modular, real-world AngularJS application structure.',
    explanation: [
      'Real-world apps separate controllers, models, and views across external JS files.'
    ],
    code: `<!-- Complete single-file component structure -->
<div ng-app="todoApp" ng-controller="todoCtrl">
  <h2>My ToDo List</h2>
  <input ng-model="newItem">
  <button ng-click="addItem()">Add</button>
  <ul>
    <li ng-repeat="x in list">{{x}}</li>
  </ul>
</div>`,
    languageId: 'html'
  },
  {
    id: 'ng-examples',
    title: 'AngularJS Examples',
    description: 'Test other interactive templates containing controllers and filters.',
    explanation: [
      'Explore standard reference models for setting up filters and form submittals.'
    ],
    code: `<div ng-app="" ng-init="names=['Alice','Bob','Charlie']">
  <input type="text" ng-model="searchQuery" placeholder="Filter names...">
  <ul>
    <li ng-repeat="name in names | filter:searchQuery">{{ name }}</li>
  </ul>
</div>`,
    languageId: 'html'
  }
];
