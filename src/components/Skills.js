import React from 'react';
import Image from '../Images/puntos-1.svg';
import Icon1 from '../Images/icon_1.svg'
import Icon2 from '../Images/icon_2.svg'
import Icon3 from '../Images/icon_3.svg'

const Skills = () => {

    return (
        <div className='Skill'> 
            <div className='dotcontainer'>
                    <img className='Dots2' src={Image} alt="Dots" />
                </div>
            <div className='Title'>
                <h3>Educación y</h3>
                <h1>Habilidades</h1>
            </div> 
            <div className='List'>
            <div className='Education'>
                    <div className='icon-edu'>
                    <img className='icon1' src={Icon1} alt="icon1" />
                    <h3><b>Desarrollador Web</b></h3>
                    </div>
                    <p><i>Fecha:</i></p>
                    <p>21/10/2021 - 15/08/2022</p>
                    <p><i>Escuela:</i></p>
                    <p>Academlo</p>
            </div>
            <div className='Languaje'>
                <div className='icon-leng'>
                    <img className='icon2' src={Icon2} alt="icon2" />
                    <h3><b>Idiomas</b></h3>
                </div>
                    <p><i>Inglés:</i> B2</p>
            </div>
            <div className='Technologies'>
                    <div className='icon-tec'>
                        <img className='icon3' src={Icon3} alt="Icon3" />
                        <h3>Tecnologías</h3>
                    </div>
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