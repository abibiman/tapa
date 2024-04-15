import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Quoteform from '../layouts/Quoteform';
import Footer from '../layouts/Footer';
import Content from '../sections/blog-details-left/Content';

const pagelocation = "Blog Details";

class Blogdetailsleft extends Component {
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
                    detailId={this.props.match.params.id}
                />
                <Quoteform />
                <Footer />
            </Fragment>
        );
    }
}

export default Blogdetailsleft;