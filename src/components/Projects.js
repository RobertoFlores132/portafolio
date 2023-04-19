import React, { useEffect }from 'react';
import Proyect1 from '../Images/Proyect1.png'
import Project2 from '../Images/Project2.png'
import Project3 from '../Images/Project3.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        Aos.init({
            duration:700,
            offset: 10
        })
    }, [])

    return (
        <div data-aos="fade-up" className='projectcontainer'>
            <div data-aos="fade-up" className='my-projects'>
                <h3>Mis</h3>
                <h1>Proyectos</h1>
            </div>
            <div data-aos="fade-up" className='descriptioncontainer'>
            <div data-aos="fade-up" className='proyect-image1'>
                <img className='Proyect1' src={Proyect1} alt="Rick And Morty API" />
            </div>
            <div data-aos="fade-up" className='proyect-description'>
                <h3>Rick And Morty API</h3>
                <p>Página web dedicada a mostrar los universos y personajes de la serie
                    Rick y Morty.
                </p>
            </div>
            <div data-aos="fade-up" className='proyect-button'>
            <a className='button1' href='https://fervent-blackwell-cc377f.netlify.app/' target="_blank" rel="noopener noreferrer" >Visitar Sitio</a>
            <a className='button1' href='https://github.com/RobertoFlores132/RickAndMortyAPI' target="_blank" rel="noopener noreferrer" >Ver repositorio</a>
            </div>

            <div data-aos="fade-up" className='descriptioncontainer2'>
            <div data-aos="fade-up" className='proyect-button2'>
            <a className='button1' href='https://wonderful-haibt-5416e9.netlify.app/' target="_blank" rel="noopener noreferrer" >Visitar Sitio</a>
            <a className='button1' href='https://github.com/RobertoFlores132/WeatherApp' target="_blank" rel="noopener noreferrer" >Ver repositorio</a>
            </div>
            <div data-aos="fade-up" className='proyect-description2'>
                <h3>Weather App</h3>
                <p>Página que muestra el clima en grados Fahrenheit y Celsius, también detecta la ubicación
                </p>
            </div>
            <div data-aos="fade-up" className='proyect-image2'>
                <img className='Proyect2' src={Project2} alt="Rick And Morty API" />
            </div>
            </div>

            <div data-aos="fade-up" className='descriptioncontainer'>
            <div data-aos="fade-up" className='proyect-image1'>
                <img className='Proyect1' src={Project3} alt="Rick And Morty API" />
            </div>
            <div data-aos="fade-up" className='proyect-description'>
                <h3>Gym Page</h3>
                <p>Página web creada para un gimnasio, cuenta con formulario y envío de correos electrónicos
                    automáticos.
                </p>
            </div>
            <div data-aos="fade-up" className='proyect-button'>
            <a className='button1' href='https://fervent-blackwell-cc377f.netlify.app/' target="_blank" rel="noopener noreferrer" >Visitar Sitio</a>
            <a className='button1' href='https://github.com/RobertoFlores132/RickAndMortyAPI' target="_blank" rel="noopener noreferrer" >Ver repositorio</a>
            </div>
            </div>

            </div>
            </div>
    );
};

export default Projects;