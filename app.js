const path = require("path")
const express = require("express");
const app = express();
const businessesRouter = require("./routes/businesses.js");
const port = 3004;

app.use("/", express.static("./dist"));
app.use("/reservations", express.static("./dist/bundle.js"));
app.use("/businesses", businessesRouter);


app.listen(port, console.log(`Reservations listening on port ${port}!`));

module.exports = app;