import portfolio from '../data/portfolio/portfolio.json';
import category from '../data/portfolio/category.json';
import authors from '../data/team.json';
// Portfolio details
function getPortfolio(id) {
    return portfolio.filter(post => { return post.id === parseInt(id) })[0];
}
// Categories
function getCategories(items) {
    var elems = category.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
// Engineer
function getEngineer(items) {
    var elems = authors.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Builder
function getBuilder(items) {
    var elems = authors.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Related post
function getPostByCategory(items, pageRoute) {
    var elems = portfolio.filter((post) => { return parseInt(post.id) !== parseInt(pageRoute) && post.category.some(r => items.includes(r)) });
    return elems;
}
// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
function setDemoDate() {
    var today = new Date();
    portfolio.slice(0, 4).map(post => {
        post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        post.postdate = `${today.getDate() - 2} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return post;
    });
}
function getRecentPost() {
    var elems = portfolio.filter(post => {
        return post.timestamp < new Date(post.postdate);
    });
    return elems;
}
setDemoDate();
// Filter 
function getFilteredPosts(posts, filter = { cat: '', tag: '' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
        })
    }
    // Tag filter
    if (tagFilter) {
        posts = posts.filter(post => {
            return (post.tags !== undefined && post.tags !== null) && post.tags.includes(parseInt(filter.tag))
        })
    }
    return posts;
}
export { getPortfolio, getBuilder, getRecentPost, getPostByCategory, getFilteredPosts, getEngineer, getCategories };