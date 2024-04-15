import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import tags from "../../data/tags.json";
import category from "../../data/portfolio/category.json";
import { getRecentPost } from "../../helper/portfolioHelper";

class Portfoliosidebar extends Component {
    render() {
        return (
            <div className="sidebar_wrap">
                <div className="sidebar">
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title">
                            <h5 className="no-margin text-theme">Categories</h5>
                        </div>
                        <div className="listing-categories">
                            <ul className="custom">
                                {/* Data */}
                                {category.map((item, i) => (
                                    <li key={i}>
                                        <Link to={"/portfolio/cat/" + item.id} className="text-theme fs-14">{item.title}</Link>
                                    </li>
                                ))}
                                {/* Data */}
                            </ul>
                        </div>
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
                                                <Link to={"/portfolio-details/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid image-fit" alt={item.title} />
                                                </Link>
                                            </div>
                                            <div className="popular_post_title">
                                                <h6><Link to={"/portfolio-details/" + item.id} className="text-custom-black">{item.title}</Link></h6>
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
                                <Link to={"/portfolio/tag/" + item.id} key={i}>{item.title}</Link>
                            ))}
                            {/* Data */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Portfoliosidebar);