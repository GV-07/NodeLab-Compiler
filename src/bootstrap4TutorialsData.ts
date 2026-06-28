import { TutorialTopic } from './cssTutorialsData';

export const BOOTSTRAP4_TOPICS: TutorialTopic[] = [
  {
    id: 'bs4-home',
    title: 'BS4 HOME',
    description: 'Welcome to Bootstrap 4! Bootstrap 4 is a major rewrite of the entire mobile-first, responsive CSS framework.',
    explanation: [
      'Bootstrap 4 has several upgrades including switching from floats to CSS Flexible Box (Flexbox).',
      'It supports modern sass variables, utility classes, cards (which replace panels/wells/thumbnails), and new flex layouts.',
      'In this tutorial, you will explore Bootstrap 4 grid setups, flex structures, and responsive modules.'
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <div class="card bg-light border-success text-center shadow-sm">
    <div class="card-body p-5">
      <h1 class="display-4 font-weight-bold text-success">Hello Bootstrap 4!</h1>
      <p class="lead text-muted">Leverage the power of Flexbox and modern card layouts inside the interactive sandbox.</p>
      <button class="btn btn-success btn-lg">Get Started</button>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-get-started',
    title: 'BS4 Get Started',
    description: 'Establish standard Bootstrap 4 projects using CDN resources or direct repository builds.',
    explanation: [
      'Bootstrap 4 uses jQuery and Popper.js for dynamic interactivity modules like dropdowns, popovers, and tooltips.',
      'Include the standard mobile-first viewport meta tag in the head section to enable responsive layouts.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Viewport metadata enabling mobile layout sizing -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="bg-dark text-white p-5">
  <div class="container text-center">
    <h2>CDN Implementation Checked!</h2>
    <p>We are running fully-functioning Bootstrap 4 styles inside this viewport sandbox.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-containers',
    title: 'BS4 Containers',
    description: 'Learn the differences between .container and .container-fluid layout boundaries.',
    explanation: [
      'Containers wrap and format layout sections.',
      'Use .container for a responsive fixed-width screen block (with widths adapting to breakpoints).',
      'Use .container-fluid for a full-width container spanning the total screen width.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container bg-primary text-white text-center p-3 my-3">
    <h4>Fixed Container (.container)</h4>
    <p>Resizes to specific max-widths based on media query screen breakpoints.</p>
  </div>
  
  <div class="container-fluid bg-secondary text-white text-center p-3 my-3">
    <h4>Fluid Container (.container-fluid)</h4>
    <p>Always spans 100% of the active browser screen viewport width.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-grid-basic',
    title: 'BS4 Grid Basic',
    description: 'Understand column sizes, offsets, and row layout templates.',
    explanation: [
      'Bootstrap 4 grid system has 5 responsive tiers: .col- (extra small), .col-sm- (small), .col-md- (medium), .col-lg- (large), .col-xl- (extra large).',
      'If you specify just .col- without a number, columns will divide row widths equally.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link class="bootstrap" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Equal Width Auto-Columns</h3>
  <div class="row text-center text-white font-weight-bold">
    <div class="col bg-primary p-3 border">Auto Col 1</div>
    <div class="col bg-info p-3 border">Auto Col 2</div>
    <div class="col bg-primary p-3 border">Auto Col 3</div>
  </div>
  
  <h3 class="mt-4">Mixed Breakpoint Columns</h3>
  <div class="row text-center text-white">
    <div class="col-sm-4 bg-secondary p-3 border">col-sm-4 (33.33%)</div>
    <div class="col-sm-8 bg-dark p-3 border">col-sm-8 (66.67%)</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-typography',
    title: 'BS4 Typography',
    description: 'Learn display headings, text alignments, lead text paragraphs, and text utility highlights.',
    explanation: [
      'Bootstrap 4 styles global font-sizes at 1rem (16px), with Inter or Roboto style systems.',
      'Display Headings: .display-1, .display-2, .display-3, .display-4 (larger, thinner editorial styles).',
      'Lead Paragraphs: .lead class makes a paragraph stand out.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h1 class="display-3">Display 3 Heading</h1>
  <p class="lead">This is a prominent "lead" paragraph styling to catch user focus instantly.</p>
  <p>This is standard inline text body, featuring a <mark>marked highlight</mark> element and <span class="text-uppercase text-danger font-weight-bold">uppercase warning span</span>.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-colors',
    title: 'BS4 Colors',
    description: 'Explore text and background colors including status, success, warnings, and dark styles.',
    explanation: [
      'Text context classes: .text-primary, .text-secondary, .text-success, .text-danger, .text-warning, .text-info, .text-light, .text-dark, .text-body, .text-muted.',
      'Background context classes: .bg-primary, .bg-secondary, .bg-success, .bg-danger, .bg-warning, .bg-info, .bg-light, .bg-dark, .bg-white, .bg-transparent.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h2>Context Colors</h2>
  <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
  <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
  <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
  <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-tables',
    title: 'BS4 Tables',
    description: 'Style tabular data grids using theme-aware, dark, or striped table helper variables.',
    explanation: [
      'Class .table applies standard formatting to table structures.',
      'Use .table-dark to create tables with a clean dark background color.',
      'Use .thead-dark or .thead-light to style only the table header blocks.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h2>Bootstrap 4 Dark Table</h2>
  <table class="table table-dark table-striped table-hover">
    <thead class="thead-light">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>Morgan</td>
        <td>150</td>
      </tr>
      <tr>
        <td>Charlie</td>
        <td>Sheen</td>
        <td>295</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-images',
    title: 'BS4 Images',
    description: 'Structure responsive fluid images, thumbnails, and aligned image blocks.',
    explanation: [
      'To make an image scale dynamically to its parent width, apply class .img-fluid.',
      'Use .rounded (rounded corners), .rounded-circle (circular alignment), and .img-thumbnail (with thin border frame).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container text-center py-4">
  <h3>Bootstrap 4 Rounded Fluid Images</h3>
  <div class="row">
    <div class="col-sm-6">
      <p>img-fluid rounded-circle</p>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&h=150&fit=crop" class="img-fluid rounded-circle mx-auto d-block" alt="Round">
    </div>
    <div class="col-sm-6">
      <p>img-thumbnail</p>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&h=150&fit=crop" class="img-thumbnail rounded mx-auto d-block" alt="Thumbnail">
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-jumbotron',
    title: 'BS4 Jumbotron',
    description: 'Construct featured highlight banners using jumbotrons.',
    explanation: [
      'A Jumbotron creates a large showcase banner calling extra attention to specific texts or call-to-actions.',
      'Use .jumbotron-fluid in combination with a nested .container to create full-width banners without rounded borders.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="jumbotron jumbotron-fluid bg-dark text-white text-center mb-0">
    <div class="container">
      <h1 class="display-4">Developer Sandbox</h1>
      <p class="lead">Bootstrap 4 makes UI design simple, fluid, and robust.</p>
      <hr class="my-4 border-secondary">
      <button class="btn btn-primary btn-lg">Explore Docs</button>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-alerts',
    title: 'BS4 Alerts',
    description: 'Provide dynamic user actions responses with success, info, warning, and dismissal triggers.',
    explanation: [
      'Bootstrap 4 alerts support links inside using .alert-link (to color link contents properly to context).',
      'The class .alert-dismissible combined with a close button and data-dismiss="alert" handles popup terminations.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4">
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Warning Notice!</strong> This sandbox session is temporary. Secure your work by <a href="#" class="alert-link">saving variables here</a>.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-buttons',
    title: 'BS4 Buttons',
    description: 'Style buttons with solid colors, outlines, sizing, or full block layouts.',
    explanation: [
      'Outline buttons: BS4 introduces button outline styles like .btn-outline-primary, .btn-outline-success, etc.',
      'Sizing: .btn-lg (large), .btn-sm (small).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Solid vs Outline Buttons</h3>
  <button class="btn btn-primary">Solid Primary</button>
  <button class="btn btn-outline-primary">Outline Primary</button>
  <button class="btn btn-outline-success btn-sm">Small Success Outline</button>
  <button class="btn btn-outline-danger btn-lg mt-2 btn-block">Large Block Outline Danger</button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-button-groups',
    title: 'BS4 Button Groups',
    description: 'Learn button layouts, nests, drop-downs, and custom vertical alignments.',
    explanation: [
      'Combine buttons using container class .btn-group.',
      'Button groups can be nested, for instance, placing dropdown buttons inside a standard button row.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4">
  <h2>Nested Button Group Menu</h2>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-secondary">Tab A</button>
    <button type="button" class="btn btn-secondary">Tab B</button>
    <div class="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
        More
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Sub-option 1</a>
        <a class="dropdown-item" href="#">Sub-option 2</a>
      </div>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-badges',
    title: 'BS4 Badges',
    description: 'Style numeric and textual badge highlight pills using context colors.',
    explanation: [
      'Badges are highlight indicators. Use base class .badge and a context modifier class .badge-secondary, .badge-success, .badge-pill, etc.',
      'Pill Badges: Use class .badge-pill to create rounded pill-shaped badges.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Status Badges</h3>
  <span class="badge badge-primary">Primary Status</span>
  <span class="badge badge-success badge-pill">Success Pill Badge</span>
  <br><br>
  <button class="btn btn-dark">
    Workspace Updates <span class="badge badge-danger ml-1">5</span>
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-progress-bars',
    title: 'BS4 Progress Bars',
    description: 'Design multi-colored progress trackers, heights, and animated layouts.',
    explanation: [
      'In Bootstrap 4, change the height of progress bars by setting height rules on the container .progress.',
      'Color classes can be applied directly to the .progress-bar.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Custom Progress Sizing</h3>
  <!-- Height specified in inline styles -->
  <div class="progress mb-3" style="height: 8px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: 35%"></div>
  </div>
  
  <div class="progress" style="height: 25px;">
    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%">
      75% Load Status
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-pagination',
    title: 'BS4 Pagination',
    description: 'Structure page indexes with disabled options, highlights, and custom sizes.',
    explanation: [
      'Standard structure: <ul class="pagination"> containing <li class="page-item"> with <a class="page-link"> inside.',
      'Use .active and .disabled classes to state active links or non-interactable options.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h2>Pagination Layout</h2>
  <nav aria-label="Page navigation">
    <ul class="pagination pagination-lg justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-list-groups',
    title: 'BS4 List Groups',
    description: 'Create responsive list groups with active tabs and custom list block headers.',
    explanation: [
      'Create list layouts with .list-group and child .list-group-item.',
      'Use .list-group-item-action to make list elements interactive with subtle hover transitions.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h2>Actionable List Groups</h2>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action active">
      Overview Index Header
    </button>
    <button type="button" class="list-group-item list-group-item-action">Profile Database Parameters</button>
    <button type="button" class="list-group-item list-group-item-action list-group-item-warning">Disk Storage Warning</button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-cards',
    title: 'BS4 Cards',
    description: 'Explore cards (which replace panels/wells) with headers, feet, images, and button triggers.',
    explanation: [
      'Cards are Bootstrap 4\'s standard content container.',
      'Structure: Container .card, containing children .card-header, .card-body, .card-title, .card-text, and .card-footer.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <div class="card shadow-sm" style="max-width: 350px;">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=350&h=180&fit=crop" alt="Card image">
    <div class="card-body">
      <h5 class="card-title font-weight-bold">Modern React Cards</h5>
      <p class="card-text text-muted text-sm">Bootstrap 4 cards completely replace legacy panels, wells, and thumbnails inside grids.</p>
      <a href="#" class="btn btn-primary">Launch Setup</a>
    </div>
    <div class="card-footer text-muted small">Updated 5m ago</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-dropdowns',
    title: 'BS4 Dropdowns',
    description: 'Learn dynamic toggle dropdown lists with custom menu dividers and alignments.',
    explanation: [
      'Dropdown menus are toggleable overlays for displaying lists of navigation links.',
      'Use base wrapper .dropdown, with data-toggle="dropdown" on the trigger, and a sibling .dropdown-menu containing .dropdown-item links.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4 text-center">
  <h2>Bootstrap 4 Dropdown</h2>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
      User Account Options
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">View Credentials</a>
      <a class="dropdown-item" href="#">Database Settings</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item text-danger" href="#">Logout</a>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-collapse',
    title: 'BS4 Collapse',
    description: 'Build accordion collapsible cards toggled via simple triggers.',
    explanation: [
      'The collapse plugin triggers layout height changes to toggle elements.',
      'Assign data-toggle="collapse" and data-target="#collapseId" to your triggers.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4">
  <p>
    <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapse1" role="button">Toggle Section 1</a>
    <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#multiCollapse2">Toggle Section 2</button>
  </p>
  <div class="row">
    <div class="col">
      <div class="collapse show" id="multiCollapse1">
        <div class="card card-body bg-light">
          This content block represents Section 1 panel layouts.
        </div>
      </div>
    </div>
    <div class="col">
      <div class="collapse" id="multiCollapse2">
        <div class="card card-body bg-dark text-white">
          This represents Section 2 dark panel layouts.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-navs',
    title: 'BS4 Navs',
    description: 'Explore horizontal alignments, dynamic vertical tabs, and tab routing links.',
    explanation: [
      'Base list container class: .nav with children .nav-item and child links carrying class .nav-link.',
      'Alignments: Add utilities like .justify-content-center or .flex-column (for vertical side-navigation menus).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Centered Navigation Tabs</h3>
  <ul class="nav justify-content-center bg-light p-2 rounded mb-4">
    <li class="nav-item"><a class="nav-link active" href="#">Dashboard</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Database Queries</a></li>
    <li class="nav-item"><a class="nav-link disabled" href="#">System logs</a></li>
  </ul>
  
  <h3>Vertical Sub-Menu</h3>
  <ul class="nav flex-column bg-dark p-3 rounded" style="max-width: 200px;">
    <li class="nav-item"><a class="nav-link text-white" href="#">Admin Portal</a></li>
    <li class="nav-item"><a class="nav-link text-white-50" href="#">Variables</a></li>
  </ul>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-navbar',
    title: 'BS4 Navbar',
    description: 'Design dark themed responsive headers with mobile collapsible burger buttons.',
    explanation: [
      'Use class .navbar, paired with themes like .navbar-dark .bg-dark or .navbar-light .bg-light.',
      'Set .navbar-expand-lg to specify the screen breakpoint where navigation options expand from mobile views.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
    <a class="navbar-brand font-weight-bold" href="#">Workspace</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Billing</a></li>
      </ul>
      <span class="navbar-text text-white font-weight-bold">v4.6 Ready</span>
    </div>
  </nav>
  <div class="container mt-4">
    <h3>Navbar Complete</h3>
    <p>Shrink your browser screen size to see standard navigation links fold cleanly into mobile toggle drawers.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-forms',
    title: 'BS4 Forms',
    description: 'Structure custom login or data entry forms with inputs and labels.',
    explanation: [
      'Bootstrap 4 forms arrange fields cleanly using the .form-group class wrapper.',
      'Checkboxes wrap inside container .form-check with labels styled with .form-check-label.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h2>Bootstrap 4 Vertical Form</h2>
  <form style="max-width: 400px;" class="bg-light p-4 rounded border">
    <div class="form-group">
      <label for="emailInput">Username / Email:</label>
      <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
      <small class="form-text text-muted">We will never share your database logs.</small>
    </div>
    <div class="form-group">
      <label for="passwordInput">Password Key:</label>
      <input type="password" class="form-control" id="passwordInput">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="checkOpt">
      <label class="form-check-label" for="checkOpt">Keep session logged</label>
    </div>
    <button type="submit" class="btn btn-primary btn-block">Enter Admin Panel</button>
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-inputs',
    title: 'BS4 Inputs',
    description: 'Design inputs, textareas, select lists, and interactive ranges.',
    explanation: [
      'Apply class .form-control to style textual <input>, <textarea>, and <select> tags.',
      'To make a range input responsive, use class .form-control-range.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Interactive Text Area</h3>
  <div class="form-group">
    <label for="commentField">User Feedback Logs:</label>
    <textarea class="form-control" id="commentField" rows="3" placeholder="Enter feedback details..."></textarea>
  </div>
  
  <div class="form-group">
    <label for="rangeField">Priority Scale: <span class="badge badge-info">Range Input</span></label>
    <input type="range" class="form-control-range" id="rangeField">
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-input-groups',
    title: 'BS4 Input Groups',
    description: 'Prepend or append text, checkboxes, or buttons to input fields.',
    explanation: [
      'Use container class .input-group with children .input-group-prepend or .input-group-append.',
      'Wrap inner text descriptors inside element container with class .input-group-text.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Input Group Utilities</h3>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">https://</span>
    </div>
    <input type="text" class="form-control" placeholder="example.com">
  </div>
  
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search product catalogs...">
    <div class="input-group-append">
      <button class="btn btn-primary" type="button">Run Query</button>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-custom-forms',
    title: 'BS4 Custom Forms',
    description: 'Incorporate custom browser checkboxes, radio toggles, and switch sliders.',
    explanation: [
      'Bootstrap 4 supports custom form components replacing defaults.',
      'Use classes: .custom-control, .custom-checkbox, .custom-radio, and the highly popular toggle .custom-switch.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Custom Form Switches and Checkboxes</h3>
  <div class="custom-control custom-switch mb-3">
    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked>
    <label class="custom-control-label" for="customSwitch1">Toggle System Active Status</label>
  </div>
  
  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Accept workspace cookies</label>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-carousel',
    title: 'BS4 Carousel',
    description: 'Build interactive image slides featuring captions and indicators.',
    explanation: [
      'Carousel components cycle through elements.',
      'Classes: .carousel, .carousel-indicators, .carousel-inner, .carousel-item, .carousel-control-prev/next.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4">
  <div id="demoCarousel" class="carousel slide" data-ride="carousel" style="max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden;">
    <ul class="carousel-indicators">
      <li data-target="#demoCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#demoCarousel" data-slide-to="1"></li>
    </ul>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=300&fit=crop" class="d-block w-100" alt="Slide 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>System Diagnostics</h5>
          <p>Analyzing compiler metrics in real time.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="bg-dark text-white d-flex align-items-center justify-content-center" style="height: 300px;">
          <div class="text-center">
            <h5>Flexible Frameworks</h5>
            <p>Built on top of native CSS flexbox models.</p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#demoCarousel" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demoCarousel" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-modal',
    title: 'BS4 Modal',
    description: 'Construct interactive overlay modals with customizable sizing and effects.',
    explanation: [
      'A Modal is a dialog box appearing on top of the browser view.',
      'Sizing categories: .modal-sm, .modal-lg, .modal-xl.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4 text-center">
  <h2>Bootstrap 4 Large Modal</h2>
  <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#largeModal">
    Open Large Modal
  </button>

  <div class="modal fade" id="largeModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-weight-bold">Database Warning</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body text-left">
          <p>This dialogue is styled using the <code>.modal-lg</code> wrapper, making it wider and perfect for logs, charts, and detailed data entry forms.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Confirm Purge</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-tooltip',
    title: 'BS4 Tooltip',
    description: 'Incorporate popover text tips on components hover actions.',
    explanation: [
      'Tooltips must be initialized manually via Popper JS helper scripts: $(\'[data-toggle="tooltip"]\').tooltip();.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-5 text-center">
  <h3>Interactive Tooltip Actions</h3>
  <br>
  <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip aligned above!">
    Hover Top Trigger
  </button>
  <button type="button" class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Tooltip aligned below!">
    Hover Bottom Trigger
  </button>

  <script>
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-popover',
    title: 'BS4 Popover',
    description: 'Toggle popup information blocks utilizing Popper JS triggers.',
    explanation: [
      'Popovers require explicit initialization in JS: $(\'[data-toggle="popover"]\').popover();.',
      'Dismiss popovers on the next click using attribute: data-trigger="focus".'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-5 text-center">
  <h2>Click Popover Actions</h2>
  <button type="button" class="btn btn-danger btn-lg" data-toggle="popover" title="System Log Info" data-content="Node.js cluster reported 99.9% uptime metric for active websocket routing channels.">
    Toggle Details Card
  </button>

  <script>
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-toast',
    title: 'BS4 Toast',
    description: 'Incorporate floating notification sliders on active interfaces.',
    explanation: [
      'Bootstrap 4 introduces native lightweight notifications called Toasts.',
      'Show toast elements manually by executing $(\'.toast\').toast(\'show\');.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4 text-center">
  <h2>Bootstrap 4 Toast Notifications</h2>
  <button type="button" class="btn btn-info" id="toastBtn">Trigger Web Toast</button>

  <div class="toast bg-dark text-white mx-auto mt-4" style="position: relative; min-width: 250px;" data-delay="3000">
    <div class="toast-header bg-primary text-white">
      <strong class="mr-auto">Compiler Cluster</strong>
      <small>Just now</small>
      <button type="button" class="ml-2 mb-1 close text-white" data-dismiss="toast">&times;</button>
    </div>
    <div class="toast-body">
      TypeScript compiled successfully with 0 warnings!
    </div>
  </div>

  <script>
    $(document).ready(function(){
      $("#toastBtn").click(function(){
        $('.toast').toast('show');
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-scrollspy',
    title: 'BS4 Scrollspy',
    description: 'Track active viewport coordinates to highlight active menu sections.',
    explanation: [
      'Scrollspy updates active list classes inside navbar selectors dynamically based on current viewport coordinates scroll offset.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
  <style>
    body { position: relative; }
    .spy-section { height: 250px; padding: 30px; }
  </style>
</head>
<body data-spy="scroll" data-target="#spyNav" data-offset="50">
  <nav id="spyNav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <ul class="navbar-nav flex-row">
      <li class="nav-item"><a class="nav-link px-3 active" href="#sectionA">Block A</a></li>
      <li class="nav-item"><a class="nav-link px-3" href="#sectionB">Block B</a></li>
    </ul>
  </nav>
  
  <div class="container" style="margin-top: 80px;">
    <div id="sectionA" class="spy-section bg-light text-dark">
      <h4>Section A Details</h4>
      <p>Scroll down inside the view pane or click navbar selections to observe indicators updating active status automatically.</p>
    </div>
    <div id="sectionB" class="spy-section bg-secondary text-white">
      <h4>Section B Details</h4>
      <p>Scrollspy matches active document fragments using responsive offset values.</p>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-utilities',
    title: 'BS4 Utilities',
    description: 'Optimize layout margins, borders, paddings, and shadow dimensions.',
    explanation: [
      'Bootstrap 4 provides extremely robust utility classes.',
      'Spacing format: {property}{sides}-{size} (e.g., .pt-3 is padding-top 1rem, .mx-auto is horizontal auto centering, .my-4 is vertical margin spacing).',
      'Shadows: .shadow-none, .shadow-sm, .shadow, .shadow-lg.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <div class="shadow-lg p-5 mb-5 bg-white rounded border">
    <h3 class="m-0 text-primary font-weight-bold">Padding & Shadow Utilities</h3>
    <p class="mt-3 text-muted">This box leverages spacing modifiers (<code>mt-3</code>, <code>p-5</code>) and shadow levels (<code>shadow-lg</code>) to build layouts with clean hierarchy.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-flex',
    title: 'BS4 Flex',
    description: 'Leverage the CSS Flexbox model to design grids, alignments, and order properties.',
    explanation: [
      'Bootstrap 4 is built entirely on flexbox configurations.',
      'Turn on flexbox layouts using class .d-flex (or .d-inline-flex).',
      'Alignments: .justify-content-start, .justify-content-center, .justify-content-between, .align-items-center.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Centered Flex Items</h3>
  <div class="d-flex justify-content-center align-items-center bg-light border rounded" style="height: 120px;">
    <div class="p-3 bg-primary text-white border rounded mr-2">Flex Card A</div>
    <div class="p-3 bg-success text-white border rounded mr-2">Flex Card B</div>
    <div class="p-3 bg-info text-white border rounded">Flex Card C</div>
  </div>
  
  <h3 class="mt-4">Space Between Flex Items</h3>
  <div class="d-flex justify-content-between bg-dark p-3 rounded">
    <span class="text-white">Left Node</span>
    <span class="text-warning">Right Node</span>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs4-grid-system',
    title: 'BS4 Grid System',
    description: 'Explore nests, ordering, custom alignments, and responsive column structures.',
    explanation: [
      'Advanced grids: Nest rows within columns, or change visual order using classes like .order-1 and .order-2.',
      'Horizontal grid alignments can be configured on the row wrapper (e.g., .justify-content-center).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body class="container py-4">
  <h3>Visual Grid Ordering</h3>
  <div class="row">
    <!-- col-sm-6 but ordered second -->
    <div class="col-sm-6 bg-info p-3 border order-2">
      First element in DOM (order-2)
    </div>
    <!-- col-sm-6 but ordered first -->
    <div class="col-sm-6 bg-primary text-white p-3 border order-1">
      Second element in DOM (order-1)
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  }
];
