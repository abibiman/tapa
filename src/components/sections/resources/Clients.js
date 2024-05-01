import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clients from "../../../data/clients.json";

class Clients extends Component {
    render() {
        return (
            <div className="clients-box custom-container">
                <div className="section-header-right">
                    <div className="section-heading">
                        <h5 className="text-custom-blue">Our Clients</h5>
                        <h3 className="text-theme fw-700">Some of Esteemed Clients</h3>
                    </div>
                    <div className="section-description">
                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
                <div className="clients-wrapper">
                    {/* Data */}
                    {clients.slice(0, 6).map((item, i) => (
                        <div className="client-box" key={i}>
                            <div className="client-item">
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt="img" />
                                </Link>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
            </div>
        );
    }
}

export default Clients;