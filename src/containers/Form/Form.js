import React from 'react'
import Input from './../../components/Input/Input';
import styles from './Form.module.css';

const form = props => {

    const someHaveErrors = Object.keys(props.inputs)
            .some(inputKey => props.inputs[inputKey].error);

    const allRequiredTouched = Object.keys(props.inputs)
        .filter(inputKey => props.inputs[inputKey].validation &&
            props.inputs[inputKey].validation.required)
        .every(inputKey => props.inputs[inputKey].touched);

    const submitDisabled = someHaveErrors || !allRequiredTouched;
    return (<form onSubmit={(e)=>{e.preventDefault();props.onSubmit()}}>
        <div className={styles.form} >
        {Object.keys(props.inputs).map(inputKey => 
        <Input id={inputKey} key={inputKey} onChange={props.onValueChanged} 
        value={props.inputs[inputKey].value} {...props.inputs[inputKey]} />)}
        </div>
        <Input type="submit" disabled={props.submitDisabled || submitDisabled}>{props.submitCaption}</Input>
    </form>);
};

export default form;