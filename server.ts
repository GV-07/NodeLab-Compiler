import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { OAuth2Client } from "google-auth-library";
import session from "express-session";
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Google OAuth setup
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const sessionSecret = process.env.SESSION_SECRET || "nodelab-secret-key";

  const client = new OAuth2Client(googleClientId, googleClientSecret);

  app.use(express.json());
  app.use(cookieParser());

  // App URL for redirect URI
  const getAppUrl = (req: express.Request) => {
    return process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
  };

  // Configure session for iframe compatibility
  app.use(
    session({
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      proxy: true, // Required for secure cookies behind proxy
      cookie: {
        secure: true, // Required for SameSite=None
        sameSite: "none", // Required for cross-origin iframe
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
    })
  );

  // Authentication Routes
  app.get("/api/auth/google/url", (req, res) => {
    if (!googleClientId || !googleClientSecret) {
      return res.status(500).json({ error: "Google OAuth credentials not configured" });
    }

    const redirectUri = `${getAppUrl(req)}/auth/callback`;
    const url = client.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile", 
        "https://www.googleapis.com/auth/userinfo.email",
        "openid"
      ],
      redirect_uri: redirectUri,
      prompt: 'consent'
    });

    res.json({ url });
  });

    app.get("/auth/callback", async (req, res) => {
    const { code, error: queryError } = req.query;

    if (queryError) {
      console.error("OAuth Query Error:", queryError);
      return res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_ERROR', error: '${queryError}' }, '*');
                window.close();
              } else {
                window.location.href = '/?error=${queryError}';
              }
            </script>
          </body>
        </html>
      `);
    }

    if (!code || typeof code !== "string") {
      return res.status(400).send("Unauthorized: Missing code");
    }

    try {
      const redirectUri = `${getAppUrl(req)}/auth/callback`;
      const { tokens } = await client.getToken({
        code,
        redirect_uri: redirectUri,
      });

      client.setCredentials(tokens);

      const ticket = await client.verifyIdToken({
        idToken: tokens.id_token!,
        audience: googleClientId,
      });

      const payload = ticket.getPayload();
      if (payload) {
        // Store user in session
        (req.session as any).user = {
          id: payload.sub,
          name: payload.name,
          email: payload.email,
          picture: payload.picture,
        };
      }

      // Send success message to parent window and close popup
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS' }, '*');
                window.close();
              } else {
                window.location.href = '/';
              }
            </script>
          </body>
        </html>
      `);
    } catch (error: any) {
      console.error("Auth callback error:", error);
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_ERROR', error: 'Authentication failed' }, '*');
                window.close();
              } else {
                window.location.href = '/?error=auth_failed';
              }
            </script>
          </body>
        </html>
      `);
    }
  });

  app.post("/api/auth/google/verify", async (req, res) => {
    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ error: "No credential provided" });
    }

    try {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: googleClientId,
      });

      const payload = ticket.getPayload();
      if (payload) {
        const user = {
          id: payload.sub,
          name: payload.name,
          email: payload.email,
          picture: payload.picture,
        };
        (req.session as any).user = user;
        res.json({ user });
      } else {
        res.status(400).json({ error: "Invalid token payload" });
      }
    } catch (error) {
      console.error("Token verification error:", error);
      res.status(500).json({ error: "Failed to verify token" });
    }
  });

  app.get("/api/auth/me", (req, res) => {
    const user = (req.session as any).user;
    if (user) {
      res.json({ user });
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Could not log out" });
      }
      res.clearCookie("connect.sid");
      res.json({ success: true });
    });
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
