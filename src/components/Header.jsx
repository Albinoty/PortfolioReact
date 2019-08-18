import React from 'react';

export default class Header extends React.Component{
    
    constructor(){
        super();
        this.state = {
            home: false,
            about: false,
            skill: false,
            services: false,
            portfolio: false,
            contact: false
        }
    }

    componentWillMount(){
        window.addEventListener('scroll', () => {
            (window.scrollY >= 57 && window.scrollY < 935) ? this.setState({home: true}) : this.setState({home: false});
            (window.scrollY >= 936 && window.scrollY < 1698) ? this.setState({about: true}) : this.setState({about: false});
            (window.scrollY >= 1699 && window.scrollY < 2356) ? this.setState({skill: true}) : this.setState({skill: false});
            (window.scrollY >= 2357 && window.scrollY < 3128) ? this.setState({services: true}) : this.setState({services: false});
            (window.scrollY >= 3129) ? this.setState({portfolio: true}) : this.setState({portfolio: false});
        })
    }

    render(){
        return(
            <header className={this.props.fixed ? 'position-fixed animated fadeInDown fonce' : ''}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        <a className="navbar-brand text-white" href="#intro">Albinoty</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
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
                                    <a className="nav-link text-white" href="#contact">Contact</a>
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