import React, { Component } from 'react';
import img003 from './../../../assets/003.svg';

export default class HappyFlowers extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img003} alt={""} width={this.props.width} height={this.props.height} />
        </div>
    }

};