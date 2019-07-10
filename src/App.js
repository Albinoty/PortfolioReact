import React from 'react';

import Intro from './components/Intro';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Effet from './components/Effet';


// Import Fichier js
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';

//Pour change la meta pour le titre de la page
document.title = "I am Albinot Fetahi";

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Effet />
        <Header />
        <Intro />
        <About />
        <Skill />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}