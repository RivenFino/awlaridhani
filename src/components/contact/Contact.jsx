import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const sendEmail = (e) => {
      e.preventDefault();
      
      setIsSubmitting(true); 

      emailjs
        .sendForm('service_bly7t79', 'template_zinnqap', form.current, '_MboD1odBZFJgqbqJ')
        .then(
          (result) => {
            console.log('Pesan terkirim!', result.text);
            alert('Pesan berhasil terkirim!');
            setIsSubmitting(false); 
            e.target.reset(); 
          },
          (error) => {
            console.log('Gagal mengirim pesan', error.text);
            alert('Pesan gagal terkirim, coba lagi nanti.');
            setIsSubmitting(false); 
          }
        );
    };

    
    return (
        <div className="contact container section " id='contact'>
            <h2 className="section__title">Hubungi Saya</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Mau langsung kirimkan email?</h3>
                    <p className="contact__details">Langsung saja kirimkan pesan anda!</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" name='from_name' className="contact__form-input" placeholder='Isi nama anda'/>
                        </div>

                        <div className="contact__form-div">
                            <input type="email" name='email' className="contact__form-input" placeholder='Isi email anda'/>
                        </div>
                        
                        <div className="contact__form-div contact__form-area">
                            <textarea name='message' cols={30} rows={10} className="contact__form-input" placeholder='Isi pesan anda'></textarea>
                        </div>
                    </div>

                    <button className="btn contact__button" type='submit' disabled={isSubmitting}>
                    {isSubmitting ? 'Mengirim...' : 'Kirimkan pesan'}</button>
                </form>
            </div>
        </div>
    );
}

export default Contact