import React, { Component } from "react";
import axios from "axios";
import styles from "../main.css";
import placeholderData from "./placeholderData.js";
import Model from "../../db/model.js"
console.log(Model);

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date,
            hoursItems: [placeholderData]
        };
        this.fetchAndSetHoursItems = this.fetchAndSetHoursItems.bind(this);
    }
    componentDidMount() {
        this.fetchAndSetHoursItems()
    }
    fetchAndSetHoursItems() {
        //api call to /businesses
        fetch("http://localhost:3004/businesses/")
        .then(docs => docs.json())
        .then(docs => this.setState({
            hoursItems: docs
        }))
        //setState to items
    }
    militaryToStdTime(num){
        let key = {
            13:1,
            14:2,
            15:3,
            16:4,
            17:5,
            18:6,
            19:7,
            20:8,
            21:9,
            22:10,
            23:11,
            24:12
        };
        //
        let strNum = num.toString();
        let strFore = undefined;
        let strAft = undefined;
        //
        if (num >= 1000) {
            strFore = strNum.slice(0,2);
            strAft = strNum.slice(2);
        } else {
            strFore = strNum.slice(0,1);
            strAft = strNum.slice(1);
        }
        //
        if (num < 1200 || num >=2400) {
            if (num >= 2400) {
                strFore = key[strFore];
            }
            return strFore + ":" + strAft +" am";
        } else {
            if (num >= 1300) {
                strFore = key[strFore]
            }
            return strFore + ":" + strAft + " pm"
        }
    }
    dayNumToName(num) {
        let daysOfTheWeek = {
            0: "Sun",
            1: "Mon",
            2: "Tue",
            3: "Wed",
            4: "Thu",
            5: "Fri",
            6: "Sat"
        };
        return daysOfTheWeek[num];
    }
    dailyStatus(day) {
        if (day.dayId === this.state.date.getDay()) {
            let presentTime = this.state.date.getHours().toString();
            presentTime += this.state.date.getMinutes().toString();
            presentTime = Number.parseInt(presentTime);
            //
            if (presentTime >= day.open_at && presentTime <= day.close_at) {
                return "Open now";
            } else {
                return "Closed";
            }
        }

    }
    render() {
        return(
                <div className="service business-hours">
                    <h3>Hours</h3>
                    <table>
                        <tbody>
                            {this.state.hoursItems[0].days.map((day, i) => {
                                if (day.open) {
                                    return (
                                        <tr key={i}>
                                            <td className="dayId">{this.dayNumToName(day.dayId)}</td>
                                            <td className="open_at">{this.militaryToStdTime(day.open_at)}</td>
                                            <td><span>-</span></td>
                                            <td className="close_at">{this.militaryToStdTime(day.close_at)}</td>
                                            <td className="extra">{this.dailyStatus(day)}</td>
                                        </tr>
                                    )
                                } else {
                                    return <tr key={i}><td className="dayId">{this.dayNumToName(day.dayId)}</td><td className="open_at">Closed</td></tr>
                                }
                            })}
                        </tbody>
                    </table>
                </div> 
            )
    }
}
export default Hours;