import React, { Component } from 'react';
import { getRecentPost } from "../../../helper/portfolioHelper";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Navigation]);

const settings = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

class Portfolio extends Component {
    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Our Portfolio</h5>
                            <h3 className="text-theme fw-700">A Glance of Our Work</h3>
                        </div>
                        <div className="section-description">
                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper {...settings} navigation={{
                                nextEl: '.featured-button-next',
                                prevEl: '.featured-button-prev',
                            }} className="swiper-container featured-property-slider">
                                {/* Data */}
                                {getRecentPost().map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="property-grid-box">
                                            <div className="property-grid-wrapper">
                                                <div className="property-img animate-img">
                                                    <Link to={"/portfolio-details/" + item.id}>
                                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid full-width" alt={item.title} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {/* Data */}
                            </Swiper>
                            {/* Add Arrows */}
                            <div className="slider-btn">
                                <div className="featured-button-next swiper-button-next">
                                    <span className="flaticon-arrow-1" />
                                </div>
                                <div className="featured-button-prev swiper-button-prev">
                                    <span className="flaticon-left" />
                                </div>
                            </div>
                            {/* Add Pagination */}
                            <div className="featured-pagination swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;