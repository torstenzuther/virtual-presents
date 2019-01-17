import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/Home/Home';
import PresentInput from '../PresentInput/PresentInput';
import About from '../../components/About/About';
import Auth from '../../components/Auth/Auth';
import api from '../../api/api';
import Error from './../../components/Error/Error'

class App extends Component  {


    state = {
        auth: {
            userId: null,
            email: null,
            token: null,
            error: null,
            submitDisabled: false
        }
    }

    errorModalClosed = () => {
        this.setState({
            auth: {
                ...this.state.auth,
                error: null
            }
        });
    }

    onAuthSubmit = (authData) => {
        this.setState({
            auth: {
                ...this.state.auth,
                submitDisabled: true
            }
        });
        api.signUpUser(authData)
            .then(response => {
                this.setState({
                    auth: {
                        ...this.state.auth,
                        userId: response.data.localId,
                        token: response.data.idToken,
                        email: response.data.email,
                        error: null,
                        submitDisabled: false
                    }
                })
            })
            .catch(e => {
                let error = "Unspecified error";
                if (e.response && e.response.data && e.response.data.error
                    && e.response.data.error.message) {
                    error = e.response.data.error.message;
                }
                if (api.errors[e.response.data.error.message]) {
                    error = api.errors[e.response.data.error.message];
                }
                this.setState({
                    auth: {
                        ...this.state.auth,
                        userId: null,
                        email: null,
                        token: null,
                        error: error, // todo error nicht als state sondern kurz als modal anzeigen
                        submitDisabled: false
                    }
                })
            });
    }

    render() {
        let signIn = true;
        if (!this.state.auth.token) {
            signIn = false;
        }

        const errorModal = <Error error={this.state.auth.error} 
                show={this.state.auth.error} onClose={this.errorModalClosed}></Error>;
        return (
            <>{errorModal}
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/create" component={PresentInput} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/auth" render={()=>{ return <Auth onSubmit={this.onAuthSubmit} signIn={signIn} submitDisabled={this.state.auth.submitDisabled}/>}} />
                    <Redirect to="/" />
                </Switch>
            </Layout></>);
    }
}

export default App;
