(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,a,t){e.exports=t(66)},30:function(e,a,t){},31:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(20),c=t.n(l),r=(t(30),t(2)),i=t(16),m=t(24),o=t(10),u=t(11),g=t(13),p=t(12),d=(t(31),Object(r.f)((function(e){var a=e.title,t=e.imageUrl,n=e.size,l=e.history,c=e.linkUrl,r=e.match;return s.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return l.push("".concat(r.url).concat(c))}},s.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(t,")")}}),s.a.createElement("div",{className:"content"},s.a.createElement("h1",{className:"title"},a.toUpperCase()),s.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),v=(t(40),["id"]),h=function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"garments"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"garments"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"garments"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"garments"}]},e}return Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var a=e.id,t=Object(m.a)(e,v);return s.a.createElement(d,Object.assign({key:a},t))})))}}]),t}(s.a.Component),N=(t(41),function(){return s.a.createElement("div",{className:"homepage"},s.a.createElement("h3",{className:"brand-logoo"},"InteliStyle",s.a.createElement("p",{className:"subtitlee"},"Lead tech-co in Fastion Industery")),s.a.createElement(h,null))}),b=t(8),E=t.n(b),j=t(14),M=t(9),w=t(22),f=t.n(w),y=t(23),k=t.n(y),C=(t(61),function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader-contaier"},s.a.createElement(k.a,{type:"ThreeDots",color:"lightsteelblue",height:200,width:200,timeout:15e3}),s.a.createElement("p",{style:{padding:"60px",fontSize:"20px"}},"Loading..."))}}]),t}(s.a.Component)),L=[{name:"Mens Hats",value:"mens-hats"},{name:"Mens pants",value:"mens-pants"},{name:"Mens jewelry",value:"mens-jewelry"},{name:"Mens slip-ons-shoes",value:"mens-slip-ons-shoes"},{name:"Mens denim-jackets",value:"mens-denim-jackets"},{name:"Mens straight-leg-jeans",value:"mens-straight-leg-jeans"},{name:"Mens jeans",value:"mens-jeans"},{name:"Mens gloves",value:"mens-gloves"},{name:"Mens boots",value:"mens-boots"},{name:"Mens shorts",value:"mens-shorts"},{name:"Men tees-and-tshirts",value:"mens-tees-and-tshirts"},{name:"Men shortsleeve-shirts",value:"mens-shortsleeve-shirts"},{name:"Men cardigan-sweaters",value:"mens-cardigan-sweaters"},{name:"Mens sweaters",value:"mens-sweaters"},{name:"Mens sweatshirts",value:"mens-sweatshirts"},{name:"Mens outerwear",value:"mens-outerwear"},{name:"Mens underwear-and-socks",value:"mens-underwear-and-socks"},{name:"Mens chinos-and-khakis",value:"mens-chinos-and-khakis"},{name:"Mens accessories",value:"mens-accessories"},{name:"Mens jackets",value:"mens-jackets"},{name:"Mens athletic-shorts",value:"mens-athletic-shorts"},{name:"Mens longsleeve-shirts",value:"mens-longsleeve-shirts"},{name:"Mens slim-jeans",value:"mens-slim-jeans"},{name:"Mens polo-shirts",value:"mens-polo-shirts"},{name:"Mens socks",value:"mens-socks"},{name:"Mens sunglasses",value:"mens-sunglasses"},{name:"Mens wool-coats",value:"mens-wool-coats"}],x=(t(62),t(63),function(){var e=Object(n.useState)(""),a=Object(M.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),r=Object(M.a)(c,2),i=r[0],m=r[1],o=Object(n.useState)(""),u=Object(M.a)(o,2),g=u[0],p=u[1],d=Object(n.useState)(!1),v=Object(M.a)(d,2),h=v[0],N=v[1],b=Object(n.useState)(!1),w=Object(M.a)(b,2),y=w[0],k=w[1],x=Object(n.useState)(0),I=Object(M.a)(x,2),O=I[0],P=I[1];Object(n.useEffect)((function(){(function(){var e=Object(j.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g?"http://localhost:5000/api/v1/garments/".concat(g,"?page=1&limit=").concat(16):"http://localhost:5000/api/v1/garments?page=1&limit=".concat(16));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,P(Math.ceil(t.total/16)),!0===t.err?(m(t.garments),k(!0)):(N(!0),m(t.garments));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[16,g]);var z=function(){var e=Object(j.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g?"http://localhost:5000/api/v1/garments/".concat(g,"?page=").concat(a,"&limit=").concat(16):"http://localhost:5000/api/v1/garments?page=".concat(a,"&limit=").concat(16));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,m(n.garments),e.abrupt("return",n.garments);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.selected+1,e.next=3,z(t);case 3:n=e.sent,m(n),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"container"},s.a.createElement("h3",{className:"brand-logo"},"InteliStyle",s.a.createElement("p",{className:"subtitle"},"Lead tech-co in Fastion Industery"),s.a.createElement("p",{className:"banner"},"See all the Collections and a like-recomendation for your outfit and body shape")),s.a.createElement("select",{className:"dropdown",onChange:function(e){return p(e.target.value)}},s.a.createElement("option",{value:""},"Select Category"),L.map((function(e){return s.a.createElement("option",{key:e.value,className:"dropdown-item",value:e.value},e.name)}))),s.a.createElement("div",{className:"wrapper"},s.a.createElement("img",{className:"search-icon",src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",alt:"search-icon"}),s.a.createElement("input",{className:"search",type:"text",placeholder:"Search",onChange:function(e){l(e.target.value)}})),s.a.createElement("div",{className:"preview"},h?i.filter((function(e){return""===t||e.product_title.toLowerCase().includes(t.toLowerCase())?e:void 0})).map((function(e){return s.a.createElement("div",{key:e._id,className:"collection-item"},s.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(e.image_urls[0],")")}}),s.a.createElement("div",{className:"collection-footer"},s.a.createElement("span",{className:"name"},e.product_title),s.a.createElement("span",{className:"price"},"$ ",e.price)))})):s.a.createElement(s.a.Fragment,null,s.a.createElement(C,null),y&&s.a.createElement("p",null,"We are working on your request \u2728"))),s.a.createElement(f.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",pageCount:O,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:D,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"}))}),I=(t(64),function(){return s.a.createElement("nav",{className:"navbar fixed-top  navbar-expand-lg navbar  navbar-dark bg-dark"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("a",{className:"navbar-brand",href:"/"},"Home"),s.a.createElement("ul",{className:"list navbar-nav me-auto mb-2 mb-lg-0"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/garments"},"Collections")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"http://www.intelistyle.com/",target:"_blank",rel:"noopener noreferrer"},"InteliStyle Official"))),s.a.createElement("ul",{className:"sign-in navbar-nav me-auto mb-2 mb-lg-0"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/garments"},"Sign In")))))}),O=(t(65),function(){return s.a.createElement("div",{className:"d-flex flex-column h-100"},s.a.createElement("footer",{className:" any w-100 py-4 flex-shrink-0"},s.a.createElement("div",{className:"container py-4"},s.a.createElement("div",{className:"row gy-4 gx-5"},s.a.createElement("div",{className:"col-lg-4 col-md-6"},s.a.createElement("h5",{className:"h1 text-white"},"Intelistyle."),s.a.createElement("p",{className:"small text-muted"},"Personalize customer experience with the leading A.I. styling platform."),s.a.createElement("p",{className:"small text-muted mb-0"},"\xa9 Copyrights. All rights reserved.",s.a.createElement("a",{className:"text-primary",href:"http://www.intelistyle.com/",target:"_blank",rel:"noopener noreferrer"},"www.intelistyle.com"))),s.a.createElement("div",{className:"col-lg-2 col-md-6"},s.a.createElement("h5",{className:"text-white mb-3"},"Quick links"),s.a.createElement("ul",{className:"list-unstyled text-muted"},s.a.createElement("li",null,s.a.createElement("a",{href:"/"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{href:"/garments"},"Collections")),s.a.createElement("li",null,s.a.createElement("a",{href:"/"},"Get started")),s.a.createElement("li",null,s.a.createElement("a",{href:"/"},"FAQ")))),s.a.createElement("div",{className:"col-lg-4 col-md-6"},s.a.createElement("h5",{className:"text-white mb-3"},"Newsletter"),s.a.createElement("p",{className:"small text-muted"},"Increase retention and repeat purchases by suggesting outfits and clothes that complement past purchases."),s.a.createElement("form",{action:"/"},s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{className:"form-control",type:"text",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),s.a.createElement("button",{className:"btn btn-primary",id:"button-addon2",type:"button"},">"))))))))}),P=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(I,null),s.a.createElement(i.a,null,s.a.createElement(r.c,null,s.a.createElement(r.a,{exact:!0,path:"/",component:N}),s.a.createElement(r.a,{exact:!0,path:"/garments",component:x}))),s.a.createElement(O,null))},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),l(e),c(e)}))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(P,null)),document.getElementById("root")),z()}},[[25,1,2]]]);
//# sourceMappingURL=main.40693ce2.chunk.js.map