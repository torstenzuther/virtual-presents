import React from 'react';
import styles from './Input.module.css';
import DateTimePicker from 'react-datetime-picker';


const onDateTimeValueChanged = (onChange, val, id) => {
    onChange({target: { id: id, value: val}});
}

const input = props => { 
    
    let input;
    let inputStyle = styles.Valid;
    if (props.error) {
        inputStyle = styles.Invalid;
    }

    const {touched, ...otherProps} = props;

    switch (props.type) {
        case 'select':
            input = <select {...otherProps} className={inputStyle}>{props.options.map(option=> 
                <option key={option.key} value={option.key}>{option.value}</option>)}</select>;
            break;
        case 'textarea':
            input = <textarea {...otherProps}  className={inputStyle} onChange={props.onChange}></textarea>;
            break;
        case 'datetime':
            input = <DateTimePicker {...otherProps} className={inputStyle} onChange={(val) => onDateTimeValueChanged(props.onChange, val, props.id)}/>;
            break;
        case 'button':
        case 'submit':
            input = <button {...otherProps}>{props.children}</button>;
            break;
        case 'password':
        case 'email':
            input = <input  {...otherProps } className={inputStyle} type={props.type} onChange={props.onChange} />;
            break;
        default:
            input = <input  {...otherProps } className={inputStyle} type="text"onChange={props.onChange}  />;
            break;
    }

    let label = null;

    if (props.id && props.label) {
        label = <label htmlFor={props.id}>{props.label}</label>;
    }
    return (
        <div className={styles.Input}>{label}{input}{props.error}</div>
    )
};

export default input;