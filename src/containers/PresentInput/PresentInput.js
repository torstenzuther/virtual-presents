import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import Input from './../../components/Input/Input';
import * as styles from './../../assets/styles';



const inputs = [
    {
        id: "previewText", 
        label: "Invitation text",
        type: 'textarea',
    },
    {
        id: "dueDate",
        label: "Due date",
        type: 'datetime',
    },
    {
        id: "presentTextBox",
        label: "Present text (box)",
        type: 'textarea',
    },
    {
        id: "presentText",
        label: "Present text",
        type: 'textarea',
    },
    {
        id: "style",
        label: "Style",
        type: 'select',
        options: Object.keys(styles)
    }
];

class PresentInput extends Component {


    state = {
        previewText: '123',
        dueDate: new Date().toString(),
        presentTextBox: 'kj',
        presentText: 'ksnfds',
        style: styles.defaultStyle
    }

    onValueChanged = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
        <div>
           <div>
               {inputs.map(input => 
                <Input key={input.id} onChange={this.onValueChanged} 
                value={this.state[input.id]} {...input} />)}
           </div>
            <TimerMessage text={this.state.previewText}/>
            {/* <PresentBox text={this.state.presentTextBox} className={css(styles[this.state.style].style).presentTextBox} /> */}
            {/* <Present text={this.state.presentText} className={css(styles[this.state.style].style).presentText}/> */}
        </div>);
    }
}

export default PresentInput;