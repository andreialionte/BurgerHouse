import React from 'react';
// import { useState } from 'react';
import Meals from './Meals';
import "./UI/ASSETS/style.scss"

const DataMeals = (props) => {


  

    return (
      <div className='meals'>
        {props.Data.map((item, index) => (
          <Meals
            key={index}
            burger={item.burger}
            desc={item.desc}
            price={item.price}
            addToCart={props.addToCart}
          />
        ))}
      </div>
    );
    
  
  
}

export default DataMeals;
