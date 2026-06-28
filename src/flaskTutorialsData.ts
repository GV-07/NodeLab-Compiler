import { TutorialTopic } from './cssTutorialsData';

export const FLASK_TOPICS: TutorialTopic[] = [
  {
    id: 'flask-intro',
    title: 'Flask Intro',
    description: 'Learn the core concepts of Flask, a lightweight WSGI micro web framework for Python.',
    explanation: [
      'Flask is a micro-framework because it does not require specific tools, libraries, or database layers.',
      'It provides routing, template rendering, cookies, and error handling out of the box.',
      'Flask is highly extensible, allowing developers to add custom features via pluggable extensions.'
    ],
    code: `from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello World from Flask!"

if __name__ == "__main__":
    app.run()`,
    languageId: 'python'
  },
  {
    id: 'flask-installation',
    title: 'Flask Installation & Environment',
    description: 'Setting up Python virtual environments and installing the Flask library package.',
    explanation: [
      'It is best practice to install Flask inside a Python virtual environment (venv) to isolate dependencies.',
      'Create the environment, activate it in your shell, and run pip install Flask.',
      'You can verify the installation by running the flask --version command.'
    ],
    code: `# Creating and activating virtual environment, then installing Flask
python3 -m venv venv
source venv/bin/activate
pip install Flask`,
    languageId: 'python'
  },
  {
    id: 'flask-app-setup',
    title: 'Flask Application Setup',
    description: 'Configuring variables and starting the Flask development server.',
    explanation: [
      'The flask run command launches the local development server.',
      'You can configure server parameters by setting variables like FLASK_APP and FLASK_DEBUG.',
      'Enabling debug mode provides a helpful interactive debugger in the browser if exceptions occur.'
    ],
    code: `export FLASK_APP=app.py
export FLASK_DEBUG=1
flask run`,
    languageId: 'python'
  },
  {
    id: 'flask-routing',
    title: 'Flask Routing & Dynamic URLs',
    description: 'Mapping URLs to Python functions and parsing dynamic path parameters.',
    explanation: [
      'Flask uses the @app.route() decorator to bind URLs directly to python handler functions.',
      'You can capture dynamic variables from the path using bracket annotations: <converter:variable_name>.',
      'Converters include string (default), int, float, and path.'
    ],
    code: `from flask import Flask
app = Flask(__name__)

@app.route("/user/<username>")
def show_user_profile(username):
    return f"User: {username}"

@app.route("/post/<int:post_id>")
def show_post(post_id):
    return f"Post ID: {post_id}"`,
    languageId: 'python'
  },
  {
    id: 'flask-http-methods',
    title: 'Flask HTTP Methods (GET/POST)',
    description: 'Handling different HTTP verbs like GET, POST, PUT, and DELETE in route definitions.',
    explanation: [
      'By default, Flask routes only accept GET requests.',
      'To handle form submissions or API requests, pass the methods parameter to the route decorator.',
      'You can check the current request method using the request object imported from flask.'
    ],
    code: `from flask import request

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        return "Logging you in..."
    else:
        return "Displaying login form..."`,
    languageId: 'python'
  },
  {
    id: 'flask-templates',
    title: 'Flask Templates (Jinja2 Rendering)',
    description: 'Using the Jinja2 template engine to render dynamic HTML templates.',
    explanation: [
      'Flask integrates with Jinja2 to render dynamic HTML layouts from the templates/ directory.',
      'Use the render_template() function to output a page template with custom variables.',
      'Jinja2 supports template inheritance, conditional tags, loop iterations, and variable placeholders.'
    ],
    code: `<!-- templates/hello.html -->
<!DOCTYPE html>
<html>
<body>
  {% if name %}
    <h1>Hello {{ name }}!</h1>
  {% else %}
    <h1>Hello Guest!</h1>
  {% endif %}
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'flask-static-files',
    title: 'Flask Static Files (CSS/JS Integration)',
    description: 'Loading static assets like stylesheets, scripts, and images from the static/ directory.',
    explanation: [
      'Flask maps a /static/ URL endpoint to files stored inside the static/ root directory.',
      'Use the url_for() helper function to generate correct absolute paths for your assets.',
      'This guarantees asset links work properly even if your route URLs change structure.'
    ],
    code: `<!-- Linking CSS stylesheet dynamically -->
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">`,
    languageId: 'html'
  },
  {
    id: 'flask-request-object',
    title: 'Flask Request Object',
    description: 'Accessing query parameters, post data, and HTTP headers.',
    explanation: [
      'The global request object holds details about the incoming HTTP request.',
      'Use request.args to read GET query string parameters (e.g. ?q=search).',
      'Use request.form to read submitted POST form field variables.'
    ],
    code: `from flask import request

@app.route("/search")
def search():
    query = request.args.get("q", "")
    return f"Searching for: {query}"`,
    languageId: 'python'
  },
  {
    id: 'flask-cookies-sessions',
    title: 'Flask Cookies & Sessions',
    description: 'Storing client-side preferences and keeping track of user sessions.',
    explanation: [
      'Cookies store temporary preferences in the browser. You set cookies on the response object.',
      'Sessions encrypt and store user-specific data inside cookie containers securely.',
      'To use sessions, you must configure a unique app.secret_key to encrypt the session details.'
    ],
    code: `from flask import session, redirect, url_for

app.secret_key = 'super-secret-key-phrase'

@app.route("/set-session")
def set_session():
    session['username'] = 'john_doe'
    return "Session configured!"`,
    languageId: 'python'
  },
  {
    id: 'flask-redirect-errors',
    title: 'Flask Redirect & Errors',
    description: 'Handling redirects, returning custom HTTP status codes, and building 404 pages.',
    explanation: [
      'Use the redirect() function to send users to alternative paths, paired with url_for() for safety.',
      'Use abort() to stop requests early and return custom HTTP error codes (e.g., abort(403)).',
      'The @app.errorhandler() decorator lets you override default error responses with styled layouts.'
    ],
    code: `from flask import redirect, url_for, abort

@app.route("/admin")
def admin():
    # Redirect to home route
    return redirect(url_for('home'))

@app.errorhandler(404)
def page_not_found(error):
    return "This page does not exist!", 404`,
    languageId: 'python'
  },
  {
    id: 'flask-file-uploads',
    title: 'Flask File Uploads',
    description: 'Receiving, validating, and saving file uploads on the server.',
    explanation: [
      'Form tags must specify enctype="multipart/form-data" to support file transfers.',
      'Access transmitted files on the server using the request.files dictionary container.',
      'Always sanitize file names using Werkzeug secure_filename() before saving to disk to prevent directory traversal exploits.'
    ],
    code: `from werkzeug.utils import secure_filename
import os

@app.route("/upload", methods=["POST"])
def upload_file():
    file = request.files["file"]
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join("/uploads", filename))
        return "File uploaded successfully!"`,
    languageId: 'python'
  },
  {
    id: 'flask-extensions',
    title: 'Flask Extensions (SQLAlchemy/WTForms)',
    description: 'Adding database integrations and form validation layers using extensions.',
    explanation: [
      'Flask extensions add rich features while keeping the core library small and decoupled.',
      'Flask-SQLAlchemy provides an ORM wrapper to interact with relational databases (SQLite, PostgreSQL).',
      'Flask-WTF integrates security token verification and validation rules directly into HTML forms.'
    ],
    code: `from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)`,
    languageId: 'python'
  }
];
