import React from 'react';

const Container = props => {
    let addClass = props.addClass;
    let classes = '';
    addClass !== undefined ? classes = classes + ' ' + addClass : addClass = '';

    <div className={`container${props.fluid ? "-fluid" : ""} ${classes}`} {...props}/>;
}

export default Container;