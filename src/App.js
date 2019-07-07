import React from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import About from './components/About';

// Import Fichier js
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Intro />
        <About />
      </div>
    );
  }
}