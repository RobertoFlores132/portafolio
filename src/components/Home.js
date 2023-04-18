import React from 'react';
import { useState } from 'react';
import '../App.css'
import { Link } from 'react-scroll';
import dot3 from '../Images/puntos-3.svg'

const Home = () => {

     const [showMenu, setShowMenu] = useState(false);

    return (
    <div className='Home'>
        <div className='menu'>
        <button className='hamburger' onClick={()=> {setShowMenu(!showMenu)}}><i className="fa-solid fa-bars"></i></button>
        { showMenu ? <nav className='hambnav'>
            <Link to='Home' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            <Link to='Aboutme' spy={true} smooth={true} offset={50} duration={500}>Sobre mi</Link>
            <Link to='Skills' spy={true} smooth={true} offset={50} duration={500}>Habilidades</Link>
            <Link to='Projects' spy={true} smooth={true} offset={50} duration={500}>Proyectos</Link>
            <Link to='Contact' spy={true} smooth={true} offset={50} duration={500}>Contacto</Link>
        </nav> : ''}
        </div>
        <nav className='Navbar'>
            <Link to='Home' spy={true} smooth={true} offset={50} duration={500}>Inicio</Link>
            <Link to='Aboutme' spy={true} smooth={true} offset={50} duration={500}>Sobre mi</Link>
            <Link to='Skills' spy={true} smooth={true} offset={50} duration={500}>Habilidades</Link>
            <Link to='Projects' spy={true} smooth={true} offset={50} duration={500}>Proyectos</Link>
            <Link to='Contact' spy={true} smooth={true} offset={50} duration={500}>Contactame</Link>
        </nav>
        <div className='front'>
                <h3 className='title1'>Bienvenidos a mi sitio web</h3>
                <h1><img className='dot3-1' src={dot3} alt="" />Web developer <img className='dot3-2' src={dot3} alt="" /></h1>
            <div className='linkedinbttn'>
                <a href='https://www.linkedin.com/in/roberto-flores-1bb739166/' target="_blank" rel="noopener noreferrer" className='box'>Visita mi LinkedIn</a>
            <div className='dots3'>
                <img className='dot3-3' src={dot3} alt="" />
                <img className='dot3-4' src={dot3} alt="" />
            </div>
            </div>
        </div>
    </div>
    );
};

export default Home;