import React, { useContext, } from "react";
import "./cart.css";
import { context_data } from "../../context/store_context";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const navigate=useNavigate();
  const { item_list, cartItems, remove_cart } = useContext(context_data);
  const {totalAmount}=useContext(context_data);
  const amt=totalAmount();
  const finalamt=amt+(0.15*amt);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {item_list
          .filter((item) => cartItems[item.id] > 0)
          .map((it, index) => (
            <div key={it.id} className="cart-row">
              <img src={it.image} alt={it.item_name} className="cart-image" />
              <p>{it.item_name}</p>
              <p>${it.price}</p>
              <p>{cartItems[it.id]}</p>
              <p>${(it.price * cartItems[it.id]).toFixed(2)}</p>
              <button
                className="remove-btn"
                onClick={() => {
                  remove_cart(it.id);
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>CART TOTAL</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${amt}</p>
          </div>
          <hr></hr>
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>{15}%</p>
          </div>
          <hr></hr>
          <div className="cart-total-details">
            <b>TOTAL</b>
            <b>${finalamt}</b>
          </div>
          <button onClick={()=>navigate('/order')}>Procced to checkout</button>
        </div>
        
        <div >
          <div className="cart-promo">
            <p>Promo code available? Enter</p>
            <div className="promocode-input"><input type='text' placeholder="Enter promo code"></input></div>
            <button className="btn1">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
