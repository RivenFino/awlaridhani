import React from 'react';
import './footer.css';
import image from '../../assets/image/Ryo-Yamada/1.jpg';
import image2 from '../../assets/image/Ryo-Yamada/2.jpg';

const Footer = () => {
    const footer__img = {
        backgroundImage: `url(${image2})`,
        width: '100%',
        height: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 70%',
        objectFit: 'cover',
        objectPosition: '50% 70%',
        filter: 'grayscale(0.5) brightness(70%)',
      };

    return (
        <footer className='footer'>
            <div  className='image' style={footer__img }alt="">
                
            </div>
        </footer>
    );
}

export default Footer;
