import React from 'react';
import styles from './Input.module.css';
import Button from './../Button/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateTimePicker from 'react-datetime-picker';
import FormHelperText from '@material-ui/core/FormHelperText';
import Text from './../Text/Text';


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
        case 'img-select':
            input = <><FormHelperText>{props.label}</FormHelperText><Select variant="outlined" {...otherProps} onChange={(e)=>props.onChange(e,props.id)}>{props.options.map(option=> 
                {
                const ImgComponent = option.component;
                return <MenuItem key={option.key} value={option.key}><span style={option.style} className={styles.ImageSelect}>
                    <ImgComponent width="30px" height="30px" />{option.value}</span></MenuItem>;})
                    
                }</Select></>;
            break;
        case 'textarea':
            input = <TextField fullWidth variant="outlined" {...otherProps} onChange={(e)=>props.onChange(e,props.id)}></TextField>;
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
            input = <TextField fullWidth variant="outlined" {...otherProps } type={props.type} onChange={(e)=>props.onChange(e,props.id)} />;
            break;
        default:
            input = <TextField fullWidth variant="outlined" {...otherProps } type={props.type} onChange={(e)=>props.onChange(e,props.id)} />;
            break;
    }
    return ( 
        <div className={styles.Input}>{input}
            <Text color="error">{props.errorMessage}</Text>
        </div>
    );
};

export default input;