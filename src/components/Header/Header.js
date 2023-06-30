import React from 'react'
import './Header.css'
import logo from './../../assets/img/logo.png';

function Header() {
  
  const navigation_title = [{
    path:'/',
    display: 'Home'
  },
  {
    path:'/',
    display: 'Services'
  },
  {
    path:'/',
    display: 'Course'
  },
  {
    path:'/',
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
              <li className='nav_item'>{items.display}</li>
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
