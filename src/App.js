import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));
// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// About
const About = React.lazy(() => import("./components/pages/About"));
// Portfolio
const Portfoliogrid = React.lazy(() => import("./components/pages/Portfoliogrid"));
const Portfoliogridleft = React.lazy(() => import("./components/pages/Portfoliogridleft"));
const Portfoliogridright = React.lazy(() => import("./components/pages/Portfoliogridright"));
const Portfoliodetails = React.lazy(() => import("./components/pages/Portfoliodetails"));
const Portfoliodetailsleft = React.lazy(() => import("./components/pages/Portfoliodetailsleft"));
const Portfoliodetailsright = React.lazy(() => import("./components/pages/Portfoliodetailsright"));
// Blog
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Blogleft = React.lazy(() => import("./components/pages/Blogleft"));
const Blogright = React.lazy(() => import("./components/pages/Blogright"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Blogdetailsleft = React.lazy(() => import("./components/pages/Blogdetailsleft"));
const Blogdetailsright = React.lazy(() => import("./components/pages/Blogdetailsright"));
// Shop
const Shop = React.lazy(() => import("./components/pages/Shop"));
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopright = React.lazy(() => import("./components/pages/Shopright"));
const Shopdetails = React.lazy(() => import("./components/pages/Shopdetails"));
// Pages
const Errorpage = React.lazy(() => import("./components/pages/Errorpage"));
const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
const Faqs = React.lazy(() => import("./components/pages/Faqs"));
const Gallery = React.lazy(() => import("./components/pages/Gallery"));
// Contact
const Contact = React.lazy(() => import("./components/pages/Contact"));
// Services
const Services = React.lazy(() => import("./components/pages/Services"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          {/* <Preloader /> */}
          <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home-v2" component={Hometwo} />
            {/* About */}
            <Route exact path="/about" component={About} />
            {/* Portfolio */}
            <Route exact path="/portfolio/cat/:catId" component={props => (<Portfoliogrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/portfolio/tag/:tagId" component={props => (<Portfoliogrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/portfolio-grid" component={Portfoliogrid} />
            <Route exact path="/portfolio-grid-left" component={Portfoliogridleft} />
            <Route exact path="/portfolio-grid-right" component={Portfoliogridright} />
            <Route exact path="/portfolio-details/:id" component={props => (<Portfoliodetails {...props} key={window.location.pathname} />)} />
            <Route exact path="/portfolio-details-left/:id" component={props => (<Portfoliodetailsleft {...props} key={window.location.pathname} />)} />
            <Route exact path="/portfolio-details-right/:id" component={props => (<Portfoliodetailsright {...props} key={window.location.pathname} />)} />
            {/* Blog */}
            <Route exact path="/blog/search/:query" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/cat/:catId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/tag/:tagId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/author/:authorId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog-left" component={Blogleft} />
            <Route exact path="/blog-right" component={Blogright} />
            <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-details-left/:id" component={props => (<Blogdetailsleft {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-details-right/:id" component={props => (<Blogdetailsright {...props} key={window.location.pathname} />)} />
            {/* Shop */}
            <Route exact path="/shop/search/:query" component={props => (<Shop {...props} key={window.location.pathname} />)} />
            <Route exact path="/shop/cat/:catId" component={props => (<Shop {...props} key={window.location.pathname} />)} />
            <Route exact path="/shop/tag/:tagId" component={props => (<Shop {...props} key={window.location.pathname} />)} />
            <Route exact path="/shop/:minPrice/:maxPrice" component={props => (<Shop {...props} key={window.location.pathname} />)} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop-left" component={Shopleft} />
            <Route exact path="/shop-right" component={Shopright} />
            <Route exact path="/shop-details/:id" component={props => (<Shopdetails {...props} key={window.location.pathname} />)} />
            {/* Pages */}
            <Route exact path="/error-page" component={Errorpage} />
            <Route exact path="/coming-soon" component={Comingsoon} />
            <Route exact path="/faqs/search/:query" component={props => (<Faqs {...props} key={window.location.pathname} />)} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/gallery" component={Gallery} />
            {/* Contact */}
            <Route exact path="/contact" component={Contact} />
            {/* Services */}
            <Route exact path="/service/cat/:catId" component={props => (<Services {...props} key={window.location.pathname} />)} />
            <Route exact path="/service/tag/:tagId" component={props => (<Services {...props} key={window.location.pathname} />)} />
            <Route exact path="/service" component={Services} />
            <Route exact path="/service-details/:id" component={props => (<Servicedetails {...props} key={window.location.pathname} />)} />
            <Route exact component={Errorpage} />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
