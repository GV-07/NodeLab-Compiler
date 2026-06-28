import { HTML_TOPICS } from './htmlTutorialsData';
import { CSS_TOPICS } from './cssTutorialsData';
import { JS_TOPICS } from './jsTutorialsData';
import { SQL_TOPICS } from './sqlTutorialsData';
import { PYTHON_TOPICS } from './pythonTutorialsData';
import { JAVA_TOPICS } from './javaTutorialsData';
import { PHP_TOPICS } from './phpTutorialsData';
import { C_TOPICS } from './cTutorialsData';
import { CPP_TOPICS } from './cppTutorialsData';
import { CSHARP_TOPICS } from './csharpTutorialsData';
import { BOOTSTRAP3_TOPICS } from './bootstrap3TutorialsData';
import { BOOTSTRAP4_TOPICS } from './bootstrap4TutorialsData';
import { BOOTSTRAP5_TOPICS } from './bootstrap5TutorialsData';
import { REACT_TOPICS } from './reactTutorialsData';
import { JQUERY_TOPICS } from './jqueryTutorialsData';
import { MYSQL_TOPICS } from './mysqlTutorialsData';
import { XML_TOPICS } from './xmlTutorialsData';
import { TYPESCRIPT_TOPICS } from './typescriptTutorialsData';
import { KOTLIN_TOPICS } from './kotlinTutorialsData';
import { NODE_AND_NEXT_TOPICS } from './nodeAndNextTutorialsData';
import { ANGULARJS_TOPICS } from './angularJSTutorialsData';
import { MONGODB_TOPICS } from './mongoDBTutorialsData';
import { GO_TOPICS } from './goTutorialsData';
import { PARCEL_TOPICS } from './parcelTutorialsData';
import { SWIFT_TOPICS } from './swiftTutorialsData';
import { POSTGRES_TOPICS } from './postgresTutorialsData';
import { PANDAS_TOPICS } from './pandasTutorialsData';
import { NUMPY_TOPICS } from './numpyTutorialsData';
import { ASSEMBLY_TOPICS } from './assemblyTutorialsData';
import { DART_TOPICS } from './dartTutorialsData';
import { R_TOPICS } from './rTutorialsData';
import { RUBY_TOPICS } from './rubyTutorialsData';
import { TAILWIND_TOPICS } from './tailwindTutorialsData';
import { HTMX_TOPICS } from './htmxTutorialsData';
import { VUE_TOPICS } from './vueTutorialsData';
import { MUI_TOPICS } from './muiTutorialsData';
import { SVELTE_TOPICS } from './svelteTutorialsData';
import { ANIMEJS_TOPICS } from './animejsTutorialsData';
import { D3_TOPICS } from './d3TutorialsData';
import { CHARTJS_TOPICS } from './chartjsTutorialsData';
import { BACKBONE_TOPICS } from './backboneTutorialsData';
import { STREAMLIT_TOPICS } from './streamlitTutorialsData';
import { FLASK_TOPICS } from './flaskTutorialsData';
import { FIREBASE_TOPICS } from './firebaseTutorialsData';
import { SQLITE_TOPICS } from './sqliteTutorialsData';
import { QUESTDB_TOPICS } from './questdbTutorialsData';
import { SEABORN_TOPICS } from './seabornTutorialsData';
import { PYTORCH_TOPICS } from './pytorchTutorialsData';
import { TENSORFLOW_TOPICS } from './tensorflowTutorialsData';
import { MATPLOTLIB_TOPICS } from './matplotlibTutorialsData';
import { REDIS_TOPICS } from './redisTutorialsData';
import { SCIKIT_LEARN_TOPICS } from './scikitLearnTutorialsData';

export interface TutorialTopic {
  id: string;
  title: string;
  description: string;
  explanation: string[];
  code: string;
  languageId: string; // e.g., 'html', 'css', 'javascript_prog', 'sql', 'python'
}

export interface TutorialSection {
  id: string;
  title: string;
  iconName: string;
  topics: TutorialTopic[];
}

export const TUTORIAL_SECTIONS: TutorialSection[] = [
  {
    id: 'html',
    title: 'HTML Tutorial',
    iconName: 'html',
    topics: HTML_TOPICS
  },
  {
    id: 'css',
    title: 'CSS Tutorial',
    iconName: 'css',
    topics: CSS_TOPICS
  },
  {
    id: 'js',
    title: 'JavaScript Tutorial',
    iconName: 'js',
    topics: JS_TOPICS
  },
  {
    id: 'sql',
    title: 'SQL Database Tutorial',
    iconName: 'sql',
    topics: SQL_TOPICS
  },
  {
    id: 'python',
    title: 'Python Tutorial',
    iconName: 'python',
    topics: PYTHON_TOPICS
  },
  {
    id: 'java',
    title: 'Java Tutorial',
    iconName: 'java',
    topics: JAVA_TOPICS
  },
  {
    id: 'php',
    title: 'PHP Tutorial',
    iconName: 'php',
    topics: PHP_TOPICS
  },
  {
    id: 'c',
    title: 'C Tutorial',
    iconName: 'c',
    topics: C_TOPICS
  },
  {
    id: 'cpp',
    title: 'C++ Tutorial',
    iconName: 'cpp',
    topics: CPP_TOPICS
  },
  {
    id: 'csharp',
    title: 'C# Tutorial',
    iconName: 'csharp',
    topics: CSHARP_TOPICS
  },
  {
    id: 'android-xml',
    title: 'XML (for Android app)',
    iconName: 'xml',
    topics: [
      {
        id: 'xml-android-intro',
        title: 'XML for Android Layouts',
        description: 'XML defines Android user interfaces with View hierarchy and layout attributes.',
        explanation: [
          'Declares UI widgets such as TextView, Button, and EditText.',
          'Sizing uses layout_width and layout_height, either wrap_content or match_parent.',
          'Attributes like margin and padding control spacing inside layouts.',
          'Views must have unique IDs defined with the @+id/ prefix.'
        ],
        code: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#0f172a"
    android:padding="24dp">

    <TextView
        android:id="@+id/welcome_title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Android UI Playground"
        android:textColor="#38bdf8"
        android:textSize="24sp"
        android:textStyle="bold"
        android:layout_centerInParent="true" />
</RelativeLayout>`,
        languageId: 'xml'
      },
      {
        id: 'xml-android-views',
        title: 'Common Android Views',
        description: 'Common visual elements used to construct a native Android interface.',
        explanation: [
          'TextView: Displays read-only text segment to the user.',
          'ImageView: Displays graphic image assets, drawables, or vector files.',
          'Button: An interactive element triggering controller onClick listeners.',
          'EditText: Input textbox allowing alphanumeric key text entries.'
        ],
        code: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <ImageView
        android:id="@+id/logo_icon"
        android:layout_width="64dp"
        android:layout_height="64dp"
        android:src="@drawable/ic_launcher_foreground" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Enter Username:"
        android:textSize="14sp" />

    <EditText
        android:id="@+id/input_field"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Type here..." />

    <Button
        android:id="@+id/submit_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="SUBMIT" />
</LinearLayout>`,
        languageId: 'xml'
      },
      {
        id: 'xml-android-layouts',
        title: 'Android Layout Types',
        description: 'Layout managers organize children views inside specific positioning flows.',
        explanation: [
          'LinearLayout: Arranges children views in a single column (vertical) or row (horizontal).',
          'RelativeLayout: Arranges elements relative to each other or parent borders.',
          'FrameLayout: Draws a single child or stacks layers on top of each other.',
          'ConstraintLayout: Modern flat layout system aligning items with complex constraints.'
        ],
        code: `<?xml version="1.0" encoding="utf-8"?>
<!-- LinearLayout (Vertical) -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center">

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Upper Item" />

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Lower Item" />
</LinearLayout>`,
        languageId: 'xml'
      },
      {
        id: 'xml-android-attributes',
        title: 'Important XML Attributes',
        description: 'Explore the key XML attributes that control dimensions, positions, and behavior of Android Views.',
        explanation: [
          'android:id - Uniquely identifies the view in Java/Kotlin code.',
          'android:layout_width & android:layout_height - Define physical sizes (wrap_content, match_parent, or explicit dp).',
          'android:background - Specifies a color code or drawable source.',
          'android:padding - Controls spacing internal to the view bounds.',
          'android:layout_margin - Controls spacing external to the view borders.'
        ],
        code: `<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/custom_text"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="#FF4081"
    android:textColor="#FFFFFF"
    android:padding="16dp"
    android:layout_margin="24dp"
    android:text="Styled TextView Element"
    android:gravity="center" />`,
        languageId: 'xml'
      },
      {
        id: 'xml-android-resources',
        title: 'Android XML Resources',
        description: 'Keep text values, colors, styles, and dimensions cleanly separated in dedicated resources.',
        explanation: [
          'strings.xml: Avoid hardcoding string values; reference them with @string/name.',
          'colors.xml: Hold standard HEX values, referenced with @color/name.',
          'styles.xml: Group repeating visual attributes into reusable style sets.'
        ],
        code: `<!-- File: res/values/strings.xml -->
<resources>
    <string name="app_name">My Android App</string>
    <string name="login_btn_label">Sign In Now</string>
    <color name="primary_blue">#3b82f6</color>
    <dimen name="header_text_size">24sp</dimen>
</resources>`,
        languageId: 'xml'
      }
    ]
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS Tutorial',
    iconName: 'css',
    topics: TAILWIND_TOPICS
  },
  {
    id: 'htmx',
    title: 'HTMX Tutorial',
    iconName: 'web',
    topics: HTMX_TOPICS
  },
  {
    id: 'vue',
    title: 'Vue.js Tutorial',
    iconName: 'react',
    topics: VUE_TOPICS
  },
  {
    id: 'mui',
    title: 'Material UI (MUI) Tutorial',
    iconName: 'react',
    topics: MUI_TOPICS
  },
  {
    id: 'svelte',
    title: 'Svelte Tutorial',
    iconName: 'web',
    topics: SVELTE_TOPICS
  },
  {
    id: 'animejs',
    title: 'Anime.js Tutorial',
    iconName: 'js',
    topics: ANIMEJS_TOPICS
  },
  {
    id: 'd3',
    title: 'D3.js Tutorial',
    iconName: 'chart',
    topics: D3_TOPICS
  },
  {
    id: 'chartjs',
    title: 'Chart.js Tutorial',
    iconName: 'chart',
    topics: CHARTJS_TOPICS
  },
  {
    id: 'backbone',
    title: 'Backbone.js Tutorial',
    iconName: 'js',
    topics: BACKBONE_TOPICS
  },
  {
    id: 'streamlit',
    title: 'Streamlit Tutorial',
    iconName: 'python',
    topics: STREAMLIT_TOPICS
  },
  {
    id: 'flask',
    title: 'Flask Tutorial',
    iconName: 'python',
    topics: FLASK_TOPICS
  },
  {
    id: 'firebase',
    title: 'Firebase Tutorial',
    iconName: 'database',
    topics: FIREBASE_TOPICS
  },
  {
    id: 'sqlite',
    title: 'SQLite Tutorial',
    iconName: 'database',
    topics: SQLITE_TOPICS
  },
  {
    id: 'questdb',
    title: 'QuestDB Tutorial',
    iconName: 'database',
    topics: QUESTDB_TOPICS
  },
  {
    id: 'seaborn',
    title: 'Seaborn Tutorial',
    iconName: 'python',
    topics: SEABORN_TOPICS
  },
  {
    id: 'pytorch',
    title: 'PyTorch Tutorial',
    iconName: 'python',
    topics: PYTORCH_TOPICS
  },
  {
    id: 'tensorflow',
    title: 'TensorFlow & Keras Tutorial',
    iconName: 'python',
    topics: TENSORFLOW_TOPICS
  },
  {
    id: 'matplotlib',
    title: 'Matplotlib Tutorial',
    iconName: 'python',
    topics: MATPLOTLIB_TOPICS
  },
  {
    id: 'redis',
    title: 'Redis Tutorial',
    iconName: 'database',
    topics: REDIS_TOPICS
  },
  {
    id: 'scikit-learn',
    title: 'Scikit-Learn Tutorial',
    iconName: 'python',
    topics: SCIKIT_LEARN_TOPICS
  },
  {
    id: 'bootstrap3',
    title: 'Bootstrap 3 Tutorial',
    iconName: 'bootstrap',
    topics: BOOTSTRAP3_TOPICS
  },
  {
    id: 'bootstrap4',
    title: 'Bootstrap 4 Tutorial',
    iconName: 'bootstrap',
    topics: BOOTSTRAP4_TOPICS
  },
  {
    id: 'bootstrap5',
    title: 'Bootstrap 5 Tutorial',
    iconName: 'bootstrap',
    topics: BOOTSTRAP5_TOPICS
  },
  {
    id: 'react',
    title: 'React Tutorial',
    iconName: 'react',
    topics: REACT_TOPICS
  },
  {
    id: 'jquery',
    title: 'jQuery Tutorial',
    iconName: 'jquery',
    topics: JQUERY_TOPICS
  },
  {
    id: 'mysql_tut',
    title: 'MySQL Tutorial',
    iconName: 'mysql',
    topics: MYSQL_TOPICS
  },
  {
    id: 'xml_tut',
    title: 'XML Tutorial',
    iconName: 'xml',
    topics: XML_TOPICS
  },
  {
    id: 'typescript_tut',
    title: 'TypeScript Tutorial',
    iconName: 'ts',
    topics: TYPESCRIPT_TOPICS
  },
  {
    id: 'kotlin_tut',
    title: 'Kotlin Tutorial',
    iconName: 'kotlin',
    topics: KOTLIN_TOPICS
  },
  {
    id: 'node_and_next_tut',
    title: 'Node.js & Next.js',
    iconName: 'node',
    topics: NODE_AND_NEXT_TOPICS
  },
  {
    id: 'angularjs_tut',
    title: 'AngularJS Tutorial',
    iconName: 'angular',
    topics: ANGULARJS_TOPICS
  },
  {
    id: 'mongodb_tut',
    title: 'MongoDB Tutorial',
    iconName: 'mongodb',
    topics: MONGODB_TOPICS
  },
  {
    id: 'go_tut',
    title: 'Go (Golang) Tutorial',
    iconName: 'go',
    topics: GO_TOPICS
  },
  {
    id: 'parcel_tut',
    title: 'Parcel Tutorial',
    iconName: 'parcel',
    topics: PARCEL_TOPICS
  },
  {
    id: 'swift_tut',
    title: 'Swift Tutorial',
    iconName: 'swift',
    topics: SWIFT_TOPICS
  },
  {
    id: 'postgres_tut',
    title: 'PostgreSQL Tutorial',
    iconName: 'postgres',
    topics: POSTGRES_TOPICS
  },
  {
    id: 'pandas_tut',
    title: 'Pandas Tutorial',
    iconName: 'pandas',
    topics: PANDAS_TOPICS
  },
  {
    id: 'numpy_tut',
    title: 'NumPy Tutorial',
    iconName: 'numpy',
    topics: NUMPY_TOPICS
  },
  {
    id: 'assembly_tut',
    title: 'Assembly Language',
    iconName: 'assembly',
    topics: ASSEMBLY_TOPICS
  },
  {
    id: 'dart_tut',
    title: 'Dart Tutorial',
    iconName: 'dart',
    topics: DART_TOPICS
  },
  {
    id: 'r_tut',
    title: 'R Programming',
    iconName: 'r',
    topics: R_TOPICS
  },
  {
    id: 'ruby_tut',
    title: 'Ruby Tutorial',
    iconName: 'ruby',
    topics: RUBY_TOPICS
  }
];

export const QUIZ_QUESTIONS: Record<string, { question: string; options: string[]; answer: string; explanation: string }> = {
  'html-intro': {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
    answer: "Hyper Text Markup Language",
    explanation: "HTML stands for HyperText Markup Language. It describes the structure of Web pages using markup tags."
  },
  'html-elements': {
    question: "Which element is the correct HTML tag for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    answer: "<h1>",
    explanation: "The <h1> tag defines the most important and largest heading in HTML. Headings go from <h1> to <h6> in decreasing order of importance."
  },
  'html-attributes': {
    question: "Which attribute is used to define a link's destination URL in HTML?",
    options: ["src", "href", "link", "target"],
    answer: "href",
    explanation: "The href attribute specifies the URL of the page the link goes to. E.g., <a href='url'>Link</a>."
  },
  'html-forms': {
    question: "Which element is used to gather multiple lines of text input in an HTML form?",
    options: ["<input type='text'>", "<textarea>", "<input type='multiline'>", "<text>"],
    answer: "<textarea>",
    explanation: "<textarea> defines a multi-line input control, whereas <input type='text'> is only for a single line of text."
  },
  'css-intro': {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
    explanation: "CSS stands for Cascading Style Sheets. It controls the styling, layout, and presentation of HTML documents."
  },
  'css-selectors': {
    question: "How do you select an element with the id 'container' in CSS?",
    options: [".container", "#container", "*container", "container"],
    answer: "#container",
    explanation: "The hash symbol (#) is the id selector in CSS, while the dot (.) is the class selector."
  },
  'css-boxmodel': {
    question: "What is the correct order of the CSS Box Model, from the inside out?",
    options: ["Content, Margin, Border, Padding", "Content, Border, Padding, Margin", "Content, Padding, Border, Margin", "Padding, Content, Border, Margin"],
    answer: "Content, Padding, Border, Margin",
    explanation: "The box model consists of: Content (the text/images), surrounded by Padding (inner spacing), then the Border, and finally the Margin (outer spacing)."
  },
  'js-intro': {
    question: "Inside which HTML element do we put the JavaScript code?",
    options: ["<javascript>", "<scripting>", "<js>", "<script>"],
    answer: "<script>",
    explanation: "In HTML, JavaScript code must be placed inside the <script> tag."
  },
  'js-variables': {
    question: "How do you declare a constant variable whose value cannot be reassigned in modern JavaScript?",
    options: ["var", "let", "const", "constant"],
    answer: "const",
    explanation: "The const keyword allows you to declare a read-only variable whose value cannot be reassigned after declaration."
  },
  'js-arrays': {
    question: "How do you add a new item to the end of an array in JavaScript?",
    options: ["arr.push(item)", "arr.pop(item)", "arr.shift(item)", "arr.add(item)"],
    answer: "arr.push(item)",
    explanation: "The push() method adds one or more elements to the end of an array and returns the new length."
  },
  'sql-intro': {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Strong Query Language", "Structured Question Language", "Simple Query Language"],
    answer: "Structured Query Language",
    explanation: "SQL stands for Structured Query Language. It is a standard language for storing, manipulating and retrieving data in databases."
  },
  'sql-select': {
    question: "Which SQL clause is used to select all fields from a table?",
    options: ["SELECT ALL", "SELECT FIELD", "SELECT *", "SELECT DATA"],
    answer: "SELECT *",
    explanation: "The asterisk (*) acts as a wildcard representing all fields (columns) of a table in a SELECT statement."
  },
  'sql-joins': {
    question: "Which SQL JOIN returns all records from the left table, and the matched records from the right table?",
    options: ["INNER JOIN", "FULL JOIN", "LEFT JOIN", "RIGHT JOIN"],
    answer: "LEFT JOIN",
    explanation: "LEFT JOIN returns all records from the left table and any matching rows from the right table. If there is no match, the result contains NULL values on the right side."
  },
  'py-intro': {
    question: "Which of the following is the correct syntax to output 'Hello World' in Python?",
    options: ["echo 'Hello World'", "print('Hello World')", "console.log('Hello World')", "printf('Hello World')"],
    answer: "print('Hello World')",
    explanation: "Python uses the built-in print() function to write output to the console."
  },
  'py-syntax': {
    question: "How does Python define a block of code (like loops or functions)?",
    options: ["Curly braces {}", "Parentheses ()", "Indentation / Whitespace", "Semicolons ;"],
    answer: "Indentation / Whitespace",
    explanation: "Python uses indentation (blank spaces at the start of a line) to determine code block scopes, making the language exceptionally readable."
  },
  'py-lists': {
    question: "Which method is used to append an item to the end of a list in Python?",
    options: ["push()", "add()", "append()", "insert()"],
    answer: "append()",
    explanation: "The append() method adds an item to the end of a list in Python. E.g. list.append(item)."
  },
  'xml-android-intro': {
    question: "Which XML layout attribute is used to make a widget fill the entire width of its parent layout?",
    options: ["android:layout_width='match_parent'", "android:layout_width='wrap_content'", "android:layout_width='fill_width'", "android:layout_width='parent'"],
    answer: "android:layout_width='match_parent'",
    explanation: "'match_parent' tells the view to be as big as its parent. Prior to Android 2.2, this was called 'fill_parent'."
  },
  'java-oop': {
    question: "Which keyword is used in Java to define that a subclass inherits from a superclass?",
    options: ["implements", "extends", "inherits", "super"],
    answer: "extends",
    explanation: "The 'extends' keyword is used in Java class declarations to establish inheritance relations."
  },
  'c-pointers': {
    question: "Which operator is used to get the memory address of a variable in C?",
    options: ["*", "&", "#", "@"],
    answer: "&",
    explanation: "The address-of operator '&' returns the memory address of its operand variable."
  },
  'rust-ownership': {
    question: "What unique mechanism does Rust use to manage memory without a garbage collector?",
    options: ["Reference Counting", "Ownership & Borrowing", "Manual Malloc/Free", "Automatic Defragmentation"],
    answer: "Ownership & Borrowing",
    explanation: "Rust manages memory via a system of ownership with a set of rules that the compiler checks at compile time."
  },
  'react-components': {
    question: "Which hook is used to store and update dynamic state inside a React functional component?",
    options: ["useEffect", "useContext", "useState", "useRef"],
    answer: "useState",
    explanation: "The useState hook is the primary mechanism to define and manipulate local reactive state inside React functional components."
  },
  'tailwindcss-intro': {
    question: "How do you specify horizontal padding of 16px (1rem) using Tailwind CSS class utilities?",
    options: ["padding-x-4", "px-4", "p-x-16", "py-4"],
    answer: "px-4",
    explanation: "In Tailwind CSS, 'px-4' sets padding on the left and right (horizontal axis) to 1rem (16px)."
  },
  'mongodb-intro': {
    question: "Which format is used to store data records inside a MongoDB database?",
    options: ["SQL Tables", "XML Elements", "BSON Documents", "CSV Rows"],
    answer: "BSON Documents",
    explanation: "MongoDB stores data records as BSON documents (Binary JSON), which are highly flexible and schema-less."
  },
  'numpy-basics': {
    question: "What is the primary multi-dimensional array object of the NumPy package?",
    options: ["DataFrame", "ndarray", "Series", "Matrix"],
    answer: "ndarray",
    explanation: "The core data structure of NumPy is the 'ndarray' (n-dimensional array), which is a fast, flexible container for large datasets."
  },
  'd3js-intro': {
    question: "What does the 'D3' in D3.js stand for?",
    options: ["Dynamic Document Design", "Data-Driven Documents", "Decentralized Data Delivery", "Digital Diagram Drafting"],
    answer: "Data-Driven Documents",
    explanation: "D3 stands for Data-Driven Documents. It is a library for manipulating documents based on data."
  }
};
