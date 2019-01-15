import React, { Component } from 'react';
import { getError } from './../utility/utility';

export const formComponent = (formComponent) => {

    return class extends Component {
        
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

        render() {
            const C = formComponent; 
            return <C {...this.props}>{this.props.children}</C>;
        }
    }
};