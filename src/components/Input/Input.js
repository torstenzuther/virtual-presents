import React, { Component } from 'react';
import styles from './Input.module.css';
import DateTimePicker from 'react-datetime-picker';

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
        let inputStyle = styles.Valid;
        if (this.props.error) {
            inputStyle = styles.Invalid;
        }
        
        switch (this.props.type) {
            case 'select':
                input = <select {...this.props} className={inputStyle}>{this.props.options.map(option=> 
                    <option key={option.key} value={option.key}>{option.value}</option>)}</select>;
                break;
            case 'textarea':
                input = <textarea {...this.props}  className={inputStyle} onChange={e=>this.onChanged(e,this.props.onChange)}></textarea>;
                break;
            case 'datetime':
                input = <DateTimePicker {...this.props} className={inputStyle} onChange={(val) => this.onDateTimeValueChanged(this.props.onChange, val, this.props.id)}/>;
                break;
            case 'button':
                input = <button {...this.props}>{this.props.children}</button>;
                break;
            case 'password':
            case 'email':
                input = <input  {...this.props } className={inputStyle} type={this.props.type} onChange={e=>this.onChanged(e,this.props.onChange)} />;
                break;
            default:
                input = <input  {...this.props } className={inputStyle} type="text"onChange={e=>this.onChanged(e,this.props.onChange)}  />;
                break;
        }

        let label = null;

        if (this.props.id && this.props.label) {
            label = <label htmlFor={this.props.id}>{this.props.label}</label>;
        }
        return (
            <div className={styles.Input}>{label}{input}{this.props.error}</div>
        )
    };
}

export default Input;