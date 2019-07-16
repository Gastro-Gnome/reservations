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
        console.log(this.state.hoursItems[0].days[0].open_at);

    }
    dailyStatus() {
       // if (this.state.day === the element day)
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
    render() {
        return(
                <div className="service business-hours">
                    <h3>Hours</h3>
                    <div>
                        {this.state.hoursItems[0].days.map((day, i) => {
                            return <li key={i}>{day.open_at}</li>
                        })}
                    </div>
                </div> 
            )
    }
}
export default Hours;