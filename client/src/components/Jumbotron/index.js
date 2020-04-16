import React, { Component } from "react";
import Card from "./../Card";
import "./style.css";

class Jumbotron extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div className="container">
                    <Card></Card>
                </div>
            </div>
        )
    }
}

export default Jumbotron;