import React from 'react';
import "./resume.css";
import Data from './Data';
import Card from './Card';
import { useTranslation } from 'react-i18next';

const Resume = () => {
    const { t, i18n } = useTranslation("global");  

    const categories = {
        education: ['education', 'pendidikan'],
        experience: ['experience', 'pengalaman']
    };

    const filterDataByCategories = (categoryList) => {
        return Data.filter(val => categoryList.includes(val.category[i18n.language]));
    };

    const educationData = filterDataByCategories(categories.education);
    const experienceData = filterDataByCategories(categories.experience);

    return (
        <section className="resume container section" id="journey">
            <h2 className="section__title">{t('journey.title')}</h2> 

            <div className="resume__container grid">
                <div className="timeline grid">
                    {educationData.map(val => (
                        <Card
                            key={val.id} 
                            icon={val.icon}
                            title={val.title[i18n.language]}  
                            year={val.year}
                            description={val.description[i18n.language]}  
                        />
                    ))}
                </div>

                <div className="timeline grid">
                    {experienceData.map(val => (
                        <Card
                            key={val.id} 
                            icon={val.icon}
                            title={val.title[i18n.language]}  
                            year={val.year}
                            description={val.description[i18n.language]}  
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume;
