import React, {Component} from "react";
import Hours from "./Hours.jsx";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date
        }
    }
    
    render() {
        return (
            <div>
            <Hours />
            </div>
        )
    }
};

export default App;