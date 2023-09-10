import React from 'react';

const HeaderCart = (props) =>{
    return(
        <React.Fragment>
        <button onClick={props.onShowCart}>Your Chart {props.onCartCount}</button>
        </React.Fragment>
    )
}

export default HeaderCart;