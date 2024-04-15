import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Blogs from './Blogs';
import Clients from './Clients';
import Filterservices from './Filterservices';
import History from './History';
import Partners from './Partners';
import Portfolio from './Portfolio';
import Services from './Services';
import Team from './Team';
import Testimonials from './Testimonials';
import Videocta from './Videocta';
import Videoctatwo from './Videoctatwo';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouttext />
                <History />
                <Videocta />
                <Portfolio />
                <Services />
                <Filterservices />
                <Videoctatwo />
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
            </Fragment>
        );
    }
}

export default Content;