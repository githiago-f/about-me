(this["webpackJsonpreact-ts-template"]=this["webpackJsonpreact-ts-template"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(6),i=n.n(s),l=n(0),o=function(e){return Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{className:"w-full sm:w-11/12 md:w-5/6 mx-auto px-3",children:e.children})})},u=n(4),j=n(7),d=n(8);!function(e){e.LANG_CHANGE="changeLang"}(r||(r={}));var h=function(){function e(){Object(j.a)(this,e),this.events=void 0,this.events={}}return Object(d.a)(e,[{key:"event",value:function(e,t){return{eventGroup:e,index:t}}},{key:"on",value:function(e,t){var n;this.events[e]=this.events[e]||[];var r=null===(n=this.events[e])||void 0===n?void 0:n.push(t);return console.log(this.events),this.event(e,r-1)}},{key:"off",value:function(e){var t=this.events[e.eventGroup].splice(e.index,1);this.events[e.eventGroup]=t}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e]&&this.events[e].forEach((function(e){return e.apply(void 0,n)}))}}]),e}();h.instance=new h;var b=h.instance,f=Object(a.createContext)({language:"pt-br",possibleLanguages:[],changeLanguage:function(){}}),g=function(){var e=Object(a.useContext)(f),t=e.possibleLanguages,n=e.changeLanguage,r=e.language,c=Object(a.useMemo)((function(){return t.map((function(e,t){return Object(l.jsx)("option",{value:e.value,children:e.label},t)}))}),[t]);return Object(l.jsx)("select",{name:"language",onChange:n,title:"Select your language",id:"language",className:"p-1 border-gray-400 border-2 rounded-md",defaultValue:r,children:c})},x=function(){return Object(l.jsx)("nav",{className:"bg-white w-100 shadow p-4 fixed left-0 top-0 right-0",children:Object(l.jsxs)("div",{className:"flex justify-between",children:[Object(l.jsx)("a",{href:"/",children:Object(l.jsxs)("h3",{className:"font-bold p-1",children:["Portif\xf3lio ",Object(l.jsx)("span",{className:"bg-blue-600 px-2 text-white rounded-md",children:"dev"})]})}),Object(l.jsxs)("div",{className:"space-x-6",children:[Object(l.jsxs)("ul",{className:"inline-flex space-x-3",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#about",children:"Sobre"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#tecnologias",children:"Tecnologias"})})]}),Object(l.jsx)(g,{})]})]})})},m=(n(14),function(e){return Object(l.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[Object(l.jsx)(x,{}),Object(l.jsx)(o,{children:null===e||void 0===e?void 0:e.children})]})}),p={javascript:"bg-javascript",java:"bg-java",scala:"bg-scala",typescript:"bg-typescript",nolang:"bg-nolang"},v=function(e){return Object(l.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-2",children:[Object(l.jsx)("span",{className:"rounded-full p-1 h-1 ".concat(p[e.language.toLowerCase()])}),Object(l.jsx)("span",{translate:"no",children:e.language})]})},O=function(e){return Object(l.jsx)("div",{"data-testid":"item",className:"w-100",children:Object(l.jsxs)("div",{className:"bg-white w-100 p-3 rounded-lg shadow",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"https://via.placeholder.com/300x300?text=".concat(e.language),alt:"Project's thumbnail",loading:"lazy",className:"object-cover h-48 w-full rounded-sm"})}),Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsxs)("div",{className:"flex space-x-2 py-3",children:[Object(l.jsx)("img",{src:e.owner.avatar,alt:e.owner.name,width:"32",height:"32",className:"rounded-full object-contain border-purple-800 border-2",title:e.owner.name,loading:"lazy"}),Object(l.jsx)("h3",{className:"font-medium text-2xl truncate",translate:"no",children:e.name})]}),Object(l.jsx)("p",{className:"text-gray-500 text-sm py-2 truncate",children:e.description}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"flex flex-row justify-between pt-2",children:[Object(l.jsx)(v,{language:e.language}),Object(l.jsx)("div",{className:"flex flex-row-reverse",children:Object(l.jsx)("a",{className:"p-2 focus:bg-gray-400 hover:bg-gray-300 rounded-md",href:e.link,children:"View project"})})]})]})]})})},w={Item:O,List:function(e){var t=e.projects,n=Object(a.useMemo)((function(){return t.map((function(e,t){return Object(l.jsx)(O,{name:e.name,description:e.description,language:e.language,link:e.link,owner:e.owner},t)}))}),[t]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"text-3xl py-12 font-bold",children:"Projects I'm working on"}),Object(l.jsx)("div",{className:"bg-gray-100 pb-5 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",children:n})]})}},N=n(2),y=n.n(N),k=n(3),L=function(e){return{name:e.name,avatar:e.avatar_url,at:e.login,bio:e.bio,link:e.html_url}},G=function(e){var t=Object(a.useMemo)((function(){return function(e){var t="https://api.github.com",n=function(){var n=Object(k.a)(y.a.mark((function n(){var r,a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t,"/users/").concat(e));case 2:return r=n.sent,n.next=5,r.json();case 5:return a=n.sent,n.abrupt("return",[a]);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{getProjects:function(){var n=Object(k.a)(y.a.mark((function n(){var r,a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t,"/users/").concat(e,"/repos"));case 2:return r=n.sent,n.next=5,r.json();case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),getUser:n}}(e)}),[]),n=Object(a.useState)([]),r=Object(u.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(null),l=Object(u.a)(i,2),o=l[0],j=l[1];return Object(a.useEffect)((function(){var e=function(e){var t,n,r=(t=e.owner.login,n=e.owner.avatar_url,{name:t,avatar:n});return function(e,t,n,r,a){return{name:e,description:t,language:n,link:r,owner:a}}(e.name,e.description,e.language||"nolang",e.html_url,r)};t.getUser().then(function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.map(L).shift());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(j).catch(console.error).finally((function(){return console.log("user loaded!")})),t.getProjects().then(function(){var t=Object(k.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.map(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then(s).catch(console.error).finally((function(){return console.log("loaded!")}))}),[]),{projects:c,user:o}},A=function(e){return Object(l.jsx)("div",{className:"w-full py-10",children:Object(l.jsxs)("div",{className:"flex flex-col sm:flex-row space-x-7",children:[Object(l.jsx)("div",{className:"flex flex-col-reverse",children:Object(l.jsx)("img",{src:e.user.avatar,alt:e.user.name,className:"rounded-full border-purple-800 border-2 mx-auto sm:mx-0 h-28",title:e.user.name})}),Object(l.jsxs)("div",{className:"flex flex-col justify-center pt-5",children:[Object(l.jsxs)("a",{href:e.user.link,className:"text-blue-500",children:["@",e.user.at]}),Object(l.jsx)("h2",{className:"text-4xl font-bold",children:e.user.name}),Object(l.jsx)("p",{children:e.user.bio})]})]})})},C=function(){var e=G("githiago-f"),t=e.projects,n=e.user;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{hidden:!n,children:n&&Object(l.jsx)(A,{user:n})}),Object(l.jsx)(w.List,{projects:t})]})},E=function(){var e=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)("en"),l=Object(u.a)(i,2),o=l[0],j=l[1];return Object(a.useEffect)((function(){n.e(3).then(n.t.bind(null,18,3)).then((function(e){return s(e.languages)})).catch(console.error),b.on(r.LANG_CHANGE,(function(e){j(e)}))}),[]),{language:o,possibleLanguages:c,changeLanguage:function(e){var t=e.target.value;b.emit(r.LANG_CHANGE,t)}}}();return Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f.Provider,{value:e,children:Object(l.jsx)(m,{"data-language":e.language,children:Object(l.jsx)(C,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);i.a.render(Object(l.jsx)(E,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0dd42f91.chunk.js.map