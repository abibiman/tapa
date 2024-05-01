import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import teamblock from "../../../data/team.json";

class Team extends Component {
    render() {
        return (
            <section className="section-padding our-team arrow-shape-1">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Our Team</h5>
                            <h3 className="text-custom-white fw-700">Meet Our Leadership</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* Data */}
                        {teamblock.slice(0, 4).map((item, i) => (
                            <div className="col-lg-3 col-sm-6" key={i}>
                                <div className="team-block p-relative mb-md-40">
                                    <div className="inner-box bx-wrapper">
                                        <div className="image animate-img">
                                            <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} className="full-width" />
                                            <div className="overlay-box">
                                                <div className="overlay-inner p-relative full-height">
                                                    <ul className="team-social-box custom">
                                                        {/* Data */}
                                                        {item.social.map((social, i) => (
                                                            <li className={social.iconClass} key={i}>
                                                                <Link to={social.url} className={"fs-16 " + social.icon} />
                                                                <span className="social-name fs-12 text-custom-white">{social.title}</span>
                                                            </li>
                                                        ))}
                                                        {/* Data */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower-content p-relative text-center">
                                            <div className="icon-box fs-18 text-custom-white">
                                                <span className="fas fa-cogs" />
                                            </div>
                                            <h4><Link to="/portfolio-grid" className="fw-600 fs-20">{item.name}</Link></h4>
                                            <p className="designation text-custom-white mb-xl-20">{item.post}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;