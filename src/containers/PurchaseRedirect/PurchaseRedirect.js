import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PurchaseRedirect extends Component {

    render() {
        let path = "/";
        if (this.props.purchaseInitiatedId) {
            path = `/presents/${this.props.purchaseInitiatedId}`;
        }
        return <Redirect to={path} />;
    }
}

const mapStateToProps = (state) => {
    return { 
        purchaseInitiatedId: state.checkout.purchaseInitiatedId,
    };
};

export default connect(mapStateToProps)(PurchaseRedirect);