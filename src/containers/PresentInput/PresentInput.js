import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import Input from './../../components/Input/Input';
import giftBox from './../../assets/giftbox.svg';

class PresentInput extends Component {

    render() {
        return (
        
        <div>
            <div>
                <Input id="borderStyleInput" label="Border style"
                     type='select' options={['solid', 'dashed']}/>
                <Input id="textColorInput" type='color' label="Text color" />
                <Input id="fontStyleInput" label="Font style"
                     type='select' options={['Times New Roman', 'Courier']}/>
            </div>
            <div>
                <Input id="previewTextInput" type='textarea' label="Invitation text" />
                <Input id="dueDateInput" type='datetime' label="Due date" />
            </div>
            <div>
                <Input id="presentBoxSelect" label="Present box"
                     type='select'>
                     <option value={giftBox}><img src={giftBox} alt=""></img></option>
                     </Input>
                <Input id="presentTextBox" type='textarea' label="Present text (box)" />
                <Input id="presentText" type='textarea' label="Present text" />
            </div>
            <ol>
                <li><TimerMessage /></li>
                <li><PresentBox /></li>
                <li><Present /></li>
            </ol>
        </div>);
    }
}

export default PresentInput;