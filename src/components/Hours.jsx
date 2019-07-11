import React from "react";

const Hours = () => {
    return(
        <div className="service business-hours">
            <h3>Hours</h3>
            <table className="table-hours">
                <tbody>
                    <tr><th>Mon</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th>Tue</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th>Wed</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th>Thu</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th>Fri</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th>Sat</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th>Sun</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
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
