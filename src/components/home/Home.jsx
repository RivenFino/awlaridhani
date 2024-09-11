import React from 'react';
import "./home.css";
import Me from "../../assets/image/AwlaInstagram.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className="intro">
                <img src={Me} alt="" className="home__img img__circle" />
                <h1 className="home__name">Awla Ridhani</h1>
                <span className="home__education">Saya Seorang Pengembang Web</span>

                <HeaderSocials  />

                <a href="#contact" className='btn '>Hubungi Saya</a>

                <ScrollDown />
            </div>
        </section>
    );
}

export default Home