(this["webpackJsonpindependent-study"]=this["webpackJsonpindependent-study"]||[]).push([[2],{19:function(e,t,n){e.exports=n.p+"static/media/preloader4.eaa1452f.png"},20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),c=n.n(r),u=(n(25),n(2)),o=n(3),i=n(6),s=n(4),m=(n(26),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,"Loading..."))}}]),n}(a.Component)),b=n(7),E={height:"100%",color:"white"},d={color:"#F76902"},f={paddingTop:"20%"};function p(){var e=Object(b.a)("http://www.ist.rit.edu/api/about/"),t=e.loading,a=e.error,r=e.data;return t?l.a.createElement("div",{style:E},l.a.createElement("img",{src:n(19),alt:"preloader"})):a?l.a.createElement("div",{style:E},l.a.createElement("div",null,"Error...")):l.a.createElement("div",{style:E},l.a.createElement("h1",{style:f,className:"display-3 w-50 mx-auto"},l.a.createElement("span",{style:d},"Information")," Sciences & Technologies at RIT"),l.a.createElement("div",{className:"bg-light text-dark w-75 mx-auto mt-1"},l.a.createElement("h4",{className:"pt-2"},r.title),l.a.createElement("p",null,r.description),l.a.createElement("blockquote",{className:"blockquote"},'"',r.quote,'"'),l.a.createElement("p",null,"- ",r.quoteAuthor)))}var h=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(5),n.e(11)]).then(n.bind(null,159))})),j=Object(a.lazy)((function(){return n.e(17).then(n.bind(null,160))})),O=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,161))})),y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,162))})),k=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,163))})),v=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,164))})),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,165))})),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,166))})),w=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,167))})),z=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,168))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,169))})),x=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,170))})),N=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(h,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(j,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(O,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(y,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(k,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(v,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(S,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(g,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(w,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(z,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(P,null)),l.a.createElement(a.Suspense,{fallback:l.a.createElement(m,null)},l.a.createElement(x,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(44);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(5),l=n(0),r=n(18),c=n.n(r);function u(e){var t=Object(l.useState)(!0),n=Object(a.a)(t,2),r=n[0],u=n[1],o=Object(l.useState)(!1),i=Object(a.a)(o,2),s=i[0],m=i[1],b=Object(l.useState)({data:[]}),E=Object(a.a)(b,2),d=E[0],f=E[1];return Object(l.useEffect)((function(t){u(!0),m(!1),c()({method:"GET",url:t,params:{path:e}}).then((function(e){f(e.data),u(!1)})).catch((function(e){m(!0)}))}),[e]),{loading:r,error:s,data:d}}}},[[20,3,4]]]);
//# sourceMappingURL=main.3ecbcd88.chunk.js.map