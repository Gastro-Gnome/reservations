const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
    biz_id: Number,
    hoursByDay: {
       Mon: {
          open_at: Number,
          close_at: Number
       }
    }
 });

module.exports = hoursSchema;