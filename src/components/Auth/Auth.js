import React, { Component } from 'react';
import Form from './../../containers/Form/Form';
import { connect } from 'react-redux'; 
import * as actions from '../../store/auth/actions';
import Message from './../Message/Message';
import { Redirect, withRouter } from 'react-router-dom';
import ContentCard from './../ContentCard/ContentCard';
import styles from './Auth.module.css';

class Auth extends Component {

    componentWillUnmount() {
        this.props.onAuthSetRedirect();
    }

    onAuthSubmit = () => {
        const authData = {}
        for (let key in this.props.inputs) { 
            authData[key] =  this.props.inputs[key].value;
        }
        this.props.onAuthSubmitInit(authData, this.props.signIn);
    }

    onValueChanged = (event) => {
        this.props.onValueChanged(event.target.id, event.target.value);
    }

    render() {

        if (this.props.token) {
            return <Redirect to={this.props.redirectUrl} />;
        }
        
        const errorModal = <Message message={this.props.error} 
                show={this.props.error !== null} onClose={this.props.onAuthClearError}></Message>;
        const caption = this.props.signIn ? "SIGN IN" : "SIGN UP";
        return (<ContentCard title={caption} className={styles.card}>{errorModal}<Form col={true} inputs={this.props.inputs} 
            submitCaption={caption} 
            onSubmit={this.onAuthSubmit} 
            onValueChanged={this.onValueChanged}
            submitDisabled={this.props.submitDisabled}/></ContentCard>);
    }
};

const mapStateToProps = state => {
    return {
        inputs: state.auth.inputs,
        submitDisabled: state.auth.submitDisabled,
        token: state.auth.token,
        error: state.auth.error,
        redirectUrl: state.auth.redirectUrl
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onValueChanged: (id, value) => dispatch(actions.authValueChanged(id, value)),
        onSubmitClicked: () => dispatch(actions.authSubmitInit()),
        onAuthSubmitInit: (authData, signIn) => dispatch(actions.authSubmitInit(authData, signIn)),
        onAuthSetRedirect: () => dispatch(actions.onSetRedirect('/')),
        onAuthClearError: () => dispatch(actions.authClearError())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));