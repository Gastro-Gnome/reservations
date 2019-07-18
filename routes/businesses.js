const express = require("express");
const router = express.Router();
const db = require("../db/index.js");
const Model = require("../db/model.js");
const seed = require("../db/seed.js");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.get('/', async (req, res, next) => {
    //TODO
    //allow for CORS -- access-control-allow-origin
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