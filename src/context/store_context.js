import { createContext, useState } from "react";
import { item_list } from '../assets/image.js';

export const context_data = createContext(null);

function ContextProvider(props) {
  const [cartItems, modifyCart] = useState({});
  function cartdot()
  {
    let tot=0;
    for(const i in cartItems)
      {
        if(cartItems[i]>0)
          {
            tot+=cartItems[i];
          }
      }
      return tot;
  }
  
 
  function addItem_cart(item_id) {
    modifyCart(prevCart => {
      const currentCount = prevCart[item_id] || 0;
      return { ...prevCart, [item_id]: currentCount + 1 };
    });
  }

  const remove_cart = (item_id) => {
    modifyCart(prevCart => {
      const currentCount = prevCart[item_id];
      if (currentCount >= 1) {
        return { ...prevCart, [item_id]: currentCount - 1 };
      } 
      else
      return { ...prevCart, [item_id]: undefined };
    });
  };
  function totalAmount() {
    let totalamount = 0;
    console.log(cartItems)
    for (const [item_id, count] of Object.entries(cartItems)) {
      if (count > 0) {
        const item_detail = item_list.find((item) => item.id === parseInt(item_id, 10));
        if (item_detail) {
          totalamount += item_detail.price * count;
        }
      }
    }
    return totalamount;
  }

  const context_value = { item_list, cartItems, addItem_cart, remove_cart,totalAmount,cartdot };

  return (
    <context_data.Provider value={context_value}>
      {props.children}
    </context_data.Provider>
  );
}

export default ContextProvider;
