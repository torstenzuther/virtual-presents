import React, { Component } from 'react';
import img001 from './../../../assets/001.svg';

export default class NerdBag extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img001} alt={""} width={this.props.width} height={this.props.height} />
        </div>
    }

};