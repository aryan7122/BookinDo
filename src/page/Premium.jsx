import React from 'react'
import './Premium.css'
import { RiComputerLine } from "react-icons/ri";

const Premium = () => {
    return (
        <div className='body'>
            <div className="title">
                <h2>
                    Premium Features
                </h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className='boxes'>
                <div>
                    <RiComputerLine />
                    <h3>Powerful Admin & Vendor Dashboard</h3>
                    <p>Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...</p>
                </div>
                <div>
                    <RiComputerLine />
                    <h3>Powerful Admin & Vendor Dashboard</h3>
                    <p>Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...</p>
                </div>
                <div>
                    <RiComputerLine />
                    <h3>Powerful Admin & Vendor Dashboard</h3>
                    <p>Lorem Ipsum has been the industry dummy text of the printing and typesetting industry dummy text of...</p>
                </div>
            </div>
        </div>
    )
}

export default Premium