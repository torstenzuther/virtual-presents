import React, { Component } from 'react';
import img002 from './../../../assets/002.svg';

export default class OrangeNBlue extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img002} alt={""} width={this.props.width} height={this.props.height} />
        </div>
    }

};