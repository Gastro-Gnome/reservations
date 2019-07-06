var mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost/reservations", {useNewUrlParser: true});

 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', () => {
     console.log("we're connected!");
     //SCHEMA
     //init definition
     var hoursSchema = new mongoose.Schema({
        biz_id: Number
     })
     //define model
     var HoursItem = mongoose.model("HoursItem", hoursSchema);
     //init document for testing purposes
     var someRestaurantHours = new HoursItem({biz_id: 1});
     console.log(someRestaurantHours);
     //expand schema to incl. a single day of the week
     hoursSchema.add({
        0: {open_hr: Number,
        close_hr: Number}
     });
 })