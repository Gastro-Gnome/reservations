import React, {Component} from "react";
import axios from "axios";
import Hours from "./Hours.jsx";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hoursItems: []
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
        console.log(`App did mount`);
        //use fetch to make a get request to /businesses
        this.fetchHoursItems();

    }
    render() {
        return(
           <Hours hoursItem={this.state.hoursItems[0]} />
        )
    }
};

export default App;