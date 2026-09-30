const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1>Welcome to CI/CD</h1>"));

// Only start listening when run directly, so the test can start it itself
if (require.main === module) app.listen(3000);

module.exports = app;