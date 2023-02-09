import React, { Component } from 'react';
import Header from './headerComponent';
import Home from './homeComponent';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

class Main extends Component {

    render() {

        return (
            <div className='app-container'>
            {/* <Header /> */}
            <TransitionGroup>
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Redirect to="/home" />
                </Switch>
            </TransitionGroup>
            </div>
        );
    }
    
}

export default Main;