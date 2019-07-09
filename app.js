const path = require("path")
const express = require("express");
const app = express();
const businessesRouter = require("./routes/businesses.js");
const port = 3000;

app.use("/", express.static("./dist"));
app.use("/businesses", businessesRouter);


app.listen(port, console.log(`Apertif Reserv listening on port ${port}!`));

module.exports = app;