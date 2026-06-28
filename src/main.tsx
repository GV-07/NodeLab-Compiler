import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress benign Vite HMR/WebSocket connection errors in the sandbox environment
if (typeof window !== 'undefined') {
  const ignorePatterns = [
    'websocket',
    'WebSocket',
    'vite',
    'Vite',
    'HMR',
    'hmr'
  ];

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (reason) {
      const msg = typeof reason === 'string' ? reason : (reason.message || '');
      const stack = reason.stack || '';
      if (ignorePatterns.some(p => msg.includes(p) || stack.includes(p))) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  });

  window.addEventListener('error', (event) => {
    const msg = event.message || '';
    const error = event.error;
    const stack = error?.stack || '';
    if (ignorePatterns.some(p => msg.includes(p) || stack.includes(p))) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

