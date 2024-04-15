import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Blogs from './Blogs';
import Clients from './Clients';
import Ctainsta from './Ctainsta';
import Downloadapp from './Downloadapp';
import Faqs from './Faqs';
import Filterservices from './Filterservices';
import History from './History';
import Pagecta from './Pagecta';
import Partners from './Partners';
import Portfolio from './Portfolio';
import Services from './Services';
import Team from './Team';
import Testimonials from './Testimonials';
import Videocta from './Videocta';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouttext />
                <Services />
                <Videocta />
                <Portfolio />
                <History />
                <Pagecta />
                <Filterservices />
                <Team />
                <Blogs />
                <section className="client-tesimonial arrow-shape-1">
                    <div className="container-fluid no-padding">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <Testimonials />
                            </div>
                            <div className="col-lg-6">
                                <Clients />
                            </div>
                        </div>
                    </div>
                </section>
                <Partners />
                <Downloadapp />
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Faqs />
                            </div>
                            <div className="col-lg-6">
                                <Ctainsta />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Content;