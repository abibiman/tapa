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
                            <h5 className="text-custom-blue">Our History</h5>
                            <h3 className="text-theme fw-700">Record Milestone Covered Yet</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="video-box mb-xl-40">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <div className="videoPoster js-videoPoster">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/img.jpg"} className="image-fit" alt="#" />
                                        <div className="video-inner video-btn-wrapper">
                                            <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-youtube text-custom-blue"><i className="far fa-play-circle" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-tabs">
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
                                    <Tab.Content className="padding-20 bg-custom-white bx-wrapper">
                                        {history.map((item, i) => (
                                            <Tab.Pane key={i} eventKey={"tab" + 1 + i}>
                                                <div className="tab-inner">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="img-sec mb-md-40">
                                                                <img src={process.env.PUBLIC_URL + "/" + item.items.image} className="full-width" alt={item.items.title} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 align-self-center">
                                                            <div className="content-box">
                                                                <h4 className="text-custom-black fw-600">{item.items.title}</h4>
                                                                <p className="text-custom-blue mb-xl-20">{item.items.subtitle}</p>
                                                                <div dangerouslySetInnerHTML={{ __html: item.items.htmltext }} />
                                                                <div className="list">
                                                                    <ul className="custom">
                                                                        {/* Data */}
                                                                        {item.items.list.map((list, i) => (
                                                                            <li className="fs-14 text-custom-blue" key={i}>
                                                                                <i className="fas fa-check" />
                                                                                <span className="text-light-white">{list}</span>
                                                                            </li>
                                                                        ))}
                                                                        {/* Data */}
                                                                    </ul>
                                                                </div>
                                                                <Link to="/about" className="btn-first btn-submit">Learn More</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default History;