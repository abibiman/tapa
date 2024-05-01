import React, { Component } from 'react';
import history from "../../../data/history.json";
import { Tab, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white our-history">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">What We Do</h5>
                            <h3 className="text-theme fw-700">Creating A Better Africa</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="video-box mb-xl-40">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <div className="videoPoster js-videoPoster">
                                        <img src="https://guardian.ng/wp-content/uploads/2021/10/A-smile-warms-its-way-into-the-heart.-Photo-Shutterstock-901x598.jpg" className="image-fit" alt="#" />
                                        <div className="video-inner video-btn-wrapper">
                                            <a rel={"external"} href={"https://www.youtube.com/watch?v=f0yL08XJz-k&ab_channel=TIME"} className="popup-youtube text-custom-blue"><i className="far fa-play-circle" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="custom-tabs">
                                <Tab.Container defaultActiveKey="tab10">
                                    <Nav as="ul" varient="tabs" className="custom p-relative mb-xl-40">
                                        {history.map((item, i) => (
                                            <Nav.Item key={i} as="li">
                                                <Nav.Link eventKey={"tab" + 1 + i}>
                                                    {item.title}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                           
                                </Tab.Container>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default History;