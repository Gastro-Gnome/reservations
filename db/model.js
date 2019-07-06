const mongoose = require("mongoose");
const hoursSchema = require("./schema.js");

const HoursItem = mongoose.model("hours_item", hoursSchema);

module.exports = HoursItem;