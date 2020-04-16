import React, { Component } from 'react';
import "./style.css";

class Grid extends Component {
    render() {
        return (
            <div id="grid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" id="firstCol">
                            <img src="withdraw.png" className="icon" />
                            <p className="iconText">Withdraw Cash</p>
                        </div>
                        <div className="col-md-4 ">
                            <img src="deposit.png" className="icon" />
                            <p className="iconText">Deposit Checks</p>
                        </div>
                        <div className="col-md-4" id="lastCol">
                            <img src="transfer.png" className="icon" />
                            <p className="iconText ">Transfer money</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Grid;