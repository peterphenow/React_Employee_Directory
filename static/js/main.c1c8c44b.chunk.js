(this.webpackJsonphw19_react_employee_directory=this.webpackJsonphw19_react_employee_directory||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(13),s=c.n(r),i=c(3),l=c(14),o=c.n(l);var a=function(){return o.a.get("https://randomuser.me/api/?results=25&nat=us,ca")},j=c(0);var b=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",onClick:e.sortTable,children:"#"}),Object(j.jsx)("th",{scope:"col",children:"Picture"}),Object(j.jsx)("th",{scope:"col",onClick:e.sortTable,children:"Title"}),Object(j.jsx)("th",{scope:"col",onClick:e.sortTable,children:"First"}),Object(j.jsx)("th",{scope:"col",onClick:e.sortTable,children:"Last"}),Object(j.jsx)("th",{scope:"col",onClick:e.sortTable,children:"Phone"}),Object(j.jsx)("th",{scope:"col",onClick:e.sortTable,children:"Email(click to sort!)"}),Object(j.jsx)("th",{scope:"col",onClick:e.sortTable,children:"Country"})]})}),Object(j.jsx)("tbody",{children:e.children})]})})};var d=function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.index},e.index),Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:e.pic,alt:"".concat(e.firstName," ").concat(e.lastName)})}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.firstName}),Object(j.jsx)("td",{children:e.lastName}),Object(j.jsx)("td",{children:e.phone}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.country})]})};var h=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0];return t[1],Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Filter By First Name Here: "}),Object(j.jsx)("input",{onSubmit:function(e){e.preventDefault(),console.log(c)}}),Object(j.jsx)("button",{className:"btn btn-success",type:"submit",children:"Filter"})]})};var u=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)("descending"),l=Object(i.a)(s,2),o=l[0],u=l[1];Object(n.useEffect)((function(){a().then((function(e){return r(e.data.results)}))}),[]);var O=function(e,t){return e.email<t.email?-1:e.email>t.email?1:0},x=function(e,t){return e.email<t.email?1:e.email>t.email?-1:0};return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(b,{sortTable:function(e){if(e.preventDefault(),console.log(e.target.innerHTML.toLowerCase()),"descending"===o){var t=c.sort(O);console.log(t),u("ascending")}else{var n=c.sort(x);console.log(n),u("descending")}},children:c.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d,{index:t+1,pic:e.picture.thumbnail,title:e.name.title,firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,country:e.location.country})})}))})]})};var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(u,{})})};c(38),c(39);s.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c1c8c44b.chunk.js.map