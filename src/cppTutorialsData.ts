import { TutorialTopic } from './cssTutorialsData';

export const CPP_TOPICS: TutorialTopic[] = [
  {
    id: 'cpp-intro',
    title: 'C++ Intro',
    description: 'C++ is a cross-platform language created by Bjarne Stroustrup as an extension of the C language.',
    explanation: [
      'C++ gives programmers a high level of control over system resources and memory.',
      'It supports Object-Oriented Programming (OOP) with classes, inheritance, polymorphism, templates, and exception handling.',
      'C++ is widely used in games, operating systems, embedded systems, and browsers.'
    ],
    code: `#include <iostream>

int main() {
    std::cout << "Welcome to C++ programming on NodeLab!\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-start',
    title: 'C++ Get Started',
    description: 'Write, compile, and run your first basic object-oriented C++ program.',
    explanation: [
      'Every C++ program must include a header like <iostream> to handle input-output streams.',
      'Standard output uses "std::cout" paired with the stream extraction operator <<.',
      'Compile with standard C++ compilers (like g++) to produce executable binaries.'
    ],
    code: `#include <iostream>

int main() {
    std::cout << "C++ compiler is ready and running!\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-syntax',
    title: 'C++ Syntax',
    description: 'Understand header inclusions, namespaces, cout streams, and return statements.',
    explanation: [
      'Line 1: #include <iostream> imports standard stream options.',
      'Line 2: using namespace std allows using names for objects and variables from the standard library without prefixing std::.',
      'Line 3: int main() launches the program execution block.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    cout << "Standard namespace simplifies output!\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-output',
    title: 'C++ Output',
    description: 'Print texts, variables, and calculations using cout streams.',
    explanation: [
      'The cout object, together with the << operator, is used to output values/print text in C++.',
      'You can add multiple << operators to chain values in a single statement.',
      'Use \\n or the "endl" manipulator to insert newline breaks.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello C++!" << endl;
    cout << "Math: " << (5 + 10) << "\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-comments',
    title: 'C++ Comments',
    description: 'Document your logic using single-line and multi-line C++ comments.',
    explanation: [
      'Single-line comments start with double forward slashes //.',
      'Multi-line comments start with /* and end with */.',
      'Comments are entirely ignored by C++ compilers during build phases.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    // Single line comment
    cout << "Comments explain your code logic!\\n";
    /* Multi line comment
       stretching here */
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-variables',
    title: 'C++ Variables',
    description: 'Allocate strongly-typed memory storage containers for diverse data items.',
    explanation: [
      'C++ variables must be declared with a specific type.',
      'Common types: int, double, char, string, and bool.',
      'Variables can be initialized during declaration or assigned values later.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 21;
    double gpa = 3.85;
    string name = "John";
    cout << name << " is " << age << " with GPA: " << gpa << "\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-userinput',
    title: 'C++ User Input',
    description: 'Accept keyboard and terminal data entries using standard cin streams.',
    explanation: [
      'std::cin is a predefined variable that reads data from the keyboard with the extraction operator >>.',
      'Ensure the target variable type matches what the user is typing.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Mocking input reading
    string inputName = "Alice";
    cout << "string name;\\n";
    cout << "cin >> name;\\n";
    cout << "Welcome " << inputName << " to our platform!\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-datatypes',
    title: 'C++ Data Types',
    description: 'Differentiate between numeric, character, boolean, and string primitives.',
    explanation: [
      'Integer types: int (4 bytes).',
      'Floating point: float (4 bytes), double (8 bytes).',
      'Character types: char (1 byte, single quotes).',
      'Boolean types: bool (1 byte, true/false).'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    char letter = 'B';
    bool status = true;
    double exact = 9.99;
    cout << letter << " - status: " << status << " - val: " << exact << "\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-operators',
    title: 'C++ Operators',
    description: 'Execute arithmetic, relational, and logical conditional expressions.',
    explanation: [
      'Arithmetic operators: +, -, *, /, %, ++, --.',
      'Relational operators: ==, !=, >, <, >=, <=.',
      'Logical operators: && (AND), || (OR), ! (NOT).'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 3;
    cout << "Sum: " << (a + b) << endl;
    cout << "Is a > 5? " << (a > 5) << endl; // Prints 1
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-strings',
    title: 'C++ Strings',
    description: 'Work with the string object library to merge and modify text strings.',
    explanation: [
      'The string class is part of the standard library, requiring #include <string>.',
      'Strings are objects which have useful methods like length(), append(), and find().',
      'Strings can be concatenated using the plus (+) operator.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string first = "Node";
    string second = "Lab";
    string combined = first + second;
    cout << "Combined: " << combined << endl;
    cout << "Length: " << combined.length() << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-math',
    title: 'C++ Math',
    description: 'Execute math calculations using cmath library functions.',
    explanation: [
      'C++ provides cmath header support for various math operations.',
      'Helpers include: max(x, y), min(x, y), sqrt(x), round(x), and log(x).'
    ],
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << "Max of 15 and 20: " << max(15, 20) << endl;
    cout << "Square root of 81: " << sqrt(81) << endl;
    cout << "Power 2^10: " << pow(2, 10) << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-booleans',
    title: 'C++ Booleans',
    description: 'Represent binary truth flags with bool true or false.',
    explanation: [
      'A boolean data type can only take the values true (1) or false (0).',
      'Very useful for checking conditions and directing conditional path statements.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    bool isCodingFun = true;
    bool isTodaySunday = false;
    cout << "Fun: " << isCodingFun << endl; // Prints 1
    cout << "Sunday: " << isTodaySunday << endl; // Prints 0
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-conditions',
    title: 'C++ Conditions (If...Else)',
    description: 'Direct execution pathways based on conditional logical tests.',
    explanation: [
      'Use "if" to specify a block of code to run if a condition is true.',
      'Use "else if" to specify a new condition if the first condition is false.',
      'Use "else" to specify a block of code if all conditions are false.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    int x = 20;
    if (x > 18) {
        cout << "Access granted." << endl;
    } else {
        cout << "Access denied." << endl;
    }
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-switch',
    title: 'C++ Switch',
    description: 'Match variable values to corresponding cases inside switch blocks.',
    explanation: [
      'Use the switch statement to select one of many blocks of code to be executed.',
      'A switch expression is evaluated once. Value of expression is compared with the values of each case.',
      'The "break" statement jumps out of the switch block.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    int day = 2;
    switch (day) {
        case 1: cout << "Monday" << endl; break;
        case 2: cout << "Tuesday" << endl; break;
        default: cout << "Another day" << endl;
    }
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-while',
    title: 'C++ While Loop',
    description: 'Execute statement blocks as long as relational conditions evaluate to true.',
    explanation: [
      'Loops execute a block of code as long as a specified condition is reached.',
      'The while loop checks the condition first.',
      'The do/while loop executes the code block once before testing the loop condition.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 3) {
        cout << "Index: " << i << endl;
        i++;
    }
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-for',
    title: 'C++ For Loop',
    description: 'Count and loop through code blocks using incrementing loop pointers.',
    explanation: [
      'A for loop is used when you know exactly how many times you want to iterate through a block of code.',
      'Syntax: for (initialization; condition; increment/decrement).'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 3; i++) {
        cout << "Index: " << i << endl;
    }
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-break',
    title: 'C++ Break/Continue',
    description: 'Directly terminate loops or skip block steps using break and continue signals.',
    explanation: [
      'The break statement is used to jump directly out of a loop.',
      'The continue statement breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 6; i++) {
        if (i == 2) {
            continue; // Skip 2
        }
        if (i == 4) {
            break;    // Stop loop at 4
        }
        cout << i << " ";
    }
    cout << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-arrays',
    title: 'C++ Arrays',
    description: 'Manage lists of identical elements mapped to fixed indices.',
    explanation: [
      'Arrays are used to store multiple values in a single variable.',
      'To declare an array, define the variable type with square brackets: type name[size];',
      'You can iterate through array elements using for or range-based loops.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string cars[3] = {"Volvo", "BMW", "Ford"};
    for (string car : cars) {
        cout << car << endl;
    }
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-structures',
    title: 'C++ Structures',
    description: 'Group diverse variables under a single structural layout object.',
    explanation: [
      'Structures (structs) allow you to group related variables of different types.',
      'Unlike arrays, structs can hold a mix of variables (members).',
      'Access members of structures using dot notation (.).'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

struct Car {
    string brand;
    int year;
};

int main() {
    Car myCar = {"Tesla", 2023};
    cout << "Brand: " << myCar.brand << ", Year: " << myCar.year << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-references',
    title: 'C++ References',
    description: 'Create variable aliases pointing to the same memory location using &.',
    explanation: [
      'A reference variable is an "alias" (alternative name) for an existing variable.',
      'Created with the ampersand & symbol (e.g., string &ref = original;).',
      'Changing values through references updates the original variable instantly.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string food = "Pizza";
    string &meal = food; // Reference variable

    meal = "Burger"; // Updates meal AND food
    cout << "Food: " << food << endl; // Prints Burger
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-pointers',
    title: 'C++ Pointers',
    description: 'Store and manipulate memory addresses using pointer declarations.',
    explanation: [
      'A pointer is a variable that stores the memory address of another variable.',
      'Created with the asterisk * symbol (e.g., int* ptr = &val;).',
      'Access the original variables value by dereferencing the pointer using *ptr.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string food = "Pizza";
    string* ptr = &food; // Pointer variable

    cout << "Address: " << ptr << endl;
    cout << "Dereferenced: " << *ptr << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-functions',
    title: 'C++ Functions',
    description: 'Enclose statements in reusable subroutines called functions.',
    explanation: [
      'A function is a block of code which only runs when it is called.',
      'Functions can accept parameters and return values.',
      'Declare functions above main(), or include a prototype declaration at the top.'
    ],
    code: `#include <iostream>
using namespace std;

void greeting() {
    cout << "Hello from C++ function!" << endl;
}

int main() {
    greeting();
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-functionparams',
    title: 'C++ Function Parameters',
    description: 'Pass reference variables or values as inputs to functions.',
    explanation: [
      'Information can be passed to functions as parameters.',
      'Parameters can have default arguments (e.g. void fn(int x = 10)).',
      'Pass-by-reference (using &) avoids copying large structures and allows direct editing.'
    ],
    code: `#include <iostream>
using namespace std;

void swapNums(int &x, int &y) {
    int z = x;
    x = y;
    y = z;
}

int main() {
    int first = 10;
    int second = 20;
    swapNums(first, second);
    cout << "First: " << first << ", Second: " << second << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-overloading',
    title: 'C++ Overloading',
    description: 'Define multiple functions with identical names but differing signatures.',
    explanation: [
      'Function overloading allows multiple functions to have the same name with different parameters.',
      'The compiler automatically matches the call to the appropriate function signature.'
    ],
    code: `#include <iostream>
using namespace std;

int plusFunc(int x, int y) {
    return x + y;
}

double plusFunc(double x, double y) {
    return x + y;
}

int main() {
    cout << "Int addition: " << plusFunc(8, 5) << endl;
    cout << "Double addition: " << plusFunc(4.3, 6.2) << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-scope',
    title: 'C++ Scope',
    description: 'Understand the boundaries of local and global variable scopes.',
    explanation: [
      'Variables created inside functions are local, available only inside that block.',
      'Variables created outside of functions are global, available from any part of the program.'
    ],
    code: `#include <iostream>
using namespace std;

int x = 100; // Global variable

int main() {
    int x = 50; // Local variable overrides global
    cout << "Local x: " << x << endl;
    cout << "Global x (using scope resolution): " << ::x << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-recursion',
    title: 'C++ Recursion',
    description: 'Construct repetitive algorithms by allowing functions to call themselves.',
    explanation: [
      'Recursion is the technique of making a function call itself.',
      'This can write elegant algorithms but requires a strict exit condition.',
      'Without a base case, recursion will exhaust available call stack memory.'
    ],
    code: `#include <iostream>
using namespace std;

int sum(int k) {
    if (k > 0) {
        return k + sum(k - 1);
    } else {
        return 0;
    }
}

int main() {
    cout << "Sum up to 10: " << sum(10) << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-oop',
    title: 'C++ OOP (Object-Oriented)',
    description: 'Learn Object-Oriented Programming concepts in C++.',
    explanation: [
      'OOP centers around creating classes containing properties and methods.',
      'Encapsulation secures data. Inheritance reuses code.',
      'Polymorphism adapts behaviors dynamically.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    cout << "C++ Object-Oriented programming handles complex program layers cleanly!\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-classesobjects',
    title: 'C++ Classes/Objects',
    description: 'Declare classes to act as templates for instantiating object structures.',
    explanation: [
      'A Class is a user-defined data type representing properties and methods.',
      'An Object is an instance of a Class.',
      'Instantiate class layouts to access member variables.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

class MyClass {
  public:
    int myNum = 15;
    string myString = "C++ Object initialized";
};

int main() {
    MyClass myObj;
    cout << myObj.myNum << endl;
    cout << myObj.myString << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-classmethods',
    title: 'C++ Class Methods',
    description: 'Define functions inside classes representing object behaviors.',
    explanation: [
      'Class methods are functions declared inside the class definition.',
      'Methods can be defined either inside the class body, or outside using the scope resolution operator (::).'
    ],
    code: `#include <iostream>
using namespace std;

class Printer {
  public:
    void printHello() {
        cout << "Hello from inside class!\\n";
    }
};

int main() {
    Printer p;
    p.printHello();
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-constructors',
    title: 'C++ Constructors',
    description: 'Initialize starting variables when creating class object instances.',
    explanation: [
      'A constructor is a special method automatically called when an object is created.',
      'It must have the exact same name as the class and has no return type.',
      'Constructors can accept parameters to set starting attribute values.'
    ],
    code: `#include <iostream>
#include <string>
using namespace std;

class Car {
  public:
    string brand;
    int year;
    Car(string x, int y) {
        brand = x;
        year = y;
    }
};

int main() {
    Car c1("BMW", 1999);
    cout << c1.brand << " - " << c1.year << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-accessmodifiers',
    title: 'C++ Access Modifiers',
    description: 'Control property security limits using public, private, and protected.',
    explanation: [
      'public: Members are accessible outside the class.',
      'private: Members cannot be accessed or viewed from outside the class.',
      'protected: Members cannot be accessed from outside, but can be accessed in inherited classes.'
    ],
    code: `#include <iostream>
using namespace std;

class Vault {
  public:
    int id = 101;
  private:
    int pass = 5985;
};

int main() {
    Vault myVault;
    cout << "ID: " << myVault.id << endl;
    // cout << myVault.pass; // Error! pass is private
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-encapsulation',
    title: 'C++ Encapsulation',
    description: 'Hide sensitive data variables behind getters and setters.',
    explanation: [
      'Encapsulation protects sensitive variables by declaring them private.',
      'Provide public get and set methods to view and modify variables safely.'
    ],
    code: `#include <iostream>
using namespace std;

class Employee {
  private:
    int salary;
  public:
    void setSalary(int s) { salary = s; }
    int getSalary() { return salary; }
};

int main() {
    Employee emp;
    emp.setSalary(50000);
    cout << "Salary: " << emp.getSalary() << endl;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-inheritance',
    title: 'C++ Inheritance',
    description: 'Reuse code by deriving new classes from existing parent classes.',
    explanation: [
      'Inheritance lets subclasses (child classes) reuse fields and methods from superclasses (parent classes).',
      'Use the colon (:) operator to specify the inheritance relationship: class Child : public Parent.'
    ],
    code: `#include <iostream>
using namespace std;

class Vehicle {
  public:
    void honk() { cout << "Beep beep!\\n"; }
};

class Car : public Vehicle {};

int main() {
    Car myCar;
    myCar.honk(); // Access inherited method
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-polymorphism',
    title: 'C++ Polymorphism',
    description: 'Override base class functions to run specific sub-class behaviors.',
    explanation: [
      'Polymorphism occurs when multiple classes are related by inheritance.',
      'It allows child classes to override parent class methods to provide custom versions.',
      'Use the "virtual" keyword in the base class to enable dynamic polymorphic behavior.'
    ],
    code: `#include <iostream>
using namespace std;

class Animal {
  public:
    virtual void sound() { cout << "Animal sound\\n"; }
};

class Dog : public Animal {
  public:
    void sound() override { cout << "Dog barks\\n"; }
};

int main() {
    Animal* myAnimal = new Dog();
    myAnimal->sound(); // Prints Dog barks
    delete myAnimal;
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-files',
    title: 'C++ Files',
    description: 'Read and write local file data using fstream libraries.',
    explanation: [
      'The "fstream" library allows us to work with files.',
      'ofstream: Creates and writes files.',
      'ifstream: Reads from files.',
      'fstream: General file creation, reading, and writing capabilities.'
    ],
    code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Mock showing fstream layout operations
    cout << "ofstream MyFile(\\"test.txt\\");\\n";
    cout << "MyFile << \\"Writing text inside C++!\\";\\n";
    cout << "MyFile.close();\\n";
    cout << "File operations completed successfully!\\n";
    return 0;
}`,
    languageId: 'cpp'
  },
  {
    id: 'cpp-exceptions',
    title: 'C++ Exceptions (Try...Catch)',
    description: 'Gracefully catch and recover from program faults using try-catch blocks.',
    explanation: [
      'Exception handling in C++ is managed using three keywords: try, throw, and catch.',
      'The try statement monitors a block of code.',
      'The throw keyword triggers exceptions when errors occur.',
      'The catch block defines statements to handle and resolve the error.'
    ],
    code: `#include <iostream>
using namespace std;

int main() {
    try {
        int age = 15;
        if (age < 18) {
            throw 505; // Throw error code
        }
    } catch (int num) {
        cout << "Access denied - Error Code: " << num << endl;
    }
    return 0;
}`,
    languageId: 'cpp'
  }
];
