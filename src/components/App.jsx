import React, {Component} from "react";
import axios from "axios";
//component should contain a function, componentDidMount,
//that sends a get request to /businesses

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(`App did mount`);
        //use fetch to make a get request to /businesses
        getHoursItems();

    }
    render() {
        return(
            <div>Hello</div>
        )
    }
}

let getHoursItems = () => {
    console.log("function running");
    axios.get('http://localhost:3000/businesses')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

export default App;