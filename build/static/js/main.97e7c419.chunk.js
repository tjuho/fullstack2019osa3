(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(11),l=t.n(u),o=t(3),i=t(2),c=t.n(i),m=function(e){var n=e.title;return r.a.createElement("h2",null,n)},s=function(e){var n=e.person,t=e.removePerson;return r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"poista"))},f=function(e){var n=e.persons,t=e.removePerson;return r.a.createElement("div",null,r.a.createElement(m,{title:"Numerot"}),n.map(function(e){return r.a.createElement(s,{person:e,key:e.id,removePerson:t(e.id)})}))},d=function(e){var n=e.newName,t=e.newNumber,a=e.handleNumberChange,u=e.handleNameChange,l=e.addPerson;return r.a.createElement("div",null,r.a.createElement(m,{title:"Lis\xe4\xe4 uusi"}),r.a.createElement("form",{onSubmit:l},r.a.createElement("input",{value:n,onChange:u}),r.a.createElement("br",null),r.a.createElement("input",{value:t,onChange:a}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"tallenna")))},v=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("div",null,r.a.createElement(m,{title:"Rajaa hakua"}),r.a.createElement("form",null,r.a.createElement("input",{value:n,onChange:t})))},h="/api/persons",p=function(e){return c.a.post(h,e).then(function(e){return e.data})},E=function(e,n){return c.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data})},b=function(e){return c.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},j=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1];Object(a.useEffect)(function(){c.a.get("/api/persons").then(function(e){u(e.data)})},[]);var l=Object(a.useState)(""),i=Object(o.a)(l,2),m=i[0],s=i[1],h=Object(a.useState)(""),j=Object(o.a)(h,2),O=j[0],C=j[1],N=Object(a.useState)(""),k=Object(o.a)(N,2),P=k[0],S=k[1],F=Object(a.useState)(null),L=Object(o.a)(F,2),y=L[0],x=L[1],H=Object(a.useState)(null),J=Object(o.a)(H,2),K=J[0],T=J[1],B=function(e){T(e),setTimeout(function(){T(null)},7e3)},D=function(e){x(e),setTimeout(function(){x(null)},7e3)},I=t.filter(function(e){return e.name.toLowerCase().includes(P.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h1",null,"Puhelinluettelo"),r.a.createElement(g,{message:K}),r.a.createElement(w,{message:y}),r.a.createElement(v,{handleFilterChange:function(e){S(e.target.value)},newFilter:P}),r.a.createElement(d,{handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){C(e.target.value)},newName:m,newNumber:O,addPerson:function(e){e.preventDefault();var n={name:m,number:O},a=t.map(function(e){return e.name}).indexOf(m);if(a>=0){if(!window.confirm(m+" on jo luettelossa. Korvataanko vanha numero uudella?"))return;var r=t[a].id;E(r,n).then(function(e){var n=t;n[a]=e,u(n),B("Korvattiin henkil\xf6 "+m+" numero uudella numerolla "+O),s(""),C("")}).catch(function(e){D("Henkil\xf6 '".concat(m,"' oli jo poistettu palvelimelta")),u(t.filter(function(e){return e.id!==r}))})}else p(n).then(function(e){u(t.concat(e)),B("Lis\xe4ttiin "+m),s(""),C("")})}}),r.a.createElement(f,{persons:I,removePerson:function(e){return function(){var n=t.filter(function(n){return n.id===e})[0].name;window.confirm("Poistetaanko "+n)&&(console.log("remove person with id ",e),b(e).then(function(a){console.log("person removed"),B(n+" poistettiin"),u(t.filter(function(n){return n.id!==e}))}).catch(function(a){D("Henkil\xf6 '".concat(n,"' oli jo poistettu palvelimelta")),u(t.filter(function(n){return n.id!==e}))}))}}}))};t(37);l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.97e7c419.chunk.js.map