import React from 'react'
import './css.css'
import img1 from '../img/png2.png'
import img2 from '../img/png3.png'
import img3 from '../img/account.png'
const P3 = () => {
    return (
        <div>
            <div className='title'>
                <h1>
                    How does it work?
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="box">
                <div className="box_1">
                    <h2>Create Your Account</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.</p>
                    <button>Get Start</button>
                </div>
                <div className="box_2">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="box_1">
                <div className="box__1">
                    <img src={img2} alt="" />
                </div>
                <div className="box__2">
                    <h2>Create Your Account</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.</p>
                    <button>Get Start</button>
                </div>

            </div>
            <div className="box">
                <div className="box_1">
                    <h2>Create Your Account</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.</p>
                    <button>Get Start</button>
                </div>
                <div className="box_2">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default P3
