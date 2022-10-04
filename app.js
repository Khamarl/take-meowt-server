const express = require("express");
const cors = require("cors");

function middleSetup(app) {
    app.use(cors()); // Allow cross-origin requests
    app.use(express.json()); // Allow app to read the body of POST requests
}

// TODO Read generated dogs from a file

const app = express();

middleSetup(app);

// TODO Setup routes

module.exports = { app }
