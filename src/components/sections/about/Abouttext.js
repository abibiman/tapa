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
                                        <h5 className="text-custom-blue">About Us</h5>
                                        <h3 className="text-theme fw-700">Trans Africa Professional Association</h3>
                                    </div>
                                </div>
                                <div className="about-desc">
                                    <p className="text-light-white mb-xl-20">

                                    TAPA is a public, non-profit organization dedicated to enhancing the lives of African citizens, with a special focus on women and youth. As a professional network, our mission is to foster connections among experts and professionals across various sectors to collectively 
                                    address critical issues in education, health, and human development.
                                    Our approach involves providing essential resources and human services,
                                     empowering individuals through personal development, enhancing interpersonal and professional skills, and cultivating entrepreneurial and technological capabilities. Our goal is to prepare individuals to be proactive and positive contributors in a technologically advanced, multicultural world.
                                    TAPA collaborates with a broad spectrum of partners, including government agencies, non-governmental organizations, educational institutions, healthcare providers, businesses, and more. Together, we confront pressing health, social, economic, cultural, and environmental challenges through targeted educational programs, capacity building initiatives, human resource development, and research.
                                    Looking ahead, TAPA is set to broaden its impact by establishing specialized centers and institutes across Africa and globally. These entities will focus on identifying local issues and offering tangible solutions, driving change and development throughout African communities and beyond.                                    </p>
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