import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';  // Import useTranslation
import "./button.css";

const LanguageButton = () => {
    const {t, i18n } = useTranslation("global");  // Mengakses fungsi i18n untuk perubahan bahasa
    const [toggle, showLanguage] = useState(false);


    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        showLanguage(false);
    };

    return (
        <>
            <div className="grid language__container" id='language' style={{ display: toggle ? 'grid' : 'none' }}>
                <button className='language__link' onClick={() => handleChangeLanguage('en')}>English</button>
                <button className='language__link' onClick={() => handleChangeLanguage('id')}>Indonesia</button>
            </div>

            <div className={toggle ? "language__toggle language__toggle-open" : "language__toggle"} onClick={() => showLanguage(!toggle)}>
                <i className="fa-solid fa-globe"></i>  {/* Gunakan icon globe */}
            </div>
        </>
    );
};

export default LanguageButton;
