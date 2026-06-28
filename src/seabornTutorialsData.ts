import { TutorialTopic } from './cssTutorialsData';

export const SEABORN_TOPICS: TutorialTopic[] = [
  {
    id: 'seaborn-intro',
    title: 'Seaborn Intro',
    description: 'Learn Seaborn, an exceptional Python data visualization library based on Matplotlib that renders beautiful statistical graphics.',
    explanation: [
      'Seaborn provides a high-level API to draw highly polished, attractive statistical charts.',
      'It integrates tightly with Pandas DataFrames, handling column mappings and label titles automatically.',
      'It comes with built-in statistical estimators, theme presets, and color palettes ready to use.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

# Load a classic built-in dataset
tips = sns.load_dataset("tips")

# Display a quick preview chart
sns.scatterplot(data=tips, x="total_bill", y="tip")
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'seaborn-installation',
    title: 'Seaborn Installation',
    description: 'Setting up dependencies and installing Seaborn.',
    explanation: [
      'Seaborn requires Python alongside packages like NumPy, Pandas, and Matplotlib.',
      'Install Seaborn using pip: pip install seaborn.',
      'Always import matplotlib.pyplot alongside Seaborn to configure canvas layouts and display windows.'
    ],
    code: `# Command to install seaborn in virtual environment
pip install seaborn`,
    languageId: 'python'
  },
  {
    id: 'seaborn-aesthetics',
    title: 'Seaborn Plotting Aesthetics (Themes)',
    description: 'Setting dark/light grid styles and scaling themes using sns.set_theme.',
    explanation: [
      'Seaborn allows configuring global chart aesthetics with a single function call: sns.set_theme().',
      'Choose from five predefined grid themes: darkgrid (default), whitegrid, dark, white, and ticks.',
      'Use sns.set_context() to scale fonts and elements for paper, talk, poster, or notebook presentations.'
    ],
    code: `import seaborn as sns

# Set a clean darkgrid theme with talk-scale font sizes
sns.set_theme(style="darkgrid")
sns.set_context("talk")`,
    languageId: 'python'
  },
  {
    id: 'seaborn-palettes',
    title: 'Seaborn Color Palettes',
    description: 'Applying qualitative, sequential, and diverging color palettes.',
    explanation: [
      'Choosing colors in Seaborn is highly robust using the sns.color_palette() utility.',
      'Qualitative palettes (deep, muted, bright) style categorical, unrelated group variables.',
      'Sequential palettes style numeric, ordered ranges, while Diverging palettes emphasize high and low values from a midpoint.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

# Apply a beautiful color palette
sns.set_palette("coolwarm")
sns.palplot(sns.color_palette("coolwarm", 8)) # View palette distribution
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'seaborn-relational',
    title: 'Seaborn Relational Plots (scatterplot, lineplot)',
    description: 'Analyzing relationships between numeric variables using scatterplot, lineplot, and relplot.',
    explanation: [
      'Relational plots study correlations between variables (e.g., how values relate over height or time).',
      'Use sns.scatterplot() to plot individual coordinates, and sns.lineplot() to connect coordinates with lines.',
      'Use sns.relplot(kind="line") as a high-level wrapper to create subplots based on categorical splits.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

flights = sns.load_dataset("flights")
sns.lineplot(data=flights, x="year", y="passengers", hue="month")
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'seaborn-distributions',
    title: 'Seaborn Distribution Plots (histplot, kdeplot)',
    description: 'Visualizing data density distributions using histograms and Kernel Density Estimates (KDE).',
    explanation: [
      'Distribution plots display how data values are spread or grouped across a range.',
      'sns.histplot() counts values inside discrete interval bins to draw a standard histogram.',
      'sns.kdeplot() computes and draws a smooth, continuous probability density curve.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

penguins = sns.load_dataset("penguins")
# Draw distribution histogram with smooth KDE curve overlay
sns.histplot(data=penguins, x="flipper_length_mm", kde=True)
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'seaborn-categorical',
    title: 'Seaborn Categorical Plots (barplot, boxplot, violinplot)',
    description: 'Analyzing metric behaviors across categorical groups.',
    explanation: [
      'Categorical plots compare data quantities across distinct non-numeric groups.',
      'sns.barplot() aggregates data and displays categorical means alongside confidence interval bars.',
      'sns.boxplot() details the five-number summary of values, highlighting median and outlier data points.',
      'sns.violinplot() combines a boxplot with a KDE probability density display to show value distribution shapes.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

titanic = sns.load_dataset("titanic")
sns.boxplot(data=titanic, x="class", y="age", hue="alive")
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'seaborn-regression',
    title: 'Seaborn Regression Plots (lmplot, regplot)',
    description: 'Fitting and displaying linear regression model lines over coordinates.',
    explanation: [
      'Regression plots combine scatter points with a computed linear regression model fit line.',
      'sns.regplot() calculates and renders the linear regression line alongside a shaded confidence interval region.',
      'sns.lmplot() provides a flexible facet grid wrapper to display independent regression lines across separate subplots.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.regplot(data=tips, x="total_bill", y="tip")
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'seaborn-matrix',
    title: 'Seaborn Matrix Plots (heatmap, clustermap)',
    description: 'Rendering correlation tables and matrices using heatmaps.',
    explanation: [
      'Matrix plots display 2D grids of color-coded observations, excellent for displaying core variables correlations.',
      'sns.heatmap() draws a grid of solid colored squares representing values (annot=True displays actual numbers).',
      'sns.clustermap() clusters rows and columns sequentially, re-arranging rows to group related trends.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

# Generate a correlation matrix from tips dataset
tips = sns.load_dataset("tips")
corr = tips.corr(numeric_only=True)

sns.heatmap(corr, annot=True, cmap="coolwarm")
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'seaborn-grids',
    title: 'Seaborn Multi-plot Grids (FacetGrid, PairGrid)',
    description: 'Creating bento grid layouts of subplots automatically using FacetGrid and PairGrid.',
    explanation: [
      'Grid objects construct layouts containing multiple subplot views based on categorical classes.',
      'FacetGrid maps variables to columns and rows, repeating the chart type across separate subplots.',
      'PairGrid compares relationships across all numeric columns simultaneously, drawing a matrix of scatter plots.'
    ],
    code: `import seaborn as sns
import matplotlib.pyplot as plt

iris = sns.load_dataset("iris")
# Draw pairwise distributions across all numeric features
sns.pairplot(iris, hue="species")
plt.show()`,
    languageId: 'python'
  }
];
