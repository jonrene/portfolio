import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Skills from './Skills'
import Projects from './Projects';
import Contact from './Contact';
import Overlay from './Overlay';

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
