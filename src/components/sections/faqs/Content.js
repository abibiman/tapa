import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import faqs from "../../../data/faqs.json";
import { Accordion, Card, Button } from 'react-bootstrap';

function getFilteredPosts(posts, filter = { searchQuery: '' }) {
    var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    if (searchFilter) {
        posts = posts.filter(post => {
            return (post.title !== undefined && post.title !== null) && post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
        })
    }
    return posts;
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
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
            this.props.history.push("/faqs/search/" + this.state.searchText);
        }
    }
    getPosts() {
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredPosts(faqs, { searchQuery });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h5 className="text-custom-blue">How can we</h5>
                            <h3 className="text-theme fw-700">help you?</h3>
                        </div>
                        <div className="section-description">
                            <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                                <div className="input-group">
                                    <input type="search" className="form-control form-control-custom" placeholder="Describe your issue" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                                    <div className="input-group-append">
                                        <button className="btn-first btn-submit" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-box mb-md-40">
                                <div className="faq-wrapper">
                                    <div className="title-img mb-xl-20 animate-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/faq-img-01.jpg"} className="img-fluid image-fit" alt="img" />
                                        <div className="overlay overlay-bg" />
                                        <div className="transform-center text-center">
                                            <h4 className="text-custom-white fw-700 no-margin">Knowledge <span className="fw-400">Base</span></h4>
                                        </div>
                                    </div>
                                    <Accordion defaultActiveKey={1} className="custom-accordion">
                                        {this.state.data.slice(0, 5).map((item, i) => (
                                            <Card key={i}>
                                                <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                                    <Card.Body>
                                                        <p className="text-theme no-margin">
                                                            {item.text}
                                                        </p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                                        {item.title}
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-box">
                                <div className="faq-wrapper">
                                    <div className="title-img mb-xl-20 animate-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/faq-img-02.jpg"} className="img-fluid image-fit" alt="img" />
                                        <div className="overlay overlay-bg" />
                                        <div className="transform-center text-center">
                                            <h4 className="text-custom-white fw-700 no-margin">About <span className="fw-400">Our Services</span></h4>
                                        </div>
                                    </div>
                                    <Accordion defaultActiveKey={1} className="custom-accordion">
                                        {this.state.data.slice(5, 10).map((item, i) => (
                                            <Card key={i}>
                                                <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                                    <Card.Body>
                                                        <p className="text-theme no-margin">
                                                            {item.text}
                                                        </p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                                        {item.title}
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                            </Card>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Content);