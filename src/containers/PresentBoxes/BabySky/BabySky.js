import React, { Component } from 'react';
import img008 from './../../../assets/008.svg';

export default class BabySky extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img008} alt={""} width={this.props.width} height={this.props.height}/>
        </div>
    }

};