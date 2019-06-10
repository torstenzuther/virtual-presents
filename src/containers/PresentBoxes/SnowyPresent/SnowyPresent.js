import React, { Component } from 'react';
import img005 from './../../../assets/005.svg';

export default class SnowyPresent extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img005} alt={""} width={this.props.width} height={this.props.height} />
        </div>
    }

};