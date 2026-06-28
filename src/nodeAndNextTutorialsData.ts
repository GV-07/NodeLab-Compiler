import { TutorialTopic } from './cssTutorialsData';

export const NODE_AND_NEXT_TOPICS: TutorialTopic[] = [
  {
    id: 'node-overview',
    title: 'Node.js & Next.js Overview',
    description: 'Learn the fundamentals of Node.js as a runtime and Next.js as a full-stack web framework.',
    explanation: [
      'Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome\'s V8 engine.',
      'Next.js is a React framework created by Vercel that offers server-side rendering, routing, and developer optimizations out of the box.'
    ],
    code: `// Node.js runs JS outside the browser!
console.log("Welcome to Node.js " + process.version);`,
    languageId: 'javascript'
  },
  {
    id: 'node-architecture',
    title: 'Node.js Architecture',
    description: 'Understand the non-blocking, single-threaded, event-driven model of Node.js.',
    explanation: [
      'Node.js uses a "Single Thread Event Loop" architecture to handle concurrent clients.',
      'Input/Output (I/O) operations are non-blocking, making Node.js lightweight and efficient.'
    ],
    code: `console.log("Start");
setTimeout(() => {
    console.log("Async operation done");
}, 1000);
console.log("End");`,
    languageId: 'javascript'
  },
  {
    id: 'node-npm',
    title: 'Node Package Manager (NPM)',
    description: 'Manage external modules and configurations using standard NPM scripts.',
    explanation: [
      'NPM (Node Package Manager) is the world\'s largest software registry.',
      'package.json stores metadata, dependency names, versions, and automation scripts.'
    ],
    code: `{
  "name": "my-node-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  },
  "scripts": {
    "start": "node app.js"
  }
}`,
    languageId: 'json'
  },
  {
    id: 'node-event-loop',
    title: 'Event Loop & Callbacks',
    description: 'Deep dive into the core Event Loop and asynchronous callback execution.',
    explanation: [
      'The event loop allows Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel when possible.',
      'Callbacks are functions passed as arguments to execute once a task completes.'
    ],
    code: `const fs = require('fs');

// Asynchronous file read using a callback
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content loaded:", data);
});`,
    languageId: 'javascript'
  },
  {
    id: 'node-fs',
    title: 'Filesystem Module',
    description: 'Read, write, append, and delete files using the native fs module.',
    explanation: [
      'Node.js includes the built-in \'fs\' module for filesystem manipulation.',
      'Provides both synchronous (blocking) and asynchronous (non-blocking) methods.'
    ],
    code: `const fs = require('fs');

// Write text file asynchronously
fs.writeFile('log.txt', 'Hello Server log!', (err) => {
    if (err) throw err;
    console.log('File successfully written!');
});`,
    languageId: 'javascript'
  },
  {
    id: 'node-child-process-sandbox',
    title: 'Safe Code Runner (child_process)',
    description: 'Build a secure Node.js sandbox that writes user input to a temporary file, executes it with a strict timeout, and auto-cleans the workspace.',
    explanation: [
      'The child_process module allows executing any system commands or external scripts.',
      'We can run user code safely by writing it to a temporary file and calling the "node" compiler on it via exec().',
      'Timeout limits are configured to terminate the child process if it hangs (e.g. infinite loops), followed by proactive workspace cleanup.'
    ],
    code: `const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Executes raw Node.js code string safely
 * @param {string} userCode - The JavaScript code submitted by the user
 */
function runUserCode(userCode) {
    // 1. Create a unique temporary file path
    const tempFileName = \`temp_\${Date.now()}.js\`;
    const tempFilePath = path.join(__dirname, tempFileName);

    // 2. Write the user's code string to the file
    fs.writeFile(tempFilePath, userCode, (writeErr) => {
        if (writeErr) {
            return console.error(\`Failed to save code: \${writeErr.message}\`);
        }

        // 3. Execute the file using the 'node' command
        // We set a 5-second timeout to prevent infinite loops (e.g., while(true))
        exec(\`node \${tempFilePath}\`, { timeout: 5000 }, (execErr, stdout, stderr) => {
            
            // 4. Clean up and delete the temporary file immediately
            fs.unlink(tempFilePath, () => {});

            // 5. Handle execution outcomes
            if (execErr && execErr.killed) {
                console.log("Execution Error: Code timed out (Possible infinite loop)");
                return;
            }
            if (stderr) {
                console.log(\`Runtime Error:\\n\${stderr}\`);
                return;
            }

            // 6. Success - Return the terminal output
            console.log(\`Output:\\n\${stdout}\`);
        });
    });
}

// Example usage: Simulate a user submitting code
const userSubmission = \`
    const list = ['Node.js', 'React', 'Express'];
    console.log('My tech stack:', list.join(', '));
\`;

runUserCode(userSubmission);`,
    languageId: 'javascript'
  },
  {
    id: 'node-http',
    title: 'HTTP Server Basics',
    description: 'Build native, lightweight HTTP servers without third-party frameworks.',
    explanation: [
      'The built-in \'http\' module allows Node.js to transfer data over HTTP.',
      'Use createServer() to initiate a standard HTTP listening port.'
    ],
    code: `const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from native Node Server!');
});

// Listen on port 8080 (conceptual example)
// server.listen(8080);`,
    languageId: 'javascript'
  },
  {
    id: 'node-express',
    title: 'Express.js Integration',
    description: 'Create scalable API endpoints and routers using Express.js.',
    explanation: [
      'Express is a minimal and flexible Node.js web application framework.',
      'Simplifies route declarations, parameters parsing, and middleware chains.'
    ],
    code: `const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});

// app.listen(3000);`,
    languageId: 'javascript'
  },
  {
    id: 'next-intro',
    title: 'Next.js Intro',
    description: 'Learn about the advantages of React-based Next.js applications.',
    explanation: [
      'Next.js provides hydration, static generation, server-side rendering, and bundle-splitting.',
      'Provides zero-configuration tooling: compiler (SWC), static hosting optimization, and edge capabilities.'
    ],
    code: `// Sample Next.js custom Component
export default function Heading() {
  return (
    <div className="p-4 bg-slate-100 rounded-lg">
      <h1 className="text-xl font-bold">Hello from Next.js!</h1>
    </div>
  );
}`,
    languageId: 'typescript'
  },
  {
    id: 'next-pages',
    title: 'Next.js Pages & Routing',
    description: 'Structure routes automatically using filesystem-based page routing.',
    explanation: [
      'In Next.js, files inside the pages/ or app/ directory are automatically mapped to routes.',
      'index.tsx maps to root (/), about.tsx maps to /about, etc.'
    ],
    code: `// pages/about.tsx
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is mapped to /about automatically!</p>
    </div>
  );
}`,
    languageId: 'typescript'
  },
  {
    id: 'next-dynamic',
    title: 'Next.js Dynamic Routes',
    description: 'Support parameter-based paths like post/[id].tsx.',
    explanation: [
      'Dynamic route segments are defined by wrapping a folder or filename in square brackets [id].',
      'Use next/router or useParams() to extract route parameters.'
    ],
    code: `// pages/post/[id].tsx
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Viewing blog post: {id}</p>;
}`,
    languageId: 'typescript'
  },
  {
    id: 'next-app-router',
    title: 'Next.js App Router & Server Components',
    description: 'Deploy advanced layouts and Server Components in the app/ directory.',
    explanation: [
      'The App Router supports layouts, nested routing, and React Server Components (RSC) by default.',
      'Server Components fetch data directly on the server, sending pre-rendered HTML to browsers.'
    ],
    code: `// app/page.tsx - React Server Component (Default)
import React from 'react';

async function getStats() {
  // Can fetch directly from DB/external API on the server!
  return { users: 4500 };
}

export default async function Page() {
  const stats = await getStats();
  return <main>Registered Users: {stats.users}</main>;
}`,
    languageId: 'typescript'
  },
  {
    id: 'next-api-routes',
    title: 'API Routes in Next.js',
    description: 'Write serverless Node.js endpoints inside pages/api/ or app/api/.',
    explanation: [
      'Create custom API endpoints within Next.js, eliminating the need for an external Express backend.',
      'Supports request methods validation, query parameters, and JSON payloads.'
    ],
    code: `// pages/api/status.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ system: "online", time: new Date() });
}`,
    languageId: 'typescript'
  },
  {
    id: 'next-data-fetching',
    title: 'Data Fetching (SSR, SSG, ISR)',
    description: 'Explore getServerSideProps, getStaticProps, and Incremental Static Regeneration (ISR).',
    explanation: [
      'SSG (Static Site Generation): getStaticProps builds HTML at build time.',
      'SSR (Server-Side Rendering): getServerSideProps runs on every single request.',
      'ISR (Incremental Static Regeneration): Rebuild static pages in the background on a timer.'
    ],
    code: `// Sample getStaticProps (SSG) with 10-second revalidation (ISR)
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  return {
    props: { products },
    revalidate: 10, // Re-generate page once every 10 seconds max
  };
}`,
    languageId: 'typescript'
  },
  {
    id: 'next-deployment',
    title: 'Next.js Deployment & Optimizations',
    description: 'Build and deploy optimized next-generation apps on Vercel or Node servers.',
    explanation: [
      'Deploy Next.js seamlessly to Vercel (the creators of Next.js) with zero configuration.',
      'Use npm run build to produce highly optimized assets, image layouts, and serverless builds.'
    ],
    code: `// Run build before deployment
// npm run build
// npm run start`,
    languageId: 'javascript'
  },
  {
    id: 'node-fastify-zod',
    title: 'Fastify API with Zod Validation',
    description: 'Build a lightning-fast HTTP API using Fastify and validate JSON payloads with Zod schemas.',
    explanation: [
      'Fastify is a high-performance, low-overhead Node.js web framework.',
      'Zod is a TypeScript-first schema declaration and validation library.',
      'Integrating Zod validation inside Fastify endpoints ensures strict type safety and secure incoming payloads.'
    ],
    code: `const fastify = require('fastify')({ logger: true });
const { z } = require('zod');

// 1. Define a strict user validation schema
const UserSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    age: z.number().min(18)
});

// 2. Register a POST endpoint with schema validation
fastify.post('/api/users', async (request, reply) => {
    try {
        // Validate payload using Zod schema
        const validatedData = UserSchema.parse(request.body);
        console.log("Successfully validated user:", validatedData.username);
        
        reply.code(201).send({
            success: true,
            message: "User created successfully!",
            user: validatedData
        });
    } catch (err) {
        reply.code(400).send({
            success: false,
            error: "Validation failed: " + err.message
        });
    }
});

fastify.get('/', async (request, reply) => {
    reply.send({ framework: "Fastify + Zod", status: "online" });
});

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err;
    console.log(\`Fastify server listening on \${address}\`);
});`,
    languageId: 'javascript'
  },
  {
    id: 'node-koa-dotenv',
    title: 'Koa Server with Dotenv & Helmet',
    description: 'Build a secure, modular server with Koa, helmet, and dotenv configuration.',
    explanation: [
      'Koa is designed by the creators of Express, utilizing async/await to write cleaner middleware.',
      'dotenv loads secrets securely into process.env from a local file, while helmet secures headers.',
      'In Koa, middleware flows through a cascade structure using the "next" async parameter.'
    ],
    code: `const Koa = require('koa');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

// 1. Load environment variables
dotenv.config();
console.log("Loaded Database Endpoint:", process.env.DATABASE_URL);

const app = new Koa();

// 2. Use security and resource-sharing middleware
app.use(helmet());
app.use(cors());

// 3. Custom logger middleware (Cascading model)
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(\`\${ctx.request.method} \${ctx.request.url} - \${ms}ms\`);
});

// 4. Response handler middleware
app.use(async (ctx) => {
    ctx.status = 200;
    ctx.body = {
        message: "Hello secure universe from Koa!",
        secure_headers: "Enabled (Helmet)",
        database_endpoint: process.env.DATABASE_URL
    };
});

app.listen(3000, () => {
    console.log("Koa application successfully running on port 3000");
});`,
    languageId: 'javascript'
  },
  {
    id: 'node-mongoose-mongodb',
    title: 'Mongoose ODM & MongoDB Models',
    description: 'Define schemas, register compilation models, and query data asynchronously with Mongoose.',
    explanation: [
      'Mongoose is a schema-based MongoDB Object Data Modeling (ODM) library for Node.js.',
      'It manages validation, type casting, query building, and business logic out of the box.'
    ],
    code: `const mongoose = require('mongoose');

// 1. Establish database connection
mongoose.connect('mongodb://localhost:27017/nodelab')
    .then(() => console.log("Connected to MongoDB successfully."))
    .catch(err => console.error("MongoDB Connection error:", err));

// 2. Define standard User collection schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// 3. Register compilation model
const User = mongoose.model('User', UserSchema);

async function runDatabaseDemo() {
    // 4. Create and persist a new document
    const newUser = await User.create({
        name: "Alice NodeLab",
        email: "alice@nodelab.org"
    });
    console.log("Successfully created User document:", newUser._id);

    // 5. Query documents from database
    const allUsers = await User.find();
    console.log("All Registered Users list:", allUsers);
}

runDatabaseDemo();`,
    languageId: 'javascript'
  },
  {
    id: 'node-nestjs-enterprise',
    title: 'NestJS Framework Core',
    description: 'Learn the architectural foundations of NestJS Controllers, Modules, and Dependency Injection.',
    explanation: [
      'NestJS is an enterprise-grade, progressive Node.js framework for building scalable applications.',
      'It uses TypeScript-first classes, decorators, and modular components inspired by Angular.'
    ],
    code: `const { Controller, Get, Module, Post } = require('@nestjs/common');
const { NestFactory } = require('@nestjs/core');

// 1. Define a Controller with decorators mapping endpoints
@Controller('api/v1')
class AppController {
    @Get()
    getHello() {
        return { message: "Hello Enterprise World from NestJS!" };
    }
}

// 2. Declare root Module linking controllers together
@Module({
    controllers: [AppController]
})
class AppModule {}

// 3. Bootstrap the NestJS NestFactory application
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();`,
    languageId: 'javascript'
  }
];
