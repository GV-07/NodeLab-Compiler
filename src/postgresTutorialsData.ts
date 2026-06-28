import { TutorialTopic } from './cssTutorialsData';

export const POSTGRES_TOPICS: TutorialTopic[] = [
  {
    id: 'pg-home',
    title: 'PostgreSQL HOME',
    description: 'Welcome to PostgreSQL! PostgreSQL is an enterprise-class, open-source relational database management system (RDBMS).',
    explanation: [
      'PostgreSQL is highly stable, extensible, and supports advanced SQL standards.',
      'Sometimes known as Postgres, it supports relational querying, JSON document storage, and spatial analytics (PostGIS).'
    ],
    code: `SELECT version();`,
    languageId: 'sql'
  },
  {
    id: 'pg-intro',
    title: 'PostgreSQL Intro',
    description: 'Understand the primary benefits of PostgreSQL, including ACID compliance, indexing, and extensibility.',
    explanation: [
      'PostgreSQL is ACID compliant (Atomicity, Consistency, Isolation, Durability), ensuring 100% reliable data transactions.',
      'Supports sophisticated features: partial indexes, transactional DDL, triggers, and foreign data wrappers.'
    ],
    code: `-- Sample Postgres specific syntax
SELECT '{"name": "Alice"}'::jsonb ->> 'name' AS username;`,
    languageId: 'sql'
  },
  {
    id: 'pg-get-started',
    title: 'PostgreSQL Get Started',
    description: 'Install PostgreSQL and connect using the terminal utility tool psql.',
    explanation: [
      'psql is the standard interactive terminal utility for managing Postgres.',
      'Default database user is postgres, default listening port is 5432.'
    ],
    code: `-- Connect via psql:
-- psql -U postgres -h localhost -d my_database

\\conninfo -- Check connection status inside psql
\\dt -- List all tables`,
    languageId: 'sql'
  },
  {
    id: 'pg-syntax',
    title: 'PostgreSQL Syntax',
    description: 'Learn the foundational SQL structures and queries inside PostgreSQL.',
    explanation: [
      'PostgreSQL commands are case-insensitive, but writing keywords in uppercase is highly recommended.',
      'Statements must end with a semicolon.'
    ],
    code: `SELECT name, price FROM products;`,
    languageId: 'sql'
  },
  {
    id: 'pg-create-db',
    title: 'PostgreSQL Create Database',
    description: 'Create new database containers using CREATE DATABASE.',
    explanation: [
      'The CREATE DATABASE statement creates a brand new PostgreSQL database.',
      'Must be executed with appropriate administrator permissions.'
    ],
    code: `CREATE DATABASE company_db;`,
    languageId: 'sql'
  },
  {
    id: 'pg-drop-db',
    title: 'PostgreSQL Drop Database',
    description: 'Permanently delete databases using DROP DATABASE.',
    explanation: [
      'DROP DATABASE permanently deletes the database along with all its schemas, tables, and data.',
      'Warning: This action is irreversible!'
    ],
    code: `DROP DATABASE company_db;`,
    languageId: 'sql'
  },
  {
    id: 'pg-create-table',
    title: 'PostgreSQL Create Table',
    description: 'Define tables, columns, and constraints (SERIAL, PRIMARY KEY, NOT NULL).',
    explanation: [
      'Use SERIAL to define auto-incrementing integer identifier fields.',
      'Specify column types (VARCHAR, INT, NUMERIC, TIMESTAMP) and constraints.'
    ],
    code: `CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary NUMERIC(10, 2),
    hired_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
    languageId: 'sql'
  },
  {
    id: 'pg-drop-table',
    title: 'PostgreSQL Drop Table',
    description: 'Delete tables permanently using DROP TABLE.',
    explanation: [
      'DROP TABLE drops the table structure and all stored rows.',
      'Use DROP TABLE IF EXISTS to avoid getting errors if the table does not exist.'
    ],
    code: `DROP TABLE IF EXISTS employees;`,
    languageId: 'sql'
  },
  {
    id: 'pg-insert',
    title: 'PostgreSQL Insert Into',
    description: 'Insert new rows into PostgreSQL tables using INSERT INTO and RETURNING.',
    explanation: [
      'INSERT INTO adds new rows to a table.',
      'Postgres-specific feature: Use the RETURNING clause to immediately return the generated ID or row values.'
    ],
    code: `INSERT INTO employees (first_name, last_name, salary)
VALUES ('John', 'Doe', 75000.00)
RETURNING id, hired_at;`,
    languageId: 'sql'
  },
  {
    id: 'pg-select',
    title: 'PostgreSQL Select',
    description: 'Fetch and view columns from database tables using SELECT.',
    explanation: [
      'The SELECT statement fetches data from a table.',
      'Use SELECT * to fetch all columns, or specify columns explicitly for performance.'
    ],
    code: `SELECT first_name, salary FROM employees;`,
    languageId: 'sql'
  },
  {
    id: 'pg-where',
    title: 'PostgreSQL Where',
    description: 'Filter queries using standard comparison operators and logical operators.',
    explanation: [
      'The WHERE clause filters rows based on conditional clauses.',
      'Supports pattern matching operators like LIKE or ILIKE (case-insensitive LIKE).'
    ],
    code: `SELECT * FROM employees
WHERE salary >= 60000 AND first_name ILIKE 'j%';`,
    languageId: 'sql'
  },
  {
    id: 'pg-order-by',
    title: 'PostgreSQL Order By',
    description: 'Sort query results ascending (ASC) or descending (DESC).',
    explanation: [
      'ORDER BY sorts returned rows based on one or more columns.',
      'Default sort direction is ASC (ascending).'
    ],
    code: `SELECT * FROM employees
ORDER BY salary DESC, last_name ASC;`,
    languageId: 'sql'
  },
  {
    id: 'pg-update',
    title: 'PostgreSQL Update',
    description: 'Modify column values in tables using UPDATE and WHERE.',
    explanation: [
      'The UPDATE statement modifies existing values inside columns.',
      'Important: Always use a WHERE clause, otherwise all rows in the table will be modified!'
    ],
    code: `UPDATE employees
SET salary = salary * 1.05
WHERE id = 1;`,
    languageId: 'sql'
  },
  {
    id: 'pg-delete',
    title: 'PostgreSQL Delete',
    description: 'Remove records from tables using DELETE FROM.',
    explanation: [
      'DELETE FROM deletes rows from a table.',
      'Important: Always specify a WHERE clause to avoid clearing the entire table!'
    ],
    code: `DELETE FROM employees
WHERE salary < 30000;`,
    languageId: 'sql'
  },
  {
    id: 'pg-limit',
    title: 'PostgreSQL Limit',
    description: 'Restrict the number of returned rows using LIMIT and OFFSET.',
    explanation: [
      'LIMIT specifies the maximum number of rows to return.',
      'OFFSET specifies how many rows to skip before starting to return values.'
    ],
    code: `SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5 OFFSET 10;`,
    languageId: 'sql'
  },
  {
    id: 'pg-join',
    title: 'PostgreSQL Join',
    description: 'Query combined data from multiple tables using INNER JOIN, LEFT JOIN, and RIGHT JOIN.',
    explanation: [
      'A JOIN clause is used to combine rows from two or more tables based on a related column between them.'
    ],
    code: `SELECT employees.first_name, departments.dept_name
FROM employees
INNER JOIN departments ON employees.dept_id = departments.id;`,
    languageId: 'sql'
  },
  {
    id: 'pg-group-by',
    title: 'PostgreSQL Group By',
    description: 'Group rows sharing identical values using GROUP BY and aggregate functions.',
    explanation: [
      'GROUP BY groups rows that have the same values into summary rows.',
      'Often used with aggregate functions: COUNT(), MAX(), MIN(), SUM(), AVG().'
    ],
    code: `SELECT dept_id, AVG(salary) AS avg_dept_salary
FROM employees
GROUP BY dept_id;`,
    languageId: 'sql'
  },
  {
    id: 'pg-having',
    title: 'PostgreSQL Having',
    description: 'Apply search constraints on grouped results using HAVING.',
    explanation: [
      'The HAVING clause is used instead of WHERE because WHERE cannot be applied to aggregate functions.'
    ],
    code: `SELECT dept_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept_id
HAVING AVG(salary) > 50000;`,
    languageId: 'sql'
  }
];
