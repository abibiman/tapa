import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Quoteform from '../layouts/Quoteform';
import Footer from '../layouts/Footer';
import Content from '../sections/shop/Content';

const pagelocation = "Shop Grid";

class Shop extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Cali - Constructions & Shop - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content
                    catId={this.props.match.params.catId}
                    tagId={this.props.match.params.tagId}
                    query={this.props.match.params.query}
                    minPrice={this.props.match.params.minPrice}
                    maxPrice={this.props.match.params.maxPrice}
                />
                <Quoteform />
                <Footer />
            </Fragment>
        );
    }
}

export default Shop;