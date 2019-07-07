import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/'



export default class Service extends React.Component{
    render(){
        return(
            <section id="service" className="clair py-5">
                <div className="container">
                    <div className="row mx-auto w-75 text-center">
                        <div className="col-12">
                            <h2 className="text-white text-center d-flex flex-column">
                                <span className="mx-auto mb-2 line-titre">services</span>
                                What i do
                            </h2>
                            <span className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique.
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-white bg-primary">
                                <div className="nombre">01</div>
                                <h3>Web Development</h3>
                                <div className="img"><FontAwesomeIcon icon={faLaptopCode} size="4x" /></div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus optio sint libero assumenda sed odit maxime est minus omnis deleniti.</p> 
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-white">
                                <div className="nombre">01</div>
                                <h3>Web Designer</h3>
                                <div className="img"></div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } 
}