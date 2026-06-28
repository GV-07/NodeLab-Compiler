import { TutorialTopic } from './cssTutorialsData';

export const PYTHON_TOPICS: TutorialTopic[] = [
  {
    id: 'py-intro',
    title: 'Python Intro',
    description: 'Python is a high-level, general-purpose, interpreted programming language famous for clear readability.',
    explanation: [
      'Python was created by Guido van Rossum, and released in 1991.',
      'It is used for: Web development (server-side), Software development, Mathematics, System scripting, and Machine Learning/AI.',
      'Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.).'
    ],
    code: `# Simple print statement in Python
print("Hello, NodeLab Python Sandbox!")
`,
    languageId: 'python'
  },
  {
    id: 'py-start',
    title: 'Python Getting Started',
    description: 'Learn how Python executes statements, handles files, and displays outputs.',
    explanation: [
      'Python is an interpreted programming language, meaning as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.',
      'In our NodeLab sandbox, you can execute code blocks directly.'
    ],
    code: `# Check python version simulation
print("Python interpreter is ready!")
`,
    languageId: 'python'
  },
  {
    id: 'py-syntax',
    title: 'Python Syntax',
    description: 'Explore Python\'s unique indentation rule to structure code blocks.',
    explanation: [
      'Python syntax can be executed by writing directly in the Command Line.',
      'Indentation: Python uses indentation to indicate a block of code (instead of curly brackets {} as in C, Java, JS).',
      'The number of spaces is up to you as a programmer, but it must be at least one, and you must remain consistent.'
    ],
    code: `# If block using indentation (4 spaces is the standard)
if 5 > 2:
    print("Five is greater than two!")
`,
    languageId: 'python'
  },
  {
    id: 'py-comments',
    title: 'Python Comments',
    description: 'Write notes or temporarily disable lines using hash symbols or multiline strings.',
    explanation: [
      'Comments can be used to explain Python code, make it more readable, and prevent execution when testing code.',
      'Comments start with a #, and Python will ignore them.',
      'Python does not have syntax for multiline comments; use # on each line or a multiline docstring (triple quotes).'
    ],
    code: `# This is a single-line comment
print("Comments are ignored!")

"""
This is a multiline string
used as a multiline comment in Python.
"""
print("Done!")
`,
    languageId: 'python'
  },
  {
    id: 'py-variables',
    title: 'Python Variables',
    description: 'Store values inside dynamic variables which do not require explicit type definitions.',
    explanation: [
      'Variables are containers for storing data values.',
      'Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.',
      'Variables do not need to be declared with any particular type, and can even change type after they have been set.'
    ],
    code: `# Dynamic variables example
x = 4       # x is of type int
y = "Sally" # y is of type str
print("x:", x)
print("y:", y)
`,
    languageId: 'python'
  },
  {
    id: 'py-datatypes',
    title: 'Python Data Types',
    description: 'Explore native data types like str, int, float, complex, list, tuple, range, dict, set, and bool.',
    explanation: [
      'In programming, data type is an important concept.',
      'Text Type: str',
      'Numeric Types: int, float, complex',
      'Sequence Types: list, tuple, range',
      'Mapping Type: dict',
      'Set Types: set, frozenset',
      'Boolean Type: bool'
    ],
    code: `# Print types of different variables
a = "Hello World"
b = 20
c = 20.5
d = ["apple", "banana"]

print("a type:", type(a))
print("b type:", type(b))
print("c type:", type(c))
print("d type:", type(d))
`,
    languageId: 'python'
  },
  {
    id: 'py-numbers',
    title: 'Python Numbers',
    description: 'Work with integer, float, and complex number objects.',
    explanation: [
      'There are three numeric types in Python:',
      'int: Integer is a whole number, positive or negative, without decimals, of unlimited length.',
      'float: Floating point number, positive or negative, containing one or more decimals.',
      'complex: Complex numbers are written with a "j" as the imaginary part.'
    ],
    code: `x = 1    # int
y = 2.8  # float
z = 1j   # complex

print("x type:", type(x))
print("y type:", type(y))
print("z type:", type(z))
`,
    languageId: 'python'
  },
  {
    id: 'py-casting',
    title: 'Python Casting',
    description: 'Convert or cast variables between int, float, and str types.',
    explanation: [
      'There may be times when you want to specify a type on to a variable. This can be done with casting.',
      'int() - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal.',
      'float() - constructs a float number.',
      'str() - constructs a string from a wide variety of data types.'
    ],
    code: `x = int(1)     # x will be 1
y = int(2.8)   # y will be 2
z = float("3") # z will be 3.0

print("x:", x)
print("y:", y)
print("z:", z)
`,
    languageId: 'python'
  },
  {
    id: 'py-strings',
    title: 'Python Strings',
    description: 'Work with string literals, formatting options, and slicing utilities.',
    explanation: [
      'Strings in python are surrounded by either single quotation marks, or double quotation marks.',
      'Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.',
      'Python does not have a character data type, a single character is simply a string with a length of 1.'
    ],
    code: `a = "Hello, World!"
print("First character:", a[0])
print("Length of string:", len(a))
print("Substring (slice):", a[2:5])
print("Upper Case:", a.upper())
`,
    languageId: 'python'
  },
  {
    id: 'py-booleans',
    title: 'Python Booleans',
    description: 'Evaluate logical states representing True or False.',
    explanation: [
      'Booleans represent one of two values: True or False.',
      'In programming you often need to know if an expression is True or False.',
      'You can evaluate any expression in Python, and get one of two answers, True or False.'
    ],
    code: `print("Is 10 > 9?", 10 > 9)
print("Is 10 == 9?", 10 == 9)

# Empty values evaluate to False
print("Bool of empty string:", bool(""))
print("Bool of list:", bool([1, 2, 3]))
`,
    languageId: 'python'
  },
  {
    id: 'py-operators',
    title: 'Python Operators',
    description: 'Perform math, membership, identity, and assignment operations.',
    explanation: [
      'Operators are used to perform operations on variables and values.',
      'Arithmetic Operators: +, -, *, /, %, **, // (floor division).',
      'Logical Operators: and, or, not.',
      'Membership Operators: in, not in (checks if sequence contains value).'
    ],
    code: `x = 5
y = 3
print("x ** y (exponentiation):", x ** y) # 5^3 = 125

fruits = ["apple", "banana"]
print("Is 'apple' in fruits?", "apple" in fruits)
`,
    languageId: 'python'
  },
  {
    id: 'py-lists',
    title: 'Python Lists',
    description: 'Store ordered, changeable, and duplicate-allowing sequences of items.',
    explanation: [
      'Lists are used to store multiple items in a single variable.',
      'Lists are one of 4 built-in data types in Python used to store collections of data.',
      'List items are ordered, changeable, and allow duplicate values.',
      'List items are indexed, the first item has index [0].'
    ],
    code: `thislist = ["apple", "banana", "cherry"]
thislist.append("orange") # Add item
print("List content:", thislist)
print("Second item:", thislist[1])
`,
    languageId: 'python'
  },
  {
    id: 'py-tuples',
    title: 'Python Tuples',
    description: 'Store ordered, unchangeable, immutable lists of elements.',
    explanation: [
      'Tuples are used to store multiple items in a single variable.',
      'A tuple is a collection which is ordered and unchangeable (immutable).',
      'Tuples are written with round brackets ().'
    ],
    code: `thistuple = ("apple", "banana", "cherry")
print("Tuple content:", thistuple)
print("Length of tuple:", len(thistuple))
# thistuple[0] = "pear" # This would cause a TypeError!
`,
    languageId: 'python'
  },
  {
    id: 'py-sets',
    title: 'Python Sets',
    description: 'Maintain unordered collections containing unique elements only.',
    explanation: [
      'A set is a collection which is unordered, unchangeable (but you can remove items and add new items), and unindexed.',
      'Sets are written with curly brackets {}. No duplicate values are allowed.'
    ],
    code: `thisset = {"apple", "banana", "cherry", "apple"}
print("Set content (no duplicates):", thisset)
thisset.add("orange")
print("After adding item:", thisset)
`,
    languageId: 'python'
  },
  {
    id: 'py-dicts',
    title: 'Python Dictionaries',
    description: 'Store data values as key-value pairs matching unique indices.',
    explanation: [
      'Dictionaries are used to store data values in key:value pairs.',
      'A dictionary is a collection which is ordered (as of Python 3.7), changeable and does not allow duplicates.',
      'Written with curly brackets and have keys and values.'
    ],
    code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print("Dictionary model:", thisdict["model"])
thisdict["year"] = 2020 # Update year
print("Updated dict:", thisdict)
`,
    languageId: 'python'
  },
  {
    id: 'py-ifelse',
    title: 'Python If...Else',
    description: 'Execute nested blocks of statements based on logical conditions.',
    explanation: [
      'Python supports the usual logical conditions from mathematics: Equals (a == b), Not Equals (a != b), etc.',
      'Uses keywords: if, elif (else if), and else.',
      'Relies heavily on indentation to structure conditional branches.'
    ],
    code: `a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")
`,
    languageId: 'python'
  },
  {
    id: 'py-while',
    title: 'Python While Loops',
    description: 'Run commands repeatedly as long as specific conditions remain True.',
    explanation: [
      'With the while loop we can execute a set of statements as long as a condition is true.',
      'Remember to increment the iterator variable, or else the loop will run forever.'
    ],
    code: `i = 1
while i < 4:
    print("While Iteration:", i)
    i += 1
`,
    languageId: 'python'
  },
  {
    id: 'py-for',
    title: 'Python For Loops',
    description: 'Iterate over list collections or numerical ranges using the in keyword.',
    explanation: [
      'A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).',
      'The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1.'
    ],
    code: `# Loop through a range 0 to 2
for i in range(3):
    print("For loop index:", i)
`,
    languageId: 'python'
  },
  {
    id: 'py-functions',
    title: 'Python Functions',
    description: 'Declare reusable code blocks using the def keyword.',
    explanation: [
      'A function is a block of code which only runs when it is called.',
      'You can pass data, known as parameters, into a function.',
      'A function can return data as a result using the return keyword.'
    ],
    code: `# Declare function and return multiplication
def multiply_numbers(x, y):
    return x * y

result = multiply_numbers(5, 6)
print("5 * 6 =", result)
`,
    languageId: 'python'
  },
  {
    id: 'py-lambda',
    title: 'Python Lambda',
    description: 'Write concise, single-expression anonymous functions.',
    explanation: [
      'A lambda function is a small anonymous function.',
      'A lambda function can take any number of arguments, but can only have one expression.',
      'Syntax: lambda arguments : expression'
    ],
    code: `# Lambda function adding 10 to input
add_ten = lambda a : a + 10
print("Result of lambda (5 + 10):", add_ten(5))
`,
    languageId: 'python'
  },
  {
    id: 'py-arrays',
    title: 'Python Arrays',
    description: 'Python does not have built-in support for Arrays; learn how lists fulfill this role.',
    explanation: [
      'Note: Python does not have built-in support for Arrays, but Python Lists can be used instead.',
      'Alternatively, for scientific programming, import the NumPy library to work with ndarray blocks.'
    ],
    code: `# List behaving as array
cars = ["Ford", "Volvo", "BMW"]
print("Array-like selection:", cars[0])
`,
    languageId: 'python'
  },
  {
    id: 'py-classes',
    title: 'Python Classes/Objects',
    description: 'Construct custom objects and schemas using class declarations and constructors.',
    explanation: [
      'Python is an object-oriented programming language.',
      'Almost everything in Python is an object, with its properties and methods.',
      'A Class is like an object constructor, or a "blueprint" for creating objects.',
      'Use the __init__() function to assign values to object properties when created.'
    ],
    code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("Venkatesan", 54)
print("p1 Name:", p1.name)
print("p1 Age:", p1.age)
`,
    languageId: 'python'
  },
  {
    id: 'py-inheritance',
    title: 'Python Inheritance',
    description: 'Inherit features and properties from parent classes to child classes.',
    explanation: [
      'Inheritance allows us to define a class that inherits all the methods and properties from another class.',
      'Parent class (Base class): The class being inherited from.',
      'Child class (Derived class): The class that inherits from another class.'
    ],
    code: `class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

my_dog = Dog()
my_dog.speak() # Inherited method
my_dog.bark()  # Child method
`,
    languageId: 'python'
  },
  {
    id: 'py-iterators',
    title: 'Python Iterators',
    description: 'Understand the iteration protocol using __iter__() and __next__() methods.',
    explanation: [
      'An iterator is an object that contains a countable number of values.',
      'An iterator is an object that can be iterated upon, meaning that you can traverse through all the values.',
      'Technically, in Python, an iterator is an object which implements the iterator protocol, which consists of the methods __iter__() and __next__().'
    ],
    code: `# Iterator from tuple
mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
`,
    languageId: 'python'
  },
  {
    id: 'py-polymorphism',
    title: 'Python Polymorphism',
    description: 'Execute same-named methods across different class structures.',
    explanation: [
      'Polymorphism means "many forms", and in programming it refers to methods/functions/operators with the same name that can be executed on many objects or classes.'
    ],
    code: `class Car:
    def move(self):
        print("Drive!")

class Boat:
    def move(self):
        print("Sail!")

for vehicle in (Car(), Boat()):
    vehicle.move() # Polymorphic call
`,
    languageId: 'python'
  },
  {
    id: 'py-scope',
    title: 'Python Scope',
    description: 'Manage variable visibility across local, global, and non-local namespaces.',
    explanation: [
      'A variable is only available from inside the region it is created. This is called scope.',
      'Local Scope: A variable created inside a function belongs to the local scope of that function.',
      'Global Scope: A variable created in the main body of the Python code is a global variable.'
    ],
    code: `# Global variable
x = 300

def myfunc():
    # Local variable
    x = 200
    print("Local x:", x)

myfunc()
print("Global x:", x)
`,
    languageId: 'python'
  },
  {
    id: 'py-modules',
    title: 'Python Modules',
    description: 'Organize code across multiple files and import modules with the import statement.',
    explanation: [
      'Consider a module to be the same as a code library.',
      'A file containing a set of functions you want to include in your application.',
      'Import modules using the import keyword.'
    ],
    code: `# Import built-in system module
import sys
print("Interpreter Platform:", sys.platform)
`,
    languageId: 'python'
  },
  {
    id: 'py-dates',
    title: 'Python Dates',
    description: 'Parse, format, and manipulate dates using the datetime module.',
    explanation: [
      'A date in Python is not a data type of its own, but we can import a module named datetime to work with dates as date objects.'
    ],
    code: `import datetime

x = datetime.datetime.now()
print("Current Timestamp:", x)
print("Current Year:", x.year)
print("Day Name:", x.strftime("%A"))
`,
    languageId: 'python'
  },
  {
    id: 'py-math',
    title: 'Python Math',
    description: 'Perform advanced mathematical operations using the math module.',
    explanation: [
      'Python has a set of built-in math functions, including an extensive math module, that allows you to perform mathematical tasks on numbers.'
    ],
    code: `import math

print("Square root of 64:", math.sqrt(64))
print("Pi constant:", math.pi)
print("Ceiling of 1.4:", math.ceil(1.4))
`,
    languageId: 'python'
  },
  {
    id: 'py-json',
    title: 'Python JSON',
    description: 'Parse JSON strings or convert Python dictionaries to JSON using the json module.',
    explanation: [
      'Python has a built-in package called json, which can be used to work with JSON data.',
      'Convert JSON string to Python dictionary with json.loads().',
      'Convert Python dictionary to JSON string with json.dumps().'
    ],
    code: `import json

# JSON string
x = '{"name":"John", "age":30, "city":"New York"}'

# parse x
y = json.loads(x)
print("Dictionary name:", y["name"])
`,
    languageId: 'python'
  },
  {
    id: 'py-regex',
    title: 'Python RegEx',
    description: 'Search and replace string patterns using the re module.',
    explanation: [
      'A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern.',
      'Python has a built-in package called re, which can be used to work with Regular Expressions.'
    ],
    code: `import re

txt = "The rain in Spain"
# Check if string starts with "The" and ends with "Spain"
x = re.search("^The.*Spain$", txt)
print("Regex Match Found?", bool(x))
`,
    languageId: 'python'
  },
  {
    id: 'py-pip',
    title: 'Python PIP',
    description: 'Install and manage external libraries using the pip package manager.',
    explanation: [
      'PIP is a package manager for Python packages, or modules if you will.',
      'Note: If you have Python version 3.4 or later, PIP is included by default.',
      'Install a package using the command line: pip install package_name.'
    ],
    code: `# Command prompt representation of PIP
print("$ pip install requests")
`,
    languageId: 'python'
  },
  {
    id: 'py-tryexcept',
    title: 'Python Try...Except',
    description: 'Catch and handle exceptions gracefully using try, except, else, and finally blocks.',
    explanation: [
      'The try block lets you test a block of code for errors.',
      'The except block lets you handle the error.',
      'The else block lets you execute code when there is no error.',
      'The finally block lets you execute code, regardless of the result of the try- and except blocks.'
    ],
    code: `try:
    print(undefined_variable)
except NameError:
    print("Variable is not defined!")
except:
    print("Something else went wrong")
finally:
    print("Try/Except block finished.")
`,
    languageId: 'python'
  },
  {
    id: 'py-userinput',
    title: 'Python User Input',
    description: 'Prompt user input using the input() function.',
    explanation: [
      'Python allows for user input.',
      'That means we are able to ask the user for input.',
      'In Python 3.x, use the input() method. In Python 2.x, use raw_input().'
    ],
    code: `# Simple input simulation
print("username = input('Enter username:')")
print("print('Username is: ' + username)")
`,
    languageId: 'python'
  },
  {
    id: 'py-stringformatting',
    title: 'Python String Formatting',
    description: 'Inject variables into strings cleanly using f-strings or the format() method.',
    explanation: [
      'To make sure a string will display as expected, we can format the result.',
      'We can use f-strings (formatted string literals) by prefixing the string with an f or F, allowing variables inside curly braces {}.'
    ],
    code: `price = 49
txt = f"The price is {price:.2f} dollars"
print(txt)
`,
    languageId: 'python'
  }
];
