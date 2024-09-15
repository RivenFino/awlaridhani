import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation("global");
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const fromName = formData.get('from_name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!fromName || !email || !message) {
            setModalContent({
                type: 'error',
                message: t('contact.validation.requiredFields')
            });
            setIsModalVisible(true);
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm('service_bly7t79', 'template_zinnqap', form.current, '_MboD1odBZFJgqbqJ')
            .then(
                (result) => {
                    setModalContent({
                        type: 'success',
                        message: t('contact.emailJS.successMessage')
                    });
                    setIsModalVisible(true);
                    setIsSubmitting(false);
                    e.target.reset();
                },
                (error) => {
                    setModalContent({
                        type: 'error',
                        message: t('contact.emailJS.errorMessage')
                    });
                    setIsModalVisible(true);
                    setIsSubmitting(false);
                }
            );
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="contact container section" id='contact'>
                <h2 className="section__title">{t('contact.title')}</h2>

                <div className="contact__container grid">
                    <div className="contact__info">
                        <h3 className="contact__title">{t('contact.infoTitle')}</h3>
                        <p className="contact__details">{t('contact.infoDetails')}</p>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <input
                                    autocomplete="off"
                                    type="text"
                                    name='from_name'
                                    className="contact__form-input"
                                    placeholder={t('contact.placeholderName')}
                                />
                            </div>

                            <div className="contact__form-div">
                                <input
                                    autocomplete="off"
                                    type="email"
                                    name='email'
                                    className="contact__form-input"
                                    placeholder={t('contact.placeholderEmail')}
                                />
                            </div>

                            <div className="contact__form-div contact__form-area">
                                <textarea
                                    name='message'
                                    cols={30}
                                    rows={10}
                                    className="contact__form-input"
                                    placeholder={t('contact.placeholderMessage')}
                                ></textarea>
                            </div>
                        </div>

                        <button
                            className="btn contact__button"
                            type='submit'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t('contact.buttonSending') : t('contact.buttonSend')}
                        </button>
                    </form>
                </div>
            </div>

            <div className={`contact__modal ${!isModalVisible ? 'hidden' : ''}`}>
                <div className="header__modal">
                    <button className="close__modal" onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="body__modal">
                    <i className={modalContent.type === 'success' ? t('contact.emailJS.successIcon') : t('contact.emailJS.errorIcon')}></i>
                    <div className="messa">{modalContent.message}</div>
                </div>
            </div>
        </>
    );
}

export default Contact;
