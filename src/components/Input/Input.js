import React from 'react';


const input = (props) => {

    let input = <input type="text" {...props} />;

    switch (props.type) {
        case 'select':
            input = <select {...props}>{props.children}</select>;
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
        label = <label for={props.id}>{props.label}</label>;
    }

    return (
        <>{label}{input}</>
    )
};

export default input;