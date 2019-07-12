const mongoose = require("mongoose");
const hoursSchema = require("./schema.js");

const HoursItem = mongoose.model("HoursItem", hoursSchema);

module.exports = HoursItem;