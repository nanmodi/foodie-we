import React, { useContext } from 'react'
import './FoodItem.css'
import im from '../../assets/image';
import { context_data } from '../../context/store_context';
const FoodItem = (props) => {
  //const[itemCount,changeCount]=React.useState(0);
  const {cartItems, addItem_cart, remove_cart }=useContext(context_data)
  return (
    <div classNme='food-div'>
      <div className='food-im'><img src={props.image} alt={props.name} className='food-im-img'></img>
     {cartItems[props.id]===undefined?
        <img onClick={()=>{
          addItem_cart(props.id)
        }} src={im.add} alt="adding" className='add-im'></img>: <div className='food-counter'>
        
            <img src={im.remove} alt='remove' onClick={()=>{
          remove_cart(props.id)
        }}></img>
            {cartItems[props.id]}
            <img src={im.add1} alt='adding' onClick={()=>{
          addItem_cart(props.id)
        }}></img>
          
        </div>
}</div>
      <div ><p className='name'>{props.name}</p>
      <p>{props.description}</p>
      <p className='price'>Price: ${props.price}</p></div>
      
    </div>
  )
}

export default FoodItem
