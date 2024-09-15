import React from 'react';
import "./services.css";
import Image1 from "../../assets/Icon/laravel.svg"
import Image2 from "../../assets/Icon/tailwind.svg"
import Image3 from "../../assets/Icon/Flutter.webp"
import Image4 from "../../assets/Icon/react.svg"
import Image5 from "../../assets/Icon/figma.webp"
import { useTranslation } from 'react-i18next';  

const data = [
    {
        id: 1,
        image: Image1,
        title: {
            en: "Laravel",
            id: "Laravel"
        },
        description: {
            en: "I am quite proficient in using Laravel for the backend.",
            id: "Saya lumayan bisa menggunakan Laravel untuk Backendnya"
        }
    },
    {
        id: 2,
        image: Image2,
        title: {
            en: "Tailwind",
            id: "Tailwind"
        },
        description: {
            en: "I am used to using Tailwind for styling websites.",
            id: "Saya sudah terbiasa menggunakan Tailwind untuk membuat tampilan CSS pada Website"
        }
    },
    {
        id: 3,
        image: Image3,
        title: {
            en: "Flutter",
            id: "Flutter"
        },
        description: {
            en: "I also have experience in creating mobile apps for the frontend.",
            id: "Saya juga memiliki pengalaman dalam pembuatan Mobile untuk Frontendnya"
        }
    },
    {
        id: 4,
        image: Image4,
        title: {
            en: "ReactJS",
            id: "ReactJS"
        },
        description: {
            en: "I use ReactJS to build this portfolio.",
            id: "Saya menggunakan reactJS dalam pembuatan Portofolio ini"
        }
    },
    {
        id: 5,
        image: Image5,
        title: {
            en: "Figma",
            id: "Figma"
        },
        description: {
            en: "Before implementing the frontend, I need to design the concept in Figma first.",
            id: "Sebelum tampilan frontend di implementasikan, saya perlu membuat konsep tampilannya di Figma terlebih dahulu"
        }
    },
];

const Services = () => {
    const { t, i18n } = useTranslation("global");  
    
    return (
        <section className='services container section' id='skills'>
            <h2 className="section__title">{t('skills.title')}</h2> {/* Menggunakan terjemahan untuk judul */}

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => (
                    <div className="services__card" key={id}>
                        <img height="120px" width="120px" src={image} alt="" className="services__img" />
                        <h3 className="services__title">{title[i18n.language]}</h3> {/* Menampilkan terjemahan sesuai bahasa aktif */}
                        <p className="services__description">{description[i18n.language]}</p> {/* Menampilkan terjemahan sesuai bahasa aktif */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
