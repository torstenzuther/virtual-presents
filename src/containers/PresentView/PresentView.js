import React, { Component } from 'react';
import TimerMessage from './../TimerMessage/TimerMessage';
import Present from './../Present/Present';
import PresentBox from './../PresentBox/PresentBox';
import * as styles from './../../assets/styles';
import { connect } from 'react-redux';
import * as actions from './../../store/presentView/actions';
import { Redirect } from 'react-router-dom';
import Checkout from './../Checkout/Checkout';
import * as config from './../../utility/config';
import Progress from './../../components/Progress/Progress';

class PresentView extends Component {

    componentDidMount() {
        this.props.init(this.props.match.params.id);
    }
    
    render() {
        const presentLink = `${config.frontendUrl}presents/${this.props.match.params.id}`;
   
        if (this.props.presentView.paymentNeeded) {  
            return <Checkout presentId={this.props.match.params.id} presentUrl={presentLink}></Checkout>
        }
        if (this.props.presentView.error) {
            return <Redirect to="/" />
        }
        if ((!this.props.presentView.preview ||
             !this.props.presentView.seconds) && !this.props.presentView.secret) {
            return <Progress />;
        }
        const selectedStyle = styles[this.props.presentView.preview.style];
        if (this.props.presentView.secret) {
            if (this.props.presentView.showBox) {
                return <PresentBox clicked={this.props.showPresent}
                text={this.props.presentView.secret.presentTextBox} img={selectedStyle.img} cssStyle={selectedStyle.style} component={selectedStyle.component} />;
            } else {
                return <Present text={this.props.presentView.secret.presentText} 
                cssStyle={selectedStyle.style}/>;
            }
        }
        return(<TimerMessage text={this.props.presentView.preview.previewText} 
            cssStyle={selectedStyle.style}
            seconds={this.props.presentView.seconds}/>);
    }
}

const mapStateToProps = (state) => {
    return { 
        presentView: state.presentView,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showPresent: () => dispatch(actions.showPresent()),
        init: (id) => dispatch(actions.presentViewInit(id)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentView);