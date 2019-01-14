import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import * as styles from './../../assets/styles';
import { getSeconds } from './../../utility/utility';
import cssStyle  from './PresentInput.module.css';
import Form from './../Form/Form';

class PresentInput extends Component {

    constructor(props) {
        super(props);
        const dueDate = new Date(2020,1,1,0,0,0,0);
        this.state = {
            inputs: {
                previewText : {
                    label: "Invitation text",
                    type: 'textarea',
                    rows: 5,
                    cols: 60,
                    validation: {
                        minLength: 1,
                        maxLength: 300
                    },
                    value: 'Hello, in <seconds> seconds your present will appear here!'
                },
                dueDate : {
                    label: "Due date",
                    type: 'datetime',
                    clearIcon: null,
                    value: dueDate
                },
                presentTextBox:
                {
                    label: "Present text (box)",
                    type: 'textarea',
                    rows: 5,
                    cols: 60, 
                    validation: {
                        minLength: 1,
                        maxLength: 300
                    },
                    value: 'Happy birtdhay!'
                },
                presentText:
                {
                    label: "Present text",
                    type: 'textarea',
                    rows: 5,
                    cols: 60, 
                    validation: {
                        minLength: 1,
                        maxLength: 300
                    },
                    value: 'This is your personal present from us'
                },
                style:
                {
                    label: "Style",
                    type: 'select',
                    options: Object.keys(styles).map(o => {
                        return {
                            key: o,
                            value: styles[o].name
                        }
                    }),
                    value: "defaultStyle"
                }
            },
            seconds: getSeconds(dueDate)
        }
    }

    onValueChanged = (event) => {
        const input = this.state.inputs[event.target.id];
        const inputCopy = {...input};
        inputCopy.value = event.target.value;
        const inputsCopy = {...this.state.inputs};
        inputsCopy[event.target.id] = inputCopy;
        this.setState( {
            inputs: inputsCopy
        });
    }

    onSubmit = (event) => {
        event.preventDefault(); 
    }

    componentDidMount() {
        this.setState({timer: setInterval(()=>{
            const seconds = getSeconds(this.state.inputs.dueDate.value);
            if (seconds >= 0) {
                this.setState({seconds: seconds});
            }
        }, 1000)});
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }

    render() {
        const selectedStyle = styles[this.state.inputs.style.value];
        return (
        <div>
           <div className={cssStyle.PresentInputs}>
                <Form inputs={this.state.inputs} onChange={this.onValueChanged}
                onSubmit={this.onSubmit} submitCaption={"SUBMIT"}/>
           </div>
            <ol>
                <li><TimerMessage text={this.state.inputs.previewText.value} 
                    cssStyle={selectedStyle.style}
                    seconds={this.state.seconds}/></li>
                <li><PresentBox text={this.state.inputs.presentTextBox.value} 
                    img={selectedStyle.img} cssStyle={selectedStyle.style} /></li>
                <li><Present text={this.state.inputs.presentText.value} 
                    cssStyle={selectedStyle.style}/></li>
            </ol>
        </div>);
    }
}

export default PresentInput;