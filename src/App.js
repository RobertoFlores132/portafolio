import './App.css';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
      <div className='App'>
        <Home/>
        <Aboutme/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    
    );
  
}

export default App;
