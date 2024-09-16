import React, { useEffect, useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/logo.svg';
import { sectionIds } from './sectionIds'; // Mengimpor sectionIds dari sectionIds.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
    const { t, i18n } = useTranslation();
    const [toggle, showMenu] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const marginTop = 0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({ top: scrollToY, behavior: "smooth" });
        }
    }

    const determineActiveSection = () => {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionIds[i].id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveLink(sectionIds[i].id);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            determineActiveSection();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home" className='nav__logo'>
                    <img className='logo' src={Logo} alt="Logo" />
                </a>

                <nav className='nav'>
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {
                                sectionIds.map((section, i) => (
                                    <li key={i} className="nav__item" onClick={() => scrollToSection(section.id)}>
                                        <Link className={activeLink === section.id ? "active nav__link" : "nav__link"} onClick={() => showMenu(!toggle)} to="/">
                                            <i className={section.icon}></i>
                                            <p className='text'>{t(section.title[i18n.language])}</p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">
                        Rivenly &copy; 2024
                    </span>
                </div>
            </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <i className={toggle ? "fa-solid fa-xmark" : "icon-menu"}></i>
            </div>
        </>
    );
}

export default Sidebar;
