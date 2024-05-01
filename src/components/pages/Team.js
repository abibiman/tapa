import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Quoteform from '../layouts/Quoteform';
import Footer from '../layouts/Footer';
import Content from '../sections/team/Content';

const pagelocation = "Our Team";

class Team extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>TAPA | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />

                <Footer />
            </Fragment>
        );
    }
}

export default Team;