import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import instagram from "../../../data/instagram.json";

class Ctainsta extends Component {
    render() {
        return (
            <Fragment>
                <div className="schdule-box">
                    <div className="left-side">
                        <h6 className="text-custom-white">Got A Question?</h6>
                        <h4 className="text-custom-white no-margin">(770) 330-2780</h4>
                    </div>
                    <div className="right-side">
                        <Link to="/contact" className="btn-first btn-submit text-custom-white">Contact Us</Link>
                    </div>
                </div>
                <div className="instagram-sec">
                    <h3><i className="fab fa-instagram" /> Follow Us</h3>
                    <div className="row clearfix">
                        {/* Data */}
                        {instagram.slice(0, 6).map((item, i) => (
                            <div className="col-md-4 col-6" key={i}>
                                <div className="insta-img animate-img">
                                    <Link to="#">
                                        <img src={ item.image} className="image-fit" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ctainsta;