import React from 'react';
import '../App.css'
import { Link } from 'react-scroll';

const Home = () => {
    return (
    <div className='Home'>
        <div className='menu' >
            <i className="fa-solid fa-bars"></i>
        </div>
        <nav className='Navbar'>
            <Link to='Home' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            <Link to='Aboutme' spy={true} smooth={true} offset={50} duration={500}>Sobre mi</Link>
            <Link to='Skills' spy={true} smooth={true} offset={50} duration={500}>Habilades</Link>
            <Link to='Projects' spy={true} smooth={true} offset={50} duration={500}>Proyectos</Link>
            <Link to='Contact' spy={true} smooth={true} offset={50} duration={500}>Contacto</Link>
        </nav>
        <div className='front'>
            <h3 className='title1'>Bienvenidos a mi sitio web</h3>
            <h1>Web developer</h1>
            <a href='https://www.linkedin.com/in/roberto-flores-1bb739166/' target="_blank" rel="noopener noreferrer" className='box'>Visita mi LinkedIn</a>
        </div>
    </div>
    );
};

export default Home;