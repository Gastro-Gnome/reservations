import React, {Component} from "react";
import axios from "axios";
//component should contain a function, componentDidMount,
//that sends a get request to /businesses

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hoursitems: []
        }
        this.fetchHoursItems = this.fetchHoursItems.bind(this);
    }
    
    fetchHoursItems() {
        let instance = this
        axios.get('http://localhost:3000/businesses')
        .then(function (response) {
            //handle response
            instance.setState({hoursItem: response.data});
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
            <div>Hello</div>
        )
    }
};

export default App;