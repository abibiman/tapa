/*! For license information please see 26.21dd0c60.chunk.js.LICENSE.txt */
(this.webpackJsonpcali=this.webpackJsonpcali||[]).push([[26],{130:function(e){e.exports=JSON.parse('[{"id":1,"title":"Personalized Service.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":2,"title":"24/7 support.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":3,"title":"Financing made easy.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":4,"title":"Trusted by thousands.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":5,"title":"Best Price Ever","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":6,"title":"Personalized Service.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":7,"title":"24/7 support.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":8,"title":"Financing made easy.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":9,"title":"Trusted by thousands.","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."},{"id":10,"title":"Best Price Ever","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text."}]')},188:function(e,t,a){"use strict";var n=a(4),r=a(8),s=a(43),i=a.n(s),c=a(0),o=a.n(c),l=a(51),d=a(87),u=["bsPrefix","variant","size","active","className","block","type","as"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.variant,c=e.size,m=e.active,p=e.className,b=e.block,f=e.type,h=e.as,j=Object(r.a)(e,u),y=Object(l.a)(a,"btn"),v=i()(p,y,m&&"active",s&&y+"-"+s,b&&y+"-block",c&&y+"-"+c);if(j.href)return o.a.createElement(d.a,Object(n.a)({},j,{as:h,ref:t,className:i()(v,j.disabled&&"disabled")}));t&&(j.ref=t),f?j.type=f:h||(j.type="button");var x=h||"button";return o.a.createElement(x,Object(n.a)({},j,{className:v}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=m},328:function(e,t,a){"use strict";var n=a(4),r=a(8),s=a(43),i=a.n(s),c=a(0),o=a.n(c),l=a(78),d=a(51),u=a(56),m=o.a.createContext(null);m.displayName="AccordionContext";var p=m,b=["as","children","eventKey","onClick"];var f,h=o.a.forwardRef((function(e,t){var a=e.as,s=void 0===a?"button":a,i=e.children,l=e.eventKey,d=e.onClick,m=Object(r.a)(e,b),f=function(e,t){var a=Object(c.useContext)(p),n=Object(c.useContext)(u.a);return function(r){n&&n(e===a?null:e,r),t&&t(r)}}(l,d);return"button"===s&&(m.type="button"),o.a.createElement(s,Object(n.a)({ref:t,onClick:f},m),i)})),j=a(128),y=a(98),v=a(99),x=a(79),O=a(92),g=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],N={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function C(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=N[e];return a+parseInt(Object(j.a)(t,n[0]),10)+parseInt(Object(j.a)(t,n[1]),10)}var w=((f={})[y.c]="collapse",f[y.d]="collapsing",f[y.b]="collapsing",f[y.a]="collapse show",f),E={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:C},P=o.a.forwardRef((function(e,t){var a=e.onEnter,s=e.onEntering,l=e.onEntered,d=e.onExit,u=e.onExiting,m=e.className,p=e.children,b=e.dimension,f=void 0===b?"height":b,h=e.getDimensionValue,j=void 0===h?C:h,N=Object(r.a)(e,g),E="function"===typeof f?f():f,P=Object(c.useMemo)((function(){return Object(x.a)((function(e){e.style[E]="0"}),a)}),[E,a]),I=Object(c.useMemo)((function(){return Object(x.a)((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),s)}),[E,s]),L=Object(c.useMemo)((function(){return Object(x.a)((function(e){e.style[E]=null}),l)}),[E,l]),k=Object(c.useMemo)((function(){return Object(x.a)((function(e){e.style[E]=j(E,e)+"px",Object(O.a)(e)}),d)}),[d,j,E]),S=Object(c.useMemo)((function(){return Object(x.a)((function(e){e.style[E]=null}),u)}),[E,u]);return o.a.createElement(y.e,Object(n.a)({ref:t,addEndListener:v.a},N,{"aria-expanded":N.role?N.in:null,onEnter:P,onEntering:I,onEntered:L,onExit:k,onExiting:S}),(function(e,t){return o.a.cloneElement(p,Object(n.a)({},t,{className:i()(m,p.props.className,w[e],"width"===E&&"width")}))}))}));P.defaultProps=E;var I=P,L=["children","eventKey"],k=o.a.forwardRef((function(e,t){var a=e.children,s=e.eventKey,i=Object(r.a)(e,L),l=Object(c.useContext)(p);return o.a.createElement(u.a.Provider,{value:null},o.a.createElement(I,Object(n.a)({ref:t,in:l===s},i),o.a.createElement("div",null,o.a.Children.only(a))))}));k.displayName="AccordionCollapse";var S=k,K=["as","activeKey","bsPrefix","children","className","onSelect"],T=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),s=a.as,c=void 0===s?"div":s,m=a.activeKey,b=a.bsPrefix,f=a.children,h=a.className,j=a.onSelect,y=Object(r.a)(a,K),v=i()(h,Object(d.a)(b,"accordion"));return o.a.createElement(p.Provider,{value:m||null},o.a.createElement(u.a.Provider,{value:j||null},o.a.createElement(c,Object(n.a)({ref:t},y,{className:v}),f)))}));T.displayName="Accordion",T.Toggle=h,T.Collapse=S;t.a=T},329:function(e,t,a){"use strict";var n=a(4),r=a(8),s=a(43),i=a.n(s),c=a(0),o=a.n(c),l=a(51),d=/-(.)/g;var u=["className","bsPrefix","as"],m=function(e){return e[0].toUpperCase()+(t=e,t.replace(d,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e,t){var a=void 0===t?{}:t,s=a.displayName,c=void 0===s?m(e):s,d=a.Component,p=a.defaultProps,b=o.a.forwardRef((function(t,a){var s=t.className,c=t.bsPrefix,m=t.as,p=void 0===m?d||"div":m,b=Object(r.a)(t,u),f=Object(l.a)(c,e);return o.a.createElement(p,Object(n.a)({ref:a,className:i()(s,f)},b))}));return b.defaultProps=p,b.displayName=c,b}var b=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(n.a)({},t,{ref:a,className:i()(t.className,e)}))}))},f=a(86),h=["bsPrefix","className","variant","as"],j=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,c=e.variant,d=e.as,u=void 0===d?"img":d,m=Object(r.a)(e,h),p=Object(l.a)(a,"card-img");return o.a.createElement(u,Object(n.a)({ref:t,className:i()(c?p+"-"+c:p,s)},m))}));j.displayName="CardImg",j.defaultProps={variant:null};var y=j,v=["bsPrefix","className","bg","text","border","body","children","as"],x=b("h5"),O=b("h6"),g=p("card-body"),N=p("card-title",{Component:x}),C=p("card-subtitle",{Component:O}),w=p("card-link",{Component:"a"}),E=p("card-text",{Component:"p"}),P=p("card-header"),I=p("card-footer"),L=p("card-img-overlay"),k=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,d=e.bg,u=e.text,m=e.border,p=e.body,b=e.children,h=e.as,j=void 0===h?"div":h,y=Object(r.a)(e,v),x=Object(l.a)(a,"card"),O=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(f.a.Provider,{value:O},o.a.createElement(j,Object(n.a)({ref:t},y,{className:i()(s,x,d&&"bg-"+d,u&&"text-"+u,m&&"border-"+m)}),p?o.a.createElement(g,null,b):b))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=y,k.Title=N,k.Subtitle=C,k.Body=g,k.Link=w,k.Text=E,k.Header=P,k.Footer=I,k.ImgOverlay=L;t.a=k},358:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(40),s=a(42),i=a(41),c=a(0),o=a(52),l=a.n(o),d=a(48),u=a(53),m=a(50),p=a(49),b=a(3),f=a(130),h=a(328),j=a(329),y=a(188),v=a(1);var x=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={data:r.getPosts(),searchText:""},r}return Object(r.a)(a,[{key:"onChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.searchText&&this.props.history.push("/faqs/search/"+this.state.searchText)}},{key:"getPosts",value:function(){var e=this.props.query?this.props.query:"";return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{searchQuery:""};return void 0!==t.searchQuery&&null!==t.searchQuery&&""!==t.searchQuery&&(e=e.filter((function(e){return void 0!==e.title&&null!==e.title&&e.title.toLowerCase().includes(t.searchQuery.toLowerCase())}))),e}(f,{searchQuery:e})}},{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){return Object(v.jsx)("section",{className:"section-padding",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"section-header",children:[Object(v.jsxs)("div",{className:"section-heading",children:[Object(v.jsx)("h5",{className:"text-custom-blue",children:"How can we"}),Object(v.jsx)("h3",{className:"text-theme fw-700",children:"help you?"})]}),Object(v.jsx)("div",{className:"section-description",children:Object(v.jsx)("form",{onSubmit:this.handleSubmit.bind(this),method:"Get",children:Object(v.jsxs)("div",{className:"input-group",children:[Object(v.jsx)("input",{type:"search",className:"form-control form-control-custom",placeholder:"Describe your issue",name:"searchText",value:this.state.searchText,onChange:this.onChange.bind(this),required:!0}),Object(v.jsx)("div",{className:"input-group-append",children:Object(v.jsx)("button",{className:"btn-first btn-submit",type:"submit",children:"Search"})})]})})})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-lg-6",children:Object(v.jsx)("div",{className:"faq-box mb-md-40",children:Object(v.jsxs)("div",{className:"faq-wrapper",children:[Object(v.jsxs)("div",{className:"title-img mb-xl-20 animate-img",children:[Object(v.jsx)("img",{src:"/templatemonster/react/cali/assets/images/faq-img-01.jpg",className:"img-fluid image-fit",alt:"img"}),Object(v.jsx)("div",{className:"overlay overlay-bg"}),Object(v.jsx)("div",{className:"transform-center text-center",children:Object(v.jsxs)("h4",{className:"text-custom-white fw-700 no-margin",children:["Knowledge ",Object(v.jsx)("span",{className:"fw-400",children:"Base"})]})})]}),Object(v.jsx)(h.a,{defaultActiveKey:1,className:"custom-accordion",children:this.state.data.slice(0,5).map((function(e,t){return Object(v.jsxs)(j.a,{children:[Object(v.jsx)(h.a.Collapse,{eventKey:1+t,className:"collapseparent",children:Object(v.jsx)(j.a.Body,{children:Object(v.jsx)("p",{className:"text-theme no-margin",children:e.text})})}),Object(v.jsx)(j.a.Header,{children:Object(v.jsx)(h.a.Toggle,{as:y.a,variant:"link",eventKey:1+t,children:e.title})})]},t)}))})]})})}),Object(v.jsx)("div",{className:"col-lg-6",children:Object(v.jsx)("div",{className:"faq-box",children:Object(v.jsxs)("div",{className:"faq-wrapper",children:[Object(v.jsxs)("div",{className:"title-img mb-xl-20 animate-img",children:[Object(v.jsx)("img",{src:"/templatemonster/react/cali/assets/images/faq-img-02.jpg",className:"img-fluid image-fit",alt:"img"}),Object(v.jsx)("div",{className:"overlay overlay-bg"}),Object(v.jsx)("div",{className:"transform-center text-center",children:Object(v.jsxs)("h4",{className:"text-custom-white fw-700 no-margin",children:["About ",Object(v.jsx)("span",{className:"fw-400",children:"Our Services"})]})})]}),Object(v.jsx)(h.a,{defaultActiveKey:1,className:"custom-accordion",children:this.state.data.slice(5,10).map((function(e,t){return Object(v.jsxs)(j.a,{children:[Object(v.jsx)(h.a.Collapse,{eventKey:1+t,className:"collapseparent",children:Object(v.jsx)(j.a.Body,{children:Object(v.jsx)("p",{className:"text-theme no-margin",children:e.text})})}),Object(v.jsx)(j.a.Header,{children:Object(v.jsx)(h.a.Toggle,{as:y.a,variant:"link",eventKey:1+t,children:e.title})})]},t)}))})]})})})]})]})})}}]),a}(c.Component),O=Object(b.f)(x),g="FAQ's",N=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(c.Fragment,{children:[Object(v.jsxs)(l.a,{children:[Object(v.jsxs)("title",{children:["Cali - Constructions & Shop - React Template | ",g]}),Object(v.jsx)("meta",{name:"description",content:"#"})]}),Object(v.jsx)(d.a,{}),Object(v.jsx)(u.a,{breadcrumb:{pagename:g}}),Object(v.jsx)(O,{query:this.props.match.params.query}),Object(v.jsx)(m.a,{}),Object(v.jsx)(p.a,{})]})}}]),a}(c.Component);t.default=N},43:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},56:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n).a.createContext(null),s=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=r},79:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)}},86:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="CardContext",t.a=r},87:function(e,t,a){"use strict";var n=a(4),r=a(8),s=a(0),i=a.n(s),c=a(79),o=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var d=i.a.forwardRef((function(e,t){var a=e.as,s=void 0===a?"a":a,d=e.disabled,u=e.onKeyDown,m=Object(r.a)(e,o),p=function(e){var t=m.href,a=m.onClick;(d||l(t))&&e.preventDefault(),d?e.stopPropagation():a&&a(e)};return l(m.href)&&(m.role=m.role||"button",m.href=m.href||"#"),d&&(m.tabIndex=-1,m["aria-disabled"]=!0),i.a.createElement(s,Object(n.a)({ref:t},m,{onClick:p,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),u)}))}));d.displayName="SafeAnchor",t.a=d}}]);
//# sourceMappingURL=26.21dd0c60.chunk.js.map