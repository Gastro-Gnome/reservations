const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
    biz_hrs: [
        {0: {
            is_open: Boolean,
            open_at: String,
            close_at: String
        }},
        {1: {
            is_open: Boolean,
            open_at: String,
            close_at: String
        }},
        {2: {
            is_open: Boolean,
            open_at: String,
            close_at: String
        }},
        {3: {
            is_open: Boolean,
            open_at: String,
            close_at: String
        }},
        {4: {
            is_open: Boolean,
            open_at: String,
            close_at: String
        }},
        {5: {
            is_open: Boolean,
            open_at: String,
            close_at: String
        }},
        {6: {
            is_open: Boolean,
            open_at: String,
            close_at: String
        }}
    ]
})

module.exports = hoursSchema;