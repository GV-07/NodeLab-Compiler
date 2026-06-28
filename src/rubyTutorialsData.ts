import { TutorialTopic } from './cssTutorialsData';

export const RUBY_TOPICS: TutorialTopic[] = [
  {
    id: 'ruby-home',
    title: 'Ruby HOME',
    description: 'Welcome to Ruby! Ruby is a dynamic, open-source, object-oriented programming language with a focus on simplicity and productivity.',
    explanation: [
      'Ruby was created by Yukihiro "Matz" Matsumoto in Japan in the mid-1990s.',
      'Everything in Ruby is an object, including numbers, booleans, and classes.',
      'It has an elegant syntax that is natural to read and easy to write.'
    ],
    code: `puts "Hello, Ruby!"`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-intro',
    title: 'Ruby Intro',
    description: 'Understand the philosophy of Ruby, aiming to make programmers happy.',
    explanation: [
      'Ruby follows the "Principle of Least Surprise", aiming to minimize confusion for developers.',
      'It is dynamically and strongly typed.',
      'Famous for powering the Ruby on Rails web application framework.'
    ],
    code: `3.times do
  puts "Ruby makes developers happy!"
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-get-started',
    title: 'Ruby Get Started',
    description: 'Install the Ruby interpreter and utilize Interactive Ruby (irb) to execute statements.',
    explanation: [
      'Install Ruby using systems tools (rvm, rbenv, or apt/brew).',
      'Launch irb in terminal to run commands interactively.',
      'Run a Ruby file using: ruby main.rb.'
    ],
    code: `# Command to check installation:
# ruby -v
puts "Ruby installation working!"`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-syntax',
    title: 'Ruby Syntax',
    description: 'Analyze code structures, blocks, and method calls in Ruby.',
    explanation: [
      'Semicolons are not required at the end of statements; a newline acts as a terminator.',
      'Parentheses are often optional in method calls, although recommended for clarity.'
    ],
    code: `def greet(name)
  "Hello, " + name
end

puts greet "Matz"`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-comments',
    title: 'Ruby Comments',
    description: 'Annotate code paths using single-line and multi-line comments.',
    explanation: [
      'Use the hashtag (#) symbol for single-line comments.',
      'Use =begin and =end blocks for multi-line comments.'
    ],
    code: `# This is a single line comment

=begin
This is a
multi-line comment block
=end
puts "Comments are fully skipped at runtime!"`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-variables',
    title: 'Ruby Variables',
    description: 'Declare local, instance, class, and global variables in Ruby.',
    explanation: [
      'Local variables begin with a lowercase letter or underscore (e.g., age).',
      'Instance variables begin with @ (e.g., @name).',
      'Class variables begin with @@ (e.g., @@count).',
      'Global variables begin with $ (e.g., $global_status).'
    ],
    code: `class User
  @@user_count = 0 # Class variable

  def initialize(name)
    @name = name # Instance variable
    @@user_count += 1
  end
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-data-types',
    title: 'Ruby Data Types',
    description: 'Explore Ruby types: String, Numeric, Boolean, Hash, Array, and Symbols.',
    explanation: [
      'Symbols are lightweight, immutable strings, prefixed with colons (e.g., :active).',
      'All variables are objects, supporting built-in methods (e.g., 5.even?).'
    ],
    code: `status = :active # Symbol
print status.class # Symbol
print 10.next      # Outputs 11`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-operators',
    title: 'Ruby Operators',
    description: 'Evaluate operations, comparison, and the spaceships operator (<=>).',
    explanation: [
      'Arithmetic: +, -, *, /, %.',
      'The spaceships operator (<=>) returns -1, 0, or 1 depending on value comparisons.'
    ],
    code: `puts 5 <=> 10 # -1
puts 10 <=> 10 # 0
puts 15 <=> 10 # 1`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-strings',
    title: 'Ruby Strings',
    description: 'Concatenate, multiply, and interpolate strings in Ruby.',
    explanation: [
      'Double quotes enable string interpolation using #{expression}.',
      'Single quotes do not support interpolation.',
      'You can multiply strings to repeat them: "La" * 3.'
    ],
    code: `item = "Laptop"
puts "Buying #{item}" # Interpolated
puts "Apple " * 3       # "Apple Apple Apple "`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-numbers',
    title: 'Ruby Numbers',
    description: 'Understand integers, floats, and built-in numerical helpers.',
    explanation: [
      'Integers in Ruby can automatically grow arbitrarily large (Bignum).',
      'Includes useful methods like .abs, .round, and .times.'
    ],
    code: `5.times do |i|
  puts "Step: #{i}"
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-booleans',
    title: 'Ruby Booleans',
    description: 'Explore truthiness rules where only nil and false evaluate as falsy.',
    explanation: [
      'In Ruby, only false and nil represent falsy conditions.',
      'Everything else (including 0, empty strings, and empty arrays) evaluates to truthy!'
    ],
    code: `if 0
  puts "0 is truthy in Ruby!"
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-ifelse',
    title: 'Ruby If...Else',
    description: 'Branch your code using if, elsif, else, and the unless keyword.',
    explanation: [
      'The unless keyword executes code if the condition is false (the opposite of if).'
    ],
    code: `is_logged_in = false
unless is_logged_in
  puts "Please log in first."
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-switch',
    title: 'Ruby Switch',
    description: 'Set up switch structures using case and when statements.',
    explanation: [
      'The switch-like control in Ruby uses the case ... when syntax.',
      'Does not require break keywords.'
    ],
    code: `age = 18
case age
when 0..12
  puts "Child"
when 13..19
  puts "Teenager"
else
  puts "Adult"
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-loops',
    title: 'Ruby Loops',
    description: 'Iterate loops using while, until, and each block methods.',
    explanation: [
      'until runs until the condition becomes true.',
      'each is the preferred way to loop over collections in Ruby.'
    ],
    code: `[1, 2, 3].each do |num|
  puts "Number: #{num}"
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-break-continue',
    title: 'Ruby Break/Continue',
    description: 'Utilize break and next keywords to control execution flow.',
    explanation: [
      'break exits the loop.',
      'next is the Ruby equivalent of continue, skipping straight to the next loop iteration.'
    ],
    code: `[1, 2, 3, 4].each do |val|
  next if val == 2 # Skips 2
  break if val == 4
  puts val
end`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-arrays',
    title: 'Ruby Arrays',
    description: 'Declare, push, and filter arrays of dynamic types.',
    explanation: [
      'Ruby arrays can hold items of different types.',
      'Indices start at 0, and support negative index queries (e.g. -1 for last element).'
    ],
    code: `fruits = ["Apple", "Orange"]
fruits << "Banana" # shovel operator pushes item
puts fruits[-1]    # "Banana"`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-hashes',
    title: 'Ruby Hashes',
    description: 'Create dictionaries utilizing key symbols.',
    explanation: [
      'Hashes are key-value pairs (equivalent to objects or dictionaries in other languages).',
      'Standard keys are symbols for performance.'
    ],
    code: `profile = { name: "Alice", role: "Developer" }
puts profile[:name]`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-methods',
    title: 'Ruby Methods',
    description: 'Define methods with parameters, default values, and implicit returns.',
    explanation: [
      'Methods are defined using the def keyword.',
      'The last statement evaluated is automatically returned, making the return keyword optional.'
    ],
    code: `def add(a, b)
  a + b # Implicit return!
end

puts add(10, 5)`,
    languageId: 'ruby'
  },
  {
    id: 'ruby-oop',
    title: 'Ruby OOP (Classes/Objects)',
    description: 'Structure Classes, initializers, and reader/writer accessors.',
    explanation: [
      'The initialize method is the constructor in Ruby classes.',
      'Use attr_reader, attr_writer, or attr_accessor to automatically manage getters and setters.'
    ],
    code: `class Product
  attr_accessor :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end
end

prod = Product.new("Shoes", 50)
puts prod.name`,
    languageId: 'ruby'
  }
];
