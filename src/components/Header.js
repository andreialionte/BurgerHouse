import React from 'react';
import '../components/UI/ASSETS/style.scss';
import {Fade} from "react-reveal";
import HeaderCart from './HeaderCart';

const Header = (props) =>{


    return(
        <div className="header-wrapper">
        <div className='header'>
        <Fade bottom>
            <h1>Burger House</h1>
            <HeaderCart onCartCount={props.onCartCount} onShowCart={props.onShowCart}/>
            </Fade>
            </div>
        </div>
    )
}

export default Header;