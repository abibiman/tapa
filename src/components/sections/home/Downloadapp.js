import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Downloadapp extends Component {
    render() {
        return (
            <section className="section-padding download-app">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Download App</h5>
                            <h3 className="text-custom-white fw-700">Get Our Services in Hand</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="app-img">
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/app.png"} className="img-fluid" alt="app" />
                                </Link>
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/app2.png"} className="img-fluid" alt="app" />
                                </Link>
                            </div>
                            <div className="app-img-btm">
                                <img src={process.env.PUBLIC_URL + "/assets/images/app3.png"} className="img-fluid" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Downloadapp;