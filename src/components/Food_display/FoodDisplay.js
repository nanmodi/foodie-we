import React, { useContext } from 'react';
import './FoodDisplay.css';
import { context_data } from '../../context/store_context';
import FoodItem from '../FoodItem/FoodItem.js';

const FoodDisplay = (props) => {
  const { item_list } = useContext(context_data);

  return (
    <div className='food-display' id='food-display'>
      <h1>Top Dishes around you</h1>
      <div className='food-list'>
        {item_list
          .filter(item => props.variety === 'All' || props.variety === item.category)
          .map(item => (
            <div key={item.id} className='food-item'>
              <FoodItem 
                id={item.id}
                name={item.item_name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
