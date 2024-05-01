import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHelper from '../../helper/NavHelper';
import navigation from '../../data/navigation.json';

class Header extends NavHelper {
    render() {
        const stickyHeader = this.state.stickyHeader ? ' sticky' : '';
        return (
            <Fragment>
                {/* topbar */}
                <div className="topbar bg-custom-black">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="left-side ">
                                    <ul className="custom">
                                        <li>
                                            <a rel={"external"} href={"tel:(770) 330-2780"} className="text-custom-white"><i className="fas fa-phone-alt text-custom-blue" /> (770) 330-2780</a>
                                        </li>
                                        <li>
                                            <a rel={"external"} href={"mailto:info@transafricaconsortium.org"} className="text-custom-white"><i className="fas fa-envelope text-custom-blue" /> info@transafricaconsortium.org</a>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="text-custom-white"><i className="fas fa-map-marker-alt text-custom-blue" /> 1726 Montreal Circle, Suite 210, Tucker, Georgia 30084</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="right-side">
                                    <ul className="custom">
                                        <li className="language">

                                        </li>
                                        <li>
                                            <Link to="#" className="text-custom-white"><i className="fab fa-facebook-f" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-custom-white"><i className="fab fa-twitter" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-custom-white"><i className="fab fa-instagram" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-custom-white"><i className="fab fa-pinterest-p" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* topbar */}
                <header className={"menu-style" + stickyHeader}>
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/slogo.png"} className="img-fluid image-fit" alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="right-side">
                                        <div className={this.state.navMethod === true ? 'navigation active' : 'navigation'}>
                                            <div className="logo">
                                                <Link to="/">
                                                    <img src={process.env.PUBLIC_URL + "/assets/images/logs.png"} className="img-fluid image-fit" alt="logo" />
                                                </Link>
                                            </div>
                                            <nav>
                                                <ul className="custom main-menu">
                                                    {/* Data */}
                                                    {navigation.length > 0 ? navigation.map((item, i) => (
                                                        <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                            {item.child ? <Link className="text-theme fs-14" onClick={e => e.preventDefault()} to="/"> {item.linkText} <span className="arrow" /></Link> : <Link to={item.link} className="text-theme fs-14"> {item.linkText} </Link>}
                                                            {item.child ?
                                                                <ul className="custom sub-menu" role="menu">
                                                                    {item.submenu.map((sub_item, i) => (
                                                                        <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                            {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/" className="text-theme"> {sub_item.linkText} <span className="arrow" /></Link> : <Link to={sub_item.link} className="text-theme"> {sub_item.linkText} </Link>}
                                                                            {sub_item.submenu ?
                                                                                <ul className="custom sub-menu">
                                                                                    {sub_item.submenu.map((third_item, i) => (
                                                                                        <li className="menu-item" key={i}><Link
                                                                                            to={third_item.link} className="text-theme">{third_item.linkText}</Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul> : null}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                : null
                                                            }
                                                        </li>
                                                    )) : null}
                                                    {/* Data */}
                                                </ul>
                                            </nav>
                                            <div className="social-media">
                                                <ul className="custom">
                                                    <li>
                                                        <Link to="#" className="text-custom-white"><i className="fab fa-facebook-f" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="text-custom-white"><i className="fab fa-twitter" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="text-custom-white"><i className="fab fa-instagram" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="text-custom-white"><i className="fab fa-pinterest-p" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hamburger-menu">
                                            <div className={this.state.navMethod === true ? 'menu-btn active' : 'menu-btn'} onClick={this.toggleNav}>
                                                <span />
                                                <span />
                                                <span />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-side-2">
                                        <div className="cta-btn">
                                            <div className="cta-text">
                                                <Link to="#" className="addlisting-btn btn-first btn-border">   Donate   </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        );
    }
}

export default Header;