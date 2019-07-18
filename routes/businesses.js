const express = require("express");
const router = express.Router();
const db = require("../db/index.js");
const Model = require("../db/model.js");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.get('/', async (req, res, next) => {
    let query = await Model.find();

  res.send(query);
});

module.exports = router;