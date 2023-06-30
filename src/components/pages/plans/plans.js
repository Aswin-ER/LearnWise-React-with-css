import React from 'react'
import './plans.css'

function plans() {

    const pricingData = [
        {
            title: 'Regular Member',
            price: '$0',
            duration: 'month',
            color: "#fff",
            features:[
                'Unlimited acess to the course',
                'Customer support',
                'Personal support',
                'Standard options',
                '5 classes per week'
            ]
        },
        {
            title: 'Premium Member',
            price: '$100',
            duration: 'month',
            color: "#6f55f2",
            features:[
                'Unlimited acess to the course',
                'Customer support',
                'Personal support',
                'Standard options',
                '5 classes per week'
            ]
        },
        {
            title: 'Standard Member',
            price: '$10',
            duration: 'month',
            color: "#fff",
            features:[
                'Unlimited acess to the course',
                'Customer support',
                'Personal support',
                'Standard options',
                '5 classes per week'
            ]
        },

    ]


  return (
    <div className='container'>
        <div className="pricing_top">
            <h2 className='section_title'>
                Premium Pricing Plan
            </h2>
            <p>The top trending free courses with free certificates</p>
        </div>
        <div className="pricing_wrapper">
            {
                pricingData.map((pricingItem, index)=> (
                    <div className="pricing_item" key={index}>
                        <div className="pricing_card_top" style={{background: pricingItem.color}} >
                                <h2 className='section_title'>{pricingItem.title}</h2>
                                <h2 className='pricing_section_title'>{pricingItem.price} <span>{pricingItem.duration}</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                {
                                    pricingItem.features.map((feature, index)=> (
                                        <li key={index}>{feature}</li>
                                    ))

                                }
                            </ul>
                            <button className='register-btn'>Join</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default plans
