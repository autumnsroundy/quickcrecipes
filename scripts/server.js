// server.js
// Express.js server for handling recipe requests
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;
const dataFilePath = path.join(__dirname, "recipeRequests.json");

app.use(express.json());
app.use(express.static("public"));

app.post("/saveRecipeRequest", (req, res) => {
    fs.readFile(dataFilePath, (err, data) => {
        const requests = !err && data.length ? JSON.parse(data) : [];
        requests.push(req.body);
        fs.writeFile(dataFilePath, JSON.stringify(requests, null, 2), writeErr => {
            res.status(writeErr ? 500 : 200).json({ message: writeErr ? "Error saving request." : "Request saved successfully!" });
        });
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
