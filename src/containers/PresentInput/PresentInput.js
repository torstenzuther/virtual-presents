import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import * as styles from './../../assets/styles';
import cssStyle  from './PresentInput.module.css';
import Form from './../Form/Form';
import { connect } from 'react-redux'; 
import * as actions from '../../store/presentInput/actions';
import Error from './../../components/Error/Error';
import Divider from '@material-ui/core/Divider';

class PresentInput extends Component {

    onSubmit = () => {
        const present = {}
        for (let key in this.props.inputs) { 
            present[key] =  this.props.inputs[key].value;
        }
        this.props.onSubmitClicked(present);
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(()=>{
            this.props.intervalElapsed();
        }, 1000)});
    };

    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }

    render() {

        const errorModal = <Error error={this.props.error} 
                show={this.props.error} onClose={this.props.onPresentInputClearError}></Error>;

        const selectedStyle = styles[this.props.inputs.style.value];
        return (
        <div>
            {errorModal}
           <div className={cssStyle.PresentInputs}>
                <Form inputs={this.props.inputs} onSubmit={this.onSubmit} submitDisabled={this.props.submitDisabled}
                    onValueChanged={(event,id) => {this.props.onValueChanged(id, event.target.value)}}
                submitCaption={"SUBMIT"}/>
           </div>

            <Divider variant="middle" />
            <ol>
                <li><TimerMessage text={this.props.inputs.previewText.value} 
                    cssStyle={selectedStyle.style}
                    seconds={this.props.seconds}/></li>
                <li><PresentBox text={this.props.inputs.presentTextBox.value} 
                    img={selectedStyle.img} cssStyle={selectedStyle.style} /></li>
                <li><Present text={this.props.inputs.presentText.value} 
                    cssStyle={selectedStyle.style}/></li>
            </ol>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        inputs: state.presentInput.inputs,
        seconds: state.presentInput.seconds,
        submitDisabled: state.presentInput.submitDisabled,
        error: state.presentInput.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onValueChanged: (id, value) => dispatch(actions.presentInputValueChanged(id, value)),
        onSubmitClicked: (payload) => dispatch(actions.presentInputSubmitInit(payload)),
        intervalElapsed: () => dispatch(actions.presentInputCounterIntervalElapsed()),
        onPresentInputClearError: () => dispatch(actions.presentInputClearError())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentInput);