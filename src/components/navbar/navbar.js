import './navbar.css';
import im from '../../assets/image';
import React, { useState  ,useContext} from 'react';
import { Link } from 'react-router-dom';
import { context_data } from '../../context/store_context';
function Navbar() {
  const [menu, setMenu] = useState('');
  
  const {totalAmount,cartdot}=useContext(context_data);
  const amt=totalAmount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const totdis=cartdot();
  function handleClick(event) {
    setMenu(event.target.textContent);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='nav'>
      <Link to='/'>
        <img src={im.logo} alt='burger' />
      </Link>
      <h2>FoodiWe</h2>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li className={menu === 'Home' ? 'active' : ''} onClick={handleClick}>
          Home
        </li>
        <li className={menu === 'About' ? 'active' : ''} onClick={handleClick}>
          About
        </li>
        <li className={menu === 'Contact' ? 'active' : ''} onClick={handleClick}>
          Contact
        </li>
      </div>
      <div className='div-right'>
        <img src={im.search} alt='search' className='cartIm' />
        <div className='div-search'>
          <Link to='/cart'>
            <img src={im.cart} alt='cart' className='link-im' />
          </Link>
          <div className={amt>0 ? 'dot' : ''}>{totdis>0?totdis:''}</div>
        </div>
        <button>Sign in</button>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <img src={im.hamburger} alt='Menu' />
      </div>
    </div>
  );
}

export default Navbar;
