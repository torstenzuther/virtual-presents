import React, { Component } from 'react';
import img010 from './../../../assets/010.svg';

export default class BigOrange extends Component {

    render() {
        return <div onClick={this.props.clicked}>
            <img src={img010} alt={""} width={this.props.width} height={this.props.height}/>
        </div>
    }

};