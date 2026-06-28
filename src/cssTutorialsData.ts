export interface TutorialTopic {
  id: string;
  title: string;
  description: string;
  explanation: string[];
  code: string;
  languageId: string;
}

export const CSS_TOPICS: TutorialTopic[] = [
  {
    id: 'css-home',
    title: 'CSS HOME / Introduction',
    description: 'Learn how Cascading Style Sheets (CSS) style and format HTML elements.',
    explanation: [
      'CSS stands for Cascading Style Sheets.',
      'It describes how HTML elements are to be displayed on screen, paper, or in other media.',
      'CSS saves a lot of work. It can control the layout of multiple web pages all at once.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f8fafc;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      padding: 50px;
    }
    h1 {
      color: #1e3a8a;
      font-size: 3rem;
    }
    p {
      color: #475569;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <h1>CSS Tutorial</h1>
  <p>Welcome to the interactive CSS sandbox! Change colors, sizes, and fonts in the editor to see instant updates.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-syntax',
    title: 'CSS Syntax & Selectors',
    description: 'Understand selectors, declarations, properties, and values in CSS rules.',
    explanation: [
      'A CSS rule consists of a selector and a declaration block.',
      'The selector points to the HTML element you want to style.',
      'The declaration block contains one or more declarations separated by semicolons.',
      'Each declaration includes a CSS property name and a value, separated by a colon.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Selector is 'h2', property is 'color', value is 'crimson' */
    h2 {
      color: crimson;
      text-align: center;
    }
    /* Class selector uses dot (.) */
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    /* ID selector uses hash (#) */
    #special {
      border: 2px solid green;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h2>CSS Syntax Example</h2>
  <p class="highlight">This paragraph has a highlight class.</p>
  <p id="special">This paragraph has a special ID styling.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-howto',
    title: 'CSS How To',
    description: 'Learn the three main ways to insert or apply CSS styles to an HTML document.',
    explanation: [
      'There are three ways of inserting style sheets:',
      'External CSS: Defined in an external .css file and referenced with a <link> tag.',
      'Internal CSS: Defined in a <style> tag inside the <head> section of an HTML document.',
      'Inline CSS: Defined directly in the element\'s style attribute (highest priority).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Internal CSS -->
  <style>
    body { background-color: #f1f5f9; font-family: sans-serif; }
    h1 { color: #2563eb; }
  </style>
</head>
<body style="padding: 20px;">
  <h1>How to Add CSS</h1>
  <p>We are using internal CSS for the background and header.</p>
  <!-- Inline CSS overrides internal CSS -->
  <p style="color: #ea580c; font-weight: bold;">This paragraph uses inline CSS to turn orange.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-comments',
    title: 'CSS Comments',
    description: 'Learn how to insert documentation and notes inside your CSS stylesheets.',
    explanation: [
      'CSS comments are used to explain the code, and may help when you edit the source code later.',
      'CSS comments are ignored by browsers.',
      'A CSS comment starts with /* and ends with */. It can span multiple lines.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* This is a single-line CSS comment */
    p {
      color: #334155; /* Set text color to charcoal */
      font-size: 16px;
    }
    /* 
       This is a multi-line comment.
       It can span as many lines as needed!
    */
    .box {
      width: 150px;
      height: 150px;
      background-color: #3b82f6;
    }
  </style>
</head>
<body>
  <h2>CSS Comments</h2>
  <p>Look at the CSS source code! The comments are invisible on this rendered page.</p>
  <div class="box"></div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-colors',
    title: 'CSS Colors & Backgrounds',
    description: 'Use color names, HEX, RGB, or HSL, and control background colors, images, and repeating patterns.',
    explanation: [
      'Colors can be specified by names, RGB, HEX, HSL, RGBA, or HSLA values.',
      'The background-color property sets the background color of an element.',
      'The background-image property sets one or more background images.',
      'Use background-repeat, background-size, and background-position to control how images repeat and scale.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .color-box {
      background-color: rgb(239, 68, 68);
      color: #ffffff;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
    }
    .gradient-bg {
      background-image: linear-gradient(to right, #3b82f6, #8b5cf6);
      color: white;
      padding: 15px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h2>Colors & Backgrounds</h2>
  <div class="color-box">This box has a background-color specified via RGB.</div>
  <div class="gradient-bg">This box has a beautiful linear gradient background-image!</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-borders',
    title: 'CSS Borders & Margins',
    description: 'Configure borders around elements and space out blocks with margins.',
    explanation: [
      'The CSS border properties allow you to specify the style, width, and color of an element\'s border.',
      'Border styles include: solid, dotted, dashed, double, groove, ridge, inset, outset, none, hidden.',
      'The CSS margin properties are used to create space around elements, outside of any defined borders.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .bordered-box {
      border: 3px dashed #3b82f6;
      border-radius: 10px;
      padding: 15px;
      margin: 30px; /* Outer margin around the element */
      background-color: #f0f9ff;
    }
  </style>
</head>
<body>
  <h2>Borders & Margins</h2>
  <p>The box below has a 3px dashed blue border and a margin of 30px pushing other items away.</p>
  <div class="bordered-box">I have a border and margin!</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-padding',
    title: 'CSS Padding & Dimensions',
    description: 'Create inner space around elements using padding and manage height/width properties.',
    explanation: [
      'Padding is used to create space around an element\'s content, inside of any defined borders.',
      'Width and height properties are used to set the width and height of an element.',
      'Values can be in pixels (px), percentages (%), viewport width/height (vw/vh), etc.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 80%;
      height: 120px;
      background-color: #10b981;
      color: white;
      padding: 30px; /* Generous padding inside */
      border: 4px solid #047857;
      box-sizing: border-box; /* Includes padding and border in width/height */
    }
  </style>
</head>
<body>
  <h2>Padding & Dimensions</h2>
  <div class="box">
    This box has 30px padding on all sides. Notice how the text is nicely pushed inward from the border.
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-boxmodel',
    title: 'CSS Box Model',
    description: 'Learn the design structure composed of margins, borders, padding, and actual content.',
    explanation: [
      'All HTML elements can be considered as boxes.',
      'The CSS box model is essentially a box that wraps around every HTML element.',
      'It consists of: Content, Padding, Border, and Margin.',
      'Content: The text and images of the box.',
      'Padding: Clears an area around the content. The padding is transparent.',
      'Border: A border that goes around the padding and content.',
      'Margin: Clears an area outside the border. The margin is transparent.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box-model-demo {
      background-color: lightgrey;
      width: 300px;
      border: 15px solid green;
      padding: 50px;
      margin: 20px;
    }
  </style>
</head>
<body>
  <h2>The CSS Box Model</h2>
  <p>The total width of an element should be calculated as: width + left padding + right padding + left border + right border + left margin + right margin.</p>
  <div class="box-model-demo">This text is the content of the box. We have added 50px padding, 15px green border, and 20px margin.</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-outline',
    title: 'CSS Outline & Text Styles',
    description: 'Draw outline borders outside of margins and format text alignment, transformations, and spacing.',
    explanation: [
      'An outline is a line drawn around elements, outside the borders, to make the element "stand out".',
      'Unlike borders, outlines are drawn outside the element\'s border, and may overlap other content. It does not take up layout space.',
      'Text styling includes text-align, text-decoration, text-transform, letter-spacing, and line-height.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .outline-demo {
      border: 2px solid black;
      outline: 5px solid red;
      margin: 15px;
      padding: 10px;
    }
    .text-styled {
      text-align: justify;
      text-transform: uppercase;
      letter-spacing: 2px;
      line-height: 1.8;
      color: #4f46e5;
    }
  </style>
</head>
<body>
  <h2>Outline & Text Styles</h2>
  <div class="outline-demo">This box has a black border and a red outline outside the border.</div>
  <p class="text-styled">This text is fully uppercase, spaced out, and styled with line height 1.8.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-fonts',
    title: 'CSS Fonts & Icons',
    description: 'Control font families, sizes, weights, and integrate scalable icons from libraries.',
    explanation: [
      'The font-family property sets the font of a text element.',
      'Use font-size, font-weight (boldness), and font-style (italic).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    .serif-text { font-family: "Times New Roman", Times, serif; font-size: 20px; }
    .sans-text { font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; }
    .icon-list { font-size: 24px; color: #3b82f6; }
  </style>
</head>
<body>
  <h2>Fonts & Icons</h2>
  <p class="serif-text">This is a Serif typeface.</p>
  <p class="sans-text">This is a Sans-Serif typeface.</p>
  <p>Here are some font-awesome vector icons:</p>
  <div class="icon-list">
    <i class="fa fa-home"></i> &nbsp;
    <i class="fa fa-envelope"></i> &nbsp;
    <i class="fa fa-user"></i>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-links',
    title: 'CSS Links & Lists',
    description: 'Style hyper-links in various states (hover, visited) and format list styles and markers.',
    explanation: [
      'Links can be styled with any CSS property (e.g. color, font-family, background).',
      'Style links based on what state they are in: a:link, a:visited, a:hover, a:active.',
      'Lists can be styled to change the bullet/marker design (list-style-type) or use images as markers (list-style-image).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Link States */
    a:link { color: #2563eb; text-decoration: none; }
    a:visited { color: #7c3aed; }
    a:hover { color: #dc2626; text-decoration: underline; font-weight: bold; }
    
    /* List styles */
    ul.custom-list {
      list-style-type: square;
    }
  </style>
</head>
<body>
  <h2>Links & Lists</h2>
  <p>Hover over this styled link: <a href="https://google.com" target="_blank">Google Search</a></p>
  <h3>Custom Square List:</h3>
  <ul class="custom-list">
    <li>HTML Tutorial</li>
    <li>CSS Tutorial</li>
    <li>JavaScript Tutorial</li>
  </ul>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-tables',
    title: 'CSS Tables',
    description: 'Create beautiful, readable tables with customized borders, padding, striping, and hover effects.',
    explanation: [
      'Set table border, border-collapse, and border spacing.',
      'Set the width and height of tables and table headers/cells.',
      'Add padding inside th and td for neat spacing.',
      'Create zebra-striped tables using the nth-child(even) or nth-child(odd) selector.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    #customers td, #customers th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    #customers tr:nth-child(even){background-color: #f2f2f2;}
    #customers tr:hover {background-color: #ddd;}
    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #047857;
      color: white;
    }
  </style>
</head>
<body>
  <h2>Styled CSS Table</h2>
  <table id="customers">
    <tr>
      <th>Technology</th>
      <th>Primary Use</th>
    </tr>
    <tr>
      <td>HTML</td>
      <td>Structure of Webpages</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Styling & Design</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Interactivity & Logic</td>
    </tr>
  </table>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-layout',
    title: 'CSS Layout',
    description: 'Learn the principles of structuring webpages using standard block alignments and styling elements.',
    explanation: [
      'Web layouts require structuring headers, columns, navigation, sidebars, and footers.',
      'Traditional layout structures used tables or floats; modern CSS uses Flexbox and Grid.',
      'Proper container wrapping ensures elements align perfectly across screens.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .header { background-color: #1e293b; color: white; padding: 15px; text-align: center; }
    .main-content { padding: 20px; background-color: #f8fafc; }
    .footer { background-color: #f1f5f9; padding: 10px; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="header"><h1>My Web Layout Header</h1></div>
  <div class="main-content">
    <h2>Main Content</h2>
    <p>This is a standard multi-block web layout container structure.</p>
  </div>
  <div class="footer"><p>Footer Information © 2026</p></div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-display',
    title: 'CSS Display property',
    description: 'Control how an element is rendered on screen: block, inline, inline-block, or none.',
    explanation: [
      'The display property is the most important CSS property for controlling layout.',
      'display: block takes up the full width and starts on a new line (e.g., <div>, <h1>, <p>).',
      'display: inline takes only required width and does not start on a new line (e.g., <span>, <a>).',
      'display: none hides the element completely, freeing up its layout space.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    span.block-span {
      display: block;
      background-color: #cbd5e1;
      padding: 10px;
      margin-bottom: 5px;
    }
    div.inline-div {
      display: inline;
      background-color: #fef08a;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h2>The Display Property</h2>
  <p>The spans below are styled with <b>display: block;</b>:</p>
  <span class="block-span">First block span</span>
  <span class="block-span">Second block span</span>
  <br />
  <p>The div below is styled with <b>display: inline;</b>:</p>
  <div class="inline-div">Inline Div 1</div>
  <div class="inline-div">Inline Div 2</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-maxwidth',
    title: 'CSS Max-width',
    description: 'Limit the maximum width of elements to make them responsive and easy to read.',
    explanation: [
      'Using width: 500px creates a fixed-size element that will overflow on small mobile screens.',
      'Using max-width: 500px allows the element to shrink below 500px if the viewport is smaller, preventing horizontal scrollbars.',
      'Combining max-width: 100% on images makes them fluid.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .fixed-box {
      width: 500px;
      background-color: #fca5a5;
      padding: 15px;
      margin-bottom: 10px;
    }
    .responsive-box {
      max-width: 500px;
      width: 100%;
      background-color: #86efac;
      padding: 15px;
    }
  </style>
</head>
<body>
  <h2>Width vs Max-width</h2>
  <p>Try shrinking the preview frame. The red box has fixed width, while the green box is fluid!</p>
  <div class="fixed-box">I am fixed to 500px!</div>
  <div class="responsive-box">I have max-width of 500px!</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-position',
    title: 'CSS Position',
    description: 'Position elements using static, relative, absolute, fixed, or sticky behavior.',
    explanation: [
      'The position property specifies the type of positioning method used for an element.',
      'static: Default positioning. Elements follow normal page flow.',
      'relative: Positioned relative to its normal position.',
      'fixed: Positioned relative to the viewport. It stays in the same place even when the page is scrolled.',
      'absolute: Positioned relative to the nearest positioned ancestor.',
      'sticky: Positioned based on the user\'s scroll position (toggle between relative and fixed).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .relative-parent {
      position: relative;
      width: 100%;
      height: 200px;
      border: 3px solid #64748b;
      background-color: #f8fafc;
    }
    .absolute-child {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 120px;
      height: 60px;
      background-color: #ef4444;
      color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h2>CSS Positioning</h2>
  <div class="relative-parent">
    I am a relative parent.
    <div class="absolute-child">I am absolutely positioned at top 20px, right 20px!</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-zindex',
    title: 'CSS Z-index',
    description: 'Control the stack order of overlapping elements along the 3D depth axis.',
    explanation: [
      'The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).',
      'An element can have a positive or negative stack order.',
      'z-index only works on positioned elements (position: absolute, relative, fixed, or sticky) and flex/grid items.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      position: absolute;
    }
    .blue-box {
      background-color: blue;
      left: 10px;
      top: 10px;
      z-index: 1; /* Behind red box */
    }
    .red-box {
      background-color: red;
      left: 50px;
      top: 50px;
      z-index: 2; /* In front of blue box */
    }
  </style>
</head>
<body>
  <h2>CSS Z-index Example</h2>
  <div style="position: relative; height: 180px;">
    <div class="box blue-box">z-index: 1</div>
    <div class="box red-box">z-index: 2</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-overflow',
    title: 'CSS Overflow',
    description: 'Control what happens to content that is too big to fit inside an element\'s area.',
    explanation: [
      'The overflow property specifies whether to clip content or to add scrollbars when an element\'s content is too big to fit.',
      'visible: Default. Overflow is not clipped and renders outside the element\'s box.',
      'hidden: Overflow is clipped and the rest of the content is invisible.',
      'scroll: Overflow is clipped, but scrollbars are added to see the rest.',
      'auto: Similar to scroll, but adds scrollbars only when necessary.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .overflow-demo {
      width: 200px;
      height: 100px;
      background-color: #fef08a;
      border: 1px solid black;
      overflow: scroll; /* Forces scrollbars */
    }
  </style>
</head>
<body>
  <h2>CSS Overflow</h2>
  <p>The div below has fixed dimensions and overflow: scroll.</p>
  <div class="overflow-demo">
    This is some long text to demonstrate how scrollbars are automatically added when content exceeds the boundaries of its parent container box. You can scroll inside here to read everything!
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-float',
    title: 'CSS Float and Clear',
    description: 'Push elements to the left or right of their container and clear adjacent floats.',
    explanation: [
      'The float property is used for positioning and formatting content, e.g., let an image float left to a text block.',
      'Values: left, right, none, inherit.',
      'The clear property specifies what elements can float beside the cleared element and on which side.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .float-img {
      float: left;
      margin-right: 15px;
      border: 2px solid #ddd;
    }
    .clear-box {
      clear: both;
      background-color: #cbd5e1;
      padding: 10px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h2>Float and Clear</h2>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" class="float-img" width="80" alt="React Logo" />
  <p>
    This paragraph wraps around the image because the image is floated to the left. CSS floats are perfect for text wrapping!
  </p>
  <div class="clear-box">
    This block clears all floats, ensuring it starts below the floated image instead of wrapping beside it.
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-inlineblock',
    title: 'CSS Inline-block',
    description: 'Create inline elements that can be styled with custom widths, heights, and padding.',
    explanation: [
      'Compared to display: inline, display: inline-block allows setting custom width and height.',
      'Compared to display: block, display: inline-block does not start on a new line.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .nav-item {
      display: inline-block;
      width: 120px;
      height: 40px;
      background-color: #3b82f6;
      color: white;
      text-align: center;
      line-height: 40px;
      margin: 5px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h2>Display: Inline-block</h2>
  <p>These blocks sit horizontally side-by-side but support custom dimensions:</p>
  <div class="nav-item">Item 1</div>
  <div class="nav-item">Item 2</div>
  <div class="nav-item">Item 3</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-align',
    title: 'CSS Align',
    description: 'Learn various techniques to center text, blocks, images, and other HTML nodes horizontally and vertically.',
    explanation: [
      'To horizontally center a block element (like <div>), use margin: auto.',
      'To center text inside an element, use text-align: center.',
      'To center an image, make it a block element and use margin: auto.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .center-block {
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      background-color: #c084fc;
      color: white;
      padding: 20px;
      text-align: center; /* Centered text */
    }
  </style>
</head>
<body>
  <h2>Horizontal Alignment</h2>
  <p>The block below is centered on the page using <code>margin: auto</code> and has its text centered.</p>
  <div class="center-block">I am centered!</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-combinators',
    title: 'CSS Combinators & Pseudo-classes',
    description: 'Select elements based on their relationships or apply styles based on interactive states.',
    explanation: [
      'A combinator is something that explains the relationship between selectors.',
      'Types: descendant (space), child (>), adjacent sibling (+), general sibling (~).',
      'Pseudo-classes target states: :hover, :focus, :first-child, :nth-child(n).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Child Selector: select only p directly inside div */
    div > p {
      background-color: #ffedd5;
      padding: 5px;
    }
    /* Pseudo-class on hover */
    .hover-btn {
      padding: 10px 20px;
      background: #e2e8f0;
      border: 1px solid #94a3b8;
      cursor: pointer;
    }
    .hover-btn:hover {
      background: #4f46e5;
      color: white;
    }
  </style>
</head>
<body>
  <h2>Combinators & Pseudo-classes</h2>
  <div>
    <p>This paragraph is styled because it is a direct child of the div.</p>
    <span>
      <p>This paragraph is NOT styled because it is nested inside a span.</p>
    </span>
  </div>
  <br />
  <button class="hover-btn">Hover over me!</button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-pseudoelements',
    title: 'CSS Pseudo-elements',
    description: 'Style specified parts of an element, like the first letter, line, or insert content before/after.',
    explanation: [
      'A CSS pseudo-element is used to style specified parts of an element.',
      'Syntax: selector::pseudo-element { property: value; }',
      '::first-letter adds style to the first character.',
      '::first-line adds style to the first rendered line.',
      '::before and ::after insert content before or after an element.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    p.intro::first-letter {
      color: #ff0000;
      font-size: xx-large;
      font-weight: bold;
    }
    p.intro::after {
      content: " - [Read More]";
      color: blue;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h2>Pseudo-elements Example</h2>
  <p class="intro">This paragraph has a styled first letter and content appended via ::after.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-opacity',
    title: 'CSS Opacity & Navigation Bars',
    description: 'Adjust transparency levels and style horizontal or vertical navigation panels.',
    explanation: [
      'The opacity property specifies the opacity/transparency of an element. Value ranges from 0.0 to 1.0.',
      'Navigation bars are structured as HTML lists (<ul>/<li>) styled with display properties and flex alignments.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .transparent-box {
      background-color: #059669;
      color: white;
      padding: 15px;
      opacity: 0.6; /* 60% opaque */
    }
    /* Nav bar styling */
    ul.navbar {
      list-style-type: none;
      margin: 20px 0 0 0;
      padding: 0;
      overflow: hidden;
      background-color: #334155;
    }
    ul.navbar li {
      float: left;
    }
    ul.navbar li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    ul.navbar li a:hover {
      background-color: #1e293b;
    }
  </style>
</head>
<body>
  <h2>Opacity & Navigation Bars</h2>
  <div class="transparent-box">I have an opacity of 0.6. You can see through me!</div>
  
  <ul class="navbar">
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-dropdowns',
    title: 'CSS Dropdowns & Image Gallery',
    description: 'Build hoverable dropdown selectors and responsive tile-based image galleries.',
    explanation: [
      'Dropdown menus are built using absolute positioning of a hidden block that changes to display: block on parent hover.',
      'Image galleries arrange multi-box columns containing responsive images and captions.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Dropdown */
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f5f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
      z-index: 100;
      border-radius: 4px;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .dropdown-content a:hover { background-color: #cbd5e1; }
    .dropdown:hover .dropdown-content { display: block; }
  </style>
</head>
<body>
  <h2>CSS Dropdowns</h2>
  <p>Hover over the button to view the dropdown menu options.</p>
  <div class="dropdown">
    <button style="background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">
      Hover Dropdown
    </button>
    <div class="dropdown-content">
      <a href="#link1">Option 1</a>
      <a href="#link2">Option 2</a>
      <a href="#link3">Option 3</a>
    </div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-sprites',
    title: 'CSS Image Sprites & Attribute Selectors',
    description: 'Combine multiple graphics into one file for speed, and select elements based on specific attributes.',
    explanation: [
      'An image sprite is a collection of images put into a single image. Background-position is shifted to crop what is shown.',
      'Attribute selectors select elements with a specific attribute or value, e.g., input[type="text"].'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Attribute selectors */
    input[type="text"] {
      width: 100%;
      padding: 10px;
      border: 2px solid #3b82f6;
      border-radius: 6px;
      box-sizing: border-box;
    }
    input[type="submit"] {
      background: #10b981;
      color: white;
      padding: 8px 16px;
      border: none;
      cursor: pointer;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h2>Attribute Selectors Form</h2>
  <form>
    <label>Standard Text Input styled with attribute selectors:</label>
    <input type="text" placeholder="Type name here..." />
    <input type="submit" value="Submit Form" />
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-forms',
    title: 'CSS Forms',
    description: 'Style input boxes, buttons, focus states, and placeholder prompts for user inputs.',
    explanation: [
      'Style form inputs with padding, borders, active focus transitions, and custom layout spacing.',
      'Use :focus pseudo-class to add highlights when a field is selected by the user.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .input-field {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      transition: border-color 0.3s ease;
    }
    .input-field:focus {
      border-color: #4f46e5;
      outline: none;
    }
  </style>
</head>
<body>
  <h2>CSS Form Focus styling</h2>
  <p>Click inside the input field below to observe the transition border highlight effect:</p>
  <input class="input-field" type="text" placeholder="Your Username" />
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-counters',
    title: 'CSS Counters',
    description: 'Generate automatic numbering and counters on lists or headers entirely via CSS.',
    explanation: [
      'CSS counters are variables maintained by CSS whose values can be incremented by CSS rules.',
      'Properties: counter-reset, counter-increment, content, and counter() function.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      counter-reset: section; /* Set counter to 0 */
    }
    h3::before {
      counter-increment: section; /* Add 1 to counter */
      content: "Topic " counter(section) ": "; /* Display counter */
      color: #ea580c;
    }
  </style>
</head>
<body>
  <h2>CSS Counters</h2>
  <h3>HTML Fundamentals</h3>
  <h3>CSS Layouts</h3>
  <h3>JavaScript Logic</h3>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-advanced',
    title: 'CSS Advanced Topics',
    description: 'Explore state-of-the-art layout engines, complex masking, and advanced performance tricks.',
    explanation: [
      'Modern CSS features allow custom variables, complex gradients, animations, grid structures, and filtering on layers.',
      'Using pure CSS replaces complex JS routines for presentation.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .advanced-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      padding: 30px;
      max-width: 400px;
      margin: auto;
      text-align: center;
    }
  </style>
</head>
<body style="background: #f1f5f9; padding: 40px; font-family: sans-serif;">
  <div class="advanced-card">
    <h2>Advanced CSS card</h2>
    <p>Using rich box shadows and rounded corners to create standard card structures.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-rounded',
    title: 'CSS Rounded Corners & Border Images',
    description: 'Soften borders using border-radius, or slice images to decorate custom border margins.',
    explanation: [
      'The border-radius property allows adding rounded corners to elements.',
      'You can define rounded corners for each side separately.',
      'The border-image property allows specifying an image to be used as the border around an element.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .rounded-box {
      background-color: #3b82f6;
      color: white;
      padding: 20px;
      width: 200px;
      /* Top-left & Bottom-right, Top-right & Bottom-left */
      border-radius: 25px 10px 25px 10px;
    }
  </style>
</head>
<body>
  <h2>Rounded Corners</h2>
  <div class="rounded-box">Custom non-symmetric rounded corners!</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-multibackgrounds',
    title: 'CSS Multi Backgrounds & Color Keywords',
    description: 'Layer multiple background graphic files and explore advanced color terms like currentcolor.',
    explanation: [
      'CSS allows you to add multiple background images for an element, separated by a comma.',
      'Color keywords include transparent, inherit, and currentcolor (representing the active color property).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .multi-bg {
      width: 100%;
      height: 200px;
      background-image: url('https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'), linear-gradient(to bottom, #eff6ff, #bfdbfe);
      background-repeat: no-repeat, no-repeat;
      background-position: center, center;
      background-size: 80px, cover;
      border: 1px solid #93c5fd;
    }
  </style>
</head>
<body>
  <h2>Multiple Background Layers</h2>
  <p>The container below layers a React SVG logo over a beautiful linear gradient background:</p>
  <div class="multi-bg"></div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-gradients',
    title: 'CSS Gradients (Linear, Radial, Conic)',
    description: 'Paint elements with smooth colors transitioning across vectors, circles, or circular angles.',
    explanation: [
      'CSS gradients let you display smooth transitions between two or more specified colors.',
      'Linear Gradients: Go down/up/left/right/diagonally.',
      'Radial Gradients: Defined by their center out.',
      'Conic Gradients: Colors rotated around a center point.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grad-box {
      width: 120px;
      height: 120px;
      display: inline-block;
      margin: 10px;
      color: white;
      text-align: center;
      line-height: 120px;
      font-weight: bold;
    }
    .linear { background-image: linear-gradient(to right, red , yellow); }
    .radial { background-image: radial-gradient(circle, #3b82f6, #1e3a8a); }
    .conic { background-image: conic-gradient(red, yellow, green, blue, red); border-radius: 50%; }
  </style>
</head>
<body>
  <h2>CSS Gradients</h2>
  <div class="grad-box linear">Linear</div>
  <div class="grad-box radial">Radial</div>
  <div class="grad-box conic">Conic</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-shadows',
    title: 'CSS Shadows (Text & Box Shadows)',
    description: 'Add depth elements using offset text shadow strings or box ambient shadow layers.',
    explanation: [
      'The text-shadow property adds shadow to text.',
      'The box-shadow property adds shadow to elements.',
      'Syntax: box-shadow: h-offset v-offset blur spread color inset;'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .text-sha {
      font-size: 30px;
      font-weight: bold;
      color: white;
      text-shadow: 2px 2px 4px #000000;
    }
    .box-sha {
      width: 200px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  </style>
</head>
<body style="background: #f1f5f9; padding: 20px; font-family: sans-serif;">
  <p class="text-sha">Text Shadow with Blur</p>
  <br />
  <div class="box-sha">Box Shadow Card</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-texteffects',
    title: 'CSS Text Effects & Web Fonts',
    description: 'Format text wraps, ellipses, alignments, and load custom remote fonts via Web APIs.',
    explanation: [
      'text-overflow property specifies how overflowed content that is not displayed should be signaled to users (e.g., sliced or with ellipsis).',
      'word-wrap forces text to wrap even if single words are too long.',
      'Web Fonts allow using custom fonts loaded via url() tags (Google Fonts).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .ellipsis-demo {
      width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border: 1px solid black;
      background: #eee;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h2>Text Ellipsis</h2>
  <p>The paragraph below is forced to stay on one line and clips with an ellipsis (...):</p>
  <p class="ellipsis-demo">This is some extremely long text that cannot fit inside this container!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-transforms',
    title: 'CSS 2D Transforms & 3D Transforms',
    description: 'Spin, skew, scale, or shift elements using matrix vector calculations.',
    explanation: [
      'CSS transforms allow you to translate, rotate, scale, and skew elements.',
      '2D transforms can alter X and Y axes.',
      '3D transforms can alter Z depth axis, creating highly rich spatial rotations.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .transform-box {
      width: 120px;
      height: 100px;
      background-color: yellow;
      border: 1px solid black;
      margin: 30px;
      transition: transform 0.5s;
    }
    .transform-box:hover {
      transform: rotate(30deg) scale(1.2);
    }
  </style>
</head>
<body>
  <h2>2D Transform Example</h2>
  <p>Hover over the box below to see it rotate and scale!</p>
  <div class="transform-box">Hover Me!</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-transitions-animations',
    title: 'CSS Transitions & Animations',
    description: 'Transition layouts dynamically or define timeline frames using standard @keyframes.',
    explanation: [
      'Transitions change property values smoothly over a given duration.',
      'Animations allow declaring complex timeline states using @keyframes and animation property strings.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes colorchange {
      0%   { background-color: red; left:0px; top:0px; }
      50%  { background-color: blue; left:200px; top:0px; }
      100% { background-color: red; left:0px; top:0px; }
    }
    .anim-box {
      width: 100px;
      height: 100px;
      position: relative;
      background-color: red;
      animation-name: colorchange;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }
  </style>
</head>
<body>
  <h2>CSS Keyframe Animation</h2>
  <div class="anim-box"></div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-tooltips',
    title: 'CSS Tooltips & Style Images',
    description: 'Create pop-up help indicators on hover and overlay custom filters on images.',
    explanation: [
      'A tooltip is often used to display context-sensitive help on hover.',
      'Image styling allows adding filters (blur, brightness, grayscale) and responsive shapes.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      bottom: 125%; /* Position above tooltip button */
      left: 50%;
      margin-left: -60px;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  </style>
</head>
<body style="padding: 100px; text-align: center;">
  <h2>CSS Tooltip on Hover</h2>
  <div class="tooltip">Hover here!
    <span class="tooltiptext">Helper info!</span>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-masking',
    title: 'CSS Masking & Clipping',
    description: 'Crop element frames along precise paths or use alpha channel mask images.',
    explanation: [
      'CSS masking allows users to display parts of an element by hiding others via an image or vector map.',
      'CSS clip-path defines a specific clipping region (polygon, circle, ellipse).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .clipped-box {
      width: 150px;
      height: 150px;
      background-color: crimson;
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
      margin: auto;
    }
  </style>
</head>
<body>
  <h2>CSS Clip Path</h2>
  <p>The box below is a square, clipped into a pentagon via clip-path:</p>
  <div class="clipped-box"></div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-buttons',
    title: 'CSS Buttons & Pagination',
    description: 'Style rich call-to-actions, hover indicators, and structural pagination selectors.',
    explanation: [
      'Buttons are styled by disabling default styles, adding borders, gradients, and subtle hover scale animations.',
      'Pagination layouts list numeric tags in neat inline row blocks.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .btn {
      background-color: #4f46e5;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: background 0.3s;
    }
    .btn:hover { background-color: #4338ca; }
  </style>
</head>
<body>
  <h2>Styled Interactive Button</h2>
  <button class="btn">Click Button</button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-ui-variables',
    title: 'CSS User Interface & Variables',
    description: 'Declare globally reusable color/dimension variables using the custom --var syntax.',
    explanation: [
      'CSS variables (Custom Properties) allow storing values that can be referenced throughout the document.',
      'Variables are declared inside a selector (often :root for global access) prefixed with --.',
      'Retrieve variable values using the var() function.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --main-color: #10b981;
      --secondary-color: #f59e0b;
      --padding-unit: 20px;
    }
    .styled-div {
      background-color: var(--main-color);
      color: white;
      padding: var(--padding-unit);
      border: 3px solid var(--secondary-color);
    }
  </style>
</head>
<body>
  <h2>CSS Variables (--var)</h2>
  <div class="styled-div">I am styled using CSS custom variables!</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-box-sizing-media',
    title: 'CSS Box-sizing & Media Queries',
    description: 'Govern element box metrics and configure media conditions for responsive dimensions.',
    explanation: [
      'box-sizing: border-box forces padding and border into the width, preventing layout breakage.',
      'Media queries apply blocks of styling only when media condition filters (width/height) are satisfied.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      box-sizing: border-box;
      width: 100%;
      padding: 40px;
      border: 10px solid #cbd5e1;
      background-color: lightyellow;
    }
  </style>
</head>
<body>
  <h2>Box-Sizing: Border-Box</h2>
  <div class="box">This box spans 100% width cleanly because padding and border are contained inside.</div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-responsive',
    title: 'CSS Responsive & Modern Layouts',
    description: 'Build templates that automatically resize, wrap, or fit dynamically across user devices.',
    explanation: [
      'Responsive design allows layouts to adapt naturally to monitor, phone, or tablet layouts.',
      'Combine fluid grids, media queries, and flexible layouts for cohesive output.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .responsive-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    .card { background: #3b82f6; color: white; padding: 20px; text-align: center; border-radius: 8px;}
  </style>
</head>
<body>
  <h2>Auto-fitting Grid Layout</h2>
  <div class="responsive-grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-rwd-intro',
    title: 'CSS RWD Intro (Responsive Web Design)',
    description: 'Learn the basic paradigms of building multi-device adaptable layouts.',
    explanation: [
      'Responsive Web Design (RWD) makes web pages render beautifully across multi-screen devices.',
      'RWD was introduced to support smartphone displays alongside high-resolution desktops.'
    ],
    code: `<!DOCTYPE html>
<html>
<body>
  <h2>Responsive Web Design Introduction</h2>
  <p>RWD relies on flexible layout grids, flexible image sizing, and media queries to achieve full viewport adaptability.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-viewport',
    title: 'CSS Viewport & Grid View',
    description: 'Understand viewport scaling parameters and configure standard multi-column structural grids.',
    explanation: [
      'The viewport is the user\'s visible area of a web page.',
      'A Grid View divides pages into vertical and horizontal grids to organize text and layout content.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h2>Viewport Scaling Example</h2>
  <p>The viewport meta tag in the head directs the browser to match screen width for zoom levels.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-flexbox',
    title: 'CSS Flexbox',
    description: 'Learn the flexible box module designed for simple one-dimensional block alignments.',
    explanation: [
      'Flexbox provides an easy way to align items vertically and horizontally inside a container.',
      'The container is defined with display: flex.',
      'Control direction (flex-direction), wrapping (flex-wrap), and spacing (justify-content, align-items).'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      justify-content: space-around;
      background-color: DodgerBlue;
      padding: 10px;
    }
    .flex-container > div {
      background-color: #f1f1f1;
      width: 100px;
      margin: 10px;
      text-align: center;
      line-height: 75px;
      font-size: 30px;
    }
  </style>
</head>
<body>
  <h2>CSS Flexbox Alignment</h2>
  <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'css-grid',
    title: 'CSS Grid',
    description: 'Learn the grid layout module designed for advanced two-dimensional row/column layouts.',
    explanation: [
      'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns.',
      'Make an element grid-based with display: grid.',
      'Define templates using grid-template-columns and grid-template-rows.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      background-color: #2196F3;
      padding: 10px;
      gap: 10px;
    }
    .grid-container > div {
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      padding: 20px 0;
      font-size: 30px;
    }
  </style>
</head>
<body>
  <h2>CSS Grid columns</h2>
  <div class="grid-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>  
    <div>4</div>
    <div>5</div>
    <div>6</div>  
  </div>
</body>
</html>`,
    languageId: 'html'
  }
];
