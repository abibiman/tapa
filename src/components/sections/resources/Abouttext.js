import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import about from "../../../data/about.json";

class Abouttext extends Component {
    render() {
        return (
            <section className="section-padding about-us">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-12 col-lg-12 align-self-center">
                            <div className="about-left-side p-relative">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h5 className="text-custom-blue">Resources</h5>
                                        <h3 className="text-theme fw-700"></h3>
                                    </div>
                                </div>
                                <div className="about-desc"> 

                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Abouttext;