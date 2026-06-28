import { TutorialTopic } from './cssTutorialsData';

export const REACT_TOPICS: TutorialTopic[] = [
  {
    id: 'react-intro',
    title: 'React Introduction',
    description: 'Welcome to React! React is a popular open-source JavaScript library for building user interfaces, especially single-page applications.',
    explanation: [
      'React is component-based: You build encapsulated components that manage their own state, then compose them to make complex UIs.',
      'React uses a Virtual DOM to optimize updates, making it extremely fast.',
      'It was created by Jordan Walke, a software engineer at Meta, and is maintained by Meta and a massive community.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    function Welcome() {
      return (
        <div class="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl max-w-sm">
          <h1 class="text-3xl font-black text-sky-400 mb-2">Hello React!</h1>
          <p class="text-slate-400 text-sm">Welcome to the interactive React code sandbox.</p>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Welcome />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-jsx',
    title: 'React JSX',
    description: 'Learn JSX, the syntax extension to JavaScript that lets you write HTML-like structures inside React.',
    explanation: [
      'JSX stands for JavaScript XML.',
      'It allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() methods.',
      'JSX translates into standard React.createElement() calls behind the scenes.',
      'Expressions can be embedded in JSX using curly braces {} syntax.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    function JsxDemo() {
      const username = "Jane Developer";
      const totalTasks = 5;
      
      return (
        <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
          <h2 class="text-lg font-bold">Welcome, {username}!</h2>
          <p class="text-slate-400 text-sm mt-2">Active tasks left: <span class="text-sky-400 font-bold">{totalTasks * 2}</span> (multiplied dynamically)</p>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<JsxDemo />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-components',
    title: 'React Components',
    description: 'Understand how to write, reuse, and organize functional components.',
    explanation: [
      'Components are independent and reusable bits of code.',
      'In modern React, we use Functional Components, which are standard JavaScript functions that return JSX.',
      'Component names MUST start with an uppercase letter (e.g., Header, Card), otherwise React treats them as standard HTML tags.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    // Sub-component 1
    function CardHeader() {
      return <h3 class="text-lg font-bold text-violet-400">Reusable Component</h3>;
    }

    // Sub-component 2
    function CardBody() {
      return <p class="text-slate-400 text-xs mt-1">Nested inside a main wrapper block.</p>;
    }

    // Parent Component
    function MainCard() {
      return (
        <div class="p-5 bg-slate-900 border border-slate-800 rounded-xl">
          <CardHeader />
          <CardBody />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MainCard />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-props',
    title: 'React Props',
    description: 'Learn how to pass read-only parameters (Props) down into child components.',
    explanation: [
      'Props stands for properties.',
      'Props are passed to components via HTML attributes.',
      'React props are read-only! A component must never modify the props it receives from its parent.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center gap-4">
  <div id="root"></div>

  <script type="text/babel">
    // Child component accepting props parameter
    function UserProfile(props) {
      return (
        <div class="p-4 bg-slate-900 border border-slate-800 rounded-lg min-w-[200px]">
          <h4 class="font-bold text-sky-400">{props.name}</h4>
          <p class="text-xs text-slate-500">{props.role}</p>
        </div>
      );
    }

    // Parent component passing props attributes
    function App() {
      return (
        <div class="flex gap-4">
          <UserProfile name="Alice" role="Administrator" />
          <UserProfile name="Bob" role="Lead Developer" />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-state',
    title: 'React State (useState)',
    description: 'Learn useState, the essential hook for creating reactive, component-level state variables.',
    explanation: [
      'State represents data that can change over time inside a component.',
      'We use the useState hook to declare state variables.',
      'useState returns an array with two elements: [currentStateValue, setterFunction].',
      'Calling the setter function schedules a re-render of the component with the updated state.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center shadow-lg">
          <h2 class="text-slate-400 text-sm font-semibold uppercase tracking-wider">Interactive Counter</h2>
          <div class="text-5xl font-black text-white my-4">{count}</div>
          <div class="flex gap-2">
            <button 
              onClick={() => setCount(count - 1)} 
              class="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl transition-all"
            >
              Decrement
            </button>
            <button 
              onClick={() => setCount(count + 1)} 
              class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-2 rounded-xl transition-all"
            >
              Increment
            </button>
          </div>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Counter />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-effect',
    title: 'React Lifecycle (useEffect)',
    description: 'Learn how to handle side effects, fetch data, and clean up listeners using the useEffect hook.',
    explanation: [
      'useEffect lets you perform side effects (data fetching, subscriptions, manual DOM changes) in functional components.',
      'The dependency array (second parameter) controls when the effect runs:',
      '  - No array: runs on every single render.',
      '  - Empty array []: runs exactly once, when the component mounts.',
      '  - [value]: runs when the component mounts, and whenever "value" changes.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    function Clock() {
      const [time, setTime] = useState(new Date().toLocaleTimeString());

      useEffect(() => {
        // Run interval setup on component mount
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Return cleanup function to clear interval on unmount
        return () => clearInterval(timer);
      }, []); // Empty array means run once on mount

      return (
        <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
          <h3 class="text-xs text-slate-500 uppercase font-bold tracking-widest">Dynamic Time Hook</h3>
          <div class="text-3xl font-mono text-emerald-400 mt-2">{time}</div>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Clock />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-events',
    title: 'React Events',
    description: 'Learn click handlers, change listeners, and key controls in React.',
    explanation: [
      'React events are named using camelCase (e.g., onClick instead of onclick).',
      'React event handlers are passed as functions, not strings.',
      'Use event.preventDefault() to block default browser events like page refreshing on form submit.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    function EventDemo() {
      const handleClick = (name) => {
        alert(\`Greetings, \${name}!\`);
      };

      return (
        <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
          <button 
            onClick={() => handleClick("React Developer")}
            class="bg-violet-600 hover:bg-violet-500 text-white font-bold px-4 py-2 rounded-lg transition-all"
          >
            Trigger Event Callback
          </button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<EventDemo />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-conditional',
    title: 'React Conditional Rendering',
    description: 'Incorporate logical IF statements, ternary operators, and logical AND (&&) operations.',
    explanation: [
      'In React, you can conditionally render different JSX blocks based on states or properties.',
      'Methods:',
      '  - Ternary operator (? :) for inline if-else branches.',
      '  - Logical && operator for inline simple true/false indicators.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    function ToggleApp() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      return (
        <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center min-w-[280px]">
          {/* Ternary condition */}
          <h2 class="text-xl font-bold">
            {isLoggedIn ? "Welcome Back!" : "Please Access System"}
          </h2>
          
          <p class="text-xs text-slate-500 mt-2">
            {isLoggedIn && "✔ Connection Established. Database Active."}
          </p>

          <button 
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            class="mt-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-2 rounded-lg transition-all text-xs"
          >
            {isLoggedIn ? "Logout Session" : "Login Session"}
          </button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<ToggleApp />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-lists',
    title: 'React Lists & Keys',
    description: 'Render repeating arrays of elements dynamically and assign unique tracking keys.',
    explanation: [
      'Use the standard .map() array helper to convert lists of items into repeating JSX.',
      'React requires a unique "key" prop on every mapped item to optimize performance and track DOM elements during updates.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    function TodoList() {
      const tasks = [
        { id: 101, text: "Learn JSX syntax parameters", done: true },
        { id: 102, text: "Configure useState state hooks", done: true },
        { id: 103, text: "Implement custom React hooks", done: false }
      ];

      return (
        <div class="p-5 bg-slate-900 border border-slate-800 rounded-xl w-full max-w-sm">
          <h3 class="font-bold text-slate-300 mb-3">Tasks Index Map</h3>
          <ul class="space-y-2">
            {tasks.map(task => (
              <li 
                key={task.id} 
                class="flex items-center justify-between p-2.5 bg-slate-950/40 border border-slate-800/60 rounded-lg text-sm"
              >
                <span class={task.done ? "line-through text-slate-500" : "text-slate-300"}>
                  {task.text}
                </span>
                <span class="text-xs font-mono text-slate-500">{task.id}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<TodoList />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-forms',
    title: 'React Forms',
    description: 'Explore Controlled Components, where React manages input values using state.',
    explanation: [
      'In a controlled component, the input\'s value attribute is set to a state variable.',
      'An onChange handler updates the state whenever the user types, keeping the UI and state perfectly in sync.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    function ControlledForm() {
      const [nameInput, setNameInput] = useState("");

      const handleSubmit = (event) => {
        event.preventDefault(); // Stop page reload
        alert(\`Submitted username key: \${nameInput}\`);
      };

      return (
        <form onSubmit={handleSubmit} class="p-5 bg-slate-900 border border-slate-800 rounded-xl text-center">
          <h3 class="font-bold text-slate-300 mb-3">Controlled Form</h3>
          <input 
            type="text" 
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Type user name..."
            class="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500 mb-3 w-full"
          />
          <button 
            type="submit"
            class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all w-full"
          >
            Submit Username
          </button>
        </form>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<ControlledForm />);
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'react-context',
    title: 'React Context (useContext)',
    description: 'Learn how to share global variables across nested child directories without prop drilling.',
    explanation: [
      'Context provides a way to pass data through the component tree without having to pass props down manually at every level.',
      'Step 1: Create context via const Context = React.createContext();.',
      'Step 2: Wrap component tree with <Context.Provider value={data}>.',
      'Step 3: Access global context data in child elements using the useContext hook.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen flex items-center justify-center">
  <div id="root"></div>

  <script type="text/babel">
    const { createContext, useContext, useState } = React;

    // Create the global ThemeContext
    const ThemeContext = createContext();

    // Deeply nested sub-component accessing global Context variables directly
    function LeafButton() {
      const themeData = useContext(ThemeContext);
      return (
        <button class={\`px-4 py-2 rounded-lg font-bold text-xs transition-all \${themeData === "dark" ? "bg-slate-800 text-white border border-slate-700" : "bg-white text-slate-950 shadow-lg"}\`}>
          Nested Leaf Button ({themeData})
        </button>
      );
    }

    function MiddleCard() {
      return (
        <div class="p-4 bg-slate-950/40 border border-slate-800 rounded-lg">
          <p class="text-xs text-slate-500 mb-2">Middle Component (Zero props passing here!)</p>
          <LeafButton />
        </div>
      );
    }

    function ContextApp() {
      const [theme, setTheme] = useState("dark");

      return (
        <ThemeContext.Provider value={theme}>
          <div class="p-5 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <h3 class="font-bold text-sm mb-3 text-sky-400">Context Provider API</h3>
            <MiddleCard />
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              class="mt-4 text-xs underline text-slate-400 hover:text-white"
            >
              Toggle Global Theme Context
            </button>
          </div>
        </ThemeContext.Provider>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<ContextApp />);
  </script>
</body>
</html>`,
    languageId: 'html'
  }
];
