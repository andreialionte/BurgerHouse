import './App.scss';
import React, { useState} from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Show from "./components/Show";
import Cart from './components/Modal/Cart';
import DataMeals from './components/DataMeals';
import CartProvider from "./context/CartProvider"

function App() {
  
  const Data = [
    {id: 1, burger: "Classic Cheeseburger Delight", desc: "Beef, Cheddar cheese, Tomato, Red onion, Ketchup, Mayonnaise", price: 9 },
    {id: 2, burger: "Deluxe Veggie Burger Meal", desc: "black beans, Roasted red bell peppers, Baby spinach leaves, chickpeas", price: 8 },
    {id: 3, burger: "BBQ Bacon Burger", desc: "Beef,BBQ sauce,Bacon,Lettuce,Red onion, Pepper", price: 11 }
];


  const [cartIsShown, setCartIsShown ] = useState(false);

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const [cartcount, setCartCount] = useState(0);
  


  const addToCart = (item) => {
    setCartCount(cartcount + 1);
  };




 



  return (
    <React.Fragment>
      <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} cartItems={Data} />}
      <Header onCartCount={cartcount} onShowCart={showCartHandler} />  
      <Banner />
      <Show />
      <DataMeals addToCart={addToCart} Data={Data}  />
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
