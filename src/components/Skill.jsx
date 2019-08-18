import React from 'react';

export default class Skill extends React.Component{

    constructor(){
        super();
        this.state = {
            bar: false
        }
    }

    componentWillMount(){

        let cible, effet;

        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            console.log(cible)

            if(window.scrollY >= 925 && window.scrollY < 1025){
                cible = document.getElementById('titreSkill');
                effet = "fadeInDown";
                cible.classList.add(effet);
            }
            else if(window.scrollY >= 1100 && window.scrollY < 1500){
                cible = document.getElementById('texteSkill');
                effet = "fadeInDown";
                cible.classList.add(effet);
                cible = document.getElementById('barSkill');
                effet = "fadeInUp";
                cible.classList.add(effet);
            }             
            (window.scrollY >= 1100 && window.scrollY < 2100) ? this.setState({bar: true}) : this.setState({bar: false});

        })
    }

    render(){
        return(
            <section id="skill" className="skill fonce py-5">
                <div className="container py-4">
                    <div className="row mx-auto mb-5 w-75 text-center animated " id="titreSkill">
                            <div className="col-lg-12">
                                <h2 className="text-white text-center d-flex flex-column">
                                    <span className="mx-auto mb-2 line-titre">skill</span>
                                    Developement Skill
                                </h2>
                                <span className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique.
                                </span>
                            </div>
                    </div>
                    <div className="row mt-5 pt-5 align-items-center">
                        <div className="col-lg-6 animated " id="texteSkill">
                            <h2 className="text-capitalize">Some talk About my professional web development skill</h2>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione.</p>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione.</p>
                        </div>
                        <div className="col-lg-6 animated " id="barSkill">
                            {/* HTMl */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto span">HTML, CSS</span>
                                <span className="d-block ml-auto span">95%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className={this.state.bar ? 'progress-bar jaune animated slideInLeft slow': 'progress-bar jaune'} role="progressbar" style={{width: 95 +"%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* js,react */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto span">Javascript, React</span>
                                <span className="d-block ml-auto span">80%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className={this.state.bar ? 'progress-bar jaune animated slideInLeft slow' : 'progress-bar jaune'}role="progressbar" style={{width: 80 +"%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* Java */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto span">Java</span>
                                <span className="d-block ml-auto span">55%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className={this.state.bar ? 'progress-bar jaune animated slideInLeft slow':'progress-bar jaune'} role="progressbar" style={{width: 55 +"%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* php,sql */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto span">PHP, MYSQL</span>
                                <span className="d-block ml-auto span">75%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className={this.state.bar ? 'progress-bar jaune animated slideInLeft slow' : 'progress-bar jaune'} role="progressbar" style={{width: 75 +"%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* photshop, illustrator */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto span">Photoshop, Illustrator</span>
                                <span className="d-block ml-auto span">70%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className={this.state.bar ? 'progress-bar jaune animated slideInLeft slow' : 'progress-bar jaune'} role="progressbar" style={{width: 75 +"%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}