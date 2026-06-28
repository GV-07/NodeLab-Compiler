import { TutorialTopic } from './cssTutorialsData';

export const BOOTSTRAP5_TOPICS: TutorialTopic[] = [
  {
    id: 'bs5-home',
    title: 'BS5 HOME',
    description: 'Welcome to Bootstrap 5! Bootstrap 5 is the newest major version of the responsive front-end open-source toolkit.',
    explanation: [
      'Bootstrap 5 completely drops jQuery dependency in favor of native vanilla JavaScript modules.',
      'It drops support for Internet Explorer, resulting in lightweight files and faster rendering.',
      'Includes custom variables, enhanced grids, CSS Grid compatibility, and a massive utility API.'
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <div class="p-5 mb-4 bg-light rounded-4 border text-center shadow">
    <h1 class="display-3 fw-bold text-primary">Hello Bootstrap 5!</h1>
    <p class="lead text-muted">A modern, lightweight, vanilla-JS powered CSS utility framework.</p>
    <button class="btn btn-primary btn-lg px-5 rounded-pill">Launch Sandbox</button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-get-started',
    title: 'BS5 Get Started',
    description: 'Integrate Bootstrap 5 into clean layouts using the modern CDN stylesheet and bundle links.',
    explanation: [
      'Link the CSS file in the document head and the bundled JavaScript file before the closing body tag.',
      'Bootstrap 5 bundles Popper.js inside the main bundle, making interactive tooltips and dropdowns run out of the box.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-white p-5 text-center">
  <h2 class="fw-black">Bootstrap 5 CDN Confirmed!</h2>
  <p class="text-white-50">You can write vanilla HTML layouts powered by Bootstrap 5 with zero build pipelines.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-containers',
    title: 'BS5 Containers',
    description: 'Style layout blocks using container classes, breakpoints, and fluid margins.',
    explanation: [
      'Containers align website contents with adaptive spacing borders.',
      'Bootstrap 5 adds responsive container modifiers: .container-sm, .container-md, .container-lg, .container-xl, .container-xxl.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container bg-primary text-white text-center p-4 my-3 rounded">
    <h4>Fixed Container (.container)</h4>
    <p>Centers layouts with responsive fixed widths across breakpoints.</p>
  </div>
  
  <div class="container-fluid bg-indigo text-white text-center p-4 my-3 rounded">
    <h4>Fluid Container (.container-fluid)</h4>
    <p>Spans 100% of the active browser viewport width.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-grid-basic',
    title: 'BS5 Grid Basic',
    description: 'Learn column spans, row grids, auto widths, and responsive structures.',
    explanation: [
      'The 12-column responsive grid handles multi-column layouts across viewports.',
      'Bootstrap 5 supports six grid tiers: .col- (xs), .col-sm- (sm), .col-md- (md), .col-lg- (lg), .col-xl- (xl), .col-xxl- (xxl).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Three-Column Auto Grid</h3>
  <div class="row text-center text-white fw-bold g-2">
    <div class="col bg-success p-3 border rounded">Block 1</div>
    <div class="col bg-success p-3 border rounded">Block 2</div>
    <div class="col bg-success p-3 border rounded">Block 3</div>
  </div>
  
  <h3 class="mt-4">Responsive Column Grids</h3>
  <div class="row text-center text-white g-2">
    <div class="col-md-4 bg-primary p-3 border rounded">col-md-4 (33.33% space)</div>
    <div class="col-md-8 bg-dark p-3 border rounded">col-md-8 (66.67% space)</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-typography',
    title: 'BS5 Typography',
    description: 'Master display sizes, leads, text formats, alignments, and lists.',
    explanation: [
      'Bootstrap 5 typography contains display utility classes (.display-1 to .display-6) for large display texts.',
      'Use font-weight helpers: .fw-bold, .fw-normal, .fw-light, .fw-semibold.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h1 class="display-1 fw-black text-indigo">Display 1 Headline</h1>
  <p class="lead text-muted">Leverage lighter, thinner heading classes in Bootstrap 5 layouts.</p>
  <p>Standard text with a <span class="text-decoration-underline fw-bold">custom underlined span</span> and <span class="text-lowercase text-danger font-monospace">monospaced text</span>.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-colors',
    title: 'BS5 Colors',
    description: 'Style backgrounds, texts, links, and borders using contextual color classes.',
    explanation: [
      'Text modifiers: .text-primary, .text-secondary, .text-success, .text-danger, .text-warning, .text-info, .text-light, .text-dark, .text-body.',
      'Background modifiers: .bg-primary, .bg-secondary, .bg-success, .bg-danger, .bg-warning, .bg-info, .bg-light, .bg-dark, .bg-white, .bg-transparent.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h2>Context Colors</h2>
  <div class="p-3 mb-2 bg-primary text-white rounded">.bg-primary</div>
  <div class="p-3 mb-2 bg-success text-white rounded">.bg-success</div>
  <div class="p-3 mb-2 bg-warning text-dark rounded">.bg-warning</div>
  <div class="p-3 mb-2 bg-danger text-white rounded">.bg-danger</div>
  <div class="p-3 mb-2 bg-dark text-white rounded">.bg-dark</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-tables',
    title: 'BS5 Tables',
    description: 'Style database result grids, stripings, table borders, and responsive behaviors.',
    explanation: [
      'Add class .table to format standard tables.',
      'Enhance table striping with .table-striped, or make columns hovered with .table-hover.',
      'Wrap table markup with .table-responsive to handle overflow scrolling on small screens.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h2>Bootstrap 5 Responsive Grid Table</h2>
  <div class="table-responsive">
    <table class="table table-striped table-hover align-middle">
      <thead class="table-dark">
        <tr>
          <th>Metric Name</th>
          <th>Workspace Status</th>
          <th>Average Ping Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cluster A</td>
          <td><span class="badge bg-success">Online</span></td>
          <td>12ms</td>
        </tr>
        <tr>
          <td>Cluster B</td>
          <td><span class="badge bg-danger">Offline</span></td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-images',
    title: 'BS5 Images',
    description: 'Format fluid images, thumbnails, and aligned picture elements.',
    explanation: [
      'Apply .img-fluid to scale pictures responsively to their outer parent width.',
      'Utilities .rounded, .rounded-circle, and .img-thumbnail specify corner borders.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container text-center py-4">
  <h3>Bootstrap 5 Fluid Thumbnails</h3>
  <div class="row align-items-center">
    <div class="col-sm-6 mb-3">
      <p>img-fluid rounded-circle</p>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&h=150&fit=crop" class="img-fluid rounded-circle d-block mx-auto" alt="Round">
    </div>
    <div class="col-sm-6">
      <p>img-thumbnail rounded-3</p>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&h=150&fit=crop" class="img-thumbnail rounded-3 d-block mx-auto" alt="Thumbnail">
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-jumbotron',
    title: 'BS5 Jumbotron',
    description: 'Create featured spotlights using native utilities, since Jumbotrons were removed.',
    explanation: [
      'Bootstrap 5 removed the .jumbotron class.',
      'To build jumbotron-style spotlights, combine custom background, padding, and spacing utilities (.bg-light, .p-5, .rounded-3, etc.).',
      'This educational point helps developers convert legacy layouts to modern utility systems.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <!-- Modern replacement for Jumbotrons using standard utilities -->
  <div class="p-5 bg-dark text-white rounded-5 shadow">
    <h1 class="display-4 fw-black">Modern Jumbotron Replacement</h1>
    <p class="col-md-8 fs-5 text-white-50">Bootstrap 5 dropped the <code>.jumbotron</code> class! Combine background, rounded, shadow, and margin utility variables instead.</p>
    <hr class="my-4 border-secondary">
    <button class="btn btn-warning btn-lg fw-bold rounded-pill px-4" type="button">Access Database</button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-alerts',
    title: 'BS5 Alerts',
    description: 'Style success, warning, or error banners with links and close actions.',
    explanation: [
      'Alerts provide helpful warning labels.',
      'Add class .alert-dismissible and a close button markup to handle dynamic removals (uses built-in BS5 JS).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4">
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Security Alert!</strong> Unauthorized write query identified. Check the <a href="#" class="alert-link">system access logs</a>.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-buttons',
    title: 'BS5 Buttons',
    description: 'Format custom solid, outline, rounded-pill, or blocks of buttons.',
    explanation: [
      'Context buttons: .btn-primary, .btn-outline-secondary, .btn-success, etc.',
      'Round pills: Add class .rounded-pill for a sleek oval shape.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Bootstrap 5 Button Alignments</h3>
  <button class="btn btn-primary rounded-pill px-4">Rounded Primary</button>
  <button class="btn btn-outline-dark px-4">Outline Dark</button>
  <button class="btn btn-danger btn-lg">Large Danger Action</button>
  <div class="d-grid gap-2 col-6 mx-auto mt-4">
    <!-- Block buttons in BS5 use a d-grid parent wrapper, replacing BS4 btn-block -->
    <button class="btn btn-indigo text-white" type="button">Modern Block Button</button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-button-groups',
    title: 'BS5 Button Groups',
    description: 'Structure button rows, vertical stacks, or outline tabs.',
    explanation: [
      'Combine buttons using container class .btn-group.',
      'BS5 supports outline button checkbox indicators styled inside button groups.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Checkbox Button Group</h3>
  <div class="btn-group" role="group">
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btncheck1">Metric Active</label>

    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
    <label class="btn btn-outline-primary" for="btncheck2">Logging Active</label>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-badges',
    title: 'BS5 Badges',
    description: 'Style badges, inline pill highlights, and absolute status indicators.',
    explanation: [
      'Badges are highlight tags. Use base class .badge and a context modifier class (e.g., .bg-primary).',
      'Absolute Indicators: Position badges at card or button corners to display unread metrics.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Status Badges</h3>
  <span class="badge bg-secondary">Default Badge</span>
  <span class="badge bg-success rounded-pill">Success Pill</span>
  <br><br>
  <!-- Positioned status indicators in BS5 -->
  <button type="button" class="btn btn-dark position-relative">
    Inbox Logs
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      99+
    </span>
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-progress-bars',
    title: 'BS5 Progress Bars',
    description: 'Monitor loaded states using progress bars with stripings, animations, and Heights.',
    explanation: [
      'Container class: .progress with child .progress-bar.',
      'Control height directly on the parent .progress class.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Sleek Progress Sizing</h3>
  <div class="progress mb-3" style="height: 6px;">
    <div class="progress-bar bg-primary" role="progressbar" style="width: 45%"></div>
  </div>
  
  <div class="progress" style="height: 20px;">
    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style="width: 80%">
      80% Completed Task
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-pagination',
    title: 'BS5 Pagination',
    description: 'Structure numbered indexes, page active Highlights, and sizing.',
    explanation: [
      'Wrap .pagination inside a <nav> block.',
      'Sizing: .pagination-lg, .pagination-sm.',
      'Alignments: Centering pagination menus uses utility classes like .justify-content-center on the list wrapper.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <nav aria-label="Page navigation">
    <ul class="pagination pagination-sm justify-content-center">
      <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
      <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-list-groups',
    title: 'BS5 List Groups',
    description: 'Design lists with context highlights, active item tabs, and numbers.',
    explanation: [
      'Create lists with .list-group and children .list-group-item.',
      'To make list items hoverable/clickable, use class .list-group-item-action on button or link tags.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h2>Interactive Lists</h2>
  <div class="list-group shadow-sm" style="max-width: 400px;">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      Active Dashboard Item
    </a>
    <a href="#" class="list-group-item list-group-item-action">Profile Database Parameters</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Cluster Warning Alert</a>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-cards',
    title: 'BS5 Cards',
    description: 'Structure flexible cards with headers, footers, images, and button links.',
    explanation: [
      'Cards are Bootstrap 5\'s standard content box.',
      'Combine utilities like .shadow-sm and .border-0 to build modern, flat card components.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <div class="card border-0 shadow-lg rounded-4 overflow-hidden" style="max-width: 350px;">
    <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=350&h=180&fit=crop" class="card-img-top" alt="Header img">
    <div class="card-body p-4">
      <h5 class="card-title fw-bold">Bootstrap 5 Cards</h5>
      <p class="card-text text-muted fs-6">Sleek, rounded layouts styled with minimal border profiles.</p>
      <a href="#" class="btn btn-primary rounded-pill w-100">Launch Module</a>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-dropdowns',
    title: 'BS5 Dropdowns',
    description: 'Build dropdown options using clean data-bs attributes.',
    explanation: [
      'In Bootstrap 5, all Javascript target data-attributes are prefixed with data-bs- (e.g., data-bs-toggle="dropdown").',
      'This avoids namespace collisions with third-party libraries.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4 text-center">
  <h2>Bootstrap 5 Dropdown</h2>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown">
      User Account Options
    </button>
    <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton5">
      <li><a class="dropdown-item" href="#">View Credentials</a></li>
      <li><a class="dropdown-item" href="#">Database Settings</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
    </ul>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-collapse',
    title: 'BS5 Collapse',
    description: 'Toggle visibility of layout sections using data-bs attributes.',
    explanation: [
      'Use attribute data-bs-toggle="collapse" and specify target blocks using data-bs-target="#collapseId".'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4">
  <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTarget">
      Toggle Details
    </button>
  </p>
  <div class="collapse show" id="collapseTarget">
    <div class="card card-body bg-light">
      Bootstrap 5 collapse utilities animate container heights dynamically to toggle visibility.
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-navs',
    title: 'BS5 Navs',
    description: 'Configure clean tabbed submenus, alignments, and navigation layouts.',
    explanation: [
      'Container class: .nav with children .nav-item and child links carrying class .nav-link.',
      'Sleek underline: Bootstrap 5 styles nav tabs cleanly with hover indicators.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Underlined Nav Tabs</h3>
  <ul class="nav nav-tabs justify-content-center mb-4">
    <li class="nav-item"><a class="nav-link active" href="#">Dashboard</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Database Queries</a></li>
    <li class="nav-item"><a class="nav-link disabled" href="#">System logs</a></li>
  </ul>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-navbar',
    title: 'BS5 Navbar',
    description: 'Design responsive navigation headers with expanding drawers and dropdowns.',
    explanation: [
      'Navbar layouts use .navbar, styled with .navbar-dark .bg-dark or .navbar-light .bg-light.',
      'Always use prefixes like data-bs-toggle="collapse" and data-bs-target="#myNavbar" for responsive toggle triggers.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">Workspace</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse5">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navCollapse5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Billing</a></li>
        </ul>
        <span class="navbar-text text-white fw-bold">v5.3 Active</span>
      </div>
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
    id: 'bs5-forms',
    title: 'BS5 Forms',
    description: 'Build responsive forms with inputs, textareas, checks, and layouts.',
    explanation: [
      'In Bootstrap 5, forms are simpler! Wrap inputs in .mb-3 margins directly instead of requiring the .form-group wrapper.',
      'Checkboxes and radio inputs are much simpler to style.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h2>Bootstrap 5 Standard Form</h2>
  <form style="max-width: 400px;" class="bg-light p-4 rounded-4 border shadow-sm">
    <!-- Form groups simply use standard margin classes like mb-3 -->
    <div class="mb-3">
      <label for="email5" class="form-label fw-bold">Email address</label>
      <input type="email" class="form-control" id="email5" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="pass5" class="form-label fw-bold">Password Key</label>
      <input type="password" class="form-control" id="pass5">
    </div>
    <button type="submit" class="btn btn-primary w-100 rounded-pill">Submit Credentials</button>
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-inputs',
    title: 'BS5 Inputs',
    description: 'Style standard textual inputs, select menus, ranges, and file inputs.',
    explanation: [
      'Apply class .form-control to style standard inputs and textareas.',
      'Style select fields using class .form-select (replaces BS4\'s form-control modifier).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Bootstrap 5 Input Formats</h3>
  <div class="mb-3">
    <label for="selectList" class="form-label fw-bold">Select Database Level</label>
    <select class="form-select" id="selectList">
      <option selected>Choose Option...</option>
      <option value="1">PostgreSQL</option>
      <option value="2">MySQL</option>
    </select>
  </div>
  
  <div class="mb-3">
    <label for="formFile" class="form-label fw-bold">Upload Log Files</label>
    <input class="form-control" type="file" id="formFile">
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-input-groups',
    title: 'BS5 Input Groups',
    description: 'Add appended icons, checkboxes, or buttons to input fields.',
    explanation: [
      'Combine input fields with text or button additions using the .input-group container.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Input Group Addons</h3>
  <div class="input-group mb-3">
    <span class="input-group-text bg-light text-muted">@</span>
    <input type="text" class="form-control" placeholder="username">
  </div>
  
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Run code queries...">
    <button class="btn btn-success" type="button">Execute</button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-custom-forms',
    title: 'BS5 Custom Forms',
    description: 'Master custom switches, radios, and file upload fields.',
    explanation: [
      'Bootstrap 5 standardizes custom checks, switches, and radio inputs natively, dropping prefix complexities.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Native Form Switch Slider</h3>
  <div class="form-check form-switch mb-3">
    <input class="form-check-input" type="checkbox" id="flexSwitch" checked>
    <label class="form-check-label fw-bold" for="flexSwitch">Enable cluster websocket routing</label>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-carousel',
    title: 'BS5 Carousel',
    description: 'Build responsive sliding carousels with fade effects and controls.',
    explanation: [
      'Bootstrap 5 carousel modules do not require jQuery.',
      'Add class .carousel-fade to animate transitions using subtle crossfades instead of slide animations.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4">
  <div id="fadeCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" style="max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden;">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=300&fit=crop" class="d-block w-100" alt="Slide 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>Fade Slide 1</h5>
          <p>Bootstrap 5 drops jQuery dependencies.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="bg-indigo text-white d-flex align-items-center justify-content-center" style="height: 300px;">
          <div class="text-center">
            <h5>Fade Slide 2</h5>
            <p>Utilizing clean CSS fades.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#fadeCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#fadeCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-modal',
    title: 'BS5 Modal',
    description: 'Construct dialogue alert boxes with triggers using vanilla JS.',
    explanation: [
      'Triggers use data-bs-toggle="modal" and data-bs-target="#myModal".'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4 text-center">
  <h2>Bootstrap 5 Vanilla Modal</h2>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testModal">
    Open Modal
  </button>

  <div class="modal fade" id="testModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="modalTitle">NodeLab Dashboard</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          <p>This modal trigger is powered entirely by lightweight, native, vanilla JavaScript included inside Bootstrap 5 bundle libraries.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-tooltip',
    title: 'BS5 Tooltip',
    description: 'Style floating informational tooltips initialized via vanilla JavaScript.',
    explanation: [
      'Tooltips are powered by Popper.js.',
      'Initialize tooltips by querying components and running constructor: bootstrap.Tooltip.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-5 text-center">
  <h3>Bootstrap 5 Vanilla Tooltip</h3>
  <br>
  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top!">
    Hover Top Trigger
  </button>

  <script>
    // Initialize all tooltips on the page using vanilla JS
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-popover',
    title: 'BS5 Popover',
    description: 'Design interactive info overlays initialized with vanilla Javascript.',
    explanation: [
      'Like tooltips, popovers require explicit initialization in JS using: new bootstrap.Popover(el).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-5 text-center">
  <h2>Popover Info Box</h2>
  <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Admin Privileges" data-bs-content="Superuser write privileges granted for active terminal sessions.">
    Toggle Info Card
  </button>

  <script>
    // Initialize all popovers on the page
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-toast',
    title: 'BS5 Toast',
    description: 'Incorporate alerts popping onto active dashboard layouts.',
    explanation: [
      'Initialize and display toasts in BS5 using: new bootstrap.Toast(el).show().'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="container py-4 text-center">
  <h2>Bootstrap 5 Native Toasts</h2>
  <button type="button" class="btn btn-dark" id="triggerToast">Show Toast</button>

  <div class="toast align-items-center text-white bg-primary border-0 mx-auto mt-4" id="liveToast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        Connection established successfully!
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>

  <script>
    document.getElementById('triggerToast').addEventListener('click', () => {
      const el = document.getElementById('liveToast');
      const toast = new bootstrap.Toast(el);
      toast.show();
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-scrollspy',
    title: 'BS5 Scrollspy',
    description: 'Align document scrolling with navigation highlights using data-bs attributes.',
    explanation: [
      'In Bootstrap 5, scrollspy is configured on scrollable container blocks using: data-bs-spy="scroll" and data-bs-target="#navbarId".'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <style>
    body { position: relative; }
    .scroll-box { height: 200px; padding: 20px; }
  </style>
</head>
<body data-bs-spy="scroll" data-bs-target="#spyNavbar5" data-bs-offset="50">
  <nav id="spyNavbar5" class="navbar navbar-dark bg-dark fixed-top px-3">
    <ul class="nav nav-pills">
      <li class="nav-item"><a class="nav-link active px-3" href="#boxA">Box A</a></li>
      <li class="nav-item"><a class="nav-link px-3" href="#boxB">Box B</a></li>
    </ul>
  </nav>
  
  <div class="container" style="margin-top: 80px;">
    <div id="boxA" class="scroll-box bg-light text-dark rounded mb-3 border">
      <h4>Box A Details</h4>
      <p>Scroll down or click navigation tab parameters to observe active indicator highlights updating automatically.</p>
    </div>
    <div id="boxB" class="scroll-box bg-secondary text-white rounded border">
      <h4>Box B Details</h4>
      <p>Active items link cleanly using standard layout heights.</p>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-utilities',
    title: 'BS5 Utilities',
    description: 'Configure borders, padding, margins, shadows, and flexbox configurations.',
    explanation: [
      'Spacing uses standard format: {property}{sides}-{size} (e.g., .pb-2 is padding-bottom, .me-auto is margin-end auto, replacing legacy .mr-auto).',
      'BS5 swaps left/right terminology for start/end: (e.g., .ms-4 is margin-start-4 instead of ml-4, .pe-2 is padding-end-2 instead of pr-2).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <div class="shadow-lg p-5 mb-5 bg-white rounded-4 border">
    <!-- me-2 represents margin-end (right), ms-auto is margin-start (left) auto -->
    <h3 class="m-0 text-success fw-black">Padding, Border, & Spacing Utilities</h3>
    <p class="mt-3 text-muted">This block utilizes start/end terminology (<code>ms-auto</code>, <code>me-2</code>) which aligns layout parameters with modern multi-directional design parameters.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-flex',
    title: 'BS5 Flex',
    description: 'Align elements using flex, alignments, and gap row sizes.',
    explanation: [
      'Configure flexbox utilities (.d-flex, .flex-row, .flex-column).',
      'Gap Utility: Bootstrap 5 introduces the incredibly powerful .gap- utility class to easily specify spacing gutters between sibling flex elements.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Flexbox Gap Utility</h3>
  <!-- gap-3 creates equal spacing margins between inner elements automatically -->
  <div class="d-flex gap-3 justify-content-center align-items-center bg-light border rounded p-4">
    <div class="p-3 bg-indigo text-white rounded">Card 1</div>
    <div class="p-3 bg-indigo text-white rounded">Card 2</div>
    <div class="p-3 bg-indigo text-white rounded">Card 3</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'bs5-grid-system',
    title: 'BS5 Grid System',
    description: 'Learn column layouts, nests, column alignments, and vertical gutters.',
    explanation: [
      'Row Gutters: Control row gutters in columns using .g- classes (e.g., .g-4, .gx-5, .gy-2).',
      'Columns can align vertically on the row wrapper (e.g., .align-items-center).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container py-4">
  <h3>Grid Gutter Sizing</h3>
  <!-- gy-4 sets vertical spacing gutters, gx-2 sets horizontal spacing gutters -->
  <div class="row gx-2 gy-4 text-center text-white">
    <div class="col-6">
      <div class="bg-primary p-3 rounded">Grid Col 1</div>
    </div>
    <div class="col-6">
      <div class="bg-primary p-3 rounded">Grid Col 2</div>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  }
];
