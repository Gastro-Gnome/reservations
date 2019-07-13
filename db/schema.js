const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
    biz_hrs: [
        {0: {
            open_at: String,
            close_at: String
        }},
        {1: {
            open_at: String,
            close_at: String
        }},
        {2: {
            open_at: String,
            close_at: String
        }},
        {3: {
            open_at: String,
            close_at: String
        }},
        {4: {
            open_at: String,
            close_at: String
        }},
        {5: {
            open_at: String,
            close_at: String
        }},
        {6: {
            open_at: String,
            close_at: String
        }}
    ]
})

module.exports = hoursSchema;