import React from 'react';
import TypeIt from 'typeit';

export default class Intro extends React.Component{
    componentDidMount(){
        new TypeIt('#dev',{
            strings: ["Front-end Developer","Back-end Developer","Full-Stack Web Developer"],
            breakLines: false,
            speed: 150,
            deleteSpeed:150,
            loop: true,
            waitUntilVisible: true
        }).pause(2000).go();
    }

    render(){
        return(
            <section id="intro" className="intro">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <span className="text-white nom">I am Albinot Fetahi</span>
                            <h1 className="text-white">I am <span id="dev" className="dev"></span></h1>
                            <p className="text-white w-50 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae quam impedit dicta, blanditiis quisquam ducimus esse voluptatum dolores quo?</p>
                            <a href="https://albinoty.com/docs/Fetahi_Albinot_CV.pdf">
                                <button className="btn px-4 py-2 jaune text-white">Download cv</button>
                            </a>
                        </div>
                    </div>
                </div>
                <canvas></canvas>            
            </section>
        );
    }
}