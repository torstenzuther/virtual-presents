import React from 'react'
import Input from './../../components/Input/Input';

const form = props => {
    return (<form>
        {Object.keys(props.inputs).map(inputKey => 
         <Input id={inputKey} key={inputKey} onChange={props.onChange} 
         value={props.inputs[inputKey].value} {...props.inputs[inputKey]} />)}
         <Input type="button" onClick={props.onSubmit}>{props.submitCaption}</Input>
         </form>);
};

export default form;