const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
    biz_id: Number,
    days: [
        {
            day: Number,
            open: Boolean,
            open_at: Number,
            close_at: Number
        },
        {
            day: Number,
            open: Boolean,
            open_at: Number,
            close_at: Number
        },
        {
            day: Number,
            open: Boolean,
            open_at: Number,
            close_at: Number
        },
        {
            day: Number,
            open: Boolean,
            open_at: Number,
            close_at: Number
        },
        {
            day: Number,
            open: Boolean,
            open_at: Number,
            close_at: Number
        },
        {
            day: Number,
            open: Boolean,
            open_at: Number,
            close_at: Number
        },
        {
            day: Number,
            open: Boolean,
            open_at: Number,
            close_at: Number
        }
    ]
})

module.exports = hoursSchema;