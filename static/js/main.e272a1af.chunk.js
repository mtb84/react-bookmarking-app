(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),u=n.n(r),c=(n(14),n(2)),o=n(1);function i(e){var t=e.addBookmark,n=Object(a.useState)(""),r=Object(o.a)(n,2),u=r[0],c=r[1],i=Object(a.useState)(""),m=Object(o.a)(i,2),b=m[0],g=m[1],s=Object(a.useState)(""),p=Object(o.a)(s,2),f=p[0],d=p[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({url:u,title:b,tag:f}),c(""),g(""),d("")}},l.a.createElement("label",null,"Website URL"),l.a.createElement("input",{type:"url",value:u,placeholder:"Website URL",onChange:function(e){return c(e.target.value)}}),l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",value:b,placeholder:"Title",onChange:function(e){return g(e.target.value)}}),l.a.createElement("label",null,"Tag"),l.a.createElement("input",{type:"text",value:f,placeholder:"Tag",onChange:function(e){return d(e.target.value)}}),l.a.createElement("button",{class:"add-bookmark",type:"submit"},"Add bookmark"),l.a.createElement("br",null),l.a.createElement("div",null))}n(16);var m=[{url:"http://google.com",title:"Google",tag:"Search Tags"},{url:"http://github.com",title:"GitHub",tag:"Post Tags"}];function b(){var e=Object(a.useState)(m),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(null),b=Object(o.a)(u,2),g=b[0],s=b[1],p=Object(c.a)(new Set(n.map(function(e){return e.tag}))).map(function(e){return l.a.createElement("button",{key:e,type:"button",value:e,onClick:function(){return s(e)}},e)}),f=n.filter(function(e){return g?e.tag===g:e}).map(function(e,t){return l.a.createElement("div",{key:t,className:"url-list-container"},l.a.createElement("p",null,e.title),l.a.createElement("a",{href:e.url},e.url))});return l.a.createElement("div",{class:"container"},l.a.createElement("div",null,l.a.createElement(i,{addBookmark:function(e){r([].concat(Object(c.a)(n),[e]))}}),l.a.createElement("button",{type:"button",value:"All",onClick:function(){return s(null)}},"All Tags"),p),l.a.createElement("div",null,f))}var g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,19)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),a(e),l(e),r(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),g()},5:function(e,t,n){e.exports=n(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.e272a1af.chunk.js.map