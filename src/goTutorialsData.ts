import { TutorialTopic } from './cssTutorialsData';

export const GO_TOPICS: TutorialTopic[] = [
  {
    id: 'go-home',
    title: 'Go HOME',
    description: 'Welcome to Go! Go (Golang) is an open-source, statically typed programming language developed at Google.',
    explanation: [
      'Go was created by Robert Griesemer, Rob Pike, and Ken Thompson at Google in 2007.',
      'Designed to make software development simple, efficient, and reliable.',
      'Compiles directly to machine code, making it exceptionally fast.'
    ],
    code: `package main

import "fmt"

fun main() {
    fmt.Println("Hello, Go!")
}`,
    languageId: 'go'
  },
  {
    id: 'go-intro',
    title: 'Go Intro',
    description: 'Understand Go\'s simplicity, garbage collection, and robust standard library.',
    explanation: [
      'Go avoids feature bloat: no classes or inheritance, and no implicit type conversions.',
      'Native support for multi-core concurrency using Goroutines and Channels.',
      'Excellent for backend APIs, microservices, and network tooling.'
    ],
    code: `package main

import "fmt"

func main() {
    fmt.Println("Simplicity is the ultimate sophistication in Go.")
}`,
    languageId: 'go'
  },
  {
    id: 'go-get-started',
    title: 'Go Get Started',
    description: 'Install the Go compiler, initialize modules using "go mod init", and run files.',
    explanation: [
      'Install Go from golang.org.',
      'Initialize modules using: go mod init myapp.',
      'Execute code dynamically with: go run main.go.'
    ],
    code: `// To initialize project:
// go mod init myapp
// To run:
// go run main.go

package main

import "fmt"

func main() {
    fmt.Println("Go ecosystem initialized!")
}`,
    languageId: 'go'
  },
  {
    id: 'go-syntax',
    title: 'Go Syntax',
    description: 'Learn the basic syntax structure of Go files, package declarations, and standard imports.',
    explanation: [
      'Every Go file must start with a package declaration.',
      'Executable files are declared as package main.',
      'Imports load packages (e.g. "fmt" for formatting input/output).'
    ],
    code: `package main

import "fmt"

func main() {
    fmt.Println("Every Go statement does not require a semicolon!")
}`,
    languageId: 'go'
  },
  {
    id: 'go-output',
    title: 'Go Output',
    description: 'Understand fmt.Print, fmt.Println, and fmt.Printf with format verbs.',
    explanation: [
      'Print() prints exactly what is provided without spaces or newlines.',
      'Println() adds a newline and space separators.',
      'Printf() allows formatting values using %v (default value) and %T (variable type).'
    ],
    code: `package main

import "fmt"

func main() {
    name := "Bob"
    age := 25
    fmt.Printf("Name: %v (Type: %T), Age: %d\\n", name, name, age)
}`,
    languageId: 'go'
  },
  {
    id: 'go-comments',
    title: 'Go Comments',
    description: 'Document your code utilizing single-line or multi-line comment syntaxes.',
    explanation: [
      'Use // for single-line comments.',
      'Use /* ... */ for block comments.'
    ],
    code: `package main

import "fmt"

func main() {
    // This is a single line comment
    /* This is
       a multi-line comment */
    fmt.Println("Comments are omitted by the compiler!")
}`,
    languageId: 'go'
  },
  {
    id: 'go-variables',
    title: 'Go Variables',
    description: 'Declare variables using the "var" keyword or short variable assignment operator (:=).',
    explanation: [
      'Use var when declaring variables with explicit types (e.g., var x int = 5).',
      'Use the := operator for type-inferred variables inside functions.'
    ],
    code: `package main

import "fmt"

func main() {
    var brand string = "Mercedes"
    year := 2023 // Inferred as int
    
    fmt.Println(brand, "Year:", year)
}`,
    languageId: 'go'
  },
  {
    id: 'go-constants',
    title: 'Go Constants',
    description: 'Define unalterable, strongly typed values using the const keyword.',
    explanation: [
      'Constants are declared with the const keyword.',
      'Values must be known at compile time and cannot be reassigned.'
    ],
    code: `package main

import "fmt"

const Pi = 3.14159

func main() {
    // Pi = 3.14 // Error! Cannot reassign constants.
    fmt.Println("Value of Pi:", Pi)
}`,
    languageId: 'go'
  },
  {
    id: 'go-data-types',
    title: 'Go Data Types',
    description: 'Explore primitive data types in Go: int, float32, float64, string, and bool.',
    explanation: [
      'Integers can be signed (int) or unsigned (uint).',
      'Floating point numbers: float32, float64.',
      'Booleans (bool) evaluate only to true or false.'
    ],
    code: `package main

import "fmt"

func main() {
    var rating float32 = 4.8
    var isVerified bool = true
    fmt.Println(rating, isVerified)
}`,
    languageId: 'go'
  },
  {
    id: 'go-operators',
    title: 'Go Operators',
    description: 'Perform mathematical and logical computations using Go operators.',
    explanation: [
      'Arithmetic operators: +, -, *, /, %.',
      'Comparison operators: ==, !=, >, <, >=, <=.',
      'Logical operators: &&, ||, !.'
    ],
    code: `package main

import "fmt"

func main() {
    a := 10
    b := 5
    fmt.Println("Sum:", a+b, "Equal:", a == b)
}`,
    languageId: 'go'
  },
  {
    id: 'go-conditions',
    title: 'Go Conditions',
    description: 'Write conditional branches using if, else if, and else blocks.',
    explanation: [
      'Parentheses are not required around conditions in Go.',
      'Curly braces are mandatory even for single-line blocks.'
    ],
    code: `package main

import "fmt"

func main() {
    score := 85
    if score >= 90 {
        fmt.Println("Grade A")
    } else if score >= 80 {
        fmt.Println("Grade B")
    } else {
        fmt.Println("Grade C")
    }
}`,
    languageId: 'go'
  },
  {
    id: 'go-switch',
    title: 'Go Switch',
    description: 'Set up switch statements without explicit break lines.',
    explanation: [
      'In Go, the break statement is automatic at the end of each case block.',
      'Use the fallthrough keyword if you explicitly want to fall through to the next case.'
    ],
    code: `package main

import "fmt"

func main() {
    day := "Wednesday"
    switch day {
    case "Monday":
        fmt.Println("Start of the week")
    case "Wednesday":
        fmt.Println("Midweek day!")
    default:
        fmt.Println("Other day")
    }
}`,
    languageId: 'go'
  },
  {
    id: 'go-loops',
    title: 'Go Loops',
    description: 'Use the for keyword for all looping needs in Go.',
    explanation: [
      'There is no "while" loop in Go; the "for" keyword handles all loops.',
      'Can be configured as traditional for, while-like conditional loops, or infinite loops.'
    ],
    code: `package main

import "fmt"

func main() {
    // Simple for loop
    for i := 0; i < 3; i++ {
        fmt.Println("Index:", i)
    }

    // While-style loop
    count := 1
    for count < 3 {
        fmt.Println("Count:", count)
        count++
    }
}`,
    languageId: 'go'
  },
  {
    id: 'go-functions',
    title: 'Go Functions',
    description: 'Declare functions with typed parameters and multiple return values.',
    explanation: [
      'Go functions can return multiple values.',
      'Return types are specified after the parameter list.'
    ],
    code: `package main

import "fmt"

func divideAndRemainder(numerator, denominator int) (int, int) {
    div := numerator / denominator
    rem := numerator % denominator
    return div, rem
}

func main() {
    d, r := divideAndRemainder(10, 3)
    fmt.Println("Div:", d, "Rem:", r)
}`,
    languageId: 'go'
  },
  {
    id: 'go-struct',
    title: 'Go Struct',
    description: 'Create customized types holding multiple properties using struct.',
    explanation: [
      'A struct (structure) is a user-defined type that contains a collection of fields.',
      'Used to group related data together into single, clean records.'
    ],
    code: `package main

import "fmt"

type Employee struct {
    Name   string
    Age    int
    Salary float64
}

func main() {
    emp := Employee{Name: "Alice", Age: 30, Salary: 95000}
    fmt.Println(emp.Name, "earns", emp.Salary)
}`,
    languageId: 'go'
  },
  {
    id: 'go-maps',
    title: 'Go Maps',
    description: 'Map unique string keys to typed values using Go maps.',
    explanation: [
      'Maps are Go\'s built-in associative data types (equivalent to dictionaries or hash maps).',
      'Must be initialized using make() before we can insert keys.'
    ],
    code: `package main

import "fmt"

func main() {
    salaries := make(map[string]int)
    salaries["Alice"] = 95000
    salaries["Bob"] = 80000

    fmt.Println("Alice Salary:", salaries["Alice"])
}`,
    languageId: 'go'
  },
  {
    id: 'go-pointers',
    title: 'Go Pointers',
    description: 'Safely access and modify variable memory locations using pointers.',
    explanation: [
      'Pointers store the memory address of other variables.',
      'Get address-of using the & operator; dereference/read using the * operator.',
      'Safe from arbitrary pointer arithmetic unlike C.'
    ],
    code: `package main

import "fmt"

func main() {
    x := 10
    ptr := &x

    fmt.Println("Address:", ptr)
    fmt.Println("Value through pointer:", *ptr)

    *ptr = 20 // Changes the original variable value
    fmt.Println("New value of x:", x)
}`,
    languageId: 'go'
  },
  {
    id: 'go-concurrency',
    title: 'Go Concurrency & Goroutines',
    description: 'Run lightweight concurrent threads using Goroutines (go keyword) and Channels.',
    explanation: [
      'A goroutine is a lightweight thread of execution managed by the Go runtime.',
      'Use the go keyword followed by a function call to execute it concurrently.',
      'Channels are used to send and receive data between Goroutines safely.'
    ],
    code: `package main

import (
    "fmt"
    "time"
)

func sayHello() {
    fmt.Println("Hello from Goroutine!")
}

func main() {
    go sayHello() // Runs in background!
    time.Sleep(100 * time.Millisecond) // Let goroutine complete
    fmt.Println("Main exit")
}`,
    languageId: 'go'
  }
];
