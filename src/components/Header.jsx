import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg w-100">
                        <a className="navbar-brand text-white" href="#">Albinoty</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Skill</a>
                                </li>
                            </ul>
                        </div>  
                    </nav>
                </div>
            </header>
        );
    }
}