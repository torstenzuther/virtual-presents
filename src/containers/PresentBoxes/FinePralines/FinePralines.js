import React, { Component } from 'react';

const Img = (props) => (
<svg width={props.width} height={props.height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="#3440db"/><path d="m512 256c0-11.5625-.78125-22.941406-2.265625-34.097656l-134.4375-134.433594-29.90625 76.421875-56.890625-56.890625-179.5 127 137.859375 137.859375-122.859375 45.140625 91.859375 91.859375c13.078125 2.058594 26.484375 3.140625 40.140625 3.140625 141.386719 0 256-114.613281 256-256zm0 0" fill="#1c259e"/><path d="m249.296875 148.5h-112.59375v-61.03125l112.59375 30.03125zm0 0" fill="#e9edf5"/><path d="m262.703125 148.5h112.59375v-61.03125l-112.59375 30.03125zm0 0" fill="#dce1eb"/><path d="m124 193h264v224h-264zm0 0" fill="#ff583e"/><path d="m255.90625 193h132.09375v224h-132.09375zm0 0" fill="#e80e03"/><path d="m223.5 107h65v42h-65zm0 0" fill="#dce1eb"/><path d="m255.90625 107h32.59375v42h-32.59375zm0 0" fill="#cdd2e1"/><path d="m109 148h294v86h-294zm0 0" fill="#e80e03"/><path d="m255.90625 148h147.09375v86h-147.09375zm0 0" fill="#d13400"/><path d="m209 148h94v269h-94zm0 0" fill="#fff"/><path d="m255.90625 148h47.09375v269h-47.09375zm0 0" fill="#e9edf5"/></svg>
    );

export default class FinePralines extends Component {

    render() {
        return <div onClick={this.props.clicked}>
        <Img width={this.props.width} height={this.props.height} />
        </div>
    }

};