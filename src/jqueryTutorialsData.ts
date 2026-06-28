import { TutorialTopic } from './cssTutorialsData';

export const JQUERY_TOPICS: TutorialTopic[] = [
  {
    id: 'jquery-intro',
    title: 'jQuery Introduction',
    description: 'Welcome to the jQuery Tutorial! jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversing, event handling, animating, and Ajax.',
    explanation: [
      'The jQuery motto is: "Write less, do more."',
      'It takes a lot of common JavaScript tasks that require many lines of complex code, and wraps them into methods that you can call with a single line of code.',
      'jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div class="text-center p-8 bg-slate-900 border border-slate-800 rounded-xl">
    <h1 id="title" class="text-3xl font-black text-amber-400">Hello jQuery!</h1>
    <p class="text-slate-400 text-sm mt-2">Write less, do more.</p>
    <button id="btn" class="mt-4 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all">
      Click Me
    </button>
  </div>

  <script>
    $(document).ready(function(){
      $("#btn").click(function(){
        $("#title").text("jQuery is Alive!").addClass("text-emerald-400").removeClass("text-amber-400");
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-selectors',
    title: 'jQuery Selectors',
    description: 'Master selecting HTML elements using tags, classes, and unique IDs.',
    explanation: [
      'jQuery selectors allow you to select and manipulate HTML elements.',
      'All selectors in jQuery start with the dollar sign and parentheses: $().',
      'Selectors include:',
      '  - Element selectors: $("p") selects all <p> elements.',
      '  - Id selectors: $("#test") selects the unique element with id="test".',
      '  - Class selectors: $(".test") selects all elements with class="test".'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center gap-4">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl max-w-sm text-center">
    <h3 class="font-bold text-lg mb-2">Selector Sandbox</h3>
    <p class="desc text-slate-400 text-xs">Standard paragraph description block.</p>
    <p class="desc text-slate-400 text-xs mt-1">Another paragraph share class names.</p>
    
    <div class="flex gap-2 mt-4 justify-center">
      <button id="btnId" class="bg-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold">Highlight Paragraphs</button>
      <button id="btnReset" class="bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold">Reset</button>
    </div>
  </div>

  <script>
    $(document).ready(function(){
      // Element class selector query
      $("#btnId").click(function(){
        $(".desc").css("color", "#38bdf8").css("font-weight", "bold");
      });
      
      $("#btnReset").click(function(){
        $(".desc").css("color", "").css("font-weight", "");
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-events',
    title: 'jQuery Events',
    description: 'Learn click, mouseenter, mouseleave, and keyup event listeners in jQuery.',
    explanation: [
      'An event represents the precise moment when something happens in the browser.',
      'Common jQuery events:',
      '  - click(): Triggers when a mouse clicks an element.',
      '  - dblclick(): Triggers when double clicking an element.',
      '  - mouseenter() & mouseleave(): Hover indicators.',
      '  - keypress() & keyup(): Capture keystrokes inside input boxes.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
    <div id="hoverBox" class="w-48 h-24 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-xs font-bold transition-all cursor-pointer">
      HOVER OVER ME
    </div>
    <p id="status" class="text-xs text-slate-500 mt-3 font-mono">STATUS: AWAITING EVENT</p>
  </div>

  <script>
    $(document).ready(function(){
      $("#hoverBox").mouseenter(function(){
        $(this).css("background-color", "#8b5cf6").text("MOUSE ENTERED!");
        $("#status").text("STATUS: MOUSE ENTER DETECTED").css("color", "#a78bfa");
      });

      $("#hoverBox").mouseleave(function(){
        $(this).css("background-color", "").text("HOVER OVER ME");
        $("#status").text("STATUS: MOUSE LEFT").css("color", "");
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-hide-show',
    title: 'jQuery Hide/Show Effects',
    description: 'Learn simple hide(), show(), and toggle() animation methods in jQuery.',
    explanation: [
      'You can hide and show HTML elements using the hide() and show() methods.',
      'Syntax: $(selector).hide(speed, callback);.',
      'Speed can take values: "slow", "fast", or milliseconds (e.g., 1000).',
      'The toggle() method toggles between hiding and showing elements automatically.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center gap-4">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center max-w-xs">
    <div id="contentBlock" class="p-4 bg-emerald-950/40 border border-emerald-800 rounded-lg text-xs leading-relaxed mb-4">
      This collapsible data paragraph can be dynamically toggled using standard jQuery animation layers.
    </div>
    <button id="toggleBtn" class="bg-emerald-600 px-4 py-2 rounded-lg text-xs font-bold text-white hover:bg-emerald-500 transition-colors">
      Toggle contentBlock
    </button>
  </div>

  <script>
    $(document).ready(function(){
      $("#toggleBtn").click(function(){
        // Toggle item visibility with 400ms duration
        $("#contentBlock").toggle(400);
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-fades',
    title: 'jQuery Fade Effects',
    description: 'Incorporate fadeIn, fadeOut, fadeToggle, and fadeTo variables.',
    explanation: [
      'jQuery has four fade methods:',
      '  - fadeIn(): Fades in a hidden element.',
      '  - fadeOut(): Fades out an active visible element.',
      '  - fadeToggle(): Toggles between fadeIn and fadeOut.',
      '  - fadeTo(): Allows fading elements to a specific opacity level (e.g., 0.5).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center gap-4">
  <div class="flex gap-2">
    <div id="box1" class="w-16 h-16 bg-red-500 rounded-lg"></div>
    <div id="box2" class="w-16 h-16 bg-green-500 rounded-lg" style="display:none;"></div>
    <div id="box3" class="w-16 h-16 bg-blue-500 rounded-lg"></div>
  </div>
  
  <div class="flex gap-2 mt-4">
    <button id="fadeBtn" class="bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold">Toggle / Fade Box 2</button>
    <button id="dimBtn" class="bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold">Dim Box 3 Opacity</button>
  </div>

  <script>
    $(document).ready(function(){
      $("#fadeBtn").click(function(){
        $("#box2").fadeToggle("slow");
      });

      $("#dimBtn").click(function(){
        // fadeTo parameters: (speed, opacity)
        $("#box3").fadeTo("slow", 0.3);
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-slides',
    title: 'jQuery Slide Effects',
    description: 'Learn slideDown, slideUp, and slideToggle menu drawers in jQuery.',
    explanation: [
      'jQuery slide methods slide elements up and down.',
      'Methods:',
      '  - slideDown(): Slides down (reveals) an element.',
      '  - slideUp(): Slides up (hides) an element.',
      '  - slideToggle(): Toggles between slideDown and slideUp transitions.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    #panel { display: none; }
  </style>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div class="w-full max-w-sm border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
    <!-- Click trigger block -->
    <div id="flip" class="p-4 bg-slate-800 text-center text-sm font-bold cursor-pointer hover:bg-slate-700/80 transition-colors">
      Click to Open Slide Panel
    </div>
    <!-- Sliding panel block -->
    <div id="panel" class="p-4 bg-slate-950 text-xs leading-relaxed border-t border-slate-800">
      This description block slides down smoothly on trigger clicks. Slide toggles are extremely popular for mobile navigation bars, FAQs, and sub-accordions.
    </div>
  </div>

  <script>
    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-animate',
    title: 'jQuery Animate',
    description: 'Create custom animations modifying multiple CSS properties simultaneously.',
    explanation: [
      'The jQuery animate() method is used to create custom animations.',
      'Syntax: $(selector).animate({params}, speed, callback);.',
      'The params parameter defines the CSS properties to be animated (e.g., width, height, opacity, marginLeft).',
      'You can use relative values (e.g., left: "+=50px") or predefined values like "toggle".'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center w-full max-w-xs relative overflow-hidden" style="height: 240px;">
    <button id="animBtn" class="bg-violet-600 px-3 py-1.5 rounded-lg text-xs font-bold text-white mb-4">
      Launch Animation
    </button>
    
    <div id="box" class="w-12 h-12 bg-violet-400 rounded-lg absolute left-4 bottom-4"></div>
  </div>

  <script>
    $(document).ready(function(){
      $("#animBtn").click(function(){
        $("#box").animate({
          left: '+=150px',
          width: '80px',
          height: '80px',
          opacity: '0.5'
        }, 1000).animate({
          left: '-=150px',
          width: '48px',
          height: '48px',
          opacity: '1'
        }, 1000);
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-chaining',
    title: 'jQuery Chaining Methods',
    description: 'Chain multiple jQuery methods together inside single statements.',
    explanation: [
      'Chaining allows us to run multiple jQuery methods on the same element within a single statement.',
      'Example: $("#p1").css("color", "red").slideUp(1000).slideDown(1000);.',
      'This avoids querying the DOM multiple times, resulting in much faster and cleaner execution.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center gap-4">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center max-w-xs">
    <p id="demoText" class="text-xs mb-4">Observe this block change color, slide up, then slide down on click!</p>
    <button id="chainBtn" class="bg-sky-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-sky-500 transition-colors">
      Trigger Chain
    </button>
  </div>

  <script>
    $(document).ready(function(){
      $("#chainBtn").click(function(){
        // Chain CSS changes with slides
        $("#demoText")
          .css("color", "#38bdf8")
          .css("font-weight", "bold")
          .slideUp(1000)
          .slideDown(1000);
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-dom',
    title: 'jQuery Get & Set HTML',
    description: 'Retrieve or overwrite element values, text contents, and attributes.',
    explanation: [
      'jQuery has highly optimized methods for DOM manipulation:',
      '  - text(): Gets or sets the text content of selected elements.',
      '  - html(): Gets or sets the HTML content of selected elements (including HTML tags).',
      '  - val(): Gets or sets the value of form input fields.',
      '  - attr(): Gets or sets HTML attributes (like href, src, etc.).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center gap-4">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl max-w-xs w-full">
    <input type="text" id="inputVal" value="Jane Developer" class="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none mb-3 w-full">
    
    <div id="displayHtml" class="text-xs text-slate-400 mb-4 p-2 bg-slate-950 border border-slate-800 rounded">
      Original Content (Text box value will copy here)
    </div>

    <button id="setBtn" class="bg-amber-600 px-3 py-1.5 rounded-lg text-xs font-bold text-white w-full">
      Copy Input to HTML
    </button>
  </div>

  <script>
    $(document).ready(function(){
      $("#setBtn").click(function(){
        const value = $("#inputVal").val();
        // Overwrite HTML markup dynamically
        $("#displayHtml").html("Copied Name: <b>" + value + "</b>");
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'jquery-css-classes',
    title: 'jQuery CSS Classes',
    description: 'Explore addClass, removeClass, and toggleClass actions to style elements.',
    explanation: [
      'You can easily manipulate element styles by managing CSS classes:',
      '  - addClass(): Adds one or more classes to selected elements.',
      '  - removeClass(): Removes one or more classes from selected elements.',
      '  - toggleClass(): Toggles between adding/removing classes from selected elements.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .highlight-active { background-color: #f59e0b; color: #020617; font-weight: 900; box-shadow: 0 4px 12px rgba(245,158,11,0.25); border-color: #f59e0b; }
  </style>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center gap-4">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center max-w-xs">
    <div id="targetCard" class="p-4 bg-slate-950 border border-slate-800 rounded-lg text-xs mb-4">
      Class Selection Card
    </div>
    <button id="classBtn" class="bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs">
      Toggle Highlight Class
    </button>
  </div>

  <script>
    $(document).ready(function(){
      $("#classBtn").click(function(){
        $("#targetCard").toggleClass("highlight-active");
      });
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  }
];
