import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Quoteform from '../layouts/Quoteform';
import Footer from '../layouts/Footer';
import Content from '../sections/contact/Content';

const pagelocation = "Donate";

class Donate extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Donate | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                <Quoteform />
                <Footer />
            </Fragment>
        );
    }
}

export default Donate;