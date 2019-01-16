import React from 'react';
import Form from './../../containers/Form/Form';

const inputs = {
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
};

const auth = (props) => {
    const caption = props.signIn ? "SIGN IN" : "SIGN UP";
    let error = null;
    if (props.error) {
        error = <div>{props.error}</div>;
    }
    return (<>{error}<Form inputs={inputs} 
        submitCaption={caption} 
        onSubmit={props.onSubmit} 
        submitDisabled={props.submitDisabled}/></>);
}

export default auth;