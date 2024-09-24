import React from 'react';
import { calculateAge } from './birthCalc';
import { useTranslation } from 'react-i18next';  
import Image from "../../assets/image/Awla2.jpg";
import "./about.css"
    

const About = () => {
    const { t, i18n } = useTranslation("global");  
    const birthdate = '2007-01-19';
    const age = calculateAge(birthdate);

    return (
        <section className='about container section' id='about'>
            <h2 className="section__title">{t('about.title')}</h2>    

            <div className="about__container grid">
                <img src={Image} alt="about" className="about__img img__circle-about" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">{t('about.description', {age})}</p>
                        <a href={`${process.env.PUBLIC_URL}/files/CV-ATS-AWLA.pdf`} download={`${process.env.PUBLIC_URL}/files/CV-ATS-AWLA.pdf`} className="btn">{t('about.downloadCv')}</a>
                    </div>

                    <div className="about__skills grid">
                        <h2 className="about__skills-title">{t('about.skillsTitle')}</h2>
                        
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">{t('about.skills.frontend')}</h3>
                                <span className="skills__number">74%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage frontend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">{t('about.skills.backend')}</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage backend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">{t('about.skills.uiux')}</h3>
                                <span className="skills__number">52%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage uiux"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
