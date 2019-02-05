import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import * as styles from './../../assets/styles';
import cssStyle  from './PresentInput.module.css';
import Form from './../Form/Form';
import { connect } from 'react-redux'; 
import * as actions from '../../store/presentInput/actions';
import Message from '../../components/Message/Message';
import ContentCard from './../../components/ContentCard/ContentCard';
import QrCodeModal from '../../components/QrCodeModal/QrCodeModal';

class PresentInput extends Component {

    onSubmit = () => {
        const present = {}
        for (let key in this.props.inputs) { 
            present[key] =  this.props.inputs[key].value;
        }
        this.props.onSubmitClicked(present, this.props.auth, this.props.history);
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

        const errorModal = <Message message={this.props.error} 
                show={this.props.error !== null} onClose={this.props.onPresentInputClearError}></Message>;

        let createdPresent = null;
        if (this.props.createdPresentId) {
            createdPresent = <QrCodeModal presentId={this.props.createdPresentId}></QrCodeModal>;
        }
        const selectedStyle = styles[this.props.inputs.style.value];
        return (
            
        <div className={`${cssStyle.flex} ${cssStyle.flexRow}`}>
            {errorModal}
            {createdPresent}
            <div className={cssStyle.inputCard}>
                <ContentCard title="Create new grinch card">
                    <Form inputs={this.props.inputs} onSubmit={this.onSubmit} submitDisabled={this.props.submitDisabled}
                        onValueChanged={(event,id) => {this.props.onValueChanged(id, event.target.value)}}
                    submitCaption={"SUBMIT"}/>
                </ContentCard>
           </div>

           <div className={`${cssStyle.flex} ${cssStyle.flexCol}`}>
                <TimerMessage title="Preview" text={this.props.inputs.previewText.value} 
                        cssStyle={selectedStyle.style}
                        seconds={this.props.seconds}/>
                <PresentBox  title="Present box" text={this.props.inputs.presentTextBox.value} 
                        img={selectedStyle.img} cssStyle={selectedStyle.style} />
                <Present title="Present" text={this.props.inputs.presentText.value} 
                        cssStyle={selectedStyle.style}/> 
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        inputs: state.presentInput.inputs,
        seconds: state.presentInput.seconds,
        submitDisabled: state.presentInput.submitDisabled,
        error: state.presentInput.error,
        auth: state.auth,
        createdPresentId: state.presentInput.createdPresentId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onValueChanged: (id, value) => dispatch(actions.presentInputValueChanged(id, value)),
        onSubmitClicked: (present, auth, history) => dispatch(actions.presentInputSubmitInit(present, auth, history)),
        intervalElapsed: () => dispatch(actions.presentInputCounterIntervalElapsed()),
        onPresentInputClearError: () => dispatch(actions.presentInputClearError())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentInput);