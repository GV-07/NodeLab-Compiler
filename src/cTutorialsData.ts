import { TutorialTopic } from './cssTutorialsData';

export const C_TOPICS: TutorialTopic[] = [
  {
    id: 'c-intro',
    title: 'C Intro',
    description: 'C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie.',
    explanation: [
      'C was originally developed at Bell Labs to write the UNIX operating system.',
      'It is a highly popular, extremely fast, low-level language that interacts directly with hardware.',
      'Many modern programming languages like C++, Java, C#, and JavaScript inherit syntax from C.'
    ],
    code: `#include <stdio.h>

int main() {
    printf("Welcome to C programming on NodeLab!\\n");
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-start',
    title: 'C Get Started',
    description: 'Write, compile, and run your first procedural C program.',
    explanation: [
      'To write C, we need a text editor and a compiler (like GCC) to transform code into machine instructions.',
      'The #include <stdio.h> library header includes basic input-output functions like printf.',
      'The main() function serves as the starting block for executable routines.'
    ],
    code: `#include <stdio.h>

int main() {
    printf("C compiler is working perfectly!\\n");
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-syntax',
    title: 'C Syntax',
    description: 'Understand headers, functions, statements, and curly brace grouping blocks.',
    explanation: [
      'Line 1: #include <stdio.h> is a preprocessor command importing standard IO functions.',
      'Line 2: int main() defines the primary entry function. It returns an integer status code.',
      'Line 3: Statements in C are terminated with a semicolon (;).',
      'Line 4: return 0 ends the main function and signifies success status.'
    ],
    code: `#include <stdio.h>

int main() {
    printf("Syntax rules!\\n");
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-output',
    title: 'C Output',
    description: 'Output formatted text strings or variable content using printf.',
    explanation: [
      'printf() is the primary output function in C.',
      'To print variables, use format specifiers like %d (integer), %f (float), %c (character), and %s (string).',
      'Use \\n to print a newline character.'
    ],
    code: `#include <stdio.h>

int main() {
    printf("Row 1\\nRow 2\\n");
    printf("Age: %d\\n", 25);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-comments',
    title: 'C Comments',
    description: 'Document your code or bypass executing statements with comments.',
    explanation: [
      'Single-line comments start with double forward slashes //.',
      'Multiline comments start with /* and end with */.',
      'Comments help make code readable and are completely skipped by the compiler.'
    ],
    code: `#include <stdio.h>

int main() {
    // This is a single-line comment in C
    printf("Hello C!\\n");
    /* This is a multi-line comment
       spanning multiple lines */
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-variables',
    title: 'C Variables',
    description: 'Reserve memory locations for variables of specific types.',
    explanation: [
      'Variables store values of a declared data type.',
      'To declare a variable, specify the type and name: type variableName = value;',
      'Format specifiers must match variable types in printf.'
    ],
    code: `#include <stdio.h>

int main() {
    int myNum = 15;
    char myLetter = 'D';
    printf("Number: %d, Letter: %c\\n", myNum, myLetter);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-datatypes',
    title: 'C Data Types',
    description: 'Explore numeric and character data types including int, float, double, and char.',
    explanation: [
      'int (integer): stores whole numbers, e.g. 100, -100 (4 bytes).',
      'float (floating point): stores decimals with single precision (4 bytes).',
      'double (double-precision float): stores larger decimals with double precision (8 bytes).',
      'char (character): stores single characters, e.g. \'A\' (1 byte).'
    ],
    code: `#include <stdio.h>

int main() {
    int score = 95;
    float temp = 98.6;
    double exact = 3.1415926535;
    char grade = 'A';
    printf("Score: %d, Temp: %f, Exact: %lf, Grade: %c\\n", score, temp, exact, grade);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-constants',
    title: 'C Constants',
    description: 'Prevent modification of variables using const or #define declarations.',
    explanation: [
      'If you do not want others to change existing variable values, use the const keyword.',
      'This declares variables as "read-only" constants.',
      'Alternatively, you can declare global constants with #define definitions at the top.'
    ],
    code: `#include <stdio.h>
#define PI 3.14159

int main() {
    const int BIRTH_YEAR = 1997;
    // BIRTH_YEAR = 2000; // Will cause compilation error!
    printf("PI: %f, Born: %d\\n", PI, BIRTH_YEAR);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-operators',
    title: 'C Operators',
    description: 'Perform arithmetic, logical, comparison, and bitwise manipulations.',
    explanation: [
      'Arithmetic operators: +, -, *, /, %, ++, --.',
      'Comparison operators compare values: ==, !=, >, <, >=, <=.',
      'Logical operators combine expressions: && (AND), || (OR), ! (NOT).'
    ],
    code: `#include <stdio.h>

int main() {
    int x = 12;
    int y = 5;
    printf("x + y = %d\\n", x + y);
    printf("Remainder: %d\\n", x % y);
    printf("Is x greater than y? %d\\n", x > y); // Prints 1 (true)
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-booleans',
    title: 'C Booleans',
    description: 'Use booleans in C using the standard stdbool header or integer representations.',
    explanation: [
      'By default, early C did not have a built-in boolean type; it represents 0 as false and any non-zero as true.',
      'In modern C (C99+), you can import the <stdbool.h> header to use bool, true, and false.'
    ],
    code: `#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isCprogrammingFun = true;
    bool isFishTasty = false;
    printf("C fun: %d\\n", isCprogrammingFun); // Prints 1
    printf("Fish tasty: %d\\n", isFishTasty);   // Prints 0
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-ifelse',
    title: 'C If...Else',
    description: 'Execute optional statement branches based on logical outcomes.',
    explanation: [
      'Use the "if" statement to declare statements to run if a condition is true.',
      'Use "else if" to specify a new condition if the first condition is false.',
      'Use "else" to run code if all conditions evaluate to false.'
    ],
    code: `#include <stdio.h>

int main() {
    int score = 75;
    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 70) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: C\\n");
    }
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-switch',
    title: 'C Switch',
    description: 'Run specific case blocks matching value expressions.',
    explanation: [
      'Use the switch statement to select one of many blocks of code to be executed.',
      'A switch tests a variable against multiple values, matching a target "case".',
      'Use the "break" statement to exit the block. "default" handles unhandled cases.'
    ],
    code: `#include <stdio.h>

int main() {
    int day = 3;
    switch (day) {
        case 1: printf("Monday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        default: printf("Another day\\n");
    }
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-while',
    title: 'C While Loop',
    description: 'Iterate repeatedly as long as conditional expressions stay true.',
    explanation: [
      'Loops execute a block of code as long as a specified condition is reached.',
      'The while loop checks the condition before executing code.',
      'The do/while loop always executes the block once before verifying the condition.'
    ],
    code: `#include <stdio.h>

int main() {
    int i = 0;
    while (i < 3) {
        printf("While loop index: %d\\n", i);
        i++;
    }
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-for',
    title: 'C For Loop',
    description: 'Execute statement blocks a predetermined number of times using loop variables.',
    explanation: [
      'The for loop is used when you know exactly how many times you want to loop through a block of code.',
      'Syntax: for (initialization; condition; increment/decrement).'
    ],
    code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 3; i++) {
        printf("For loop index: %d\\n", i);
    }
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-break',
    title: 'C Break and Continue',
    description: 'Directly terminate or skip current loops with break and continue.',
    explanation: [
      'The break statement is used to jump directly out of a loop.',
      'The continue statement breaks one iteration in the loop and skips to the next.'
    ],
    code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 6; i++) {
        if (i == 2) {
            continue; // Skip printing 2
        }
        if (i == 4) {
            break;    // Terminate at 4
        }
        printf("Val: %d\\n", i);
    }
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-arrays',
    title: 'C Arrays',
    description: 'Manage lists of identical elements inside consecutive memory positions.',
    explanation: [
      'Arrays are used to store multiple values in a single variable.',
      'To declare an array, define the variable type with square brackets: type name[size];',
      'Array indexes start at index 0.'
    ],
    code: `#include <stdio.h>

int main() {
    int scores[3] = {85, 90, 95};
    printf("First score: %d\\n", scores[0]);
    scores[1] = 92; // Modify item
    printf("Second score: %d\\n", scores[1]);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-strings',
    title: 'C Strings',
    description: 'Manipulate text represented by character arrays terminating in null bytes.',
    explanation: [
      'Unlike other languages, C does not have a native string type.',
      'Strings are simply one-dimensional arrays of characters terminated by a null character (\\0).',
      'Use standard specifier %s to print string content.'
    ],
    code: `#include <stdio.h>

int main() {
    char greeting[] = "Hello NodeLab";
    printf("String: %s\\n", greeting);
    printf("First character: %c\\n", greeting[0]);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-userinput',
    title: 'C User Input',
    description: 'Read inputs from terminal users using the scanf standard command.',
    explanation: [
      'The scanf() function is used to take input from the keyboard.',
      'Specify format specifier matching target type, and use reference & to variable storage.',
      'E.g., scanf("%d", &myNum); accepts keyboard integers.'
    ],
    code: `#include <stdio.h>

int main() {
    // Mock user input representing standard pattern
    int enteredAge = 25; 
    printf("int age;\\n");
    printf("scanf(\\"%%d\\", &age);\\n");
    printf("User age accepted cleanly: %d\\n", enteredAge);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-memoryaddress',
    title: 'C Memory Address',
    description: 'Access the actual hardware RAM address where variables are stored.',
    explanation: [
      'When a variable is created, a memory address is assigned to it.',
      'The memory address is the physical location of the variable on the computer.',
      'Use reference operator & to access the address, printed using %p specifier.'
    ],
    code: `#include <stdio.h>

int main() {
    int age = 43;
    printf("Variable value: %d\\n", age);
    printf("Physical memory location: %p\\n", &age);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-pointers',
    title: 'C Pointers',
    description: 'Manipulate variables that store the memory addresses of other variables.',
    explanation: [
      'A pointer is a variable that stores the memory address of another variable as its value.',
      'Declared with asterisk * symbol (e.g., int* ptr;).',
      'Use asterisk * to dereference a pointer, reading or editing values directly.'
    ],
    code: `#include <stdio.h>

int main() {
    int age = 22;
    int* ptr = &age; // Store address
    printf("Address of age: %p\\n", ptr);
    printf("Value stored at address: %d\\n", *ptr); // Dereference
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-functions',
    title: 'C Functions',
    description: 'Deconstruct code into reusable blocks called functions.',
    explanation: [
      'A function is a block of code which only runs when it is called.',
      'You can pass data, known as parameters, into a function.',
      'Functions are declared inside C files and must return matching types.'
    ],
    code: `#include <stdio.h>

void greet() {
    printf("Greetings from C function!\\n");
}

int main() {
    greet();
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-functionparams',
    title: 'C Function Parameters',
    description: 'Pass arguments and input variables into C functions.',
    explanation: [
      'Information can be passed to functions as parameters.',
      'When calling functions, you supply arguments which are copied into parameters.',
      'Return values of functions specify matching return type headers.'
    ],
    code: `#include <stdio.h>

int calculateCube(int num) {
    return num * num * num;
}

int main() {
    int result = calculateCube(5);
    printf("Cube of 5: %d\\n", result);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-functiondeclaration',
    title: 'C Function Declaration',
    description: 'Cleanly declare functions above main before writing details below.',
    explanation: [
      'A function has two parts: Declaration (prototype) and Definition (body).',
      'Declaration specifies function name, return type, and input parameters.',
      'Placing prototypes at the top ensures main compiles, letting you write bodies below.'
    ],
    code: `#include <stdio.h>

// Function declaration
int sum(int, int);

int main() {
    printf("Sum: %d\\n", sum(10, 20));
    return 0;
}

// Function definition
int sum(int a, int b) {
    return a + b;
}`,
    languageId: 'c'
  },
  {
    id: 'c-recursion',
    title: 'C Recursion',
    description: 'Implement repetitive algorithms by letting functions call themselves.',
    explanation: [
      'Recursion makes functions call themselves to execute loops.',
      'Provides clean mathematical representations of algorithms like factorials.',
      'Always include a terminal base case to prevent stack overflows.'
    ],
    code: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("Factorial of 5: %d\\n", factorial(5));
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-mathfunctions',
    title: 'C Math Functions',
    description: 'Utilize standard mathematical operations using math header libraries.',
    explanation: [
      'C includes standard mathematical functions within the <math.h> header.',
      'Helpers: sqrt() (square root), pow(base, exp) (exponent power), ceil(), floor(), and abs().'
    ],
    code: `#include <stdio.h>
#include <math.h>

int main() {
    printf("Square root of 9: %f\\n", sqrt(9));
    printf("Power 2^3: %f\\n", pow(2, 3));
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-structures',
    title: 'C Structures',
    description: 'Group diverse variables under unified struct object entities.',
    explanation: [
      'Structures (structs) allow you to group related variables of different types.',
      'Unlike arrays, structs can store multiple types inside a single record layout.',
      'Access members of structs using dot notation (.).'
    ],
    code: `#include <stdio.h>

struct Student {
    int id;
    char grade;
    float gpa;
};

int main() {
    struct Student s1 = {101, 'A', 3.9};
    printf("Student %d: Grade %c, GPA %f\\n", s1.id, s1.grade, s1.gpa);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-enums',
    title: 'C Enums',
    description: 'Set custom groups of integers using readable enumeration types.',
    explanation: [
      'An enum is a user-defined type of named integer constants.',
      'By default, the first element has value 0, the next has 1, etc.',
      'Enums make code highly readable.'
    ],
    code: `#include <stdio.h>

enum Level {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
};

int main() {
    enum Level currentLevel = MEDIUM;
    printf("Selected priority level: %d\\n", currentLevel);
    return 0;
}`,
    languageId: 'c'
  },
  {
    id: 'c-files',
    title: 'C Files (File Handling)',
    description: 'Create, write, and open files using stdio file streams.',
    explanation: [
      'C manages files using a special FILE pointer structure from stdio.',
      'Use fopen() to open or create files: fopen("filename", "mode").',
      'Modes include: "w" (write), "r" (read), and "a" (append).',
      'Always close files with fclose() to flush streams and clear locks.'
    ],
    code: `#include <stdio.h>

int main() {
    FILE* fptr;
    // Mock showing standard file layout operations
    printf("FILE *fptr = fopen(\\"test.txt\\", \\"w\\");\\n");
    printf("fprintf(fptr, \\"Hello NodeLab File Handlers!\\");\\n");
    printf("fclose(fptr);\\n");
    printf("File successfully written and closed!\\n");
    return 0;
}`,
    languageId: 'c'
  }
];
