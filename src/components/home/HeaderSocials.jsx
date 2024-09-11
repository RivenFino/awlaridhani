import React from 'react';
import "./home.css";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/awlaridhani/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            
            <a href="https://github.com/RivenFino" className="home__social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>
            
        </div>
    );
}

export default HeaderSocials