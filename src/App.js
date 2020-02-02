import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
// ui
import AdvertiseScreen from './ui/AdvertiseScreen'
import Admin from './ui/Admin/Admin'

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/"
                    render={() => {
                        return (
                            <AdvertiseScreen />
                        )
                    }} />
                <Route exact path={"/admin"}
                    render={(props) => {
                        return (
                            <Admin />
                        )
                    }} />
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default App;
