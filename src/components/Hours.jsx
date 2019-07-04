import React from "react";

const Hours = () => {
    return(
        <div className="service business-hours">
            <h3>Hours</h3>
            <table className="table-hours">
                <tbody>
                    <tr><th scope="row">M</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row">T</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row">W</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                    <tr><th scope="row">R</th><td><span>9:00am</span> - <span>5:00pm</span></td><td className="extra"></td></tr>
                </tbody>
            </table>
        </div>
    )
}
export default Hours;