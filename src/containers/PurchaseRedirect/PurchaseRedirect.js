import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './../../store/checkout/actions';
import Progress from './../../components/Progress/Progress';

class PurchaseRedirect extends Component {

    componentWillMount() {
        this.props.redirectInit();
    }

    render() {
        let path = "/";
        if (this.props.purchaseInitiatedId) {
            path = `/presents/${this.props.purchaseInitiatedId}`;
            return <Redirect to={path} />;
        }
        return <Progress />;
    }
}

const mapStateToProps = (state) => {
    return { 
        purchaseInitiatedId: state.checkout.purchaseInitiatedId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        redirectInit: () => dispatch(actions.redirectInit()),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(PurchaseRedirect);