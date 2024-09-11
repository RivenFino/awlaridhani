import React from 'react';
import "./about.css";
import Image from "../../assets/image/AwlaInstagram.jpg"

const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img img__circle" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Halo!, Nama saya Muhammad Awla Ridhani, dan saya seorang pengembang Software terkhususnya di bagian website. Saya memiliki cukup pengalaman dalam membuat website baik dari frontend(Tampilan) maupun backend(Balik Layar).</p>
                        <a href="doc/CV-Awla.pdf" download={"doc/CV-Awla.pdf"} className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <h2 className="about__skills-title">Keahlian</h2>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Front-End</h3>
                                <span className="skills__number">74%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage frontend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Back-End</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage backend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Desain UI/UX</h3>
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

export default About