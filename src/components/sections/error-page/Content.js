import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div id="page-404">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="404-img">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/404-img.png"} alt="img" />
                                </div>
                                <div className="caption">
                                    <h5 className="text-custom-white full-width">Opps! Page Not Found.
                                        <Link to="/" className="text-custom-white">Try Again</Link>
                                    </h5>
                                    <Link to="/" className="btn-first btn-border mt-4 text-custom-white">Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;