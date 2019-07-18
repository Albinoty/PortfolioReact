import React from 'react';


export default class Header extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className={this.props.fixed ? 'position-fixed animated fadeInDown fonce' : ''}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg w-100">
                        <a className="navbar-brand text-white" href="#intro">Albinoty</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="#intro">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#skill">Skill</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#service">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>  
                    </nav>
                </div>
            </header>
        );
    }
}