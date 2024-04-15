import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <div className="counter">
            <div className="counter-box">
                <div className="inner-box"><span className="text-custom-white" id="cvdays">{days}</span>
                </div>
                <p className="text-custom-white">Days</p>
            </div>
            <div className="counter-box">
                <div className="inner-box"><span className="text-custom-white" id="cvhours">{hours}</span>
                </div>
                <p className="text-custom-white">Hours</p>
            </div>
            <div className="counter-box">
                <div className="inner-box"> <span className="text-custom-white" id="cvminutes">{minutes}</span>
                </div>
                <p className="text-custom-white">Minutes</p>
            </div>
            <div className="counter-box">
                <div className="inner-box"> <span className="text-custom-white" id="cvseconds">{seconds}</span>
                </div>
                <p className="text-custom-white">Seconds</p>
            </div>
        </div>;
    }
};


class Content extends Component {
    render() {
        return (
            <section className="coming-soon">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="logo text-center">
                                <Link to="/">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
                                </Link>
                            </div>
                            <div className="content-wrapper">
                                <div className="section-header">
                                    <h1 className="text-custom-white fw-700">Our Website is <Link to="/" className="text-custom-white">Under Development</Link></h1>
                                    <p className="text-custom-white">We are Coming Soon...</p>
                                </div>
                                <Countdown
                                    date={Date.now() + 31622400000}
                                    renderer={renderer}
                                />
                                <div className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control form-control-custom" placeholder="Email I'd" />
                                        <div className="input-group-append">
                                            <button className="btn-first btn-submit text-custom-white" type="submit">Get Updates</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-media-icons section-padding-top">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        </li>
                                        <li><Link to="#"><i className="fab fa-twitter" /></Link>
                                        </li>
                                        <li><Link to="#"><i className="fab fa-pinterest-p" /></Link>
                                        </li>
                                        <li><Link to="#"><i className="fab fa-instagram" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;