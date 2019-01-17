import React, { Component } from 'react';
import Form from './../../containers/Form/Form';
import { getError } from './../../utility/utility';


class Auth extends Component {

    state = {
        inputs: {
            email : {
                label: "Email",
                type: 'email',
                value: '',
                validation: {
                    required: true,
                    email: true
                }
            }, 
            password: {
                label: "Password",
                type: 'password',
                value: '',
                validation: {
                    minLength: 6,
                    required: true
                }
            }
        }
    }

    onValueChanged = (event) => {
        const input = this.state.inputs[event.target.id];
        const inputCopy = {...input};
        inputCopy.value = event.target.value;
        inputCopy.touched = true;
        inputCopy.error =  getError(inputCopy.value, inputCopy.validation);
        const inputsCopy = {...this.state.inputs};
        inputsCopy[event.target.id] = inputCopy;
        this.setState( {
            inputs: inputsCopy
        });
    }

    onSubmit = () => {
        console.log(this.state.inputs);
        const result = {};
        for (let key in this.state.inputs) { 
            result[key] =  this.state.inputs[key].value;
        }
        console.log(this.state.inputs);
        this.props.onSubmit(result);
    }

    render() {
        const caption = this.props.signIn ? "SIGN IN" : "SIGN UP";
        return (<Form inputs={this.state.inputs} 
            submitCaption={caption} 
            onSubmit={this.onSubmit} 
            onValueChanged={this.onValueChanged}
            submitDisabled={this.props.submitDisabled}/>);
    }
};

export default Auth;