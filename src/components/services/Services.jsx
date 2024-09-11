import React from 'react';
import "./services.css";
import Image1 from "../../assets/Icon/laravel.svg"
import Image2 from "../../assets/Icon/tailwind.svg"
import Image3 from "../../assets/Icon/Flutter.webp"
import Image4 from "../../assets/Icon/react.svg"
import Image5 from "../../assets/Icon/figma.webp"

const data = [
    {
        id: 1,
        image: Image1,
        title: "Laravel",
        description: "Saya lumayan bisa menggunakan Laravel untuk Backendnya"
    },

    {
        id: 2,
        image: Image2,
        title: "Tailwind",
        description: "Saya sudah terbiasa menggunakan Tailwind untuk membuat tampilan CSS pada Website"
    },

    {
        id: 3,
        image: Image3,
        title: "Flutter",
        description: "Saya juga memiliki pengalaman dalam pembuatan Mobile untuk Frontendnya"
    },

    {
        id: 4,
        image: Image4,
        title: "ReactJS",
        description: "Saya menggunakan reactJS dalam pembuatan Portofolio ini"
    },

    {
        id: 5,
        image: Image5,
        title: "Figma",
        description: "Sebelum tampilan frontend di implementasikan, saya perlu membuat konsep tampilannya di Figma terlebih dahulu"
    },
];

const Services = () => {
    return (<section className='services container section' id='services'>
        <h2 className="section__title">Saya Mampu Menggunakan</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description}) => {
                return (
                    <div className="services__card" key={id}>
                        <img height="120px" width="120px" src={image} alt="" className="services__img" />

                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                );
            })}
        </div>
    </section>
    );
};

export default Services