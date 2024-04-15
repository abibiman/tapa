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
                            <img src={process.env.PUBLIC_URL + "/assets/images/video1.jpg"} className="image-fit" alt="img" />
                            <div className="service-text-2 bg-custom-black text-center">
                                <h5 className="text-custom-white mb-1">Trusted By</h5>
                                <h2 className="no-margin text-custom-white">
                                    <CountUp start={focus ? 0 : null} end={15090} duration={5} redraw={true}>
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
                            <div className="video-play-btn bg-custom-blue padding-10">
                                <h4 className="text-custom-white no-margin fw-400">Play video</h4>
                                <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-youtube">
                                    <i className="fas fa-play" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-side custom-container">
                            <div className="text-wrapper">
                                <h2 className="text-custom-white fw-600">We Provide Construction to Complex Problems &amp; all kinds Of Services Contact us today for best services.</h2>
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
                </div>
            </div>
        </section >
    );
}

export default Videocta;