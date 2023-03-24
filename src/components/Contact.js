import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from '../Images/formulario.png';
import Swal from 'sweetalert2';

const Contact = () => {
    
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
        <form className='contact' ref={form} onSubmit={sendEmail}>
            <div className='info'>
                <h3>¡Envíame Correo!</h3>
                <input className='name' placeholder='Nombre*' type="text" name="user_name"/>
                <input className='email' placeholder='Correo*' type="email" name="user_email"/>
                <input className='topic' placeholder='Asunto*' type="text" />
                <textarea className='message' placeholder='Mensaje*' name="message" cols="35" rows="5"/>
                <input className='box2' type="submit" value="Enviar" />  
            </div>
            <div className='form-img'>
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