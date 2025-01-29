import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartItem.css';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {




  const cart = useSelector(state => state.cart.items);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    console.log(cart.map((item) => item));
    setCartTotal(cart.reduce((acc, item) => acc += item.quantity * parseInt(item.cost.replace('$', '')), 0))

  }, [cart])

  const dispatch = useDispatch();


  const handleContinueShopping = (e) => {
    onContinueShopping(e)
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ ...item, quantity: item.quantity + 1 }))
  };

  const handleDecrement = (item) => {
    if (item.quantity > 0) {
      dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 }))
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item))

  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return (item.quantity * parseInt(item.cost.replace('$', '')))
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: $ <span>{cartTotal}</span></h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


