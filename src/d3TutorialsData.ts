import { TutorialTopic } from './cssTutorialsData';

export const D3_TOPICS: TutorialTopic[] = [
  {
    id: 'd3-intro',
    title: 'D3.js Intro',
    description: 'What D3.js is and how it binds raw data to the Document Object Model (DOM) using vectors and HTML.',
    explanation: [
      'D3 stands for Data-Driven Documents.',
      'It is an exceptionally powerful, modular JavaScript library for manipulating browser documents based on data.',
      'D3 enables creating incredibly flexible, complex dynamic visualizations (like SVG charts and network graphs).'
    ],
    code: `<!-- D3 container canvas template -->
<div id="d3-canvas" class="flex items-center justify-center p-6 bg-zinc-950 rounded-xl">
  <!-- D3 will render SVG shapes directly inside this container -->
</div>`,
    languageId: 'html'
  },
  {
    id: 'd3-loading-scripts',
    title: 'D3.js Loading Scripts',
    description: 'How to install and integrate D3.js using CDN scripts or modular imports.',
    explanation: [
      'For fast browser prototypes, you can load the complete D3 library using a script tag referencing cdns.',
      'For npm projects, install the package: npm install d3.',
      'You can also install specific modular packages (e.g., d3-selection, d3-scale) to optimize bundle sizes.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Load entire D3.js library -->
  <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
</head>
<body class="p-4">
  <script>
    console.log("D3 Version:", d3.version);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'd3-selecting-elements',
    title: 'D3.js Selecting Elements',
    description: 'Using d3.select and d3.selectAll to target and manipulate DOM nodes.',
    explanation: [
      'D3 uses CSS selector syntax to find and reference elements in the browser.',
      'd3.select("selector") targets and modifies the first matching DOM element.',
      'd3.selectAll("selector") targets and modifies all matching DOM elements simultaneously (enabling batch changes).'
    ],
    code: `// Change all paragraphs matching the CSS class 'lead' to orange
d3.selectAll("p.lead")
  .style("color", "orange")
  .style("font-weight", "bold");`,
    languageId: 'javascript_prog'
  },
  {
    id: 'd3-appending-elements',
    title: 'D3.js Appending Elements',
    description: 'Dynamically creating and inserting elements using the .append() and .attr() chained methods.',
    explanation: [
      'The .append("elementName") method creates and appends a new element inside the active selection.',
      'You can chain modifiers like .attr("name", "value") and .text("contents") sequentially.',
      'Chaining is an expressive pattern where each method operates on the returned selection object.'
    ],
    code: `d3.select("#container")
  .append("div")
  .attr("class", "alert alert-success")
  .text("This element was appended dynamically using D3!");`,
    languageId: 'javascript_prog'
  },
  {
    id: 'd3-binding-data-rows',
    title: 'D3.js Binding Data Rows',
    description: 'Binding JavaScript arrays to selections using the .data() and .enter() methods.',
    explanation: [
      'D3 matches arrays of data values directly to DOM selections using the .data(array) method.',
      'If there are more data values than existing DOM elements, .enter() identifies the extra placeholders.',
      'You then append elements to these placeholders, creating new nodes for each data item.'
    ],
    code: `const data = [10, 20, 30];

d3.select("body")
  .selectAll("p") // Select placeholder paragraphs (could be empty initially)
  .data(data)
  .enter()
  .append("p") // Appends 3 paragraphs total
  .text(d => "Value: " + d);`,
    languageId: 'javascript_prog'
  },
  {
    id: 'd3-drawing-html-bars',
    title: 'D3.js Drawing HTML Bars',
    description: 'Constructing a simple vertical bar chart using styled HTML div blocks.',
    explanation: [
      'You can build simple HTML charts easily by applying data values directly to CSS properties (like width or height).',
      'Example: setting the height of div bars based on their data values.',
      'Applying Tailwind helper classes can make your bars look clean, modern, and professional.'
    ],
    code: `const ratings = [45, 80, 55, 95, 30];

d3.select("#chart-container")
  .selectAll(".bar")
  .data(ratings)
  .enter()
  .append("div")
  .attr("class", "bg-sky-500 rounded-md text-white p-2 my-1 text-xs transition-all")
  .style("width", d => (d * 3) + "px") // Set width dynamically based on rating value
  .text(d => d + "%");`,
    languageId: 'javascript_prog'
  },
  {
    id: 'd3-svg-visualizations',
    title: 'D3.js SVG Visualizations',
    description: 'Using scaleable SVG elements (rectangles, circles, text labels) to construct vector charts.',
    explanation: [
      'Standard HTML elements are limited. For complex graphs, D3 is paired with SVG (Scalable Vector Graphics).',
      'SVG uses precise coordinate parameters (cx, cy, r for circles; x, y, width, height for rectangles).',
      'You must define width and height limits on the root svg container tag first.'
    ],
    code: `<svg width="400" height="100" id="svg-stage" class="border rounded-lg bg-slate-900"></svg>
<script>
  const data = [50, 150, 250, 350];
  d3.select("#svg-stage")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => d) // Set horizontal coordinates
    .attr("cy", 50)  // Center vertically
    .attr("r", 20)   // Radius
    .attr("fill", "#a78bfa");
</script>`,
    languageId: 'html'
  },
  {
    id: 'd3-dynamic-scales',
    title: 'D3.js Dynamic Scales',
    description: 'Mapping mathematical values into precise pixel values using d3.scaleLinear.',
    explanation: [
      'If your data values are very large (e.g. 1,000 to 1,000,000), they won\'t fit directly on a 500px screen.',
      'Scales map a mathematical input domain into an output layout range (pixel bounds).',
      'd3.scaleLinear() handles linear continuous mappings, while d3.scaleBand() coordinates discrete category distributions.'
    ],
    code: `// Create a scale mapping domain [0, 1000] to range [0, 500] pixels
const xScale = d3.scaleLinear()
  .domain([0, 1000])
  .range([0, 500]);

console.log("Mapped pixel position:", xScale(500)); // Outputs: 250`,
    languageId: 'javascript_prog'
  },
  {
    id: 'd3-adding-graph-axes',
    title: 'D3.js Adding Graph Axes',
    description: 'Rendering readable X and Y graph axis guides using d3.axisBottom and d3.axisLeft.',
    explanation: [
      'D3 includes dedicated utilities (d3.axisBottom, d3.axisLeft) to render axes automatically based on your scale.',
      'To load the axis on the canvas, append a group element (<g>) and call the axis generator inside it.',
      'Axes include customizable ticks, intervals, and labels automatically calculated from your dataset limits.'
    ],
    code: `const scale = d3.scaleLinear().domain([0, 100]).range([0, 300]);
const axis = d3.axisBottom(scale);

d3.select("#svg-stage")
  .append("g")
  .attr("transform", "translate(10, 80)") // Offset the axis positioning
  .call(axis);`,
    languageId: 'javascript_prog'
  }
];
