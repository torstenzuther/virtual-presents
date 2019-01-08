import React from 'react';
import Navigation from './../Navigation/Navigation';

const layout = (props) => {
    return (
        <>
            <Navigation />
            {props.children}
        </>
    );
};

export default layout;