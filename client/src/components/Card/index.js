import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./style.css";

class Card extends Component {
    handleFormSubmit() {
        
    }
    
    render() {
        return (
            <div className="card p-3">
                <div className="card-body">
                <h5 className="card-title">View Your Accounts</h5>
                    <form id="loginForm">
                        <p>Username</p>
                        <input type="text" />
                        <p>Password</p>
                        <input type="password" />
                        <br />
                        <br />
                        <button id="loginBtn" type="submit">Sign On</button>
                    </form>

                    <hr />

                    <Link to="/register" className="nav-link" id="registerBtn">
                        <span className="glyphicon glyphicon-user">Register</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Card;