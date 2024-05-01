import React, { Component } from 'react';
import { getRecentPost } from "../../../helper/blogHelper";
import { getCategories, getAuthor } from "../../../helper/helper";
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
class Blogs extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white our_articles">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">Our Blog</h5>
                            <h3 className="text-theme fw-700">Our Weekly Africa Blog</h3>
                        </div>
     
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper {...settings} navigation={{
                                nextEl: '.blog-button-next',
                                prevEl: '.blog-button-prev',
                            }} className="blog-slider">
                                {/* Data */}
                                {getRecentPost().map((item, i) => (
                                    <SwiperSlide key={i}>
                                        {/* article */}
                                        <article className="post">
                                            <div className="post-wrapper">
                                                <div className="blog-img animate-img">
                                                    {/* Standard */}
                                                    {item.format === 'standard' || item.format === 'video' || item.format === 'gallery' || item.format === '' ?
                                                        <Link to={"/blog-details/" + item.id}>
                                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid full-width" alt={item.title} />
                                                        </Link>
                                                        : ''}
                                                    {/* Video */}
                                                    {item.format === 'video' && item.video !== '' ?
                                                        <div className="post-video">
                                                            <div className="video-btn-wrapper">
                                                                <a rel={"external"} href={item.video} className="text-custom-blue popup-youtube">
                                                                    <i className="far fa-play-circle" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        : ''}
                                                </div>
                                                <div className="post-date">
                                                    <Link to={"/blog-details/" + item.id}>{item.postdate}</Link>
                                                </div>
                                                <div className="blog-meta bg-custom-white padding-20">
                                                    <div className="cat-box">
                                                        <div className="cats">
                                                            {/* Data */}
                                                            {getCategories(item.category).slice(0, 2).map((cat, i) => (
                                                                <Link to={"/blog/cat/" + cat.id} key={i}>{cat.title}</Link>
                                                            ))}
                                                            {/* Data */}
                                                        </div>
                                                    </div>
                                                    <h2 className="post-title"><Link to={"/blog-details/" + item.id} className="text-theme">{item.title}</Link></h2>
                                                    <p className="text-light-white no-margin">{item.shorttext}</p>
                                                </div>
                                                <div className="blog-footer-meta bg-custom-white padding-20">
                                                    {/* Data */}
                                                    {getAuthor(item.author).map((author, i) => (
                                                        <div className="post-author" key={i}>
                                                            <div className="author-img">
                                                                <Link to={"/blog/author/" + author.id}>
                                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                </Link>
                                                            </div>
                                                            <span className="text-theme fs-14">By <Link to={"/blog/author/" + author.id} className="text-theme fw-500">{author.name}</Link></span>
                                                        </div>
                                                    ))}
                                                    {/* Data */}
                                                    <div className="post-link">
                                                        <Link to={"/blog-details/" + item.id} className="link-btn text-custom-blue fw-600 fs-14">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        {/* article */}
                                    </SwiperSlide>
                                ))}
                                {/* Data */}
                            </Swiper>
                            {/* Add Arrows */}
                            <div className="slider-btn">
                                <div className="blog-button-next swiper-button-next">
                                    <span className="flaticon-arrow-1" />
                                </div>
                                <div className="blog-button-prev swiper-button-prev">
                                    <span className="flaticon-left" />
                                </div>
                            </div>
                            {/* Add Pagination */}
                            <div className="blog-pagination swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogs;