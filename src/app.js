import React, { Component } from "react";
import { Link } from "react-router-dom"; 

class App extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><Link to="/home">Hello</Link></li>
            <li><Link to="/stuff">Stuff</Link></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default App;