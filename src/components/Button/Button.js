import React from 'react';

const Button = props => {
    let addClass = props.addClass;
    let classes = 'btn';
    addClass !== undefined ? classes = classes + ' ' + addClass : addClass = '';

    return <button className={classes} onClick={} />;
}

export default Button;