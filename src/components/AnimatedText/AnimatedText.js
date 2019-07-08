import React, { Component } from 'react';
import { TweenMax, Bounce } from 'gsap';

export default class AnimatedText extends Component {
    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = null;    
    }

    componentDidMount(){
        this.myTween = TweenMax.to(this.myElement, 1.5, {x: 100, rotation: 720, scale: 1, ease: Bounce.easeOut});
      }


    render() {
        return (<h1 ref={h1 => this.myElement = h1}>{this.props.children}</h1>);
    }
}