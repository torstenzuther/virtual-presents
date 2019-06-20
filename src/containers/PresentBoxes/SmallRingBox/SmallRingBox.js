import React, { Component } from 'react';


const Img = (props) => (
    <svg width={props.width} height={props.height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         viewBox="0 0 512 512" >
             {/* style="enable-background:new 0 0 512 512" */}
    <circle fill="#324A5E" cx="256" cy="256" r="256"/>
    <path fill="#2B3B4E" d="M295.905,508.899c112.116-17.549,200.102-107.858,214.131-221.103L374.875,152.635l-3.736,4.537
        l-34.566-34.566l-53.26,40.762l-35.437-35.437l-17.736,9.119l-45.109,44.534l-52.291,23.13l127.933,127.933l-108.568,32.453
        L295.905,508.899z"/>
    <path fill="#FD8469" d="M142.222,176.269v164.705c0,19.003,15.405,34.406,34.406,34.406H256V176.269H142.222z"/>
    <g>
        <path fill="#FC6F58" d="M256,176.269V375.38h79.37c19.003,0,34.406-15.405,34.406-34.406V176.269H256z"/>
        <path fill="#FC6F58" d="M148.399,147.825c-8.649,0-15.658,7.011-15.658,15.658v41.231H256v-56.889H148.399z"/>
    </g>
    <path fill="#F1543F" d="M379.259,163.483c0-8.649-7.011-15.658-15.658-15.658H256v56.889h123.259V163.483z"/>
    <rect x="227.556" y="147.825" fill="#F4E3C3" width="56.889" height="227.556"/>
    <rect x="256" y="147.825" fill="#F2C59E" width="28.444" height="227.556"/>
    <path fill="#FFD15D" d="M256,147.825h-85.333v-14.939c0-7.458,6.046-13.505,13.505-13.505h43.384
        C243.266,119.38,256,132.115,256,147.825L256,147.825z"/>
    <path fill="#F9B54C" d="M256,147.825h85.333v-14.939c0-7.458-6.046-13.505-13.503-13.505h-43.386
        C268.734,119.38,256,132.115,256,147.825L256,147.825z"/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    
    );

export default class SmallRingBox extends Component {

    render() {
        return <div onClick={this.props.clicked}>
        <Img width={this.props.width} height={this.props.height} />
        </div>
    }

};