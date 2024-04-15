import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import portfolio from "../../../data/portfolio/portfolio.json";
import category from "../../../data/portfolio/category.json";
import { getFilteredPosts } from "../../../helper/portfolioHelper";
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var filteredItems = getFilteredPosts(portfolio, { cat, tag });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-4 col-md-6" key={i}>
                <div className="property-grid-box mb-xl-30">
                    <div className="property-grid-wrapper">
                        <div className="property-img animate-img">
                            <Link to={"/portfolio-details/" + item.id}>
                                <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid full-width" alt={item.title} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        });
        return (
            <section className="section-padding bg-light-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="listing-top-heading mb-xl-20">
                                <h6 className="no-margin text-theme">Showing {paginationData.length} Results</h6>
                                <div className="sort-by">
                                    <span className="text-custom-black fs-14 fw-600">Sort by</span>
                                    <select className="form-control form-control-custom custom-select">
                                        {category.map((item, i) => (
                                        <option key={i}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
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
            </section>
        );
    }
}

export default Content;