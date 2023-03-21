import React from 'react';
import '../App.css'
import Image from '../Images/profile-image.png'
import Image2 from '../Images/puntos-1.svg'

const Aboutme = () => {
    return (
        <div className='Profile'>
            <div className='imagecontainer'>
                <img className='Image' src={Image} alt="Roberto Flores" />
            </div>
            <div className='Dots'>
                <img className='Dot' src={Image2} alt="Dot" />
            </div>
            <div className='Description'>
                <h3>¡HOLA! SOY</h3>
                <h1>ROBERTO FLORES</h1>
            </div>
            
            <div className='About'>
                <p className='About1'> Desarrollador web Fullstack, gamer y streamer, me gusta la tecnología y
                    soy aficionado de la música y el basquetbol, manejo HTML, CSS, Javascript, React y NodeJS,
                    puedo manejar también Angular, Vue y PHP, bases de datos y MySQL.
                    ¡Trabajemos juntos! 
                </p>
            </div>
        </div>
    );
};

export default Aboutme;
