import React from 'react'
import pic from './../../assets/img/miya.jpg'
import './about.css'

function about() {
  return (
    <div className='conatiner'>
        <div className="about-us-container">
            <div className="team-members">
                <h2>Our Team</h2>
                <div className="member-card">
                    <img className='member-image' src={pic} alt="" />
                    <h3 className='member-name'>Nancy</h3>
                    <p className='member-role'>Co-founder</p>
                </div>
            </div>

            <div className="about-us-disc">
                <h1 className='about-us-heading'>About Us</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                </p>
            </div>
        </div>
    </div>
  )
}

export default about
