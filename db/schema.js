const mongoose = require("mongoose");

const hoursSchema = new mongoose.Schema({
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
 });

module.exports = hoursSchema;