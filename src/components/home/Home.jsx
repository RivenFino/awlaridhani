import React from 'react';
import "./home.css";
import { useTranslation } from 'react-i18next';
import Me from "../../assets/image/AwlaInstagram.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    const { t, i18n } = useTranslation("global");  

    return (
        <section className='home container' id='home'>
            <div className="intro">
                <img src={Me} alt="" className="home__img img__circle" />
                <h1 className="home__name">{t('home.name')}</h1>
                <span className="home__education">{t('home.education')}</span>

                <HeaderSocials  />

                <a href="#contact" className='btn '>{t('home.contact')}</a>

                <ScrollDown />
            </div>
        </section>
    );
}

export default Home