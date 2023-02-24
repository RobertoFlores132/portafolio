import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import Aboutme from './Aboutme';

const Home = () => {
    return (
    <div className='Home'>
        <div className='menu' >
            <i className="fa-solid fa-bars"></i>
        </div>
        <div className='Navbar'>
            <a href="Home.js">Home</a>
            <a href="Aboutme.js">Sobre mi</a>
        </div>
        <div className='front'>
            <h3 className='title1'>Bienvenidos a mi sitio web</h3>
            <h1>Web developer</h1>
            <a href='https://www.linkedin.com/in/roberto-flores-1bb739166/' className='box'>Visita mi LinkedIn</a>
        </div>
    </div>
    );
};

export default Home;