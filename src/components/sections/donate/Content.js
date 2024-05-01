import React, { Fragment } from 'react';
import Contacthelper from "../../../helper/Contacthelper";
import ReCAPTCHA from "react-google-recaptcha";

class Content extends Contacthelper {
    render() {
        return (
            <Fragment>
                <section className="section-padding-top contact-us clearfix">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-7">
                                <div className="contact-us-form">
                                    <h4 className="text-custom-white mb-xl-30">Want to talk? Let`s do it!</h4>
                                    <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-custom" placeholder="Full Name" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-custom" placeholder="Email I'd" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-custom" placeholder="Phone No." name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-custom" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control form-control-custom" rows={4} placeholder="Write Something.." name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn-first btn-border">Submit</button>
                                            </div>
                                            <ReCAPTCHA
                                                sitekey="6LcAzqobAAAAAPt22IB9Nj6yWNMLxXuE5XkWu8ER"
                                                onChange={this.reCaptchaLoaded.bind(this)}
                                                size="invisible"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <h4 className="text-theme fw-700">We’re Happy to Discuss Your Project and Answer any Question</h4>
                                    <ul className="custom">
                                        <li>
                                            <h5 className="text-theme fs-20"><i className="fas fa-map-marker-alt mr-2 text-custom-blue" />
                                                Location</h5>
                                            <p className="text-light-white no-margin fs-16">13th Street. 47 W 13th St, New York, NY 10011,
                                                USA</p>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5 className="text-theme fs-20"><i className="fas fa-envelope mr-2 text-custom-blue" /> Email
                                            </h5>
                                            <a rel={"external"} href={"mailto:example@example.com"} className="text-light-white fs-16">example@example.com</a>
                                        </li>
                                        <hr />
                                        <li>
                                            <h5 className="text-theme fs-20"><i className="fas fa-phone-alt mr-2 text-custom-blue" /> Phone
                                                No.</h5>
                                            <a rel={"external"} href={"tel:+3471234567890"} className="text-light-white fs-16">(+347) 123 456 7890</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Contact map */}
                <div className="contact-map">
                    <iframe title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
                {/* End Contact map */}
            </Fragment>
        );
    }
}

export default Content;