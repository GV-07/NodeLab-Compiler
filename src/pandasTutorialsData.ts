import { TutorialTopic } from './cssTutorialsData';

export const PANDAS_TOPICS: TutorialTopic[] = [
  {
    id: 'pandas-home',
    title: 'Pandas HOME',
    description: 'Welcome to Pandas! Pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation library for Python.',
    explanation: [
      'Pandas stands for "Panel Data" or "Python Data Analysis".',
      'It offers two primary data structures: Series (1D) and DataFrame (2D).',
      'Provides powerful tools for clean alignment, missing-value recovery, indexing, and slicing.'
    ],
    code: `import pandas as pd

mydataset = {
  'cars': ["BMW", "Volvo", "Ford"],
  'passings': [3, 7, 2]
}

myvar = pd.DataFrame(mydataset)
print(myvar)`,
    languageId: 'python'
  },
  {
    id: 'pandas-intro',
    title: 'Pandas Intro',
    description: 'Learn why Pandas is the standard choice for data science pipelines.',
    explanation: [
      'Pandas allows us to analyze big data and make conclusions based on statistical theories.',
      'Can clean messy datasets, make them readable, and find correlations or distributions.'
    ],
    code: `import pandas as pd

# Pandas handles massive, multi-column datasets with ease
print(pd.__version__)`,
    languageId: 'python'
  },
  {
    id: 'pandas-get-started',
    title: 'Pandas Get Started',
    description: 'Install Pandas using pip and import it into your workspace environment.',
    explanation: [
      'To install Pandas, run: pip install pandas.',
      'Import it under the standard pd alias: import pandas as pd.'
    ],
    code: `import pandas as pd

# Verify loading
data = [1, 5, 9]
df = pd.Series(data)
print(df)`,
    languageId: 'python'
  },
  {
    id: 'pandas-series',
    title: 'Pandas Series',
    description: 'Declare, label, and access one-dimensional Pandas Series objects.',
    explanation: [
      'A Pandas Series is like a column in a table.',
      'It is a one-dimensional array holding data of any type.',
      'You can specify custom index labels to access elements.'
    ],
    code: `import pandas as pd

calories = {"day1": 420, "day2": 380, "day3": 390}

myvar = pd.Series(calories)
print(myvar["day1"])`,
    languageId: 'python'
  },
  {
    id: 'pandas-dataframes',
    title: 'Pandas DataFrames',
    description: 'Create multi-dimensional, labeled DataFrames from dictionaries.',
    explanation: [
      'A Pandas DataFrame is a 2-dimensional data structure, like a 2D array or a table with rows and columns.'
    ],
    code: `import pandas as pd

data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}

df = pd.DataFrame(data, index = ["day1", "day2", "day3"])
print(df.loc["day1"])`,
    languageId: 'python'
  },
  {
    id: 'pandas-read-csv',
    title: 'Pandas Read CSV',
    description: 'Load comma-separated files into DataFrames using read_csv().',
    explanation: [
      'CSV (Comma-Separated Values) files are a simple way to store big datasets.',
      'Use pd.read_csv() to load them instantly into a DataFrame.'
    ],
    code: `import pandas as pd

# Load CSV file (conceptual path)
# df = pd.read_csv('data.csv')

# Print the entire DataFrame string representation:
# print(df.to_string())`,
    languageId: 'python'
  },
  {
    id: 'pandas-read-json',
    title: 'Pandas Read JSON',
    description: 'Parse structured JSON files or dictionaries using read_json().',
    explanation: [
      'Big data sets are often stored or analyzed as JSON.',
      'Pandas reads JSON files seamlessly, preserving nested dictionary schemas.'
    ],
    code: `import pandas as pd

# Load JSON file (conceptual path)
# df = pd.read_json('data.json')
# print(df.head())`,
    languageId: 'python'
  },
  {
    id: 'pandas-analyzing',
    title: 'Pandas Analyzing Data',
    description: 'Inspect datasets using .head(), .tail(), and .info() methods.',
    explanation: [
      'The head() method returns the headers and a specified number of rows (default is 5).',
      'The tail() method returns the last rows of a DataFrame.',
      'The info() method gives you a detailed summary of the dataset schema.'
    ],
    code: `import pandas as pd

# Assuming df is loaded
# print(df.head(10)) # view first 10 rows
# print(df.info())    # view row count, null statuses, and column types`,
    languageId: 'python'
  },
  {
    id: 'pandas-cleaning',
    title: 'Pandas Cleaning Data',
    description: 'Clean data by repairing empty cells, bad formats, wrong values, and duplicates.',
    explanation: [
      'Data cleaning means fixing bad data in your dataset.',
      'Bad data could be: Empty cells, Data in wrong format, Wrong data, Duplicates.'
    ],
    code: `import pandas as pd

# Cleaning data is crucial before running ML models.
# Bad rows can skew output significantly.`,
    languageId: 'python'
  },
  {
    id: 'pandas-cleaning-empty',
    title: 'Pandas Cleaning Empty Cells',
    description: 'Handle missing cells using dropna() or fillna().',
    explanation: [
      'Empty cells can give you wrong results when analyzing.',
      'Use dropna() to drop rows containing empty values.',
      'Use fillna() to replace empty cells with a default or mean value.'
    ],
    code: `import pandas as pd

# df = pd.read_csv('dirty_data.csv')

# Option 1: Drop empty cells in-place
# df.dropna(inplace = True)

# Option 2: Replace NULL values with 130
# df["Calories"].fillna(130, inplace = True)`,
    languageId: 'python'
  },
  {
    id: 'pandas-cleaning-wrong-format',
    title: 'Pandas Cleaning Wrong Data',
    description: 'Repair cells holding mismatched formats using custom row-level lambdas.',
    explanation: [
      'Sometimes a cell holds a value with an incorrect format or an unrealistic outlier.',
      'Outliers can be resolved by replacing the cell or removing the row entirely.'
    ],
    code: `import pandas as pd

# df.loc[7, 'Duration'] = 45 # Update explicit row outlier

# Or loop to filter outliers:
# for x in df.index:
#   if df.loc[x, "Duration"] > 120:
#     df.loc[x, "Duration"] = 120`,
    languageId: 'python'
  },
  {
    id: 'pandas-duplicates',
    title: 'Pandas Removing Duplicates',
    description: 'Identify and remove identical duplicated rows using drop_duplicates().',
    explanation: [
      'Duplicate rows are rows that have been registered multiple times.',
      'The duplicated() method returns True for every row that is a duplicate.',
      'Use drop_duplicates() to remove duplicate rows.'
    ],
    code: `import pandas as pd

# df = pd.read_csv('data.csv')

# Find duplicates:
# print(df.duplicated())

# Remove duplicates in-place:
# df.drop_duplicates(inplace = True)`,
    languageId: 'python'
  },
  {
    id: 'pandas-correlations',
    title: 'Pandas Correlations',
    description: 'Calculate statistical column correlations using .corr().',
    explanation: [
      'The corr() method calculates the relationship between each column in your dataset.',
      'Returns a correlation matrix from -1 to 1.'
    ],
    code: `import pandas as pd

# df = pd.read_csv('data.csv')
# print(df.corr())`,
    languageId: 'python'
  },
  {
    id: 'pandas-plotting',
    title: 'Pandas Plotting',
    description: 'Generate high-quality charts using Pandas plotting functions integrated with Matplotlib.',
    explanation: [
      'Pandas uses the plot() method to create diagrams.',
      'We can use Pyplot from the Matplotlib library to visualize diagram plots on screen.'
    ],
    code: `import pandas as pd
import matplotlib.pyplot as plt

# df = pd.read_csv('data.csv')
# df.plot(kind = 'scatter', x = 'Duration', y = 'Calories')
# plt.show()`,
    languageId: 'python'
  }
];
