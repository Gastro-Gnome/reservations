const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
    biz_id: Number,
    hoursByDay: {
       Mon: {
          open_hr: Number,
          close_hr: Number
       }
    }
 });

module.exports = hoursSchema;