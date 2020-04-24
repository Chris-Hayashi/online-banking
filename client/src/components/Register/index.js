import React, { Component } from 'react'
import "./style.css"


class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={this.onSubmit} >
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="name">First name<span className="required">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter your first name"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter your lastname name"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Username<span className="required">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password<span className="required">*</span> </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Date of Birth<span className="required">*</span></label>
                                <select
                                    type="gender"
                                    className="form-control"
                                    id="select-inputs"
                                    name="gender"
                                    placeholder="Select gender"
                                    value={this.state.gender}
                                    onChange={this.onChange}
                                >
                                    <option className="inputs"></option>
                                    <option className="inputs">1</option>
                                    <option className="inputs">2</option>
                                    <option className="inputs">3</option>
                                    <option className="inputs">4</option>
                                    <option className="inputs">5</option>
                                    <option className="inputs">6</option>
                                    <option className="inputs">7</option>
                                    <option className="inputs">8</option>
                                    <option className="inputs">9</option>
                                    <option className="inputs">10</option>
                                    <option className="inputs">11</option>
                                    <option className="inputs">12</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Enter age">Age<span className="required">*</span></label>
                                <input
                                    type="age"
                                    className="form-control"
                                    name="age"
                                    placeholder="Enter age"
                                    value={this.state.age}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="weight">Weight<span className="required">*</span></label>
                                <input
                                    type="weight"
                                    className="form-control"
                                    name="weight"
                                    placeholder="Enter weight"
                                    value={this.state.weight}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block" id="register-btn"
                            >
                                Register!
              </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register








