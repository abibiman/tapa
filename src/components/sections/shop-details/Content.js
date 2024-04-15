import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getProduct, handleOutofStock } from "../../../helper/shopHelper";
import { Rating, socialShare, getCategories, getTags } from '../../../helper/helper';

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
        super(props)
        this.state = {
            qty: 1,
            nav1: null,
            nav2: null
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    increment() {
        this.setState({
            qty: this.state.qty + 1
        });
    }
    decrement() {
        this.setState({
            qty: this.state.qty > 1 ? this.state.qty - 1 : 1
        });
    }
    handleChange(event) {
        this.setState({ qty: event.target.value });
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getProduct(detailId);
        return (
            <section className="section-padding bg-light-white listing-detail product-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="listing-detail-heading mb-xl-20">
                                <h3 className="no-margin text-theme">{item.title}</h3>
                                <div className="social-media">
                                    <ul className="custom social-media">
                                        {/* Data */}
                                        {socialShare(item.title).map((social, i) => (
                                            <li key={i}>
                                                <Link to="#" onClick={(e) => this.openSocialPopup(social, i)}>
                                                    <i className={social.iconClass} />
                                                </Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            <div className="image-sec-table padding-20 mb-xl-20">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="images-wrapper mb-md-80">
                                            <Slider {...settings} asNavFor={this.state.nav1}
                                                ref={slider => (this.slider2 = slider)} className="detail-page-slider-for mb-xl-20 magnific-gallery">
                                                {/* Data */}
                                                {item.image.map((image, i) => (
                                                    <div key={i} className="slide-item">
                                                        <a rel={"external"} href={image} className="popup gallery-thumb">
                                                            <img src={process.env.PUBLIC_URL + "/" + image} className="img-fluid image-fit" alt={item.title} />
                                                        </a>
                                                    </div>
                                                ))}
                                                {/* Data */}
                                            </Slider>
                                            <Slider {...settingsThumb} asNavFor={this.state.nav2}
                                                ref={slider => (this.slider1 = slider)} className="detail-page-slider-nav">
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
                                                    <div className="new-price">
                                                        <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span>
                                                        {item.discount > 0 || item.discount !== '' ?
                                                            <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                                            : ''}
                                                    </div>
                                                    <div className="ratings">
                                                        {Rating(item.rating)}
                                                    </div>
                                                </div>
                                                <div className="details">
                                                    <div className="product-info text-light-white">
                                                        <p>{item.shorttext}</p>
                                                    </div>
                                                    <div className="product-variant-parent">
                                                        <div className="product-variant">
                                                            <p>
                                                                <label>Brand :</label>
                                                                <span>
                                                                    {item.brands.map((brand, i) => (
                                                                        <Link to={"/shop-details/" + item.id} key={i}>{brand}</Link>
                                                                    ))}
                                                                </span>
                                                            </p>
                                                            <p>
                                                                <label>Product Code :</label>
                                                                <span>
                                                                    <Link to={"/shop-details/" + item.id}>{item.productcode}</Link>
                                                                </span>
                                                            </p>
                                                            <p>
                                                                <label>Category :</label>
                                                                <span>
                                                                    {getCategories(item.category).slice(0, 1).map((cat, i) => (
                                                                        <Link to={"/shop/cat/" + cat.id} key={i}>{cat.title}</Link>
                                                                    ))}
                                                                </span>
                                                            </p>
                                                            <p>
                                                                <label>Tag :</label>
                                                                <span>
                                                                    {getTags(item.tags).slice(0, 1).map((tag, i) => (
                                                                        <Link to={"/shop/tag/" + tag.id} key={i}>{tag.title}</Link>
                                                                    ))}
                                                                </span>
                                                            </p>
                                                            <p>
                                                                <label>Availability :</label>
                                                                <span>
                                                                    {item.stock === true ?
                                                                        <Link to={"/shop-details/" + item.id} className="stock-green">In Stock</Link>
                                                                        :
                                                                        <Link to={"/shop-details/" + item.id} className="stock-green text-danger">Out Of Stock</Link>
                                                                    }
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="product-info-2">
                                                        <h6 className="quantity-title">Quantity</h6>
                                                        <div className="quantity">
                                                            <button className="minus-btn add" type="button" name="button" onClick={this.decrement}>
                                                                <i className="fas fa-minus" aria-hidden="true" />
                                                            </button>
                                                            <input type="text" name="name" value={this.state.qty} onChange={this.handleChange.bind(this)} size={1} readOnly />
                                                            <button className="plus-btn add" type="button" name="button" onClick={this.increment}>
                                                                <i className="fas fa-plus" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                        {item.stock === true ?
                                                            <button type="button" className="btn-first btn-submit">Add To Cart
                                                            </button>
                                                            :
                                                            <button type="button" className="btn-first btn-submit" onClick={handleOutofStock}>Add To Cart
                                                            </button>
                                                        }
                                                    </div>
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
                                        <h5 className="text-theme fw-600 no-margin">Additional information </h5>
                                    </div>
                                    <ul className="custom listing-infor">
                                        {/* Data */}
                                        {item.additionalinfo.map((info, i) => (
                                            <li key={i}>
                                                <Link to={"/shop-details/" + item.id} className="text-theme fs-14">{info}</Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                                <div className="content-box">
                                    <div className="head">
                                        <h5 className="text-theme fw-600 no-margin">Write a Review </h5>
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
                                                        <input type="text" name="#" className="form-control form-control-custom" placeholder="Review title" />
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
                                                        <button type="submit" className="btn-first btn-submit">Submit Review</button>
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