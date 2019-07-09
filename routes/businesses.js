const express = require("express");
const router = express.Router();
const db = require("../db/index.js");
const Model = require("../db/model.js");

let someBizHours = {
    biz_id: 23,
    hoursByDay: {
        Mon: {
            open_at: 8,
            close_at: 21
        }
    }
}

router.get('/', (req, res, next) => {
    //TODO -- query the db for hoursItems bizId 1
    console.log("/businesses received a GET request");
    //instantiate doc
    let someBizHoursDoc = new Model(someBizHours);
    someBizHoursDoc.save((error) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Saved!");
        }
    })

  res.end();
});

module.exports = router;