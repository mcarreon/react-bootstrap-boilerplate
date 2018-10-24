import React from 'react';


const Col = props => {
    let addClass = props.addClass;
    let classes = '';
    addClass !== undefined ? classes = classes + ' ' + addClass : addClass = '';
    let number = String(props.col);
    let col = (<div className={`col-${number} ${classes}`} {...props}/>);

    if (props.size != undefined) {
        col = (<div className={`col-${props.size}-${number} ${classes}`} {...props} />);
    }    

    return col;
}

export default Col;