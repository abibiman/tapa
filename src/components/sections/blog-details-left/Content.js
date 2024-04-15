import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogblock from '../../../data/blog/blog.json';
import { getBlog, getPostNavigation } from '../../../helper/blogHelper';
import { getAuthor, getTags, socialShare } from '../../../helper/helper';
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
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getBlog(detailId);
        return (
            <section className="section-padding blog-details">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4 mb-md-80">
                            <Sidebar />
                        </aside>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    {/* article */}
                                    <article className="post">
                                        <div className="post-wrapper">
                                            <div className="blog-img animate-img mb-xl-20">
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
                                                <div className="post-date">
                                                    <Link to={"/blog-details/" + item.id}>{item.postdate}</Link>
                                                </div>
                                            </div>
                                            <div className="blog-meta">
                                                <div className="blog-title">
                                                    <h2><Link to={"/blog-details/" + item.id} className="text-theme fw-600">{item.title}</Link></h2>
                                                </div>
                                                <div className="post-meta">
                                                    {getAuthor(item.author).map((author, i) => (
                                                        <div className="post-author mb-xl-20" key={i}>
                                                            <div className="author-img">
                                                                <Link to={"/blog/author/" + author.id}>
                                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                </Link>
                                                            </div>
                                                            <span className="text-theme fs-14">By <Link to={"/blog/author/" + author.id} className="text-theme fw-500">{author.name}</Link></span>
                                                        </div>
                                                    ))}
                                                    <div className="post-content mb-xl-20">
                                                        <span className="text-custom-blue fs-14"><i className="fas fa-eye mr-1" /> <Link to={"/blog-details/" + item.id} className="text-theme">{item.views}</Link></span>
                                                        <span className="text-custom-blue fs-14"><i className="fas fa-thumbs-up mr-1" /> <Link to={"/blog-details/" + item.id} className="text-theme">{item.likes}</Link></span>
                                                        <span className="text-custom-blue fs-14"><i className="fas fa-comments mr-1" /> <Link to={"/blog-details/" + item.id} className="text-theme">{item.reviews.length}</Link></span>
                                                    </div>
                                                </div>
                                                <div className="blog-content" dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                            </div>
                                        </div>
                                    </article>
                                    {/* article */}
                                    <hr />
                                    {/* tags & social */}
                                    <div className="post-details-tags-social mb-xl-20">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-6">
                                                <div className="tags-box">
                                                    <span className="fs-18 text-light-white"><i className="fas fa-tags" /></span>
                                                    <div className="tags">
                                                        {/* Data */}
                                                        {getTags(item.tags).slice(0, 3).map((tag, i) => (
                                                            <Link to={"/blog/tag/" + tag.id} key={i}>{tag.title}</Link>
                                                        ))}
                                                        {/* Data */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="social-media-box">
                                                    <ul className="custom">
                                                        {/* Data */}
                                                        {socialShare(item.title).map((social, i) => (
                                                            <li key={i}>
                                                                <Link to="#" className={social.iconStyle} onClick={(e) => this.openSocialPopup(social, i)}>
                                                                    <i className={social.iconClass} />
                                                                </Link>
                                                            </li>
                                                        ))}
                                                        {/* Data */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* tags & social */}
                                    {/* post author */}
                                    {getAuthor(item.author).map((author, i) => (
                                        <div className="post-author mb-xl-20" key={i}>
                                            <div className="author-img animate-img">
                                                <Link to={"/blog/author/" + author.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="image-fit" alt={author.name} />
                                                </Link>
                                            </div>
                                            <div className="author-caption">
                                                <h5 className="fw-600"><Link to={"/blog/author/" + author.id} className="text-custom-white">{author.name}</Link></h5>
                                                <p className="text-custom-white">{author.text}</p>
                                                <div className="social-media-box">
                                                    <ul className="custom">
                                                        {/* Data */}
                                                        {author.social.map((social, i) => (
                                                            <li key={i}>
                                                                <a rel={"external"} href={social.url} className="fb"><i className={social.icon} /></a>
                                                            </li>
                                                        ))}
                                                        {/* Data */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* post author */}
                                    {/* post pagination */}
                                    <div className="pagination-btn">
                                        <nav>
                                            <ul className="pagination mt-0">
                                                {getPostNavigation(blogblock, blogblock.findIndex(item => parseInt(item.id) === parseInt(detailId)))}
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* post pagination */}
                                    {/* comments */}
                                    <div className="comment-box section-padding-top p-relative">
                                        <div id="comment-box">
                                            <h4 className="text-theme fw-600">Reviews [{item.reviews.length}]</h4>
                                            <ul className="comments">
                                                {item.reviews.map((review, i) => (
                                                    <li className="comment" key={i}>
                                                        {getAuthor(review.user).map((user, i) => (
                                                            <article key={i}>
                                                                <div className="comment-avatar">
                                                                    <img src={process.env.PUBLIC_URL + "/" + user.image} alt={user.name} className="rounded-circle" />
                                                                </div>
                                                                <div className="comment-content">
                                                                    <div className="comment-meta">
                                                                        <div className="comment-meta-header">
                                                                            <h5 className="text-dark-grey fw-600 author mb-3">{user.name}</h5>
                                                                            <div className="post-date">
                                                                                <Link to={"/blog-details/" + item.id} className="date bg-custom-blue text-custom-white">{review.commentdate}</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-meta-reply">
                                                                            <Link to="#" className="comment-reply-link btn-first btn-submit"><i className="fas fa-reply" /></Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment">
                                                                        <p className="text-theme">{review.comment}</p>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        ))}
                                                        <ul className="children">
                                                            {review.replies.map((review, i) => (
                                                                <li className="comment" key={i}>
                                                                    {getAuthor(review.user).map((user, i) => (
                                                                        <article key={i}>
                                                                            <div className="comment-avatar">
                                                                                <img src={process.env.PUBLIC_URL + "/" + user.image} alt={user.name} className="rounded-circle" />
                                                                            </div>
                                                                            <div className="comment-content">
                                                                                <div className="comment-meta">
                                                                                    <div className="comment-meta-header">
                                                                                        <h5 className="text-dark-grey fw-600 author mb-3">{user.name}</h5>
                                                                                        <div className="post-date">
                                                                                            <Link to={"/blog-details/" + item.id} className="date bg-custom-blue text-custom-white">{review.commentdate}</Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="comment-meta-reply">
                                                                                        <Link to="#" className="comment-reply-link btn-first btn-submit"><i className="fas fa-reply" /></Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment">
                                                                                    <p className="text-theme">{review.comment}</p>
                                                                                </div>
                                                                            </div>
                                                                        </article>
                                                                    ))}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="comment-respond" id="respond">
                                                <h4 className="text-theme fw-600">Leave Comment</h4>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="text-theme fw-600 fs-14">Full Name</label>
                                                                <input type="text" name="#" className="form-control form-control-custom" placeholder="Full Name" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="text-theme fw-600 fs-14">Email I'd</label>
                                                                <input type="email" name="#" className="form-control form-control-custom" placeholder="Email I'd" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="text-theme fw-600 fs-14">Comment</label>
                                                                <textarea rows={4} name="#" className="form-control form-control-custom" placeholder="Comment" />
                                                            </div>
                                                            <button type="submit" className="btn-first btn-submit">Leave Comment</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* comments */}
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