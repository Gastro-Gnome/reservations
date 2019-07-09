const mongoose = require("mongoose");
const hoursSchema = require("./schema.js");

const HoursItem = mongoose.model("HoursItem", hoursSchema);

//TEST

let someBizHours = {
    biz_id: 23,
    hoursByDay: {
        Mon: {
            open_at: 8,
            close_at: 21
        }
    }
}

module.exports = HoursItem;