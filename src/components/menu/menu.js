import React from 'react';
import './menu.css';
import {menu_list} from '../../assets/image'; // Adjust the import path accordingly

const Menu = (props) => {
  
  // Assuming menu_list is an array of menu items with 'menu' and 'menuImage' properties
  return (<div className='menu-main'>
    <h2>Explore menu</h2>
    <p>Take your taste buds on an adventure with our menu, where every dish is a masterpiece waiting to be savored and enjoyed.Satisfy your cravings and explore our menu's extensive offerings, carefully curated to cater to every palate and preference.</p>
    <div className="menu-container">
      
      {menu_list.map((item, index) => (
        <div key={index} className="menu-item"onClick={()=>{
          props.explore_variety((i)=>{
            return(i===item.menu?'All':item.menu)
          })
        }}>
          
          <img src={item.menuImage} alt="MenuImage" className={props.variety===item.menu?'image active':'image'}   />
          <div >{item.menu}</div>
        </div>
      ))}
    </div>
    <hr className='hr1'></hr>
    </div>
  );
};

export default Menu;

