import React from 'react';
import './App.css';
import { Project } from './components';
import {
  Header,
  Home,
  Skills,
  Projects,
  Experience,
  Education,
  Footer,
} from './containers';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
