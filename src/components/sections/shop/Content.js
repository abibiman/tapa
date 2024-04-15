import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import { getFilteredproducts, handleOutofStock } from '../../../helper/shopHelper';
import { Rating } from '../../../helper/helper';
import Pagination from "react-js-pagination";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getProducts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getProducts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var minPrice = this.props.minPrice ? this.props.minPrice : '';
        var maxPrice = this.props.maxPrice ? this.props.maxPrice : '';
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredproducts(shopblock, { cat, tag, priceFilter: [minPrice, maxPrice], searchQuery });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                <div className="shop-wrapper mb-xl-30">
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
            </div>
        });
        return (
            <div className="section-padding bg-light-white shop-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-5">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <select className="form-control form-control-custom bg-white custom-select">
                                            <option value={0}>Default Sorting</option>
                                            <option value={1}>A-Z Sorting</option>
                                            <option value={2}>Z-A Sorting</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <select className="form-control form-control-custom bg-white custom-select">
                                            <option value={0}>1-6 Products</option>
                                            <option value={1}>6-16 Products</option>
                                            <option value={2}>16-25 Products</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-12 align-self-center">
                                        <div className="shop-view">
                                            <p> Showing {paginationData.length} Results</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Data */}
                                {paginationData}
                                {/* Data */}
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;