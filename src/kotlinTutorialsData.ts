import { TutorialTopic } from './cssTutorialsData';

export const KOTLIN_TOPICS: TutorialTopic[] = [
  {
    id: 'kotlin-intro',
    title: 'Kotlin Intro',
    description: 'Welcome to Kotlin! Kotlin is a modern, statically typed programming language used widely for Android development.',
    explanation: [
      'Kotlin is fully interoperable with Java and has 100% Java compatibility.',
      'It is concise, safe, expressive, and reduces boilerplate code.',
      'In 2017, Google announced Kotlin as a first-class language for Android development.'
    ],
    code: `fun main() {
    println("Hello, Kotlin!")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-get-started',
    title: 'Kotlin Get Started',
    description: 'Learn how to set up Kotlin in IntelliJ IDEA or compile it using kotlinc.',
    explanation: [
      'You can run Kotlin online in the Kotlin Playground, or locally using JetBrains IntelliJ IDEA.',
      'To compile from command line: kotlinc main.kt -include-runtime -d main.jar.'
    ],
    code: `// To execute from terminal:
// java -jar main.jar
fun main() {
    println("Getting started with Kotlin is easy!")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-syntax',
    title: 'Kotlin Syntax',
    description: 'Explore the entry point and structure of Kotlin programs.',
    explanation: [
      'The entry point of any Kotlin program is the main() function.',
      'Semicolons are optional in Kotlin, unlike Java, C++, or C#.'
    ],
    code: `fun main(args: Array<String>) {
    println("Main function receives CLI arguments array.")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-output',
    title: 'Kotlin Output',
    description: 'Learn about print() and println() methods for console outputs.',
    explanation: [
      'println() prints the message and adds a new line.',
      'print() prints the message without adding a new line.'
    ],
    code: `fun main() {
    print("Welcome ")
    println("to Kotlin!")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-comments',
    title: 'Kotlin Comments',
    description: 'Document your code using single-line and multi-line comments.',
    explanation: [
      'Use // for single-line comments.',
      'Use /* ... */ for multi-line comments.'
    ],
    code: `fun main() {
    // This is a single line comment
    /* This is
       a multi-line comment */
    println("Comments are skipped by the compiler!")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-variables',
    title: 'Kotlin Variables',
    description: 'Understand the difference between mutable (var) and read-only (val) variables.',
    explanation: [
      'val defines a read-only variable (similar to final in Java or const in JavaScript).',
      'var defines a mutable variable that can be changed later.'
    ],
    code: `fun main() {
    val birthYear = 1995 // Read-only
    var age = 30         // Mutable
    age = 31             // Allowed!
    
    println("Year: $birthYear, Age: $age")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-data-types',
    title: 'Kotlin Data Types',
    description: 'Explore primitive data types in Kotlin: Int, Double, Float, String, Char, and Boolean.',
    explanation: [
      'Kotlin does not have primitives in the source code; it treats everything as objects.',
      'Types are declared with a colon: val score: Int = 100'
    ],
    code: `fun main() {
    val letter: Char = 'A'
    val percentage: Double = 98.5
    val isRaining: Boolean = false
    println("Char: $letter, Double: $percentage, Bool: $isRaining")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-operators',
    title: 'Kotlin Operators',
    description: 'Use standard arithmetic, assignment, comparison, and logical operators.',
    explanation: [
      'Arithmetic: +, -, *, /, %',
      'Logical: &&, ||, !'
    ],
    code: `fun main() {
    val sum1 = 100 + 50
    val isTrue = (sum1 > 100) && (10 != 5)
    println("Sum: $sum1, Logical assessment: $isTrue")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-strings',
    title: 'Kotlin Strings',
    description: 'Master string templates, concatenation, and properties.',
    explanation: [
      'Strings are enclosed in double quotes.',
      'String templates let you inject variables directly using $variableName or ${expression}.'
    ],
    code: `fun main() {
    val txt = "Hello World"
    println("The length of the string is: \${txt.length}")
    println("First character is: \${txt[0]}")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-booleans',
    title: 'Kotlin Booleans',
    description: 'Understand conditional truth values using Booleans.',
    explanation: [
      'Boolean data type can only take true or false values.',
      'Useful for setting up logical checks and loops.'
    ],
    code: `fun main() {
    val isKotlinFun = true
    val isFishTasty = false
    println(isKotlinFun) // Outputs true
    println(isFishTasty) // Outputs false
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-ifelse',
    title: 'Kotlin If...Else',
    description: 'Use If...Else blocks as expressions to assign values.',
    explanation: [
      'In Kotlin, if can be used as an expression, meaning it can return a value.'
    ],
    code: `fun main() {
    val time = 20
    val greeting = if (time < 18) {
        "Good day."
    } else {
        "Good evening."
    }
    println(greeting)
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-when',
    title: 'Kotlin When',
    description: 'Switch between multiple branches using the expressive when keyword.',
    explanation: [
      'when replaces the traditional switch statement found in Java or C.'
    ],
    code: `fun main() {
    val day = 4
    val result = when (day) {
        1 -> "Monday"
        2 -> "Tuesday"
        3 -> "Wednesday"
        4 -> "Thursday"
        else -> "Invalid day"
    }
    println(result)
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-while-loop',
    title: 'Kotlin While Loop',
    description: 'Execute loops as long as a condition is met.',
    explanation: [
      'while loop runs while the condition evaluates to true.',
      'do-while loop always executes the body at least once.'
    ],
    code: `fun main() {
    var i = 0
    while (i < 3) {
        println(i)
        i++
    }
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-for-loop',
    title: 'Kotlin For Loop',
    description: 'Iterate over ranges, lists, and arrays using standard for loops.',
    explanation: [
      'The in operator is used to iterate through ranges, arrays, or collections.'
    ],
    code: `fun main() {
    for (chars in 'a'..'d') {
        println(chars)
    }
    for (i in 1..4) {
        println("Index: $i")
    }
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-break-continue',
    title: 'Kotlin Break/Continue',
    description: 'Control flow inside loops using break and continue statements.',
    explanation: [
      'break terminates the loop immediately.',
      'continue skips the current iteration and goes to the next one.'
    ],
    code: `fun main() {
    for (i in 1..5) {
        if (i == 3) continue
        if (i == 5) break
        println(i)
    }
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-arrays',
    title: 'Kotlin Arrays',
    description: 'Initialize and traverse arrays using arrayOf().',
    explanation: [
      'Use arrayOf() to create arrays of elements.',
      'Access elements using square brackets: array[index].'
    ],
    code: `fun main() {
    val cars = arrayOf("Volvo", "BMW", "Ford")
    println(cars[0])
    println("Array size: \${cars.size}")
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-functions',
    title: 'Kotlin Functions',
    description: 'Define functions, default parameter values, and single-expression syntax.',
    explanation: [
      'Declare functions with the fun keyword.',
      'Single-expression functions can omit curly braces and specify value with =.'
    ],
    code: `fun add(a: Int, b: Int): Int = a + b

fun main() {
    println(add(5, 10))
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-oop',
    title: 'Kotlin OOP',
    description: 'Learn the principles of Object-Oriented Programming in Kotlin.',
    explanation: [
      'OOP centers on classes and objects.',
      'Follows the core pillars: Encapsulation, Inheritance, Polymorphism, Abstraction.'
    ],
    code: `// Conceptual outline
// Class: Blueprint
// Object: Instance of the blueprint`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-classes-objects',
    title: 'Kotlin Classes/Objects',
    description: 'Create classes and instantiate object structures.',
    explanation: [
      'To create an object of a class, call the constructor as if it were a function.'
    ],
    code: `class Car {
    var brand = ""
    var year = 0
}

fun main() {
    val c = Car()
    c.brand = "Tesla"
    c.year = 2023
    println(c.brand)
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-class-attributes',
    title: 'Kotlin Class Attributes',
    description: 'Configure getter and setter attributes inside classes.',
    explanation: [
      'Kotlin automatically generates getters and setters for properties.'
    ],
    code: `class User {
    var name: String = "Guest"
        get() = field.uppercase()
        set(value) { field = value }
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-class-functions',
    title: 'Kotlin Class Functions',
    description: 'Define methods inside classes that act upon object state.',
    explanation: [
      'Functions declared inside a class are called member functions.'
    ],
    code: `class Calculator {
    fun multiply(x: Int, y: Int): Int {
        return x * y
    }
}

fun main() {
    val calc = Calculator()
    println(calc.multiply(4, 5))
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-constructors',
    title: 'Kotlin Constructors',
    description: 'Utilize primary and secondary constructors in Kotlin classes.',
    explanation: [
      'The primary constructor is part of the class header.'
    ],
    code: `class Profile(val username: String, val role: String)

fun main() {
    val p = Profile("sky_dev", "Admin")
    println(p.username)
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-inheritance',
    title: 'Kotlin Inheritance',
    description: 'Inherit class attributes and functions using open and subclassing.',
    explanation: [
      'All classes in Kotlin are final by default. To make a class inheritable, mark it with open.',
      'Use a colon (:) to extend a parent class.'
    ],
    code: `open class Parent {
    val familyName = "Smith"
}

class Child : Parent() {
    fun printFamily() {
        println(familyName)
    }
}

fun main() {
    Child().printFamily()
}`,
    languageId: 'kotlin'
  },
  {
    id: 'kotlin-interfaces',
    title: 'Kotlin Interfaces',
    description: 'Establish abstract protocols inside Kotlin using interfaces.',
    explanation: [
      'Interfaces can contain abstract methods as well as method implementations.'
    ],
    code: `interface Drivable {
    fun drive()
    fun stop() {
        println("Vehicle stopped")
    }
}

class Motorcycle : Drivable {
    override fun drive() {
        println("Riding motorcycle")
    }
}`.trim(),
    languageId: 'kotlin'
  }
];
