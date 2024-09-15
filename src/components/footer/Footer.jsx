import React from 'react';
import './footer.css';
import Image from "../../assets/image/Ryo-Yamada/1.jpg";

const Footer = () => {

    return (
        <footer className='footer'>
            <img  className='image' src={Image} alt="" />
        </footer>
    );
}

export default Footer;
