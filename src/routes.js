import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen'
import StartScreen from './screens/StartScreen'
const Routes = () => (
    <Router>
            <Route exact path="/" component={LoginScreen} />
            <Route path="/Tictactoe" component={StartScreen} />
    </Router>
);

export default Routes;