import { TutorialTopic } from './cssTutorialsData';

export const MONGODB_TOPICS: TutorialTopic[] = [
  {
    id: 'mongo-home',
    title: 'MongoDB HOME',
    description: 'Welcome to MongoDB! MongoDB is a popular, open-source document-based NoSQL database.',
    explanation: [
      'MongoDB stores data in flexible, JSON-like documents.',
      'Unlike traditional SQL relational databases, it does not require a fixed schema before inserting records.',
      'Offers high scalability, high performance, and real-time indexing.'
    ],
    code: `// Structure of a document in MongoDB:
{
  "_id": "60c72b2f9b1d8b2bad0343a4",
  "name": "Laptop",
  "brand": "ProBook",
  "specs": { "ram": "16GB", "storage": "512GB SSD" },
  "price": 899.99
}`,
    languageId: 'json'
  },
  {
    id: 'mongo-intro',
    title: 'MongoDB Intro',
    description: 'Understand the benefits of NoSQL databases and document models.',
    explanation: [
      'NoSQL stands for "Not Only SQL". It represents a class of non-relational database management systems.',
      'No SQL tables, rows, or joins; instead, we have collections, documents, and sub-documents.'
    ],
    code: `// Documents in a "users" collection can have varying fields!
{ "username": "alpha_coder", "email": "alpha@test.com" }
{ "username": "omega", "email": "omega@test.com", "verified": true }`,
    languageId: 'json'
  },
  {
    id: 'mongo-get-started',
    title: 'MongoDB Get Started',
    description: 'Install MongoDB Community Server and launch the MongoDB Shell (mongosh).',
    explanation: [
      'Install MongoDB on Windows, macOS, or Linux.',
      'Run the mongosh command in terminal to connect to local databases.'
    ],
    code: `// Connect using command line:
// mongosh "mongodb://localhost:27017"

show dbs // list databases
show collections // list collections inside active database`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-create-db',
    title: 'MongoDB Create Database',
    description: 'Create and switch databases using the "use" keyword in mongosh.',
    explanation: [
      'In MongoDB, you do not need to explicitly "create" a database.',
      'Just use the "use database_name" command. The database is created automatically when you insert your first document.'
    ],
    code: `use store_db // Switch to store_db

// The database will be fully created once we insert a document:
db.products.insertOne({ "name": "Coffee Maker", "price": 49.99 })`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-create-col',
    title: 'MongoDB Create Collection',
    description: 'Create collections implicitly or explicitly using db.createCollection().',
    explanation: [
      'A collection is a grouping of MongoDB documents (equivalent to a SQL table).',
      'Created automatically when inserting documents, or explicitly via db.createCollection("name").'
    ],
    code: `// Explicitly create a capped collection with fixed size limit:
db.createCollection("logs", { capped: true, size: 5242880, max: 5000 })`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-insert',
    title: 'MongoDB Insert',
    description: 'Insert single or multiple documents using insertOne() and insertMany().',
    explanation: [
      'insertOne() adds one document to a collection.',
      'insertMany() adds an array of documents to a collection.'
    ],
    code: `// Insert multiple product documents
db.products.insertMany([
  { "name": "Desk Lamp", "price": 19.99, "stock": 120 },
  { "name": "Office Chair", "price": 149.99, "stock": 45 }
])`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-find',
    title: 'MongoDB Find',
    description: 'Query database documents using find() and findOne().',
    explanation: [
      'find() returns a cursor of all matching documents.',
      'findOne() returns the first document matching selection criteria.'
    ],
    code: `// Return all documents inside products collection:
db.products.find()

// Find first product with price under 50:
db.products.findOne({ "price": { $lt: 50 } })`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-query',
    title: 'MongoDB Query',
    description: 'Filter search results using logical operators ($or, $and) and comparison parameters.',
    explanation: [
      'Comparison operators: $gt (greater than), $lt (less than), $eq (equals), $in (matches array values).',
      'Logical operators: $and, $or, $not.'
    ],
    code: `// Find products with stock greater than 10 AND price less than 100
db.products.find({
  $and: [
    { "stock": { $gt: 10 } },
    { "price": { $lt: 100 } }
  ]
})`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-sort',
    title: 'MongoDB Sort',
    description: 'Sort query results ascending or descending using the .sort() modifier.',
    explanation: [
      'Specify 1 to sort ascending.',
      'Specify -1 to sort descending.'
    ],
    code: `// Get all products, sorted by price in descending order (highest first)
db.products.find().sort({ "price": -1 })`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-delete',
    title: 'MongoDB Delete',
    description: 'Remove records from collections using deleteOne() and deleteMany().',
    explanation: [
      'deleteOne() removes the first document matching filters.',
      'deleteMany() removes all documents matching filters.'
    ],
    code: `// Remove all products with zero stock
db.products.deleteMany({ "stock": 0 })`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-drop',
    title: 'MongoDB Drop Collection',
    description: 'Completely remove a collection and its indexes using db.collection.drop().',
    explanation: [
      'The drop() method removes a collection from the database and returns true on success.'
    ],
    code: `// Completely remove logs collection:
db.logs.drop()`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-update',
    title: 'MongoDB Update',
    description: 'Modify existing document fields using updateOne(), updateMany(), and $set.',
    explanation: [
      'Use the $set operator to modify field values without replacing the entire document.',
      'Use the $inc operator to increment numeric values.'
    ],
    code: `// Increment stock of Office Chair by 10
db.products.updateOne(
  { "name": "Office Chair" },
  { $inc: { "stock": 10 } }
)`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-limit',
    title: 'MongoDB Limit',
    description: 'Limit and skip records to implement paginated datasets.',
    explanation: [
      'limit() specifies the maximum number of documents to return.',
      'skip() specifies how many documents to skip before returning.'
    ],
    code: `// Implement page 2 of products (assuming 10 items per page)
db.products.find().skip(10).limit(10)`,
    languageId: 'javascript'
  },
  {
    id: 'mongo-join',
    title: 'MongoDB Join',
    description: 'Perform left-outer joins on collections using the aggregation stage $lookup.',
    explanation: [
      'Although NoSQL is non-relational, MongoDB supports left outer joins via the $lookup stage in aggregation pipelines.'
    ],
    code: `// Join products collection with orders collection:
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "_id",
      as: "ordered_product"
    }
  }
])`,
    languageId: 'javascript'
  }
];
