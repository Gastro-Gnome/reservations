const express = require("express");
const router = express.Router();
const db = require("../db/index.js");
const Model = require("../db/model.js");
const seed = require("../db/seed.js");

router.get('/', async (req, res, next) => {
    //TODO -- query the db for hoursItems bizId 1
    console.log("/businesses < GET request");
    let query = await Model.find();

  res.send(query);
});

router.post('/', (req, res, next) => {
    console.log("/businesses < POST request");
    //TODO -- seed db from script
    seed();
    res.end()
})

module.exports = router;