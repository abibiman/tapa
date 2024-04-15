import React from 'react';
import Contacthelper from '../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";

class Quoteform extends Contacthelper {
    render() {
        return (
            <section className="section-padding bg-call-to-action">
                <div className="overlay overlay-bg" />
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Free Consultation
                            </h5>
                            <h3 className="text-custom-white fw-700">Get a Free Support</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    <form className="row consult-form" onSubmit={this.handleSubmit.bind(this)} method="Get">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-custom" placeholder="Full Name" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                                <input type="email" className="form-control form-control-custom" placeholder="Email I'd" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-custom" placeholder="Phone No." name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-custom" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-custom" placeholder="Write Something..." name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                                <button type="submit" className="btn-first btn-submit full-width btn-height">Submit</button>
                            </div>
                        </div>
                        <ReCAPTCHA
                            sitekey="6LcAzqobAAAAAPt22IB9Nj6yWNMLxXuE5XkWu8ER"
                            onChange={this.reCaptchaLoaded.bind(this)}
                            size="invisible"
                        />
                    </form>
                </div>
            </section>
        );
    }
}

export default Quoteform;