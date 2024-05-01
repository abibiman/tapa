import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Quoteform from '../layouts/Quoteform';
import Content from '../sections/home/Content';

const pagelocation = "Homepage";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Trans Africa Consortium| {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Content />
        
                <Footer />
            </Fragment>
        );
    }
}

export default Home;