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

//Pour change la meta pour le titre de la page
document.title = "I am Albinot Fetahi";


export default class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      navFixed: false,
      aboutAnimate: false,
      textPhoto: false,
      titreSkill: false,
      barSkill: false,
      service: false
      
    }
  }
  
  componentWillMount(){
    // let a = Scroll;
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      // Navbar
      window.scrollY > 56 ? this.setState({navFixed: true}) : this.setState({navFixed: false});
      //Titre about
      window.scrollY > 110 ? this.setState({aboutAnimate: true}) : this.setState({aboutAnimate: false});
      // Contenu about + photo
      window.scrollY > 420 ? this.setState({textPhoto: true}) : this.setState({textPhoto: false});
      // Titre skill
      window.scrollY > 865 ? this.setState({titreSkill: true}) : this.setState({titreSkill: false});
      // Bar progress
      window.scrollY > 1080 ? this.setState({barSkill: true}) : this.setState({barSkill: false});
      //Titre Service
      window.scrollY > 1485 ? this.setState({service: true}) : this.setState({service: false});
    })
    
  }
  
  render(){
    return (
      <div>
        <Header fixed={this.state.navFixed} />
        <Intro  />
        <About about={this.state.aboutAnimate} textPhoto={this.state.textPhoto} />
        <Skill skill={this.state.titreSkill} bar={this.state.barSkill} />
        <Service service={this.state.service} />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}