import React, { Component } from 'react';
import img004 from './../../../assets/004.svg';

export default class ChristmasPresent extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img004} alt={""} width={this.props.width} height={this.props.height} />
        </div>
    }

};