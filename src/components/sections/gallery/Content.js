import React, { Component } from 'react';
import gallery from "../../../data/gallery.json";
import Masonry from "react-masonry-component";

class Content extends Component {
    render() {
        return (
            <div className="section-padding gallery">
                <div className="container">
                    <Masonry className="row grid magnific-gallery">
                        {/* Data */}
                        {gallery.map((item, i) => (
                            <div className="grid-item mb-xl-30 col-lg-4 col-sm-6" id={'masonry-item-' + i} key={i}>
                                <a rel={"external"} href={item.image} className="gallery-thumb">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} className="img-fluid full-width" alt="gallery" />
                                </a>
                            </div>
                        ))}
                        {/* Data */}
                    </Masonry>
                </div>
            </div>
        );
    }
}

export default Content;