import React from "react";
//call the server for biz hours
//pass a bizhoursItem from the database
//to hours component
//th attr name is var to render content

const Hours = () => {
    return(
        <div className="service business-hours">
            <h3>Hours</h3>
            <table className="table-hours">
                <tbody>
                    <tr><th scope="row"name="Mon">Mon</th><td><span value="0900">TODO</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row"name="Tue">Tue</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row"name="Wed">Wed</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row"name="Thu">Thu</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row"name="Fri">Fri</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row"name="Sat">Sat</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row"name="Sun">Sun</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                </tbody>
            </table>
        </div> 
    )
}
export default Hours;