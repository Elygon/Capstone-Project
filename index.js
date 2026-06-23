// 1. Import Express
const express = require('express');
const  { sendWelcomeEmail } = require("./utils/nodemailer");

// 2. Initialize the Express application
const app = express();
const port = 3000;

// 3. Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, Deebugger from Express!');
});

// 4. Define an additional route just to show how easy routing is
app.get('/api/user', (req, res) => {
  // Express automatically stringifies objects into JSON and sets the Content-Type header
  res.json({
    id: 1,
    name: 'Alex Developer',
    status: 'Coding'
  });
  sendWelcomeEmail("soundmindtesting@gmail.com")
});

// 5. Start the server
app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`);
});