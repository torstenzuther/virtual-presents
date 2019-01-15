import React, { Component } from 'react';
import Form from '../../containers/Form/Form';
import { getError } from '../../utility/utility';

class Auth extends Component {
    state = {
        inputs: {
            username : {
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
                    required: true
                }
            }
        }
    }

    onValueChanged = (event) => {
        const input = this.state.inputs[event.target.id];
        const inputCopy = {...input};
        inputCopy.value = event.target.value;
        inputCopy.error =  getError(inputCopy.value, inputCopy.validation);
        const inputsCopy = {...this.state.inputs};
        inputsCopy[event.target.id] = inputCopy;
        this.setState( {
            inputs: inputsCopy
        });
    }

    onSubmit() {

    }

    render() {
        return (
            <Form inputs={this.state.inputs} onChange={this.onValueChanged}
            onSubmit={this.onSubmit} submitCaption={"SIGN IN"}></Form>
        );
    };

}

export default Auth;