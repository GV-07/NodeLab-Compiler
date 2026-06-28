import { TutorialTopic } from './cssTutorialsData';

export const DART_TOPICS: TutorialTopic[] = [
  {
    id: 'dart-home',
    title: 'Dart HOME',
    description: 'Welcome to Dart! Dart is a client-optimized programming language developed by Google, famous for powering Flutter.',
    explanation: [
      'Dart is designed for multi-platform client app development (iOS, Android, Web, and Desktop).',
      'It supports both Ahead-of-Time (AOT) compilation for fast native code, and Just-in-Time (JIT) compilation for hot reload cycles.'
    ],
    code: `void main() {
  print('Hello, Dart!');
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-intro',
    title: 'Dart Intro',
    description: 'Understand the core features of Dart: type safety, sound null safety, and asynchronous capabilities.',
    explanation: [
      'Dart features "Sound Null Safety" which prevents null pointer exceptions at compilation time.',
      'It is class-based and object-oriented, with a C-style syntax.'
    ],
    code: `void main() {
  String? name; // Nullable type
  // print(name.length); // Compilation error! Safe guard prevents crashes.
  print(name ?? 'Default Name');
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-get-started',
    title: 'Dart Get Started',
    description: 'Install the Dart SDK and run your code on the terminal.',
    explanation: [
      'Download and install Dart SDK independently, or get it automatically bundled with the Flutter SDK.',
      'Run files from your command prompt using: dart run file.dart.'
    ],
    code: `// To compile and run:
// dart run app.dart
void main() {
  print('Dart SDK initialized successfully!');
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-syntax',
    title: 'Dart Syntax',
    description: 'Analyze the entry point main() function and bracket structures in Dart.',
    explanation: [
      'Every Dart application must have a top-level main() function which serves as the entry point.',
      'Statements must terminate with a semicolon (;).'
    ],
    code: `void main() {
  var framework = 'Flutter';
  print(framework);
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-output',
    title: 'Dart Output',
    description: 'Output messages onto console terminals using print().',
    explanation: [
      'The print() function outputs strings to the console.',
      'Supports variable evaluation directly inside strings using $variableName or ${expression}.'
    ],
    code: `void main() {
  int count = 10;
  print('The current count is $count');
  print('The next count is \${count + 1}');
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-comments',
    title: 'Dart Comments',
    description: 'Write single-line, multi-line, and documentation comments in Dart.',
    explanation: [
      'Use // for single-line comments.',
      'Use /* ... */ for multi-line comments.',
      'Use /// for documentation comments (ideally parsed to HTML documentation).'
    ],
    code: `void main() {
  // This is a single-line comment
  /* This is
     a multi-line comment */
  print('Comments document your code!');
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-variables',
    title: 'Dart Variables',
    description: 'Declare variables using var, dynamic, final, and const.',
    explanation: [
      'var is type-inferred: once a type is resolved, it cannot be changed.',
      'dynamic allows variables to hold and change into any type shape.',
      'final variables can only be set once.',
      'const represents compile-time constants.'
    ],
    code: `void main() {
  final name = 'Bob'; // Cannot change name
  const pi = 3.14;    // Compile-time constant
  dynamic dynamicVal = 5;
  dynamicVal = 'changed_to_string'; // Allowed!
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-data-types',
    title: 'Dart Data Types',
    description: 'Explore Dart native types: int, double, String, bool, and null.',
    explanation: [
      'Both int and double inherit from the num type.',
      'bool evaluates to true or false.'
    ],
    code: `void main() {
  int age = 28;
  double price = 19.99;
  bool isCompleted = false;
  print('$age, $price, $isCompleted');
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-operators',
    title: 'Dart Operators',
    description: 'Use mathematical, logical, and null-aware operators in Dart.',
    explanation: [
      'Arithmetic: +, -, *, /, ~/ (integer division), %.',
      'Null-aware: ?? (fallback values), ??= (assign value if null).'
    ],
    code: `void main() {
  int a = 10;
  int b = 3;
  print(a ~/ b); // Integer division outputs 3
  
  String? username;
  username ??= 'Anonymous';
  print(username);
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-strings',
    title: 'Dart Strings',
    description: 'Concatenate, escape, and manipulate String characters.',
    explanation: [
      'Strings are represented by UTF-16 code units.',
      'Support multi-line blocks using triple single-quotes (\'\'\').'
    ],
    code: `void main() {
  String s1 = 'Single quote string';
  String multi = '''
This is a multi-line
string in Dart.
''';
  print(s1.toUpperCase());
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-booleans',
    title: 'Dart Booleans',
    description: 'Construct conditional check expressions using bool objects.',
    explanation: [
      'In Dart, only the boolean value true evaluates to true. No implicit truthy or falsy numbers.'
    ],
    code: `void main() {
  bool isVerified = true;
  if (isVerified) {
    print('User is active!');
  }
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-ifelse',
    title: 'Dart If...Else',
    description: 'Implement structured code branching using if, else if, and else blocks.',
    explanation: [
      'Standard conditional blocks to evaluate conditions.'
    ],
    code: `void main() {
  var marks = 85;
  if (marks > 90) {
    print('A');
  } else if (marks > 80) {
    print('B');
  } else {
    print('C');
  }
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-switch',
    title: 'Dart Switch',
    description: 'Map branches using switch/case and break statements.',
    explanation: [
      'A switch statement compares integers, strings, or compile-time constants against case values.'
    ],
    code: `void main() {
  var command = 'OPEN';
  switch (command) {
    case 'CLOSED':
      print('Status: Closed');
      break;
    case 'OPEN':
      print('Status: Open');
      break;
    default:
      print('Unknown Status');
  }
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-loops',
    title: 'Dart Loops',
    description: 'Loop over collections using traditional for, for-in, while, and do-while.',
    explanation: [
      'for-in iterates through items in lists.',
      'while loop executes as long as a condition is true.'
    ],
    code: `void main() {
  var scores = [10, 20, 30];
  for (var s in scores) {
    print('Score: $s');
  }
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-break-continue',
    title: 'Dart Break/Continue',
    description: 'Manipulate iterative loop passes using break and continue.',
    explanation: [
      'break terminates loop execution.',
      'continue skips straight to the next loop evaluation.'
    ],
    code: `void main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    if (i == 5) break;
    print(i);
  }
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-list',
    title: 'Dart List',
    description: 'Create, grow, and sort array lists in Dart.',
    explanation: [
      'Lists are ordered collections of values.',
      'Declare typed lists: List<String> items = [];.'
    ],
    code: `void main() {
  var numbers = [1, 2, 3];
  numbers.add(4);
  print(numbers.length); // 4
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-sets',
    title: 'Dart Sets',
    description: 'Maintain unique elements lists using Dart Sets.',
    explanation: [
      'A set is an unordered collection of unique items.',
      'Duplicates are discarded automatically.'
    ],
    code: `void main() {
  var halogens = {'chlorine', 'fluorine', 'chlorine'};
  print(halogens); // {chlorine, fluorine}
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-maps',
    title: 'Dart Maps',
    description: 'Structure associative key-value dictionaries in Dart.',
    explanation: [
      'A map is an object that associates keys and values.',
      'Keys and values can be of any type, though strings are standard key identifiers.'
    ],
    code: `void main() {
  var capitals = {
    'USA': 'Washington D.C.',
    'UK': 'London'
  };
  print(capitals['USA']);
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-functions',
    title: 'Dart Functions',
    description: 'Define functions, optional parameters, and shorthand fat arrow closures.',
    explanation: [
      'Functions support positional arguments, named arguments inside braces, and default values.',
      'Shorthand arrow syntax (=>) is ideal for single-expression definitions.'
    ],
    code: `int doubleValue(int x) => x * 2;

void main() {
  print(doubleValue(25));
}`,
    languageId: 'dart'
  },
  {
    id: 'dart-oop',
    title: 'Dart OOP (Classes/Objects)',
    description: 'Explore Classes, Constructors, Named Constructors, and Inheritance in Dart.',
    explanation: [
      'Dart is class-based and supports mixin-based inheritance.',
      'All objects are instances of a class, and all classes descend from Object.'
    ],
    code: `class Point {
  double x;
  double y;

  // Syntactic sugar constructor:
  Point(this.x, this.y);
}

void main() {
  var pt = Point(10.0, 20.0);
  print('Point coordinate: x=\${pt.x}');
}`,
    languageId: 'dart'
  }
];
