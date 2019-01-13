import React from 'react';
import styles from './Input.module.css';


const input = (props) => {

    let input = <input type="text" {...props} />;

    switch (props.type) {
        case 'select':
            input = <select {...props}>{props.options.map(option=> <option key={option}>{option}</option>)}</select>;
            break;
        case 'textarea':
            input = <textarea {...props} ></textarea>;
            break;
        case 'color':
            input = <input type={props.type} {...props} />;
            break;
        case 'datetime':
            input = <input type={props.type} {...props} />;
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