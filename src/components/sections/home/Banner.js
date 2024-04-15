import React, { Component } from 'react';
import banner from "../../../data/banner.json";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Navigation]);

const settings = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }
}

class Banner extends Component {
    render() {
        return (
            <div className="simple-banner">
                <Swiper {...settings}
                    navigation={{
                        nextEl: '.main-button-next',
                        prevEl: '.main-button-prev',
                    }} className="main-banner swiper-container p-relative">
                    {/* Data */}
                    {banner.map((item, i) => (
                        <SwiperSlide className="slide-item" key={i}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                            <div className="transform-center">
                                <div className="container">
                                    <div className={"row " + item.position}>
                                        <div className="col-lg-7">
                                            <div className={"content-wrapper " + item.textpos}>
                                                <h1 className="text-custom-white" dangerouslySetInnerHTML={{ __html: item.title }} />
                                                <p className="text-custom-white mb-xl-40">{item.text}</p>
                                                <Link to="/about" className="btn-first btn-submit text-custom-white mr-2">Learn More</Link>
                                                <Link to="/contact" className="btn-first btn-border">View Our Impact Stories</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Data */}
                    {/* Add Arrows */}
                    <div className="slider-btn">
                        <div className="main-button-next swiper-button-next">
                            <span className="flaticon-arrow-1" />
                        </div>
                        <div className="main-button-prev swiper-button-prev">
                            <span className="flaticon-left" />
                        </div>
                    </div>
                </Swiper>
            </div>
        );
    }
}

export default Banner;