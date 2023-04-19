import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Form from '../Images/formulario.png';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        Aos.init({
            duration:700,
            offset: 10
        })
    }, [])
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ema7shr', 'template_6kjf7gs', form.current, '77ENNKVfp-fZUeZDz')
        .then((result) => {
            Swal.fire('Éxito', 'Mensaje enviado', 'success');
        }, (error) => {
            Swal.fire('Error', 'inténtalo más tarde', 'error');
        });
        e.target.reset();
    };

    return (
        <form data-aos="fade-up" className='contact' ref={form} onSubmit={sendEmail}>
            <div data-aos="fade-up" className='info'>
                <h3 data-aos="fade-up">¡Envíame Correo!</h3>
                <input data-aos="fade-up" className='name' placeholder='Nombre*' type="text" name="user_name"/>
                <input data-aos="fade-up" className='email' placeholder='Correo*' type="email" name="user_email"/>
                <input data-aos="fade-up" className='topic' placeholder='Asunto*' type="text" />
                <textarea data-aos="fade-up" className='message' placeholder='Mensaje*' name="message" cols="35" rows="5"/>
                <input data-aos="fade-up" className='box2' type="submit" value="Enviar" />  
            </div>
            <div data-aos="fade-up" className='form-img'>
                <img className='form' src={Form} alt="" />
            </div>
            <div className='copycontainer'>
            <div className='copy'>
                <h4>Copyright © 2022 Todos los derechos reservados</h4>
            </div>
            </div>
        </form>
        
    );
};

export default Contact;