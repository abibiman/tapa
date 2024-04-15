import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProduct, getProductByCategory, handleOutofStock } from "../../../helper/shopHelper";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Rating } from '../../../helper/helper';

// install Swiper modules
SwiperCore.use([Navigation]);

const settings = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
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

class Related extends Component {
    render() {
        const detailId = this.props.detailId;
        const product = getProduct(detailId);
        return (
            <section className="section-padding shop-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Related</h5>
                            <h3 className="text-theme fw-700">You may Also be Interested in</h3>
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
                                {getProductByCategory(product.category, detailId).map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="shop-wrapper">
                                            <div className="product-item-img">
                                                <div className="product-img-inner">
                                                    <Link to={"/shop-details/" + item.id}>
                                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                                    </Link>
                                                    <div className="hover-icons">
                                                        {/* Wishlist */}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip> Add To Wishlist </Tooltip>} >
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </OverlayTrigger>
                                                        {/* Compare */}
                                                        <OverlayTrigger placement="top" overlay={<Tooltip> Compare </Tooltip>} >
                                                            <Link to="#">
                                                                <i className="fas fa-exchange-alt" />
                                                            </Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-info">
                                                <div className="product-name">
                                                    <Link to={"/shop-details/" + item.id}>{item.title}</Link>
                                                </div>
                                                <span className="price">
                                                    <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span>
                                                    {item.discount > 0 || item.discount !== '' ?
                                                        <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                                        : ''}
                                                </span>
                                                <span className="product-rating">
                                                    {Rating(item.rating)}
                                                </span>
                                                {item.stock === true ?
                                                    <button type="button" className="btn-add-to-cart full-width">Add To Cart
                                                    </button>
                                                    :
                                                    <button type="button" className="btn-add-to-cart full-width" onClick={handleOutofStock}>Add To Cart
                                                    </button>
                                                }
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

export default Related;