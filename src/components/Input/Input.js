import React from 'react';
import styles from './Input.module.css';
import DateTimePicker from 'react-datetime-picker';


const onDateTimeValueChanged = (onChange, val, id) => {
    onChange({target: { id: id, value: val}});
}

const input = (props) => {

    let input = <input type="text" {...props} />;

    switch (props.type) {
        case 'select':
            input = <select {...props}>{props.options.map(option=> 
                <option key={option.key} value={option.key}>{option.value}</option>)}</select>;
            break;
        case 'textarea':
            input = <textarea {...props} ></textarea>;
            break;
        case 'color':
            input = <input type={props.type} {...props} />;
            break;
        case 'datetime':
            input = <DateTimePicker {...props} onChange={(val) => onDateTimeValueChanged(props.onChange, val, props.id)}/>;
            break;
        case 'button':
            input = <button {...props}>{props.children}</button>;
            break;
        default:
            input = <input type="text" {...props} />;
            break;
    }

    let label = null;

    if (props.id && props.label) {
        label = <label htmlFor={props.id}>{props.label}</label>;
    }

    return (
        <div className={styles.Input}>{label}{input}</div>
    )
};

export default input;