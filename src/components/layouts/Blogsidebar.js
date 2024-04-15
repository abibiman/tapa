import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import tags from "../../data/tags.json";
import category from "../../data/category.json";
import { getRecentPost } from "../../helper/blogHelper";

class Blogsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
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
            this.props.history.push("/blog/search/" + this.state.searchText);
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
                                <input type="text" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} className="form-control form-control-custom" placeholder="keywords" required />
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
                                    <Link to={"/blog/cat/" + item.id} className="text-theme fs-14">{item.title}<span className="text-light-white">({item.count})</span></Link>
                                </li>
                            ))}
                            {/* Data */}
                        </ul>
                    </div>
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Recent Post</h5>
                        </div>
                        <ul className="custom popular_post">
                            {/* Data */}
                            {getRecentPost().map((item, i) => (
                                <li className="mb-xl-20" key={i}>
                                    <div className="post">
                                        <div className="post-wrapper">
                                            <div className="popular_post_img animate-img">
                                                <Link to={"/blog-details/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid image-fit" alt={item.title} />
                                                </Link>
                                            </div>
                                            <div className="popular_post_title">
                                                <h6><Link to={"/blog-details/" + item.id} className="text-custom-black">{item.title}</Link></h6>
                                                <span className="date text-custom-blue fw-600 fs-14">{item.postdate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            {/* Data */}
                        </ul>
                    </div>
                    <div className="sidebar_widgets">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Tags</h5>
                        </div>
                        <div className="tags">
                            {/* Data */}
                            {tags.map((item, i) => (
                                <Link to={"/blog/tag/" + item.id} key={i}>{item.title}</Link>
                            ))}
                            {/* Data */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Blogsidebar);