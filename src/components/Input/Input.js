import React, { Component } from 'react';
import styles from './Input.module.css';
import DateTimePicker from 'react-datetime-picker';


const getError = (value, validation) => {
    if (!validation) {
        return null;
    }

    if (validation.minLength && validation.minLength > value.trim().length) {
        return "Too short";
    }

    if (validation.maxLength && validation.maxLength < value.length) {
        return "Too long";
    }

    return null;
};

class Input extends Component { 
    
    state = {
        touched: false
    }
    
    onDateTimeValueChanged(onChange, val, id) {
        this.setState({touched: true});
        onChange({target: { id: id, value: val}});
    }

    onChanged(e, onChange) {
        this.setState({touched: true});
        onChange(e);
    }

    render() {

        let input;
        let inputClass = [styles.Input];
        let error;
        if (this.state.touched) {
            error = getError(this.props.value, this.props.validation);
            if (error) {
                error = <div>{error}</div>;
                inputClass.push(styles.Invalid);
            }
        }
        switch (this.props.type) {
            case 'select':
                input = <select {...this.props}>{this.props.options.map(option=> 
                    <option key={option.key} value={option.key}>{option.value}</option>)}</select>;
                break;
            case 'textarea':
                input = <textarea {...this.props} onChange={e=>this.onChanged(e,this.props.onChange)}></textarea>;
                break;
            case 'datetime':
                input = <DateTimePicker {...this.props} onChange={(val) => this.onDateTimeValueChanged(this.props.onChange, val, this.props.id)}/>;
                break;
            case 'button':
                input = <button {...this.props}>{this.props.children}</button>;
                break;
            case 'password':
            case 'email':
            case 'color':
                input = <input type={this.props.type} onChange={e=>this.onChanged(e,this.props.onChange)} {...this.props} />;
                break;
            default:
                input = <input type="text"  onChange={e=>this.onChanged(e,this.props.onChange)} {...this.props } />;
                break;
        }

        let label = null;

        if (this.props.id && this.props.label) {
            label = <label htmlFor={this.props.id}>{this.props.label}</label>;
        }

        return (
            <div className={inputClass.join(' ')}>{label}{input}{error}</div>
        )
    };
}

export default Input;