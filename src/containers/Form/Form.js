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
    render() {

        const someHaveErrors = Object.keys(this.state.inputs)
                .some(inputKey => this.state.inputs[inputKey].error);

        const anyRequiredTouched = Object.keys(this.state.inputs)
            .some(inputKey => this.state.inputs[inputKey].touched && 
                this.state.inputs[inputKey].validation && this.state.inputs[inputKey].validation.required);

        const submitDisabled = someHaveErrors || !anyRequiredTouched;
        console.log(someHaveErrors, anyRequiredTouched);
        return (<form>
            {Object.keys(this.state.inputs).map(inputKey => 
            <Input id={inputKey} key={inputKey} onChange={this.onValueChanged} 
            value={this.state.inputs[inputKey].value} {...this.state.inputs[inputKey]} />)}
            <Input type="button" disabled={submitDisabled}
             onClick={this.props.onSubmit}>{this.props.submitCaption}</Input>
            </form>);
    }
};

export default Form;