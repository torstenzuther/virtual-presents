import React, { Component } from 'react';
import Form from './../../containers/Form/Form';
import { connect } from 'react-redux'; 
import * as actions from '../../store/auth/actions';
import api from './../../api/api';
import Error from './../Error/Error';
import { Redirect, withRouter } from 'react-router-dom';


class Auth extends Component {

    onAuthSubmit = () => {
        this.props.onAuthSubmitInit();
        const authData = {}
        for (let key in this.props.inputs) { 
            authData[key] =  this.props.inputs[key].value;
        }
        const signInOrUp = this.props.signIn 
            ? api.signInUser(authData) 
            : api.signUpUser(authData);
            
        signInOrUp
            .then(response => {
                this.props.onAuthSubmitSuccess({
                    userId: response.data.localId,
                    token: response.data.idToken,
                    email: response.data.email
                });
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
                this.props.onAuthSubmitError(error);;
            });
    }

    onValueChanged = (event) => {
        this.props.onValueChanged(event.target.id, event.target.value);
    }

    render() {

        if (this.props.signIn && this.props.token) {
             return <Redirect to="/" />;
        }
        const errorModal = <Error error={this.props.error} 
                show={this.props.error} onClose={this.props.onAuthClearError}></Error>;
        const caption = this.props.signIn ? "SIGN IN" : "SIGN UP";
        return (<>{errorModal}<Form inputs={this.props.inputs} 
            submitCaption={caption} 
            onSubmit={this.onAuthSubmit} 
            onValueChanged={this.onValueChanged}
            submitDisabled={this.props.submitDisabled}/></>);
    }
};

const mapStateToProps = state => {
    return {
        inputs: state.auth.inputs,
        submitDisabled: state.auth.submitDisabled,
        token: state.auth.token,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onValueChanged: (id, value) => dispatch(actions.authValueChanged(id, value)),
        onSubmitClicked: () => dispatch(actions.authSubmitInit()),
        onAuthSubmitInit: () => dispatch(actions.authSubmitInit()),
        onAuthSubmitSuccess: (authData) => dispatch(actions.authSubmitSuccess(authData)),
        onAuthSubmitError: (error) => dispatch(actions.authSubmitError(error)),
        onAuthClearError: () => dispatch(actions.authClearError())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));