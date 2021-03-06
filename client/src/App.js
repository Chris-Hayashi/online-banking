import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path = "/" component={Landing} />
          <Route exact path = "/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
