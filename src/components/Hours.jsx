import React, { Component } from "react";
import styles from "../main.css";

class Hours extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log("from Hours")
        console.log(props);
    }
    render() {
        return(
            <h1>Alp</h1>
            //     <div className="service business-hours">
            //         <div className="test">goodbye</div>
            //         <h3>Hours</h3>
            //         <table className="table-hours">
            //             <tbody>
            //                 <tr><th>Mon</th><td><span>{props.hoursItem.Mon.open_at}</span> - <span>{props.hoursItem.Mon.close_at}</span></td><td className="extra">Open now</td></tr>
            //                 <tr><th>Tue</th><td><span>{props.hoursItem.Tue.open_at}</span> - <span>{props.hoursItem.Tue.close_at}</span></td><td className="extra"></td></tr>
            //                 <tr><th>Wed</th><td><span>{props.hoursItem.Wed.open_at}</span> - <span>{props.hoursItem.Wed.close_at}</span></td><td className="extra"></td></tr>
            //                 <tr><th>Thu</th><td><span>{props.hoursItem.Thu.open_at}</span> - <span>{props.hoursItem.Thu.close_at}</span></td><td className="extra"></td></tr>
            //                 <tr><th>Fri</th><td><span>{props.hoursItem.Fri.open_at}</span> - <span>{props.hoursItem.Fri.close_at}</span></td><td className="extra"></td></tr>
            //                 <tr><th>Sat</th><td><span>{props.hoursItem.Sat.open_at}</span> - <span>{props.hoursItem.Sat.close_at}</span></td><td className="extra"></td></tr>
            //                 <tr><th>Sun</th><td><span>{props.hoursItem.Sun.open_at}</span> - <span>{props.hoursItem.Sun.close_at}</span></td><td className="extra"></td></tr>
            //             </tbody>
            //         </table>
            //     </div> 
            )
    }
}
export default Hours;