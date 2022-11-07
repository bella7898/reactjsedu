import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.png';
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Hearts of Love" />
  </div>
)
export default Header;