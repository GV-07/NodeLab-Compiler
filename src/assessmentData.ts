export interface TestCase {
  input: string;
  expected: string;
  description: string;
}

export interface Problem {
  id: string;
  number: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  sampleInput: string;
  sampleOutput: string;
  initialCode: string;
  testCases: TestCase[];
}

export const ASSESSMENT_PROBLEMS: Record<string, Problem[]> = {
  python: [
    // --- EASY (1-3) ---
    {
      id: 'py-1',
      number: 1,
      title: 'Sum of Two Numbers',
      difficulty: 'Easy',
      description: 'Write a function `sum_two_numbers(a, b)` that takes two integers as input and returns their sum.',
      sampleInput: 'a = 5, b = 3',
      sampleOutput: '8',
      initialCode: 'def sum_two_numbers(a: int, b: int) -> int:\n    # Write your code here\n    pass',
      testCases: [
        { input: '3, 5', expected: '8', description: 'Small positive numbers' },
        { input: '-1, 1', expected: '0', description: 'Negative and positive numbers' },
        { input: '100, 250', expected: '350', description: 'Larger integers' }
      ]
    },
    {
      id: 'py-2',
      number: 2,
      title: 'Is Number Even',
      difficulty: 'Easy',
      description: 'Write a function `is_even(n)` that returns `True` if the integer `n` is even, and `False` if it is odd.',
      sampleInput: 'n = 4',
      sampleOutput: 'True',
      initialCode: 'def is_even(n: int) -> bool:\n    # Write your code here\n    pass',
      testCases: [
        { input: '4', expected: 'True', description: 'Positive even number' },
        { input: '7', expected: 'False', description: 'Positive odd number' },
        { input: '0', expected: 'True', description: 'Zero' }
      ]
    },
    {
      id: 'py-3',
      number: 3,
      title: 'Reverse String',
      difficulty: 'Easy',
      description: 'Write a function `reverse_string(s)` that takes a string `s` and returns its characters in reverse order.',
      sampleInput: '"nodelab"',
      sampleOutput: '"baledon"',
      initialCode: 'def reverse_string(s: str) -> str:\n    # Write your code here\n    pass',
      testCases: [
        { input: '"hello"', expected: '"olleh"', description: 'Standard lowercase word' },
        { input: '"A"', expected: '"A"', description: 'Single character string' },
        { input: '"123 456"', expected: '"654 321"', description: 'String with spaces and digits' }
      ]
    },
    // --- MEDIUM (4-6) ---
    {
      id: 'py-4',
      number: 4,
      title: 'FizzBuzz Array',
      difficulty: 'Medium',
      description: 'Write a function `fizz_buzz(n)` that returns a list of strings representing numbers from 1 to `n`. For multiples of 3 return "Fizz", for multiples of 5 return "Buzz", and for multiples of both return "FizzBuzz". Otherwise return the number as a string.',
      sampleInput: 'n = 5',
      sampleOutput: '["1", "2", "Fizz", "4", "Buzz"]',
      initialCode: 'from typing import List\n\ndef fizz_buzz(n: int) -> List[str]:\n    # Write your code here\n    pass',
      testCases: [
        { input: '3', expected: '["1", "2", "Fizz"]', description: 'Up to three' },
        { input: '5', expected: '["1", "2", "Fizz", "4", "Buzz"]', description: 'Up to five' },
        { input: '15', expected: '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]', description: 'Up to fifteen' }
      ]
    },
    {
      id: 'py-5',
      number: 5,
      title: 'Find Duplicates',
      difficulty: 'Medium',
      description: 'Write a function `find_duplicates(nums)` that takes a list of integers and returns a sorted list containing only the integers that appear more than once in the input list.',
      sampleInput: '[4, 3, 2, 7, 8, 2, 3, 1]',
      sampleOutput: '[2, 3]',
      initialCode: 'from typing import List\n\ndef find_duplicates(nums: List[int]) -> List[int]:\n    # Write your code here\n    pass',
      testCases: [
        { input: '[1, 1, 2, 3, 3]', expected: '[1, 3]', description: 'List with multiple duplicates' },
        { input: '[1, 2, 3, 4]', expected: '[]', description: 'No duplicates' },
        { input: '[5, 5, 5, 5]', expected: '[5]', description: 'All items identical' }
      ]
    },
    {
      id: 'py-6',
      number: 6,
      title: 'Fibonacci Sequence',
      difficulty: 'Medium',
      description: 'Write a function `fibonacci(n)` that returns the `n`-th Fibonacci number. Assume `fibonacci(0) = 0` and `fibonacci(1) = 1`. Your algorithm should run efficiently in O(n) time.',
      sampleInput: 'n = 6',
      sampleOutput: '8',
      initialCode: 'def fibonacci(n: int) -> int:\n    # Write your code here\n    pass',
      testCases: [
        { input: '0', expected: '0', description: 'Base case zero' },
        { input: '1', expected: '1', description: 'Base case one' },
        { input: '10', expected: '55', description: 'Tenth Fibonacci number' }
      ]
    },
    // --- HARD (7-10) ---
    {
      id: 'py-7',
      number: 7,
      title: 'Two Sum Indices',
      difficulty: 'Hard',
      description: 'Write a function `two_sum(nums, target)` that returns the indices of the two numbers in `nums` such that they add up to the specified `target`. Each input has exactly one solution, and you may not use the same element twice. Return the indices sorted in ascending order.',
      sampleInput: 'nums = [2, 7, 11, 15], target = 9',
      sampleOutput: '[0, 1]',
      initialCode: 'from typing import List\n\ndef two_sum(nums: List[int], target: int) -> List[int]:\n    # Write your code here\n    pass',
      testCases: [
        { input: '[2, 7, 11, 15], 9', expected: '[0, 1]', description: 'First two elements' },
        { input: '[3, 2, 4], 6', expected: '[1, 2]', description: 'Non-consecutive elements' },
        { input: '[3, 3], 6', expected: '[0, 1]', description: 'Identical elements' }
      ]
    },
    {
      id: 'py-8',
      number: 8,
      title: 'Valid Parentheses',
      difficulty: 'Hard',
      description: 'Write a function `is_valid_parentheses(s)` that takes a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, and determines if the input string is valid. An input string is valid if brackets close in the correct order.',
      sampleInput: '"()[]{}"',
      sampleOutput: 'True',
      initialCode: 'def is_valid_parentheses(s: str) -> bool:\n    # Write your code here\n    pass',
      testCases: [
        { input: '"()"', expected: 'True', description: 'Simple brackets' },
        { input: '"()[]{}"', expected: 'True', description: 'Multiple open and closed brackets' },
        { input: '"(]"', expected: 'False', description: 'Mismatched brackets' }
      ]
    },
    {
      id: 'py-9',
      number: 9,
      title: 'Longest Unique Substring',
      difficulty: 'Hard',
      description: 'Write a function `longest_unique_substring(s)` that returns the length of the longest substring without repeating characters.',
      sampleInput: '"abcabcbb"',
      sampleOutput: '3',
      initialCode: 'def longest_unique_substring(s: str) -> int:\n    # Write your code here\n    pass',
      testCases: [
        { input: '"abcabcbb"', expected: '3', description: 'Repeating patterns' },
        { input: '"bbbbb"', expected: '1', description: 'All identical chars' },
        { input: '"pwwkew"', expected: '3', description: 'Substring within text' }
      ]
    },
    {
      id: 'py-10',
      number: 10,
      title: 'Merge Overlapping Intervals',
      difficulty: 'Hard',
      description: 'Write a function `merge_intervals(intervals)` that takes a list of intervals where `intervals[i] = [start_i, end_i]`, merges all overlapping intervals, and returns a sorted list of the non-overlapping intervals that cover all the input intervals.',
      sampleInput: '[[1, 3], [2, 6], [8, 10], [15, 18]]',
      sampleOutput: '[[1, 6], [8, 10], [15, 18]]',
      initialCode: 'from typing import List\n\ndef merge_intervals(intervals: List[List[int]]) -> List[List[int]]:\n    # Write your code here\n    pass',
      testCases: [
        { input: '[[1, 3], [2, 6], [8, 10], [15, 18]]', expected: '[[1, 6], [8, 10], [15, 18]]', description: 'Overlapping boundaries' },
        { input: '[[1, 4], [4, 5]]', expected: '[[1, 5]]', description: 'Touching edge-to-edge' },
        { input: '[[1, 10], [2, 6]]', expected: '[[1, 10]]', description: 'Completely contained interval' }
      ]
    }
  ],
  javascript: [
    // --- EASY (1-3) ---
    {
      id: 'js-1',
      number: 1,
      title: 'Sum of Two Numbers',
      difficulty: 'Easy',
      description: 'Write a function `sumTwoNumbers(a, b)` that takes two numbers as inputs and returns their sum.',
      sampleInput: 'a = 5, b = 3',
      sampleOutput: '8',
      initialCode: 'function sumTwoNumbers(a, b) {\n    // Write your code here\n    return 0;\n}',
      testCases: [
        { input: '3, 5', expected: '8', description: 'Small positive numbers' },
        { input: '-1, 1', expected: '0', description: 'Negative and positive numbers' },
        { input: '100, 250', expected: '350', description: 'Larger integers' }
      ]
    },
    {
      id: 'js-2',
      number: 2,
      title: 'Is Number Even',
      difficulty: 'Easy',
      description: 'Write a function `isEven(n)` that returns `true` if the integer `n` is even, and `false` if it is odd.',
      sampleInput: 'n = 4',
      sampleOutput: 'true',
      initialCode: 'function isEven(n) {\n    // Write your code here\n    return false;\n}',
      testCases: [
        { input: '4', expected: 'true', description: 'Positive even number' },
        { input: '7', expected: 'false', description: 'Positive odd number' },
        { input: '0', expected: 'true', description: 'Zero' }
      ]
    },
    {
      id: 'js-3',
      number: 3,
      title: 'Reverse String',
      difficulty: 'Easy',
      description: 'Write a function `reverseString(s)` that takes a string `s` and returns its characters in reverse order.',
      sampleInput: '"nodelab"',
      sampleOutput: '"baledon"',
      initialCode: 'function reverseString(s) {\n    // Write your code here\n    return "";\n}',
      testCases: [
        { input: '"hello"', expected: '"olleh"', description: 'Standard lowercase word' },
        { input: '"A"', expected: '"A"', description: 'Single character string' },
        { input: '"123 456"', expected: '"654 321"', description: 'String with spaces and digits' }
      ]
    },
    // --- MEDIUM (4-6) ---
    {
      id: 'js-4',
      number: 4,
      title: 'FizzBuzz Array',
      difficulty: 'Medium',
      description: 'Write a function `fizzBuzz(n)` that returns an array of strings representing numbers from 1 to `n`. For multiples of 3 return "Fizz", for multiples of 5 return "Buzz", and for multiples of both return "FizzBuzz". Otherwise return the number as a string.',
      sampleInput: 'n = 5',
      sampleOutput: '["1", "2", "Fizz", "4", "Buzz"]',
      initialCode: 'function fizzBuzz(n) {\n    // Write your code here\n    return [];\n}',
      testCases: [
        { input: '3', expected: '["1", "2", "Fizz"]', description: 'Up to three' },
        { input: '5', expected: '["1", "2", "Fizz", "4", "Buzz"]', description: 'Up to five' },
        { input: '15', expected: '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]', description: 'Up to fifteen' }
      ]
    },
    {
      id: 'js-5',
      number: 5,
      title: 'Find Duplicates',
      difficulty: 'Medium',
      description: 'Write a function `findDuplicates(nums)` that takes an array of integers and returns a sorted array containing only the numbers that appear more than once in the input array.',
      sampleInput: '[4, 3, 2, 7, 8, 2, 3, 1]',
      sampleOutput: '[2, 3]',
      initialCode: 'function findDuplicates(nums) {\n    // Write your code here\n    return [];\n}',
      testCases: [
        { input: '[1, 1, 2, 3, 3]', expected: '[1, 3]', description: 'List with multiple duplicates' },
        { input: '[1, 2, 3, 4]', expected: '[]', description: 'No duplicates' },
        { input: '[5, 5, 5, 5]', expected: '[5]', description: 'All items identical' }
      ]
    },
    {
      id: 'js-6',
      number: 6,
      title: 'Fibonacci Sequence',
      difficulty: 'Medium',
      description: 'Write a function `fibonacci(n)` that returns the `n`-th Fibonacci number. Assume `fibonacci(0) = 0` and `fibonacci(1) = 1`. Your algorithm should run efficiently in O(n) time.',
      sampleInput: 'n = 6',
      sampleOutput: '8',
      initialCode: 'function fibonacci(n) {\n    // Write your code here\n    return 0;\n}',
      testCases: [
        { input: '0', expected: '0', description: 'Base case zero' },
        { input: '1', expected: '1', description: 'Base case one' },
        { input: '10', expected: '55', description: 'Tenth Fibonacci number' }
      ]
    },
    // --- HARD (7-10) ---
    {
      id: 'js-7',
      number: 7,
      title: 'Two Sum Indices',
      difficulty: 'Hard',
      description: 'Write a function `twoSum(nums, target)` that returns the indices of the two numbers in `nums` such that they add up to the specified `target`. Each input has exactly one solution, and you may not use the same element twice. Return the indices sorted in ascending order.',
      sampleInput: 'nums = [2, 7, 11, 15], target = 9',
      sampleOutput: '[0, 1]',
      initialCode: 'function twoSum(nums, target) {\n    // Write your code here\n    return [];\n}',
      testCases: [
        { input: '[2, 7, 11, 15], 9', expected: '[0, 1]', description: 'First two elements' },
        { input: '[3, 2, 4], 6', expected: '[1, 2]', description: 'Non-consecutive elements' },
        { input: '[3, 3], 6', expected: '[0, 1]', description: 'Identical elements' }
      ]
    },
    {
      id: 'js-8',
      number: 8,
      title: 'Valid Parentheses',
      difficulty: 'Hard',
      description: 'Write a function `isValidParentheses(s)` that takes a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, and determines if the input string is valid. An input string is valid if brackets close in the correct order.',
      sampleInput: '"()[]{}"',
      sampleOutput: 'true',
      initialCode: 'function isValidParentheses(s) {\n    // Write your code here\n    return false;\n}',
      testCases: [
        { input: '"()"', expected: 'true', description: 'Simple brackets' },
        { input: '"()[]{}"', expected: 'true', description: 'Multiple open and closed brackets' },
        { input: '"(]"', expected: 'false', description: 'Mismatched brackets' }
      ]
    },
    {
      id: 'js-9',
      number: 9,
      title: 'Longest Unique Substring',
      difficulty: 'Hard',
      description: 'Write a function `longestUniqueSubstring(s)` that returns the length of the longest substring without repeating characters.',
      sampleInput: '"abcabcbb"',
      sampleOutput: '3',
      initialCode: 'function longestUniqueSubstring(s) {\n    // Write your code here\n    return 0;\n}',
      testCases: [
        { input: '"abcabcbb"', expected: '3', description: 'Repeating patterns' },
        { input: '"bbbbb"', expected: '1', description: 'All identical chars' },
        { input: '"pwwkew"', expected: '3', description: 'Substring within text' }
      ]
    },
    {
      id: 'js-10',
      number: 10,
      title: 'Merge Overlapping Intervals',
      difficulty: 'Hard',
      description: 'Write a function `mergeIntervals(intervals)` that takes an array of intervals where `intervals[i] = [start_i, end_i]`, merges all overlapping intervals, and returns a sorted array of the non-overlapping intervals that cover all the input intervals.',
      sampleInput: '[[1, 3], [2, 6], [8, 10], [15, 18]]',
      sampleOutput: '[[1, 6], [8, 10], [15, 18]]',
      initialCode: 'function mergeIntervals(intervals) {\n    // Write your code here\n    return [];\n}',
      testCases: [
        { input: '[[1, 3], [2, 6], [8, 10], [15, 18]]', expected: '[[1, 6], [8, 10], [15, 18]]', description: 'Overlapping boundaries' },
        { input: '[[1, 4], [4, 5]]', expected: '[[1, 5]]', description: 'Touching edge-to-edge' },
        { input: '[[1, 10], [2, 6]]', expected: '[[1, 10]]', description: 'Completely contained interval' }
      ]
    }
  ],
  java: [
    {
      id: 'java-1',
      number: 1,
      title: 'Sum of Two Numbers',
      difficulty: 'Easy',
      description: 'Write a Java method `public int sumTwoNumbers(int a, int b)` inside class `Solution` that returns their sum.',
      sampleInput: 'a = 5, b = 3',
      sampleOutput: '8',
      initialCode: 'public class Solution {\n    public int sumTwoNumbers(int a, int b) {\n        // Write your code here\n        return 0;\n    }\n}',
      testCases: [
        { input: '3, 5', expected: '8', description: 'Small positive numbers' },
        { input: '-1, 1', expected: '0', description: 'Negative and positive numbers' },
        { input: '100, 250', expected: '350', description: 'Larger integers' }
      ]
    },
    {
      id: 'java-2',
      number: 2,
      title: 'Is Number Even',
      difficulty: 'Easy',
      description: 'Write a Java method `public boolean isEven(int n)` that returns `true` if `n` is even, and `false` otherwise.',
      sampleInput: 'n = 4',
      sampleOutput: 'true',
      initialCode: 'public class Solution {\n    public boolean isEven(int n) {\n        // Write your code here\n        return false;\n    }\n}',
      testCases: [
        { input: '4', expected: 'true', description: 'Positive even number' },
        { input: '7', expected: 'false', description: 'Positive odd number' },
        { input: '0', expected: 'true', description: 'Zero' }
      ]
    },
    {
      id: 'java-3',
      number: 3,
      title: 'Reverse String',
      difficulty: 'Easy',
      description: 'Write a Java method `public String reverseString(String s)` that takes a string `s` and returns its characters in reverse order.',
      sampleInput: '"nodelab"',
      sampleOutput: '"baledon"',
      initialCode: 'public class Solution {\n    public String reverseString(String s) {\n        // Write your code here\n        return "";\n    }\n}',
      testCases: [
        { input: '"hello"', expected: '"olleh"', description: 'Standard lowercase word' },
        { input: '"A"', expected: '"A"', description: 'Single character string' },
        { input: '"123 456"', expected: '"654 321"', description: 'String with spaces and digits' }
      ]
    },
    {
      id: 'java-4',
      number: 4,
      title: 'FizzBuzz Array',
      difficulty: 'Medium',
      description: 'Write a Java method `public String[] fizzBuzz(int n)` that returns an array of strings representing numbers from 1 to `n` with FizzBuzz rules.',
      sampleInput: 'n = 5',
      sampleOutput: '["1", "2", "Fizz", "4", "Buzz"]',
      initialCode: 'public class Solution {\n    public String[] fizzBuzz(int n) {\n        // Write your code here\n        return new String[0];\n    }\n}',
      testCases: [
        { input: '3', expected: '["1", "2", "Fizz"]', description: 'Up to three' },
        { input: '5', expected: '["1", "2", "Fizz", "4", "Buzz"]', description: 'Up to five' },
        { input: '15', expected: '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]', description: 'Up to fifteen' }
      ]
    },
    {
      id: 'java-5',
      number: 5,
      title: 'Find Duplicates',
      difficulty: 'Medium',
      description: 'Write a Java method `public int[] findDuplicates(int[] nums)` that returns a sorted array of unique values that occur more than once in `nums`.',
      sampleInput: '[4, 3, 2, 7, 8, 2, 3, 1]',
      sampleOutput: '[2, 3]',
      initialCode: 'import java.util.*;\n\npublic class Solution {\n    public int[] findDuplicates(int[] nums) {\n        // Write your code here\n        return new int[0];\n    }\n}',
      testCases: [
        { input: '[1, 1, 2, 3, 3]', expected: '[1, 3]', description: 'List with multiple duplicates' },
        { input: '[1, 2, 3, 4]', expected: '[]', description: 'No duplicates' },
        { input: '[5, 5, 5, 5]', expected: '[5]', description: 'All items identical' }
      ]
    },
    {
      id: 'java-6',
      number: 6,
      title: 'Fibonacci Sequence',
      difficulty: 'Medium',
      description: 'Write an efficient Java method `public long fibonacci(int n)` that returns the `n`-th Fibonacci number. Time complexity should be O(n).',
      sampleInput: 'n = 6',
      sampleOutput: '8',
      initialCode: 'public class Solution {\n    public long fibonacci(int n) {\n        // Write your code here\n        return 0;\n    }\n}',
      testCases: [
        { input: '0', expected: '0', description: 'Base case zero' },
        { input: '1', expected: '1', description: 'Base case one' },
        { input: '10', expected: '55', description: 'Tenth Fibonacci number' }
      ]
    },
    {
      id: 'java-7',
      number: 7,
      title: 'Two Sum Indices',
      difficulty: 'Hard',
      description: 'Write a Java method `public int[] twoSum(int[] nums, int target)` that returns the indices of the two elements in `nums` that sum to `target`.',
      sampleInput: 'nums = [2, 7, 11, 15], target = 9',
      sampleOutput: '[0, 1]',
      initialCode: 'public class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[0];\n    }\n}',
      testCases: [
        { input: '[2, 7, 11, 15], 9', expected: '[0, 1]', description: 'First two elements' },
        { input: '[3, 2, 4], 6', expected: '[1, 2]', description: 'Non-consecutive elements' },
        { input: '[3, 3], 6', expected: '[0, 1]', description: 'Identical elements' }
      ]
    },
    {
      id: 'java-8',
      number: 8,
      title: 'Valid Parentheses',
      difficulty: 'Hard',
      description: 'Write a Java method `public boolean isValidParentheses(String s)` that validates correct nesting of bracket types: `(`, `)`, `{`, `}`, `[` and `]`.',
      sampleInput: '"()[]{}"',
      sampleOutput: 'true',
      initialCode: 'import java.util.Stack;\n\npublic class Solution {\n    public boolean isValidParentheses(String s) {\n        // Write your code here\n        return false;\n    }\n}',
      testCases: [
        { input: '"()"', expected: 'true', description: 'Simple brackets' },
        { input: '"()[]{}"', expected: 'true', description: 'Multiple open and closed brackets' },
        { input: '"(]"', expected: 'false', description: 'Mismatched brackets' }
      ]
    },
    {
      id: 'java-9',
      number: 9,
      title: 'Longest Unique Substring',
      difficulty: 'Hard',
      description: 'Write a Java method `public int longestUniqueSubstring(String s)` that returns the length of the longest substring containing unique characters.',
      sampleInput: '"abcabcbb"',
      sampleOutput: '3',
      initialCode: 'import java.util.*;\n\npublic class Solution {\n    public int longestUniqueSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}',
      testCases: [
        { input: '"abcabcbb"', expected: '3', description: 'Repeating patterns' },
        { input: '"bbbbb"', expected: '1', description: 'All identical chars' },
        { input: '"pwwkew"', expected: '3', description: 'Substring within text' }
      ]
    },
    {
      id: 'java-10',
      number: 10,
      title: 'Merge Overlapping Intervals',
      difficulty: 'Hard',
      description: 'Write a Java method `public int[][] mergeIntervals(int[][] intervals)` that merges overlapping intervals and returns sorted non-overlapping intervals.',
      sampleInput: '[[1, 3], [2, 6], [8, 10], [15, 18]]',
      sampleOutput: '[[1, 6], [8, 10], [15, 18]]',
      initialCode: 'import java.util.*;\n\npublic class Solution {\n    public int[][] mergeIntervals(int[][] intervals) {\n        // Write your code here\n        return new int[0][0];\n    }\n}',
      testCases: [
        { input: '[[1, 3], [2, 6], [8, 10], [15, 18]]', expected: '[[1, 6], [8, 10], [15, 18]]', description: 'Overlapping boundaries' },
        { input: '[[1, 4], [4, 5]]', expected: '[[1, 5]]', description: 'Touching edge-to-edge' },
        { input: '[[1, 10], [2, 6]]', expected: '[[1, 10]]', description: 'Completely contained interval' }
      ]
    }
  ],
  cpp: [
    {
      id: 'cpp-1',
      number: 1,
      title: 'Sum of Two Numbers',
      difficulty: 'Easy',
      description: 'Write a C++ function `int sumTwoNumbers(int a, int b)` that returns their sum.',
      sampleInput: 'a = 5, b = 3',
      sampleOutput: '8',
      initialCode: '#include <iostream>\n\nint sumTwoNumbers(int a, int b) {\n    // Write your code here\n    return 0;\n}',
      testCases: [
        { input: '3, 5', expected: '8', description: 'Small positive numbers' },
        { input: '-1, 1', expected: '0', description: 'Negative and positive numbers' },
        { input: '100, 250', expected: '350', description: 'Larger integers' }
      ]
    },
    {
      id: 'cpp-2',
      number: 2,
      title: 'Is Number Even',
      difficulty: 'Easy',
      description: 'Write a C++ function `bool isEven(int n)` that returns `true` if `n` is even, and `false` otherwise.',
      sampleInput: 'n = 4',
      sampleOutput: 'true',
      initialCode: 'bool isEven(int n) {\n    // Write your code here\n    return false;\n}',
      testCases: [
        { input: '4', expected: 'true', description: 'Positive even number' },
        { input: '7', expected: 'false', description: 'Positive odd number' },
        { input: '0', expected: 'true', description: 'Zero' }
      ]
    },
    {
      id: 'cpp-3',
      number: 3,
      title: 'Reverse String',
      difficulty: 'Easy',
      description: 'Write a C++ function `std::string reverseString(std::string s)` that takes a string `s` and returns it reversed.',
      sampleInput: '"nodelab"',
      sampleOutput: '"baledon"',
      initialCode: '#include <string>\n#include <algorithm>\n\nstd::string reverseString(std::string s) {\n    // Write your code here\n    return "";\n}',
      testCases: [
        { input: '"hello"', expected: '"olleh"', description: 'Standard lowercase word' },
        { input: '"A"', expected: '"A"', description: 'Single character string' },
        { input: '"123 456"', expected: '"654 321"', description: 'String with spaces and digits' }
      ]
    },
    {
      id: 'cpp-4',
      number: 4,
      title: 'FizzBuzz Array',
      difficulty: 'Medium',
      description: 'Write a C++ function `std::vector<std::string> fizzBuzz(int n)` that returns numbers 1 to `n` as strings with FizzBuzz rules.',
      sampleInput: 'n = 5',
      sampleOutput: '["1", "2", "Fizz", "4", "Buzz"]',
      initialCode: '#include <vector>\n#include <string>\n\nstd::vector<std::string> fizzBuzz(int n) {\n    // Write your code here\n    return {};\n}',
      testCases: [
        { input: '3', expected: '["1", "2", "Fizz"]', description: 'Up to three' },
        { input: '5', expected: '["1", "2", "Fizz", "4", "Buzz"]', description: 'Up to five' },
        { input: '15', expected: '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]', description: 'Up to fifteen' }
      ]
    },
    {
      id: 'cpp-5',
      number: 5,
      title: 'Find Duplicates',
      difficulty: 'Medium',
      description: 'Write a C++ function `std::vector<int> findDuplicates(std::vector<int>& nums)` that returns duplicate values in sorted order.',
      sampleInput: '[4, 3, 2, 7, 8, 2, 3, 1]',
      sampleOutput: '[2, 3]',
      initialCode: '#include <vector>\n#include <algorithm>\n\nstd::vector<int> findDuplicates(std::vector<int>& nums) {\n    // Write your code here\n    return {};\n}',
      testCases: [
        { input: '[1, 1, 2, 3, 3]', expected: '[1, 3]', description: 'List with multiple duplicates' },
        { input: '[1, 2, 3, 4]', expected: '[]', description: 'No duplicates' },
        { input: '[5, 5, 5, 5]', expected: '[5]', description: 'All items identical' }
      ]
    },
    {
      id: 'cpp-6',
      number: 6,
      title: 'Fibonacci Sequence',
      difficulty: 'Medium',
      description: 'Write an efficient O(n) C++ function `long long fibonacci(int n)` that returns the `n`-th Fibonacci value.',
      sampleInput: 'n = 6',
      sampleOutput: '8',
      initialCode: 'long long fibonacci(int n) {\n    // Write your code here\n    return 0;\n}',
      testCases: [
        { input: '0', expected: '0', description: 'Base case zero' },
        { input: '1', expected: '1', description: 'Base case one' },
        { input: '10', expected: '55', description: 'Tenth Fibonacci number' }
      ]
    },
    {
      id: 'cpp-7',
      number: 7,
      title: 'Two Sum Indices',
      difficulty: 'Hard',
      description: 'Write a C++ function `std::vector<int> twoSum(std::vector<int>& nums, int target)` that returns indices of elements adding to `target`.',
      sampleInput: 'nums = [2, 7, 11, 15], target = 9',
      sampleOutput: '[0, 1]',
      initialCode: '#include <vector>\n\nstd::vector<int> twoSum(std::vector<int>& nums, int target) {\n    // Write your code here\n    return {};\n}',
      testCases: [
        { input: '[2, 7, 11, 15], 9', expected: '[0, 1]', description: 'First two elements' },
        { input: '[3, 2, 4], 6', expected: '[1, 2]', description: 'Non-consecutive elements' },
        { input: '[3, 3], 6', expected: '[0, 1]', description: 'Identical elements' }
      ]
    },
    {
      id: 'cpp-8',
      number: 8,
      title: 'Valid Parentheses',
      difficulty: 'Hard',
      description: 'Write a C++ function `bool isValidParentheses(std::string s)` checking balanced brackets.',
      sampleInput: '"()[]{}"',
      sampleOutput: 'true',
      initialCode: '#include <string>\n#include <stack>\n\nbool isValidParentheses(std::string s) {\n    // Write your code here\n    return false;\n}',
      testCases: [
        { input: '"()"', expected: 'true', description: 'Simple brackets' },
        { input: '"()[]{}"', expected: 'true', description: 'Multiple open and closed brackets' },
        { input: '"(]"', expected: 'false', description: 'Mismatched brackets' }
      ]
    },
    {
      id: 'cpp-9',
      number: 9,
      title: 'Longest Unique Substring',
      difficulty: 'Hard',
      description: 'Write a C++ function `int longestUniqueSubstring(std::string s)` returning length of longest unique substring.',
      sampleInput: '"abcabcbb"',
      sampleOutput: '3',
      initialCode: '#include <string>\n#include <unordered_set>\n\nint longestUniqueSubstring(std::string s) {\n    // Write your code here\n    return 0;\n}',
      testCases: [
        { input: '"abcabcbb"', expected: '3', description: 'Repeating patterns' },
        { input: '"bbbbb"', expected: '1', description: 'All identical chars' },
        { input: '"pwwkew"', expected: '3', description: 'Substring within text' }
      ]
    },
    {
      id: 'cpp-10',
      number: 10,
      title: 'Merge Overlapping Intervals',
      difficulty: 'Hard',
      description: 'Write a C++ function `std::vector<std::vector<int>> mergeIntervals(std::vector<std::vector<int>>& intervals)` merging intervals.',
      sampleInput: '[[1, 3], [2, 6], [8, 10], [15, 18]]',
      sampleOutput: '[[1, 6], [8, 10], [15, 18]]',
      initialCode: '#include <vector>\n#include <algorithm>\n\nstd::vector<std::vector<int>> mergeIntervals(std::vector<std::vector<int>>& intervals) {\n    // Write your code here\n    return {};\n}',
      testCases: [
        { input: '[[1, 3], [2, 6], [8, 10], [15, 18]]', expected: '[[1, 6], [8, 10], [15, 18]]', description: 'Overlapping boundaries' },
        { input: '[[1, 4], [4, 5]]', expected: '[[1, 5]]', description: 'Touching edge-to-edge' },
        { input: '[[1, 10], [2, 6]]', expected: '[[1, 10]]', description: 'Completely contained interval' }
      ]
    }
  ],
  sql: [
    {
      id: 'sql-1',
      number: 1,
      title: 'Select All Customers',
      difficulty: 'Easy',
      description: 'Write a SQL query to retrieve all fields (`*`) for all records in the `customers` table.',
      sampleInput: 'Table: customers (id, name, email, city)',
      sampleOutput: 'SELECT * FROM customers;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Select clause', expected: 'SELECT * FROM customers', description: 'Contains SELECT *' },
        { input: 'Table name', expected: 'FROM customers', description: 'Contains FROM customers' },
        { input: 'Semicolon check', expected: ';', description: 'Ended with Semicolon' }
      ]
    },
    {
      id: 'sql-2',
      number: 2,
      title: 'Filter by Status',
      difficulty: 'Easy',
      description: 'Write a SQL query to select `name` and `email` of all users from table `users` whose `status` is equal to "active".',
      sampleInput: 'Table: users (id, name, email, status)',
      sampleOutput: 'SELECT name, email FROM users WHERE status = \'active\';',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Columns', expected: 'name, email', description: 'Selects name and email' },
        { input: 'Filter clause', expected: "status = 'active'", description: 'Active filter condition' },
        { input: 'Table source', expected: 'FROM users', description: 'Users table target' }
      ]
    },
    {
      id: 'sql-3',
      number: 3,
      title: 'Sort Products by Price',
      difficulty: 'Easy',
      description: 'Write a SQL query to select all fields from `products` where `category` is "electronics", sorted by `price` in descending order.',
      sampleInput: 'Table: products (id, name, category, price)',
      sampleOutput: 'SELECT * FROM products WHERE category = \'electronics\' ORDER BY price DESC;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Sort logic', expected: 'ORDER BY price DESC', description: 'Descending price sort order' },
        { input: 'Filter Electronics', expected: "category = 'electronics'", description: 'Electronics filter' },
        { input: 'Target table', expected: 'FROM products', description: 'Products target table' }
      ]
    },
    {
      id: 'sql-4',
      number: 4,
      title: 'Count Employees by Department',
      difficulty: 'Medium',
      description: 'Write a SQL query to select `department_id` and the total number of employees in each department as `employee_count` from the `employees` table. Group the result by `department_id`.',
      sampleInput: 'Table: employees (id, name, department_id, salary)',
      sampleOutput: 'SELECT department_id, COUNT(*) as employee_count FROM employees GROUP BY department_id;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Aggregation', expected: 'COUNT(*)', description: 'Correct counting function' },
        { input: 'Alias', expected: 'employee_count', description: 'Named alias for count' },
        { input: 'Grouping', expected: 'GROUP BY department_id', description: 'Grouped by department_id' }
      ]
    },
    {
      id: 'sql-5',
      number: 5,
      title: 'Highest Salary in Department',
      difficulty: 'Medium',
      description: 'Write a SQL query to select `department_id` and the maximum `salary` as `max_salary` for each department, but only including departments where the maximum salary is greater than 50000.',
      sampleInput: 'Table: employees (id, department_id, salary)',
      sampleOutput: 'SELECT department_id, MAX(salary) as max_salary FROM employees GROUP BY department_id HAVING MAX(salary) > 50000;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Max aggregate', expected: 'MAX(salary)', description: 'Aggregates maximum salary' },
        { input: 'Having clause', expected: 'HAVING MAX(salary) > 50000', description: 'Post-group filter for salary' },
        { input: 'Grouping fields', expected: 'GROUP BY department_id', description: 'Group by department' }
      ]
    },
    {
      id: 'sql-6',
      number: 6,
      title: 'Average Order Value',
      difficulty: 'Medium',
      description: 'Write a SQL query to select the `customer_id` and the average of `order_amount` as `avg_amount` for customers who have placed more than 3 orders.',
      sampleInput: 'Table: orders (id, customer_id, order_amount)',
      sampleOutput: 'SELECT customer_id, AVG(order_amount) as avg_amount FROM orders GROUP BY customer_id HAVING COUNT(id) > 3;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Average function', expected: 'AVG(order_amount)', description: 'Calculates average spend' },
        { input: 'Having count', expected: 'HAVING COUNT(id) > 3', description: 'Threshold filter for orders count' },
        { input: 'Group order', expected: 'GROUP BY customer_id', description: 'Groups records per client' }
      ]
    },
    {
      id: 'sql-7',
      number: 7,
      title: 'Join Orders and Customers',
      difficulty: 'Hard',
      description: 'Write a SQL query to retrieve the customer `name`, order `id`, and order `date` from table `orders` joined with `customers` using `customer_id`. Sort by order `date` descending.',
      sampleInput: 'Tables: customers (id, name), orders (id, customer_id, date)',
      sampleOutput: 'SELECT customers.name, orders.id, orders.date FROM orders JOIN customers ON orders.customer_id = customers.id ORDER BY orders.date DESC;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Join type', expected: 'JOIN customers', description: 'Performs standard table join' },
        { input: 'On condition', expected: 'orders.customer_id = customers.id', description: 'Correct relationship matching keys' },
        { input: 'Fields', expected: 'customers.name, orders.id, orders.date', description: 'Selects accurate prefix columns' }
      ]
    },
    {
      id: 'sql-8',
      number: 8,
      title: 'Left Join & Null check',
      difficulty: 'Hard',
      description: 'Write a SQL query to list all customer `name`s and their total spend as `total_spent` (sum of `order_amount`). Include customers with 0 orders, showing their spend as `0` or `NULL`. Use a LEFT JOIN.',
      sampleInput: 'Tables: customers (id, name), orders (id, customer_id, order_amount)',
      sampleOutput: 'SELECT customers.name, SUM(orders.order_amount) as total_spent FROM customers LEFT JOIN orders ON customers.id = orders.customer_id GROUP BY customers.name;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Left join keyword', expected: 'LEFT JOIN orders', description: 'Employs a left join for unplaced orders' },
        { input: 'Sum aggregate', expected: 'SUM(orders.order_amount)', description: 'Calculates cumulative spend sum' },
        { input: 'Group statement', expected: 'GROUP BY customers.name', description: 'Groups by name of target' }
      ]
    },
    {
      id: 'sql-9',
      number: 9,
      title: 'Subquery with IN operator',
      difficulty: 'Hard',
      description: 'Write a SQL query to select all fields from `products` that have NEVER been ordered. (Hint: use a subquery check with `customer_id` or order records).',
      sampleInput: 'Tables: products (id, name), order_items (id, product_id)',
      sampleOutput: 'SELECT * FROM products WHERE id NOT IN (SELECT product_id FROM order_items);',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Subquery check', expected: 'NOT IN', description: 'Exclusion search pattern via subquery' },
        { input: 'Sub query contents', expected: 'SELECT product_id FROM order_items', description: 'Matches all ordered products' },
        { input: 'Target catalog', expected: 'FROM products', description: 'Products table destination' }
      ]
    },
    {
      id: 'sql-10',
      number: 10,
      title: 'Rank Salaries (Dense Rank)',
      difficulty: 'Hard',
      description: 'Write a SQL query to select `name`, `salary`, and rank each employee within their department using `DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as salary_rank`.',
      sampleInput: 'Table: employees (id, name, department_id, salary)',
      sampleOutput: 'SELECT name, salary, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as salary_rank FROM employees;',
      initialCode: '-- Write your SQL query here\n',
      testCases: [
        { input: 'Dense Rank function', expected: 'DENSE_RANK()', description: 'Maintains consecutive rank counts' },
        { input: 'Partitioning field', expected: 'PARTITION BY department_id', description: 'Separates ranking categories' },
        { input: 'Ordering field', expected: 'ORDER BY salary DESC', description: 'Sorts salaries inside group' }
      ]
    }
  ]
};
