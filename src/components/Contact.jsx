import React from 'react';
import {faFacebook,faInstagram,faTwitter,faSnapchatGhost,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


export default class Contact extends React.Component{

    constructor(){
        super();
        this.state = {
            nom: '',
            mail: '',
            sujet: '',
            msg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        
        e.preventDefault();
        
        console.log(this.state)

        const donnees = {
            nom: this.state.nom,
            mail: this.state.mail,
            sujet: this.state.sujet,
            msg: this.state.msg
        }


        axios.post({
            method: 'post',
            url: '/',
            data: donnees,
            config: {headers: {'Content-type':'multipart/form-data'}}

        })
            
        
    }

    render(){
        return(
            <section id="contact" className="contact py-5 clair">
                <div className="container">
                    <div className="row mx-auto w-75 text-center">
                        <div className="col-12">
                            <h2 className="text-white text-center d-flex flex-column">
                                <span className="mx-auto mb-2 line-titre">contact</span>
                                Get in touch
                            </h2>
                            <span className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique.
                            </span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <ul className="text-white pl-0">
                                <li className="mt-3">
                                    <h5 className="font-weight-bold">Email</h5>
                                    <span className="font-weight-lighter">info@albinoty.com</span>
                                </li>
                                <li className="mt-3">
                                    <h5 className="font-weight-bold">Phone</h5>
                                    <span className="font-weight-lighter">+32 489 11 12 15</span>
                                </li>
                                <li className="mt-3">
                                    <h5 className="font-weight-bold">Adress</h5>
                                    <span className="font-weight-lighter">Brussel 1030, Belgium</span>
                                </li>
                                <li className="mt-3">
                                    <h5 className="font-weight-bold">Website</h5>
                                    <span className="font-weight-lighter">www.albinoty.com</span>
                                </li>
                                <li className="mt-3">
                                    <a href="https://facebook.com" className="mr-3 lien"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
                                    <a href="https://instagram.com" className="mr-3 lien"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                                    <a href="https://twitter.com" className="mr-3 lien"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
                                    <a href="https://www.snapchat.com/" className="mr-3 lien"><FontAwesomeIcon icon={faSnapchatGhost} size="1x" /></a>
                                    <a href="https://www.linkedin.com/in/albinotfetahi" className="mr-3 lien"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                                    <a href="https://github.com/Albinoty" className="lien"><FontAwesomeIcon icon={faGithub} size="1x" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <form action="" method="post" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control fonce" placeholder="Your Name" onChange={e => (this.setState({nom: e.target.value}))}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control fonce" placeholder="Email Address" onChange={ e => (this.setState({mail: e.target.value}))}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control fonce" placeholder="Subject" onChange={ e => (this.setState({sujet: e.target.value}))} />  
                                        </div>
                                    </div>    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="" id="" className="form-control fonce" placeholder="Your message" cols="30" rows="10" onChange={e => (this.setState({msg: e.target.value}))} ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn px-4 py-2 jaune text-white" onClick={this.handleSubmit} disabled>
                                            coming soon
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}