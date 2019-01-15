import React from 'react';
import Form from './../../containers/Form/Form';

const inputs = {
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
};

const auth = (props) => {
    return (<Form inputs={inputs} submitCaption={"SIGN IN"}/>);
}

export default auth;