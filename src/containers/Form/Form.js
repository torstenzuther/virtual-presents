import React, { Component } from 'react'
import Input from './../../components/Input/Input';
import { getError } from './../../utility/utility';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: props.inputs
        };
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

    onSubmit = (event) => {
        event.preventDefault();
        const result = {};
        for (let key in this.state.inputs) { 
            result[key] =  this.state.inputs[key].value;
        }
        this.props.onSubmit(result);
    }

    render() {

        const someHaveErrors = Object.keys(this.state.inputs)
                .some(inputKey => this.state.inputs[inputKey].error);

        const allRequiredTouched = Object.keys(this.state.inputs)
            .filter(inputKey => this.state.inputs[inputKey].validation &&
                this.state.inputs[inputKey].validation.required)
            .every(inputKey => this.state.inputs[inputKey].touched);

        const submitDisabled = someHaveErrors || !allRequiredTouched;
        
        return (<form onSubmit={this.onSubmit}>
            {Object.keys(this.state.inputs).map(inputKey => 
            <Input id={inputKey} key={inputKey} onChange={this.onValueChanged} 
            value={this.state.inputs[inputKey].value} {...this.state.inputs[inputKey]} />)}
            <Input type="submit" disabled={this.props.submitDisabled || submitDisabled}>{this.props.submitCaption}</Input>
        </form>);
    }
};

export default Form;