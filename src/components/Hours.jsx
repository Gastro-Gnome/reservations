import React from "react";
//TODO
//generate tr from props

const Hours = (props) => {
    console.log(props.hoursItem);
    let tdVal = "dayOfReckoning";
    if (props.hoursItem) {
        console.log(props.hoursItem.hoursByDay);
        tdVal = props.hoursItem.hoursByDay.Mon.open_at;
    }
    return(
        <div className="service business-hours">
            <h3>Hours</h3>
            <table className="table-hours">
                <tbody>
                    <tr><td>{tdVal}</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    )
    
}
export default Hours;

// //hardcoded table rows

// <tr><th scope="row"name="Mon">Mon</th><td><span value="0900">TODO</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
// <tr><th scope="row"name="Tue">Tue</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
// <tr><th scope="row"name="Wed">Wed</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
// <tr><th scope="row"name="Thu">Thu</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
// <tr><th scope="row"name="Fri">Fri</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
// <tr><th scope="row"name="Sat">Sat</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
// <tr><th scope="row"name="Sun">Sun</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
