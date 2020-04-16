import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" id="homeLink" href="#" >Online Banking</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <div className="nav-item">
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);