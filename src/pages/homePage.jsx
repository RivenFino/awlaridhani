import React from 'react';
import { useTranslation } from 'react-i18next';
import About from '../components/about/About';
import Home from '../components/home/Home';
import Services from '../components/services/Services';
import Resume from '../components/resume/Resume';
import Portofolio from '../components/portofolio/Portofolio';
import Contact from '../components/contact/Contact';
import LanguageButton from '../components/button/LanguageButton';
import Footer from '../components/footer/Footer';

export const HomePage = () => {
  return (
    <>
      <main className='main'>
        <LanguageButton />
        <Home />
        <About />
        <Services />
        <Portofolio />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
