import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import block from "../../../data/service/service.json";
import { getCategories } from "../../../helper/serviceHelper";
import category from "../../../data/service/category.json";

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
}

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: block,
            activeItem: 0
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === 0) {
            filteredProducts = block;
        } else {
            filteredProducts = block.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="slide-item">
                <div className="categories-box animate-img">
                    <Link to={"/service-details/" + item.id}>
                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="image-fit" alt={item.title} />
                        <div className="text-wrapper">
                            <h5 className="text-custom-blue no-margin fw-600 fs-20">{item.title}</h5>
                            {getCategories(item.category).slice(0, 1).map((cat, i) => (
                                <p className="text-light-white no-margin" key={i}>{cat.title}</p>
                            ))}
                        </div>
                    </Link>
                </div>
            </div>
        ));
        return (
            <section className="section-padding bg-light-white our-category">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Our Categories</h5>
                            <h3 className="text-theme fw-700">Our World Class Construction Category</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider ref={c => (this.slider = c)} {...settings} className="home-maintainance-slider categories-slider-box">
                                {/* Data */}
                                {renderAll}
                                {/* Data */}
                            </Slider>
                            {/* Add Arrows */}
                            <div className="slider-btn">
                                <div className="hm-button-next swiper-button-next" onClick={this.next}>
                                    <span className="flaticon-arrow-1" />
                                </div>
                                <div className="hm-button-prev swiper-button-prev" onClick={this.previous}>
                                    <span className="flaticon-left" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="categories-tabs">
                                <ul className="custom nav nav-tabs">
                                    {/* Data */}
                                    {category.map((item, i) => (
                                        <li key={i} className="nav-item">
                                            <Link to="#" className={this.state.activeItem === parseInt(item.id) ? 'nav-link text-custom-black active' : 'nav-link text-custom-black'} onClick={this.handleClick.bind(this, item.id)}>
                                                <span>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.icon} className="image-fit" alt={item.title} />
                                                </span>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                    {/* Data */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;