import React from 'react';
import Meals from './Meals';
import "./UI/ASSETS/style.scss"

const DataMeals = () => {
    const Data = [
        { burger: "Classic Cheeseburger Delight", desc: "Beef, Cheddar cheese, Tomato, Red onion, Ketchup, Mayonnaise", price: 9 },
        { burger: "Deluxe Veggie Burger Meal", desc: "black beans, Roasted red bell peppers, Baby spinach leaves, chickpeas", price: 8 },
        { burger: "BBQ Bacon Burger", desc: "Beef,BBQ sauce,Bacon,Lettuce,Red onion, Pepper", price: 11 }
    ];
    return (
        <div className='meals'>
            {Data.map((meal, index) =>(
                <Meals 
                key={index}
                burger={meal.burger}
                desc={meal.desc}
                price={meal.price}
                />
            ))}
        </div>
    );
}

export default DataMeals;
