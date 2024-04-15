import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import { getService } from '../../../helper/serviceHelper';
import Sidebar from '../../layouts/Servicesidebar';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots d-flex"
}

class Content extends Component {
    render() {
        const detailId = this.props.detailId;
        const item = getService(detailId);
        return (
            <section className="section-padding bg-light-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row mb-md-80">
                                <div className="col-12 service-detail">
                                    <div className="listing-detail-heading mb-xl-20">
                                        <h3 className="no-margin text-theme">{item.title}</h3>
                                    </div>
                                    <div className="description-box bg-custom-white padding-20">
                                        <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                        <ul className="custom service-detail-infro">
                                            {/* Data */}
                                            {item.list.map((list, i) => (
                                                <li key={i}>
                                                    <Link to={"/service-details/" + item.id} className="text-theme fs-14">{list}</Link>
                                                </li>
                                            ))}
                                            {/* Data */}
                                        </ul>
                                        <Slider {...settings} className="service-detail-slide p-relative mb-xl-40">
                                            {/* Data */}
                                            {item.image.map((image, i) => (
                                                <div key={i} className="slide-item">
                                                    <img src={process.env.PUBLIC_URL + "/" + image} className="image-fit" alt={item.title} />
                                                </div>
                                            ))}
                                            {/* Data */}
                                        </Slider>
                                        <div className="custom-tabs">
                                            <Tab.Container defaultActiveKey="tab10">
                                                <Nav as="ul" varient="tabs" className="custom p-relative mb-xl-40">
                                                    {item.tabsdata.map((data, i) => (
                                                        <Nav.Item key={i} as="li">
                                                            <Nav.Link eventKey={"tab" + 1 + i}>{data.title}</Nav.Link>
                                                        </Nav.Item>
                                                    ))}
                                                </Nav>
                                                <Tab.Content>
                                                    {item.tabsdata.map((data, i) => (
                                                        <Tab.Pane key={i} eventKey={"tab" + 1 + i}>
                                                            <div className="tab-inner" dangerouslySetInnerHTML={{ __html: data.htmltext }} />
                                                        </Tab.Pane>
                                                    ))}
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-4">
                            <Sidebar />
                        </aside>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;