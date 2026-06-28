import { TutorialTopic } from './cssTutorialsData';

export const FIREBASE_TOPICS: TutorialTopic[] = [
  {
    id: 'firebase-home',
    title: 'Firebase HOME',
    description: 'Welcome to Firebase, Googles mobile and web application development platform that handles server structures automatically.',
    explanation: [
      'Firebase is a BaaS (Backend-as-a-Service) platform that manages database, hosting, authentication, and cloud calculations.',
      'It speeds up application development by removing the requirement to write complex custom API backends.',
      'It scales from small prototypes up to enterprise production applications smoothly.'
    ],
    code: `// Initializing a standard client-side Firebase application instance
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDummyKey-12345",
  projectId: "my-applet-sandbox",
};

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized successfully!");`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-intro',
    title: 'Firebase Intro',
    description: 'Understanding the core services that make up the Firebase platform.',
    explanation: [
      'Authentication handles secure logins, social sign-ins, and user credential validation.',
      'Realtime Database and Cloud Firestore store and sync unstructured NoSQL data across clients instantly.',
      'Storage provides secure cloud buckets to hold large assets like images, audio, and video.'
    ],
    code: `// High-level service architecture overview
// App -> Firebase SDK -> Auth, Firestore, Cloud Functions, Storage`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-setup',
    title: 'Firebase Environment Setup',
    description: 'Configuring Firebase projects inside the Google Console and linking them to your project.',
    explanation: [
      'Create a new project inside the online Firebase Console (console.firebase.google.com).',
      'Register your application (Web, iOS, or Android) to obtain your unique firebaseConfig credentials.',
      'Install the Firebase package in your project folder using: npm install firebase.'
    ],
    code: `npm install firebase`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-architecture',
    title: 'Firebase Architecture',
    description: 'Understanding client-side SDK integration vs secure backend administrative SDK structures.',
    explanation: [
      'Firebase allows direct database queries from client apps, using security rules to control read/write rights.',
      'If you need secure backend operations, use the Firebase Admin SDK on a dedicated server (Node.js, Python, etc.).',
      'This avoids leaking administrative master keys and API credentials directly to browser caches.'
    ],
    code: `// Using Admin SDK on a secure Node.js backend server
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-auth',
    title: 'Firebase Authentication (Email, Socials)',
    description: 'Creating user accounts, logging in, and integrating Google or GitHub auth sign-ins.',
    explanation: [
      'Firebase Auth coordinates email/password creation, validation links, and social credentials (OAuth).',
      'Calling signWithEmailAndPassword() logs in users, while onAuthStateChanged() monitors login status.',
      'The client receives a secure JWT token that Firebase uses to verify rights on subsequent requests.'
    ],
    code: `import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, "user@example.com", "mypassword123")
  .then((userCredential) => {
    console.log("Logged in:", userCredential.user.uid);
  })
  .catch((error) => {
    console.error("Auth Error:", error.message);
  });`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-realtime',
    title: 'Firebase Realtime Database',
    description: 'Reading, writing, and synchronizing a single nested JSON tree across clients in milliseconds.',
    explanation: [
      'Realtime Database stores data as a single giant, nested JSON tree.',
      'It is highly optimized for exceptionally fast, real-time message relays (e.g., chat applications).',
      'Clients set event listeners (onValue) that fire whenever any value changes anywhere in the specified path.'
    ],
    code: `import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();
// Write value to /users/101 path
set(ref(db, 'users/101'), {
  username: "alice_dev",
  status: "active"
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-firestore',
    title: 'Firebase Cloud Firestore',
    description: 'Querying documents and collections inside Firestores scalable NoSQL document database.',
    explanation: [
      'Cloud Firestore is Firebases modern NoSQL database designed for more complex querying and scaling.',
      'It structures data into Collections containing individual JSON-like Documents.',
      'Documents can hold nested properties, subcollections, arrays, and standard data types.'
    ],
    code: `import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore();

// Add document to 'tasks' collection
const docRef = await addDoc(collection(db, "tasks"), {
  title: "Learn Firebase Firestore",
  done: false
});
console.log("Document written with ID:", docRef.id);`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-storage',
    title: 'Firebase Storage (Uploading Files)',
    description: 'Uploading image assets and reading public download URLs.',
    explanation: [
      'Firebase Storage is built on Google Cloud Storage, designed to save and serve user-uploaded files.',
      'Use ref() to specify the destination path inside the storage bucket.',
      'Call uploadBytes() to upload raw file buffers, and getDownloadURL() to retrieve the public asset URL.'
    ],
    code: `import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const fileRef = ref(storage, 'avatars/user_1.png');

uploadBytes(fileRef, fileBuffer).then((snapshot) => {
  getDownloadURL(snapshot.ref).then((url) => {
    console.log("File available at:", url);
  });
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-hosting',
    title: 'Firebase Hosting & Deployment',
    description: 'Deploying static files and single page applications using the Firebase CLI.',
    explanation: [
      'Firebase Hosting provides fast, secure hosting for static sites and dynamic web apps.',
      'Install the Firebase command-line tools: npm install -g firebase-tools.',
      'Run firebase login, then firebase init, and finally firebase deploy to launch your site live.'
    ],
    code: `# Commands to deploy to Firebase Hosting
npm install -g firebase-tools
firebase login
firebase init
firebase deploy`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-functions',
    title: 'Firebase Cloud Functions',
    description: 'Executing serverless Python or Node.js backend routines in response to database changes or HTTP requests.',
    explanation: [
      'Cloud Functions are serverless microservices that run isolated backend logic on demand.',
      'They can trigger automatically in response to Firestore document updates, auth registrations, or HTTP calls.',
      'Excellent for validating user inputs, integrating payment checkouts, or processing image files safely.'
    ],
    code: `// Express-style Cloud Function trigger
const { onRequest } = require("firebase-functions/v2/https");

exports.helloWorld = onRequest((request, response) => {
  response.send("Hello from serverless Firebase Functions!");
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'firebase-rules',
    title: 'Firebase Security Rules',
    description: 'Authorizing and validating client database queries and storage requests.',
    explanation: [
      'Security Rules control who can read or write documents, guaranteeing database safety without an intermediary server.',
      'Rules analyze user authentication details (request.auth) and current database records.',
      'Rules are written in a custom declarative language deployed directly to Firebases cloud.'
    ],
    code: `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tasks/{taskId} {
      // Only allow authenticated users to read or write tasks
      allow read, write: if request.auth != null;
    }
  }
}`,
    languageId: 'javascript_prog'
  }
];
