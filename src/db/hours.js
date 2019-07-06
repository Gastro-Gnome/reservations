var mongoose = require("mongoose");

 mongoose.connect("mongodb://127.0.0.1/reservations", {useNewUrlParser: true});

 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', () => {
     console.log("we're connected!");
     //SCHEMA
     //init definition
     var hoursSchema = new mongoose.Schema({
        biz_id: Number
     })
     //expand Schema to include a business day
     hoursSchema.add({
        0: {open_hr: Number,
        close_hr: Number}
     });
     //define model
     var HoursItem = mongoose.model("HoursItem", hoursSchema);
     //init document for testing purposes
     var someRestaurantHours = new HoursItem({
         biz_id: 1,
         0: {open_hr: 1000,
            close_hr: 2000 }
        });
     console.log(someRestaurantHours);
     //save the document to db
     someRestaurantHours.save((err) => {
         if(err) {
             return renderError(err);
         }
        });
 })