import { TutorialTopic } from './cssTutorialsData';

export const PHP_TOPICS: TutorialTopic[] = [
  {
    id: 'php-home',
    title: 'PHP HOME',
    description: 'Learn the fundamentals of PHP server-side programming from the very beginning.',
    explanation: [
      'PHP stands for PHP: Hypertext Preprocessor.',
      'It is a widely-used, open source server-side scripting language.',
      'PHP scripts are executed on the server, and the result is returned to the browser as plain HTML.'
    ],
    code: `<?php
echo "Welcome to PHP Tutorials on NodeLab!";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-intro',
    title: 'PHP Intro',
    description: 'Understand what PHP can do and why it is so popular for backend web services.',
    explanation: [
      'PHP can generate dynamic page content, create, open, read, write, and close files on the server.',
      'PHP can collect form data, send and receive cookies, and encrypt sensitive data.',
      'PHP runs on various platforms (Windows, Linux, Unix, macOS, etc.) and is compatible with almost all servers.'
    ],
    code: `<?php
echo "PHP Version: " . phpversion();
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-install',
    title: 'PHP Install',
    description: 'Learn about running PHP on your local server or setting up cloud hosting services.',
    explanation: [
      'To start using PHP, you can find a web host with PHP and MySQL support.',
      'Or install a web server (like Apache) and PHP on your own PC.',
      'Many users install package suites like XAMPP or MAMP to quickly run PHP and databases locally.'
    ],
    code: `<?php
// PHP installation verify script
echo "PHP engine is correctly installed and active!";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-syntax',
    title: 'PHP Syntax',
    description: 'Learn about tags, case-sensitivity, and spacing in standard PHP syntax.',
    explanation: [
      'A PHP script starts with <?php and ends with ?>.',
      'In PHP, keywords (like if, else, while, echo) are NOT case-sensitive.',
      'However, all variable names ARE case-sensitive (e.g., $color and $COLOR are different variables).'
    ],
    code: `<?php
$color = "blue";
echo "My house is " . $color . "\\n";
// Echo is case-insensitive, but variables are sensitive
ECHO "My car is " . $color . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-comments',
    title: 'PHP Comments',
    description: 'Add comments to your scripts to explain functions or hide test code blocks.',
    explanation: [
      'PHP supports single-line comments using double slashes // or hash symbol #.',
      'PHP supports multi-line comments starting with /* and ending with */.'
    ],
    code: `<?php
// This is a single-line comment
# This is also a single-line comment

/*
This is a multiple-line comment block
that spans over multiple lines
*/
echo "Comments keep your code neat!";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-variables',
    title: 'PHP Variables',
    description: 'Create and initialize variables to store numbers, strings, and structures.',
    explanation: [
      'In PHP, a variable starts with the $ sign, followed by the name of the variable.',
      'Variables do not require explicit type declarations; PHP automatically associates type.',
      'Variables must start with a letter or underscore, and cannot start with a number.'
    ],
    code: `<?php
$txt = "NodeLab Sandbox";
$x = 5;
$y = 10.5;

echo "Welcome to " . $txt . "!\\n";
echo "Sum: " . ($x + $y);
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-echoprint',
    title: 'PHP Echo / Print',
    description: 'Print variable values and string texts to the page buffer using echo and print.',
    explanation: [
      'echo and print are more or less the same. Both are used to output data to the screen.',
      'echo has no return value, while print has a return value of 1 (so it can be used in expressions).',
      'echo can take multiple parameters, while print can take one argument.'
    ],
    code: `<?php
echo "<h2>PHP is Fun!</h2>";
echo "This ", "string ", "has ", "multiple ", "parts.\\n";

$txt1 = "Learn PHP";
print "Study " . $txt1 . " on NodeLab!";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-datatypes',
    title: 'PHP Data Types',
    description: 'Understand the different scalar and compound data types supported by PHP.',
    explanation: [
      'PHP supports primitive types: String, Integer, Float, Boolean, Array, Object, NULL, and Resource.',
      'You can verify any variables type and details using the var_dump() function.'
    ],
    code: `<?php
$str = "Hello";
$num = 5985;
$isTrue = true;
$cars = array("Volvo", "BMW");

var_dump($str);
var_dump($num);
var_dump($isTrue);
var_dump($cars);
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-strings',
    title: 'PHP Strings',
    description: 'Explore string helper functions and interpolation in PHP.',
    explanation: [
      'A string is a sequence of characters, like "Hello world!".',
      'Common helper functions: strlen() (length), str_word_count(), strrev() (reverse), strpos() (position), and str_replace().'
    ],
    code: `<?php
$txt = "Hello World";
echo "Length: " . strlen($txt) . "\\n";
echo "Word count: " . str_word_count($txt) . "\\n";
echo "Reverse: " . strrev($txt) . "\\n";
echo "Replace: " . str_replace("World", "NodeLab", $txt) . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-numbers',
    title: 'PHP Numbers',
    description: 'Work with integer ranges, decimals, numeric casting, and infinity bounds.',
    explanation: [
      'PHP has built-in numeric types: Integers, Floats, and doubles.',
      'Functions like is_int(), is_float(), is_numeric(), and is_nan() help validate number types.'
    ],
    code: `<?php
$x = 5985;
echo "Is x integer? ";
var_dump(is_int($x));

$y = 59.85;
echo "Is y float? ";
var_dump(is_float($y));
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-casting',
    title: 'PHP Casting',
    description: 'Explicitly convert values between distinct data types.',
    explanation: [
      'Sometimes you need to cast a value from one data type into another.',
      'You can cast to: (string), (int), (float), (bool), (array), (object), (unset).'
    ],
    code: `<?php
$a = 58.75;
$b = "100.55";

$cast_int = (int)$a;
$cast_float = (float)$b;

echo "Cast Double to Int: " . $cast_int . "\\n";
echo "Cast String to Float: " . $cast_float . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-math',
    title: 'PHP Math',
    description: 'Run numerical arithmetic using standard PHP mathematical functions.',
    explanation: [
      'PHP has a set of math functions that allows you to perform mathematical tasks on numbers.',
      'Useful helpers: pi(), min(), max(), abs(), sqrt(), round(), and rand().'
    ],
    code: `<?php
echo "Pi value: " . pi() . "\\n";
echo "Min of (0, 150, 30): " . min(0, 150, 30) . "\\n";
echo "Square root of 64: " . sqrt(64) . "\\n";
echo "Random number (1 to 10): " . rand(1, 10) . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-constants',
    title: 'PHP Constants',
    description: 'Declare unchangeable identifiers using the define function or const keyword.',
    explanation: [
      'Constants are like variables, except that once they are defined, they cannot be changed or undefined.',
      'To create a constant, use the define() function or the const keyword.',
      'Constants are automatically global across the entire script.'
    ],
    code: `<?php
define("GREETING", "Welcome to NodeLab Sandbox!");
echo GREETING . "\\n";

const PLATFORM = "Web";
echo "Platform: " . PLATFORM . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-magicconstants',
    title: 'PHP Magic Constants',
    description: 'Learn about predefined PHP magic constants that change based on their location.',
    explanation: [
      'PHP has nine predefined constants called Magic Constants.',
      'They change depending on where they are used (e.g., current line number, class name, function name).',
      'They always start with two underscores and end with two underscores.'
    ],
    code: `<?php
echo "Current Line Number: " . __LINE__ . "\\n";
echo "Current File Path: " . __FILE__ . "\\n";
echo "Current Directory: " . __DIR__ . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-operators',
    title: 'PHP Operators',
    description: 'Perform arithmetic, logical, comparison, and ternary calculations.',
    explanation: [
      'Arithmetic operators: +, -, *, /, %, **.',
      'Comparison operators: ==, === (strict equal), !=, !==, >, <, >=, <=.',
      'Increment / Decrement operators: ++$x, $x++, --$x, $x--.',
      'Null coalescing operator (??) represents fallback assignments.'
    ],
    code: `<?php
$x = 10;
$y = "10";

echo "Check Equal (==): ";
var_dump($x == $y); // true

echo "Check Identical (===): ";
var_dump($x === $y); // false (different types)
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-ifelse',
    title: 'PHP If...Else...Elseif',
    description: 'Route program flow through conditional boolean branches.',
    explanation: [
      'Use the if statement to execute code if one condition is true.',
      'Use the elseif statement to specify a new condition if the first one is false.',
      'Use the else statement to specify code to execute if all conditions are false.'
    ],
    code: `<?php
$t = 14;

if ($t < 10) {
  echo "Have a good morning!";
} elseif ($t < 20) {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-switch',
    title: 'PHP Switch',
    description: 'Execute nested blocks based on matching case values.',
    explanation: [
      'Use the switch statement to select one of many blocks of code to be executed.',
      'Each match evaluates a case. Semicolons are skipped via breaks.',
      'An optional default statement executes if no matches are found.'
    ],
    code: `<?php
$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  default:
    echo "Your favorite color is neither red nor blue!";
}
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-match',
    title: 'PHP Match',
    description: 'Utilize PHP match expressions for powerful value assignment routing.',
    explanation: [
      'Introduced in PHP 8.0, match is similar to switch but returns a value directly.',
      'It uses strict comparison (===) rather than loose comparison (==).',
      'Does not require break statements, avoiding fall-through bugs.'
    ],
    code: `<?php
$status_code = 200;

$message = match ($status_code) {
    200, 201 => 'Success',
    400 => 'Bad Request',
    default => 'Unknown Status',
};

echo "Result message: " . $message;
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-loops',
    title: 'PHP Loops',
    description: 'Understand the concept of looping and repetitive statement execution in PHP.',
    explanation: [
      'Loops are used to execute the same block of code repeatedly as long as a certain condition is met.',
      'Instead of writing almost identical code statements, we can use loops to automate routing.'
    ],
    code: `<?php
echo "Loops automate repeating instructions efficiently!";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-while',
    title: 'PHP While Loop',
    description: 'Run statements repeatedly as long as specific expressions are true.',
    explanation: [
      'The while loop loops through a block of code as long as the specified condition is true.',
      'Be careful to increment or modify the loop condition to avoid infinite run states.'
    ],
    code: `<?php
$x = 1;

while($x <= 3) {
  echo "The number is: $x \\n";
  $x++;
}
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-dowhile',
    title: 'PHP Do While Loop',
    description: 'Ensure statements run at least once before checking loop conditions.',
    explanation: [
      'The do...while loop will always execute the block of code once.',
      'It will then check the condition, and repeat the loop as long as the specified condition is true.'
    ],
    code: `<?php
$x = 6;

do {
  echo "The number is: $x \\n"; // Will print once
  $x++;
} while ($x <= 5);
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-for',
    title: 'PHP For Loop',
    description: 'Count and loop through code a known number of times.',
    explanation: [
      'The for loop is used when you know in advance how many times the script should run.',
      'Syntax: for (init counter; test counter; increment counter)'
    ],
    code: `<?php
for ($x = 0; $x <= 3; $x++) {
  echo "Count: $x \\n";
}
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-foreach',
    title: 'PHP Foreach Loop',
    description: 'Iterate over array elements and associative map keys.',
    explanation: [
      'The foreach loop works only on arrays, and is used to loop through each key/value pair in an array.',
      'Syntax: foreach ($array as $value) or foreach ($array as $key => $value)'
    ],
    code: `<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $name => $value) {
  echo "$name is $value years old.\\n";
}
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-break',
    title: 'PHP Break Statement',
    description: 'Terminate loop execution early using the break keyword.',
    explanation: [
      'The break statement is used to jump out of a loop.',
      'This terminates loop execution immediately, transferring control to the code after the loop.'
    ],
    code: `<?php
for ($x = 0; $x < 10; $x++) {
  if ($x === 4) {
    break; // Exit loop completely
  }
  echo "Number: $x \\n";
}
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-continue',
    title: 'PHP Continue Statement',
    description: 'Skip the current loop iteration and proceed to the next index.',
    explanation: [
      'The continue statement breaks one iteration in the loop, if a specified condition occurs.',
      'It then continues with the next iteration in the loop.'
    ],
    code: `<?php
for ($x = 0; $x < 5; $x++) {
  if ($x === 2) {
    continue; // Skip printing 2
  }
  echo "Number: $x \\n";
}
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-functions',
    title: 'PHP Functions',
    description: 'Write reusable, customized functions that take arguments and return data.',
    explanation: [
      'A function is a block of statements that can be used repeatedly in a program.',
      'A function will not execute automatically when a page loads, but is called by name.',
      'You can pass parameters and return values using the return statement.'
    ],
    code: `<?php
function calculateDiscount($price, $discount = 10) {
  return $price - ($price * ($discount / 100));
}

echo "Final Price: " . calculateDiscount(100, 15) . "\\n";
echo "Default Discount Price: " . calculateDiscount(50) . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-arrays',
    title: 'PHP Arrays',
    description: 'Store diverse items inside indexed or associative array formats.',
    explanation: [
      'An array stores multiple values in one single variable.',
      'PHP has three types of arrays: Indexed, Associative (named keys), and Multidimensional arrays.',
      'Useful helpers: count(), sort(), rsort(), and array_push().'
    ],
    code: `<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "Car count: " . count($cars) . "\\n";

$age = array("Peter"=>"35", "Ben"=>"37");
echo "Ben's age is: " . $age['Ben'] . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-superglobals',
    title: 'PHP Superglobals',
    description: 'Explore PHP superglobal variables that are always accessible in any scope.',
    explanation: [
      'Several predefined variables in PHP are "superglobals", meaning they are always accessible, regardless of scope.',
      'Common superglobals: $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE, $_SESSION.'
    ],
    code: `<?php
echo "Current File Path: " . $_SERVER['PHP_SELF'] . "\\n";
echo "Server Name: " . $_SERVER['SERVER_NAME'] . "\\n";
?>`,
    languageId: 'php_prog'
  },
  {
    id: 'php-regex',
    title: 'PHP RegEx',
    description: 'Match, search, and parse patterns inside strings using regular expressions.',
    explanation: [
      'A regular expression is a sequence of characters that forms a search pattern.',
      'PHP has built-in functions for regex: preg_match() (checks pattern), preg_match_all(), and preg_replace() (replaces matches).'
    ],
    code: `<?php
$str = "Visit NodeLab Sandbox";
$pattern = "/nodelab/i"; // 'i' flag makes it case-insensitive

echo "Match status: " . preg_match($pattern, $str) . "\\n";
echo "Replaced: " . preg_replace($pattern, "the Web Portal", $str);
?>`,
    languageId: 'php_prog'
  }
];
