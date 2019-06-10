import React, { Component } from 'react';
import img006 from './../../../assets/006.svg';

export default class FinePralines extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img006} alt={""} width={this.props.width} height={this.props.height} />
        </div>
    }

};