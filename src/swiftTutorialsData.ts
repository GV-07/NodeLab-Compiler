import { TutorialTopic } from './cssTutorialsData';

export const SWIFT_TOPICS: TutorialTopic[] = [
  {
    id: 'swift-intro',
    title: 'Swift Intro',
    description: 'Welcome to Swift! Swift is a powerful, intuitive, open-source programming language developed by Apple.',
    explanation: [
      'Swift was introduced by Apple in 2014 to replace Objective-C for iOS, macOS, watchOS, and tvOS development.',
      'Designed to be fast, modern, safe, and interactive.',
      'Includes automatic memory management using Automatic Reference Counting (ARC).'
    ],
    code: `print("Hello, Swift!")`,
    languageId: 'swift'
  },
  {
    id: 'swift-get-started',
    title: 'Swift Get Started',
    description: 'Learn how to set up Swift in Apple Xcode or run it on Linux.',
    explanation: [
      'On macOS, the preferred way to write Swift is using Xcode (Apple\'s IDE).',
      'You can use Playgrounds inside Xcode to execute Swift code dynamically and visually.',
      'Swift can also be compiled from terminal using swiftc.'
    ],
    code: `// To compile from terminal on Mac/Linux:
// swiftc main.swift
// ./main

print("Ready to code iOS apps!")`,
    languageId: 'swift'
  },
  {
    id: 'swift-syntax',
    title: 'Swift Syntax',
    description: 'Master the clean, elegant syntax layout of Swift, where semicolons are optional.',
    explanation: [
      'Semicolons are not required after statements in Swift, unless you want to write multiple statements on the same line.',
      'A Swift program can begin directly with executable statements without wrapping them in main() functions.'
    ],
    code: `var appName = "My Swift App"
print(appName)`,
    languageId: 'swift'
  },
  {
    id: 'swift-output',
    title: 'Swift Output',
    description: 'Display values onto the debug console using print() and string interpolation.',
    explanation: [
      'The print() function prints output to the console, followed by a newline.',
      'Use separator and terminator parameters to adjust default spacing.',
      'Inject variables inside strings using backslash parentheses: \\(variable).'
    ],
    code: `let author = "Apple"
print("Swift was built by \\(author).")`,
    languageId: 'swift'
  },
  {
    id: 'swift-comments',
    title: 'Swift Comments',
    description: 'Document your Swift code using single-line and multi-line comments.',
    explanation: [
      'Use // for single-line comments.',
      'Use /* ... */ for multi-line comments.'
    ],
    code: `// This is a single line comment
/* This is a
   multi-line comment block */
print("Swift compilers ignore comments!")`,
    languageId: 'swift'
  },
  {
    id: 'swift-variables',
    title: 'Swift Variables',
    description: 'Learn the difference between constant declarations (let) and variable declarations (var).',
    explanation: [
      'Use let to declare constants. Constant values cannot be reassigned once defined.',
      'Use var to declare mutable variables.'
    ],
    code: `let maxLoginAttempts = 5  // Constant
var currentLoginAttempts = 0 // Variable

currentLoginAttempts += 1 // Allowed`,
    languageId: 'swift'
  },
  {
    id: 'swift-data-types',
    title: 'Swift Data Types',
    description: 'Explore Swift primitives: Int, Double, Float, String, Character, and Bool.',
    explanation: [
      'Swift is a type-safe language. It performs type checks when compiling your code.',
      'If you don\'t specify a type, Swift uses type inference to resolve the optimal type shape.'
    ],
    code: `let score: Int = 100
let pi: Double = 3.14159
let isPremium: Bool = true`,
    languageId: 'swift'
  },
  {
    id: 'swift-operators',
    title: 'Swift Operators',
    description: 'Evaluate mathematics and comparisons using Swift operators.',
    explanation: [
      'Arithmetic: +, -, *, /, %.',
      'Comparison: ==, !=, >, <, >=, <=.',
      'Logical: &&, ||, !.'
    ],
    code: `let sum = 10 + 20
let isAllowed = (sum > 15) && !false`,
    languageId: 'swift'
  },
  {
    id: 'swift-strings',
    title: 'Swift Strings',
    description: 'Manipulate text strings, multi-line blocks, and characters.',
    explanation: [
      'Strings are represented by the String type, which is fully Unicode-compliant.',
      'Create multi-line strings using triple double-quotes (""").'
    ],
    code: `let greeting = "Hello"
let banner = """
Swift is a fast language.
Fully compatible with Objective-C.
"""
print(greeting.count)`,
    languageId: 'swift'
  },
  {
    id: 'swift-booleans',
    title: 'Swift Booleans',
    description: 'Implement logical true/false check conditions using Bool.',
    explanation: [
      'Swift has a basic Boolean type named Bool.',
      'Boolean values can only be the constants true or false.'
    ],
    code: `let orangesAreOrange = true
let turnipsAreDelicious = false`,
    languageId: 'swift'
  },
  {
    id: 'swift-ifelse',
    title: 'Swift If...Else',
    description: 'Execute conditional blocks using if, else if, and else statements.',
    explanation: [
      'In Swift, conditional expressions must evaluate strictly to a Boolean value (no implicit 1 or 0 conversions).'
    ],
    code: `let temperature = 25
if temperature > 30 {
    print("It's hot.")
} else if temperature < 15 {
    print("It's cold.")
} else {
    print("It's pleasant.")
}`,
    languageId: 'swift'
  },
  {
    id: 'swift-switch',
    title: 'Swift Switch',
    description: 'Leverage powerful switch statements that must be exhaustive.',
    explanation: [
      'Switch cases do not fall through by default in Swift (no break needed).',
      'The switch statement must be exhaustive, covering all possible values or using a default case.'
    ],
    code: `let someCharacter: Character = "z"
switch someCharacter {
case "a":
    print("First letter")
case "z":
    print("Last letter")
default:
    print("Some other character")
}`,
    languageId: 'swift'
  },
  {
    id: 'swift-while-loop',
    title: 'Swift While Loop',
    description: 'Run statements as long as a boolean condition remains true.',
    explanation: [
      'while evaluates its condition before each pass through the loop.',
      'repeat-while evaluates the condition after executing the body (similar to do-while).'
    ],
    code: `var index = 0
while index < 3 {
    print("Index is \\(index)")
    index += 1
}`,
    languageId: 'swift'
  },
  {
    id: 'swift-for-loop',
    title: 'Swift For Loop',
    description: 'Iterate over ranges, lists, and collections using the for-in loop.',
    explanation: [
      'Use for-in loops to iterate over ranges, arrays, or dictionary keys/values.',
      'Ranges can be closed (1...5) or half-open (1..<5).'
    ],
    code: `for number in 1...3 {
    print("Item: \\(number)")
}`,
    languageId: 'swift'
  },
  {
    id: 'swift-break-continue',
    title: 'Swift Break/Continue',
    description: 'Control flow inside loops using break and continue.',
    explanation: [
      'break terminates loop execution immediately.',
      'continue skips the current loop pass and proceeds to the next.'
    ],
    code: `for i in 1...5 {
    if i == 3 { continue }
    if i == 5 { break }
    print(i)
}`,
    languageId: 'swift'
  },
  {
    id: 'swift-arrays',
    title: 'Swift Arrays',
    description: 'Store ordered values of the same type inside Swift arrays.',
    explanation: [
      'Arrays in Swift are typed; they can only store elements of a single, specified type.',
      'Use standard bracket notation [Type]() to initialize empty arrays.'
    ],
    code: `var shoppingList = ["Eggs", "Milk"]
shoppingList.append("Flour")
print("Total items: \\(shoppingList.count)")`,
    languageId: 'swift'
  },
  {
    id: 'swift-functions',
    title: 'Swift Functions',
    description: 'Declare functions, argument labels, parameter values, and return types.',
    explanation: [
      'Functions are declared with the func keyword.',
      'Support argument labels to make code exceptionally readable: func greet(to person: String).'
    ],
    code: `func greet(person: String, day: String) -> String {
    return "Hello \\(person), today is \\(day)."
}
print(greet(person: "Dave", day: "Monday"))`,
    languageId: 'swift'
  },
  {
    id: 'swift-oop',
    title: 'Swift OOP',
    description: 'Explore object-oriented patterns, classes, initializers, and structs in Swift.',
    explanation: [
      'Swift supports both Classes (reference types) and Structs (value types).',
      'Use classes for object inheritance and identity tracking.',
      'Use structs for simple values data modeling (structs automatically receive memberwise initializers).'
    ],
    code: `class Vehicle {
    var speed = 0.0
    func makeNoise() {}
}

class Bicycle: Vehicle {
    override func makeNoise() {
        print("Ring ring!")
    }
}

let myBike = Bicycle()
myBike.makeNoise()`,
    languageId: 'swift'
  }
];
