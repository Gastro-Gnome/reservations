import React, {Component} from "react";
import axios from "axios";
import Hours from "./Hours.jsx";
import Reservations from "./Reservations.jsx";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hoursItems: [
                {
                    Mon: {open_at: "placeholder", close_at: "placeholder"},
                    Tue: {open_at: "placeholder", close_at: "placeholder"},
                    Wed: {open_at: "placeholder", close_at: "placeholder"},
                    Thu: {open_at: "placeholder", close_at: "placeholder"},
                    Fri: {open_at: "placeholder", close_at: "placeholder"},
                    Sat: {open_at: "placeholder", close_at: "placeholder"},
                    Sun: {open_at: "placeholder", close_at: "placeholder"}
                 }
            ],
            time: new Date
        }
        this.fetchHoursItems = this.fetchHoursItems.bind(this);
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

    componentDidMount() {
        this.fetchHoursItems();
    }
    
    render() {
        return (
            <div>
            <Reservations />
            <Hours hoursItem={this.state.hoursItems[0]} time={this.state.time}/>
            </div>
        )
    }
};

export default App;