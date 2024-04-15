import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import block from "../../../data/service/service.json";
import { getFilteredPosts, getCategories } from "../../../helper/serviceHelper";
import category from "../../../data/service/category.json";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: this.getPosts(),
            activeItem: 0
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === 0) {
            filteredProducts = this.getPosts();
        } else {
            filteredProducts = this.getPosts().filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var filteredItems = getFilteredPosts(block, { cat, tag });
        return filteredItems;
    }
    render() {
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div className="col-lg-3 col-md-6 filter-box" key={i}>
                <div className="service-item animate-img mb-xl-30">
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
            <section className="section-padding our-services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="filter-gallery custom-tabs mb-xl-40">
                                <ul className="custom">
                                    <li className={this.state.activeItem === 0 ? 'active' : ''}>
                                        <Link to="#" className="text-custom-black" onClick={this.handleClick.bind(this, 0)}>All</Link>
                                    </li>
                                    {category.map((item, i) => (
                                        <li key={i} className={this.state.activeItem === parseInt(item.id) ? 'active' : ''}>
                                            <Link to="#" className="text-custom-black" onClick={this.handleClick.bind(this, item.id)}>{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="row gallery-grid">
                                {/* Data */}
                                {renderAll}
                                {/* Data */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;