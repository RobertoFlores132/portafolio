import React, { useEffect } from 'react';
import '../App.css'
import Image from '../Images/profile-image.png'
import Image2 from '../Images/puntos-1.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {

    useEffect(() => {
        Aos.init({
            duration:700,
            offset: 10
        })
    }, [])

    return (
        <div data-aos="fade-up" className='Profile'>
            <div data-aos="fade-up" className='imagecontainer'>
                <img className='Image' src={Image} alt="Roberto Flores" />
            </div>
            <div data-aos="fade-up" className='Dots'>
                <img className='Dot' src={Image2} alt="Dot" />
            </div>
            <div data-aos="fade-up" className='Description'>
                <h3>¡HOLA! SOY</h3>
                <h1>ROBERTO FLORES</h1>
            </div>
            
            <div data-aos="fade-up" className='About'>
                <p data-aos="fade-up" className='About1'> Desarrollador web Fullstack, gamer y streamer, me gusta la tecnología y
                    soy aficionado de la música y el basquetbol, manejo HTML, CSS, Javascript, React y NodeJS,
                    puedo manejar también Angular, Vue y PHP, bases de datos y MySQL.
                    ¡Trabajemos juntos! 
                </p>
            </div>
        </div>
    );
};

export default Aboutme;
