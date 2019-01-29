import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import * as styles from './../../assets/styles';
import { connect } from 'react-redux';
import * as actions from './../../store/presentView/actions';

class PresentView extends Component {

    componentDidMount() {
        this.props.init(this.props.match.params.id);
    }
    
    render() {
        if (!this.props.presentView.preview ||
             !this.props.presentView.seconds) {
            return "LOADING";
        }
        console.log(this.props.presentView.seconds);
        const selectedStyle = styles[this.props.presentView.preview.style];
        if (this.props.presentView.secret) {
            if (this.props.presentView.showBox) {
                return <PresentBox clicked={this.props.showPresent}
                text={this.props.presentView.secret.presentTextBox} img={selectedStyle.img} cssStyle={selectedStyle.style}  />;
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
        presentView: state.presentView
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showPresent: () => dispatch(actions.showPresent()),
        init: (id) => dispatch(actions.presentViewInit(id)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentView);