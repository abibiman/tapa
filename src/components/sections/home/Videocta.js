import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom';
import ctatext from "../../../data/ctatext.json";

function Videocta(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="full-services-sec bg-light-white">
            <div className="container-fluid no-padding">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="left-side animate-img full-height">
                            <img src="https://static.wixstatic.com/media/447ef9_4197c2fa139544239fadb1a4f63b45ed~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image007.jpg" className="image-fit" alt="img" />
                            <div className="service-text-2 bg-custom-black text-center">
                                <h5 className="text-custom-white mb-1">Members</h5>
                                <h2 className="no-margin text-custom-white">
                                    <CountUp start={focus ? 0 : null} end={1000} duration={5} redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setFocus(true);
                                                    }
                                                }}
                                            >
                                                <span ref={countUpRef} className="count" />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <span>+</span></h2>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-side custom-container">
                            <div className="text-wrapper">
                                <h2 className="text-custom-white fw-600">One Africa, One Voice, One Vision   </h2>
                                <p className="text-custom-white mb-xl-20 fs-16 fw-600">Empowering African communities through collaboration, innovation, and leadership in education and health.</p>
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
                                <Link to="/contact" className="btn-first btn-border">Interested? Join Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Videocta;