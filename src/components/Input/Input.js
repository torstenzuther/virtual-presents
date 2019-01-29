import React from 'react';
import styles from './Input.module.css';
import DateTimePicker from 'react-datetime-picker';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const onDateTimeValueChanged = (onChange, val, id) => {
    onChange({target: { id: id, value: val}}, id);
}

const input = props => { 
    
    let input;
    let inputStyle = styles.Valid;
    if (props.error) {
        inputStyle = styles.Invalid;
    }

    const {touched, errorMessage, ...otherProps} = props;

    switch (props.type) {
        case 'select':
            input = <Select {...otherProps} className={inputStyle} onChange={(e)=>props.onChange(e,props.id)}>{props.options.map(option=> 
                <MenuItem key={option.key} value={option.key}>{option.value}</MenuItem>)}</Select>;
            break;
        case 'textarea':
            input = <TextField {...otherProps}  className={inputStyle} onChange={(e)=>props.onChange(e,props.id)}></TextField>;
            break;
        case 'datetime':
            input = <DateTimePicker {...otherProps} className={inputStyle} onChange={(val) => onDateTimeValueChanged(props.onChange, val, props.id)}/>;
            break;
        case 'button':
        case 'submit':
            input = <Button {...otherProps}>{props.children}</Button>;
            break;
        case 'password':
        case 'email':
            input = <TextField  {...otherProps } className={inputStyle} type={props.type} onChange={(e)=>props.onChange(e,props.id)} />;
            break;
        default:
            input = <Input  {...otherProps } className={inputStyle} type="text" onChange={(e)=>props.onChange(e,props.id)}  />;
            break;
    }

    return ( 
        <div className={styles.Input}>{input}{props.errorMessage}</div>
    );
};

export default input;