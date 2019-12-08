import React from 'react';
import logo from '../img/logo_site.png';

export default class Header extends React.Component{
    
    constructor(){
        super();
        this.state = {
            home: false,
            about: false,
            skill: false,
            services: false,
            portfolio: false,
            contact: false,
            click: false
        }
    }

    UNSAFE_componentWillMount(){
        window.addEventListener('scroll', () => {
            (window.scrollY >= 57 && window.scrollY < 935) ? this.setState({home: true}) : this.setState({home: false});
            (window.scrollY >= 936 && window.scrollY < 1698) ? this.setState({about: true}) : this.setState({about: false});
            (window.scrollY >= 1699 && window.scrollY < 2356) ? this.setState({skill: true}) : this.setState({skill: false});
            (window.scrollY >= 2357 && window.scrollY < 3128) ? this.setState({services: true}) : this.setState({services: false});
            (window.scrollY >= 3129 && window.scrollY < 3580) ? this.setState({portfolio: true}) : this.setState({portfolio: false});
            (window.scrollY >= 3581) ? this.setState({contact: true}) : this.setState({contact: false});
        })
    }

    isMobile(){
        
        if(!this.state.click && window.scrollY < 56){
            document.getElementsByTagName('header')[0].setAttribute('class','fonce')
            this.setState({click: true})
        }
        else if(this.state.click  && window.scrollY < 56){
            setTimeout(() => {
                document.getElementsByTagName('header')[0].setAttribute('class','')
            }, 340);
            this.setState({click: false})
        }
        
    }

    render(){
        return(
            <header className={(this.props.fixed)  ? 'position-fixed animated fadeInDown fonce' : ''}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light px-0 w-100">
                        <a className="navbar-brand text-white mr-0" href="#intro">
                            <img src={logo} alt="" className="d-block img-fluid" />
                        </a>
                        <button className="navbar-toggler text-white" onClick={this.isMobile.bind(this)} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    { this.state.home ? <a className="nav-link text-jaune active" href="#intro">Home</a> : <a className="nav-link text-white" href="#intro">Home</a> }
                                </li>
                                <li className="nav-item">
                                    {this.state.about ? <a className="nav-link text-jaune active" href="#about">About</a> : <a className="nav-link text-white" href="#about">About</a> }
                                </li>
                                <li className="nav-item">
                                    { this.state.skill ? <a className="nav-link text-jaune active" href="#skill">Skill</a> : <a className="nav-link text-white" href="#skill">Skill</a> }
                                </li>
                                <li className="nav-item">
                                    { this.state.services ? <a className="nav-link text-jaune active" href="#service">Services</a> : <a className="nav-link text-white" href="#service">Services</a> }
                                </li>
                                <li className="nav-item">
                                    { this.state.portfolio ? <a className="nav-link text-jaune active" href="#portfolio">Portfolio</a> : <a className="nav-link text-white" href="#portfolio">Portfolio</a> }
                                </li>
                                <li className="nav-item">
                                { this.state.contact ? <a className="nav-link text-jaune active" href="#contact">Contact</a> : <a className="nav-link text-white" href="#contact">Contact</a> }
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Other Link
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="https://albinoty.com/portfolio/codingweek">CodingWeek</a>
                                        <a className="dropdown-item" href="https://albinoty.com/jeu">Shifumi</a>
                                        <a className="dropdown-item" href="https://albinoty.com/twitch">Twitch</a>
                                        <a className="dropdown-item" href="https://albinoty.com/docs/lexique.html">Lexique</a>
                                    </div>
                                </li>
                            </ul>
                        </div>  
                    </nav>
                </div>
            </header>
        );
    }
}