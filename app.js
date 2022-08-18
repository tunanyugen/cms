const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

app.listen(port);