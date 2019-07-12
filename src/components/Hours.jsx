import React from "react";
import styles from "../main.css";
//Pass props to Hours
//if the api call is not done, do not render

const Hours = () => {
    return(
        <div className="service business-hours">
            <h3>Hours</h3>
            <table className="table-hours">
                <tbody>
                    <tr><th>Mon</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra">Open Now</td></tr>
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
