import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Load
            loading: true
        };
    }
    // Window Load
    PreloaderLoad = e => {
        this.setState({ loading: this.state.loading });
    };
    render() {
        const preloaderload = this.state.loading ? ' d-none' : '';
        return (
            <div className={"preloader" + preloaderload}>
                <img src={process.env.PUBLIC_URL + "/assets/images/pre-loader-1.svg"} alt="img" />
            </div>
        );
    }
}

export default Preloader;