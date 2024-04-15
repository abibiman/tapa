import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPortfolio, getEngineer, getBuilder } from "../../../helper/portfolioHelper";
import { Rating } from "../../../helper/helper";
import Slider from 'react-slick';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};
const settingsThumb = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: '30px',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 567,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
};

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const detailId = this.props.detailId;
        const item = getPortfolio(detailId);
        return (
            <section className="section-padding bg-light-white listing-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="listing-detail-heading mb-xl-20">
                                <h3 className="no-margin text-theme">{item.title}</h3>
                            </div>
                            <div className="image-sec-table padding-20 mb-xl-20">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="images-wrapper mb-md-80">
                                            <Slider {...settings} asNavFor={this.state.nav2}
                                                ref={slider => (this.slider1 = slider)} className="detail-page-slider-for mb-xl-20 magnific-gallery">
                                                {/* Data */}
                                                {item.image.map((image, i) => (
                                                    <div key={i} className="slide-item">
                                                        <a href={image} className="popup gallery-thumb">
                                                            <img src={process.env.PUBLIC_URL + "/" + image} className="img-fluid image-fit" alt={item.title} />
                                                        </a>
                                                    </div>
                                                ))}
                                                {/* Data */}
                                            </Slider>
                                            <Slider {...settingsThumb} asNavFor={this.state.nav1}
                                                ref={slider => (this.slider2 = slider)} className="detail-page-slider-nav">
                                                {/* Data */}
                                                {item.image.map((image, i) => (
                                                    <div key={i} className="slide-item">
                                                        <Link to="#">
                                                            <img src={process.env.PUBLIC_URL + "/" + image} className="img-fluid image-fit" alt={item.title} />
                                                        </Link>
                                                    </div>
                                                ))}
                                                {/* Data */}
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="property-details-box">
                                            <div className="property-details-wrap">
                                                <div className="price-box mb-xl-20">
                                                    <span className="price text-custom-blue">$ {new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                                    <div className="ratings">
                                                        {Rating(item.rating)}
                                                    </div>
                                                </div>
                                                <div className="details">
                                                    {/* Data */}
                                                    {item.information.map((info, i) => (
                                                        <div className="text text-light-white" key={i}>
                                                            {info.title}:
                                                            <span className="text-theme">{info.text}</span>
                                                        </div>
                                                    ))}
                                                    {/* Data */}
                                                </div>
                                                <div className="details-2">
                                                    {getEngineer(item.engineer).map((text, i) => (
                                                        <div className="text text-light-white" key={i}>Engineer:
                                                            <span className="text-theme">{text.name}</span>
                                                        </div>
                                                    ))}
                                                    {getBuilder(item.builder).map((text, i) => (
                                                        <div className="text text-light-white" key={i}>Builder:
                                                            <span className="text-theme fw-600">{text.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description-box bg-custom-white padding-20">
                                <div className="content-box">
                                    <div className="head">
                                        <h5 className="text-theme fw-600 no-margin">Description</h5>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                </div>
                                <div className="content-box">
                                    <div className="head">
                                        <h5 className="text-theme fw-600 no-margin">Buliding info for: {item.title} </h5>
                                    </div>
                                    <p className="text-light-white desc">Most recent information provided by 
                                        {getEngineer(item.engineer).map((text, i) => (
                                            <span key={i}> {text.name}</span>
                                        ))}
                                    </p>
                                    <ul className="custom listing-infor">
                                        {/* Data */}
                                        {item.included.map((list, i) => (
                                            <li key={i}>
                                                <Link to={"/portfolio-details/" + item.id} className="text-theme fs-14">{list}</Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                                <div className="content-box">
                                    <div className="head">
                                        <h5 className="text-theme fw-600 no-margin">Building on Map </h5>
                                    </div>
                                    <div className="location mb-xl-20">
                                        {/* <iframe id="locmap" [title]="item.title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.574918681339!2d-122.45290738468235!3d37.776564279759214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085874a311220bb%3A0x6a56ca6f837ff84e!2sUniversity%20of%20San%20Francisco!5e0!3m2!1sen!2sin!4v1626167260455!5m2!1sen!2sin" /> */}
                                        <iframe id="locmap" title={item.title} src={item.location}></iframe>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <div className="head">
                                        <h5 className="text-theme fw-600 no-margin">Contact Info </h5>
                                    </div>
                                    <div className="contact-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="#" className="form-control form-control-custom" placeholder="Your Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" name="#" className="form-control form-control-custom" placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="#" className="form-control form-control-custom" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <textarea name="#" className="form-control form-control-custom" placeholder="Your Message" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-footer">
                                                        <div className="condition">
                                                            <span className="fs-14 ">By sending, you agree to <Link to="#" className="text-dark-grey">Terms of Use</Link> and <Link to="#" className="text-dark-grey">Privacy Policy</Link></span>
                                                        </div>
                                                        <button type="submit" className="btn-first btn-submit">Contact Builder</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;