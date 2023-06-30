import React from 'react'
import './Home.css'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Courses from '../courses/course'

function Home() {

    const handleClick = () => {
        window.open('http://www.youtube.com/', '_blank');
    }




  return (
    <>
    <section>
        <div className="container">
             <div className="home-container">
                <div className="home-content">
                    <h2 className='section-title'>Learn Eveerything for free!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className="home-btns">
                        <button className='register-btn' onClick={handleClick}>
                            Get started
                        </button>

                        <button className='register-btn' onClick={handleClick}>
                            Watch Now
                        </button>
                    </div>
                </div>
                <div className="home-image">
                    <div className="home-img-wrapper">
                        <div className="box-01">
                            <div className="box-img">
                                <img src={meta} alt="" />
                            </div>
                        </div>
                        <div className="whatsapp-container">
                            <h5>500 + students</h5>
                            <AiOutlineWhatsApp color='green' />
                        </div>
                        <div className="support">
                            <h5>Active Support</h5>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>
    <Courses/>
    </>
  )
}

export default Home
