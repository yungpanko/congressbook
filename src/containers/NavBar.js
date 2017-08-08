import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink to='/' exact>Home</NavLink></li>
        <li><NavLink to='/findmyreps' exact>Find My Reps</NavLink></li>
        <li><NavLink to='/house' exact>House</NavLink></li>
        <li><NavLink to='/senate' exact>Senate</NavLink></li>
        <li><NavLink to='/bills' exact>Bills</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
