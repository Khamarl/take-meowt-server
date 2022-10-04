// Main code for the server app
// Will use express.js
const express = require("express");
const cors = require("cors");

function middleSetup(app) {
    app.use(cors()); // Allow cross-origin requests
    app.use(express.json()); // Allow app to read the body of POST requests
}

const app = express();


middleSetup(app);

module.exports = { app }
