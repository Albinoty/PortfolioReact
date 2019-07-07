import React from 'react';

export default class Intro extends React.Component{
    render(){
        return(
            <section className="intro">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <span className="text-white">I am Albinot Fetahi</span>
                            <h1 className="text-white">I am Developer</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae quam impedit dicta, blanditiis quisquam ducimus esse voluptatum dolores quo?</p>
                            <button className="btn btn-warning text-white">Download cv</button>
                        </div>
                    </div>
                </div>
                <canvas></canvas>            
            </section>
        );
    }
}