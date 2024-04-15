import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blockblock from '../../../data/blog/blog.json';
import { getCategories, getAuthor } from "../../../helper/helper";
import Pagination from "react-js-pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../layouts/Blogsidebar';

const settings = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: blockblock,
            activePage: 1,
            itemPerpage: 6
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <article key={i} className="post col-md-6 mb-xl-30">
                <div className="post-wrapper">
                    <div className="blog-img animate-img">
                        {/* Standard */}
                        {item.format === 'standard' || item.format === 'video' || item.format === '' ?
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
                        {/* Gallery */}
                        {item.format === 'gallery' && item.image !== [] ?
                            <Swiper {...settings} className="blog-slider-inner">
                                {item.image.map((image, i) => (
                                    <SwiperSlide key={i}>
                                        <Link to={"/blog-details/" + item.id}>
                                            <img src={process.env.PUBLIC_URL + "/" + image} className="img-fluid full-width" alt={item.title} />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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
        });
        return (
            <section className="section-padding bg-light-white our_articles">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-md-80">
                            <div className="row">
                                {/* article */}
                                {paginationData}
                                {/* article */}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <nav className="section-padding-top">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={this.state.itemPerpage}
                                            totalItemsCount={this.state.data.length}
                                            pageRangeDisplayed={this.state.data.length}
                                            onChange={this.handlePageChange.bind(this)}
                                            innerClass="pagination mb-0 justify-content-center"
                                            activeClass="active"
                                            itemClass="page-item"
                                            linkClass="page-link"
                                        />
                                    </nav>
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