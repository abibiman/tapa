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
                                    {/* <div className="meta-icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/banner-icon-01.png"} className="full-width" alt="img" />
                                    </div> */}
                                    {/* <div className="meta-text">
                                        <h4 className="text-custom-white no-margin fs-20">201 Awards winning constraction company</h4>
                                    </div> */}
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
                                    TAPA is a public, non-profit organization committed to advancing the health and human development of African citizens, particularly women and youth. We collaborate with a diverse network of partners to provide resources, foster personal and professional growth, and address crucial socio-economic and health challenges. Our initiatives include the creation of centers and institutes dedicated to identifying and resolving key issues across Africa and globally. Our vision is to empower an informed, engaged community ready to improve conditions throughout the African continent and its diaspora.

</p>
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