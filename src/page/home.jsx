import React from 'react'
import head_img from '../img/header_img.png'
import './home.css'
const home = () => {
  return (
    <div>
      <div className="head">
        <div className="text">
          <h1>
            Smart booking tool to grow your online business
          </h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.
          </h2>
          <button>Get Start</button>
        </div>
        <div className="img">
          <img className='up-down' src={head_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default home
