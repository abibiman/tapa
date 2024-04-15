import React, { Component } from 'react';
import { getAuthor } from "../../../helper/helper";
import testimonials from "../../../data/testimonial.json";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true
};
const settingsThumb = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        }
    ]
};

class Testimonials extends Component {
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
        return (
            <div className="testimonials-box custom-container arrow-shape-2">
                <div className="section-header">
                    <div className="section-heading">
                        <h5 className="text-custom-white">Our Testimonials</h5>
                        <h3 className="text-theme fw-700">Feedback From Clients</h3>
                    </div>
                    <div className="section-description">
                        <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
                <div className="testimonials-wrapper">
                    <div className="col-12">
                        <Slider {...settingsThumb} asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)} className="testimonial-nav row mb-xl-40">
                            {/* Data */}
                            {testimonials.map((item, i) => (
                                <div key={i} className="slide-item col-12">
                                    {getAuthor(item.author).map((author, i) => (
                                        <div className="testimonials-author" key={i}>
                                            <Link to="#">
                                                <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle image-fit" alt={author.name} />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {/* Data */}
                        </Slider>
                        <Slider {...settings} asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)} className="testimonial-for row">
                            {/* Data */}
                            {testimonials.map((item, i) => (
                                <div key={i} className="slide-item col-12">
                                    <div className="testimonials-inner">
                                        <div className="testimonial-content">
                                            <h4 className="text-theme fw-700 fs-20">{item.title}</h4>
                                            <p className="text-custom-white mb-xl-20">{item.comment}</p>
                                            {getAuthor(item.author).map((author, i) => (
                                                <p className="text-custom-black fw-700" key={i}>
                                                    <strong>{author.name}<br /><span className="text-custom-white fw-400">{author.post}</span></strong>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Data */}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;