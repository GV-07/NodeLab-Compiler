export interface TutorialTopic {
  id: string;
  title: string;
  description: string;
  explanation: string[];
  code: string;
  languageId: string;
}

export const HTML_TOPICS: TutorialTopic[] = [
  {
    id: 'html-home',
    title: 'HTML HOME',
    description: 'Learn the fundamentals of web page creation from the very beginning.',
    explanation: [
      'HTML is the standard markup language for creating Web pages.',
      'With HTML you can create and publish your own Website.',
      'HTML is easy to learn and fun to build!'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Home</title>
</head>
<body style="font-family: sans-serif; padding: 20px; text-align: center; background-color: #f8fafc;">
  <h1 style="color: #0f172a; font-size: 2.5rem; margin-bottom: 10px;">HTML Tutorial</h1>
  <p style="color: #475569; font-size: 1.1rem; max-width: 600px; margin: 0 auto 30px;">
    Welcome to the interactive HTML tutorial. Here you can edit the source code and preview the output in real-time!
  </p>
  <div style="background-color: #3b82f6; color: white; padding: 20px; border-radius: 12px; display: inline-block;">
    <h3>Start Learning Today!</h3>
    <p style="margin: 0;">Click through the topics in the sidebar to master HTML.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-intro',
    title: 'HTML Introduction',
    description: 'HTML is the standard markup language for creating Web pages.',
    explanation: [
      'HTML stands for HyperText Markup Language.',
      'It describes the structure of a Web page using markup tags.',
      'HTML elements are the building blocks of HTML pages, represented by tags like <h1>, <p>, and <a>.',
      'Browsers do not display the HTML tags, but use them to render the content of the page.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <title>NodeLab HTML Tutorial</title>
</head>
<body style="font-family: sans-serif; padding: 20px; background: #0f172a; color: white; text-align: center;">
  <h1 style="color: #3b82f6;">Welcome to NodeLab!</h1>
  <p>This is a simple HTML paragraph in your interactive sandbox.</p>
  <button onclick="alert('Hello from NodeLab!')" style="background: #3b82f6; border: none; padding: 10px 20px; color: white; border-radius: 8px; cursor: pointer; font-weight: bold;">
    Click Me
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-editors',
    title: 'HTML Editors',
    description: 'Learn how to write HTML using simple text editors or modern development environments.',
    explanation: [
      'A simple text editor is all you need to learn HTML.',
      'We recommend Notepad (PC) or TextEdit (Mac) for learning.',
      'Professional developers use advanced editors like VS Code or NodeLab!'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Writing HTML in Editors</h2>
  <p>To create a web page, type your HTML code into a text editor and save the file with a <b>.html</b> extension.</p>
  <p style="color: #2563eb; font-weight: bold;">Give it a try in this sandbox editor!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-basic',
    title: 'HTML Basic',
    description: 'Learn the basic structure of an HTML document, headings, paragraphs, links, and images.',
    explanation: [
      'All HTML documents must start with a document type declaration: <!DOCTYPE html>.',
      'The HTML document itself begins with <html> and ends with </html>.',
      'The visible part of the HTML document is between <body> and </body>.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
  <a href="https://www.w3schools.com" target="_blank">This is a link to W3Schools</a>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-elements',
    title: 'HTML Elements',
    description: 'An HTML element is defined by a start tag, some content, and an end tag.',
    explanation: [
      'The HTML element is everything from the start tag to the end tag.',
      'Syntax: <tagname>Content goes here...</tagname>',
      'Nested Elements: HTML elements can be nested, meaning elements can contain other elements.',
      'Never skip the end tag. Some HTML elements will display correctly even if you forget the end tag, but this is bad practice.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h1>My First Heading</h1>
  <p>My first paragraph with nested <strong>bold text</strong> and <em>italicized text</em>!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-attributes',
    title: 'HTML Attributes',
    description: 'HTML attributes provide additional information about HTML elements.',
    explanation: [
      'All HTML elements can have attributes.',
      'Attributes provide additional information about an element, like styling, links, or sources.',
      'Attributes are always specified in the start tag and usually come in name/value pairs like: name="value".',
      'Common examples include href (links), src (image sources), width/height, style, and alt (alternative text).'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Attributes Example</h2>
  <p>Below is a link and an image styled using standard attributes:</p>
  <a href="https://aistudio.google.com" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: none; margin-bottom: 20px; display: inline-block;">
    Visit Google AI Studio
  </a>
  <br />
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" style="width: 150px; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px;" />
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-headings',
    title: 'HTML Headings',
    description: 'HTML headings are titles or subtitles that you want to display on a webpage.',
    explanation: [
      'HTML headings are defined with the <h1> to <h6> tags.',
      '<h1> defines the most important heading. <h6> defines the least important heading.',
      'Search engines use headings to index the structure and content of your web pages.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-paragraphs',
    title: 'HTML Paragraphs',
    description: 'The HTML <p> element defines a paragraph of text.',
    explanation: [
      'A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.',
      'You cannot be sure how HTML will be displayed; large or small screens, and resized windows will create different results.',
      'Use <br> to insert line breaks without starting a new paragraph.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
  <p>This is a paragraph<br>with a line break.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-styles',
    title: 'HTML Styles',
    description: 'The HTML style attribute is used to add styles to an element, such as color, font, size, and more.',
    explanation: [
      'Setting the style of an HTML element can be done with the style attribute.',
      'Syntax: <tagname style="property:value;">',
      'Common style properties: background-color, color, font-family, font-size, text-align.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="background-color: #f1f5f9; font-family: sans-serif; padding: 20px;">
  <h1 style="color: #2563eb; font-family: system-ui, sans-serif; text-align: center;">Styled Heading</h1>
  <p style="color: #ef4444; font-size: 18px; text-align: center;">This is a paragraph styled using inline CSS.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-formatting',
    title: 'HTML Formatting',
    description: 'HTML contains special elements for defining text with a special meaning.',
    explanation: [
      '<b> and <strong> define bold and important text.',
      '<i> and <em> define italic and emphasized text.',
      '<mark> defines marked/highlighted text.',
      '<small> defines smaller text, and <del> defines deleted text.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Text Formatting</h2>
  <p>This is <b>bold</b> text.</p>
  <p>This is <strong>important</strong> text.</p>
  <p>This is <i>italic</i> text.</p>
  <p>This is <em>emphasized</em> text.</p>
  <p>This is <mark>marked</mark> text.</p>
  <p>This is <small>smaller</small> text.</p>
  <p>This is <del>deleted</del> text.</p>
  <p>This is <sub>subscript</sub> and <sup>superscript</sup> text.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-quotations',
    title: 'HTML Quotations',
    description: 'HTML elements for quotations, citations, abbreviations, addresses, and text direction.',
    explanation: [
      'The <blockquote> element defines a section that is quoted from another source.',
      'The <q> tag defines a short inline quotation.',
      'The <abbr> tag defines an abbreviation or an acronym (hover to see full title).',
      'The <address> tag defines contact information.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <p>WWF\'s goal is to: <q>Build a future where people live in harmony with nature.</q></p>
  <p>Here is a long quotation:</p>
  <blockquote cite="http://www.worldwildlife.org/who/index.html" style="background: #f1f5f9; padding: 15px; border-left: 5px solid #3b82f6;">
    For nearly 60 years, WWF has been protecting the future of nature. The world\'s leading conservation organization, WWF works in 100 countries.
  </blockquote>
  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-comments',
    title: 'HTML Comments',
    description: 'HTML comments are not displayed in the browser, but they can help document your source code.',
    explanation: [
      'You can add comments to your HTML source by using the following syntax: <!-- Write your comments here -->',
      'Comments are useful for letting other developers know what a section of code does.',
      'You can also use comments to hide content from being displayed temporarily.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <!-- This is a comment that is hidden from view -->
  <p>This is a visible paragraph.</p>
  <!-- <p>This paragraph is commented out and will not render!</p> -->
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-colors',
    title: 'HTML Colors',
    description: 'HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, or HSLA values.',
    explanation: [
      'HTML supports 140 standard color names (like Tomato, Orange, DodgerBlue, SlateGray, etc.).',
      'HEX values are specified with #RRGGBB, where the values are hexadecimal digits (00-FF).',
      'RGBA and HSLA add an alpha parameter specifying the opacity (from 0.0 to 1.0).'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2 style="background-color: Tomato; color: white; padding: 10px; border-radius: 8px;">Tomato</h2>
  <h2 style="background-color: #3b82f6; color: white; padding: 10px; border-radius: 8px;">HEX #3b82f6</h2>
  <h2 style="background-color: rgb(60, 179, 113); color: white; padding: 10px; border-radius: 8px;">RGB(60, 179, 113)</h2>
  <h2 style="background-color: rgba(60, 179, 113, 0.5); color: white; padding: 10px; border-radius: 8px;">RGBA with 50% opacity</h2>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-css',
    title: 'HTML CSS',
    description: 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed.',
    explanation: [
      'CSS can be added to HTML elements in 3 ways:',
      'Inline: using the style attribute inside HTML elements.',
      'Internal: using a <style> element in the <head> section.',
      'External: using a <link> element to link to an external CSS file.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background-color: #f1f5f9; font-family: sans-serif; padding: 20px; }
    h1   { color: #1e3a8a; }
    p    { color: #334155; font-size: 16px; }
  </style>
</head>
<body>
  <h1>Internal CSS Example</h1>
  <p>This document is styled using an internal stylesheet inside the head element.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-links',
    title: 'HTML Links',
    description: 'HTML links are hyperlinks. You can click on a link and jump to another document.',
    explanation: [
      'HTML links are defined with the <a> tag.',
      'Syntax: <a href="url">link text</a>',
      'The href attribute specifies the destination address of the link.',
      'The target attribute specifies where to open the linked document (_self, _blank).'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Links</h2>
  <p>Link opening in the same window (default):</p>
  <a href="https://www.google.com" target="_self" style="color: #3b82f6;">Visit Google</a>
  <p>Link opening in a new tab/window:</p>
  <a href="https://www.wikipedia.org" target="_blank" style="color: #10b981;">Visit Wikipedia</a>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-images',
    title: 'HTML Images',
    description: 'HTML images can improve the design and the appearance of a web page.',
    explanation: [
      'HTML images are defined with the <img> tag, which is empty (contains attributes only).',
      'The src attribute specifies the URL of the image.',
      'The alt attribute provides an alternate text for the image, if the user cannot view it.',
      'The width and height attributes define the size of the image in pixels.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Images</h2>
  <p>Images have src and alt attributes, plus optional dimensions:</p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" width="150" height="50" style="border: 1px solid #cbd5e1; padding: 10px; border-radius: 8px;">
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-favicon',
    title: 'HTML Favicon',
    description: 'A favicon is a small image displayed next to the page title in the browser tab.',
    explanation: [
      'You can use any image you want as your favicon, but we recommend .ico or .png files.',
      'To add a favicon to your website, save your favicon image to your web directory.',
      'Add a <link> element to your index.html file, inside the <head> element.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Favicon Example</h2>
  <p>Look at the head tag in the source editor. It contains a link tag to specify the favicon of the page!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-page-title',
    title: 'HTML Page Title',
    description: 'Every HTML document must have a title element inside the head section.',
    explanation: [
      'The <title> element defines the title of the document.',
      'The title must be text-only, and it is shown in the browser\'s title bar or page\'s tab.',
      'The contents of a page title are very important for Search Engine Optimization (SEO)!'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <title>This is a custom SEO-friendly title</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Document Title</h2>
  <p>The title of this page is defined in the head section. Open this page in a separate browser tab to see it in action!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-tables',
    title: 'HTML Tables',
    description: 'HTML tables allow web developers to arrange data into rows and columns.',
    explanation: [
      'An HTML table is defined with the <table> tag.',
      'Each table row is defined with the <tr> tag.',
      'Each table header is defined with the <th> tag.',
      'Each table data/cell is defined with the <td> tag.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    table { font-family: sans-serif; border-collapse: collapse; width: 100%; }
    td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; }
    tr:nth-child(even) { background-color: #f2f2f2; }
  </style>
</head>
<body style="padding: 20px;">
  <h2>HTML Table</h2>
  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </table>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-lists',
    title: 'HTML Lists',
    description: 'HTML lists allow web developers to group a set of related items in lists.',
    explanation: [
      'An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.',
      'An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.',
      'An HTML description list is a list of terms, with a description of each term, using <dl>, <dt>, and <dd> tags.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Lists</h2>
  <h3>Unordered List:</h3>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
  <h3>Ordered List:</h3>
  <ol>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
  </ol>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-block-inline',
    title: 'HTML Block & Inline',
    description: 'Every HTML element has a default display value, depending on what type of element it is.',
    explanation: [
      'Block-level elements always start on a new line and take up the full width available (e.g. <div>, <p>, <h1>-<h6>, <form>).',
      'Inline elements do not start on a new line and only take up as much width as necessary (e.g. <span>, <a>, <img>, <strong>).'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <div style="background-color: #3b82f6; color: white; padding: 10px; border-radius: 8px;">
    I am a block-level DIV element!
  </div>
  <p>I am also a block-level element. But inside me, <span style="background-color: yellow; padding: 2px; border-radius: 4px;">this is an inline SPAN</span> element.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-div',
    title: 'HTML Div',
    description: 'The <div> element is often used as a container for other HTML elements.',
    explanation: [
      'The <div> element is a block-level element, which always starts on a new line and takes up the full width.',
      'It has no required attributes, but style, class, and id are common.',
      'When used together with CSS, the <div> element can be used to style blocks of content.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Div Element</h2>
  <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 12px;">
    <h3 style="margin-top: 0;">London</h3>
    <p style="margin-bottom: 0;">London is the capital city of England. It is the most populous city in the United Kingdom.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-classes',
    title: 'HTML Classes',
    description: 'The HTML class attribute is used to specify a class for an HTML element.',
    explanation: [
      'Multiple HTML elements can share the same class name.',
      'The class attribute is used to point to a class style in a style sheet.',
      'In CSS, to select elements with a specific class, write a period (.) character, followed by the name of the class.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .city { background-color: tomato; color: white; border: 2px solid black; margin: 10px; padding: 10px; border-radius: 8px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 10px;">
  <h2>Using the class Attribute</h2>
  <div class="city">
    <h2>London</h2>
    <p>London is the capital of England.</p>
  </div>
  <div class="city">
    <h2>Paris</h2>
    <p>Paris is the capital of France.</p>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-id',
    title: 'HTML Id',
    description: 'The HTML id attribute is used to specify a unique id for an HTML element.',
    explanation: [
      'You cannot have more than one element with the same id in an HTML document.',
      'The id attribute specifies a unique id for an HTML element.',
      'In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    #myHeader { background-color: lightblue; color: black; padding: 20px; text-align: center; border-radius: 12px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h1 id="myHeader">My Unique Header</h1>
  <p>This header is styled uniquely by its ID attribute.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-buttons',
    title: 'HTML Buttons',
    description: 'The HTML <button> element defines a clickable button.',
    explanation: [
      'Inside the <button> element you can put text (and tags like <i>, <b>, <strong>, or <img>).',
      'Always specify the type attribute for a <button> element (button, submit, reset).',
      'Use the onclick attribute to specify JavaScript to execute on click.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Button</h2>
  <button type="button" onclick="alert('Button clicked!')" style="background-color: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold;">
    Click Me!
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-iframes',
    title: 'HTML Iframes',
    description: 'An HTML iframe is used to display a web page within a web page.',
    explanation: [
      'The HTML <iframe> tag specifies an inline frame.',
      'Syntax: <iframe src="url" title="description"></iframe>',
      'It is good practice to always include a title attribute for the iframe, for screen-reader accessibility.',
      'Use width and height attributes to specify the size of the iframe.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Iframes</h2>
  <p>An iframe is used to display a web page inside another web page:</p>
  <iframe src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" title="React Logo Inline Iframe" style="width: 100%; height: 200px; border: 2px solid #cbd5e1; border-radius: 8px;"></iframe>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-javascript',
    title: 'HTML JavaScript',
    description: 'JavaScript makes HTML pages more dynamic and interactive.',
    explanation: [
      'The <script> tag is used to define a client-side script (JavaScript).',
      'JavaScript can select elements, change content, modify attributes, and style properties dynamically.',
      'The <noscript> tag defines an alternate content for users that have disabled scripts.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML JavaScript</h2>
  <p id="demo">JavaScript can change HTML content.</p>
  <button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; cursor: pointer;">
    Click Me!
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-file-paths',
    title: 'HTML File Paths',
    description: 'A file path describes the location of a file in a web site\'s folder structure.',
    explanation: [
      'File paths are used when linking to external resources like images, stylesheets, or scripts.',
      'An absolute file path is the full URL to an internet resource.',
      'A relative file path points to a file relative to the current page.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML File Paths</h2>
  <p>This image uses an absolute file path:</p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" width="100">
  <p>A relative file path looks like: <code>&lt;img src="img_girl.jpg"&gt;</code></p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-head',
    title: 'HTML Head',
    description: 'The HTML <head> element is a container for metadata (data about data).',
    explanation: [
      'The <head> element is placed between the <html> tag and the <body> tag.',
      'It contains elements like <title>, <style>, <meta>, <link>, <script>, and <base>.',
      'Metadata is not displayed on the page, but is used by browsers, search engines, and other web services.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <title>Document Header metadata</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>The HTML Head Element</h2>
  <p>The metadata in the head section defines the character set, page description, and search keywords!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-layout',
    title: 'HTML Layout',
    description: 'Websites often display content in multiple columns or grids, styled using semantic layout tags.',
    explanation: [
      'HTML has several semantic elements that define the different parts of a web page:',
      '<header> - Defines a header for a document or a section.',
      '<nav> - Defines a set of navigation links.',
      '<section> - Defines a section in a document.',
      '<article> - Defines an independent, self-contained content.',
      '<footer> - Defines a footer for a document or a section.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    header, footer { background-color: #334155; color: white; text-align: center; padding: 10px; border-radius: 6px; }
    nav { background-color: #cbd5e1; padding: 10px; margin: 10px 0; border-radius: 6px; }
    section { padding: 20px; background-color: #f1f5f9; border-radius: 6px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 10px;">
  <header><h2>City Gallery</h2></header>
  <nav><a href="#">London</a> | <a href="#">Paris</a> | <a href="#">Tokyo</a></nav>
  <section>
    <h3>London</h3>
    <p>London is the capital city of England.</p>
  </section>
  <footer><p>© 2026 gallery.com</p></footer>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-responsive',
    title: 'HTML Responsive',
    description: 'Responsive Web Design is about creating web pages that look good on all devices!',
    explanation: [
      'Responsive web design uses HTML and CSS to automatically resize, hide, shrink, or enlarge a website.',
      'To create a responsive website, add the viewport meta tag to your web pages.',
      'Use responsive CSS frameworks or Media Queries to apply layout adjustments.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .box { width: 100%; max-width: 400px; padding: 20px; background-color: #fef08a; margin: auto; text-align: center; border-radius: 12px; border: 2px dashed #ca8a04; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Responsive Web Design</h2>
  <div class="box">
    This box has a maximum width of 400px but is fully fluid on smaller screen viewports! Try resizing your window to test!
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-computercode',
    title: 'HTML Computercode',
    description: 'HTML contains several elements for defining user input and computer code.',
    explanation: [
      'The <code> tag is used to display inline snippets of computer code.',
      'The <kbd> tag is used to define keyboard input.',
      'The <samp> tag is used to define sample output from a computer program.',
      'The <pre> tag defines preformatted text, preserving spaces and line breaks.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Computer Code Elements</h2>
  <p>Save the document by pressing <kbd style="background: #e2e8f0; border-radius: 3px; padding: 2px 4px;">Ctrl</kbd> + <kbd style="background: #e2e8f0; border-radius: 3px; padding: 2px 4px;">S</kbd></p>
  <p>The code element style: <code>let x = 10;</code></p>
  <pre style="background: #27272a; color: #f4f4f5; padding: 15px; border-radius: 8px; font-family: monospace;">
let x = 5;
let y = 6;
console.log(x + y);
  </pre>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-semantics',
    title: 'HTML Semantics',
    description: 'A semantic element clearly describes its meaning to both the browser and the developer.',
    explanation: [
      'Non-semantic elements (e.g. <div> and <span>) tell nothing about their content.',
      'Semantic elements (e.g. <form>, <table>, <article>, <section>, <mark>, <details>) clearly define their content.',
      'Semantic elements lead to cleaner code and greatly improve SEO and screen reader accessibility.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Semantic Details & Summary</h2>
  <p>The details tag defines interactive disclosures that the user can open and close:</p>
  <details style="background: #f1f5f9; padding: 15px; border-radius: 8px; cursor: pointer;">
    <summary style="font-weight: bold;">Click to expand details</summary>
    <p style="margin-top: 10px; margin-bottom: 0;">These hidden semantic details are now visible to the reader!</p>
  </details>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-style-guide',
    title: 'HTML Style Guide',
    description: 'A consistent style guide makes HTML code easier to read, maintain, and understand.',
    explanation: [
      'Always use correct document type declaration: <!DOCTYPE html>.',
      'Use lowercase element names, attribute names, and values.',
      'Always close all HTML elements, and always quote attribute values.',
      'Always specify alt, width, and height for images.'
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Clean Styled Document</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <!-- Standard, clean HTML following modern best practices -->
  <h1>Proper Style Guide Coding</h1>
  <p>All attributes are lowercased and quoted cleanly, elements are closed correctly.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-entities',
    title: 'HTML Entities',
    description: 'Some characters are reserved in HTML or have special meanings. These can be represented using character entities.',
    explanation: [
      'If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.',
      'An HTML entity looks like this: &entity_name; or &#entity_number;.',
      'Common entities: &lt; (<), &gt; (>), &amp; (&), &quot; ("), &apos; (\'), &nbsp; (non-breaking space).'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Character Entities</h2>
  <p>Displaying a less-than sign: &lt;</p>
  <p>Displaying a registered trademark: &reg;</p>
  <p>Displaying a copyright symbol: &copy;</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-symbols',
    title: 'HTML Symbols',
    description: 'HTML symbols are things like mathematical operators, arrows, technical symbols, and shapes.',
    explanation: [
      'HTML symbols are not present on a normal keyboard, but can be added using entities.',
      'Mathematical symbols: &forall; (for all), &part; (partial differential), &exist; (exists).',
      'Greek letters: &alpha; (alpha), &beta; (beta), &gamma; (gamma).'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Symbols</h2>
  <p>Mathematical: &prod; &sum; &radic; &infin; &ang;</p>
  <p>Greek letters: &Gamma; &Delta; &Theta; &Lambda;</p>
  <p>Arrows: &larr; &uarr; &rarr; &darr; &harr;</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-emojis',
    title: 'HTML Emojis',
    description: 'Emojis look like images, but they are characters from the UTF-8 (Unicode) character set.',
    explanation: [
      'To display an emoji correctly, an HTML page must have a charset attribute specifying UTF-8.',
      'Emojis are represented by decimal or hexadecimal numbers.',
      'Because emojis are characters, they can be resized and styled using standard CSS properties like font-size!'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Emojis</h2>
  <p style="font-size: 48px; margin: 20px 0;">
    &#128512; &#128516; &#128525; &#128125;
  </p>
  <p>These are text-based character emojis from the UTF-8 specification.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-charsets',
    title: 'HTML Charsets',
    description: 'To display an HTML page correctly, a web browser must know the character set used on the page.',
    explanation: [
      'A character set is specified in the <meta> tag inside the head element.',
      'ASCII was the first character encoding standard. It defined 127 different alphanumeric characters.',
      'UTF-8 is the default character encoding standard for HTML5, covering almost all characters and symbols in the world!'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>UTF-8 Character Set Example</h2>
  <p>UTF-8 covers almost all characters and symbols in the world, including Swedish letters like Å, Ä, Ö.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-url-encode',
    title: 'HTML URL Encode',
    description: 'URL encoding converts characters into a format that can be transmitted over the Internet safely.',
    explanation: [
      'URLs can only be sent over the Internet using the ASCII character-set.',
      'URL encoding converts non-ASCII characters into a \'%\' followed by hexadecimal digits.',
      'URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign or %20.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML URL Encoding</h2>
  <p>A URL like <code>https://w3schools.com/html/default.asp</code> is safe.</p>
  <p>A URL with a query string containing space like <code>https://example.com/search?q=html tutorial</code> is encoded as <code>https://example.com/search?q=html%20tutorial</code>.</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-xhtml',
    title: 'HTML vs. XHTML',
    description: 'XHTML is a stricter, more XML-based version of HTML.',
    explanation: [
      'XHTML stands for Extensible HyperText Markup Language.',
      'XHTML is HTML defined as an XML application. It is supported by all major browsers.',
      'XHTML is much stricter: elements must always be nested correctly, closed, lowercased, and attribute values must be quoted.'
    ],
    code: `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>Strict XHTML Example</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Strict XHTML Compliance</h2>
  <p>In XHTML, empty tags must be closed: <code>&lt;br /&gt;</code> and <code>&lt;img src="img.jpg" /&gt;</code> are required!</p>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-forms',
    title: 'HTML Forms',
    description: 'An HTML form is used to collect user input, which is most often sent to a server.',
    explanation: [
      'The <form> element defines an HTML form.',
      'The <input> element is the most important form element and can be displayed in many ways depending on the type attribute (e.g. text, radio, checkbox, submit).',
      'The <label> element defines a label for several form elements, useful for screen-reader accessibility.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; background-color: #f8fafc;">
  <div style="max-width: 400px; margin: auto; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    <h2 style="margin-top: 0; color: #1e293b;">Sign Up Form</h2>
    <form onsubmit="event.preventDefault(); alert('Form Submitted! Hello, ' + document.getElementById('fname').value)">
      <label for="fname" style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px; color: #475569;">First name:</label>
      <input type="text" id="fname" name="fname" placeholder="Enter first name" style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
      
      <label for="email" style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px; color: #475569;">Email address:</label>
      <input type="email" id="email" name="email" placeholder="Enter email" style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
      
      <input type="submit" value="Submit Form" style="background: #2563eb; color: white; border: none; width: 100%; padding: 10px; border-radius: 6px; cursor: pointer; font-weight: bold;">
    </form>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-form-attributes',
    title: 'HTML Form Attributes',
    description: 'This chapter describes the different attributes for the HTML <form> element.',
    explanation: [
      'The action attribute defines the action to be performed when the form is submitted.',
      'The method attribute specifies the HTTP method (GET or POST) to be used when submitting the form data.',
      'The target attribute specifies if the submitted result will open in a new browser tab, frame, or current window.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Form Attributes</h2>
  <form onsubmit="event.preventDefault(); alert('Submitting form...')" action="/action_page.php" method="post" target="_blank">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John" style="padding: 6px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 5px;"><br><br>
    <input type="submit" value="Submit via POST" style="background: #2563eb; color: white; padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer;">
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-form-elements',
    title: 'HTML Form Elements',
    description: 'This chapter describes all the different HTML form elements.',
    explanation: [
      '<input> is the most common form element.',
      '<label> defines a label for form elements.',
      '<select> defines a drop-down list.',
      '<textarea> defines a multi-line input field.',
      '<button> defines a clickable button.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Form Elements</h2>
  <form>
    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars" style="padding: 6px; border-radius: 4px; border: 1px solid #cbd5e1;">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
    <br><br>
    <label for="subject">Review Comments:</label><br>
    <textarea id="subject" name="subject" placeholder="Write something..." style="width: 100%; height: 100px; padding: 10px; border-radius: 6px; border: 1px solid #cbd5e1; margin-top: 5px;"></textarea>
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-input-types',
    title: 'HTML Input Types',
    description: 'This chapter describes the different input types for the <input> element.',
    explanation: [
      'The default value for the type attribute is \'text\'.',
      'Standard input types: text, password, submit, radio, checkbox, button, color, date, email, number, range, search, tel, url.',
      'Using correct input types allows mobile devices to show the optimal onscreen virtual keyboard.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Input Types</h2>
  <form>
    <label for="bday">Select Birth Date:</label><br>
    <input type="date" id="bday" name="bday" style="padding: 6px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 5px;"><br><br>
    
    <label for="favcolor">Select Favorite Color:</label><br>
    <input type="color" id="favcolor" name="favcolor" style="padding: 2px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 5px; width: 50px;"><br><br>
    
    <label for="vol">Volume Slider (between 0 and 50):</label><br>
    <input type="range" id="vol" name="vol" min="0" max="50" style="margin-top: 5px;">
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-input-attributes',
    title: 'HTML Input Attributes',
    description: 'This chapter describes the different attributes for the HTML <input> element.',
    explanation: [
      'value attribute specifies an initial value for an input field.',
      'readonly attribute specifies that an input field is read-only (cannot be changed).',
      'disabled attribute specifies that an input field is disabled (not clickable or editable).',
      'maxlength, min, max, placeholder, required, step, and pattern are other very common attributes.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Input Attributes</h2>
  <form>
    <label for="fname">Required Name Input:</label><br>
    <input type="text" id="fname" name="fname" placeholder="Enter name" required style="padding: 6px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 5px;"><br><br>
    
    <label for="quantity">Disabled input element:</label><br>
    <input type="number" id="quantity" name="quantity" value="10" disabled style="padding: 6px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 5px;">
  </form>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-input-form-attributes',
    title: 'Input Form Attributes',
    description: 'This chapter describes the form* attributes of the <input> element.',
    explanation: [
      'The form attribute specifies one or more forms the <input> element belongs to, meaning the input can be located outside the actual form element!',
      'formaction attribute specifies the URL of the file that will process the input when the form is submitted (overrides form action).',
      'formmethod, formtarget, and formnovalidate are other overrides.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Input Form Attribute Example</h2>
  <form id="form1" action="/action_page.php">
    <label for="fname">First name inside the form:</label><br>
    <input type="text" id="fname" name="fname" style="padding: 6px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 5px;"><br><br>
    <input type="submit" value="Submit" style="background: #2563eb; color: white; padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer;">
  </form>
  <p>The input below is located outside of the form element, but is still part of the form!</p>
  <label for="lname">Last name outside the form:</label><br>
  <input type="text" id="lname" name="lname" form="form1" style="padding: 6px; border-radius: 4px; border: 1px solid #cbd5e1; margin-top: 5px;">
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-canvas',
    title: 'HTML Canvas',
    description: 'The HTML <canvas> element is used to draw graphics, on the fly, via scripting (usually JavaScript).',
    explanation: [
      'The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics.',
      'Canvas has several methods for drawing paths, boxes, circles, text, and adding images.',
      'Supports hardware-accelerated 2D and WebGL pixel contexts.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML5 Canvas Drawing</h2>
  <canvas id="canvasOne" width="200" height="100" style="border: 1px solid #cbd5e1; border-radius: 8px; margin: auto; display: block;"></canvas>
  <script>
    const c = document.getElementById("canvasOne");
    const ctx = c.getContext("2d");
    // Draw a beautiful red-to-blue gradient
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 180, 80);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-svg',
    title: 'HTML SVG',
    description: 'SVG defines XML-based vector graphics that scale beautifully without pixelation.',
    explanation: [
      'SVG stands for Scalable Vector Graphics.',
      'SVG is used to define vector-based graphics for the Web.',
      'SVG is defined in XML format. Every element and attribute in SVG files can be animated or styled with CSS.',
      'Unlike Canvas, SVG has a DOM (Document Object Model) node for each drawn element.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML SVG Graphics</h2>
  <svg width="100" height="100" style="margin: auto; display: block;">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    Sorry, your browser does not support inline SVG.
  </svg>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-media-formats',
    title: 'HTML Media',
    description: 'Multimedia on the web can be sound, music, videos, movies, and animations.',
    explanation: [
      'The first web browsers had support for text and limited colors only. Later, support for images, sounds, and video clips was added.',
      'Multimedia elements are stored in media files (MP3, MP4, WebM, OGV, WAV, etc.).',
      'Modern HTML5 has rich built-in support for video and audio without requiring external player plug-ins.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML Multimedia</h2>
  <p>Multimedia files can be loaded using standard HTML5 media tags or embedded players.</p>
  <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
    <strong>Supported Formats:</strong>
    <ul>
      <li>Video: MP4, WebM, Ogg</li>
      <li>Audio: MP3, WAV, Ogg</li>
    </ul>
  </div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-video',
    title: 'HTML Video',
    description: 'The HTML <video> element is used to show a video on a web page.',
    explanation: [
      'The controls attribute adds video controls, like play, pause, and volume.',
      'It is a good practice to always include width and height attributes.',
      'The <source> element allows you to specify alternative video files which the browser may choose from.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Video</h2>
  <video width="320" height="240" controls style="border-radius: 12px; border: 1px solid #cbd5e1; outline: none; max-width: 100%;">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-audio',
    title: 'HTML Audio',
    description: 'The HTML <audio> element is used to play an audio file on a web page.',
    explanation: [
      'The controls attribute adds audio controls, like play, pause, and volume.',
      'The <source> element allows you to specify alternative audio files which the browser may choose from.',
      'The text between the <audio> and </audio> tags will only be displayed in browsers that do not support the audio element.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Audio Player</h2>
  <audio controls style="outline: none;">
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-plugins',
    title: 'HTML Plug-ins',
    description: 'Helper applications (plug-ins) are computer programs that extend the standard functionality of a web browser.',
    explanation: [
      'Plug-ins can be used for many purposes: play music, view maps, verify bank credentials, etc.',
      'The <object> and <embed> elements are used to embed multimedia elements or external interactive applications.',
      'Most modern browsers have stopped supporting Java Applets and Flash plug-ins. HTML5 is preferred instead.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Embedding with Object</h2>
  <p>You can embed interactive graphics or external documents:</p>
  <object data="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" type="image/svg+xml" width="100" height="100" style="margin: auto; display: block;">
    Your browser does not support object embedding.
  </object>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-youtube',
    title: 'HTML YouTube',
    description: 'The easiest way to play videos in HTML is to use YouTube.',
    explanation: [
      'To play your video on a web page, you can upload the video to YouTube and embed it.',
      'YouTube will return an id (like tgbNymZ7vqY), which you can use in an <iframe> container.',
      'Add parameters to the URL in src to configure autoplay, loop, mute, or controls.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML YouTube Video Embed</h2>
  <p>Using YouTube is the easiest, most robust way to stream video clips:</p>
  <iframe width="100%" height="240" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="YouTube video player" style="border: none; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 400px; margin: auto; display: block;"></iframe>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-web-apis',
    title: 'HTML Web APIs',
    description: 'Web APIs allow web applications to interact with browser features and external devices.',
    explanation: [
      'A Web API can extend the functionality of the browser, simplify complex functions, and ease the execution.',
      'Common Web APIs: Geolocation API, Drag and Drop API, LocalStorage/SessionStorage, Web History API.',
      'JavaScript interacts with these APIs through global window or navigator objects.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Web APIs</h2>
  <p>Modern browsers include rich APIs built-in. Click below to view the browser history state:</p>
  <button onclick="alert('Browser History length: ' + window.history.length)" style="padding: 10px 20px; background-color: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
    View History Length
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-geolocation',
    title: 'HTML Geolocation',
    description: 'The HTML Geolocation API is used to locate a user\'s geographical position.',
    explanation: [
      'Since this can compromise privacy, the position is not available unless the user approves it.',
      'Use the navigator.geolocation.getCurrentPosition() method to return the user\'s position.',
      'Returns coordinates (Latitude and Longitude) and accuracy ranges.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Geolocation</h2>
  <p>Click the button to get your current coordinates (requires user permission):</p>
  <button onclick="getLocation()" style="padding: 10px 20px; background-color: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
    Get Coordinates
  </button>
  <p id="demo" style="margin-top: 15px; font-weight: bold;"></p>
  <script>
    const x = document.getElementById("demo");
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }
    function showError(error) {
      x.innerHTML = "User denied Geolocation or permission error: " + error.message;
    }
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-drag-and-drop',
    title: 'HTML Drag and Drop',
    description: 'Drag and drop is a very common feature where you grab an object and drag it to a different location.',
    explanation: [
      'To make an element draggable, set the draggable="true" attribute.',
      'Drag-and-drop utilizes standard event handlers: ondragstart, ondragover, ondrop.',
      'Use the event.dataTransfer object to pass information between the dragged element and target dropzone.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .div1 { width: 100px; height: 100px; padding: 10px; border: 1px dashed #aaaaaa; border-radius: 12px; margin: 10px auto; display: inline-block; vertical-align: top; }
  </style>
  <script>
    function allowDrop(ev) { ev.preventDefault(); }
    function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
    function drop(ev) { ev.preventDefault(); const data = ev.dataTransfer.getData("text"); ev.target.appendChild(document.getElementById(data)); }
  </script>
</head>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Drag and Drop</h2>
  <div class="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div id="drag1" draggable="true" ondragstart="drag(event)" style="width: 80px; height: 80px; background-color: #3b82f6; color: white; border-radius: 8px; cursor: move; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">
      Drag Me
    </div>
  </div>
  <div class="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-web-storage',
    title: 'HTML Web Storage',
    description: 'With web storage, web applications can store data locally within the user\'s browser.',
    explanation: [
      'HTML web storage is better than cookies: storage limit is far larger (at least 5MB) and info is never transferred to the server.',
      'localStorage - stores data with no expiration date. The data will not be deleted when the browser is closed.',
      'sessionStorage - stores data for one session. The data is deleted when the user closes the specific browser tab.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML LocalStorage API</h2>
  <p>Click the button to count page clicks across refreshes:</p>
  <button onclick="clickCounter()" style="padding: 10px 20px; background-color: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
    Click Me!
  </button>
  <div id="result" style="margin-top: 15px; font-weight: bold; font-size: 18px; color: #1e3a8a;"></div>
  <script>
    function clickCounter() {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s) in this session.";
    }
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-web-workers',
    title: 'HTML Web Workers',
    description: 'A web worker is a JavaScript running in the background, without affecting the performance of the page.',
    explanation: [
      'When executing scripts in an HTML page, the page can become unresponsive until the script is finished.',
      'A web worker runs independently of other scripts, in the background. You can continue to interact with the page normally.',
      'Web workers communicate with the main thread using messages.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Web Workers</h2>
  <p>Count numbers in background: <strong id="result" style="font-size: 24px; color: #2563eb;">0</strong></p>
  <button onclick="startWorker()" style="padding: 8px 16px; background-color: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; margin-right: 5px;">Start Worker</button>
  <button onclick="stopWorker()" style="padding: 8px 16px; background-color: #ef4444; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">Stop Worker</button>
  <script>
    let w;
    function startWorker() {
      if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
          // Inline worker blob definition for sandbox environments
          const blobURL = URL.createObjectURL(new Blob([\`
            let i = 0;
            function timedCount() {
              i = i + 1;
              postMessage(i);
              setTimeout(timedCount, 500);
            }
            timedCount();
          \`], { type: 'application/javascript' }));
          w = new Worker(blobURL);
        }
        w.onmessage = function(event) {
          document.getElementById("result").innerHTML = event.data;
        };
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
      }
    }
    function stopWorker() {
      if (w) {
        w.terminate();
        w = undefined;
      }
    }
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'html-sse',
    title: 'HTML SSE',
    description: 'Server-Sent Events (SSE) allow a web page to get updates from a server automatically.',
    explanation: [
      'A server-sent event is when a web page automatically gets updates from a server.',
      'With Server-Sent Events, the updates come automatically from the server to the web browser.',
      'Use the EventSource object to listen to events dispatched by compatible backend servers.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>HTML Server-Sent Events (SSE)</h2>
  <div id="result" style="background: #f1f5f9; padding: 15px; border-radius: 12px; border: 1px solid #cbd5e1; display: inline-block;">
    Waiting for Server Event Streams...
  </div>
  <script>
    if (typeof(EventSource) !== "undefined") {
      // Emulate EventSource stream inside sandbox since there's no backend stream configured
      document.getElementById("result").innerHTML = "Emulated SSE Connected!<br>Message received: New server update at " + new Date().toLocaleTimeString();
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
    }
  </script>
</body>
</html>`,
    languageId: 'html'
  }
];
