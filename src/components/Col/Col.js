import React from 'react';


const Col = props => {
    let number = String(props.col);
    let col = (<div className={`col-${number}`} {...props}/>);

    if (props.size != undefined) {
        col = (<div className={`col-${props.size}-${number}`} {...props} />);
    }    

    return col;
}

export default Col;