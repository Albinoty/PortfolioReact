import React from 'react';

export default class Skill extends React.Component{
    render(){
        return(
            <section className="skill fonce">
                <div className="container">
                    <div className="row mx-auto mb-5 w-75 text-center">
                            <div className="col-12">
                                <h2 className="text-white text-center d-flex flex-column">
                                    <span className="mx-auto mb-2 line-titre">about</span>
                                    about myself
                                </h2>
                                <span className="text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique.
                                </span>
                            </div>
                    </div>
                    <div className="row mt-5 pt-5">
                        <div className="col-lg-6 text-white">
                            <h2>Some talk About my professional web developement skill</h2>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione.</p>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione.</p>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </section>
        );
    }
}