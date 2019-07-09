//generate an array of objects to pass to the model for document creation
const db = require("./index.js");
const Model = require("./model.js");
const mockData = require("./mockData.js");

const seed = function() {
    //TODO
    console.log("seed script initiated");
   //an array of gizhoursItems
   Model.insertMany(mockData, (err, docs) => {
       if (err) {
           console.error(err);
       } else {
           console.log(docs);
       }
   })
};

module.exports = seed;