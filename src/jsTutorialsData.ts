import { TutorialTopic } from './cssTutorialsData';

export const JS_TOPICS: TutorialTopic[] = [
  {
    id: 'js-intro',
    title: 'JS Introduction',
    description: 'JavaScript is the lightweight, interpreted, just-in-time compiled programming language of the Web.',
    explanation: [
      'JavaScript (JS) is a dynamic programming language used for web page interactivity.',
      'It was originally developed by Netscape in 1995 as LiveScript, then renamed JavaScript.',
      'Today, JS runs both on client-side browsers and server-side runtimes (like Node.js).'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; text-align: center; padding: 40px;">
  <h2 id="demo">JavaScript Can Change Content</h2>
  <button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JS!'" style="padding: 10px 20px; border: none; background: #3b82f6; color: white; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Click Me!
  </button>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'js-whereto',
    title: 'JS Where To',
    description: 'Learn where to place your JavaScript scripts in an HTML file or import them externally.',
    explanation: [
      'In HTML, JavaScript code is placed between <script> and </script> tags.',
      'Scripts can be placed in the <body>, in the <head> section, or in external files.',
      'External scripts are practical when the same code is used in many different web pages, referencing via src="..." attribute.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script>
    function headScript() {
      alert("Hello from script in the Head section!");
    }
  </script>
</head>
<body style="font-family: sans-serif; text-align: center; padding: 30px;">
  <h2>JS Location Example</h2>
  <button onclick="headScript()" style="padding: 8px 16px; margin: 5px; cursor: pointer;">Call Head Script</button>
  <button onclick="bodyScript()" style="padding: 8px 16px; margin: 5px; cursor: pointer;">Call Body Script</button>

  <script>
    function bodyScript() {
      alert("Hello from script in the Body section!");
    }
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'js-output',
    title: 'JS Output',
    description: 'Explore different ways JavaScript displays or outputs messages and data values.',
    explanation: [
      'JavaScript can display data in different ways:',
      'Writing into an HTML element, using innerHTML.',
      'Writing into the HTML output, using document.write() (only for testing).',
      'Writing into an alert box, using window.alert().',
      'Writing into the browser console, using console.log().'
    ],
    code: `// JS output in programming console
console.log("Output via console.log() - ideal for terminal logging.");
console.warn("This is a warning log!");
console.error("This is an error log!");
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-statements',
    title: 'JS Statements',
    description: 'Learn how statements instruct the browser to perform calculations, controls, and tasks.',
    explanation: [
      'A computer program is a list of "instructions" to be "executed" by a computer.',
      'In a programming language, these programming instructions are called statements.',
      'A JavaScript program is a list of programming statements.',
      'Statements are separated by semicolons.'
    ],
    code: `let x, y, z;    // Statement 1: Declare variables
x = 5;          // Statement 2: Assign value 5 to x
y = 6;          // Statement 3: Assign value 6 to y
z = x + y;      // Statement 4: Compute sum of x and y and assign to z

console.log("Value of z is:", z);
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-syntax',
    title: 'JS Syntax',
    description: 'Learn the strict syntax rules that define well-formed JavaScript programs.',
    explanation: [
      'JavaScript syntax is the set of rules, how JavaScript programs are constructed.',
      'Values can be Literals (fixed values like 10.5, "John") or Variables (dynamic containers).',
      'Operators compute values: + - * /.',
      'JS is case-sensitive: "lastName" and "lastname" are two different variables.'
    ],
    code: `// Number Literals
const basePrice = 19.99;
// String Literals
const item = "Premium Subscription";

// Variable declaration and calculation
let count = 3;
let total = basePrice * count;

console.log("Item:", item);
console.log("Total Price:", total);
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-comments',
    title: 'JS Comments',
    description: 'Explain code, leave reminders, or temporarily disable statements using comments.',
    explanation: [
      'JavaScript comments can be used to explain JavaScript code, and to make it more readable.',
      'Single-line comments start with //.',
      'Multi-line comments start with /* and end with */.'
    ],
    code: `// This is a single-line comment
let userAge = 25;

/*
  The code below calculates the 
  retirement threshold.
  This is a multi-line comment!
*/
let yearsLeft = 65 - userAge;
console.log("Years left until retirement:", yearsLeft);
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-variables',
    title: 'JS Variables',
    description: 'Containers for storing data values. Learn the roles of var, let, and const.',
    explanation: [
      'JavaScript variables can be declared using var, let, or const keywords.',
      'var: Old-style declaration (global/function scoped). Avoid in modern code.',
      'let: Block-scoped mutable variable. Great for values that change over time.',
      'const: Block-scoped immutable constant. Value cannot be reassigned.'
    ],
    code: `const gravity = 9.81; // Cannot be changed
let speed = 0;        // Can be re-assigned

speed = speed + gravity;
console.log("Speed after 1 second:", speed, "m/s");

speed = speed + gravity;
console.log("Speed after 2 seconds:", speed, "m/s");
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-operators',
    title: 'JS Operators',
    description: 'Perform arithmetic, assignment, comparison, and logical evaluations.',
    explanation: [
      'Arithmetic operators perform math: + (addition), - (subtraction), * (multiplication), / (division), % (modulo), ** (exponentiation).',
      'Assignment operators assign values: =, +=, -=, *=.',
      'Logical operators evaluate boolean logic: && (AND), || (OR), ! (NOT).'
    ],
    code: `let x = 10;
x += 5; // x is now 15
let y = 4;
let remainder = x % y; // Modulo calculation

console.log("x is:", x);
console.log("Remainder of x / y is:", remainder);
console.log("Is x greater than y?", x > y);
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-datatypes',
    title: 'JS Data Types',
    description: 'Understand types like String, Number, Boolean, BigInt, Undefined, Null, and Object.',
    explanation: [
      'JavaScript has dynamic typing: variables aren\'t tied to a specific type value.',
      'Primitive Types: String, Number, Boolean, BigInt, Symbol, Undefined, Null.',
      'Complex Types: Object, Array, Date.'
    ],
    code: `const name = "Alice";                     // String
const age = 30;                           // Number
const isStudent = false;                  // Boolean
const skills = ["HTML", "CSS", "JS"];     // Array / Object
const profile = { username: "alice10" };  // Object

console.log("name type:", typeof name);
console.log("age type:", typeof age);
console.log("isStudent type:", typeof isStudent);
console.log("skills is an array?", Array.isArray(skills));
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-functions',
    title: 'JS Functions',
    description: 'Declare reusable blocks of code that execute tasks on command.',
    explanation: [
      'A JavaScript function is a block of code designed to perform a task.',
      'Defined with the function keyword, followed by a name and parentheses ().',
      'Can take parameters as input and return a calculated output using the return keyword.'
    ],
    code: `// Function declaration
function calculateFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

const boilingTemp = calculateFahrenheit(100);
console.log("Boiling point in Fahrenheit:", boilingTemp);
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-objects',
    title: 'JS Objects',
    description: 'Group variables and functions together inside properties and methods.',
    explanation: [
      'Objects are variables too. But objects can contain many values, named as key:value pairs.',
      'Properties are values associated with the object.',
      'Methods are actions that can be performed on objects, defined as function properties.'
    ],
    code: `const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  getSpecs: function() {
    return this.brand + " " + this.model + " (" + this.year + ")";
  }
};

console.log("Car Brand:", car.brand);
console.log("Car Full Specs:", car.getSpecs());
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-events',
    title: 'JS Events',
    description: 'Respond to browser triggers like click, submit, resize, or hover.',
    explanation: [
      'HTML events are "things" that happen to HTML elements.',
      'JavaScript can react to these events using event handler attributes or standard addEventListener methods.'
    ],
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; text-align: center; padding: 40px;">
  <h2>JS Events</h2>
  <button id="alert-btn" style="padding: 10px 20px; background: #ea580c; color: white; border: none; border-radius: 6px; cursor: pointer;">
    Click Me for Event
  </button>
  <script>
    document.getElementById("alert-btn").addEventListener("click", () => {
      alert("Button click event caught!");
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'js-strings',
    title: 'JS Strings & String Methods',
    description: 'Store letters and symbols, and manipulate them using standard string operations.',
    explanation: [
      'Strings are for storing text, wrapped in single or double quotes.',
      'Common methods include: length, slice(), replace(), toUpperCase(), split(), trim().'
    ],
    code: `let text = "Learn JavaScript Today!";
console.log("String Length:", text.length);
console.log("Upper Case:", text.toUpperCase());
console.log("Slice first 5 chars:", text.slice(0, 5));
console.log("Replace Today:", text.replace("Today", "Everyday"));
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-numbers',
    title: 'JS Numbers & Number Methods',
    description: 'Work with integer or decimal values and convert types with built-in helper functions.',
    explanation: [
      'JavaScript has only one type of number. Numbers can be written with, or without, decimals.',
      'Methods include: toString(), toFixed() (decimals rounding), parseInt(), parseFloat().'
    ],
    code: `const pi = 3.14159265;
console.log("PI as String:", pi.toString());
console.log("PI Rounded to 2 decimals:", pi.toFixed(2));
console.log("Parse Int 42.99:", parseInt("42.99"));
console.log("Parse Float 3.14:", parseFloat("3.14"));
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-arrays',
    title: 'JS Arrays & Array Methods',
    description: 'Organize collections of items and iterate/transform lists using modern arrays workflows.',
    explanation: [
      'Arrays are used to store multiple values in a single variable.',
      'Array items are indexed beginning at [0].',
      'Methods include: push(), pop(), shift(), unshift(), join(), map(), filter(), reduce().'
    ],
    code: `const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango"); // Add item to end

console.log("Fruits Array:", fruits);
console.log("Second item:", fruits[1]);

// Transform items with map()
const upperFruits = fruits.map(f => f.toUpperCase());
console.log("Transformed fruits:", upperFruits);
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-dates-math',
    title: 'JS Dates & Math',
    description: 'Solve mathematical calculations and track calendar schedules or timelines.',
    explanation: [
      'The JS Date object lets you work with dates (years, months, days, hours, minutes).',
      'The Math object allows you to perform mathematical tasks on numbers (Math.round, Math.random, Math.sqrt).'
    ],
    code: `const today = new Date();
console.log("Current Date String:", today.toDateString());

// Math calculations
console.log("Square root of 64:", Math.sqrt(64));
console.log("Random decimal [0, 1):", Math.random());
console.log("Math.floor 5.95:", Math.floor(5.95));
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-booleans',
    title: 'JS Booleans',
    description: 'Store truthy or falsy states representing binary conditions.',
    explanation: [
      'A JavaScript Boolean represents one of two values: true or false.',
      'Boolean values are crucial for running control-flow code conditional statements.'
    ],
    code: `const isPremium = true;
const hasDiscount = false;

console.log("isPremium value:", isPremium);
console.log("Boolean of 10 > 9:", Boolean(10 > 9));
console.log("Boolean of empty string:", Boolean("")); // falsy
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-comparisons',
    title: 'JS Comparisons',
    description: 'Learn the difference between loose (==) and strict (===) value comparisons.',
    explanation: [
      'Comparison operators are used in logical statements to determine equality or difference.',
      '== compares values only (loose).',
      '=== compares both the value and the type (strict - recommended).'
    ],
    code: `const x = 5;
const y = "5";

console.log("x == y is:", x == y);   // true (loose check)
console.log("x === y is:", x === y); // false (strict check - different types)
console.log("x !== y is:", x !== y); // true
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-ifelse',
    title: 'JS If Else',
    description: 'Execute different branches of code based on dynamic logical conditions.',
    explanation: [
      'Use if to specify a block of code to be executed, if a specified condition is true.',
      'Use else to specify a block of code to be executed, if the same condition is false.',
      'Use else if to specify a new condition to test, if the first condition is false.'
    ],
    code: `const testScore = 82;
let grade;

if (testScore >= 90) {
  grade = 'A';
} else if (testScore >= 80) {
  grade = 'B';
} else {
  grade = 'C';
}

console.log("Student Grade is:", grade);
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-switch',
    title: 'JS Switch',
    description: 'Evaluate a variable against multiple distinct value cases efficiently.',
    explanation: [
      'The switch statement is used to perform different actions based on different conditions.',
      'Use break to stop execution inside a case block. Use default for cases not matched.'
    ],
    code: `const jobRole = "Developer";

switch (jobRole) {
  case "Designer":
    console.log("User works with Figma.");
    break;
  case "Developer":
    console.log("User works with NodeLab & TypeScript.");
    break;
  default:
    console.log("General employee role.");
}
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-loops',
    title: 'JS Loop For & Loop While',
    description: 'Execute statement loops repeatedly as long as specific conditions remain satisfied.',
    explanation: [
      'Loops can execute a block of code a number of times.',
      'for: Loops through a block of code a specified number of times.',
      'while: Loops through a block of code as long as a specified condition is true.'
    ],
    code: `console.log("--- For Loop Sequence ---");
for (let i = 1; i <= 3; i++) {
  console.log("Iteration:", i);
}

console.log("--- While Loop Sequence ---");
let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++;
}
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-break',
    title: 'JS Break',
    description: 'Stop loop execution entirely or skip single iterations using break and continue.',
    explanation: [
      'The break statement jumps "out" of a loop.',
      'The continue statement jumps "over" one iteration in the loop and continues with the next loop cycle.'
    ],
    code: `console.log("Demonstrate break at i = 3:");
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Stops loop
  }
  console.log("i =", i);
}

console.log("Demonstrate continue on odd numbers:");
for (let j = 0; j < 5; j++) {
  if (j % 2 !== 0) {
    continue; // Skips current block, goes to next j
  }
  console.log("Even j =", j);
}
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-regexp',
    title: 'JS RegExp',
    description: 'Define text patterns using regular expressions for search and input verification.',
    explanation: [
      'A regular expression is a sequence of characters that forms a search pattern.',
      'Used to perform text search and text replace operations.',
      'Syntax: /pattern/modifiers;'
    ],
    code: `const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const sampleEmail = "learn@nodelab.com";
const badEmail = "plainaddress";

console.log("Is sampleEmail valid?", emailPattern.test(sampleEmail));
console.log("Is badEmail valid?", emailPattern.test(badEmail));
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-errors',
    title: 'JS Errors',
    description: 'Catch runtime exceptions gracefully using try, catch, finally, and custom throw statements.',
    explanation: [
      'The try statement lets you test a block of code for errors.',
      'The catch statement lets you handle the error.',
      'The throw statement lets you create custom errors.',
      'The finally statement lets you execute code, after try and catch, regardless of the result.'
    ],
    code: `function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero error!");
  }
  return a / b;
}

try {
  console.log("Dividing 10 by 2:", divide(10, 2));
  console.log("Dividing 10 by 0...");
  divide(10, 0);
} catch (error) {
  console.error("Caught error message:", error.message);
} finally {
  console.log("Calculation attempt finished.");
}
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-scope-hoisting',
    title: 'JS Scope & Hoisting',
    description: 'Learn the lifecycle of variables across scopes and understand declaration hoisting.',
    explanation: [
      'Scope determines the accessibility (visibility) of variables.',
      'Types: Global Scope, Function Scope, and Block Scope (introduced with let/const).',
      'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope.'
    ],
    code: `// Hoisting example: var declaration is hoisted, so x can be read as undefined before assignment
console.log("Hoisted x is:", hoistedVar); // undefined, but no crash
var hoistedVar = "Hello Hoisting";

// Block Scope check
{
  let blockVal = "hidden";
  var globalVal = "accessible";
}
console.log("var is accessible outside block:", globalVal);
// console.log(blockVal); // would trigger ReferenceError!
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-arrow-function',
    title: 'JS Arrow Function',
    description: 'Write concise function callbacks and understand how arrow scopes bind the this keyword.',
    explanation: [
      'Arrow functions allow us to write shorter function syntax.',
      'Syntax: const x = (x, y) => x * y;',
      'Arrow functions do not have their own "this". They inherit the surrounding lexical scope.'
    ],
    code: `// Traditional function
const sumTraditional = function(a, b) {
  return a + b;
};

// Arrow function with implicit return
const sumArrow = (a, b) => a + b;

console.log("Traditional Sum (5+5):", sumTraditional(5, 5));
console.log("Arrow Sum (5+5):", sumArrow(5, 5));
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-classes',
    title: 'JS Classes',
    description: 'Declare object templates and implement standard Object-Oriented patterns.',
    explanation: [
      'JavaScript Classes are templates for JavaScript Objects.',
      'Classes are built on prototypes but provide simpler object-oriented syntax.',
      'Use the class keyword, constructor method, andextends for inheritance.'
    ],
    code: `class Person {
  constructor(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }
}

const user = new Person("Venkatesan", 1972);
console.log("User Name:", user.name);
console.log("User Calculated Age:", user.getAge());
`,
    languageId: 'javascript_prog'
  },
  {
    id: 'js-json',
    title: 'JS JSON',
    description: 'Format or parse JSON text files to exchange lightweight structured datasets.',
    explanation: [
      'JSON stands for JavaScript Object Notation.',
      'JSON is a lightweight format for storing and transporting data.',
      'Convert JS object to string with JSON.stringify(), and convert JSON string back to JS object with JSON.parse().'
    ],
    code: `// Javascript Object
const userObj = { id: 101, username: "nodelab_coder", status: "Active" };

// Serialize
const jsonString = JSON.stringify(userObj);
console.log("Serialized JSON String:", jsonString);

// Deserialize
const parsedObj = JSON.parse(jsonString);
console.log("Parsed Object ID:", parsedObj.id);
`,
    languageId: 'javascript_prog'
  }
];
