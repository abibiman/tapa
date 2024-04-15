import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Quoteform from '../layouts/Quoteform';
import Footer from '../layouts/Footer';
import Content from '../sections/portfolio-details-left/Content';
import Related from '../sections/portfolio-details-left/Related';

const pagelocation = "Portfolio Details";

class Portfoliodetailsleft extends Component {
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
                <Related
                    detailId={this.props.match.params.id}
                />
                <Quoteform />
                <Footer />
            </Fragment>
        );
    }
}

export default Portfoliodetailsleft;