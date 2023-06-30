import React from 'react'
import './course.css';
import ai from './../../../assets/img/ai.png'
import sd from './../../../assets/img/sd.png'
import dg from './../../../assets/img/dg.png'
import hacker from './../../../assets/img/hacking.png'

function course() {

    const courseData = [{
        tittle: 'AI Devlopment',
        desc: 'Master AI Development',
        img:ai
    },

    {
        tittle: 'DIGITAL MARKETING',
        desc: 'Master DIGITAL MARKETING',
        img:dg
    },

    {
        tittle: 'CYBER SECURITY',
        desc: 'Master CYBER SECURITY',
        img:hacker
    },
    {
        tittle: 'SOFTWARE DEVELOPMENT',
        desc: 'Master SOFTWARE DEVELOPMENT',
        img:sd
    },

];

  return (
    <div className='container course-container'>

        <div className="course-top">
            <h2 className='section-title'>Our free courses</h2>
            <p>The top trending free courses with free certificates</p>

            <div className="course-wrapper">
                {
                    courseData.map((course, index) => (

                <div className="course-item" key={index}>
                    <span className='course-icon'>
                        <img src={course.img} alt="" />
                    </span>
                    <div className="course-content">
                        <h4>{course.tittle}</h4>
                        <p>{course.desc}</p>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default course

