import React from 'react'
import spaLogo from "../images/spaLogo.svg";
import user from "../images/user.svg";
import shoppingBag from "../images/shopping-bag.svg";
import search from "../images/search.svg";
import '../style/Header.css';





const Header = () => {
  return (
      <header>
          <div className='logo'>
              <img src={spaLogo} alt="Logo" />
              <p>Luxe Animal Spa</p>
          </div>
          <nav className='navbar'>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#aboutus">Products</a></li>
                  <li><a href="#services">Spa Services</a></li>
                  <li><a href="#services">Book Appointment</a></li>
                  <li><a href="#services">Blog</a></li>
                  <li><a href="#services">About Us</a></li>
                  <li><a href="#services">Contact Us</a></li>
              </ul>
          </nav>

          <div className='icons-bar'>
              <img src={search} alt="" />
              <img src={shoppingBag} alt="" />
               <img src={user} alt="" />
          </div>
   </header>
  )
}

export default Header