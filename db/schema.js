const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
    biz_id: Number,
    hoursByDay: {
      Mon: {
          open_at: String,
          close_at: String
      },
      Tue: {
          open_at: String,
          close_at: String
      },
      Wed: {
          open_at: String,
          close_at: String
      },
      Thu: {
          open_at: String,
          close_at: String
      },
      Fri: {
          open_at: String,
          close_at: String
      },
      Sat: {
          open_at: String,
          close_at: String
      },
      Sun: {
          open_at: String,
          close_at: String
      }
  }
 });

hoursSchema.methods.findBizById = async function(number) {
   let query = await HoursItem.find({
       biz_id: number
   })
   return query;
}
module.exports = hoursSchema;