import React, { Component } from "react";
import axios from "axios";
import styles from "../main.css";
import placeholderData from "./placeholderData.js";

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date,
            hoursItems: [placeholderData]
        };
        this.fetchHoursItems = this.fetchHoursItems.bind(this);
    }
    componentDidMount() {
        this.fetchHoursItems();
    }
    fetchHoursItems() {
        let instance = this
        axios.get('http://localhost:3000/businesses')
        .then(function (response) {
            //handle response
            instance.setState({hoursItems: response.data});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
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
            0: "Mon",
            1: "Tue",
            2: "Wed",
            3: "Thu",
            4: "Fri",
            5: "Sat",
            6: "Sun"
        };
        return daysOfTheWeek[num];
    }
    dailyStatus(day) {
        //TODO -- return flag
        //is the day on table today?
        if (day === this.state.date.getDay()) {
            //is the hour in range?
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
                                //condition: is_open (key: open => refactor schema, time permitting)
                                //condition: open now, closed
                                if (day.open) {
                                    return (
                                        <tr key={i}>
                                            <td>{this.dayNumToName(day.day)}</td>
                                            <td className="open_at">{this.militaryToStdTime(day.open_at)}</td>
                                            <td className="close_at">{this.militaryToStdTime(day.close_at)}</td>
                                            <td className="extra">{this.dailyStatus(day.day)}</td>
                                        </tr>
                                    )
                                } else {
                                    return <tr key={i}><td>{this.dayNumToName(day.day)}</td><td className="open_at">Closed</td></tr>
                                }
                            })}
                        </tbody>
                    </table>
                </div> 
            )
    }
}
export default Hours;