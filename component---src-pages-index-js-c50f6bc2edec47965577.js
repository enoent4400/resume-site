/*! For license information please see component---src-pages-index-js-c50f6bc2edec47965577.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var l=+new Date;!!t&&l<t+n?(clearTimeout(a),a=setTimeout((function(){t=l,e()}),n)):(t=l,e())}};t.default=n},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var n=a("Ijbi"),l=a("EbDI"),r=a("ZhPi"),i=a("Bnag");e.exports=function(e){return n(e)||l(e)||r(e)||i()}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("7oih");function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=a("dI71"),o=a("YIkO"),c=a.n(o),m=a("dwco"),u=a.n(m),f=function(e){return e.children},d=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(i(t)),t}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,l=n.type,r=n.element,i=n.offset,s=n.timeout;if(l&&r)switch(l){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,i,s):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return l.a.createElement(f,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component),p=a("TUGy"),h=a.n(p),v=a("obyI"),g=a.n(v),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Certifications",href:"certifications"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(i(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){var e=this.state,t=e.tabs,a=e.isCollapsed;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none"},g.a.firstName," ",g.a.lastName),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:h.a,alt:""}))),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(a?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse "+(a?"":"show"),id:"navbarSupportedContent"},l.a.createElement(c.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var a=e.href,n=e.content;return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(d,{type:"id",element:a},l.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},t}(n.Component);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(b,null),l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h1",{className:"mb-0"},g.a.firstName,l.a.createElement("span",{className:"text-primary"},g.a.lastName)),l.a.createElement("div",{className:"subheading mb-5"},g.a.address," ·"," ",l.a.createElement("a",{href:"mailto:"+g.a.email},g.a.email)),l.a.createElement("p",{className:"lead mb-5"},"Web Developer with experience working on both small freelance projects and large enterprise apps, possessing solid understanding of Web application architecture and development cycle. I consider myself platform and technology agnostic since I've dabbled with large number of technologies and frameworks used in modern Web development. I also had traumatic experiences (OSGI, AEM) ¯\\_(ツ)_/¯"),l.a.createElement("div",{className:"social-icons"},g.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return l.a.createElement("a",{key:a,href:a},l.a.createElement("i",{className:"fab "+t}))}))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Experience"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Software Engineer"),l.a.createElement("div",{className:"subheading mb-3"},"Performance Technologies"),l.a.createElement("ul",null,l.a.createElement("li",null,"Working on in-house automation solutions for advertising industry."),l.a.createElement("li",null,"Developed features and maintained several projects, with responsibilities mainly on frontend."),l.a.createElement("li",null,"Building a prototype for a complete rebuild of of an existing legacy app."),l.a.createElement("li",null,"Techonolgies: React, Typescript, Material UI"))),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"2020 - Present"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Software Developer"),l.a.createElement("div",{className:"subheading mb-3"},"Endava"),l.a.createElement("p",null,"Working on large scale Cloud automation support platform for USA based client. My core activities and duties include:",l.a.createElement("ul",null,l.a.createElement("li",null,"Creating new features functionality and capabilities on client's Cloud platform using Java (OSGi) and Javascript (React 16, Webpack 4, Babel, ES6 and Jquery)."),l.a.createElement("li",null,"Design and implementation of the new features and functionalities."),l.a.createElement("li",null,"Performing bug fixes and code reviews"),l.a.createElement("li",null,"Participated in complete React front end refactoring, transforming class based to functional components."),l.a.createElement("li",null,"Gained knowledge and proficiency in Cloud based services and APIs (AWS and Azure).")))),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"2018 - 2020"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Freelance Web Developer"),l.a.createElement("p",null,"Developed websites for clients and volunteering building demo projects and open source. Some of the key features and skills I gained in that period were:",l.a.createElement("ul",null,l.a.createElement("li",null,"Tested ready-made products"),l.a.createElement("li",null,"Corrected errors in products that did not function properly."),l.a.createElement("li",null,"Created websites for clients and friends"),l.a.createElement("li",null,"Conducted survey about the product drawbacks"),l.a.createElement("li",null,"Participated in not yet funded start up project : https://github.com/renovatebot/renovate")))),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"2017 - 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Project Assistant"),l.a.createElement("div",{className:"subheading mb-3"},"Ministry of Agriculture and Environmental Protection- Belgrade, Serbia"),l.a.createElement("p",null,"Assisted on developing, maintaining and testing INZEM - Software solution that supports the complete procedure of leasing state agricultural land. I also maintained their servers.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"2015 - 2017"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Education"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Singidunum University"),l.a.createElement("div",{className:"subheading mb-3"},"Master of Informatics"),l.a.createElement("div",null,"Contemporary Information Technologies")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Belgrade University"),l.a.createElement("div",{className:"subheading mb-3"},"Law School"),l.a.createElement("div",null,"¯\\_(ツ)_/¯")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"2008"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Skills"),l.a.createElement("div",{className:"subheading mb-3"},"Programming Languages"),l.a.createElement("ul",{className:"list-inline dev-icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-js-square"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-java"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-python"}))),l.a.createElement("div",{className:"subheading mb-3"},"Client Stack"),l.a.createElement("ul",{className:"list-inline dev-icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-react"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-css3"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-npm"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-yarn"}))),l.a.createElement("div",{className:"subheading mb-3"},"Server Stack"),l.a.createElement("ul",{className:"list-inline dev-icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-aws"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fas fa-database"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-linux"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-node"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-docker"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-git"}))),l.a.createElement("div",{className:"subheading mb-3"},"Core Competences"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Programming"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Problem Solving"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"OOP"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Web Application Development and Architecture")))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Interests"),l.a.createElement("p",null,l.a.createElement("ul",null,l.a.createElement("li",null,"AI, Singularity, Pop Science"),l.a.createElement("li",null,"Blockchain, Decentralised Governance and Trustless Systems"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"certifications"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Certifications"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"AWS Certified Developer - Associate (2020)"),l.a.createElement("a",{href:"https://www.youracclaim.com/badges/03e1f7d3-7e3c-4852-a9f6-b62040a4429b/public_url"},"Acclaim link"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"6.00.1x: Introduction to Computer Science and Programming Using Python from MITx, anonline learning initiative of the Massachusetts Institute of Technology - (MIT, 2018)"),l.a.createElement("a",{href:"https://courses.edx.org/certificates/58c30ef33108489f96011a370d40c051"},"Certificate ID"))))))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=l.apply(null,n);i&&e.push(i)}else if("object"===r)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},TUGy:function(e,t,a){e.exports=a.p+"static/avatar-1918b20797bbba149350de41e53bd78d.png"},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},YIkO:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL")),r=n(a("lSNA")),i=n(a("RIqP")),s=n(a("lwsE")),o=n(a("a1gu")),c=n(a("Nsbk")),m=n(a("PJYZ")),u=n(a("W8MJ")),f=n(a("7W2i")),d=n(a("17x9")),p=n(a("q1tI")),h=n(a("TSYQ")),v=n(a("Fxm3"));var g=function(e){function t(e){var a;return(0,s.default)(this,t),(a=(0,o.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,l=e.length;n<l;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],l=e||this.state.targetItems,r=!1,s=0,o=l.length;s<o;s++){var c=l[s],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):a.push(c);var u=s===o-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,i.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,l=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var r=e.getBoundingClientRect(),i=n?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,o=s+i,c=n?r.top+s-t.top+l:r.top+s+l,m=c+e.offsetHeight;return c<o&&m>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,i=a.className,s=a.scrolledPastClassName,o=a.style,c=0,m=p.default.Children.map(n,(function(t,a){var n;if(!t)return null;var i=t.type,o=s&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,r.default)(n,"".concat(t.props.className),t.props.className),(0,r.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(n,"".concat(e.props.scrolledPastClassName),o),n));return p.default.createElement(i,(0,l.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,r.default)({},"".concat(i),i));return p.default.createElement(t,{className:u,style:o},m)}}]),t}(p.default.Component);t.default=g},ZhPi:function(e,t,a){var n=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},a1gu:function(e,t,a){var n=a("cDf5"),l=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(o(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==o(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==o(arguments[0])){var a=f(this),n=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+r.left-n.left,a.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function o(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function d(t){var a,n,l,i,s=(r()-t.startTime)/468;i=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*i)),n=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,l),n===t.x&&l===t.y||e.requestAnimationFrame(d.bind(e,t))}function p(a,n,i){var o,c,m,u,f=r();a===t.body?(o=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=l.scroll):(o=a,c=a.scrollLeft,m=a.scrollTop,u=s),d({scrollable:o,method:u,startTime:f,startX:c,startY:m,x:n,y:i})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"ENOENT - no such file",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#0a3d62",manifestThemeColor:"#0a3d62",manifestDisplay:"standalone",manifestIcon:"src/assets/images/avatar.png",pathPrefix:"/resume-site",firstName:"Filip",lastName:"Mihalic",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/enoent4400"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/filip-mihalic/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/unforced_error"}],email:"mihalic1989@gmail.com",address:"Belgrade"}}}]);
//# sourceMappingURL=component---src-pages-index-js-c50f6bc2edec47965577.js.map