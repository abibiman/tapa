import React, { Component } from 'react';
import banner from "../../../data/banner.json";
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="video-banner p-relative">
                <video src={process.env.PUBLIC_URL + "/assets/images/video.mp4"} className="jarallax image-fit" autoPlay muted />
                {banner.slice(0, 1).map((item, i) => (
                    <div className="transform-center" key={i}>
                        <div className="container">
                            <div className={"row " + item.position}>
                                <div className="col-lg-7">
                                    <div className={"content-wrapper " + item.textpos}>
                                        <h1 className="text-custom-white" dangerouslySetInnerHTML={{ __html: item.title }} />
                                        <p className="text-custom-white mb-xl-40">{item.text}</p>
                                        <Link to="/about" className="btn-first btn-submit text-custom-white mr-2">Learn More</Link>
                                        <Link to="/contact" className="btn-first btn-border">Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Banner;