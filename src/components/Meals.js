import React, { useState, useContext } from "react";
import '../components/UI/ASSETS/style.scss';
import CartContext from "../context/cart-context";

const Meals = (props) => {
  const [add, setAdd] = useState(0);
  const ctxCart = useContext(CartContext);

  const addButtonHandler = (event, item) => {
    event.preventDefault();
    console.log("Cc");
    setAdd(add + 1);
    props.addToCart(); // Call the function passed from App.js

    ctxCart.addItem({
      id: props.id,
      name: props.burger,
      description: props.desc,
      price: props.price, // Pass the price here
    });
  };

  return (
    <div>
      <h1>{props.burger}</h1>
      <p>{props.desc}</p>
      <p>{props.price}$</p>
      <div className="meals2">
        <form>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={add} readOnly />
          <button onClick={addButtonHandler}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default Meals;