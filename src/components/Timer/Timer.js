import React, { Component } from 'react';
import TimerMessage from '../TimerMessage/TimerMessage';
import moment from 'moment';
import 'moment/locale/de';
import PresentBox from '../PresentBox/PresentBox';
import Present from '../Present/Present';

class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showBox: true,
            seconds: this.getSeconds()
        };
    }

    getSeconds = () => {
        var now = moment(Date.now()); //todays date
        var end = moment(this.props.dueDate); // another date
        var seconds = moment.duration(end.diff(now)).asSeconds().toFixed(0);
        return seconds;
    }

    componentDidMount() {
        setInterval(() => {
            const seconds = this.getSeconds();
            if (seconds >= 0) {
                this.setState({seconds: seconds});
            }
        }, 1000);
    }
    
    presentBoxClickHandler = () => {
      this.setState({showBox: false});
    }

    render() {
        
        if (this.state.seconds <= 0) {
            if (this.state.showBox) {
                return <PresentBox clicked={this.presentBoxClickHandler} />;
            } else {
                return <Present />;
            }
        }
        return(<TimerMessage seconds={this.state.seconds}/>);
    }
}

export default Timer;
