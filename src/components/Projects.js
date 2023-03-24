import React from 'react';
import Proyect1 from '../Images/Proyect1.png'

const Projects = () => {
    return (
        <div className='projectcontainer'>
            <div className='my-projects'>
                <h3>Mis</h3>
                <h1>Proyectos</h1>
            </div>
            <div className='descriptioncontainer'>
            <div className='proyect-image1'>
                <img className='Proyect1' src={Proyect1} alt="Rick And Morty API" />
            </div>
            <div className='proyect-description'>
                <h3>Rick And Morty API</h3>
                <p>Página web dedicada a mostrar los universos y personajes de la serie
                    Rick y Morty.
                </p>
            </div>
            <div className='proyect-button'>
            <a href='https://fervent-blackwell-cc377f.netlify.app/' target="_blank" rel="noopener noreferrer" className='box'>Visitar Sitio</a>
            <a href='https://github.com/RobertoFlores132/RickAndMortyAPI' target="_blank" rel="noopener noreferrer" className='box'>Ver repositorio</a>
            </div>
            </div>
        </div>
    );
};

export default Projects;