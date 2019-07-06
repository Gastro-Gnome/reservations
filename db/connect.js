const mongoose = require("mongoose");
const hoursSchema = require("./schema.js");
const HoursItem = require("./model.js");
const seed = require("./seed.js");

mongoose.connect("mongodb://127.0.0.1/reservations", {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
   console.log("we're connected!");
   //seed from script
   seed();
})