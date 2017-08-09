import React from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {
  render() {

    return (
      <div className="ui five item menu">
        <NavLink to='/' exact className='item'>Home</NavLink>
        <NavLink to='/findmyreps' exact className='item'>Find My Represenatives</NavLink>
        <NavLink to='/house' exact className='item'>House</NavLink>
        <NavLink to='/senate' exact className='item'>Senate</NavLink>
        <NavLink to='/bills' exact className='item'>Bills</NavLink>
      </div>
    )
  }
}


export default NavBar;
