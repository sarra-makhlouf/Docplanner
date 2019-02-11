import React from 'react';
import logo from '../../pictures/logo-docplanner.svg';

const Header = () => 
    <div className="header">
        <a className="header-element" href="#">
            <img className="logo-docplanner" src={logo} alt="Docplanner Group" width="268px" />
        </a>
        <ul className="header-element header-menu" >
            <li className="header-list"><a href="#"><p>About us</p></a></li>
            <li className="header-list"><a href="#">Career</a></li>
            <li className="header-list"><a href="#">Departments</a></li>
        </ul> 
    </div>

export default Header;