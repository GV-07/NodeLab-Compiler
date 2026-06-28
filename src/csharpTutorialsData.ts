import { TutorialTopic } from './cssTutorialsData';

export const CSHARP_TOPICS: TutorialTopic[] = [
  {
    id: 'csharp-intro',
    title: 'C# Intro',
    description: 'C# is a modern, object-oriented, type-safe programming language developed by Microsoft in 2000.',
    explanation: [
      'C# runs on the .NET Framework / .NET Core, enabling cross-platform apps.',
      'It is widely used for enterprise web backend applications, desktop systems, and gaming engines like Unity.',
      'C# is highly related to C++ and Java, making it easy to learn for many programmers.'
    ],
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Welcome to C# programming on NodeLab!");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-start',
    title: 'C# Get Started',
    description: 'Write, compile, and run your first basic console application in C#.',
    explanation: [
      'Every C# application runs inside a class.',
      'The static Main() method is the main entry point where execution begins.',
      'Use the Console.WriteLine() method from the System namespace to print output text.'
    ],
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("C# Sandbox is live and ready!");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-syntax',
    title: 'C# Syntax',
    description: 'Understand using directives, namespaces, classes, Main methods, and semicolons.',
    explanation: [
      'Line 1: using System imports the System namespace which holds console controls.',
      'Line 2: class Program defines a class container that holds your code blocks.',
      'Line 3: C# statement lines must always end with a semicolon (;).',
      'Line 4: C# is case-sensitive, so "Main" and "main" have completely different meanings.'
    ],
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("C# follows precise syntax rules.");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-output',
    title: 'C# Output',
    description: 'Print texts and values using Console.Write and Console.WriteLine.',
    explanation: [
      'Console.WriteLine() prints text and adds a newline at the end.',
      'Console.Write() prints text directly without appending a newline.',
      'You can print mathematical calculations and variable summaries directly.'
    ],
    code: `using System;

class Program {
    static void Main() {
        Console.Write("Row 1: ");
        Console.WriteLine("Row 2 (appended)");
        Console.WriteLine(25 + 50); // Prints 75
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-comments',
    title: 'C# Comments',
    description: 'Add comments to document your classes and bypass statements.',
    explanation: [
      'Single-line comments start with double forward slashes //.',
      'Multi-line comments start with /* and end with */.',
      'Comments help explain code structure and are omitted by compilers.'
    ],
    code: `using System;

class Program {
    static void Main() {
        // This is a single line comment in C#
        Console.WriteLine("Comments are ignored!");
        /* Multi-line comment block
           spanning multiple lines */
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-variables',
    title: 'C# Variables',
    description: 'Store diverse data items inside strongly-typed variable holders.',
    explanation: [
      'C# is a strongly-typed language, meaning every variable requires a declared type.',
      'Common types: string, int, double, char, and bool.',
      'Declare variables specifying type, name, and assigning value.'
    ],
    code: `using System;

class Program {
    static void Main() {
        string name = "John";
        int age = 30;
        bool active = true;
        Console.WriteLine(name + " is " + age + " (Active: " + active + ")");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-datatypes',
    title: 'C# Data Types',
    description: 'Explore the numeric, character, boolean, and structural data types of C#.',
    explanation: [
      'Numeric: int (whole numbers), float, double (decimal fractions), decimal (monetary calculations).',
      'Character: char (single character, single quotes), string (text sequence, double quotes).',
      'Boolean: bool (true/false).'
    ],
    code: `using System;

class Program {
    static void Main() {
        int score = 100;
        double gpa = 3.92;
        char grade = 'A';
        bool isGraduated = true;
        Console.WriteLine($"Score: {score}, GPA: {gpa}, Grade: {grade}, Graduated: {isGraduated}");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-typecasting',
    title: 'C# Type Casting',
    description: 'Convert values between different data types automatically or manually.',
    explanation: [
      'Implicit Casting (automatically): converting a smaller type to a larger type size: char -> int -> long -> float -> double.',
      'Explicit Casting (manually): converting a larger type to a smaller type size: double -> float -> long -> int -> char.',
      'Built-in Convert methods allow converting between incompatible types (e.g. Convert.ToString()).'
    ],
    code: `using System;

class Program {
    static void Main() {
        int myInt = 9;
        double myDouble = myInt; // Automatic casting

        double myVal = 9.78;
        int myResult = (int) myVal; // Manual casting: double to int

        Console.WriteLine("Implicit: " + myDouble);
        Console.WriteLine("Explicit: " + myResult);
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-userinput',
    title: 'C# User Input',
    description: 'Read input strings from console users using Console.ReadLine.',
    explanation: [
      'Console.ReadLine() reads input from the user keyboard, returning it as a string.',
      'To capture numbers, you must convert the input string using Convert helper methods like Convert.ToInt32().'
    ],
    code: `using System;

class Program {
    static void Main() {
        // Mocking user input
        string inputName = "Alex";
        Console.WriteLine("string name = Console.ReadLine();");
        Console.WriteLine("Welcome, " + inputName + "!");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-operators',
    title: 'C# Operators',
    description: 'Perform arithmetic, assignment, logical, and comparison operations.',
    explanation: [
      'Arithmetic operators: +, -, *, /, %, ++, --.',
      'Comparison operators compare values: ==, !=, >, <, >=, <=.',
      'Logical operators verify boolean flags: && (AND), || (OR), ! (NOT).'
    ],
    code: `using System;

class Program {
    static void Main() {
        int x = 20;
        int y = 3;
        Console.WriteLine("Remainder x % y = " + (x % y));
        Console.WriteLine("Logical: " + (x > 10 && y < 5));
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-math',
    title: 'C# Math',
    description: 'Execute mathematical equations using the System.Math static class.',
    explanation: [
      'The System namespace includes a Math class with helpful functions.',
      'Methods: Math.Max(x,y), Math.Min(x,y), Math.Sqrt(x), Math.Abs(x), and Math.Round(x).'
    ],
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Max: " + Math.Max(5, 10));
        Console.WriteLine("Square root: " + Math.Sqrt(49));
        Console.WriteLine("Round 9.78: " + Math.Round(9.78));
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-strings',
    title: 'C# Strings',
    description: 'Manipulate text strings, measure lengths, and utilize interpolation.',
    explanation: [
      'A string stores a set of characters, like "Hello World".',
      'String properties: Length, Methods: ToUpper(), ToLower(), IndexOf().',
      'String Interpolation inserts variable values using curly braces: $"Hello {name}".'
    ],
    code: `using System;

class Program {
    static void Main() {
        string txt = "Hello C#";
        Console.WriteLine("Length: " + txt.Length);
        Console.WriteLine("Upper: " + txt.ToUpper());
        Console.WriteLine("Interpolation: " + $"Welcome: {txt}");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-booleans',
    title: 'C# Booleans',
    description: 'Verify logic conditions evaluating to true or false.',
    explanation: [
      'A boolean data type can only take the values true or false.',
      'Commonly used in conditional branching statements and loops.',
      'You can construct boolean values using relational comparison operators.'
    ],
    code: `using System;

class Program {
    static void Main() {
        bool isFun = true;
        int score = 80;
        Console.WriteLine("Fun? " + isFun);
        Console.WriteLine("Passed? " + (score >= 50));
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-ifelse',
    title: 'C# If...Else',
    description: 'Route program execution branches based on true/false conditions.',
    explanation: [
      'Use "if" to specify code to execute if a condition is true.',
      'Use "else if" to specify a new condition if the first condition is false.',
      'Use "else" to specify code if all conditions evaluate to false.'
    ],
    code: `using System;

class Program {
    static void Main() {
        int time = 20;
        if (time < 12) {
            Console.WriteLine("Good morning.");
        } else if (time < 18) {
            Console.WriteLine("Good day.");
        } else {
            Console.WriteLine("Good evening.");
        }
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-switch',
    title: 'C# Switch',
    description: 'Select one of multiple matching branches inside switch statement blocks.',
    explanation: [
      'Use the switch statement to select one of many blocks of code to be executed.',
      'Matches values directly. Each branch must end with break (or return) to prevent fall-through.',
      'The optional default statement handles unhandled conditions.'
    ],
    code: `using System;

class Program {
    static void Main() {
        int day = 4;
        switch (day) {
            case 1: Console.WriteLine("Monday"); break;
            case 4: Console.WriteLine("Thursday"); break;
            default: Console.WriteLine("Weekend / other day"); break;
        }
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-while',
    title: 'C# While Loop',
    description: 'Execute statement blocks as long as specific conditions remain true.',
    explanation: [
      'The while loop repeats code as long as a condition evaluates to true.',
      'The do/while loop executes the code block once before testing loop conditions.'
    ],
    code: `using System;

class Program {
    static void Main() {
        int i = 0;
        while (i < 3) {
            Console.WriteLine("Index: " + i);
            i++;
        }
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-for',
    title: 'C# For Loop',
    description: 'Iterate over blocks of statements a known number of times using count loops.',
    explanation: [
      'The for loop is used when you know exactly how many times to execute a block of code.',
      'C# also features the foreach loop used specifically to iterate over arrays and collections.'
    ],
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("For loop:");
        for (int i = 0; i < 3; i++) {
            Console.WriteLine(i);
        }

        Console.WriteLine("\\nForeach loop:");
        string[] cars = {"Volvo", "BMW", "Ford"};
        foreach (string car in cars) {
            Console.WriteLine(car);
        }
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-break',
    title: 'C# Break/Continue',
    description: 'Control looping logic using break and continue execution directives.',
    explanation: [
      'The break statement is used to jump directly out of a loop.',
      'The continue statement breaks one iteration in the loop and skips to the next.'
    ],
    code: `using System;

class Program {
    static void Main() {
        for (int i = 0; i < 6; i++) {
            if (i == 2) {
                continue; // Skip 2
            }
            if (i == 4) {
                break;    // Stop at 4
            }
            Console.WriteLine("Index: " + i);
        }
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-arrays',
    title: 'C# Arrays',
    description: 'Hold lists of values of identical types inside indexed layout blocks.',
    explanation: [
      'Arrays store multiple values of the same type in a single variable.',
      'To declare an array, specify the variable type with square brackets: string[] names;',
      'Retrieve array length using the Length property.'
    ],
    code: `using System;

class Program {
    static void Main() {
        int[] scores = { 85, 90, 95 };
        Console.WriteLine("First item: " + scores[0]);
        Console.WriteLine("Array elements count: " + scores.Length);
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-methods',
    title: 'C# Methods',
    description: 'Construct reusable blocks of program statements called methods.',
    explanation: [
      'A method is a block of code which only runs when it is called.',
      'Methods are declared inside a class.',
      'The void keyword indicates that the method does not return any value.'
    ],
    code: `using System;

class Program {
    static void Greet() {
        Console.WriteLine("Greetings from C# Method!");
    }

    static void Main() {
        Greet();
        Greet();
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-methodparams',
    title: 'C# Method Parameters',
    description: 'Pass inputs as arguments and return values from custom methods.',
    explanation: [
      'Information can be passed to methods as parameters, which behave like variables.',
      'Pass multiple parameters separated by commas.',
      'Specify a return type instead of void, and use the return keyword to return values.'
    ],
    code: `using System;

class Program {
    static int Multiply(int x, int y) {
        return x * y;
    }

    static void Main() {
        int result = Multiply(5, 10);
        Console.WriteLine("Multiply output: " + result);
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-overloading',
    title: 'C# Method Overloading',
    description: 'Define multiple methods sharing names with differing parameters.',
    explanation: [
      'Method overloading lets multiple methods share the same name with different parameter configurations.',
      'Overloaded methods must differ in parameters count or type.'
    ],
    code: `using System;

class Program {
    static int PlusMethod(int x, int y) {
        return x + y;
    }

    static double PlusMethod(double x, double y) {
        return x + y;
    }

    static void Main() {
        Console.WriteLine(PlusMethod(8, 5));
        Console.WriteLine(PlusMethod(4.3, 6.2));
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-oop',
    title: 'C# OOP',
    description: 'Object-Oriented Programming (OOP) is about classes, objects, and modular design.',
    explanation: [
      'OOP models real-world concepts as code structures.',
      'Encapsulation hides sensitive data inside classes.',
      'Inheritance shares attributes and methods across hierarchical classes.'
    ],
    code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Object-Oriented programming simplifies enterprise .NET systems!");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-classesobjects',
    title: 'C# Classes and Objects',
    description: 'Declare classes to serve as blueprints for instantiating objects.',
    explanation: [
      'A Class serves as a blueprint or template to instantiate structural Objects.',
      'An Object represents an instance of a Class.',
      'Instantiate classes using the new keyword.'
    ],
    code: `using System;

class Car {
    public string model = "Tesla";
}

class Program {
    static void Main() {
        Car myCar = new Car();
        Console.WriteLine("Car Model: " + myCar.model);
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-members',
    title: 'C# Class Members',
    description: 'Define fields and methods representing object data and actions.',
    explanation: [
      'Class members represent fields (attributes) and methods (functions) inside a class.',
      'Fields store values representing state. Methods represent active executable actions.'
    ],
    code: `using System;

class User {
    public string name = "Guest";
    public void Display() {
        Console.WriteLine("User Name: " + name);
    }
}

class Program {
    static void Main() {
        User u = new User();
        u.Display();
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-constructors',
    title: 'C# Constructors',
    description: 'Instantiate and initialize class variables using constructor methods.',
    explanation: [
      'A constructor is a special class method called automatically upon object creation.',
      'Constructors must share the class name exactly, and possess no return type.',
      'Useful for setting initial member attributes.'
    ],
    code: `using System;

class Product {
    public string name;
    public Product(string n) {
        name = n;
    }
}

class Program {
    static void Main() {
        Product p = new Product("SmartPhone");
        Console.WriteLine("Product Name: " + p.name);
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-accessmodifiers',
    title: 'C# Access Modifiers',
    description: 'Set access permissions using public, private, protected, and internal.',
    explanation: [
      'public: Access is not restricted.',
      'private: Access is limited to the containing class.',
      'protected: Access is limited to the containing class or types derived from it.',
      'internal: Access is limited to the current assembly.'
    ],
    code: `using System;

class Account {
    public int id = 123;
    private int balance = 1000;
}

class Program {
    static void Main() {
        Account acc = new Account();
        Console.WriteLine("ID: " + acc.id);
        // Console.WriteLine(acc.balance); // Error! private variable
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-properties',
    title: 'C# Properties (Get & Set)',
    description: 'Manage class data security using clean get and set property accessors.',
    explanation: [
      'Properties combine fields and accessors (get and set) into a unified safe structure.',
      'get: Returns the variable value.',
      'set: Assigns a new value using the value keyword.',
      'Automatic properties provide clean shorthand: public string Name { get; set; }'
    ],
    code: `using System;

class Person {
    public string Name { get; set; } // Auto-property
}

class Program {
    static void Main() {
        Person p = new Person();
        p.Name = "Alice";
        Console.WriteLine("Name: " + p.Name);
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-inheritance',
    title: 'C# Inheritance',
    description: 'Extend classes and inherit fields/methods using colons (:).',
    explanation: [
      'Inheritance lets derived classes reuse attributes and methods from base classes.',
      'Use the colon (:) character to declare inheritance: class Child : Parent.',
      'Use the sealed keyword if you want to prevent a class from being inherited.'
    ],
    code: `using System;

class Vehicle {
    public void Honk() { Console.WriteLine("Honk!"); }
}

class Truck : Vehicle {}

class Program {
    static void Main() {
        Truck t = new Truck();
        t.Honk(); // Call inherited method
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-polymorphism',
    title: 'C# Polymorphism',
    description: 'Override methods using virtual and override keywords.',
    explanation: [
      'Polymorphism represents the ability of objects to take on different forms.',
      'Base classes define a method as "virtual", indicating child classes can override it.',
      'Subclasses use the "override" keyword to customize the action.'
    ],
    code: `using System;

class Animal {
    public virtual void Sound() { Console.WriteLine("Animal sound"); }
}

class Pig : Animal {
    public override void Sound() { Console.WriteLine("Pig oinks"); }
}

class Program {
    static void Main() {
        Animal a = new Pig();
        a.Sound(); // Prints Pig oinks
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-abstraction',
    title: 'C# Abstraction',
    description: 'Conceal system execution details using abstract classes and methods.',
    explanation: [
      'Abstraction hides certain details and only shows essential details.',
      'Abstract class: A restricted class that cannot be used to instantiate objects.',
      'Abstract method: Declared inside abstract classes without bodies.'
    ],
    code: `using System;

abstract class Animal {
    public abstract void Sound();
}

class Cat : Animal {
    public override void Sound() { Console.WriteLine("Meow!"); }
}

class Program {
    static void Main() {
        Cat c = new Cat();
        c.Sound();
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-interface',
    title: 'C# Interface',
    description: 'Achieve multiple inheritance and full abstraction using interfaces.',
    explanation: [
      'An interface is a completely "abstract class" that can only contain abstract methods and properties.',
      'Interfaces are declared using the interface keyword and start with the letter I.',
      'A class can implement multiple interfaces at the same time.'
    ],
    code: `using System;

interface IRunnable {
    void Run();
}

class Athlete : IRunnable {
    public void Run() { Console.WriteLine("Athlete runs!"); }
}

class Program {
    static void Main() {
        Athlete a = new Athlete();
        a.Run();
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-enums',
    title: 'C# Enums',
    description: 'Define groups of unchangeable constants using enum keywords.',
    explanation: [
      'An enum is a special "class" that represents a group of constants.',
      'Values represent readable integers, starting by default at index 0.',
      'To verify numeric value, cast enum variables directly: (int)Level.Medium.'
    ],
    code: `using System;

enum Level {
    Low,
    Medium,
    High
}

class Program {
    static void Main() {
        Level val = Level.Medium;
        Console.WriteLine("Enum level: " + val);
        Console.WriteLine("Enum index: " + (int)val); // Prints 1
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-files',
    title: 'C# Files',
    description: 'Write and read data files using the System.IO Namespace.',
    explanation: [
      'The System.IO namespace contains classes to perform file operations.',
      'File class: Static methods to write/read (File.WriteAllText(), File.ReadAllText()).',
      'Directory class: Static methods to create or move directories.'
    ],
    code: `using System;

class Program {
    static void Main() {
        // Mock representing IO operations
        Console.WriteLine("string writeText = \\"Hello World!\\";");
        Console.WriteLine("File.WriteAllText(\\"test.txt\\", writeText);");
        Console.WriteLine("string readText = File.ReadAllText(\\"test.txt\\");");
        Console.WriteLine("C# File operations completed!");
    }
}`,
    languageId: 'csharp'
  },
  {
    id: 'csharp-exceptions',
    title: 'C# Exceptions (Try...Catch)',
    description: 'Gracefully catch and recover from system errors using try-catch blocks.',
    explanation: [
      'When an error occurs, C# throws an Exception object.',
      'The try statement monitors a block of code.',
      'The catch statement defines block operations to run if an error is thrown.',
      'The finally statement executes code regardless of error occurrences.'
    ],
    code: `using System;

class Program {
    static void Main() {
        try {
            int[] nums = { 1, 2, 3 };
            Console.WriteLine(nums[10]); // Throws IndexOutOfRange
        } catch (Exception e) {
            Console.WriteLine("Caught error: " + e.Message);
        } finally {
            Console.WriteLine("Try-catch sequence finished.");
        }
    }
}`,
    languageId: 'csharp'
  }
];
