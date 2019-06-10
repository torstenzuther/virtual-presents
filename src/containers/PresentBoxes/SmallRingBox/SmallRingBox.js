import React, { Component } from 'react';
import img007 from './../../../assets/007.svg';

export default class SmallRingBox extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img007} alt={""} width={this.props.width} height={this.props.height} />
        </div>
    }

};