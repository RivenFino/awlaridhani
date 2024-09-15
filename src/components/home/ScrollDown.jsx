import React from 'react';
import { useTranslation } from 'react-i18next';

const ScrollDown = () => {
    const { t, i18n } = useTranslation("global");  
    
    return (
        <div className="scroll__down">
            <a href="#about" className="mouse__wrapper">
                <span className="home__scroll-name">{t('home.scroll-name')}</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    );
}

export default ScrollDown