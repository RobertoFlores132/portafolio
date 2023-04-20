import './App.css';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 500
    })
  }, [])

  return (
      <div className='App'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Roberto's Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Work Portfolio" />
            </Helmet>
        <div id='Home'>
          <Home/>
        </div>
        <div data-aos="fade-up" id='Aboutme'>
          <Aboutme/>
        </div>
        <div data-aos="fade-up" id='Skills'>
          <Skills/>
        </div>
        <div data-aos="fade-up" id='Projects'>
          <Projects/>
        </div>
        <div data-aos="fade-up" id='Contact'>
          <Contact/>
        </div>
      </div>
    
    );
  
}

export default App;
