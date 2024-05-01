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
                {/* <Counter /> */}
            </Fragment>
        );
    }
}

export default Content;