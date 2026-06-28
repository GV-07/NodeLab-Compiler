import { TutorialTopic } from './cssTutorialsData';

export const STREAMLIT_TOPICS: TutorialTopic[] = [
  {
    id: 'streamlit-intro',
    title: 'Streamlit Intro',
    description: 'Learn how Streamlit transforms Python scripts into interactive, shareable web applications and data dashboards instantly.',
    explanation: [
      'Streamlit is an open-source Python library designed to build web applications without needing HTML/CSS/JS knowledge.',
      'It allows data scientists and developers to create elegant dashboards with very little code.',
      'Whenever the user interacts with an input widget, Streamlit automatically reruns the script from top to bottom with updated state values.'
    ],
    code: `import streamlit as st

st.title("Streamlit Intro")
st.write("Welcome to Streamlit! Build beautiful interactive data applications in Python.")`,
    languageId: 'python'
  },
  {
    id: 'streamlit-installation',
    title: 'Streamlit Installation',
    description: 'Setting up Python virtual environments and installing the Streamlit library.',
    explanation: [
      'Install Streamlit inside your terminal using pip: pip install streamlit.',
      'Launch your server using the run command: streamlit run your_app.py.',
      'Streamlit spins up a local web server (typically on port 8501) and opens a browser tab displaying your application.'
    ],
    code: `# Run this in your terminal command prompt
pip install streamlit
streamlit run app.py`,
    languageId: 'python'
  },
  {
    id: 'streamlit-concepts',
    title: 'Streamlit Main Concepts',
    description: 'Understanding the unique execution model of Streamlit programs.',
    explanation: [
      'Streamlit apps are standard Python scripts that run from top to bottom on load.',
      'When a user changes an input widget (like a slider), Streamlit stores the change and reruns the entire file.',
      'Variables hold their values correctly according to active UI inputs.'
    ],
    code: `import streamlit as st

# Simple state-driven interactive code flow
x = st.slider('Select a value')
st.write('The square of', x, 'is', x * x)`,
    languageId: 'python'
  },
  {
    id: 'streamlit-write-magic',
    title: 'Streamlit Write and Magic',
    description: 'Printing strings, tables, charts, and raw objects using st.write and Magic commands.',
    explanation: [
      'st.write() is the Swiss Army knife of Streamlit outputs. It dynamically formats text, markdown, tables, and charts.',
      'Magic commands mean you can type variables directly on empty script lines, and Streamlit will automatically print them.',
      'This allows exceptionally fast prototyping and interactive analysis loops.'
    ],
    code: `import streamlit as st

st.write("### Heading Support")
st.write({"key": "value", "list": [1, 2, 3]}) # Prints as clean collapsible interactive JSON`,
    languageId: 'python'
  },
  {
    id: 'streamlit-text-elements',
    title: 'Streamlit Text Elements',
    description: 'Formatting page layout headers, captions, titles, markdown, and latex formulas.',
    explanation: [
      'Streamlit provides distinct functions for textual headers to organize layouts: st.title(), st.header(), st.subheader().',
      'Use st.markdown() to render formatted Markdown strings and lists.',
      'Use st.latex() for mathematical notations, and st.caption() for smaller visual footnotes.'
    ],
    code: `import streamlit as st

st.title("Main Portal Title")
st.header("1. Core Analysis")
st.markdown("Use standard **bolding** and *italics* text formatting easily.")`,
    languageId: 'python'
  },
  {
    id: 'streamlit-data-display',
    title: 'Streamlit Data Display (DataFrames, Tables)',
    description: 'Displaying interactive Pandas DataFrames, Static Tables, and Metric widgets.',
    explanation: [
      'st.dataframe() renders interactive, scrollable, sortable spreadsheet tables from Pandas DataFrames.',
      'st.table() renders a static tabular representation of data.',
      'st.metric() is excellent for highlighting key performance indicators (KPIs) with delta indicators (arrows/colors).'
    ],
    code: `import streamlit as st
import pandas as pd

df = pd.DataFrame({
    'Metric': ['Revenue', 'Retention', 'CAC'],
    'Value': [150000, 0.94, 52]
})
st.dataframe(df)
st.metric(label="Monthly active users", value="45,000", delta="+12%")`,
    languageId: 'python'
  },
  {
    id: 'streamlit-chart-elements',
    title: 'Streamlit Chart Elements (Line, Bar, Area)',
    description: 'Displaying quick, responsive line, bar, area, and geographic map charts.',
    explanation: [
      'Streamlit has quick-render native charting functions: st.line_chart(), st.bar_chart(), and st.area_chart().',
      'These charts are responsive and support interactive zooming and tooltips.',
      'You can pass Pandas DataFrames or NumPy matrices directly to these functions to render distributions.'
    ],
    code: `import streamlit as st
import numpy as np

chart_data = np.random.randn(20, 3)
st.line_chart(chart_data) # Renders a 3-line interactive chart`,
    languageId: 'python'
  },
  {
    id: 'streamlit-input-widgets',
    title: 'Streamlit Input Widgets (Buttons, Selectbox, Slider)',
    description: 'Receiving inputs using sliders, dropdown selectors, input fields, and checkboxes.',
    explanation: [
      'Widgets return their state value directly as a Python variable, allowing immediate inline use.',
      'Common widgets: st.button(), st.selectbox() (dropdown), st.slider(), and st.text_input().',
      'If the user changes the widget value, Svelte re-runs the script and updates the returned value.'
    ],
    code: `import streamlit as st

genre = st.selectbox(
    "Select your target genre:",
    ('Comedy', 'Drama', 'Documentary')
)
st.write('You selected:', genre)`,
    languageId: 'python'
  },
  {
    id: 'streamlit-layouts',
    title: 'Streamlit Layouts and Containers (Sidebar, Columns)',
    description: 'Arranging pages with left sidebars, grid columns, and tabs.',
    explanation: [
      'st.sidebar lets you host inputs, filters, and settings inside a toggleable left drawer sidebar.',
      'st.columns() splits your horizontal page width into multiple, custom-sized vertical column blocks.',
      'st.tabs() creates modern tab structures to tuck content away cleanly.'
    ],
    code: `import streamlit as st

col1, col2 = st.columns(2)
with col1:
    st.write("Column 1 Content")
with col2:
    st.write("Column 2 Content")

st.sidebar.selectbox("Global Filter", ["Active", "Archive"])`,
    languageId: 'python'
  },
  {
    id: 'streamlit-status-elements',
    title: 'Streamlit Status Elements (Progress, Progress Bars)',
    description: 'Displaying indicators like loaders, spinners, progress bars, and custom alerts.',
    explanation: [
      'st.progress() creates a visual green horizontal bar reflecting task completion percentages.',
      'st.spinner() displays a loading wheel overlay while executing synchronous python code.',
      'st.success(), st.info(), and st.warning() output colored notification banners for messaging.'
    ],
    code: `import streamlit as st
import time

with st.spinner('Calculating dataset metrics...'):
    time.sleep(2) # Simulate processing
st.success('Calculations complete!')`,
    languageId: 'python'
  },
  {
    id: 'streamlit-pages',
    title: 'Streamlit Pages & Multi-page Apps',
    description: 'Structuring multi-view architectures using pages/ directories.',
    explanation: [
      'Streamlit supports multi-page architectures automatically if you create a pages/ directory.',
      'Each Python file inside pages/ represents a standalone path item listed in the sidebar navigation.',
      'This maintains clean, modular file sizes for larger analytical portals.'
    ],
    code: `app.py              # Main landing page
pages/
  1_Analysis.py     # Listed as "Analysis" page
  2_Database.py     # Listed as "Database" page`,
    languageId: 'python'
  },
  {
    id: 'streamlit-caching',
    title: 'Streamlit Caching Architecture',
    description: 'Optimizing performance by caching database queries and model loads using st.cache_data.',
    explanation: [
      'Since Streamlit runs the script from top to bottom on every click, heavy tasks (like loading datasets) must be optimized.',
      'st.cache_data caches data calculations. Subsequent runs load the cached return value instantly.',
      'st.cache_resource is used to cache heavy global variables like AI model layers or database connection pools.'
    ],
    code: `import streamlit as st
import pandas as pd

@st.cache_data
def load_large_csv():
    df = pd.read_csv("heavy_dataset.csv")
    return df

data = load_large_csv() # Only loads once! Fast reload on changes.`,
    languageId: 'python'
  }
];
