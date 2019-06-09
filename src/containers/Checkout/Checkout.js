import React, { Component } from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import Text from '../../components/Text/Text';
import { connect } from 'react-redux';
import * as actions from './../../store/checkout/actions';
import PresentCard from '../PresentCard/PresentCard';
import styles from './Checkout.module.css';

class Checkout extends Component{
    
    render() {
        return (
            <ContentCard className={styles.contentCard}>
                <Text>Please buy your Little Joy digital gift card make it appear here!</Text>
                <Text>If you have already paid, wait a moment until the payment process has finished and refresh the page.
                </Text>
                <form onSubmit={() => this.props.purchaseInitiated(this.props.presentId)} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="RAG2ZX7THT384" />
                    <input type="hidden" name="custom" value={this.props.presentId} />
                    <input className={styles.centered} type="image" src="https://www.paypalobjects.com/en_US/DE/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </ContentCard>

        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseInitiated: (id) => dispatch(actions.purchaseInitiated(id)) 
    };
};

export default connect(null, mapDispatchToProps)(Checkout);
