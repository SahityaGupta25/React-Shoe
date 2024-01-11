
import React from 'react'

function Shoe() {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button className='hero-btn1'>
                    SHOP NOW
                    </button >
                    <button className='secondary-btn'>
                    CATEGORY
                    </button>
            </div>


            <div className="hero-shopping">
                <p>Also available On</p>
            </div>
            <div className="hero-brand">
                <img src="/images/amazon.png" alt="Amazon-logo"  />
                <img src="/images/flipkart.png" alt="Flipkart-logo"  />
            </div>

        </div>
        <div className='hero-image'>
            <img src="/images/hero-shoe.png" alt="Nike Shoe" srcset="" />
        </div>
    </main>
  )
}

export default Shoe