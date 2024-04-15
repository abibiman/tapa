import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="subheader section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-wrapper">
                                <div className="page-title">
                                    <h1 className="text-theme fw-500">{this.props.breadcrumb.pagename}</h1>
                                </div>
                                <ul className="custom breadcrumb">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="active">
                                        {this.props.breadcrumb.pagename}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;