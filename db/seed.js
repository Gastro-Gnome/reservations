//generate an array of objects to pass to the model for document creation
const HoursItem = require("./model.js");
const seed = () => {
    console.log(`seed script running`);
    //provide a biz id
    let bizId = 0;
    //provide a start time
    let currentOpen = 7;
    //provide a close time
    let currentClose = 18;
    //provide skeleton object
    let hoursInstance = {
        biz_id: undefined,
        hoursByDay: {
            Mon: {
                open_hr: undefined,
                close_hr: undefined
            }
        }
    };
    //generate numbers for multiple instances
    while (bizId < 10) {
        console.log(`loop running in seed script`);
        //no open_hr earlier that 7am, later than 5pm
        if (currentOpen === 18) {
            currentOpen = 7;
        }
        //no close_hr earlier than 5pm, later than 3am
        if (currentClose === 3) {
            currentClose = 18;
        }else if (currentClose === 25) {
            currentClose = 0;
        }
        //ASSIGN
        hoursInstance.biz_id = bizId;
        hoursInstance.hoursByDay.Mon.open_hr = currentOpen;
        hoursInstance.hoursByDay.Mon.close_hr = currentClose;
        //INSERT
        let currentInstance = new HoursItem(hoursInstance);
        //async fn, refactor
        currentInstance.save((err) => {
            if(err) {
                return renderError(err);
            }
    })
        //INCREMENT VARIABLES
        bizId ++
        currentOpen ++;
        currentClose ++;
    }

}

module.exports = seed;