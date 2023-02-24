import React from 'react';
import Image from '../Images/puntos-1.svg';

const Skills = () => {

    return (
        <div className='Skill'>
            <div className='Title'>
                <h3>Educación y</h3>
                <h1>Habilidades</h1>
            </div> 
                <div>
                    <img className='Dots2' src={Image} alt="Dots" />
                </div>
            <div className='List'>
            <div className='Education'>
                    <h3><b>Desarrollador Web</b></h3>
                    <i>Fecha:</i>
                    <p>21/10/2021 - 15/08/2022</p>
                    <i>Escuela:</i>
                    <p>Academlo</p>
            </div>
            <div className='Languaje'>
                    <h3><b>Idiomas</b></h3>
                    <p><i>Inglés:</i> B2</p>
            </div>
            <div className='Technologies'>
                    <h3>Tecnologías</h3>
                    <p>HTML</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '80%'}}></div>
                    </div>
                    <p>CSS</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '60%'}}></div>
                    </div>
                    <p>Javascript</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '60%'}}></div>
                    </div>
                    <p>ReactJS</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '70%'}}></div>
                    </div>
                    <p>Redux</p>
                    <div className='bar'>
                    <div className='progress' style={{width: '60%'}}></div>
                    </div>
                    <p>NodeJS</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '70%'}}></div>
                    </div>
                    <p>Express</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '70%'}}></div>
                    </div>
                    <p>Postgress/PGAdmin/Sequelize</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '50%'}}></div>
                    </div>
                    <p>Github</p>
                    <div className='bar'>
                        <div className='progress' style={{width: '90%'}}></div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Skills;