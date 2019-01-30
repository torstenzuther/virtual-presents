import React from 'react';
import styles from './Input.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography, InputLabel } from '@material-ui/core';
import DateTimePicker from 'react-datetime-picker';
import FormHelperText from '@material-ui/core/FormHelperText';


const onDateTimeValueChanged = (onChange, val, id) => {
    onChange({target: { id: id, value: val}}, id);
}

const input = props => { 
    
    let input;
    const {touched, errorMessage, ...otherProps} = props;

    switch (props.type) {
        case 'select':
            input = <><FormHelperText>{props.label}</FormHelperText><Select variant="outlined" {...otherProps} onChange={(e)=>props.onChange(e,props.id)}>{props.options.map(option=> 
                <MenuItem key={option.key} value={option.key}>{option.value}</MenuItem>)}</Select></>;
            break;
        case 'textarea':
            input = <TextField variant="outlined" className={styles.textarea} {...otherProps} onChange={(e)=>props.onChange(e,props.id)}></TextField>;
            break;
        case 'date':
            input = 
            <><FormHelperText>{props.label}</FormHelperText><DateTimePicker
                {...otherProps} onChange={(val) => onDateTimeValueChanged(props.onChange, val, props.id)}/></>;
            break;
        case 'button':
        case 'submit':
            input = <Button variant="outlined" {...otherProps}>{props.children}</Button>;
            break;
        case 'password':
        case 'email':
            input = <TextField variant="outlined" className={styles.textfield} {...otherProps } type={props.type} onChange={(e)=>props.onChange(e,props.id)} />;
            break;
        default:
            input = null;
            break;
    }
    return ( 
        <div className={styles.Input}>{input}
            <Typography color="error" className={styles.validation}>{props.errorMessage}</Typography>
        </div>
    );
};

export default input;