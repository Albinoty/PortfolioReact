import React from 'react';

export default class Skill extends React.Component{
    render(){
        return(
            <section id="skill" className="skill fonce py-5">
                <div className="container">
                    <div className="row mx-auto mb-5 w-75 text-center">
                            <div className="col-12">
                                <h2 className="text-white text-center d-flex flex-column">
                                    <span className="mx-auto mb-2 line-titre">skill</span>
                                    Developement Skill
                                </h2>
                                <span className="text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique.
                                </span>
                            </div>
                    </div>
                    <div className="row mt-5 pt-5 align-items-center">
                        <div className="col-lg-6 text-white">
                            <h2>Some talk About my professional web development skill</h2>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione.</p>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione.</p>
                        </div>
                        <div className="col-lg-6">
                            {/* HTMl */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto">HTML, CSS</span>
                                <span className="d-block ml-auto">95%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className="progress-bar jaune" role="progressbar" style={{width: 95 +"%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* js,react */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto">Javascript, React</span>
                                <span className="d-block ml-auto">80%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className="progress-bar jaune" role="progressbar" style={{width: 80 +"%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* Java */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto">Java</span>
                                <span className="d-block ml-auto">55%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className="progress-bar jaune" role="progressbar" style={{width: 55 +"%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* php,sql */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto">PHP, MYSQL</span>
                                <span className="d-block ml-auto">75%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className="progress-bar jaune" role="progressbar" style={{width: 75 +"%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            {/* photshop, illustrator */}
                            <div className="text-white d-flex mt-2">
                                <span className="d-block mr-auto">Photoshop, Illustrator</span>
                                <span className="d-block ml-auto">70%</span>
                            </div>
                            <div className="progress mt-2">
                                <div className="progress-bar jaune" role="progressbar" style={{width: 75 +"%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}