import React, { useContext } from 'react';
import Modal from './Modal';
import CartContext from '../../context/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem'; // Adjust the import path as needed


const Cart = (props) => {
  const ctxCart = useContext(CartContext);

  const totalAmount = `$${ctxCart.items.reduce((total, item) => {
    if (item.price !== undefined) {
      return total + item.price;
    }
    return total;
  }, 0).toFixed(2)}`;
  
  

  const hasItems = ctxCart.items.length > 0;

  const cartItemRemoveHandler = (id) => {

  }

  const itemAddHandler = (item) => {}

  const showCartItems = (
    <ul>
      {ctxCart.items.map((item) => (
        // <li key={item.id}>
        //   {item.name} - {item.price !== undefined ? `$${item.price.toFixed(2)}` : 'N/A'}
        // </li>
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={itemAddHandler.bind(null, item)} />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div>
        {showCartItems}
        <div className='total'>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>

        <div className='actions'>
          <button className='close-button' onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className='order-button'>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;