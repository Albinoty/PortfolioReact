import React from 'react';
import photo from '../img/intro.png';

export default class Portfolio extends React.Component{
    render(){
        return(
            <section id="portfolio" className="portfolio fonce py-5">
                <div className="container">
                    <div className="row mx-auto w-75 text-center">
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
                            <button className="btn text-white mx-2">1</button>
                            <button className="btn text-white mx-2">2</button>
                            <button className="btn text-white mx-2">3</button>
                            <button className="btn text-white mx-2">4</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 mb-5">
                           <img src={photo} alt="" className="d-block w-100" /> 
                        </div>
                        <div className="col-lg-4 mb-5">
                            <img src={photo} alt="" className="d-block w-100" />
                        </div>
                        <div className="col-lg-4 mb-5">
                            <img src={photo} alt="" className="d-block w-100" />
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}