import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/fruitsbasketlogo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wfb'>What is Fruit Basket?</a></p>
  <p><a href='#bunch'>Open bunches</a></p>
  <p><a href='#map'>Open map</a></p>
  <p><a href='#profile'>Profile</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className= 'fruitbasket__navbar'>
      <div className='fruitbasket__navbar-links'>
        <div className='fruitbasket__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='fruitbasket__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='fruitbasket__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='fruitbasket__navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color = 'fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color = 'fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='fruitbasket__navbar-menu_container scale-up-center'>
            <div className='fruitbasket__navbar-menu_container-links'>
              <Menu />
              </div> 
            <div className='fruitbasket__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>       
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
