import React from "react";

/**
 * Generates a complete HTML page that executes React/Next.js code on the client side using Babel Standalone.
 * This runs completely client-side and is lightning-fast.
 */
export const getReactPreviewDoc = (userCode: string, isNext: boolean): string => {
  // Clean up import statements
  let processed = userCode;
  
  // Strip standard ESM React/Next imports that would cause runtime resolution errors
  processed = processed.replace(/import\s+(?:[\w\s,{}*]+|{[\w\s,{}*]+})\s+from\s+['"](?:react|react-dom|next|next\/[\w-]+)['"];?/g, '');
  processed = processed.replace(/import\s+['"](?:react|react-dom|next|next\/[\w-]+)['"];?/g, '');
  
  // Convert "export default" to a constant so we can render it
  let hasDefaultExport = false;
  if (processed.includes('export default')) {
    processed = processed.replace(/export\s+default\s+/, 'const NodeLabApp = ');
    hasDefaultExport = true;
  } else {
    // Fallback: search for first declared function or class that might be the main component
    const functionMatch = processed.match(/(?:function|class|const)\s+([A-Z]\w*)/);
    if (functionMatch && functionMatch[1]) {
      processed += `\nconst NodeLabApp = ${functionMatch[1]};`;
      hasDefaultExport = true;
    }
  }
  
  const title = isNext ? "Next.js Dev Server Preview" : "React Live Sandbox Preview";
  const logoSvg = isNext 
    ? `<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.79 14.808l-5.328-6.843V17.06H10.9V8.921h1.536l5.066 6.551V8.921h1.536v7.887h-.248z"/></svg>`
    : `<svg class="w-6 h-6 text-cyan-400 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="4 4"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;

  const headerBg = isNext ? 'bg-[#000000] border-b border-zinc-850' : 'bg-slate-900 border-b border-slate-800';
  const labelText = isNext ? 'Next.js App Router (Fast Refresh)' : 'React Developer Container';

  return `
    <!DOCTYPE html>
    <html class="${isNext ? 'dark' : ''}">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Inter', sans-serif;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      </style>
      <script>
        tailwind.config = {
          darkMode: 'class',
          theme: {
            extend: {
              colors: {
                slate: { 850: '#1e293b', 950: '#020617' }
              }
            }
          }
        }
      </script>
    </head>
    <body class="bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-zinc-100 min-h-screen flex flex-col">
      <!-- Dev Server Header -->
      <div class="px-4 py-2 ${headerBg} flex items-center justify-between shadow-sm select-none">
        <div class="flex items-center space-x-2">
          ${logoSvg}
          <div>
            <div class="text-[10px] font-black tracking-widest text-slate-400 dark:text-zinc-500 uppercase">${labelText}</div>
            <div class="text-xs font-bold text-slate-200 dark:text-zinc-300 flex items-center gap-1.5 font-mono">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-pulse"></span>
              <span>Running on http://localhost:3000</span>
            </div>
          </div>
        </div>
        <div class="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase tracking-widest">
          ⚡ Fast Refresh Active
        </div>
      </div>

      <!-- Application Frame -->
      <div id="root" class="flex-1 p-6 overflow-auto"></div>

      <script type="text/babel">
        // Inject standard React hooks and hooks as globals
        const { useState, useEffect, useRef, useMemo, useCallback, useContext, createContext } = React;

        // User Code Execution
        try {
          ${processed}

          const root = ReactDOM.createRoot(document.getElementById('root'));
          if (typeof NodeLabApp !== 'undefined') {
            root.render(<NodeLabApp />);
          } else {
            root.render(
              <div class="p-6 max-w-md mx-auto bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-2xl text-center mt-12">
                <h4 class="font-black uppercase text-sm mb-1">No Component Export Found</h4>
                <p class="text-xs opacity-80">Make sure your React/Next.js code has an "export default" component or a declared functional component to render in this live sandbox frame.</p>
              </div>
            );
          }
        } catch (error) {
          console.error("React Compiler Error:", error);
          document.getElementById('root').innerHTML = \`
            <div class="p-6 max-w-xl mx-auto bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-2xl mt-8">
              <h4 class="font-black uppercase text-sm mb-2 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                Runtime Compilation Error
              </h4>
              <pre class="bg-black/40 p-4 rounded-xl font-mono text-xs overflow-auto max-h-60 leading-relaxed text-rose-400">\${error.message}\\n\\n\${error.stack}</pre>
              <div class="mt-3 text-[10px] opacity-75 font-medium">Verify your React/Next.js syntax, check for missing tags, and ensure tags are closed properly.</div>
            </div>
          \`;
        }
      </script>
    </body>
    </html>
  `;
};

/**
 * Generates an interactive Node.js live browser & terminal console preview page.
 * It simulates running Node.js with built-in modules (http, express, fs, path).
 */
export const getNodePreviewDoc = (userCode: string): string => {
  const escapedCode = JSON.stringify(userCode);

  return `
    <!DOCTYPE html>
    <html class="dark">
    <head>
      <meta charset="utf-8">
      <title>Node.js Virtual Server Runtime</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Inter', sans-serif;
        }
      </style>
      <script>
        tailwind.config = {
          darkMode: 'class',
          theme: {
            extend: {
              colors: {
                slate: { 850: '#1e293b', 950: '#020617' }
              }
            }
          }
        }
      </script>
    </head>
    <body class="bg-[#0b0f19] text-slate-100 min-h-screen flex flex-col p-4 gap-4 overflow-hidden h-screen">
      <!-- Top header bar -->
      <div class="flex items-center justify-between border-b border-slate-800/80 pb-3 shrink-0">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-sm font-black tracking-wide text-slate-200">Node.js Developer Isolate</h2>
              <span class="px-2 py-0.5 text-[9px] font-bold font-mono bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 uppercase tracking-widest animate-pulse">Running</span>
            </div>
            <p class="text-xs text-slate-400">Isolated V8 instance running Node.js v20.11.0</p>
          </div>
        </div>
        <div class="text-[10px] font-mono text-slate-400 flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>PORT 3000 mapped to public ingress</span>
        </div>
      </div>

      <!-- Main workspace split -->
      <div class="flex-1 flex flex-col md:flex-row gap-4 overflow-hidden min-h-0">
        <!-- Live Browser (Response preview) -->
        <div class="flex-1 flex flex-col bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <!-- Browser toolbar -->
          <div class="bg-slate-950/80 px-4 py-2 flex items-center gap-2 border-b border-slate-800 select-none">
            <div class="flex gap-1.5">
              <span class="w-3 h-3 rounded-full bg-rose-500/30"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/30"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/30"></span>
            </div>
            <div class="flex-1 max-w-md mx-auto flex items-center bg-slate-900 rounded-lg px-3 py-1 border border-slate-800/80">
              <svg class="w-3.5 h-3.5 text-slate-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <span class="text-xs text-slate-300 font-mono select-all">http://localhost:3000/</span>
            </div>
            <button onclick="location.reload()" class="p-1 text-slate-400 hover:text-slate-200 transition-colors" title="Restart Service">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15H19"/>
              </svg>
            </button>
          </div>

          <!-- Browser window workspace -->
          <div id="browser-view" class="flex-1 bg-white overflow-auto p-2">
            <div class="flex items-center justify-center h-full text-slate-400 text-sm">
              Connecting to Node.js server...
            </div>
          </div>
        </div>

        <!-- Terminal Output -->
        <div class="w-full md:w-1/2 flex flex-col bg-[#05070c] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div class="bg-slate-950 px-4 py-2 flex justify-between items-center border-b border-slate-800/80">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-slate-600 block"></span>
              <span class="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Node.js Server logs</span>
            </div>
            <button onclick="clearTerminal()" class="text-[10px] uppercase font-bold text-slate-500 hover:text-rose-400 transition-colors">Clear Console</button>
          </div>
          <div id="terminal-view" class="flex-1 p-4 font-mono text-xs overflow-y-auto flex flex-col gap-1.5 leading-relaxed text-slate-300 select-text">
            <!-- Logs injected here -->
          </div>
        </div>
      </div>

      <script>
        const terminalView = document.getElementById('terminal-view');
        const browserView = document.getElementById('browser-view');
        
        const logs = [];
        
        function addLog(text, type = 'info') {
          let color = 'text-slate-400';
          let prefix = '[INFO]';
          if (type === 'error') {
            color = 'text-rose-400 font-bold';
            prefix = '[ERROR]';
          } else if (type === 'warn') {
            color = 'text-amber-400';
            prefix = '[WARN]';
          } else if (type === 'system') {
            color = 'text-emerald-400 font-medium';
            prefix = '[SYSTEM]';
          } else if (type === 'http') {
            color = 'text-sky-400';
            prefix = '[HTTP]';
          } else if (type === 'log') {
            color = 'text-slate-200';
            prefix = '[LOG]';
          }
          
          const time = new Date().toLocaleTimeString();
          const logItem = document.createElement('div');
          logItem.className = \`py-0.5 border-b border-slate-900/30 flex items-start gap-2 \${color}\`;
          logItem.innerHTML = \`<span class="text-[9px] text-slate-600 shrink-0 font-sans mt-0.5">\${time}</span><span class="opacity-60 shrink-0 font-bold tracking-wider text-[10px]">\${prefix}</span><span class="whitespace-pre-wrap break-all">\${text}</span>\`;
          
          terminalView.appendChild(logItem);
          terminalView.scrollTop = terminalView.scrollHeight;
        }
        
        function clearTerminal() {
          terminalView.innerHTML = '';
          addLog("Console cleared.", "system");
        }
        
        function renderPreview(html) {
          browserView.innerHTML = '';
          const iframe = document.createElement('iframe');
          iframe.className = 'w-full h-full border-none bg-white rounded-xl';
          iframe.title = 'Node.js server response render';
          iframe.srcDoc = html;
          browserView.appendChild(iframe);
        }
        
        window.__nodeServerCallback = null;
        window.__expressRoutes = null;
        
        // Setup shims for require and Node environment
        addLog("Initializing Node.js Virtual Sandbox Environment...", "system");
        
        const require = function(moduleName) {
          if (moduleName === 'http') {
            return {
              createServer: function(cb) {
                window.__nodeServerCallback = cb;
                addLog("HTTP Server successfully created via http.createServer()", "system");
                return {
                  listen: function(port, hostOrCallback, cb) {
                    let callback = typeof hostOrCallback === 'function' ? hostOrCallback : cb;
                    addLog(\`Server started & listening on http://localhost:\${port}/\`, "system");
                    if (callback) {
                      setTimeout(() => {
                        try {
                          callback();
                        } catch(e) {
                          console.error(e);
                        }
                      }, 50);
                    }
                  }
                };
              }
            };
          }
          
          if (moduleName === 'express') {
            const express = function() {
              const routes = { get: {}, post: {}, put: {}, delete: {} };
              const app = {
                get: function(path, cb) {
                  routes.get[path] = cb;
                },
                post: function(path, cb) {
                  routes.post[path] = cb;
                },
                use: function(pathOrCallback, cb) {
                  // Standard use middleware stub
                },
                listen: function(port, cb) {
                  window.__expressRoutes = routes;
                  addLog(\`Express Server booted and listening on http://localhost:\${port}/\`, "system");
                  if (cb) {
                    setTimeout(() => {
                      try {
                        cb();
                      } catch(e) {
                        console.error(e);
                      }
                    }, 50);
                  }
                }
              };
              return app;
            };
            return express;
          }

          if (moduleName === 'koa') {
            const Koa = function() {
              const middlewares = [];
              return {
                use: function(fn) {
                  middlewares.push(fn);
                  addLog("Registered Koa middleware", "system");
                  return this;
                },
                listen: function(port, cb) {
                  addLog(\`Koa server booted & listening on http://localhost:\${port}/\`, "system");
                  window.__expressRoutes = {
                    get: {
                      '/': async (req, res) => {
                        const ctx = {
                          req, res,
                          request: { method: 'GET', url: '/' },
                          response: { status: 200, body: '' },
                          set body(val) {
                            this.response.body = val;
                          },
                          get body() {
                            return this.response.body;
                          },
                          set status(val) {
                            this.response.status = val;
                          }
                        };
                        try {
                          addLog("Executing Koa middleware stack...", "system");
                          for (const mw of middlewares) {
                            await mw(ctx, async () => {});
                          }
                          if (typeof ctx.response.body === 'object') {
                            res.json(ctx.response.body);
                          } else {
                            res.send(ctx.response.body || "Hello from Koa!");
                          }
                        } catch (e) {
                          addLog(\`Koa middleware error: \${e.message}\`, "error");
                        }
                      }
                    },
                    post: {}
                  };
                  if (cb) setTimeout(cb, 50);
                }
              };
            };
            return Koa;
          }

          if (moduleName === 'fastify') {
            const fastify = function(options) {
              const routes = { get: {}, post: {} };
              const instance = {
                get: function(path, cb) {
                  routes.get[path] = cb;
                },
                post: function(path, cb) {
                  routes.post[path] = cb;
                },
                listen: function({ port }, cb) {
                  const actualPort = port || (options && options.port) || 3000;
                  addLog(\`Fastify server booted & listening on http://localhost:\${actualPort}/\`, "system");
                  window.__expressRoutes = { get: {}, post: {} };
                  
                  Object.keys(routes.get).forEach(path => {
                    window.__expressRoutes.get[path] = function(req, res) {
                      addLog(\`Fastify handling GET \${path}\`, "system");
                      const reply = {
                        send: function(payload) {
                          if (typeof payload === 'object') {
                            res.json(payload);
                          } else {
                            res.send(payload);
                          }
                        },
                        code: function(statusCode) {
                          return this;
                        }
                      };
                      routes.get[path]({ headers: {}, query: {}, params: {} }, reply);
                    };
                  });
                  
                  Object.keys(routes.post).forEach(path => {
                    window.__expressRoutes.post[path] = function(req, res) {
                      addLog(\`Fastify handling POST \${path}\`, "system");
                      const reply = {
                        send: function(payload) {
                          if (typeof payload === 'object') {
                            res.json(payload);
                          } else {
                            res.send(payload);
                          }
                        },
                        code: function(statusCode) {
                          return this;
                        }
                      };
                      routes.post[path]({ headers: {}, body: {} }, reply);
                    };
                  });

                  if (cb) setTimeout(() => cb(null, \`http://localhost:\${actualPort}\`), 50);
                }
              };
              return instance;
            };
            return fastify;
          }

          if (moduleName === '@nestjs/common') {
            return {
              Controller: function(prefix = '') { return function(target) { target.prefix = prefix; }; },
              Get: function(path = '') { return function(target, key, descriptor) { descriptor.value.method = 'GET'; descriptor.value.path = path; }; },
              Post: function(path = '') { return function(target, key, descriptor) { descriptor.value.method = 'POST'; descriptor.value.path = path; }; },
              Module: function(metadata) { return function(target) {}; },
              Injectable: function() { return function(target) {}; }
            };
          }

          if (moduleName === '@nestjs/core') {
            return {
              NestFactory: {
                create: async function(appModule) {
                  addLog("NestFactory creating virtual NestJS application...", "system");
                  return {
                    listen: async function(port) {
                      addLog(\`NestJS Application successfully booted and listening on http://localhost:\${port}/\`, "system");
                      window.__expressRoutes = {
                        get: {
                          '/': (req, res) => {
                            res.send("Welcome to NestJS on NodeLab! Decorators resolved successfully.");
                          }
                        },
                        post: {}
                      };
                    }
                  };
                }
              }
            };
          }

          if (moduleName === 'zod') {
            const z = {
              string: () => ({
                email: () => z.string(),
                min: () => z.string(),
                max: () => z.string(),
                parse: (val) => {
                  if (typeof val !== 'string') throw new Error("Expected string, received " + typeof val);
                  return val;
                },
                safeParse: (val) => {
                  if (typeof val !== 'string') return { success: false, error: new Error("Expected string") };
                  return { success: true, data: val };
                }
              }),
              number: () => ({
                min: () => z.number(),
                max: () => z.number(),
                parse: (val) => {
                  if (typeof val !== 'number') throw new Error("Expected number, received " + typeof val);
                  return val;
                },
                safeParse: (val) => {
                  if (typeof val !== 'number') return { success: false, error: new Error("Expected number") };
                  return { success: true, data: val };
                }
              }),
              object: (shape) => ({
                parse: (val) => {
                  if (!val || typeof val !== 'object') throw new Error("Expected object, received " + typeof val);
                  const parsed = {};
                  Object.keys(shape).forEach(key => {
                    parsed[key] = shape[key].parse(val[key]);
                  });
                  return parsed;
                },
                safeParse: (val) => {
                  try {
                    return { success: true, data: z.object(shape).parse(val) };
                  } catch (e) {
                    return { success: false, error: e };
                  }
                }
              })
            };
            return { z };
          }

          if (moduleName === 'socket.io') {
            const Server = function(httpServer, options) {
              addLog("Socket.io WebSocket server attached to HTTP server", "system");
              const ioInstance = {
                on: function(event, cb) {
                  addLog(\`Socket.io registered event listener: "\${event}"\`, "system");
                  if (event === 'connection') {
                    setTimeout(() => {
                      addLog("Simulating active Socket.io client connection on WebSocket handshake", "system");
                      const clientSocket = {
                        id: "socket_client_3482",
                        on: function(clientEvent, clientCb) {
                          addLog(\`Socket.io client registered listener for "\${clientEvent}"\`, "system");
                        },
                        emit: function(emitEvent, emitData) {
                          addLog(\`Socket.io emitting event "\${emitEvent}" to client: \${JSON.stringify(emitData)}\`, "system");
                        }
                      };
                      cb(clientSocket);
                    }, 500);
                  }
                },
                emit: function(event, data) {
                  addLog(\`Socket.io broadcasting event "\${event}": \${JSON.stringify(data)}\`, "system");
                }
              };
              return ioInstance;
            };
            return { Server };
          }

          if (moduleName === 'dotenv') {
            return {
              config: function() {
                addLog("dotenv: Loaded environment variables from .env file into process.env", "system");
                process.env.DATABASE_URL = "postgresql://nodelab_user:secure_pwd@localhost:5432/production";
                process.env.JWT_SECRET = "super_secret_session_token_34892";
                return { parsed: { DATABASE_URL: process.env.DATABASE_URL, JWT_SECRET: process.env.JWT_SECRET } };
              }
            };
          }

          if (moduleName === 'jsonwebtoken') {
            return {
              sign: function(payload, secret, options) {
                addLog("jsonwebtoken: Signing standard JWT session token...", "system");
                const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
                const body = btoa(JSON.stringify(payload));
                return \`\${header}.\${body}.mock_signature\`;
              },
              verify: function(token, secret) {
                addLog("jsonwebtoken: Verifying session token integrity...", "system");
                try {
                  const parts = token.split('.');
                  if (parts.length !== 3) throw new Error("Invalid JWT token format");
                  return JSON.parse(atob(parts[1]));
                } catch (e) {
                  throw new Error("JWT verification failed: Invalid signature");
                }
              },
              decode: function(token) {
                try {
                  const parts = token.split('.');
                  return JSON.parse(atob(parts[1]));
                } catch {
                  return null;
                }
              }
            };
          }

          if (moduleName === 'helmet') {
            const helmet = function() {
              return function(req, res, next) {
                addLog("helmet: Injected secure HTTP headers (X-Frame-Options, CSP, HSTS, etc.)", "system");
                if (next) next();
              };
            };
            return helmet;
          }

          if (moduleName === 'cors') {
            const cors = function() {
              return function(req, res, next) {
                addLog("cors: Injected Cross-Origin Resource Sharing headers (Access-Control-Allow-Origin: *)", "system");
                if (next) next();
              };
            };
            return cors;
          }

          if (moduleName === 'mongoose') {
            const Schema = function(definition) {
              this.definition = definition;
            };
            const model = function(name, schema) {
              addLog(\`Mongoose registered collection model: "\${name}"\`, "system");
              return {
                find: async function() {
                  addLog(\`MongoDB: db.\${name.toLowerCase()}s.find() requested\`, "system");
                  return [
                    { _id: "507f1f77bcf86cd799439011", name: "Alice Johnson", email: "alice@nodelab.org" },
                    { _id: "507f1f77bcf86cd799439012", name: "Bob Smith", email: "bob@nodelab.org" }
                  ];
                },
                create: async function(data) {
                  addLog(\`MongoDB: db.\${name.toLowerCase()}s.insertOne(\${JSON.stringify(data)}) executed\`, "system");
                  return { _id: "507f19bfbc" + Math.floor(Math.random()*1000000), ...data };
                }
              };
            };
            return {
              connect: async function(uri) {
                addLog(\`Mongoose establishing persistent connection to: \${uri}\`, "system");
                return true;
              },
              Schema,
              model
            };
          }

          if (moduleName === 'sequelize') {
            const Sequelize = function(database, username, password, options) {
              addLog(\`Sequelize ORM connected to database: "\${database}"\`, "system");
              return {
                authenticate: async function() {
                  addLog("Sequelize authentication handshake successful.", "system");
                  return true;
                },
                define: function(modelName, attributes) {
                  addLog(\`Sequelize defined database model: "\${modelName}"\`, "system");
                  return {
                    sync: async function() {
                      addLog(\`Sequelize synchronized table structure for: "\${modelName}"\`, "system");
                      return this;
                    },
                    findAll: async function() {
                      addLog(\`Sequelize database query: SELECT * FROM \${modelName}s;\`, "system");
                      return [{ id: 1, name: "NodeLab User", active: true }];
                    },
                    create: async function(data) {
                      addLog(\`Sequelize: INSERT INTO \${modelName}s VALUES (\${JSON.stringify(data)})\`, "system");
                      return { id: Math.floor(Math.random()*100) + 1, ...data };
                    }
                  };
                },
                sync: async function() {
                  addLog("Sequelize synced database models with the schema.", "system");
                }
              };
            };
            (Sequelize as any).DataTypes = {
              STRING: "STRING",
              INTEGER: "INTEGER",
              BOOLEAN: "BOOLEAN"
            };
            return { Sequelize };
          }

          if (moduleName === '@prisma/client') {
            const PrismaClient = function() {
              addLog("PrismaClient connected to modern query engine core...", "system");
              return {
                $connect: async function() {
                  addLog("Prisma query engine connection handshake successful.", "system");
                },
                user: {
                  findMany: async function() {
                    addLog("Prisma query executed: prisma.user.findMany()", "system");
                    return [{ id: 1, name: "Prisma Champion", email: "prisma@nodelab.org" }];
                  },
                  create: async function({ data }) {
                    addLog(\`Prisma query executed: prisma.user.create(\${JSON.stringify(data)})\`, "system");
                    return { id: 12, ...data };
                  }
                }
              };
            };
            return { PrismaClient };
          }
          
          if (moduleName === 'path') {
            return {
              join: function(...args) { return args.join('/'); },
              resolve: function(...args) { return args.join('/'); }
            };
          }
          
          if (moduleName === 'fs') {
            return {
              readFileSync: function(filePath) {
                return \`Mock file content for: \${filePath}\`;
              },
              writeFileSync: function() {},
              writeFile: function(filePath, content, callback) {
                addLog(\`Writing user code snippet to: \${filePath}\`, "system");
                if (callback) setTimeout(callback, 50);
              },
              unlink: function(filePath, callback) {
                addLog(\`Cleaning up and deleting: \${filePath}\`, "system");
                if (callback) setTimeout(callback, 50);
              },
              existsSync: function() { return true; }
            };
          }
          
          if (moduleName === 'child_process') {
            return {
              exec: function(command, options, cb) {
                let callback = typeof options === 'function' ? options : cb;
                addLog(\`Spawning child process execution: \${command}\`, "system");
                
                setTimeout(() => {
                  if (callback) {
                    try {
                      const simulatedOutput = "My tech stack: Node.js, React, Express\\n";
                      callback(null, simulatedOutput, "");
                    } catch(e) {
                      callback(e, "", e.message);
                    }
                  }
                }, 200);
              }
            };
          }
          
          addLog(\`Module '\${moduleName}' resolved via mock shim.\`, "info");
          return {};
        };
        
        // Redirect standard console logs inside the runner
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        
        console.log = function(...args) {
          originalLog.apply(console, args);
          addLog(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '), 'log');
        };
        
        console.error = function(...args) {
          originalError.apply(console, args);
          addLog(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '), 'error');
        };
        
        console.warn = function(...args) {
          originalWarn.apply(console, args);
          addLog(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '), 'warn');
        };
        
        // Execute the user's Node.js source code
        try {
          const userCode = ${escapedCode};
          
          addLog("Running script: node server.js", "system");
          
          // Evaluate script in context of mock variables
          const evalFn = new Function('require', 'console', 'process', userCode);
          evalFn(require, console, { env: { PORT: 3000 } });
          
          // Trigger a simulated HTTP GET request to '/' to populate the mock browser frame
          setTimeout(() => {
            let hasServer = false;
            let responseHtml = "";
            
            const mockReq = {
              url: '/',
              method: 'GET',
              headers: { 'user-agent': 'NodeLab Browser Isolate v1.0' }
            };
            
            const mockRes = {
              writeHead: function(status, headers) {
                addLog(\`HTTP GET / request incoming... Status: \${status}\`, "http");
              },
              write: function(chunk) {
                responseHtml += chunk;
              },
              end: function(chunk) {
                if (chunk) responseHtml += chunk;
                addLog("Response fully sent back to Virtual Browser Frame.", "http");
                renderPreview(responseHtml);
              },
              send: function(chunk) {
                responseHtml = chunk;
                addLog("Response fully sent back to Virtual Browser Frame.", "http");
                renderPreview(responseHtml);
              },
              json: function(obj) {
                responseHtml = JSON.stringify(obj, null, 2);
                addLog("JSON response sent to Virtual Browser Frame.", "http");
                renderPreview(\`<pre style="font-family: 'JetBrains Mono', monospace; padding: 24px; font-size: 13px; background: #030712; color: #10b981; border-radius: 12px; border: 1px solid #1f2937; overflow: auto; max-width: 100%;">\${responseHtml}</pre>\`);
              }
            };
            
            if (window.__nodeServerCallback) {
              hasServer = true;
              window.__nodeServerCallback(mockReq, mockRes);
            } else if (window.__expressRoutes) {
              hasServer = true;
              if (window.__expressRoutes.get && window.__expressRoutes.get['/']) {
                window.__expressRoutes.get['/'](mockReq, mockRes);
              } else {
                const getPaths = Object.keys(window.__expressRoutes.get || {});
                const postPaths = Object.keys(window.__expressRoutes.post || {});
                
                let pathsHtml = "";
                getPaths.forEach(path => {
                  pathsHtml += \`
                    <div class="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-xl mb-2">
                      <div class="flex items-center space-x-2">
                        <span class="px-2 py-0.5 text-[10px] font-black bg-emerald-500/10 text-emerald-400 rounded">GET</span>
                        <code class="text-xs font-mono text-slate-200">\\\${path}</code>
                      </div>
                      <button onclick="triggerRoute('get', '\\\${path}')" class="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold rounded-lg transition-colors cursor-pointer select-none">Send Request</button>
                    </div>
                  \`;
                });
                postPaths.forEach(path => {
                  pathsHtml += \`
                    <div class="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-xl mb-2">
                      <div class="flex items-center space-x-2">
                        <span class="px-2 py-0.5 text-[10px] font-black bg-amber-500/10 text-amber-400 rounded">POST</span>
                        <code class="text-xs font-mono text-slate-200">\\\${path}</code>
                      </div>
                      <button onclick="triggerRoute('post', '\\\${path}')" class="px-3 py-1 bg-slate-750 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer select-none">Send Request</button>
                    </div>
                  \`;
                });

                if (getPaths.length === 0 && postPaths.length === 0) {
                  pathsHtml = \`<p class="text-xs text-slate-500 italic">No Express routes registered. Call app.get() or app.post() to register route handlers.</p>\`;
                }

                const explorerHtml = \`
                  <!DOCTYPE html>
                  <html>
                  <head>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
                    <style>
                      body { font-family: 'Inter', sans-serif; background-color: #030712; }
                    </style>
                  </head>
                  <body class="text-slate-100 p-6 min-h-screen">
                    <div class="max-w-2xl mx-auto bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl shadow-2xl">
                      <div class="flex items-center space-x-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l4.017 3.348a.75.75 0 010 1.15l-4.017 3.348a1.075 1.075 0 01-.405.864v.568C12.75 14.237 11.237 15 9.75 15h-.45A4.3 4.3 0 015 10.7V9.75M12.75 3.03c1.24 0 2.25 1.01 2.25 2.25v1.07c0 .414.168.812.47 1.102l1.012.98a1.5 1.5 0 010 2.116l-1.012.98a1.56 1.56 0 00-.47 1.102v1.07c0 1.24-1.01 2.25-2.25 2.25m-6.5-6.5h1.5" />
                          </svg>
                        </div>
                        <div>
                          <h2 class="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                            <span>Express.js API Explorer</span>
                            <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold tracking-wider uppercase">Live Mock</span>
                          </h2>
                          <p class="text-[10px] text-slate-400">NodeLab Virtual Express Router Instance</p>
                        </div>
                      </div>

                      <div class="mb-6">
                        <h3 class="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Registered Route Endpoints</h3>
                        <div class="max-h-56 overflow-y-auto pr-1">
                          \\\${pathsHtml}
                        </div>
                      </div>

                      <div class="border-t border-slate-800/80 pt-5">
                        <h3 class="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Interactive Server Response</h3>
                        <div id="responseContainer" class="bg-slate-950 border border-slate-850 p-4 rounded-xl min-h-[140px] flex items-center justify-center text-center font-mono text-xs text-slate-500">
                          Click "Send Request" above to dispatch a simulated HTTP request and inspect the response logs.
                        </div>
                      </div>
                    </div>

                    <script>
                      function triggerRoute(method, path) {
                        const container = document.getElementById('responseContainer');
                        container.innerHTML = '<span class="text-blue-400 animate-pulse">Dispatching HTTP ' + method.toUpperCase() + ' ' + path + '...</span>';
                        
                        setTimeout(() => {
                          try {
                            const parentRoutes = window.parent.__expressRoutes;
                            if (!parentRoutes || !parentRoutes[method] || !parentRoutes[method][path]) {
                              container.innerHTML = '<span class="text-rose-400">Error: Handler not found on parent server state.</span>';
                              return;
                            }

                            const handler = parentRoutes[method][path];
                            let responseText = "";

                            const mockReq = {
                              url: path,
                              method: method.toUpperCase(),
                              headers: { 'user-agent': 'NodeLab Browser Isolate v1.0' }
                            };

                            const mockRes = {
                              writeHead: function(status, headers) {},
                              write: function(chunk) {
                                responseText += chunk;
                              },
                              end: function(chunk) {
                                if (chunk) responseText += chunk;
                                renderResult(responseText, false);
                              },
                              send: function(chunk) {
                                responseText = chunk;
                                renderResult(responseText, false);
                              },
                              json: function(obj) {
                                responseText = JSON.stringify(obj, null, 2);
                                renderResult(responseText, true);
                              }
                            };

                            handler(mockReq, mockRes);

                            function renderResult(data, isJSONFormat) {
                              if (isJSONFormat) {
                                container.innerHTML = '<pre class="text-emerald-400 w-full overflow-auto text-left leading-relaxed max-h-64 font-mono text-[11px] bg-slate-950 p-3 rounded-lg border border-slate-800">' + data + '</pre>';
                              } else {
                                if (data.trim().startsWith("<")) {
                                  container.innerHTML = \\'<iframe class="w-full min-h-[160px] bg-white rounded-lg border-none" srcdoc="\\' + data.replace(/"/g, \\'&quot;\\') + \\'"></iframe>\\';
                                } else {
                                  container.innerHTML = \\'<pre class="text-slate-300 w-full overflow-auto text-left leading-relaxed max-h-64 font-mono text-[11px] bg-slate-950 p-3 rounded-lg border border-slate-800">\\' + data + \\'</pre>\\';
                                }
                              }
                            }

                          } catch (e) {
                            container.innerHTML = \\'<span class="text-rose-400 font-mono text-xs">Runtime Crash during route handling:<br><br>\\' + e.message + \\'</span>\\';
                          }
                        }, 200);
                      }
                    </script>
                  </body>
                  </html>
                \`;
                renderPreview(explorerHtml);
              }
            }
            
            if (!hasServer) {
              addLog("Script execution complete. (No web server was started, rendering logs only)", "system");
              renderPreview(\`
                <!DOCTYPE html>
                <html>
                <head>
                  <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body class="bg-slate-900 text-slate-100 flex items-center justify-center h-screen p-6 text-center select-none font-sans">
                  <div class="max-w-md bg-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl">
                    <div class="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h3 class="text-lg font-black tracking-tight mb-2 uppercase text-white">Execution Success</h3>
                    <p class="text-xs text-slate-400 leading-relaxed mb-4">This Node.js script ran to completion. Check the <b>Terminal Output</b> panel on the right for standard console logs.</p>
                  </div>
                </body>
                </html>
              \`);
            }
          }, 300);
          
        } catch(error) {
          addLog(error.message + "\\n" + error.stack, "error");
          renderPreview(\`
            <!DOCTYPE html>
            <html>
            <head>
              <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body class="bg-slate-900 text-slate-100 flex items-center justify-center h-screen p-6 text-center select-none font-sans">
              <div class="max-w-xl bg-slate-950 border border-rose-500/20 p-8 rounded-3xl shadow-2xl text-left">
                <div class="w-12 h-12 bg-rose-500/10 text-rose-400 rounded-full flex items-center justify-center mb-4">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-black tracking-tight mb-2 uppercase text-rose-400">Isolate Runtime Crash</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4 font-medium">Your Node.js script failed during live compilation or initial execution. Check the detailed traceback trace below.</p>
                <pre class="bg-black/50 p-4 rounded-2xl font-mono text-xs overflow-auto max-h-48 text-rose-300 leading-relaxed border border-rose-950/40">\s{error.message}\\n\\n\s{error.stack}</pre>
              </div>
            </body>
            </html>
          \`);
        }
      </script>
    </body>
    </html>
  `;
};
