import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import partners from "../../../data/partners.json";

class Partners extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Our Partners</h5>
                            <h3 className="text-theme fw-700">Our Valuable Partners</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-light-white"> Our diverse network of partners who collaborate with us to drive meaningful change across the Globe.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* Data */}
                        {partners.slice(0, 6).map((item, i) => (
                            <div className="col" key={i}>
                                <div className="partner-box mb-md-40">
                                    <div className="partner-logo">
                                        <Link to="#">
                                            <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt="img" />
                                        </Link>
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

export default Partners;