import { TutorialTopic } from './cssTutorialsData';

export const NUMPY_TOPICS: TutorialTopic[] = [
  {
    id: 'num-home',
    title: 'NumPy HOME',
    description: 'Welcome to NumPy! NumPy is a Python library used for working with multi-dimensional arrays.',
    explanation: [
      'NumPy stands for "Numerical Python".',
      'It is the fundamental package for scientific computing in Python, providing high-performance arrays and mathematical utilities.',
      'It is written partly in Python, but most of the parts that require fast computation are written in C or C++.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)
print(type(arr))`,
    languageId: 'python'
  },
  {
    id: 'num-intro',
    title: 'NumPy Intro',
    description: 'Learn why NumPy is faster and more memory-efficient than native Python lists.',
    explanation: [
      'NumPy arrays are stored at one continuous place in memory unlike lists, so processes can access and manipulate them very efficiently.',
      'This behavior is called "locality of reference" in computer science.'
    ],
    code: `import numpy as np

# Create a 2D array:
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr_2d)`,
    languageId: 'python'
  },
  {
    id: 'num-get-started',
    title: 'NumPy Get Started',
    description: 'Install NumPy using pip and set up an alias import.',
    explanation: [
      'Install NumPy using standard package managers: pip install numpy.',
      'Import NumPy under the standard "np" alias.'
    ],
    code: `import numpy as np

# Print the installed NumPy version
print(np.__version__)`,
    languageId: 'python'
  },
  {
    id: 'num-creating-arrays',
    title: 'NumPy Creating Arrays',
    description: 'Create arrays of 0D, 1D, 2D, and 3D dimensions using np.array().',
    explanation: [
      '0D arrays represent single scalar values.',
      '1D arrays represent vectors.',
      '2D arrays represent matrices (ideal for image buffers).',
      'Use the ndim property to query the number of dimensions of an array.'
    ],
    code: `import numpy as np

a = np.array(42)
b = np.array([1, 2, 3])
c = np.array([[1, 2], [3, 4]])

print(a.ndim, b.ndim, c.ndim) # Outputs: 0 1 2`,
    languageId: 'python'
  },
  {
    id: 'num-indexing',
    title: 'NumPy Array Indexing',
    description: 'Access elements in single or multi-dimensional arrays using index numbers.',
    explanation: [
      'NumPy array indexes start at 0, similar to standard lists.',
      'For 2D matrices, access elements using comma-separated row and column indices: array[row, col].'
    ],
    code: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
# Print 3rd element on 1st row:
print('Element:', arr[0, 2]) # Outputs 3`,
    languageId: 'python'
  },
  {
    id: 'num-slicing',
    title: 'NumPy Array Slicing',
    description: 'Extract array slices using standard start:end:step slice arguments.',
    explanation: [
      'Slice elements from index start to end: arr[start:end].',
      'Includes the start index but excludes the end index.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7])
# Slice elements from index 1 to 5:
print(arr[1:5]) # [2, 3, 4, 5]`,
    languageId: 'python'
  },
  {
    id: 'num-data-types',
    title: 'NumPy Data Types',
    description: 'Configure and cast elements using standard data type letters (i, f, S, U).',
    explanation: [
      'NumPy has specific data types (e.g. integer, float, string, boolean).',
      'Represented by single letters (e.g. i for integer, f for float).',
      'Use astype() to create a copy of the array casted to a new data type.'
    ],
    code: `import numpy as np

arr = np.array([1.1, 2.1, 3.1])
# Cast floats to integers:
newarr = arr.astype('i')
print(newarr) # [1, 2, 3]`,
    languageId: 'python'
  },
  {
    id: 'num-copy-view',
    title: 'NumPy Copy vs View',
    description: 'Understand the difference between making deep copies and reference views.',
    explanation: [
      'The copy owns the data and any changes made to the copy will not affect original array.',
      'The view does NOT own the data and any changes made to the view will affect the original array.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 3])
x = arr.copy()
y = arr.view()

arr[0] = 42
print(x[0]) # Outputs 1 (unaffected)
print(y[0]) # Outputs 42 (affected)`,
    languageId: 'python'
  },
  {
    id: 'num-shape',
    title: 'NumPy Array Shape',
    description: 'Query array dimension shapes using the .shape property.',
    explanation: [
      'The shape of an array is the number of elements in each dimension.',
      'Returns a tuple representing dimensions sizes.'
    ],
    code: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.shape) # (2, 3) - 2 rows, 3 columns`,
    languageId: 'python'
  },
  {
    id: 'num-reshape',
    title: 'NumPy Array Reshape',
    description: 'Re-organize dimensions without copying raw elements using .reshape().',
    explanation: [
      'Reshaping means changing the shape of an array.',
      'We can reshape a 1D array of 12 elements into a 2D array of 4 rows and 3 columns.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
newarr = arr.reshape(4, 3)
print(newarr)`,
    languageId: 'python'
  },
  {
    id: 'num-iterating',
    title: 'NumPy Array Iterating',
    description: 'Iterate arrays efficiently using standard nditer() utilities.',
    explanation: [
      'Iterating means going through elements one by one.',
      'Use np.nditer() to iterate across multi-dimensional arrays with maximum speed and simple syntax.'
    ],
    code: `import numpy as np

arr = np.array([[[1, 2], [3, 4]]])
for x in np.nditer(arr):
  print(x)`,
    languageId: 'python'
  },
  {
    id: 'num-join',
    title: 'NumPy Array Join',
    description: 'Merge separate arrays along columns or rows using concatenate() and stack().',
    explanation: [
      'Joining means putting contents of two or more arrays in a single array.',
      'Use np.concatenate() or np.stack() to combine arrays along a specified axis.'
    ],
    code: `import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
arr = np.concatenate((arr1, arr2))
print(arr) # [1, 2, 3, 4, 5, 6]`,
    languageId: 'python'
  },
  {
    id: 'num-split',
    title: 'NumPy Array Split',
    description: 'Divide single arrays into multiple sub-arrays using array_split().',
    explanation: [
      'Splitting is the reverse operation of Joining.',
      'Splitting breaks one array into multiple smaller sub-arrays.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])
newarr = np.array_split(arr, 3)
print(newarr)`,
    languageId: 'python'
  },
  {
    id: 'num-search',
    title: 'NumPy Array Search',
    description: 'Locate indexes matching criteria using where() and searchsorted().',
    explanation: [
      'Use np.where() to find the indices where a certain value or condition is matched.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 4, 4])
x = np.where(arr == 4)
print(x) # Indices of elements equal to 4`,
    languageId: 'python'
  },
  {
    id: 'num-sort',
    title: 'NumPy Array Sort',
    description: 'Sort array elements alphabetically or numerically using np.sort().',
    explanation: [
      'np.sort() returns a sorted copy of the array, leaving the original array unchanged.'
    ],
    code: `import numpy as np

arr = np.array(['banana', 'cherry', 'apple'])
print(np.sort(arr)) # ['apple', 'banana', 'cherry']`,
    languageId: 'python'
  },
  {
    id: 'num-filter',
    title: 'NumPy Array Filter',
    description: 'Create sub-arrays using boolean indexing filter techniques.',
    explanation: [
      'Filtering means selecting certain elements from an existing array and creating a new array out of them.',
      'In NumPy, you filter an array using a boolean index list.'
    ],
    code: `import numpy as np

arr = np.array([41, 42, 43, 44])
filter_arr = arr > 42
newarr = arr[filter_arr]

print(newarr) # [43, 44]`,
    languageId: 'python'
  },
  {
    id: 'num-random',
    title: 'NumPy Random',
    description: 'Generate random numbers, matrices, and permutations using random module.',
    explanation: [
      'NumPy offers the random module to generate random floats, integers, and choices.',
      'Includes functions to shuffle and permute arrays.'
    ],
    code: `import numpy as np
from numpy import random

# Generate a random 1D array of 5 integers from 0 to 100:
x = random.randint(100, size=(5))
print(x)`,
    languageId: 'python'
  },
  {
    id: 'num-ufuncs',
    title: 'NumPy ufuncs',
    description: 'Learn about Universal Functions (ufuncs) implementing fast vector operations.',
    explanation: [
      'ufuncs stands for "Universal Functions" and they are NumPy functions that operate on the ndarray object in a element-by-element fashion.',
      'They implement vectorization, which is much faster than traditional looping.'
    ],
    code: `import numpy as np

x = [1, 2, 3, 4]
y = [4, 5, 6, 7]
# Add element by element:
z = np.add(x, y)
print(z) # [5, 7, 9, 11]`,
    languageId: 'python'
  },
  {
    id: 'num-simple-arithmetic',
    title: 'NumPy Simple Arithmetic',
    description: 'Perform arithmetic computations on arrays: add, subtract, multiply, and power.',
    explanation: [
      'You can use arithmetic operators directly on arrays, or use the equivalent ufunc functions (add, subtract, multiply, power).'
    ],
    code: `import numpy as np

arr1 = np.array([10, 20, 30])
arr2 = np.array([3, 5, 7])

print(np.subtract(arr1, arr2)) # element subtraction`,
    languageId: 'python'
  },
  {
    id: 'num-rounding-decimals',
    title: 'NumPy Rounding Decimals',
    description: 'Format decimals using truncation, rounding, floor, and ceil.',
    explanation: [
      'Use fix() and trunc() to discard decimal parts.',
      'Use round_() to round to a specified decimal precision.',
      'Use floor() and ceil() for standard floor and ceiling bounds.'
    ],
    code: `import numpy as np

arr = np.trunc([-3.1666, 3.6667])
print(arr) # [-3.  3.]`,
    languageId: 'python'
  },
  {
    id: 'num-logs',
    title: 'NumPy Logs',
    description: 'Calculate natural logarithm, base-2, and base-10 logarithms.',
    explanation: [
      'NumPy provides functions to perform log at the base 2, 10, and e.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 4])
print(np.log2(arr)) # log base 2`,
    languageId: 'python'
  },
  {
    id: 'num-summations',
    title: 'NumPy Summations',
    description: 'Understand the difference between standard array addition and summation.',
    explanation: [
      'Addition is done between two arguments, whereas summation is done over n elements.',
      'Specify axis = 1 to sum elements along rows.'
    ],
    code: `import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.array([1, 2, 3])

# Sums elements of both arrays:
print(np.sum([arr1, arr2])) # Outputs 12`,
    languageId: 'python'
  },
  {
    id: 'num-products',
    title: 'NumPy Products',
    description: 'Calculate array element-wise products and aggregate multiplication products.',
    explanation: [
      'Use np.prod() to multiply all elements in an array.'
    ],
    code: `import numpy as np

arr = np.array([1, 2, 3, 4])
print(np.prod(arr)) # 1 * 2 * 3 * 4 = 24`,
    languageId: 'python'
  },
  {
    id: 'num-differences',
    title: 'NumPy Differences',
    description: 'Compute successive differences using discrete difference np.diff().',
    explanation: [
      'A discrete difference means subtracting two successive elements.',
      'E.g. for [1, 2, 5, 4], the first difference is [1, 3, -1].'
    ],
    code: `import numpy as np

arr = np.array([10, 15, 25, 5])
print(np.diff(arr)) # [5, 10, -20]`,
    languageId: 'python'
  },
  {
    id: 'num-lcm',
    title: 'NumPy LCM',
    description: 'Calculate the Lowest Common Multiple (LCM) for numbers and arrays.',
    explanation: [
      'The Lowest Common Multiple is the smallest positive integer that is divisible by both numbers.'
    ],
    code: `import numpy as np

num1 = 4
num2 = 6
print(np.lcm(num1, num2)) # Outputs 12`,
    languageId: 'python'
  },
  {
    id: 'num-gcd',
    title: 'NumPy GCD',
    description: 'Find the Greatest Common Divisor (GCD) / Highest Common Factor.',
    explanation: [
      'The Greatest Common Divisor is the largest positive integer that divides both numbers.'
    ],
    code: `import numpy as np

num1 = 6
num2 = 9
print(np.gcd(num1, num2)) # Outputs 3`,
    languageId: 'python'
  },
  {
    id: 'num-trigonometric',
    title: 'NumPy Trigonometric',
    description: 'Perform sine, cosine, and tangent operations on radian arrays.',
    explanation: [
      'NumPy provides ufuncs sin(), cos(), and tan() that take values in radians.',
      'Convert degrees to radians using deg2rad().'
    ],
    code: `import numpy as np

# Convert 90 degrees to radians:
print(np.deg2rad(90))`,
    languageId: 'python'
  },
  {
    id: 'num-hyperbolic',
    title: 'NumPy Hyperbolic',
    description: 'Compute hyperbolic functions like sinh, cosh, and tanh.',
    explanation: [
      'NumPy provides sinh(), cosh(), and tanh() to find hyperbolic values on arrays.'
    ],
    code: `import numpy as np

print(np.sinh(np.pi/2))`,
    languageId: 'python'
  },
  {
    id: 'num-set-operations',
    title: 'NumPy Set Operations',
    description: 'Obtain unique element sets, union, intersection, and set difference.',
    explanation: [
      'Find unique elements using np.unique().',
      'Compute unions using np.union1d().',
      'Compute intersections using np.intersect1d().'
    ],
    code: `import numpy as np

arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([3, 4, 5, 6])

print(np.intersect1d(arr1, arr2)) # [3, 4]`,
    languageId: 'python'
  }
];
