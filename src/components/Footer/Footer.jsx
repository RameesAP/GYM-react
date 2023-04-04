import React from 'react'
import './Footer.css'
import GitHub from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <div>
                    <a href="https://github.com/RameesAP" target='_blank'><img  src={GitHub} alt=""/></a>
                    <a href="https://www.instagram.com/_ramees__/" target='_blank'><img src={Instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/mohamed-ramees-3770b6178/" target='_blank'><img src={LinkedIn} alt="" /></a>
                    </div>
                </div>

                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer