import React from 'react'
import './Header.css'
import logo from './../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  
  const navigation_title = [{
    path:'/',
    display: 'Home'
  },
  {
    path:'/services',
    display: 'Services'
  },
  {
    path:'/courses',
    display: 'Course'
  },
  {
    path:'/about',
    display: 'About us'
  },
]

  return (
   <header className='header'>
    <div className='container'>

      <div className="nav_container">
          <div className="log">
            <div className="logo-img">
              <img src={logo} alt="" />
              <h2>LearnWise </h2>
            </div>
          </div>

      
      <div className='navigation'>
        <ul className='menu'>
          {
            navigation_title.map((items)=> (
              <li className='nav_item'> <Link to={items.path}> {items.display}</Link></li>
            ))
          }

        </ul>
      </div>
      </div>

    </div>
   </header>
  );
}

export default Header
