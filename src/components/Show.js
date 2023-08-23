import React from 'react';
import '../components/UI/ASSETS/style.scss';
import {Fade, Zoom} from "react-reveal";

const Show = () =>{
    return(
        <Fade bottom >
        <div className='show'>
            <h1>Burger House</h1>
            <p>Serving up irresistible burgers for your ultimate taste experience.</p>
        </div>
        </Fade>
    )
}

export default Show