import React from 'react';
import styled from 'styled-components';
import './footer.css';
import image from '../../assets/image/Ryo-Yamada/1.jpg';
import image2 from '../../assets/image/Ryo-Yamada/2.jpg';

const FooterImg = styled.div`
  background-image: url(${image2});
  width: 100%;
  height: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 75%;
  filter: grayscale(0.5) brightness(70%);
  display: flex;
  padding-left: 1.25rem;
  color: #fff;
justify-content: start;
align-items: center;
  
  @media screen and (max-width: 1024px) {
    height: 50%;
    }
    
    @media screen and (max-width: 767px) {
    background-position: 50% 40%;
    background-image: url(${image});
  }
`;

const Footer = () => {
    return (
        <footer className='footer'>
            <FooterImg >Rivenly &copy; 2024</FooterImg>
        </footer>
    );
}

export default Footer;
