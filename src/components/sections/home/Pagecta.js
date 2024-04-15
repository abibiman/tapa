import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ctatext from "../../../data/ctatext.json";

class Pagecta extends Component {
    render() {
        return (
            <section className="full-services-sec bg-light-white">
                <div className="container-fluid no-padding">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="right-side custom-container">
                                <div className="text-wrapper">
                                    <h2 className="text-custom-white fw-600">We Provide Construction to Complex Problems &amp; all kinds Of Services Contact us today for best services. </h2>
                                    <p className="text-custom-white mb-xl-20 fs-16 fw-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    <div className="row">
                                        {/* Data */}
                                        {ctatext.slice(0, 2).map((item, i) => (
                                            <div className="col-sm-6" key={i}>
                                                <div className="right-side-box">
                                                    <div className="icon">
                                                        <i className={item.icon} />
                                                    </div>
                                                    <h5 className="text-custom-white">{item.title}</h5>
                                                    <p className="text-custom-white">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                        {/* Data */}
                                    </div>
                                    <Link to="/contact" className="btn-first btn-border">Schedule An Appointment</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left-side animate-img full-height">
                                <img src={process.env.PUBLIC_URL + "/assets/images/video.jpg"} className="image-fit" alt="img" />
                                <div className="service-text bg-custom-black">
                                    <div className="transform-center text-wrapper">
                                        <h5 className="text-custom-white">We Are Open For Opportunities!</h5>
                                        <p className="text-custom-white mb-xl-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        <div className="btns">
                                            <Link to="/portfolio-grid" className="small-btn">
                                                <i className="flaticon-arrow-1" />
                                            </Link>
                                            <Link to="/portfolio-grid" className="text-custom-white fs-14 fw-500 ml-2">View Our Works</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pagecta;