import React from 'react';

import Intro from './components/Intro';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import Fichier js
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';
import '../node_modules/typeit/dist/typeit.min.js';

//Pour change la meta pour le titre de la page
document.title = "I am Albinot Fetahi";
document.description = "Web Developer Portfolio - by Albinot Fetahi";


export default class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      navFixed: false,
      page: false
    }
  }

  UNSAFE_componentWillMount(){
    // let a = Scroll;
    window.addEventListener('scroll', () => {
      // Navbar
      window.scrollY > 56 ? this.setState({navFixed: true}) : this.setState({navFixed: false});
    })
  }

  componentDidMount(){

    setTimeout(() => {
      this.setState({page: true});
    }, 2500);
    
  }
  
  render(){
    return (
      <div className={this.state.page === true ? "loaded" : ""}>
        <div id="loader-wrapper">
          <div id="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
        <Header fixed={this.state.navFixed} />
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