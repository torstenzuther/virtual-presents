import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import PresentInput from '../PresentInput/PresentInput';
import Auth from '../Auth/Auth';
import PresentView from '../../containers/PresentView/PresentView';
import QrCodeModal from '../../components/QrCode/QrCode';
import PurchaseRedirect from '../PurchaseRedirect/PurchaseRedirect';

class App extends Component  {

    render() {

        return (
            <Switch>
                <Route exact path="/purchased/" component={PurchaseRedirect} />
                <Route exact path="/presents/:id" component={PresentView} />
                <Route exact path="/qr/:id" component={QrCodeModal} />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/create" component={PresentInput} />
                        <Route exact path="/signup" render={()=><Auth signIn={false}/>} />
                        <Route exact path="/signin" render={()=><Auth signIn={true} />} />
                        <Redirect to="/" />
                    </Switch>
                </Layout>
            </Switch>);
    }
}


export default App;
