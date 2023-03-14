import './App.css';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
      <div className='App'>
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
