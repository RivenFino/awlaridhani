import React, { useState } from 'react';
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
        },
        description_content: {
            en: "Laravel is a free, open-source PHP framework for building web applications. It's designed to make the development process more enjoyable and creative by simplifying common tasks.",
            id: "Laravel adalah framework PHP open-source yang digunakan untuk mengembangkan aplikasi web. Laravel dirancang untuk mempermudah dan mempercepat proses pengembangan web."
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
        },
        description_content: {
            en: "Tailwind CSS is Cascading Style Sheet (CSS) framework used to design the user interface (UI) of a website. Tailwind CSS is designed to speed up and simplify the process of developing applications with unique designs.",
            id: "Tailwind CSS adalah framework Cascading Style Sheet (CSS) yang digunakan untuk mendesain user interface (UI) situs web. Tailwind CSS dirancang untuk mempercepat dan menyederhanakan proses pengembangan aplikasi dengan desain unik. "
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
        },
        description_content: {
            en: "Flutter is open-source mobile application framework developed by Google for building multiplatform applications. Flutter allows developers to create apps for multiple platforms using a single codebase. ",
            id: "Flutter adalah kerangka kerja aplikasi seluler open-source yang dikembangkan oleh Google untuk membangun aplikasi multiplatform. Flutter memungkinkan pengembang untuk membuat aplikasi untuk berbagai platform dengan menggunakan satu basis kode yang sama. "
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
        },
        description_content: {
            en: "React JS is an open-source JavaScript library used to create user interfaces (UI) for web and mobile applications. React JS is designed to simplify the process of creating interactive UIs in a component-based manner. ",
            id: "React JS adalah library JavaScript open-source yang digunakan untuk membuat user interface (UI) aplikasi web dan mobile. React JS dirancang untuk menyederhanakan proses pembuatan UI interaktif dengan cara berbasis komponen.  "
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
        },
        description_content: {
            en: "Figma is cloud-based application used to design, prototype, and collaborate in real-time. Figma is a popular tool for designing User Interface (UI) and User Experience (UX).",
            id: "React JS adalah library JavaScript open-source yang digunakan untuk membuat user interface (UI) aplikasi web dan mobile. React JS dirancang untuk menyederhanakan proses pembuatan UI interaktif dengan cara berbasis komponen.  Figma adalah aplikasi berbasis cloud yang digunakan untuk mendesain, membuat prototipe, dan berkolaborasi secara real-time. Figma merupakan alat yang populer untuk mendesain User Interface (UI) dan User Experience (UX). "
        }
    },
];

const Services = () => {
    const { t, i18n } = useTranslation("global");

    // State untuk mengontrol modal yang terbuka
    const [openModalId, setOpenModalId] = useState(null);

    // Fungsi untuk membuka modal
    const openModal = (id) => setOpenModalId(id);

    // Fungsi untuk menutup modal
    const closeModal = () => setOpenModalId(null);

    return (
        <section className='services container section' id='skills' >
            <h2 className="section__title">{t('skills.title')}</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description, description_content }) => (
                    <div key={id}>
                        <div
                            className="services__card flex flex-col"
                            onClick={() => openModal(id)} // Buka modal saat card diklik
                        >
                            <img height="60px" width="60px" src={image} alt="" className="services__img" />
                            <h3 className="services__title">{title[i18n.language]}</h3>
                        </div>

                        {openModalId == id && (
                            <div className={`modal flex w-full h-screen pt-[5.465rem] z-[4] items-center justify-center p-4 gap-4 ${openModalId === id ? 'show' : ''}`}>
                                <div className='bg-white flex flex-col justify-center pb-12 items-center w-auto h-auto z-[1000] rounded-xl'>
                                    <div className='flex w-full items-center justify-end py-2 px-4 bg-gray-200 rounded-t-xl'>
                                        <button className='text-3xl hover:text-blue-500' onClick={closeModal}>X</button> {/* Tombol untuk menutup modal */}
                                    </div>
                                    <div className='flex w-full flex-col px-6 py-4 gap-4 overflow-y-auto max-h-[35.35rem]'>
                                        <div className='flex flex-row w-full gap-6 items-center justify-center'>
                                            <img height="70px" width="70px" src={image} alt="" className="services__img" />
                                            <h3 className="services__title max-md:text-6xl text-6xl">{title[i18n.language]}</h3>
                                        </div>
                                        <div className='flex flex-col gap-2 items-start align-start'>
                                            {/* <h4>{t('skills.summary')}</h4> */}
                                            <p className="services__description italic">"{description[i18n.language]}"</p>
                                        </div>
                                        <div className='flex flex-col gap-2 items-start justify-start'>
                                            <h4 className='text-gray-700 font-bold text-lg'>{t('skills.description')}</h4>
                                            <p className="services__description italic">{description_content[i18n.language]}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
