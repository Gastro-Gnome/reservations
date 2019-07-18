//generate an array of objects to pass to the model for document creation
const db = require("./index.js");
const Model = require("./model.js");
const mockData = require("./mockData.js");

const seed = function() {
console.log("seed script initiated");

   Model.insertMany(mockData, (err, docs) => {
       if (err) {
           console.error(err);
       } else {
           console.log("success");
       }
   })
};

seed();

module.exports = seed;