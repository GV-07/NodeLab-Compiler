import { TutorialTopic } from './cssTutorialsData';

export const R_TOPICS: TutorialTopic[] = [
  {
    id: 'r-home',
    title: 'R HOME',
    description: 'Welcome to R! R is a programming language and environment designed for statistical computing and graphics.',
    explanation: [
      'R is widely used among statisticians, data miners, and researchers for analyzing data.',
      'It is highly extensible and has a massive repository of user-contributed packages (CRAN).'
    ],
    code: `# Print a greeting in R
print("Hello from R Language!")`,
    languageId: 'r_lang'
  },
  {
    id: 'r-intro',
    title: 'R Intro',
    description: 'Learn about the advantages of R in statistics and data science pipelines.',
    explanation: [
      'Provides a wide variety of statistical (linear and nonlinear modeling, classical statistical tests, time-series analysis) and graphical techniques.',
      'Excellent for handling, clearing, and plotting large arrays of numbers.'
    ],
    code: `# Create a numerical series and calculate average
temperatures <- c(32, 35, 28, 30, 31)
mean(temperatures)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-get-started',
    title: 'R Get Started',
    description: 'Install R and open the R interactive console or standard RStudio IDE.',
    explanation: [
      'Download R binaries from CRAN (Comprehensive R Archive Network).',
      'RStudio is the most popular integrated development environment (IDE) for R.'
    ],
    code: `# To run in standard terminal, invoke: R
# Run this code to print current version:
R.version.string`,
    languageId: 'r_lang'
  },
  {
    id: 'r-syntax',
    title: 'R Syntax',
    description: 'Learn how statements, expressions, and function calls are written in R.',
    explanation: [
      'In R, you can execute commands directly on the console or script them into a .R file.',
      'Comments start with the hashtag symbol (#).',
      'The standard assignment operator in R is <- instead of =.'
    ],
    code: `# Standard syntax assignment:
score <- 95
print(score)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-variables',
    title: 'R Variables',
    description: 'Declare and assign variable objects using <- and = operators.',
    explanation: [
      'Variables hold values. We can use either <- or = to assign values, though <- is preferred by the R community.',
      'R is dynamically typed; variables do not need explicit type declarations.'
    ],
    code: `# Variables assignment
name <- "Alice"
age <- 25
print(name)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-data-types',
    title: 'R Data Types',
    description: 'Explore R basic data classes: numeric, integer, complex, character, and logical.',
    explanation: [
      'numeric is the default for floating point decimals.',
      'integer values must be declared with a capital L suffix (e.g. 5L).',
      'logical represents boolean vectors (TRUE or FALSE).'
    ],
    code: `# Data classes checks:
num <- 10.5
int_val <- 5L
bool_val <- TRUE

print(class(num))     # numeric
print(class(int_val)) # integer`,
    languageId: 'r_lang'
  },
  {
    id: 'r-operators',
    title: 'R Operators',
    description: 'Compute mathematics and evaluations using operators.',
    explanation: [
      'Arithmetic: +, -, *, /, %%, %/% (integer division), ^ (power).',
      'Logical: &, |, !, &&, ||.'
    ],
    code: `# Math operations in R
10 %% 3  # modulo returns 1
10 %/% 3 # integer division returns 3`,
    languageId: 'r_lang'
  },
  {
    id: 'r-strings',
    title: 'R Strings',
    description: 'Manipulate strings, format outputs, and find lengths using nchar().',
    explanation: [
      'Strings are enclosed in single or double quotes.',
      'Find string length using nchar() instead of length() (length() checks vector count).'
    ],
    code: `message <- "Welcome to R!"
print(nchar(message)) # outputs 13`,
    languageId: 'r_lang'
  },
  {
    id: 'r-numbers',
    title: 'R Numbers',
    description: 'Understand R decimal numbers, scientific formats, and integer limits.',
    explanation: [
      'Supports numeric classes as well as infinite (Inf) and undefined (NaN) statuses.'
    ],
    code: `val1 <- 1.5e3 # 1500
is.numeric(val1)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-booleans',
    title: 'R Booleans',
    description: 'Compare structures yielding logical vectors: TRUE or FALSE.',
    explanation: [
      'Booleans are written in full capitals (TRUE or FALSE), or abbreviated as T or F.'
    ],
    code: `x <- 10
y <- 5
print(x > y) # TRUE`,
    languageId: 'r_lang'
  },
  {
    id: 'r-ifelse',
    title: 'R If...Else',
    description: 'Build conditional decision flows using if, else, and ifelse() function.',
    explanation: [
      'R has standard if-else controls, plus a vectorized ifelse(condition, true_val, false_val) method.'
    ],
    code: `grade <- 75
result <- ifelse(grade >= 50, "Pass", "Fail")
print(result)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-while-loop',
    title: 'R While Loop',
    description: 'Execute statements repeatedly as long as conditions evaluate to TRUE.',
    explanation: [
      'The while loop executes statements while the condition resolves to TRUE.'
    ],
    code: `count <- 1
while (count <= 3) {
  print(count)
  count <- count + 1
}`,
    languageId: 'r_lang'
  },
  {
    id: 'r-for-loop',
    title: 'R For Loop',
    description: 'Loop over vectors, lists, or matrix arrays using the for keyword.',
    explanation: [
      'A for loop is used to iterate over a sequence of items (like a vector).'
    ],
    code: `fruits <- c("apple", "banana", "cherry")
for (f in fruits) {
  print(f)
}`,
    languageId: 'r_lang'
  },
  {
    id: 'r-break-continue',
    title: 'R Break/Continue',
    description: 'Alter loops using break and next keywords.',
    explanation: [
      'break exits the loop immediately.',
      'next is the R equivalent of continue, skipping straight to the next loop pass.'
    ],
    code: `for (i in 1:5) {
  if (i == 3) {
    next # skips 3
  }
  print(i)
}`,
    languageId: 'r_lang'
  },
  {
    id: 'r-functions',
    title: 'R Functions',
    description: 'Declare reusable functions with positional or default arguments.',
    explanation: [
      'Create functions using the function keyword.'
    ],
    code: `multiply_vals <- function(x = 5, y = 10) {
  return(x * y)
}
print(multiply_vals(2, 4))`,
    languageId: 'r_lang'
  },
  {
    id: 'r-global-variables',
    title: 'R Global Variables',
    description: 'Assign variables to the global workspace using the global assignment operator (<<-).',
    explanation: [
      'Use <<- to assign a value to a variable in the parent frame or global environment.'
    ],
    code: `my_func <- function() {
  global_val <<- "Shared Value"
}
my_func()
print(global_val)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-vectors',
    title: 'R Vectors',
    description: 'Create, combine, and query vectors using c().',
    explanation: [
      'A vector is the fundamental R data structure, holding elements of the same type.',
      'Created using the combine function c().'
    ],
    code: `scores <- c(90, 80, 85, 95)
print(scores[1]) # R vectors are 1-indexed!`,
    languageId: 'r_lang'
  },
  {
    id: 'r-lists',
    title: 'R Lists',
    description: 'Handle lists that store elements of varying data classes.',
    explanation: [
      'A list is a vector that can contain elements of different types (e.g., characters, numbers, logicals, and other lists).'
    ],
    code: `my_list <- list("Alice", 25, TRUE)
print(my_list[[1]])`,
    languageId: 'r_lang'
  },
  {
    id: 'r-matrices',
    title: 'R Matrices',
    description: 'Build 2-dimensional grid arrays using matrix().',
    explanation: [
      'A matrix is a 2-dimensional circular data structure where all columns have the same type.'
    ],
    code: `my_matrix <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 2, ncol = 3)
print(my_matrix)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-data-frames',
    title: 'R Data Frames',
    description: 'Maintain tabular relational datasets using data.frame().',
    explanation: [
      'Data Frames are the standard tabular representation in R, where columns can hold differing types.',
      'It is essentially a list of equal-length vectors.'
    ],
    code: `df <- data.frame(
  Name = c("Alice", "Bob"),
  Age = c(25, 30)
)
print(df$Name)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-factors',
    title: 'R Factors',
    description: 'Model categorical variables using factors.',
    explanation: [
      'Factors represent categories or categorical vectors, storing unique "levels".'
    ],
    code: `genders <- factor(c("Male", "Female", "Female", "Male"))
levels(genders)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-plotting',
    title: 'R Plotting',
    description: 'Generate instant plots using R\'s default plot() utility.',
    explanation: [
      'plot() is the general-purpose plotting utility in R.'
    ],
    code: `x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 6, 8, 10)
# plot(x, y) # Plots coordinate points`,
    languageId: 'r_lang'
  },
  {
    id: 'r-line',
    title: 'R Line',
    description: 'Draw line graphs using type="l" arguments.',
    explanation: [
      'Set type = "l" in plot() to draw points connected by lines.'
    ],
    code: `plot(c(1, 3, 9), type = "l", col = "blue")`,
    languageId: 'r_lang'
  },
  {
    id: 'r-scatterplot',
    title: 'R Scatterplot',
    description: 'Plot point spreads representing relationships between variables.',
    explanation: [
      'Use scatter plots to visually verify correlations.'
    ],
    code: `car_weight <- c(2.5, 3.0, 3.8)
miles_gallon <- c(30, 24, 18)
# plot(car_weight, miles_gallon, main="Scatter plot")`,
    languageId: 'r_lang'
  },
  {
    id: 'r-pie-charts',
    title: 'R Pie Charts',
    description: 'Draw structural distributions using pie().',
    explanation: [
      'Create pie charts representing parts of a whole.'
    ],
    code: `shares <- c(40, 30, 20, 10)
labels <- c("A", "B", "C", "D")
# pie(shares, labels = labels)`,
    languageId: 'r_lang'
  },
  {
    id: 'r-bar-charts',
    title: 'R Bar Charts',
    description: 'Draw vertical and horizontal histograms using barplot().',
    explanation: [
      'barplot() plots bar lengths from frequency vectors.'
    ],
    code: `counts <- c(10, 20, 15)
# barplot(counts, names.arg = c("X", "Y", "Z"))`,
    languageId: 'r_lang'
  },
  {
    id: 'r-statistics',
    title: 'R Statistics',
    description: 'Summarize distributions using mean(), median(), min(), max(), and summary().',
    explanation: [
      'summary() calculates mean, quartiles, median, and extremes of a dataset immediately.'
    ],
    code: `numbers <- c(12, 15, 20, 25, 40)
summary(numbers)`,
    languageId: 'r_lang'
  }
];
