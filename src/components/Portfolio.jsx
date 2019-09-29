import React from 'react';
import portfolio from '../img/portfolio.png';
import siteDuChef from '../img/SitDuChef.png';
import potrfolioReact from '../img/react-portfolio.png';
import codingWeek from '../img/codingWeek.png';

export default class Portfolio extends React.Component{

    constructor(){
        super();
        this.state = {
            html: true,
            js: true
        }
    }

    componentWillMount(){

        let cible, effet;

        window.addEventListener('scroll', () => {
            if(window.scrollY >= 2300 && window.scrollY < 2500){
                cible = document.getElementById('titrePortfolio');
                effet = "fadeInDown";
                cible.classList.add(effet);
            }
            else if(window.scrollY >= 2501 && window.scrollY < 2925){
                cible = document.getElementById('contenuPortfolio');
                effet = "fadeInUp";
                cible.classList.add(effet);
            }   
        })
    }

    handleType(e){
        if(e.target.id === "all"){
            this.setState({html: true, js: true})
        }
        else if(e.target.id === "html"){
            this.setState({html: true, js :false});
        }
        else if(e.target.id === "js"){
            this.setState({html: false, js: true});
        }
    }

    render(){
        return(
            <section id="portfolio" className="portfolio fonce py-5">
                <div className="container py-4">
                    <div className="row mx-auto w-75 text-center animated " id="titrePortfolio">
                            <div className="col-12">
                                <h2 className="text-white text-center d-flex flex-column">
                                    <span className="mx-auto mb-2 line-titre">portfolio</span>
                                    RECENT PROJECTS
                                </h2>
                                <span className="text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique.
                                </span>
                            </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <button className="btn text-white mx-2" onClick={this.handleType.bind(this)} id="all">All</button>
                            <button className="btn text-white mx-2" onClick={this.handleType.bind(this)} id="html">HTML/CSS</button>
                            <button className="btn text-white mx-2" onClick={this.handleType.bind(this)} id="js">JS</button>
                        </div>
                    </div>
                    <div className="row mt-5 animated " id="contenuPortfolio">
                        <div className={this.state.js ? "col-lg-3 mb-5" : "col-lg-3 mb-5 d-none"}>
                            <a href="https://albinoty.com/">
                                <img src={potrfolioReact} alt="Portfolio React" title="Portfolio React" className="d-block w-100" /> 
                            </a>
                        </div>
                        <div className={this.state.html ? "col-lg-3 mb-5" : "col-lg-3 mb-5 d-none"}>
                            <a href="https://albinoty.com/portfolio/oldPortfolio">
                                <img src={portfolio} alt="Portfolio V1.0" title="Old Version of my first portfolio" className="d-block w-100" />
                            </a>
                        </div>
                        <div className={this.state.html ? "col-lg-3 mb-5" : "col-lg-3 mb-5 d-none"}>
                            <a href="https://albinoty.com/portfolio/siteduchef">
                                <img src={siteDuChef} alt="Site du chef" title="Site du chef" className="d-block w-100" />
                            </a>
                        </div>
                        <div className={this.state.html ? "col-lg-3 mb-5" : "col-lg-3 mb-5 d-none"}>
                            <a href="https://albinoty.com/portfolio/codingweek">
                                <img src={codingWeek} alt="Coding Week 2019" title="Coding Week 2019" className="d-block w-100" />
                            </a>
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}