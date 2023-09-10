import React, { useReducer } from "react";
import CartContext from "./cart-context";

// Initial state for cart
const initialCartState = {
  items: [],
  totalAmount: 0,
};

// Reducer function
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedCart = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    return {
      items: updatedCart,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const updatedCart = state.items.filter((item) => item.id !== action.id);
    const removedItem = state.items.find((item) => item.id === action.id);
    const updatedTotalAmount =
      state.totalAmount - (removedItem ? removedItem.price : 0);
    return {
      items: updatedCart,
      totalAmount: updatedTotalAmount,
    };
  } else {
    return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartItems] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartItems({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartItems({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;