import React, { Component } from 'react';
import img009 from './../../../assets/009.svg';

export default class SmallGiftCard extends Component {

    render() {
        return <div onClick={this.props.clicked}>
        <img src={img009} alt={""} width={this.props.width} height={this.props.height}/>
    </div>
    }

};