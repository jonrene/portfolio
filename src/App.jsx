import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Overlay from './components/Overlay';

function App() {
  return (
    <>
      <Overlay></Overlay>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
