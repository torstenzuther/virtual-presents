import React from 'react'
import Input from './../../components/Input/Input';


const form = props => {
    const inputs = props.inputs.map(input => 
        <Input {...input} value={input.value} onChanged={()=>props.onChanged(input.id)}/>);
    return (
        <form>{inputs}</form>);
};

export default form;