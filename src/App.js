import React, { Component } from "react";

import Navigation from "./nav/Navigation";
import Routes from "./nav/Routes";
import "./style.css";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navigation />
                <Routes />
            </div>
        )
    }
}

export default App;
