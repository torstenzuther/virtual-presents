import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import Input from './../../components/Input/Input';
import * as styles from './../../assets/styles';
import { getSeconds } from './../../utility/utility';
import cssStyle  from './PresentInput.module.css';

const inputs = [
    {
        id: "previewText", 
        label: "Invitation text",
        type: 'textarea',
        rows: 5,
        cols: 60,
        maxLength: 300
    },
    {
        id: "dueDate",
        label: "Due date",
        type: 'datetime',
        clearIcon: null
    },
    {
        id: "presentTextBox",
        label: "Present text (box)",
        type: 'textarea',
        rows: 5,
        cols: 60,
        maxLength: 300
    },
    {
        id: "presentText",
        label: "Present text",
        type: 'textarea',
        rows: 5,
        cols: 60,
        maxLength: 300
    },
    {
        id: "style",
        label: "Style",
        type: 'select',
        options: Object.keys(styles).map(o => {
            return {
                key: o,
                value: styles[o].name
            }
        })
    }
];

class PresentInput extends Component {

    constructor(props) {
        super(props);
        const dueDate = new Date(2020,1,1,0,0,0,0);
        this.state = {
            previewText: 'Hello, in <seconds> seconds your present will appear here!',
            dueDate: dueDate,
            presentTextBox: 'Happy birtdhay!',
            presentText: 'This is your personal present from us',
            style: "defaultStyle",
            seconds: getSeconds(dueDate)
        }
    }

    onValueChanged = (event) => {
        console.log(event);
        if (!event || !event.target || !event.target.id) {
            return;
        }
        this.setState({[event.target.id]: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault(); 
    }

    componentDidMount() {
        setInterval(() => {
            const seconds = getSeconds(this.state.dueDate);
            if (seconds >= 0) {
                this.setState({seconds: seconds});
            }
        }, 1000);
    }

    render() {
        return (
        <div>
            
           <div className={cssStyle.PresentInputs}>
                <form>
               {inputs.map(input => 
                <Input key={input.id} onChange={this.onValueChanged} 
                value={this.state[input.id]} {...input} />)}
                <Input type="button" onClick={this.onSubmit}>SUBMIT</Input>
                </form>
           </div>
            <ol>
                <li><TimerMessage text={this.state.previewText} 
                    cssStyle={styles[this.state.style].style}
                    seconds={this.state.seconds}/></li>
                <li><PresentBox text={this.state.presentTextBox} 
                    img={styles[this.state.style].img} cssStyle={styles[this.state.style].style} /></li>
                <li><Present text={this.state.presentText} 
                    cssStyle={styles[this.state.style].style}/></li>
            </ol>
        </div>);
    }
}

export default PresentInput;