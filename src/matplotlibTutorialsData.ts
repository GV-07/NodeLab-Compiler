import { TutorialTopic } from './cssTutorialsData';

export const MATPLOTLIB_TOPICS: TutorialTopic[] = [
  {
    id: 'matplotlib-intro',
    title: 'Matplotlib Intro',
    description: 'Learn Matplotlib, a comprehensive Python library for creating static, animated, and interactive visualizations.',
    explanation: [
      'Matplotlib is the foundation of data visualization in the Python ecosystem.',
      'It provides extreme control over every aspect of a chart (axes, ticks, labels, legends, margins).',
      'It is widely used to generate publication-quality figures for journals and dashboard assets.'
    ],
    code: `import matplotlib
print("Matplotlib loaded successfully! Version:", matplotlib.__version__)`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-get-started',
    title: 'Matplotlib Get Started',
    description: 'Installing Matplotlib and rendering your first simple line graph.',
    explanation: [
      'Install Matplotlib in your virtual environment using pip: pip install matplotlib.',
      'Import the pyplot module (conventionally as plt) to coordinate figure outputs.',
      'Use plt.plot() to specify coordinates, and plt.show() to render the graphic window.'
    ],
    code: `import matplotlib.pyplot as plt

# Linear data points
x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

plt.plot(x, y)
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-pyplot',
    title: 'Matplotlib Pyplot',
    description: 'Understanding the state-based interface of matplotlib.pyplot.',
    explanation: [
      'pyplot matches the procedural charting behavior of MATLAB, managing figure states automatically.',
      'Calling functions like plt.title() or plt.xlabel() targets the active figure context.',
      'This state-based engine makes drawing quick, sequential comparisons incredibly easy.'
    ],
    code: `import matplotlib.pyplot as plt

plt.plot([5, 10, 15], [3, 6, 9])
plt.title("Simple Pyplot Graph")
# State calls edit the active graph layout automatically`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-plotting',
    title: 'Matplotlib Plotting (Markers)',
    description: 'Customizing coordinate markers with shapes, colors, and borders.',
    explanation: [
      'Markers emphasize individual data point coordinates on line plots.',
      'Pass the marker parameter to specify shapes (e.g. \'o\' for circles, \'*\' for stars, \'s\' for squares).',
      'You can also control marker dimensions using ms (size) and mec (edge color) modifiers.'
    ],
    code: `import matplotlib.pyplot as plt

# Plot line with custom blue circle markers
plt.plot([1, 2, 3], [4, 5, 6], marker='o', ms=10, mec='blue')
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-line-styles',
    title: 'Matplotlib Line Styles',
    description: 'Configuring custom line styles, thicknesses, and colors.',
    explanation: [
      'You can customize the line appearance using parameters like linestyle (or ls) and color (or c).',
      'Styles include solid (\'-\'), dashed (\'--\'), dotted (\':\'), and dashdot (\'-.\').',
      'Specify lines weights using the linewidth (or lw) numerical parameter.'
    ],
    code: `import matplotlib.pyplot as plt

# Render a red dashed line with 2.5 width
plt.plot([1, 3, 5], [2, 8, 4], ls='--', c='r', lw=2.5)
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-labels-titles',
    title: 'Matplotlib Labels and Titles',
    description: 'Configuring axis labels, title weights, and legend displays.',
    explanation: [
      'Labels are essential for explaining graph dimensions to users.',
      'Use plt.xlabel() and plt.ylabel() to tag horizontal and vertical axes.',
      'Use plt.title() to write the main figure header, and plt.legend() to label multiple overlaying lines.'
    ],
    code: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [10, 20, 30], label="Sales")
plt.xlabel("Month")
plt.ylabel("Revenue ($)")
plt.title("Monthly Performance Graph")
plt.legend()
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-grid-lines',
    title: 'Matplotlib Grid Lines',
    description: 'Adding grid lines and controlling their density, colors, and directions.',
    explanation: [
      'Grid lines help readers locate coordinates across coordinates easily.',
      'Call plt.grid() to overlay grid lines on the active plot.',
      'You can filter axis lines using parameters like axis=\'x\', and customize colors, dash styles, and opacities.'
    ],
    code: `import matplotlib.pyplot as plt

plt.plot([10, 20, 30], [5, 15, 25])
# Add thin, dashed grey horizontal grid lines only
plt.grid(axis='y', color='grey', linestyle='--', linewidth=0.5)
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-subplots',
    title: 'Matplotlib Subplots',
    description: 'Rendering multiple independent charts side-by-side inside a single figure stage.',
    explanation: [
      'Use plt.subplot(rows, cols, index) to split your canvas into a grid of independent subplots.',
      'The index pointer specifies which grid box the subsequent pyplot state calls will draw in.',
      'This allows comparing completely separate metrics or chart styles on a unified screen.'
    ],
    code: `import matplotlib.pyplot as plt

# Subplot 1 (Left side)
plt.subplot(1, 2, 1)
plt.plot([1, 2], [10, 20])
plt.title("Plot A")

# Subplot 2 (Right side)
plt.subplot(1, 2, 2)
plt.plot([1, 2], [30, 40])
plt.title("Plot B")

plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-scatter-plots',
    title: 'Matplotlib Scatter Plots',
    description: 'Comparing numeric relationships and variables using plt.scatter.',
    explanation: [
      'Scatter plots display separate point marks without connecting them with lines.',
      'They are ideal for visualizing clusters, correlations, and general data distributions.',
      'You can map point sizes (s) and color values (c) to columns to display extra metadata.'
    ],
    code: `import matplotlib.pyplot as plt

x = [5, 7, 8, 7, 2, 17]
y = [99, 86, 87, 88, 111, 86]

plt.scatter(x, y, color='purple')
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-bars',
    title: 'Matplotlib Bars',
    description: 'Drawing vertical and horizontal categorical bar charts using plt.bar.',
    explanation: [
      'Categorical bar charts compare static quantities across distinct category classes.',
      'Use plt.bar() to render vertical columns, and plt.barh() to render horizontal bars.',
      'You can customize width, alignment, and individual bar colors to highlight insights.'
    ],
    code: `import matplotlib.pyplot as plt

categories = ['Apples', 'Bananas', 'Oranges']
quantities = [10, 15, 7]

plt.bar(categories, quantities, color='orange', width=0.6)
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-histograms',
    title: 'Matplotlib Histograms',
    description: 'Visualizing data frequency ranges and densities using plt.hist.',
    explanation: [
      'Histograms display distributions of numerical datasets across equal-width intervals (bins).',
      'Use plt.hist() to automatically count frequency counts inside bins and draw columns.',
      'You can customize the number of bins to control detail levels in the visual display.'
    ],
    code: `import matplotlib.pyplot as plt
import numpy as np

# Create 100 random normal values
data = np.random.normal(170, 10, 100)

plt.hist(data, bins=10, color='teal')
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'matplotlib-pie',
    title: 'Matplotlib Pie Charts',
    description: 'Visualizing percentages of a whole using plt.pie.',
    explanation: [
      'Pie charts represent proportions of a static total as circular sectors.',
      'Use plt.pie() and supply a list of sector weights.',
      'You can customize segment labels, start angles, shadow styles, and slice separations using the explode parameter.'
    ],
    code: `import matplotlib.pyplot as plt

shares = [35, 25, 25, 15]
labels = ['Chrome', 'Safari', 'Firefox', 'Edge']
explode = [0.1, 0, 0, 0] # Pop out the Chrome slice

plt.pie(shares, labels=labels, explode=explode, shadow=True)
plt.show()`,
    languageId: 'python'
  }
];
