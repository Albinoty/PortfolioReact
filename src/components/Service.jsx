import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faTools} from '@fortawesome/free-solid-svg-icons/';
import { faAdobe } from '@fortawesome/free-brands-svg-icons/';


export default class Service extends React.Component{
    
    constructor(props){
        super(props);
    }
    

    handleOver(e){
    

        
    }


    render(){
        return(
            <section id="service" className="clair py-5">
                <div className="container pt-1">
                    <div className={this.props.service ? 'row mx-auto w-75 text-center pb-5 animated fadeInUp' : 'row mx-auto w-75 text-center pb-5'}>
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
                    <div className={this.props.service ? 'row animated fadeInUp delay-1s' : 'row'}>
                        <div className="col-lg-4" onMouseOver={this.handleOver.bind(this)}>
                            <div className="text-white bg-secondary pt-1">
                                <div className="nombre">
                                    <span>01</span>
                                </div>
                                <h3 className="text-center text-bleu">Website Development</h3>
                                <div className="logo">
                                    <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae. Quaerat adipisci nobis doloremque, quia quo nesciunt exercitationem tempore nisi.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-white bg-secondary" onMouseOver={this.handleOver.bind(this)}>
                                <div className="nombre">
                                    <span>02</span>
                                </div>
                                <h3 className="text-center text-bleu">Hardware Repair</h3>
                                <div className="logo">
                                    <FontAwesomeIcon icon={faTools} size="3x" />
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae. Quaerat adipisci nobis doloremque, quia quo nesciunt exercitationem tempore nisi.</p>  
                            </div>
                        </div>
                        <div className="col-lg-4" onMouseOver={this.handleOver.bind(this)}>
                            <div className="text-white bg-secondary">
                                <div className="nombre">
                                    <span>03</span>
                                </div>
                                <h3 className="text-center text-bleu"> Logo Creation</h3>
                                <div className="logo">
                                    <FontAwesomeIcon icon={faAdobe} size="3x" />
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae. Quaerat adipisci nobis doloremque, quia quo nesciunt exercitationem tempore nisi.</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        );
    } 
}