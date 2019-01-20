import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/Home/Home';
import PresentInput from '../PresentInput/PresentInput';
import About from '../../components/About/About';
import Auth from '../../components/Auth/Auth';

class App extends Component  {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/create" component={PresentInput} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/auth" component={Auth} />
                    <Redirect to="/" />
                </Switch>
            </Layout>);
    }
}

export default App;
