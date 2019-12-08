import React from 'react';
import image from '../img/carre2.png'

export default class About extends React.Component{

    UNSAFE_componentWillMount(){

        let cible, effet;

        window.addEventListener('scroll', () => {
            if(window.scrollY >= 200 && window.scrollY < 500){
                cible = document.getElementById('titreAbout');
                effet = "fadeInDown";
                cible.classList.add(effet);
            }
            else if ( window.scrollY >= 501 && window.scrollY < 900){
                cible = document.getElementById('texteAbout');
                effet = "slideInLeft";
                cible.classList.add(effet);
                cible = document.getElementById('photoAbout');
                effet = "slideInRight";
                cible.classList.add(effet);
            }   
        })
    }

    render(){
        return (
            <section id="about" className="about clair py-5">
                <div className="container py-4">
                    <div className="row mx-auto w-75 text-center animated slower" id="titreAbout">
                        <div className="col-12">
                            <h2 className="text-white text-center d-flex flex-column">
                                <span className="mx-auto mb-2 line-titre">about</span>
                                about myself
                            </h2>
                            <span className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique.
                            </span>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-7 px-5 animated" id="texteAbout">
                            <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sint necessitatibus fuga nisi fugiat dolor non ab ex molestias at blanditiis ut, sit eveniet, labore nobis voluptate sequi amet harum explicabo. Veritatis repudiandae cumque natus hic sed dicta dignissimos totam laudantium doloribus, temporibus, eaque earum ipsum, molestiae incidunt quas dolore!
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>Name: Albinot Fetahi</li>
                                        <li>Date of Birth: 25 November 1997</li>
                                    </ul>
                                    
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>Email: info@albinoty.com</li>
                                        <li>Phone: +32 489 12 34 56</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 animated" id="photoAbout">
                            <img src={image} className="d-block w-100 rounded-circle" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}