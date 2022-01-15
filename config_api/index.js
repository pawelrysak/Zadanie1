// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

app.get("/current", async (req, res) => {
    res.send("Current Configuration: 10422313213");
});

app.listen(4000, (err) => {
    console.log("Listening");
});
