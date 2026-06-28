import { TutorialTopic } from './cssTutorialsData';

export const TYPESCRIPT_TOPICS: TutorialTopic[] = [
  {
    id: 'ts-home',
    title: 'TS HOME',
    description: 'Welcome to TypeScript! TypeScript is a strongly typed programming language that builds on JavaScript.',
    explanation: [
      'TypeScript is an open-source language developed and maintained by Microsoft.',
      'It is a strict syntactical superset of JavaScript, meaning all JS is valid TS.',
      'It adds optional static typing to the language, enabling early bug detection in editors.'
    ],
    code: `const message: string = "Hello, TypeScript!";
console.log(message);`,
    languageId: 'typescript'
  },
  {
    id: 'ts-intro',
    title: 'TS Intro',
    description: 'Learn why TypeScript is beneficial for medium and large scale software development.',
    explanation: [
      'JavaScript is dynamically typed - variables can change type during runtime, causing unexpected errors.',
      'TypeScript adds static type checking to catch compiler-level errors before code execution.',
      'Compiles down to plain, highly compatible standard JavaScript.'
    ],
    code: `interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
// user.id = "two"; // Compiler Error: Type 'string' is not assignable to type 'number'.`,
    languageId: 'typescript'
  },
  {
    id: 'ts-get-started',
    title: 'TS Get Started',
    description: 'Configure and run the compiler (tsc) using standard command lines.',
    explanation: [
      'Install TypeScript globally using: npm install -g typescript.',
      'Initialize a config file using: tsc --init.',
      'Compile a file using: tsc file.ts (generates file.js).'
    ],
    code: `// To compile this file:
// tsc app.ts

function greet(person: string) {
  return "Hello, " + person;
}
console.log(greet("Developer"));`,
    languageId: 'typescript'
  },
  {
    id: 'ts-simple-types',
    title: 'TS Simple Types',
    description: 'Master primitive types in TypeScript: boolean, number, and string.',
    explanation: [
      'TypeScript can automatically infer types when variables are declared with a value.',
      'Explicit typing declares the type immediately: let price: number = 99.99;',
      'Implicit typing lets TS guess: let isCompleted = true; (inferred as boolean).'
    ],
    code: `let rating: number = 4.5;
let username: string = "Skyline";
let isActive: boolean = true;

console.log({ rating, username, isActive });`,
    languageId: 'typescript'
  },
  {
    id: 'ts-special-types',
    title: 'TS Special Types',
    description: 'Handle special compiler escape-hatches: any, unknown, never, undefined, and null.',
    explanation: [
      'any disables all type checking. Use sparingly to avoid bypassing TS protections.',
      'unknown is a safe alternative to any. You cannot interact with it without explicit narrowing.',
      'never represents values that will never occur (e.g., functions throwing exceptions).'
    ],
    code: `let val: unknown = "Hello";
if (typeof val === "string") {
  console.log(val.toUpperCase()); // Safe narrowing
}

function throwError(msg: string): never {
  throw new Error(msg);
}`,
    languageId: 'typescript'
  },
  {
    id: 'ts-arrays',
    title: 'TS Arrays',
    description: 'Declare and annotate typed arrays in TypeScript.',
    explanation: [
      'Syntax is type followed by []: const names: string[] = [];',
      'Can also use the generic syntax: const scores: Array<number> = [90, 85];',
      'The readonly keyword prevents arrays from being mutated.'
    ],
    code: `const skills: string[] = ["React", "TypeScript", "Node"];
skills.push("GraphQL");

const readonlyLabels: readonly string[] = ["Main", "Secondary"];
// readonlyLabels.push("New"); // Compiler Error: Property 'push' does not exist on type 'readonly string[]'.`,
    languageId: 'typescript'
  },
  {
    id: 'ts-tuples',
    title: 'TS Tuples',
    description: 'Set up fixed-length, strictly ordered arrays called tuples.',
    explanation: [
      'A tuple is a typed array with a pre-defined length and types for each index.',
      'Excellent for modeling small, coordinate-like static data structures.'
    ],
    code: `// Define our tuple
let responseCode: [number, string];

// Initialize it correctly
responseCode = [200, "OK"];

// responseCode = ["OK", 200]; // Compiler Error! Order is incorrect.`,
    languageId: 'typescript'
  },
  {
    id: 'ts-object-types',
    title: 'TS Object Types',
    description: 'Structure custom objects with required and optional properties.',
    explanation: [
      'Use the ? character to mark object properties as optional.',
      'Objects can specify index signatures to handle dynamic string keys.'
    ],
    code: `const car: { make: string; model: string; year?: number } = {
  make: "Toyota",
  model: "Corolla"
};

// year is optional, so we can set it later:
car.year = 2022;`,
    languageId: 'typescript'
  },
  {
    id: 'ts-enums',
    title: 'TS Enums',
    description: 'Use Enums to represent collections of related named constants.',
    explanation: [
      'Enums allow us to define a set of named constants, either numeric or string-based.',
      'By default, numeric enums start at index 0 and auto-increment.'
    ],
    code: `enum CardinalDirections {
  North = "NORTH",
  East = "EAST",
  South = "SOUTH",
  West = "WEST"
}

let direction = CardinalDirections.North;
console.log("Heading direction:", direction); // Output: NORTH`,
    languageId: 'typescript'
  },
  {
    id: 'ts-aliases-interfaces',
    title: 'TS Type Aliases & Interfaces',
    description: 'Define reusable types using Type Aliases and Interfaces.',
    explanation: [
      'Type aliases are defined with the type keyword and can represent any type shape.',
      'Interfaces are defined with the interface keyword and are open for extension.',
      'Interfaces can be extended using the extends keyword, making them highly modular.'
    ],
    code: `interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myPet: Dog = {
  name: "Buddy",
  breed: "Golden Retriever"
};`,
    languageId: 'typescript'
  },
  {
    id: 'ts-union-types',
    title: 'TS Union Types',
    description: 'Combine multiple types into a single parameter using union types.',
    explanation: [
      'Union types are used when a value can be more than one type.',
      'Represented using the pipe character |.',
      'Useful for supporting both string IDs and numeric IDs.'
    ],
    code: `function printStatusCode(code: string | number) {
  if (typeof code === "string") {
    console.log(\`Code: \${code.toUpperCase()}\`);
  } else {
    console.log(\`Code: \${code}\`);
  }
}

printStatusCode(404);
printStatusCode("not_found");`,
    languageId: 'typescript'
  },
  {
    id: 'ts-functions',
    title: 'TS Functions',
    description: 'Annotate parameter types, return types, and default arguments for functions.',
    explanation: [
      'Function return types can be explicitly annotated after the parameter parentheses.',
      'Use void for functions that do not return any value.',
      'Support rest parameters using standard arrays: ...numbers: number[].'
    ],
    code: `function calculateTotal(price: number, discount = 10): number {
  return price - discount;
}

const logResult = (total: number): void => {
  console.log("Total is:", total);
};

logResult(calculateTotal(100));`,
    languageId: 'typescript'
  },
  {
    id: 'ts-casting',
    title: 'TS Casting',
    description: 'Manually override compiler types using casting (as keyword).',
    explanation: [
      'Casting lets you manually override the type of a variable if you know better than the compiler.',
      'Use the as keyword or the angle-bracket <> syntax.'
    ],
    code: `const rawData: unknown = "Hello World";
const messageLength = (rawData as string).length;

console.log("Length is:", messageLength);`,
    languageId: 'typescript'
  },
  {
    id: 'ts-classes',
    title: 'TS Classes',
    description: 'Add access modifiers to object classes: public, private, protected, and readonly.',
    explanation: [
      'public (default) allows access from anywhere.',
      'private prevents class member access outside the class scope.',
      'protected allows access inside the class and its subclasses.',
      'readonly fields can only be set in the constructor.'
    ],
    code: `class Person {
  private ssn: string;

  constructor(public name: string, ssn: string) {
    this.ssn = ssn;
  }

  public getIdentifier(): string {
    return \`Name: \${this.name}\`;
  }
}

const bob = new Person("Bob", "123-456-789");
console.log(bob.getIdentifier());`,
    languageId: 'typescript'
  },
  {
    id: 'ts-basic-generics',
    title: 'TS Basic Generics',
    description: 'Create highly reusable classes, functions, and interfaces using type parameters.',
    explanation: [
      'Generics allow creating components that can work over a variety of types rather than a single one.',
      'Identified using the angle brackets syntax with type parameter <T>.'
    ],
    code: `function createPair<S, T>(val1: S, val2: T): [S, T] {
  return [val1, val2];
}

const pair = createPair<string, number>("Age", 25);
console.log(pair);`,
    languageId: 'typescript'
  },
  {
    id: 'ts-utility-types',
    title: 'TS Utility Types',
    description: 'Explore built-in helper types like Partial, Required, Readonly, Pick, and Omit.',
    explanation: [
      'Partial<Type> changes all properties to optional.',
      'Required<Type> makes all properties mandatory.',
      'Omit<Type, Keys> constructs a type by picking all properties and then removing Keys.'
    ],
    code: `interface Point {
  x: number;
  y: number;
  label?: string;
}

const updatePoint = (pt: Point, fieldsToUpdate: Partial<Point>): Point => {
  return { ...pt, ...fieldsToUpdate };
};

const result = updatePoint({ x: 10, y: 20 }, { x: 15 });
console.log(result);`,
    languageId: 'typescript'
  },
  {
    id: 'ts-keyof',
    title: 'TS Keyof',
    description: 'Get the exact literal keys of a structured type using the keyof operator.',
    explanation: [
      'The keyof operator takes an object type and produces a string or numeric literal union of its keys.'
    ],
    code: `interface Staff {
  id: number;
  name: string;
  role: string;
}

type StaffKey = keyof Staff; // "id" | "name" | "role"

function getStaffProperty(staff: Staff, key: StaffKey) {
  return staff[key];
}`,
    languageId: 'typescript'
  },
  {
    id: 'ts-null-undefined',
    title: 'TS Null & Undefined',
    description: 'Configure and handle strictNullChecks configurations.',
    explanation: [
      'By default, null and undefined are subtypes of all other types.',
      'When strictNullChecks is true, they must be handled explicitly.',
      'Use optional chaining (?.) and nullish coalescing (??) for safe operations.'
    ],
    code: `let nickname: string | null = null;

// Use fallback value ??
const finalName = nickname ?? "Guest";
console.log("Active user:", finalName);`,
    languageId: 'typescript'
  }
];
