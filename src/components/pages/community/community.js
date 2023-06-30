import React from 'react'
import './community.css'
import tc from './../../../assets/img/tc.png'

function community() {

    const handleClick = ()=> {
        window.open('https//www.youtube.com/', '_blank');
    }
  return (
    <div className='container'>
        <div className="start-wrapper">
            <div className="start-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className='section-title'>Join our Free Tech Community</h2>
                <p>The top trending free courses with free certificates</p>
                <button className='register-btn' onClick={handleClick} >Join Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default community
