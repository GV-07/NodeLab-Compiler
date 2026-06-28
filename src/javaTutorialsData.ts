import { TutorialTopic } from './cssTutorialsData';

export const JAVA_TOPICS: TutorialTopic[] = [
  {
    id: 'java-intro',
    title: 'Java Intro',
    description: 'Java is a popular, class-based, object-oriented programming language released in 1995.',
    explanation: [
      'Java was created by James Gosling at Sun Microsystems and is now owned by Oracle.',
      'It is designed to have as few implementation dependencies as possible: Write Once, Run Anywhere (WORA).',
      'This means compiled Java code can run on all platforms that support Java without the need for recompilation.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, NodeLab Java Sandbox!");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-start',
    title: 'Java Get Started',
    description: 'Learn how to write and execute your first basic Java program.',
    explanation: [
      'Every Java program must have at least one class definition.',
      'By convention, the entry point is the main method: public static void main(String[] args).',
      'The System.out.println() method outputs text directly to the console.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java Sandbox is Ready!");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-syntax',
    title: 'Java Syntax',
    description: 'Understand the basic rules and class requirements of Java syntax.',
    explanation: [
      'In Java, every line of executable code must run inside a class.',
      'Java is case-sensitive: "Main" and "main" have different meanings.',
      'The curly braces {} group statements together into blocks.',
      'Each code statement must end with a semicolon (;).'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Remember your semicolons!");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-output',
    title: 'Java Output',
    description: 'Print text and numbers to the screen using system print statements.',
    explanation: [
      'System.out.print() prints text without inserting a newline at the end.',
      'System.out.println() prints the text and appends a newline.',
      'You can also print mathematical calculation results directly.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.print("This is row 1. ");
        System.out.println("This adds a newline.");
        System.out.println(10 + 20); // Prints 30
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-comments',
    title: 'Java Comments',
    description: 'Document your code or prevent line execution with single or multiline comments.',
    explanation: [
      'Single-line comments start with two forward slashes (//).',
      'Multiline comments start with /* and end with */.',
      'Comments are ignored by the compiler and help explain the code logic.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        // This is a single line comment
        System.out.println("Comments are ignored!");
        /* This is a multi-line comment
           stretching across multiple lines. */
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-variables',
    title: 'Java Variables',
    description: 'Store diverse data elements inside strongly typed containers.',
    explanation: [
      'Java is a strongly typed language, so every variable must have a declared type.',
      'To create a variable, specify the type and assign it a value.',
      'Common types: String, int, float, char, and boolean.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        String name = "John";
        int age = 25;
        float price = 19.99f;
        boolean isJavaFun = true;
        System.out.println(name + " is " + age + " years old.");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-datatypes',
    title: 'Java Data Types',
    description: 'Explore primitive data types versus reference data types.',
    explanation: [
      'Primitive types include: byte, short, int, long, float, double, boolean, and char.',
      'Primitive types store values directly in memory.',
      'Reference types include: String, Arrays, Classes, and Interfaces.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        int myNum = 5;               // Integer (whole number)
        float myFloatNum = 5.99f;    // Floating point number
        char myLetter = 'D';         // Character
        boolean myBool = true;       // Boolean
        System.out.println("Int: " + myNum + ", Float: " + myFloatNum);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-typecasting',
    title: 'Java Type Casting',
    description: 'Convert or cast values between different numeric data types.',
    explanation: [
      'Widening Casting (automatically) converts a smaller type to a larger type size: byte -> short -> char -> int -> long -> float -> double.',
      'Narrowing Casting (manually) converts a larger type to a smaller type size: double -> float -> long -> int -> char -> short -> byte.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        int myInt = 9;
        double myDouble = myInt; // Automatic casting: int to double

        double pi = 3.14;
        int intPi = (int) pi; // Manual casting: double to int

        System.out.println("Widened Double: " + myDouble);
        System.out.println("Narrowed Integer: " + intPi);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-operators',
    title: 'Java Operators',
    description: 'Perform arithmetic, assignment, comparison, and logical calculations.',
    explanation: [
      'Arithmetic operators perform mathematical calculations: +, -, *, /, %, ++, --.',
      'Comparison operators compare two values: ==, !=, >, <, >=, <=.',
      'Logical operators verify boolean expressions: && (AND), || (OR), ! (NOT).'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = 3;
        System.out.println("Remainder (x % y): " + (x % y));
        System.out.println("Logical check: " + (x > 5 && y < 5));
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-strings',
    title: 'Java Strings',
    description: 'Manipulate text objects using built-in string helper methods.',
    explanation: [
      'A String in Java is actually an object, containing multiple utility methods.',
      'Important methods: length(), toUpperCase(), toLowerCase(), indexOf(), and concat().',
      'Strings are immutable, meaning they cannot be changed once created.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        String txt = "Hello World";
        System.out.println("Length: " + txt.length());
        System.out.println("Uppercase: " + txt.toUpperCase());
        System.out.println("Index of 'W': " + txt.indexOf("W"));
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-math',
    title: 'Java Math',
    description: 'Perform complex mathematical functions using the System Math class.',
    explanation: [
      'The Math class provides standard mathematical properties and operations.',
      'Common methods: Math.max(), Math.min(), Math.sqrt(), Math.abs(), and Math.random().',
      'No import is required, as the Math class is in the java.lang package.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Max of 5 and 10: " + Math.max(5, 10));
        System.out.println("Square root of 64: " + Math.sqrt(64));
        System.out.println("Random (0 to 100): " + (int)(Math.random() * 101));
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-booleans',
    title: 'Java Booleans',
    description: 'Utilize logical expressions that evaluate to true or false.',
    explanation: [
      'A boolean type can only have two values: true or false.',
      'Commonly used in conditional branching and loop execution structures.',
      'You can use comparison operators to construct logical boolean values.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        boolean isFishTasty = false;
        int age = 21;
        System.out.println("Can vote? " + (age >= 18));
        System.out.println("Is fish tasty? " + isFishTasty);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-ifelse',
    title: 'Java If...Else',
    description: 'Make decisions in your code based on logical conditions.',
    explanation: [
      'Use "if" to specify a block of code to execute if a condition is true.',
      'Use "else" to specify a block of code to execute if the condition is false.',
      'Use "else if" to specify a new condition to test if the first condition is false.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        int time = 22;
        if (time < 12) {
            System.out.println("Good morning.");
        } else if (time < 18) {
            System.out.println("Good afternoon.");
        } else {
            System.out.println("Good evening.");
        }
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-switch',
    title: 'Java Switch',
    description: 'Select one of many statements to execute using switch blocks.',
    explanation: [
      'Use the switch statement to execute one block of code out of multiple alternatives.',
      'Each branch matches a "case" value. Use "break" to terminate the active block.',
      'The optional "default" branch executes if no matches are found.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        int day = 4;
        switch (day) {
            case 1: System.out.println("Monday"); break;
            case 4: System.out.println("Thursday"); break;
            default: System.out.println("Weekend / Another day");
        }
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-while',
    title: 'Java While Loop',
    description: 'Execute statements repeatedly as long as specific conditions remain true.',
    explanation: [
      'The while loop repeats code blocks as long as a condition evaluates to true.',
      'The do-while loop is a variant that always runs the code block at least once before testing the condition.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        int i = 1;
        while (i < 4) {
            System.out.println("Count: " + i);
            i++;
        }
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-for',
    title: 'Java For Loop',
    description: 'Execute nested statements a specific number of times using structured loop iterators.',
    explanation: [
      'The standard for loop takes: initialization, condition, and increment statements.',
      'Java also has a "for-each" loop used exclusively to iterate over elements in arrays or collections.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Standard Loop:");
        for (int i = 0; i < 3; i++) {
            System.out.println("Index: " + i);
        }

        System.out.println("\\nFor-Each Loop:");
        String[] cars = {"Volvo", "BMW", "Ford"};
        for (String car : cars) {
            System.out.println(car);
        }
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-break',
    title: 'Java Break/Continue',
    description: 'Control flow inside loops using break and continue signals.',
    explanation: [
      'The break statement is used to jump directly out of a loop.',
      'The continue statement breaks the current iteration and jumps to the next iteration of the loop.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            if (i == 4) {
                continue; // Skip 4
            }
            if (i == 7) {
                break; // Stop at 7
            }
            System.out.println(i);
        }
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-arrays',
    title: 'Java Arrays',
    description: 'Store multiple values of the same data type inside a single indexed variable.',
    explanation: [
      'An array is declared by specifying the data type followed by square brackets [].',
      'Array indices start at index 0.',
      'You can retrieve the length of an array using the length property.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        String[] cars = {"Volvo", "BMW", "Ford"};
        System.out.println("First item: " + cars[0]);
        System.out.println("Array length: " + cars.length);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-methods',
    title: 'Java Methods',
    description: 'Create reusable blocks of program statements called methods.',
    explanation: [
      'A method is a block of code which only runs when it is called.',
      'Methods must be declared within a class.',
      'The void keyword indicates that the method does not return any value.'
    ],
    code: `public class Main {
    static void myMethod() {
        System.out.println("Hello from myMethod!");
    }

    public static void main(String[] args) {
        myMethod();
        myMethod();
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-methodparams',
    title: 'Java Method Parameters',
    description: 'Pass arguments and return processed values from custom methods.',
    explanation: [
      'Information can be passed to methods as parameters, which behave like variables.',
      'You can pass multiple parameters separated by commas.',
      'To return a value, specify a return type instead of void, and use the return keyword.'
    ],
    code: `public class Main {
    static int calculateSum(int x, int y) {
        return x + y;
    }

    public static void main(String[] args) {
        int result = calculateSum(15, 25);
        System.out.println("Sum is: " + result);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-overloading',
    title: 'Java Method Overloading',
    description: 'Define multiple methods with the same name but different input parameter configurations.',
    explanation: [
      'With method overloading, multiple methods can have the same name with different parameters.',
      'Overloading is based on the number, types, or order of parameters.',
      'This increases code readability and consistency.'
    ],
    code: `public class Main {
    static int plusMethod(int x, int y) {
        return x + y;
    }

    static double plusMethod(double x, double y) {
        return x + y;
    }

    public static void main(String[] args) {
        int myNum1 = plusMethod(8, 5);
        double myNum2 = plusMethod(4.3, 6.26);
        System.out.println("Int plus: " + myNum1);
        System.out.println("Double plus: " + myNum2);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-scope',
    title: 'Java Scope',
    description: 'Manage variable visibility boundaries across method blocks and scopes.',
    explanation: [
      'Variables are only accessible inside the region they are declared. This is called scope.',
      'Method Scope: Variables declared directly inside a method are only available in that method.',
      'Block Scope: Variables declared inside curly braces {} are only available within that block.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        // Variable x is available here
        int x = 100;
        System.out.println("x: " + x);

        { // This is a nested block
            int y = 50;
            System.out.println("Nested block y: " + y);
        }
        // y is not accessible here!
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-recursion',
    title: 'Java Recursion',
    description: 'Execute repetitive statements by letting functions call themselves.',
    explanation: [
      'Recursion is the technique of making a method call itself.',
      'It provides a way to break complicated problems down into simple, manageable tasks.',
      'Every recursive method must have a base case to stop execution and prevent infinite loops.'
    ],
    code: `public class Main {
    static int sum(int k) {
        if (k > 0) {
            return k + sum(k - 1);
        } else {
            return 0;
        }
    }

    public static void main(String[] args) {
        int result = sum(10);
        System.out.println("Sum of numbers up to 10: " + result);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-oop',
    title: 'Java OOP',
    description: 'Object-Oriented Programming models real-world concepts using classes and objects.',
    explanation: [
      'OOP stands for Object-Oriented Programming.',
      'It splits code into modular units: Classes and Objects.',
      'The four key pillars of OOP are Inheritance, Polymorphism, Abstraction, and Encapsulation.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Object-Oriented Programming (OOP) keeps Java modular and scalable!");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-classesobjects',
    title: 'Java Classes/Objects',
    description: 'Declare classes to act as templates for instantiating object structures.',
    explanation: [
      'A Class is a template or blueprint for creating object instances.',
      'An Object is an instance of a Class.',
      'You instantiate classes using the "new" keyword.'
    ],
    code: `class Car {
    String model = "Mustang";
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        System.out.println("Car Model: " + myCar.model);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-attributes',
    title: 'Java Class Attributes',
    description: 'Set and retrieve variables defined within classes, also known as fields.',
    explanation: [
      'Class attributes are variables declared directly inside the class definition block.',
      'You can access attributes using the dot (.) operator on the object instance.',
      'Use the final keyword if you want to prevent attribute modification.'
    ],
    code: `class Person {
    String name = "Alice";
    final int maxAge = 120;
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.name = "Bob"; // Allowed
        // p.maxAge = 130; // Not allowed: Compile Error!
        System.out.println(p.name + " max age: " + p.maxAge);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-classmethods',
    title: 'Java Class Methods',
    description: 'Define operations and behaviors that class objects can execute.',
    explanation: [
      'Class methods are functions defined inside a class.',
      'static methods can be called directly without creating an object instance.',
      'public methods can only be called after creating an object instance.'
    ],
    code: `class Helper {
    static void staticGreeting() {
        System.out.println("Hello without object!");
    }
    public void instanceGreeting() {
        System.out.println("Hello with object!");
    }
}

public class Main {
    public static void main(String[] args) {
        Helper.staticGreeting(); // Called directly

        Helper h = new Helper();
        h.instanceGreeting(); // Called on instance
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-constructors',
    title: 'Java Constructors',
    description: 'Initialize object instances using constructor methods.',
    explanation: [
      'A constructor is a special method used to initialize objects when created.',
      'The constructor name must match the class name exactly, and it has no return type.',
      'Constructors can accept parameters to set starting attribute values.'
    ],
    code: `class Car {
    String model;
    int year;

    Car(String m, int y) {
        model = m;
        year = y;
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Tesla Model S", 2022);
        System.out.println(myCar.model + " from year " + myCar.year);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-modifiers',
    title: 'Java Modifiers',
    description: 'Set access permissions and special characteristics using modifiers.',
    explanation: [
      'Access Modifiers manage visibility: public, private, protected, and default.',
      'Non-Access Modifiers add special behaviors: final, static, abstract, transient, synchronized, volatile.'
    ],
    code: `class Data {
    public String publicField = "Anyone can read";
    private String privateField = "Only this class";

    public String getPrivateField() {
        return privateField;
    }
}

public class Main {
    public static void main(String[] args) {
        Data d = new Data();
        System.out.println(d.publicField);
        System.out.println(d.getPrivateField());
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-encapsulation',
    title: 'Java Encapsulation',
    description: 'Protect sensitive data fields by utilizing private variables and getters/setters.',
    explanation: [
      'Encapsulation makes sure that "sensitive" data is hidden from users.',
      'To achieve encapsulation, declare class variables as private.',
      'Provide public get and set methods to access and update the values safely.'
    ],
    code: `class Account {
    private String ownerName;

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String newName) {
        this.ownerName = newName;
    }
}

public class Main {
    public static void main(String[] args) {
        Account myAcc = new Account();
        myAcc.setOwnerName("Venkatesan");
        System.out.println("Account Owner: " + myAcc.getOwnerName());
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-packages',
    title: 'Java Packages / API',
    description: 'Organize files into directories and import built-in libraries.',
    explanation: [
      'A package in Java is used to group related classes. Think of it as a folder.',
      'Packages prevent name conflicts and are imported using the import keyword.',
      'Java API includes standard packages containing reusable components.'
    ],
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Scanner class is imported from java.util package!");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-inheritance',
    title: 'Java Inheritance',
    description: 'Derive subclass models from parent classes using the extends keyword.',
    explanation: [
      'Inheritance allows a class to inherit fields and methods from another class.',
      'Subclass (child): The class that inherits from another class.',
      'Superclass (parent): The class being inherited from.',
      'Use the extends keyword to establish inheritance.'
    ],
    code: `class Vehicle {
    protected String brand = "Ford";
    public void honk() {
        System.out.println("Beep, beep!");
    }
}

class Car extends Vehicle {
    private String modelName = "Mustang";
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.honk(); // Call inherited method
        System.out.println(myCar.brand); // Access inherited attribute
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-polymorphism',
    title: 'Java Polymorphism',
    description: 'Perform identical operations across distinct objects using overriding.',
    explanation: [
      'Polymorphism means "many forms", and occurs when classes are related by inheritance.',
      'It allows child classes to override parent class methods with custom implementations.',
      'This lets you perform a single action in different ways.'
    ],
    code: `class Animal {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.sound(); // Polymorphic method call
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-innerclasses',
    title: 'Java Inner Classes',
    description: 'Nest classes inside other classes to keep related components grouped.',
    explanation: [
      'Java allows nesting classes (a class inside another class).',
      'This groups classes that belong together, making code more readable.',
      'To access the inner class, you must instantiate the outer class first.'
    ],
    code: `class OuterClass {
    int x = 10;

    class InnerClass {
        int y = 5;
    }
}

public class Main {
    public static void main(String[] args) {
        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        System.out.println(outer.x + inner.y); // Outputs 15
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-abstraction',
    title: 'Java Abstraction',
    description: 'Hide implementation details using abstract classes and methods.',
    explanation: [
      'Data abstraction hides certain details and only shows essential information.',
      'Abstract class: A restricted class that cannot be used to create objects directly.',
      'Abstract method: Can only be used in an abstract class, and has no body.'
    ],
    code: `abstract class Animal {
    public abstract void sound();
    public void sleep() {
        System.out.println("Zzz...");
    }
}

class Pig extends Animal {
    public void sound() {
        System.out.println("Wee wee");
    }
}

public class Main {
    public static void main(String[] args) {
        Pig myPig = new Pig();
        myPig.sound();
        myPig.sleep();
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-interface',
    title: 'Java Interface',
    description: 'Achieve full abstraction and multiple inheritance using interfaces.',
    explanation: [
      'An interface is a completely "abstract class" used to group related empty methods.',
      'Use the implements keyword to implement an interface.',
      'Unlike classes, a class can implement multiple interfaces at the same time.'
    ],
    code: `interface Animal {
    public void animalSound();
}

class Cat implements Animal {
    public void animalSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.animalSound();
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-enums',
    title: 'Java Enums',
    description: 'Define groups of unchangeable constants using enum keywords.',
    explanation: [
      'An enum is a special "class" that represents a group of constants (unchangeable variables).',
      'Use enums when you have values that you know will not change (like days, colors, cards).',
      'Enums are accessible inside classes using dot notation.'
    ],
    code: `enum Level {
    LOW,
    MEDIUM,
    HIGH
}

public class Main {
    public static void main(String[] args) {
        Level myVar = Level.MEDIUM;
        System.out.println("Selected Level: " + myVar);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-userinput',
    title: 'Java User Input',
    description: 'Read user terminal inputs using the java.util.Scanner library.',
    explanation: [
      'The Scanner class is used to get user input, and is found in the java.util package.',
      'Important helper methods: nextLine(), nextInt(), nextDouble(), nextBoolean().'
    ],
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Simple mock representing Scanner setup
        System.out.println("Scanner myObj = new Scanner(System.in);");
        System.out.println("String userName = myObj.nextLine();");
        System.out.println("Input successfully bound!");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-date',
    title: 'Java Date',
    description: 'Display and format dates using the java.time package.',
    explanation: [
      'Java does not have a built-in Date class, but imports java.time instead.',
      'LocalDate: Represents a date (year, month, day).',
      'LocalTime: Represents a time (hour, minute, second).',
      'LocalDateTime: Represents both date and time.'
    ],
    code: `import java.time.LocalDate;
import java.time.LocalDateTime;

public class Main {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println("Today's Date: " + today);
        System.out.println("Timestamp: " + LocalDateTime.now());
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-arraylist',
    title: 'Java ArrayList',
    description: 'Work with dynamic arrays that automatically resize when elements are added.',
    explanation: [
      'The ArrayList class is a resizable array, found in the java.util package.',
      'Unlike regular arrays, you can add or remove elements whenever you want.',
      'To use ArrayList, you must specify reference data types (like Integer instead of int).'
    ],
    code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Mazda");
        System.out.println("ArrayList items: " + cars);
        System.out.println("Item count: " + cars.size());
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-linkedlist',
    title: 'Java LinkedList',
    description: 'Organize elements in doubly-linked list nodes for fast insertion and deletion.',
    explanation: [
      'The LinkedList is almost identical to ArrayList in usage, but has a different internal structure.',
      'It stores items in "containers" that link to each other sequentially.',
      'Use LinkedList for fast data manipulation (insert/delete) inside large datasets.'
    ],
    code: `import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> cars = new LinkedList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.addFirst("Tesla"); // Unique LinkedList method
        System.out.println("LinkedList: " + cars);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-hashmap',
    title: 'Java HashMap',
    description: 'Map unique keys to corresponding values using key-value hashes.',
    explanation: [
      'A HashMap stores items in "key/value" pairs, found in the java.util package.',
      'You access them by an index of another type (e.g. a String key).',
      'HashMap does not allow duplicate keys.'
    ],
    code: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, String> capitalCities = new HashMap<String, String>();
        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        System.out.println("Capital of Germany: " + capitalCities.get("Germany"));
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-hashset',
    title: 'Java HashSet',
    description: 'Maintain unique lists of items that do not contain duplicates.',
    explanation: [
      'A HashSet is a collection of items where every item is unique, found in java.util.',
      'No duplicate values are allowed in HashSet.',
      'Useful for checking membership status inside large collections.'
    ],
    code: `import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> cars = new HashSet<String>();
        cars.add("Volvo");
        cars.add("Volvo"); // Ignored
        cars.add("BMW");
        System.out.println("Unique Cars in Set: " + cars);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-iterator',
    title: 'Java Iterator',
    description: 'Traverse through java collections using clean iterator pointers.',
    explanation: [
      'An Iterator is an object that can be used to loop through collections (like ArrayList).',
      'Found in java.util. Use the iterator() method to obtain it.',
      'Important methods: hasNext(), next(), and remove().'
    ],
    code: `import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");

        Iterator<String> it = cars.iterator();
        while (it.hasNext()) {
            System.out.println("Iterator Item: " + it.next());
        }
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-wrapperclasses',
    title: 'Java Wrapper Classes',
    description: 'Convert primitive data types to corresponding objects.',
    explanation: [
      'Wrapper classes provide a way to use primitive data types as objects.',
      'E.g. Integer wraps int, Double wraps double, Character wraps char, etc.',
      'Required when working with collection frameworks (like ArrayList).'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        Integer myInt = 5;
        Double myDouble = 5.99;
        Character myChar = 'A';
        System.out.println(myInt.intValue());
        System.out.println(myChar.charValue());
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-exceptions',
    title: 'Java Exceptions',
    description: 'Catch and handle exceptions using try, catch, and finally statements.',
    explanation: [
      'When an error occurs, Java will normally stop and generate an error message.',
      'The try statement allows you to define a block of code to be tested for errors.',
      'The catch statement allows you to handle any exceptions thrown.',
      'The finally statement lets you execute code regardless of the outcome.'
    ],
    code: `public class Main {
    public static void main(String[] args) {
        try {
            int[] myNumbers = {1, 2, 3};
            System.out.println(myNumbers[10]); // Throws IndexOutOfBounds
        } catch (Exception e) {
            System.out.println("Something went wrong: " + e.getMessage());
        } finally {
            System.out.println("The try-catch statement is finished.");
        }
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-regex',
    title: 'Java RegEx',
    description: 'Search and replace custom string patterns using the Pattern package.',
    explanation: [
      'A RegEx (Regular Expression) is a sequence of characters that forms a search pattern.',
      'Java does not have a built-in RegEx class, but we can import java.util.regex.',
      'Pattern class: Defines a pattern (to be used in a search).',
      'Matcher class: Used to search for the pattern.'
    ],
    code: `import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("NodeLab", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher("Welcome to NodeLab Sandbox!");
        boolean matchFound = matcher.find();
        System.out.println("Match found? " + matchFound);
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-threads',
    title: 'Java Threads',
    description: 'Implement background and multi-threaded processing using Thread classes.',
    explanation: [
      'Threads allow a program to operate more efficiently by doing multiple things at once.',
      'Can be created by extending the Thread class and overriding its run() method.',
      'Can also be created by implementing the Runnable interface.'
    ],
    code: `class MyThread extends Thread {
    public void run() {
        System.out.println("This code is running in a thread!");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
        System.out.println("This code is outside of the thread.");
    }
}`,
    languageId: 'java'
  },
  {
    id: 'java-lambda',
    title: 'Java Lambda',
    description: 'Write elegant, inline expressions using functional interfaces.',
    explanation: [
      'A lambda expression is a short block of code which takes in parameters and returns a value.',
      'Lambda expressions are similar to methods, but they do not need a name and can be implemented right in the body of a method.',
      'Syntax: parameter -> expression'
    ],
    code: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(5);
        numbers.add(9);
        numbers.add(8);
        numbers.add(1);
        System.out.println("Iterating with Lambda:");
        numbers.forEach( (n) -> { System.out.println("Val: " + n); } );
    }
}`,
    languageId: 'java'
  }
];
