import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import about from "../../../data/about.json";

class Abouttext extends Component {
    render() {
        return (
            <section className="section-padding about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-right-side p-relative mb-md-80">
                                <img src="https://africanprofessionals.se/wp-content/uploads/2020/10/apnsweden_93302074_659370134881022_6883147858583349228_n.jpg" className="img-fluid full-width" alt="about" />
                                <div className="about-meta">
                                    <div className="meta-icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/banner-icon-01.png"} className="full-width" alt="img" />
                                    </div>
                                    <div className="meta-text">
                                        <h4 className="text-custom-white no-margin fs-20">201 Awards winning constraction company</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 align-self-center">
                            <div className="about-left-side p-relative">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h5 className="text-custom-blue">About Us</h5>
                                        <h3 className="text-theme fw-700">Our Story</h3>
                                    </div>
                                </div>
                                <div className="about-desc">
                                    <p className="text-light-white mb-xl-20">
                                        On the other hand, we denounce with righteous indignation the foult anuals dislike men who are so beguiled and demoralized by the nuhaiicharms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound toen sue; and equal blame belongs to those who fail in their duty...<Link to="/about" className="text-custom-blue">Read more</Link>
                                    </p>
                                </div>
                                <div className="company-progress">
                                    {/* Data */}
                                    {about.map((item, i) => (
                                        <div className="progress-item" key={i}>
                                            <label className="text-custom-black fs-16 fw-600">{item.title} <span>{item.value}%</span></label>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped active" style={{ width: item.value + '%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Data */}
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