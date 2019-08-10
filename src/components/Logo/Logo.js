import React from 'react';
import './Logo.css';

const logo = (props) => {
   return (
      <svg
         width={props.width}
         height={props.height}
         viewBox="0 0 708.66142 708.66141">
         <g className="wobble-hor-bottom">
            <g
               transform="translate(0,-343.70079)">
               <use
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  transform="translate(150.33639,225.06978)" />
               <path
                  fill="#800080"
                  cx="607.14284"
                  cy="702.36206"
                  r1="101.98039"
                  r2="50.990196"
                  d="m 707.14282,682.36206 -51.69873,36.33975 19.01924,60.26279 -57.32051,-26.60254 -42.67949,46.60254 -5.62178,-62.94228 -61.69873,-13.66026 51.69873,-36.33975 -19.01924,-60.26279 57.32051,26.60254 42.67949,-46.60254 5.62178,62.94229 z">

                  <animateTransform attributeName="transform"
                     attributeType="XML"
                     type="rotate"
                     from="0 607.14284 702.36206"
                     to="360 607.14284 702.36206"
                     dur="2s"
                     repeatCount="indefinite" />
               </path>
            </g>
            <g
               transform="translate(0,-343.70079)">
               <ellipse
                  fill="#d40000"
                  cx="-141.68199"
                  cy="551.66052"
                  rx="59.407806"
                  ry="133.83827"
                  transform="matrix(0.74563621,-0.66635324,0.66635324,0.74563621,0,0)" />
               <ellipse
                  fill="#550000"
                  cx="-654.48322"
                  cy="94.96376"
                  rx="59.407806"
                  ry="133.83827"
                  transform="matrix(-0.74563621,-0.66635324,-0.66635324,0.74563621,0,0)" />
               <rect
                  fill="#95ffff"
                  width="516.23334"
                  height="114.71852"
                  x="92.179764"
                  y="459.12601" />
               <rect
                 
                  fill="#95ffff"
                  width="98.33017"
                  height="57.359261"
                  x="295.66861"
                  y="400.40103"
                  ry="6.5470181e-06" />
               <rect
                 
                  fill="#0000ff"
                  width="212.61148"
                  height="411.75412"
                  x="133.75659"
                  y="571.05627" />
               <rect
                 
                  fill="#00ffff"
                  width="229.43704"
                  height="415.17175"
                  x="346.19937"
                  y="571.1131" />
            </g>
            <g
              
               transform="translate(0,-343.70079)">
               <path
                 
                  fill="#aa0000"
                  d="m 344.83368,738.62593 -84.67319,93.62188 0,-374.48751 86.03889,0 z"
                  id="path4245"
                  nodetypes="ccccc" />
               <path
                 
                  fill="#d40000"
                  d="m 344.83366,740.76876 84.67317,94.33616 0,-377.34463 -86.03889,0 z" />
            </g>
            <g
               transform="translate(0,-343.70079)">
               <rect
                 
                  fill="#800080"
                  width="67.564835"
                  height="65.732582"
                  x="-691.7442"
                  y="417.96774"
                  transform="matrix(0.32604806,-0.94535319,0.94464458,0.32809543,0,0)" >

                  <animate attributeType="XML" attributeName="width" from="0" to="67.564835"
                     dur="2s" repeatCount="indefinite" />

                  <animate attributeType="XML" attributeName="height" from="0" to="65.732582"
                     dur="2s" repeatCount="indefinite" />
               </rect>
               <circle
                 
                  fill="#800080"
                  cx="-196.77898"
                  cy="753.76379"
                  r="33.321167"
                  transform="matrix(0.884847,-0.46588173,0.46588173,0.884847,0,0)" >
                  <animate attributeType="XML" attributeName="r" from="0" to="33.321167"
                     dur="2s" repeatCount="indefinite" />
               </circle>
               <circle
                 
                  fill="#800080"
                  cx="-144.84987"
                  cy="753.76379"
                  r="33.321167"
                  transform="matrix(0.884847,-0.46588173,0.46588173,0.884847,0,0)" >
                  <animate attributeType="XML" attributeName="r" from="0" to="33.321167"
                     dur="2s" repeatCount="indefinite" />

               </circle>

               <path
                  type="star"
                 
                  fill="#800080"
                  sides="6"
                  cx="119.99999"
                  cy="628.0765"
                  r1="84.852814"
                  r2="42.426407"
                  arg1="0.78539816"
                  arg2="1.3089969"
                  d="M 179.99999,688.07648 130.98076,669.05724 98.038468,710.038 89.999994,658.07648 38.038468,650.038 79.01923,617.09572 59.999992,568.07648 l 49.019238,19.01924 32.94229,-40.98077 8.03847,51.96153 51.96153,8.03847 -40.98077,32.94229 z">
                  <animateTransform attributeName="transform"
                     attributeType="XML"
                     type="rotate"
                     from="0 119.99999 628.0765"
                     to="360 119.99999 628.0765"
                     dur="5s"
                     repeatCount="indefinite" />
               </path>
            </g></g>
      </svg>
   );
};

export default logo;