const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
    biz_id: Number,
    days: [
        {
            day: Number,
            open: Boolean,
            open_at: String,
            close_at: String
        },
        {
            day: Number,
            open: Boolean,
            open_at: String,
            close_at: String
        },
        {
            day: Number,
            open: Boolean,
            open_at: String,
            close_at: String
        },
        {
            day: Number,
            open: Boolean,
            open_at: String,
            close_at: String
        },
        {
            day: Number,
            open: Boolean,
            open_at: String,
            close_at: String
        },
        {
            day: Number,
            open: Boolean,
            open_at: String,
            close_at: String
        },
        {
            day: Number,
            open: Boolean,
            open_at: String,
            close_at: String
        }
    ]
})

module.exports = hoursSchema;