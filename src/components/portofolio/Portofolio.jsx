import React, { useState } from 'react';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';
import "./portofolio.css";

const Portofolio = () => {
    const [items, setItems] = useState(Menu);
    const { i18n } = useTranslation();

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category[i18n.language] === categoryItem;
        });

        setItems(updatedItems);
    }

    return (
        <section className="work container section" id="portofolio">
            <h2 className="section__title">
                {i18n.language === 'id' ? "Projek Terakhir" : "Latest Projects"}
            </h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}> 
                    {i18n.language === 'id' ? "Semua" : "All"}
                </span>
                <span className="work__item" onClick={() => filterItem("website")}>
                    {i18n.language === 'id' ? "Website" : "Website"}
                </span>
                <span className="work__item" onClick={() => filterItem(i18n.language === 'id' ? "aplikasi mobile" : "mobile app")}>
                    {i18n.language === 'id' ? "Aplikasi Mobile" : "Mobile App"}
                </span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const { id, image, title, category } = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>

                                {/* Menampilkan kategori dan judul berdasarkan bahasa yang aktif */}
                                <span className="work__category">{category[i18n.language]}</span>
                                <h3 className="work__title">{title[i18n.language]}</h3>
                                <a href="" className="work__button">
                                    <i className="icon-link work__button-icon"></i>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Portofolio