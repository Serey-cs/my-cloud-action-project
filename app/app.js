const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Send the updated greeting message here
  res.send('Hello, GitHub Actions Updated!');
});

// Only start the server if this file is run directly (not required by tests)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

// Export app for testing purposes
module.exports = app;
