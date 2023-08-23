import React from 'react';
import '../components/UI/ASSETS/style.scss';
import {Fade} from "react-reveal";

const Header = () =>{
    return(
        <div className="header-wrapper">
        <div className='header'>
        <Fade bottom>
            <h1>Burger House</h1>
            <button>Your Chart  </button>
            </Fade>
            </div>
        </div>
    )
}

export default Header;