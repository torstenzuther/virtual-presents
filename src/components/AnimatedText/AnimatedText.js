import React, { Component } from 'react';
import { TweenLite } from 'gsap';

export default class AnimatedText extends Component {
    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = null;    
    }

    componentDidMount(){
        this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
      }


    render() {
        return (<h1 ref={h1 => this.myElement = h1}>{this.props.children}</h1>);
    }
}