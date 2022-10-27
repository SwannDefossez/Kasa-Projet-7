import React from 'react';
import Logo from "../assets/images/LOGO.svg";


const Footer = () => {
    return (
        <div className='footer'>
            <img src={Logo} alt="Logo" />
            <h5 className='footer__h5'>© 2020 Kasa. All rights reserved</h5>
        </div>
    );
};

export default Footer;