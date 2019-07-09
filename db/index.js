const mongoose = require("mongoose");
const Model = require("./model.js");

mongoose.connect("mongodb://127.0.0.1/test", {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;