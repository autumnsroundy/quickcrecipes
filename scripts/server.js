const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const dataFilePath = path.join(__dirname, "recipeRequests.json");

app.post("/saveRecipeRequest", (req, res) => {
    const newRequest = req.body;

    fs.readFile(dataFilePath, (err, data) => {
        let recipeRequests = [];
        if (!err && data.length > 0) {
            recipeRequests = JSON.parse(data);
        }

        recipeRequests.push(newRequest);

        fs.writeFile(dataFilePath, JSON.stringify(recipeRequests, null, 2), (writeErr) => {
            if (writeErr) {
                res.status(500).json({ message: "Error saving request." });
            } else {
                res.status(200).json({ message: "Request saved successfully!" });
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
