import { TutorialTopic } from './cssTutorialsData';

export const SQL_TOPICS: TutorialTopic[] = [
  {
    id: 'sql-intro',
    title: 'SQL Introduction',
    description: 'SQL stands for Structured Query Language, the standard interface for managing relational databases.',
    explanation: [
      'SQL is used to communicate with a database.',
      'It is the standard language for relational database management systems (RDBMS).',
      'SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.'
    ],
    code: `-- SQL Introduction sample query
SELECT id, name, email
FROM users
WHERE status = 'Active';
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-syntax',
    title: 'SQL Syntax',
    description: 'Relational databases arrange data in tables, and SQL uses queries with standard keywords.',
    explanation: [
      'A database most often contains one or more tables. Each table is identified by a name.',
      'SQL keywords are NOT case-sensitive: select is the same as SELECT.',
      'Semicolon is the standard way to separate each SQL statement.'
    ],
    code: `-- Semicolons terminate individual SQL statements
SELECT * FROM products;
SELECT name FROM categories;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-select',
    title: 'SQL Select',
    description: 'The SELECT statement is used to select or query data from a database.',
    explanation: [
      'The data returned is stored in a result table, called the result-set.',
      'Syntax: SELECT column1, column2 FROM table_name;',
      'Use SELECT * to query all columns of a table.'
    ],
    code: `-- Querying specific columns from employees
SELECT first_name, last_name, salary 
FROM employees;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-select-distinct',
    title: 'SQL Select Distinct',
    description: 'Retrieve unique rows from a table and discard duplicate records.',
    explanation: [
      'The SELECT DISTINCT statement is used to return only distinct (different) values.',
      'Inside a table, a column often contains many duplicate values; sometimes you only want to list the unique values.'
    ],
    code: `-- Retrieve unique countries of all registered customers
SELECT DISTINCT country 
FROM customers;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-where',
    title: 'SQL Where',
    description: 'Filter rows in SQL queries using comparison conditions.',
    explanation: [
      'The WHERE clause is used to filter records.',
      'It is used to extract only those records that fulfill a specified condition.',
      'Text values require single quotes. Numbers should not be enclosed in quotes.'
    ],
    code: `-- Select members who live in Paris
SELECT * FROM customers 
WHERE city = 'Paris';
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-orderby',
    title: 'SQL Order By',
    description: 'Sort query results in ascending or descending order.',
    explanation: [
      'The ORDER BY keyword is used to sort the result-set in ascending or descending order.',
      'The ORDER BY keyword sorts the records in ascending order by default.',
      'To sort the records in descending order, use the DESC keyword.'
    ],
    code: `-- Sort products by price high-to-low, then name alphabetically
SELECT * FROM products 
ORDER BY price DESC, name ASC;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-and-or-not',
    title: 'SQL And, Or, Not',
    description: 'Combine multiple logical filters to build complex criteria.',
    explanation: [
      'The WHERE clause can be combined with AND, OR, and NOT operators.',
      'AND displays a record if all conditions separated by AND are TRUE.',
      'OR displays a record if any of the conditions separated by OR is TRUE.',
      'NOT displays a record if the condition(s) is NOT TRUE.'
    ],
    code: `-- Filter using AND/OR logical operators
SELECT * FROM customers
WHERE country = 'Germany' AND (city = 'Berlin' OR city = 'Munich');
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-insert',
    title: 'SQL Insert Into',
    description: 'Add new records or rows into a relational table.',
    explanation: [
      'The INSERT INTO statement is used to insert new records in a table.',
      'Specify column names and values, or simply provide values matching the column order.'
    ],
    code: `-- Insert a new customer record
INSERT INTO customers (name, contact_name, city, country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Stavanger', 'Norway');
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-nulls',
    title: 'SQL Null Values',
    description: 'Test for missing or empty field values using IS NULL and IS NOT NULL.',
    explanation: [
      'A field with a NULL value is a field with no value.',
      'It is not possible to test for NULL values with comparison operators (like = or <>).',
      'We must use the IS NULL and IS NOT NULL operators instead.'
    ],
    code: `-- Retrieve customers who do not have an address listed
SELECT name, contact_name 
FROM customers
WHERE address IS NULL;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-update',
    title: 'SQL Update',
    description: 'Modify existing records in a table safely using filter clauses.',
    explanation: [
      'The UPDATE statement is used to modify the existing records in a table.',
      'Be careful! The WHERE clause specifies which record(s) should be updated. If you omit the WHERE clause, ALL records in the table will be updated!'
    ],
    code: `-- Update active contact name for customer id 1
UPDATE customers
SET contact_name = 'Alfred Schmidt', city = 'Frankfurt'
WHERE customer_id = 1;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-delete',
    title: 'SQL Delete',
    description: 'Remove rows from a database table safely.',
    explanation: [
      'The DELETE statement is used to delete existing records in a table.',
      'Be careful! The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, ALL records in the table will be deleted!'
    ],
    code: `-- Delete inactive customer records
DELETE FROM customers
WHERE status = 'Inactive';
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-select-top',
    title: 'SQL Select Top',
    description: 'Limit the number of records returned in a query (LIMIT or TOP clauses).',
    explanation: [
      'The SELECT TOP or LIMIT clause is used to specify the number of records to return.',
      'This is useful on large tables with thousands of records, preventing resource strain.',
      'In PostgreSQL, MySQL, and SQLite, we use the LIMIT clause.'
    ],
    code: `-- Retrieve the 5 highest earning employees
SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-min-max',
    title: 'SQL Min and Max',
    description: 'Find the minimum or maximum values in a selected column.',
    explanation: [
      'The MIN() function returns the smallest value of the selected column.',
      'The MAX() function returns the largest value of the selected column.'
    ],
    code: `-- Retrieve cheapest and most expensive product rates
SELECT MIN(price) AS cheapest, MAX(price) AS highest 
FROM products;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-aggregates',
    title: 'SQL Count, Sum, Avg',
    description: 'Count rows, sum numeric fields, or calculate averages across matched records.',
    explanation: [
      'The COUNT() function returns the number of rows that match a specified criterion.',
      'The SUM() function returns the total sum of a numeric column.',
      'The AVG() function returns the average value of a numeric column.'
    ],
    code: `-- Calculate store aggregates
SELECT COUNT(product_id) AS total_items, SUM(stock) AS total_stock, AVG(price) AS average_price
FROM products;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-like',
    title: 'SQL Like',
    description: 'Search for text patterns using wildcard criteria.',
    explanation: [
      'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.',
      'Percent (%) wildcard: Represents zero, one, or multiple characters.',
      'Underscore (_) wildcard: Represents a single character.'
    ],
    code: `-- Find customers whose name starts with 'a'
SELECT * FROM customers
WHERE name LIKE 'a%';
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-wildcards',
    title: 'SQL Wildcards',
    description: 'Substitute character symbols in search pattern strings.',
    explanation: [
      'A wildcard character is used to substitute one or more characters in a string.',
      'Wildcards are used with the SQL LIKE operator.'
    ],
    code: `-- Find customers with 'or' in second/third character position
SELECT * FROM customers
WHERE city LIKE '_or%';
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-in',
    title: 'SQL In',
    description: 'Specify multiple potential match values in a WHERE filter list.',
    explanation: [
      'The IN operator allows you to specify multiple values in a WHERE clause.',
      'The IN operator is a shorthand for multiple OR conditions.'
    ],
    code: `-- Select customers located in specific European nations
SELECT * FROM customers
WHERE country IN ('Germany', 'France', 'UK');
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-between',
    title: 'SQL Between',
    description: 'Filter values falling within an inclusive numerical or date range.',
    explanation: [
      'The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.',
      'The BETWEEN operator is inclusive: begin and end values are included.'
    ],
    code: `-- Select products with prices between 10 and 20 dollars
SELECT * FROM products
WHERE price BETWEEN 10 AND 20;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-aliases',
    title: 'SQL Aliases',
    description: 'Assign temporary, readable names to tables or columns using the AS keyword.',
    explanation: [
      'SQL aliases are used to give a table, or a column in a table, a temporary name.',
      'Aliases are often used to make column names more readable.',
      'An alias only exists for the duration of that query.'
    ],
    code: `-- Format column naming on retrieval
SELECT customer_id AS id, name AS customer_name
FROM customers;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-joins',
    title: 'SQL Joins',
    description: 'Combine rows from two or more tables based on a related key between them.',
    explanation: [
      'A JOIN clause is used to combine rows from two or more tables, based on a related column between them.',
      'INNER JOIN: Returns records with matching values in both tables.',
      'LEFT JOIN: Returns all records from left table, plus matched records from right.',
      'RIGHT JOIN: Returns all records from right table, plus matched records from left.',
      'FULL JOIN: Returns all records when there is a match in either left or right table.'
    ],
    code: `-- Join orders with customers list
SELECT orders.order_id, customers.name, orders.order_date
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-union',
    title: 'SQL Union',
    description: 'Combine the result-sets of two or more SELECT statements into a single table.',
    explanation: [
      'The UNION operator is used to combine the result-set of two or more SELECT statements.',
      'Each SELECT statement within UNION must have the same number of columns, with similar data types in the same order.',
      'UNION selects only distinct values by default. Use UNION ALL to allow duplicates.'
    ],
    code: `-- Combine city lists from both tables into one list
SELECT city FROM customers
UNION
SELECT city FROM suppliers
ORDER BY city;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-groupby',
    title: 'SQL Group By',
    description: 'Group rows sharing identical values to run aggregate functions.',
    explanation: [
      'The GROUP BY statement groups rows that have the same values into summary rows (like "find the number of customers in each country").',
      'The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.'
    ],
    code: `-- Count customers in each country
SELECT COUNT(customer_id), country
FROM customers
GROUP BY country;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-having',
    title: 'SQL Having',
    description: 'Filter grouped aggregates because the WHERE keyword cannot evaluate aggregated conditions.',
    explanation: [
      'The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.',
      'Syntax: SELECT columns FROM table GROUP BY columns HAVING aggregate_condition;'
    ],
    code: `-- Retrieve countries with more than 5 customers
SELECT COUNT(customer_id), country
FROM customers
GROUP BY country
HAVING COUNT(customer_id) > 5;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-exists',
    title: 'SQL Exists',
    description: 'Test for the existence of any record in a subquery.',
    explanation: [
      'The EXISTS operator is used to test for the existence of any record in a subquery.',
      'The EXISTS operator returns TRUE if the subquery returns one or more records.'
    ],
    code: `-- Find suppliers with products priced under 20 dollars
SELECT supplier_name
FROM suppliers
WHERE EXISTS (
  SELECT name FROM products 
  WHERE products.supplier_id = suppliers.supplier_id AND price < 20
);
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-any-all',
    title: 'SQL Any, All',
    description: 'Perform logical comparisons against some or all values returned by a subquery.',
    explanation: [
      'The ANY and ALL operators allow you to perform a comparison between a single column value and a range of other values.',
      'ANY returns TRUE if any of the subquery values meet the condition.',
      'ALL returns TRUE if all of the subquery values meet the condition.'
    ],
    code: `-- Find products matching ANY record in the orders subquery
SELECT name
FROM products
WHERE product_id = ANY (
  SELECT product_id FROM order_details WHERE quantity > 10
);
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-select-into',
    title: 'SQL Select Into',
    description: 'Copy data from one table into a newly created table structure.',
    explanation: [
      'The SELECT INTO statement copies data from one table into a new table.',
      'Useful for creating backups of tables or preparing sandbox copies.',
      'Note: In standard Postgres, this can also be written as CREATE TABLE new_table AS SELECT... which is more common.'
    ],
    code: `-- Create a backup table of all customers from Germany
CREATE TABLE customers_backup AS
SELECT * FROM customers
WHERE country = 'Germany';
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-insert-select',
    title: 'SQL Insert Into Select',
    description: 'Copy records from one table and insert them into another existing table.',
    explanation: [
      'The INSERT INTO SELECT statement copies data from one table and inserts it into another existing table.',
      'Data types in source and target tables must match.'
    ],
    code: `-- Copy suppliers into customers table
INSERT INTO customers (name, city, country)
SELECT supplier_name, city, country FROM suppliers;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-case',
    title: 'SQL Case',
    description: 'Apply conditional logic inside SQL columns to return custom field outputs.',
    explanation: [
      'The CASE statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement).',
      'Once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.'
    ],
    code: `-- Display orders with custom status labels
SELECT order_id, quantity,
CASE
    WHEN quantity > 30 THEN 'The quantity is greater than 30'
    WHEN quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM order_details;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-null-functions',
    title: 'SQL Null Functions',
    description: 'Substitute default values for NULL values in query outputs (COALESCE/IFNULL).',
    explanation: [
      'When executing calculations, NULL values can break formulas (e.g. price * units yields NULL if units is NULL).',
      'COALESCE() lets you specify an alternative value if a column is NULL.'
    ],
    code: `-- Coalesce units to 0 if null, to calculate price
SELECT name, price * COALESCE(units, 0) AS total_value
FROM products;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-procedures',
    title: 'SQL Stored Procedures',
    description: 'Save complex, multi-statement SQL statements for easy execution at any time.',
    explanation: [
      'A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.',
      'In PostgreSQL, we create functions or procedures using the CREATE PROCEDURE or CREATE FUNCTION syntax.'
    ],
    code: `-- Stored procedure creation example
CREATE PROCEDURE SelectAllCustomers()
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT * FROM customers;
END;
$$;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-comments',
    title: 'SQL Comments',
    description: 'Document your queries using single-line or multi-line comment delimiters.',
    explanation: [
      'SQL comments are used to explain sections of SQL statements, or to prevent execution of SQL statements.',
      'Single-line comments start with --.',
      'Multi-line comments start with /* and end with */.'
    ],
    code: `-- This is a single line comment
SELECT * FROM customers;

/* 
   This is a multi-line comment.
   The columns below are primary fields.
*/
SELECT id, name FROM employees;
`,
    languageId: 'postgresql'
  },
  {
    id: 'sql-operators',
    title: 'SQL Operators',
    description: 'Apply comparison, arithmetic, and logical operators to build sophisticated filters.',
    explanation: [
      'Arithmetic operators: +, -, *, /, %.',
      'Bitwise operators: &, |, ^.',
      'Comparison operators: =, !=, <>, >, <, >=, <=.',
      'Compound operators: +=, -=, *=, /=.'
    ],
    code: `-- Select with range and inequality operators
SELECT * FROM products
WHERE price >= 50 AND price != 100;
`,
    languageId: 'postgresql'
  }
];
