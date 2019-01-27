import React, { Component } from 'react';
import TimerMessage from './../../components/TimerMessage/TimerMessage';
import Present from './../../components/Present/Present';
import PresentBox from './../../components/PresentBox/PresentBox';
import * as styles from './../../assets/styles';
import { getSeconds } from './../../utility/utility';
import Error from './../../components/Error/Error';
import api from '../../api/api';

class PresentView extends Component {

    state = {
        showBox: true,
        seconds: null,
        preview: null,
        secret: null
    }

    updateSeconds = () => {

        const seconds = getSeconds(new Date(this.state.preview.dueDate));
        this.setState({seconds: seconds});
        if (!this.state.secret)
        {
            api.getPresentSecret(this.props.match.params.id)
                .then(response => {
                    console.log(response);
                    this.setState({secret: response.data});
                })
                .catch(e => {
                    console.log(e);
                });
            window.clearInterval(this.updateSeconds);
            
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.updateSeconds);
    }

    componentDidMount() {
        api.getPresentPreview(this.props.match.params.id)
            .then(response => {
                this.setState({preview: response.data});
                this.updateSeconds();
                setInterval(() => {
                    this.updateSeconds();
                }, 1000);
            });
    }
    
    presentBoxClickHandler = () => {
        this.setState({showBox: false});
    }

    render() {
        if (!this.state.preview) {
            return "LOADING";
        }
        const selectedStyle = styles[this.state.preview.style];
        if (this.state.seconds <= 0 && this.state.secret) {
            if (this.state.showBox) {
                return <PresentBox clicked={this.presentBoxClickHandler}
                text={this.state.secret.presentTextBox} img={selectedStyle.img} cssStyle={selectedStyle.style}  />;
            } else {
                return <Present text={this.state.secret.presentText} 
                cssStyle={selectedStyle.style}/>;
            }
        }
        return(<TimerMessage text={this.state.preview.previewText} 
            cssStyle={selectedStyle.style}
            seconds={this.state.seconds}/>);
    }
}


export default PresentView;

// export default connect(mapStateToProps, mapDispatchToProps)(PresentView);