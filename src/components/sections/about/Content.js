import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Clients from './Clients';
import Counter from './Counter';
import Partners from './Partners';
import Team from './Team';
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext />
                <Counter />
                <section className="client-tesimonial">
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
                <Team />
                <Partners />
            </Fragment>
        );
    }
}

export default Content;