import { TutorialTopic } from './cssTutorialsData';

export const BOOTSTRAP3_TOPICS: TutorialTopic[] = [
  {
    id: 'bs3-home',
    title: 'BS3 HOME',
    description: 'Welcome to the Bootstrap 3 Tutorial! Bootstrap is the most popular CSS framework for developing responsive and mobile-first websites.',
    explanation: [
      'Bootstrap 3 is mobile-first, meaning the framework is designed to target mobile devices first, then scale up for larger screens.',
      'It is supported by all major browsers including Chrome, Firefox, Safari, Internet Explorer, and Opera.',
      'In this tutorial, you will learn Bootstrap 3 classes, grids, utilities, and components.'
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding-top: 20px;">
  <div class="jumbotron text-center" style="background-color: #f0fdf4; border: 1px solid #bbf7d0;">
    <h1 style="color: #166534; font-weight: 800;">Hello Bootstrap 3!</h1>
    <p>This is a mobile-first, fully responsive design using BS3 components.</p>
    <a href="#" class="btn btn-success btn-lg">Explore Sandbox</a>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-intro',
    title: 'BS3 Intro',
    description: 'Understand the core advantages of Bootstrap 3 and why it revolutionized web layouts.',
    explanation: [
      'Easy to use: Anyone with basic knowledge of HTML and CSS can start using Bootstrap.',
      'Responsive features: Bootstrap\'s responsive CSS adjusts to phones, tablets, and desktops.',
      'Mobile-first approach: In Bootstrap 3, mobile-first styles are part of the core library framework.'
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h2>Why BS3?</h2>
  <div class="row">
    <div class="col-sm-4 bg-info" style="padding: 15px; border: 1px solid #b9e0f2;">
      <h4>Easy Setup</h4>
      <p>Simply link the CSS CDN and you are ready to style layouts instantly.</p>
    </div>
    <div class="col-sm-4 bg-warning" style="padding: 15px; border: 1px solid #fce3b5;">
      <h4>Responsive</h4>
      <p>Grid columns scale smoothly from screens under 768px up to large desktops.</p>
    </div>
    <div class="col-sm-4 bg-success" style="padding: 15px; border: 1px solid #c2eaba;">
      <h4>Robust UI</h4>
      <p>Includes forms, alerts, buttons, progress bars, navigation controls and panels.</p>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-get-started',
    title: 'BS3 Get Started',
    description: 'Set up Bootstrap 3 easily using CDN links or direct downloads.',
    explanation: [
      'You can include Bootstrap 3 via MaxCDN/jsDelivr or download the files on your server.',
      'A container class is required to wrap site contents. Use .container for fixed width, or .container-fluid for full width.'
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Get Started with Bootstrap 3</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body>
  <!-- container-fluid creates a full-width container -->
  <div class="container-fluid" style="background-color: #f8fafc; padding: 30px; text-align: center;">
    <h1>Fixed vs Fluid</h1>
    <p>This is inside a <code>.container-fluid</code> which spans the entire viewport width.</p>
    <div class="container" style="background-color: #3b82f6; color: white; padding: 15px; border-radius: 4px; margin-top: 15px;">
      This inner box is a nested <code>.container</code> (fixed width).
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-grid-basic',
    title: 'BS3 Grid Basic',
    description: 'Learn the principles of the Bootstrap 3 responsive 12-column grid system.',
    explanation: [
      'Bootstrap\'s grid system allows up to 12 columns across the page.',
      'Grid classes: .col-xs- (phones <768px), .col-sm- (tablets >=768px), .col-md- (desktops >=992px), .col-lg- (large desktops >=1200px).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h3>Bootstrap 3 Grid Basics</h3>
  <div class="row">
    <!-- 12 columns total: 4 + 8 = 12 -->
    <div class="col-sm-4" style="background-color: #ddd; border: 1px solid #bbb; padding: 10px;">
      col-sm-4 (33.33% space)
    </div>
    <div class="col-sm-8" style="background-color: #eee; border: 1px solid #bbb; padding: 10px;">
      col-sm-8 (66.66% space)
    </div>
  </div>
  <div class="row" style="margin-top: 10px;">
    <!-- 12 columns total: 4 + 4 + 4 = 12 -->
    <div class="col-xs-6 col-sm-4" style="background-color: #cbd5e1; padding: 10px;">
      xs-6 / sm-4
    </div>
    <div class="col-xs-6 col-sm-4" style="background-color: #94a3b8; color: white; padding: 10px;">
      xs-6 / sm-4
    </div>
    <div class="col-xs-12 col-sm-4" style="background-color: #64748b; color: white; padding: 10px;">
      xs-12 / sm-4
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-typography',
    title: 'BS3 Typography',
    description: 'Bootstrap 3 global typography styles, lists, text alignments, and custom labels.',
    explanation: [
      'Default Font: Bootstrap 3 sets global styles on body (Helvetica Neue, Helvetica, Arial, sans-serif).',
      'Text helpers: .text-muted, .text-primary, .text-success, .text-info, .text-warning, .text-danger.',
      'Alignment helpers: .text-left, .text-center, .text-right, .text-justify.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h2>Bootstrap 3 Typography</h2>
  <p class="text-muted">This text is muted.</p>
  <p class="text-primary">This text is primary blue.</p>
  <p class="text-success">This text is success green.</p>
  <p class="text-warning">This text represents warning orange.</p>
  <p class="text-danger">This text signifies danger red.</p>
  <p class="text-center bg-primary" style="padding: 10px; color: white;">
    Centered paragraph with background color helper.
  </p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-tables',
    title: 'BS3 Tables',
    description: 'Format standard tabular databases using Bootstrap 3 clean styles.',
    explanation: [
      'Add class .table to style standard tables cleanly.',
      'Other table helpers: .table-striped (zebra-striping), .table-bordered (borders), .table-hover (hover highlights), .table-condensed (tight spacing).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h2>Striped, Hover, and Bordered Table</h2>
  <table class="table table-striped table-bordered table-hover">
    <thead>
      <tr class="active">
        <th>ID</th>
        <th>User Name</th>
        <th>System Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>101</td>
        <td>John Doe</td>
        <td>Administrator</td>
      </tr>
      <tr class="success">
        <td>102</td>
        <td>Jane Smith</td>
        <td>Developer (Success row)</td>
      </tr>
      <tr class="danger">
        <td>103</td>
        <td>Bob Miller</td>
        <td>Guest (Danger row)</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-images',
    title: 'BS3 Images',
    description: 'Style images with responsive layouts, rounded borders, and circles.',
    explanation: [
      'Use .img-responsive to scale images automatically to screen width.',
      'Use .img-rounded for rounded corners, .img-circle for perfect round shapes, and .img-thumbnail for framed thumbnail borders.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h3>Bootstrap 3 Image Styling</h3>
  <div class="row text-center">
    <div class="col-xs-4">
      <p>img-rounded</p>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=120&h=120&fit=crop" class="img-rounded" alt="Rounded">
    </div>
    <div class="col-xs-4">
      <p>img-circle</p>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=120&h=120&fit=crop" class="img-circle" alt="Circle">
    </div>
    <div class="col-xs-4">
      <p>img-thumbnail</p>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=120&h=120&fit=crop" class="img-thumbnail" alt="Thumbnail">
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-jumbotron',
    title: 'BS3 Jumbotron',
    description: 'Create massive attention grabbers using the .jumbotron container.',
    explanation: [
      'A jumbotron represents a big box for calling extra attention to featured content.',
      'Inside a .container, it gets rounded corners and margin offsets. Outside, it spans full screen.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="jumbotron text-center" style="margin-bottom: 0;">
    <h1>Hero Spotlight</h1>
    <p>This full-width jumbotron spans across the screen layout bounds.</p>
    <button class="btn btn-primary btn-lg">Join Now</button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-wells',
    title: 'BS3 Wells',
    description: 'Add an inset rounded background effect to any block using the .well helper.',
    explanation: [
      'A well is a container class .well that causes the element to appear recessed or inset on the page.',
      'Sizing modifiers: .well-lg (large padding) or .well-sm (small padding).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h2>Bootstrap 3 Wells</h2>
  <div class="well">Standard default inset Well box</div>
  <div class="well well-lg">Large well with premium padding parameters</div>
  <div class="well well-sm">Small well with condensed margins</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-alerts',
    title: 'BS3 Alerts',
    description: 'Create interactive success, info, warning, and danger feedback message boxes.',
    explanation: [
      'Alerts provide contextual feedback messages for typical user actions.',
      'Classes: .alert-success, .alert-info, .alert-warning, .alert-danger.',
      'Add .alert-dismissible and a close button markup to let the user close the box.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body class="container" style="padding: 20px;">
  <div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>Success!</strong> Your workspace settings were successfully saved. (Click close)
  </div>
  <div class="alert alert-danger">
    <strong>Error!</strong> A system critical configuration is missing.
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-buttons',
    title: 'BS3 Buttons',
    description: 'Style buttons with pre-designed contextual helpers, sizing, and states.',
    explanation: [
      'Bootstrap 3 buttons provide styled button elements with .btn base class.',
      'Context classes: .btn-default, .btn-primary, .btn-success, .btn-info, .btn-warning, .btn-danger, .btn-link.',
      'Size classes: .btn-lg, .btn-md, .btn-sm, .btn-xs, and .btn-block.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h2>Button Variants</h2>
  <button class="btn btn-default">Default</button>
  <button class="btn btn-primary">Primary Action</button>
  <button class="btn btn-success btn-lg">Large Success</button>
  <button class="btn btn-danger btn-xs">Tiny Danger</button>
  <br><br>
  <button class="btn btn-warning btn-block">Full Width Block Button</button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-button-groups',
    title: 'BS3 Button Groups',
    description: 'Group series of buttons into single horizontal or vertical visual rows.',
    explanation: [
      'Use container .btn-group to group multiple buttons together.',
      'Sizing: .btn-group-lg, .btn-group-sm, .btn-group-xs.',
      'Layout styles: Use .btn-group-vertical to stack button columns vertically.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h3>Horizontal Button Group</h3>
  <div class="btn-group btn-group-sm" role="group">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
  </div>
  
  <h3>Vertical Button Group</h3>
  <div class="btn-group-vertical" role="group" style="margin-top: 10px;">
    <button type="button" class="btn btn-info">Tab 1</button>
    <button type="button" class="btn btn-info">Tab 2</button>
    <button type="button" class="btn btn-info">Tab 3</button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-glyphicons',
    title: 'BS3 Glyphicons',
    description: 'Add icon graphics to buttons, menus, and text spans using Glyphicons.',
    explanation: [
      'Bootstrap 3 has 260 built-in Glyphicon vector fonts.',
      'Syntax: <span class="glyphicon glyphicon-iconname"></span> inside items.',
      'Always leave a blank space between the icon and actual sibling text.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h2>Bootstrap 3 Icon Fonts</h2>
  <p>Search: <span class="glyphicon glyphicon-search" style="color: blue;"></span></p>
  <p>User account: <span class="glyphicon glyphicon-user"></span></p>
  <p>Download file: <span class="glyphicon glyphicon-download-alt"></span></p>
  <br>
  <button class="btn btn-primary">
    <span class="glyphicon glyphicon-envelope"></span> Send Mail
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-badges-labels',
    title: 'BS3 Badges/Labels',
    description: 'Incorporate pill-shaped numbers or highlighted metadata label bubbles.',
    explanation: [
      'Labels highlights status texts: .label-default, .label-primary, .label-success, etc.',
      'Badges are pill-shaped counters: <span class="badge"></span> used to count unread logs or alerts.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h2>Labels & Badges</h2>
  <h3>Labels <span class="label label-success">New Version</span></h3>
  <h3>Warnings <span class="label label-danger">Expired</span></h3>
  <br>
  <p>Inbox Messages Count: <span class="badge">12</span></p>
  <ul class="nav nav-pills" role="tablist">
    <li role="presentation" class="active"><a href="#">Home <span class="badge">4</span></a></li>
    <li role="presentation"><a href="#">Updates <span class="badge">15</span></a></li>
  </ul>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-progress-bars',
    title: 'BS3 Progress Bars',
    description: 'Track workflow values using styled animated progress bar boxes.',
    explanation: [
      'Container class: .progress with child .progress-bar.',
      'Classes: .progress-bar-success, .progress-bar-info, .progress-bar-warning, .progress-bar-danger.',
      'Animation: Add .progress-bar-striped and .active to animate the loading bar.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h2>Progress Indicators</h2>
  <div class="progress">
    <div class="progress-bar progress-bar-success" role="progressbar" style="width: 40%">
      40% Complete (Success)
    </div>
  </div>
  
  <div class="progress">
    <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style="width: 85%">
      85% Running Task (Warning Striped)
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-pagination',
    title: 'BS3 Pagination',
    description: 'Add numbered index navigation menus to multipage articles.',
    explanation: [
      'Pagination represents structured links for multiple content pages.',
      'Markup: Wrap a standard <ul> with class .pagination inside a <nav> wrapper.',
      'Sizing: .pagination-lg, .pagination-sm.',
      'States: Add .disabled to unclickable slots and .active to highlight current indices.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h2>Numbered Pagination</h2>
  <nav aria-label="Page navigation">
    <ul class="pagination pagination-sm">
      <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
      <li class="active"><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
    </ul>
  </nav>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-pager',
    title: 'BS3 Pager',
    description: 'Implement quick back-and-forth link buttons using the .pager template.',
    explanation: [
      'The pager is a simplified pagination style for quick "Previous" and "Next" navigation controls.',
      'Use classes .previous and .next to align the elements to the outer edge layout blocks.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h2>Bootstrap 3 Pager Navigation</h2>
  <ul class="pager">
    <li class="previous"><a href="#">&larr; Older Post</a></li>
    <li class="next"><a href="#">Newer Post &rarr;</a></li>
  </ul>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-list-groups',
    title: 'BS3 List Groups',
    description: 'Render beautiful lists of customizable group components.',
    explanation: [
      'To build a basic list group, use <ul> with .list-group and <li> elements with .list-group-item.',
      'Add badges inside elements to indicate numeric counters.',
      'Use <a> tags instead of <li> list items to create interactive clickable links.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h2>List Group Components</h2>
  <div class="list-group">
    <a href="#" class="list-group-item active">
      <span class="badge">15</span>
      Active Header Tab
    </a>
    <a href="#" class="list-group-item">List item option two</a>
    <a href="#" class="list-group-item list-group-item-warning">List item option warning row</a>
    <a href="#" class="list-group-item list-group-item-danger">List item option danger row</a>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-panels',
    title: 'BS3 Panels',
    description: 'Wrap data or texts inside bordered cards using the .panel class.',
    explanation: [
      'A panel in Bootstrap 3 is a bordered box that can contain titles, bodies, and footers.',
      'Structure: .panel wrapper containing child divs .panel-heading, .panel-body, and .panel-footer.',
      'Contextual helpers: .panel-primary, .panel-success, .panel-info, .panel-warning, .panel-danger.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <div class="panel panel-info">
    <div class="panel-heading">
      <h3 class="panel-title">System Status (Panel Heading)</h3>
    </div>
    <div class="panel-body">
      All database services and API tunnels are operating normally. (Panel Body)
    </div>
    <div class="panel-footer text-right">
      Updated 2 mins ago (Panel Footer)
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-dropdowns',
    title: 'BS3 Dropdowns',
    description: 'Construct interactive popover dropdown menus utilizing Bootstrap JS.',
    explanation: [
      'Dropdown menus require the Bootstrap dropdown JS module to toggle views.',
      'Wrap button and list elements inside a .dropdown container.',
      'Assign attribute data-toggle="dropdown" to triggers.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body class="container" style="padding: 50px; text-align: center;">
  <h2>Bootstrap 3 Interactive Dropdown</h2>
  <div class="dropdown inline-block">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
      Select Option <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" style="left: 50%; transform: translateX(-50%);">
      <li><a href="#">Action item</a></li>
      <li><a href="#">Another setup</a></li>
      <li class="divider"></li>
      <li><a href="#">Separated query</a></li>
    </ul>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-collapse',
    title: 'BS3 Collapse',
    description: 'Build accordion and toggled text contents using the collapse module.',
    explanation: [
      'The collapse plugin lets you toggle visibility of elements easily.',
      'Link triggers using href="#id" (for links) or data-target="#id" (for buttons).',
      'The target container must carry class .collapse.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body class="container" style="padding: 20px;">
  <h2>Toggled Collapse Accordion</h2>
  <button class="btn btn-primary" data-toggle="collapse" data-target="#demo">
    Toggle Content
  </button>
  <div id="demo" class="collapse in" style="margin-top: 15px;">
    <div class="well">
      This contents block is wrapped inside a collapsible box. Clicking the button above toggles visibility parameters.
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-tabs-pills',
    title: 'BS3 Tabs/Pills',
    description: 'Style tabs or pill layout systems for routing screen views.',
    explanation: [
      'Tabs and pills are used to create clean sub-navigation links.',
      'Navigation list wrapper must carry class .nav, paired with .nav-tabs or .nav-pills.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container">
  <h3>Tabs Component</h3>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Messages</a></li>
  </ul>
  
  <h3>Pills Component</h3>
  <ul class="nav nav-pills nav-stacked" style="width: 200px; margin-top: 20px;">
    <li class="active"><a href="#">Stacked Pill 1</a></li>
    <li><a href="#">Stacked Pill 2</a></li>
  </ul>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-navbar',
    title: 'BS3 Navbar',
    description: 'Design responsive headers with navigation links, branding, and forms.',
    explanation: [
      'A navbar is a responsive navigation header.',
      'Use .navbar-default or .navbar-inverse (for a dark header bar).',
      'Requires a toggle button with data-toggle="collapse" for mobile responsiveness.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">NodeLab</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <h3>Navbar Complete</h3>
    <p>Resize screen width to see the responsive mobile drawer toggle into action.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-forms',
    title: 'BS3 Forms',
    description: 'Structure custom forms with inputs, textareas, and checks.',
    explanation: [
      'Bootstrap forms have three layout formats: Vertical form (default), Horizontal form, or Inline form.',
      'Always wrap inputs and labels inside a container with class .form-group.',
      'Apply class .form-control to all textual input fields.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h2>Vertical Form Layout</h2>
  <form>
    <div class="form-group">
      <label for="email">Email Address:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember credentials</label>
    </div>
    <button type="submit" class="btn btn-success">Login</button>
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-inputs',
    title: 'BS3 Inputs',
    description: 'Work with input fields, textareas, radio buttons, and select tags.',
    explanation: [
      'Wrap custom inputs with .form-control to style them cleanly.',
      'Checkboxes and radio inputs can be stacked or styled inline using classes like .checkbox-inline and .radio-inline.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h3>Inline Radios and Checkboxes</h3>
  <label class="radio-inline">
    <input type="radio" name="optradio" checked>Option 1
  </label>
  <label class="radio-inline">
    <input type="radio" name="optradio">Option 2
  </label>
  <br><br>
  <div class="form-group">
    <label for="sel1">Select Level (Select List):</label>
    <select class="form-control" id="sel1">
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Expert</option>
    </select>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-inputs-2',
    title: 'BS3 Inputs 2',
    description: 'Explore input groups with appended text fields or action buttons.',
    explanation: [
      'The .input-group class is a container to prepend or append text or buttons to input fields.',
      'Use .input-group-addon to prepend/append static texts, or .input-group-btn to append buttons.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h3>Input Group Addons</h3>
  <div class="input-group">
    <span class="input-group-addon">@</span>
    <input type="text" class="form-control" placeholder="Username">
  </div>
  <br>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search platform...">
    <span class="input-group-btn">
      <button class="btn btn-primary" type="button">Search</button>
    </span>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-input-sizing',
    title: 'BS3 Input Sizing',
    description: 'Modify input heights and widths using sizing utility classes.',
    explanation: [
      'Change input heights using: .input-lg, .input-sm.',
      'To control input widths responsive to grid bounds, wrap the input elements inside grid column classes like .col-xs-4.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h3>Input Field Heights</h3>
  <input class="form-control input-lg" type="text" placeholder=".input-lg">
  <br>
  <input class="form-control input-sm" type="text" placeholder=".input-sm">
  <br>
  <h3>Responsive Widths</h3>
  <div class="row">
    <div class="col-xs-3">
      <input type="text" class="form-control" placeholder="col-xs-3">
    </div>
    <div class="col-xs-6">
      <input type="text" class="form-control" placeholder="col-xs-6">
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-media-objects',
    title: 'BS3 Media Objects',
    description: 'Style comments, tweets, or reviews with repeating block components.',
    explanation: [
      'The .media class styles block sections containing a left or right aligned image/graphic alongside heading/body structures.',
      'Classes: .media, .media-left, .media-body, .media-heading.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
</head>
<body class="container" style="padding: 20px;">
  <h3>Media Comment Layout</h3>
  <div class="media" style="border-bottom: 1px solid #eee; padding-bottom: 15px;">
    <div class="media-left">
      <img class="media-object img-circle" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="avatar" style="width: 64px; height: 64px;">
    </div>
    <div class="media-body">
      <h4 class="media-heading">Sarah Connor <small><i>Posted Dec 15, 2026</i></small></h4>
      <p>This tutorial layout is extremely complete. I styled my entire user dashboard in under twenty minutes using standard panels and list structures.</p>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-carousel',
    title: 'BS3 Carousel',
    description: 'Integrate dynamic image sliders with indicators, captions, and navigation arrows.',
    explanation: [
      'The Carousel plugin is a slideshow for cycling through elements.',
      'Requires id wrapper, class .carousel, indicators, wrapper .carousel-inner, and control arrows.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body class="container" style="padding: 20px;">
  <h2>Bootstrap 3 Interactive Slider</h2>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" style="max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; height: 300px;">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" style="height: 100%;">
      <div class="item active" style="height: 100%; background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; text-align: center; padding-top: 100px;">
        <h3>Slide 1: Web Development</h3>
        <p>Responsive workflows simplify production coding.</p>
      </div>
      <div class="item" style="height: 100%; background: linear-gradient(135deg, #0f172a, #1e293b); color: white; text-align: center; padding-top: 100px;">
        <h3>Slide 2: Enterprise Architecture</h3>
        <p>Styled using standard BS3 templates.</p>
      </div>
    </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-modal',
    title: 'BS3 Modal',
    description: 'Construct overlay dialogue window frames utilizing Bootstrap JS.',
    explanation: [
      'A modal is a dialog box/popup window that is displayed on top of the current page.',
      'Requires trigger with data-toggle="modal" and target data-target="#myModal".',
      'The structure contains .modal-dialog, .modal-content, .modal-header, .modal-body, and .modal-footer.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body class="container" style="padding: 20px; text-align: center;">
  <h2>Interactive Popup Modal</h2>
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
    Launch Modal
  </button>

  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="color: #1e3a8a; font-weight: bold;">System Notification</h4>
        </div>
        <div class="modal-body" style="text-align: left;">
          <p>This popup overlay dialogue allows developers to display alert notices, confirmations, or additional form parameters without refreshing active layouts.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-tooltip',
    title: 'BS3 Tooltip',
    description: 'Incorporate popover text tips hovering above components.',
    explanation: [
      'Tooltips are interactive text descriptors appearing upon hover states.',
      'Must be explicitly initialized via jQuery scripting: $(\'[data-toggle="tooltip"]\').tooltip();.',
      'The attribute data-placement="top|bottom|left|right" specifies the layout position.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body class="container" style="padding: 50px; text-align: center;">
  <h3>Tooltip Hover Actions</h3>
  <br>
  <a href="#" data-toggle="tooltip" data-placement="top" title="This is a top descriptor!">Hover Top Link</a>
  <br><br>
  <button class="btn btn-success" data-toggle="tooltip" data-placement="right" title="Tooltip on the right!">
    Hover Right Button
  </button>

  <script>
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-popover',
    title: 'BS3 Popover',
    description: 'Build rich popover cards with headers and bodies triggered by clicks.',
    explanation: [
      'A Popover is similar to a tooltip, but can contain much more text, headers, and formatted bodies.',
      'Must be explicitly initialized using the jQuery .popover() module.',
      'Set attributes: data-toggle="popover", title="Header", and data-content="Body text".'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
</head>
<body class="container" style="padding: 50px; text-align: center;">
  <h2>Bootstrap 3 Interactive Popover</h2>
  <button type="button" class="btn btn-danger btn-lg" data-toggle="popover" title="Database Backup" data-content="Backup completed successfully. 4.2GB stored in cloud repository index.">
    Toggle Popover Info
  </button>

  <script>
    $(document).ready(function(){
      $('[data-toggle="popover]').popover();
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-scrollspy',
    title: 'BS3 Scrollspy',
    description: 'Update navigation highlights automatically as the screen scrolls.',
    explanation: [
      'Scrollspy is used to automatically update links in a navigation list based on scroll position.',
      'Add data-spy="scroll" and data-target=".navbar" to the scrollable container.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
  <style>
    body { position: relative; }
    .scrollspy-section { height: 200px; padding: 20px; border-bottom: 1px solid #ddd; }
  </style>
</head>
<body data-spy="scroll" data-target="#scrollNavbar" data-offset="50">
  <nav id="scrollNavbar" class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#sec1">Section 1</a></li>
        <li><a href="#sec2">Section 2</a></li>
      </ul>
    </div>
  </nav>
  
  <div class="container" style="margin-top: 70px;">
    <div id="sec1" class="scrollspy-section bg-success">
      <h4>Section 1 Contents</h4>
      <p>Scroll down or click navigation tab parameters to observe active indicator highlights updating automatically.</p>
    </div>
    <div id="sec2" class="scrollspy-section bg-warning">
      <h4>Section 2 Contents</h4>
      <p>Scrollspy detects standard viewport elevations and updates nav selections.</p>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs3-affix',
    title: 'BS3 Affix',
    description: 'Lock any panel at specified scrolling heights using the affix module.',
    explanation: [
      'The Affix plugin allows a <div> to be pinned to an area on the page.',
      'Add data-spy="affix" and data-offset-top="200" to define the scroll point where the pinning activates.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
  <style>
    .affix { top: 20px; z-index: 1000; width: 100%; max-width: 250px; }
  </style>
</head>
<body class="container">
  <h2>Bootstrap 3 Affix Menu</h2>
  <div class="row">
    <div class="col-xs-3">
      <!-- Standard affix elements lock when viewport scrolls past offset threshold -->
      <div class="well" data-spy="affix" data-offset-top="50">
        <h4>Affixed Lock</h4>
        <p>I lock on screen once scrolled.</p>
      </div>
    </div>
    <div class="col-xs-9">
      <div style="height: 1000px; background-color: #fafafa; padding: 20px; border-left: 1px dashed #ccc;">
        <h3>Scroll down this block!</h3>
        <p>Observe the sidebar on the left side lock its location coordinates as the page continues scrolling downwards.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  }
];
