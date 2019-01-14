import React from 'react';
import Form from '../../containers/Form/Form';

const inputs = {
    username : {
        label: "Email",
        type: 'email',
        value: ''
    }, 
    password: {
        label: "Password",
        type: 'password',
        value: ''
    }
};


const auth = props => {
    return (
        <Form inputs={inputs} onChange={props.onChange}
         onSubmit={props.onSubmit} submitCaption={"SIGN IN"}></Form>
    );
};

export default auth;