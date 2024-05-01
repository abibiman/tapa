import React, { Fragment } from 'react';
import NavHelper from '../../helper/NavHelper';
import instagram from '../../data/instagram.json';
import { Link } from 'react-router-dom';

class Footer extends NavHelper {
    render() {
        const backToTop = this.state.stickyHeader ? ' d-block' : '';
        return (
            <Fragment>
                {/* Start Footer */}
                <footer className="bg-custom-black section-padding footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-md-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Useful Links</h4>
                                    </div>
                                    <ul className="custom links">
                                        <li>
                                            <Link to="/" className="text-custom-white">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="text-custom-white">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-custom-white">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/faqs" className="text-custom-white">FAQs</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="text-custom-white">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-md-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Insta Feeds</h4>
                                    </div>
                                    <ul className="custom insta-feed">
                                        {/* Data */}
                                        {instagram.slice(0, 6).map((item, i) => (
                                            <li className="insta-item animate-img" key={i}>
                                                <Link to="#">
                                                    <img src={ item.image} className="img-fluid full-width" alt="insta" />
                                                </Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-xs-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Quick Links</h4>
                                    </div>
                                    <ul className="custom links">
                                        <li>
                                            <Link to="/portfolio-details/1" className="text-custom-white">Programs</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-custom-white">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/gallery" className="text-custom-white">Gallery</Link>
                                        </li>
                               
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">News Letter</h4>
                                    </div>
                                    <div className="newsletter">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-custom" placeholder="Email" required />
                                            </div>
                                            <button className="btn-first btn-submit btn-height" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                    <div className="social-media">
                                        <ul className="custom social-media">
                                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="payment-logo mb-md-20">
                                    <span className="text-custom-white fs-14 mr-3">We are accept</span>
                                    <div className="payemt-icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/card01.png"} alt="#" />
                                        <img src={process.env.PUBLIC_URL + "/assets/images/card02.png"} alt="#" />
                                        <img src={process.env.PUBLIC_URL + "/assets/images/card03.png"} alt="#" />
                                        <img src={process.env.PUBLIC_URL + "/assets/images/card04.png"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="text-custom-white no-margin">© Website - 2024 | All Right Reserved. <Link to="#" className="text-custom-white">Powered By Techly Africa</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer */}
                <div id="back-top" className={"back-top" + backToTop}>
                    <Link to="#" data-toggle="button" aria-pressed="true" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><i className="fas fa-chevron-up" /><span className="d-block">Top</span></Link>
                </div>
            </Fragment>
        );
    }
}

export default Footer;