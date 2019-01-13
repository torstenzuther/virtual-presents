import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/Home/Home';
import PresentInput from '../PresentInput/PresentInput';
import About from '../../components/About/About';

const app = () => {
  return (
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={PresentInput} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
        </Switch>
    </Layout>);
}

export default app;