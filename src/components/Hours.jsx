import React, { Component } from "react";
import styles from "../main.css";

class Hours extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: this.props.time.getDay(),
            hour: this.props.time.getHours()
        }
    }
    componentDidMount() {
        //TODO
    }
    dailyStatus() {
       // if (this.state.day === the element day)
    }
    render() {
        return(
                <div className="service business-hours">
                    <h3>Hours</h3>
                    <table className="table-hours">
                        <tbody>
                            <tr><th>Mon</th><td><span>{this.props.hoursItem.Mon.open_at}</span> - <span>{this.props.hoursItem.Mon.close_at}</span></td><td className="extra">Open now</td></tr>
                            <tr><th>Tue</th><td><span>{this.props.hoursItem.Tue.open_at}</span> - <span>{this.props.hoursItem.Tue.close_at}</span></td><td className="extra"></td></tr>
                            <tr><th>Wed</th><td><span>{this.props.hoursItem.Wed.open_at}</span> - <span>{this.props.hoursItem.Wed.close_at}</span></td><td className="extra"></td></tr>
                            <tr><th>Thu</th><td><span>{this.props.hoursItem.Thu.open_at}</span> - <span>{this.props.hoursItem.Thu.close_at}</span></td><td className="extra"></td></tr>
                            <tr><th>Fri</th><td><span>{this.props.hoursItem.Fri.open_at}</span> - <span>{this.props.hoursItem.Fri.close_at}</span></td><td className="extra"></td></tr>
                            <tr><th>Sat</th><td><span>{this.props.hoursItem.Sat.open_at}</span> - <span>{this.props.hoursItem.Sat.close_at}</span></td><td className="extra"></td></tr>
                            <tr><th>Sun</th><td><span>{this.props.hoursItem.Sun.open_at}</span> - <span>{this.props.hoursItem.Sun.close_at}</span></td><td className="extra"></td></tr>
                        </tbody>
                    </table>
                </div> 
            )
    }
}
export default Hours;