/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>LearnWise</h2>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
          </div>

          <div className="footer-box">
            <h4 className='footer_title'>Company</h4>
            <ul className='footer_links'>
              <li><a href="">Our Programs</a></li>
              <li><a href="">Our Plans</a></li>
              <li><a href="">Become a member</a></li>
            </ul>
          </div>

          <div className="footer-box">
          <h4 className='footer_title'>Quick Links</h4>
            <ul className='footer_links'>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Support us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
