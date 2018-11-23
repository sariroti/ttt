import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "./app";
import Home from "./component/home";
import Stuff from "./component/stuff";

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
         
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
          
        );
    }
}

export default Router;