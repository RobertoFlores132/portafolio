import './App.css';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Helmet } from 'react-helmet';

function App() {

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
        <div id='Aboutme'>
          <Aboutme/>
        </div>
        <div id='Skills'>
          <Skills/>
        </div>
        <div id='Projects'>
          <Projects/>
        </div>
        <div id='Contact'>
          <Contact/>
        </div>
      </div>
    
    );
  
}

export default App;
