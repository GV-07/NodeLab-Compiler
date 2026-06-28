import { TutorialTopic } from './cssTutorialsData';

export const SQLITE_TOPICS: TutorialTopic[] = [
  {
    id: 'sqlite-intro',
    title: 'SQLite Intro',
    description: 'Learn SQLite, a lightweight, self-contained, serverless, zero-configuration SQL database engine.',
    explanation: [
      'SQLite is an embedded database, meaning it writes directly to standard disk files without a parent server process.',
      'It is the most widely deployed database engine globally, powering mobile devices, desktop apps, and browsers.',
      'It supports standard transactional SQL schemas, making it excellent for local storage and prototyping.'
    ],
    code: `-- SQLite runs standard SQL queries locally on a single file database.
SELECT sqlite_version();`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-connection',
    title: 'SQLite Connection Object',
    description: 'Opening a connection to a local SQLite database file or in-memory storage in Python.',
    explanation: [
      'In Python, the built-in sqlite3 module manages connections to SQLite files.',
      'Call sqlite3.connect("my_database.db") to establish or create a new database file.',
      'Pass ":memory:" to open a temporary, fast database entirely in system RAM.'
    ],
    code: `import sqlite3

# Connects to database file (creates it if it does not exist)
conn = sqlite3.connect("app_data.db")
print("Connected successfully to SQLite database file!")
conn.close()`,
    languageId: 'python'
  },
  {
    id: 'sqlite-cursor',
    title: 'SQLite Cursor Object',
    description: 'Using the Cursor object to execute SQL statements and retrieve rows.',
    explanation: [
      'A Cursor object manages SQL execution context, allowing you to run queries and iterate through returned rows.',
      'Call conn.cursor() to create a cursor instance, and cursor.execute() to run a query statement.',
      'Fetch results using cursor.fetchone() (single row) or cursor.fetchall() (all matching rows).'
    ],
    code: `import sqlite3

conn = sqlite3.connect(":memory:")
cursor = conn.cursor()

# Execute a simple statement
cursor.execute("SELECT 1 + 1")
result = cursor.fetchone()
print("Result:", result[0]) # Outputs: 2`,
    languageId: 'python'
  },
  {
    id: 'sqlite-create-table',
    title: 'SQLite Create Table',
    description: 'Declaring tables with columns, key constraints, and datatypes.',
    explanation: [
      'Use the CREATE TABLE statement to define columns, datatypes, and constraints.',
      'SQLite uses dynamic type affinity: INTEGER, REAL, TEXT, BLOB, and NULL.',
      'AUTOINCREMENT automatically increments key integer fields on row creation.'
    ],
    code: `CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  age INTEGER
);`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-insert-data',
    title: 'SQLite Insert Data',
    description: 'Inserting rows into tables using INSERT INTO, and committing changes.',
    explanation: [
      'Use INSERT INTO table_name (columns) VALUES (values) to write records.',
      'In Python, always use parameterized placeholders (?) instead of raw strings to prevent SQL injection exploits.',
      'You must call conn.commit() to persist modifications to the database file.'
    ],
    code: `import sqlite3

conn = sqlite3.connect("app_data.db")
cursor = conn.cursor()

# Parameterized query to safely write user row
cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Alice", 30))
conn.commit()
conn.close()`,
    languageId: 'python'
  },
  {
    id: 'sqlite-select-data',
    title: 'SQLite Select Data',
    description: 'Retrieving columns and rows from table records using the SELECT statement.',
    explanation: [
      'The SELECT statement retrieves columns from a table: SELECT column1, column2 FROM table_name.',
      'Specify SELECT * to retrieve all columns for matching records.',
      'Fetching values sequentially via cursors keeps RAM consumption low.'
    ],
    code: `SELECT id, name FROM users;`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-where',
    title: 'SQLite Where Clause',
    description: 'Filtering result sets based on custom conditions and logical operators.',
    explanation: [
      'Use the WHERE clause to limit rows returned based on conditions (e.g. column = value).',
      'You can combine conditions using logical operators like AND, OR, and NOT.',
      'Supports operators like LIKE (wildcard searches), IN (list validation), and BETWEEN (range checks).'
    ],
    code: `SELECT * FROM users 
WHERE age >= 21 AND name LIKE 'A%';`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-order-by',
    title: 'SQLite Order By Clause',
    description: 'Sorting query results in ascending or descending order.',
    explanation: [
      'The ORDER BY clause sorts records returned in alphabetical or numerical sequence.',
      'Specify ASC for ascending sorting (default), and DESC for descending sorting.',
      'You can sort across multiple columns sequentially, separating keys with commas.'
    ],
    code: `SELECT * FROM users 
ORDER BY age DESC, name ASC;`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-limit',
    title: 'SQLite Limit Clause',
    description: 'Limiting the total number of rows returned, and offsetting result pointers.',
    explanation: [
      'The LIMIT clause specifies the maximum number of rows returned by a query.',
      'The OFFSET clause specifies how many rows to skip before returning matching results.',
      'This is highly useful for building page-by-page table pagination in user interfaces.'
    ],
    code: `SELECT * FROM users 
LIMIT 10 OFFSET 20; -- Skip first 20 rows, return next 10`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-join',
    title: 'SQLite Join Tables',
    description: 'Combining records from multiple tables based on foreign key relationships.',
    explanation: [
      'Use the JOIN (or INNER JOIN) statement to fetch matching records across related tables.',
      'SQLite supports INNER JOIN, LEFT OUTER JOIN, and CROSS JOIN.',
      'Specify the join criteria using the ON clause keyword.'
    ],
    code: `SELECT orders.id, users.name, orders.amount 
FROM orders
INNER JOIN users ON orders.user_id = users.id;`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-updating-data',
    title: 'SQLite Updating Data',
    description: 'Modifying existing rows using UPDATE, WHERE, and SET.',
    explanation: [
      'The UPDATE statement modifies values in existing rows: UPDATE table_name SET column = value.',
      'Always include a WHERE clause to target specific records.',
      'If you omit the WHERE clause, SQLite will overwrite that column value on every single row in the table.'
    ],
    code: `UPDATE users 
SET age = 31 
WHERE name = 'Alice';`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-deleting-data',
    title: 'SQLite Deleting Data',
    description: 'Removing rows from tables using the DELETE FROM statement.',
    explanation: [
      'Use DELETE FROM table_name WHERE condition to erase rows.',
      'Always target records using a specific WHERE condition (like unique ID keys).',
      'Like UPDATE, omitting the WHERE clause will completely clear out all records from the table.'
    ],
    code: `DELETE FROM users 
WHERE id = 5;`,
    languageId: 'postgresql'
  },
  {
    id: 'sqlite-drop-table',
    title: 'SQLite Drop Table',
    description: 'Erasng tables and all their compiled record data permanently using DROP TABLE.',
    explanation: [
      'The DROP TABLE statement permanently deletes a table and all its columns/records from the file.',
      'This operation is non-reversible and completely erases associated data instantly.',
      'Use DROP TABLE IF EXISTS table_name to avoid triggering database errors if the table does not exist.'
    ],
    code: `DROP TABLE IF EXISTS users;`,
    languageId: 'postgresql'
  }
];
