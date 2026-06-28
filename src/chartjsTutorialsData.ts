import { TutorialTopic } from './cssTutorialsData';

export const CHARTJS_TOPICS: TutorialTopic[] = [
  {
    id: 'chartjs-intro',
    title: 'Chart.js Intro',
    description: 'Understand Chart.js, an easy-to-use, flexible HTML5 canvas-based charting library.',
    explanation: [
      'Chart.js is a popular, open-source library that renders responsive charts directly inside HTML5 canvas elements.',
      'It supports 8 different responsive chart types (Line, Bar, Pie, Radar, Scatter, etc.) with clean animation styles.',
      'It handles coordinate math, grid lines, tooltips, and legends automatically based on your configuration.'
    ],
    code: `<!-- Chart.js display container layout -->
<div class="p-4 bg-white rounded-lg shadow max-w-md mx-auto">
  <canvas id="intro-chart-canvas"></canvas>
</div>`,
    languageId: 'html'
  },
  {
    id: 'chartjs-install-canvas',
    title: 'Chart.js Installation & Canvas',
    description: 'Setting up Chart.js using script tags and creating your first root chart instance.',
    explanation: [
      'For quick testing, import Chart.js from a CDN. For npm projects, install the package: npm install chart.js.',
      'Create an HTML <canvas> element on the page, grab its context using JS, and instantiate the Chart class.',
      'You must specify the chart type, labels, dataset values, and layout configurations.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="p-4">
  <canvas id="myChart" width="400" height="200"></canvas>
  <script>
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{ data: [12, 19, 3] }]
      }
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'chartjs-scatter-plots',
    title: 'Chart.js Scatter Plots',
    description: 'Rendering bivariate coordinates using a scatter chart.',
    explanation: [
      'A scatter plot displays the relationship between two numerical variables.',
      'In Chart.js, specify type: \'scatter\' and supply data as an array of objects containing x and y coordinates.',
      'This chart type is excellent for displaying distributions and correlations between values.'
    ],
    code: `new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Height vs Weight',
      data: [
        { x: 160, y: 60 },
        { x: 170, y: 70 },
        { x: 180, y: 80 }
      ],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'chartjs-line-charts',
    title: 'Chart.js Line Charts',
    description: 'Displaying trends and chronological data points over time with line charts.',
    explanation: [
      'Line charts are ideal for displaying values over sequential intervals (like dates or months).',
      'You can customize fill options, borders, and curved line tensions (tension: 0.4 for smooth waves).',
      'Supply labels representing horizontal coordinates, and data representing points.'
    ],
    code: `new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Monthly Growth',
      data: [65, 59, 80],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'chartjs-bar-charts',
    title: 'Chart.js Bar Charts',
    description: 'Comparing categorical metrics side-by-side using vertical or horizontal bar charts.',
    explanation: [
      'Bar charts compare categorical quantities using solid rectangular blocks.',
      'You can switch to a horizontal bar chart by setting the option indexAxis: \'y\'.',
      'You can also stack datasets using the stacked: true configuration option on axes scales.'
    ],
    code: `new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      label: 'Revenue ($)',
      data: [12000, 19000, 3000],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1
    }]
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'chartjs-pie-charts',
    title: 'Chart.js Pie Charts',
    description: 'Displaying proportions of a whole using a segmented pie circle.',
    explanation: [
      'Pie charts represent percentage shares of a static total.',
      'Each segment corresponds to a data item, sized dynamically according to its weight.',
      'Make sure to provide distinct colors for each slice to ensure clear legibility.'
    ],
    code: `new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Chrome', 'Safari', 'Firefox'],
    datasets: [{
      data: [65, 20, 15],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
    }]
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'chartjs-doughnut-charts',
    title: 'Chart.js Doughnut Charts',
    description: 'Creating elegant, modern doughnut charts with a hollow center.',
    explanation: [
      'Doughnut charts function exactly like pie charts but feature a hollow central circle.',
      'This provides a clean, modern aesthetic preferred in web layouts.',
      'You can adjust the cutout percentage using options, e.g. cutout: \'70%\'.'
    ],
    code: `new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Pending'],
    datasets: [{
      data: [85, 15],
      backgroundColor: ['#10b981', '#f59e0b']
    }]
  },
  options: {
    cutout: '70%' // Width of hollow center
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'chartjs-bubble-charts',
    title: 'Chart.js Bubble Charts',
    description: 'Displaying three dimensions of data simultaneously using bubble sizes.',
    explanation: [
      'A bubble chart display is a scatter plot variation where each point has an explicit size radius.',
      'The data points accept x and y coordinates, and a third parameter \'r\' representing the bubble size.',
      'This allows plotting three dimensions of a single data metric on a simple 2D canvas.'
    ],
    code: `new Chart(ctx, {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'Market Share Analysis',
      data: [
        { x: 20, y: 30, r: 15 }, // Large bubble
        { x: 40, y: 10, r: 5 }   // Small bubble
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.6)'
    }]
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'chartjs-radar-charts',
    title: 'Chart.js Radar Charts',
    description: 'Comparing multi-variate metrics on a spider-web layout grid.',
    explanation: [
      'Radar (spider-web) charts display comparisons of multiple quantitative variables.',
      'Ideal for analyzing features of a single entity (like player attributes in gaming, or product features).',
      'Points represent values on independent axes radiating from a central coordinate.'
    ],
    code: `new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Strength', 'Agility', 'Speed', 'Stamina'],
    datasets: [{
      label: 'Athlete A',
      data: [90, 75, 80, 85],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)'
    }]
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'chartjs-mixed-charts',
    title: 'Chart.js Mixed Charts',
    description: 'Combining multiple visual chart types (like line and bar datasets) on a single canvas stage.',
    explanation: [
      'Mixed charts let you render distinct styles (e.g., line overlaying a bar) on a unified set of scales.',
      'Specify the individual type inside each dataset object to override the root chart default style.',
      'Excellent for showing correlation trends alongside categorical volume comparison lists.'
    ],
    code: `new Chart(ctx, {
  type: 'bar', // Root chart default type
  data: {
    labels: ['Q1', 'Q2', 'Q3'],
    datasets: [
      {
        type: 'line', // Override type to Line
        label: 'Trend Line',
        data: [100, 150, 200],
        borderColor: '#f43f5e'
      },
      {
        label: 'Sales Volume',
        data: [90, 160, 180],
        backgroundColor: '#3b82f6'
      }
    ]
  }
});`,
    languageId: 'javascript_prog'
  }
];
