import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo}></img>
                    <p>lrm50</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon}></img>
                        <img src={assets.twitter_icon}></img>
                        <img src={assets.linkedin_icon}></img>
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>
                        DET IN TOUCH
                    </h2>
                    <ul>
                        <li>+91 755-486-6566</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyright 2024 © Tomato.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer