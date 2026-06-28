import { TutorialTopic } from './cssTutorialsData';

export const MYSQL_TOPICS: TutorialTopic[] = [
  {
    id: 'mysql-intro',
    title: 'MySQL Introduction',
    description: 'Welcome to the MySQL Tutorial! MySQL is the most popular open-source relational database management system (RDBMS).',
    explanation: [
      'MySQL is a database management system that structures data into relational tables, rows, and columns.',
      'It uses SQL (Structured Query Language) to execute queries, fetch records, insert entries, and handle database schemas.',
      'MySQL is ideal for both small and large applications and is highly famous in full-stack setups (e.g., LAMP, MERN with SQL, etc.).'
    ],
    code: `-- MySQL Introduction Query
-- Querying version and active server status
SELECT VERSION() AS mysql_version, NOW() AS active_server_time;
`,
    languageId: 'mysql'
  },
  {
    id: 'mysql-create-db',
    title: 'MySQL Create Database',
    description: 'Learn how to create databases and list active schemas on your MySQL server.',
    explanation: [
      'The CREATE DATABASE statement is used to set up a new empty database.',
      'Syntax: CREATE DATABASE database_name;',
      'Ensure you have administrator privileges before running creation statements.'
    ],
    code: `-- 1. Create a new database schema
CREATE DATABASE nodelab_workspace_db;

-- 2. Switch to use the newly created database
USE nodelab_workspace_db;

-- 3. Show all databases on the active connection
SHOW DATABASES;
`,
    languageId: 'mysql'
  },
  {
    id: 'mysql-create-table',
    title: 'MySQL Create Table',
    description: 'Structure custom relational tables with fields, constraints, and data types.',
    explanation: [
      'The CREATE TABLE statement defines columns and data types inside a database.',
      'Data types include: INT, VARCHAR (alphanumeric string), DATE, TIMESTAMP, DECIMAL, etc.',
      'Constraints prevent invalid data entry: AUTO_INCREMENT, PRIMARY KEY, NOT NULL, UNIQUE.'
    ],
    code: `-- Create a user credentials table
CREATE TABLE users (
    id INT AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- View the newly structured table description
DESCRIBE users;
`,
    languageId: 'mysql'
  },
  {
    id: 'mysql-insert-into',
    title: 'MySQL Insert Into',
    description: 'Add new records and row rows into structured MySQL tables.',
    explanation: [
      'The INSERT INTO statement is used to insert new records into a table.',
      'Syntax: INSERT INTO table_name (col1, col2) VALUES (val1, val2);',
      'If inserting values for all columns of the table, you do not need to specify the column names in the query.'
    ],
    code: `-- Insert single user record
INSERT INTO users (username, email)
VALUES ('alice_dev', 'alice@nodelab.org');

-- Insert multiple user records simultaneously
INSERT INTO users (username, email) VALUES
('bob_coder', 'bob@nodelab.org'),
('charlie_db', 'charlie@nodelab.org');
`,
    languageId: 'mysql'
  },
  {
    id: 'mysql-select',
    title: 'MySQL Select Query',
    description: 'Query rows and retrieve specific column metrics from databases.',
    explanation: [
      'The SELECT statement retrieves data rows from one or more tables.',
      'Use SELECT * to fetch all available fields and column parameters of target tables.',
      'Select specific columns to optimize query speeds.'
    ],
    code: `-- 1. Query all users from the user table
SELECT * FROM users;

-- 2. Query only specific columns to optimize bandwidth
SELECT username, email FROM users;
`,
    languageId: 'mysql'
  },
  {
    id: 'mysql-where',
    title: 'MySQL Where Clause',
    description: 'Filter records using conditions, operators, and wildcards.',
    explanation: [
      'The WHERE clause filters query rows based on specific test parameters.',
      'Supported comparison operators: =, <>, >, <, >=, <=, BETWEEN, LIKE, IN.',
      'Combine multiple filters using logical operators: AND, OR, NOT.'
    ],
    code: `-- Filter users created after a certain ID limit
SELECT id, username, email 
FROM users
WHERE id >= 102 AND username LIKE '%_dev%';
`,
    languageId: 'mysql'
  },
  {
    id: 'mysql-update-delete',
    title: 'MySQL Update & Delete',
    description: 'Modify or remove records safely using conditional filtering statements.',
    explanation: [
      'The UPDATE statement modifies existing records.',
      'The DELETE statement removes records from tables.',
      'CRITICAL: Always pair UPDATE and DELETE with a WHERE filter clause, otherwise you will update/delete ALL records in the table!'
    ],
    code: `-- 1. Safely update email for a single specific user
UPDATE users
SET email = 'alice_new@nodelab.org'
WHERE username = 'alice_dev';

-- 2. Safely delete a user using unique ID filters
DELETE FROM users
WHERE id = 103;
`,
    languageId: 'mysql'
  },
  {
    id: 'mysql-joins',
    title: 'MySQL Joins',
    description: 'Combine data rows from multiple tables using relational foreign keys.',
    explanation: [
      'A JOIN clause is used to combine rows from two or more tables, based on a related column between them.',
      'Types:',
      '  - INNER JOIN: Returns records that have matching values in both tables.',
      '  - LEFT JOIN: Returns all records from the left table, and the matched records from the right table.',
      '  - RIGHT JOIN: Returns all records from the right table, and the matched records from the left table.'
    ],
    code: `-- Query users and their corresponding order records using INNER JOIN
SELECT users.id, users.username, orders.order_no, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
`,
    languageId: 'mysql'
  }
];
