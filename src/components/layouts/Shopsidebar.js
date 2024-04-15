import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import category from "../../data/category.json";
import brands from "../../data/shop/brands.json";
import size from "../../data/shop/size.json";
import colors from "../../data/shop/colors.json";
import IonRangeSlider from 'react-ion-slider'

class Shopsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            priceFilter: [1, 1000],
            minPrice: 1,
            maxPrice: 0,
        };
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/shop/search/" + this.state.searchText);
        }
    }
    // Price filter
    onPriceChange(event) {
        this.setState({
            minPrice: event.from,
            maxPrice: event.to
        })
        if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
            this.props.history.push(`/shop/${this.state.minPrice}/${this.state.maxPrice}`);
        }
    }
    render() {
        return (
            <div className="sidebar_wrap">
                <div className="sidebar">
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Search</h5>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)} method="GET">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-custom" placeholder="keywords" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                            </div>
                            <button type="submit" className="btn-first btn-submit full-width">Search</button>
                        </form>
                    </div>
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Top Category</h5>
                        </div>
                        <ul className="custom categories">
                            {/* Data */}
                            {category.map((item, i) => (
                                <li key={i}>
                                    <Link to={"/shop/cat/" + item.id} className="text-theme fs-14">{item.title} <span className="text-light-white">({item.count})</span></Link>
                                </li>
                            ))}
                            {/* Data */}
                        </ul>
                    </div>
                    <div className="sidebar_widgets widget-brand mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Brand</h5>
                        </div>
                        <div className="shop-categories">
                            <ul>
                                {/* Data */}
                                {brands.map((item, i) => (
                                    <li key={i}>
                                        <label>
                                            <input type="checkbox" name="brands" value={item.value} />
                                            <span className="input-chechbox" />
                                            {item.title}
                                        </label>
                                    </li>
                                ))}
                                {/* Data */}
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Price</h5>
                        </div>
                        <div className="shop-categories">
                            <IonRangeSlider type="double" skin="flat" hide_min_max={true} min={1} max={100} from={this.state.priceFilter[0]} to={this.state.priceFilter[1]} grid={false} prefix="$" onChange={this.onPriceChange.bind(this)} />
                        </div>
                    </div>
                    <div className="sidebar_widgets widget-size mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Size</h5>
                        </div>
                        <div className="shop-categories text-center">
                            <ul>
                                {/* Data */}
                                {size.map((item, i) => (
                                    <li key={i}>
                                        <label>
                                            <input type="radio" name="size" value={item.value} />
                                            <span className="input-chechbox">{item.title}</span>
                                        </label>
                                    </li>
                                ))}
                                {/* Data */}
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar_widgets widget-color mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Color</h5>
                        </div>
                        <div className="shop-categories">
                            <ul className="row no-gutters justify-content-between">
                                {/* Data */}
                                {colors.map((item, i) => (
                                    <li className="col-6" key={i}>
                                        <label>
                                            <input type="radio" name="color" value={item.value} />
                                            <span className={"input-chechbox border-" + item.value} />
                                            {item.title}
                                        </label>
                                    </li>
                                ))}
                                {/* Data */}
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar_widgets">
                        <div className="sidebar-banner">
                            <Link to="#">
                                <img src={process.env.PUBLIC_URL + "/assets/images/shop/sidebar.jpg"} alt="img" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Shopsidebar);