(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n.n(c),o=n(10),i=n.n(o),a=n(7),u=(n(17),n(18),n(19),n(3)),r=n(12),d=n(5),s=n(1),j=l.a.createContext(null),b=function(e){var t=e.children,n=Object(c.useState)(null),l=Object(u.a)(n,2),o=l[0],i=l[1],a=Object(c.useState)(""),b=Object(u.a)(a,2),O=b[0],f=b[1];Object(c.useEffect)((function(){i(JSON.parse(localStorage.todos))}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(c.useEffect)((function(){i((function(e){return(null===e||void 0===e?void 0:e.map((function(e){switch(O){case"allCompleted":return Object(d.a)(Object(d.a)({},e),{},{completed:!0});case"allActive":return Object(d.a)(Object(d.a)({},e),{},{completed:!1});default:return Object(d.a)({},e)}})))||null}))}),[O]),Object(c.useEffect)((function(){f((function(){switch(!0){case null===o||void 0===o?void 0:o.every((function(e){return!e.completed})):return"allActive";case null===o||void 0===o?void 0:o.every((function(e){return e.completed})):return"allCompleted";default:return""}}))}),[o]);var v=Object(c.useCallback)((function(){f((function(e){var t;if("allCompleted"===e)t="allActive";else t="allCompleted";return t}))}),[]),p=Object(c.useCallback)((function(e){var t={id:"".concat(new Date),title:e,completed:!1};i((function(e){return null!==e?[].concat(Object(r.a)(e),[t]):[t]}))}),[]),m=Object(c.useCallback)((function(e){i((function(t){return(null===t||void 0===t?void 0:t.filter((function(t){return t.id!==e})))||null}))}),[]),x=Object(c.useCallback)((function(e){i((function(t){return(null===t||void 0===t?void 0:t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})))||null}))}),[]),h=Object(c.useCallback)((function(){i((function(e){return(null===e||void 0===e?void 0:e.filter((function(e){return!e.completed})))||null}))}),[]),g=Object(c.useCallback)((function(e,t){i((function(n){return(null===n||void 0===n?void 0:n.map((function(n){return n.id===e?Object(d.a)(Object(d.a)({},n),{},{title:t}):n})))||null}))}),[]),C=Object(c.useCallback)((function(e){return e.replace(/[^a-z\u0430-\u044f\u04510-9\s]/gi," ").replace(/\s+/g," ")}),[]);return Object(s.jsx)(j.Provider,{value:{todos:o,toggleAll:O,setTodos:i,handlerToggleAll:v,onChangeTodo:g,validationTitle:C,addTodo:p,deleteTodo:m,checkedTodo:x,clearCompleted:h},children:t})},O=function(){var e,t,n=Object(c.useState)(""),l=Object(u.a)(n,2),o=l[0],i=l[1],a=null===(e=Object(c.useContext)(j))||void 0===e?void 0:e.addTodo,r=null===(t=Object(c.useContext)(j))||void 0===t?void 0:t.validationTitle;return Object(s.jsx)(s.Fragment,{children:a&&r&&Object(s.jsx)("form",{children:Object(s.jsx)("input",{type:"text",value:o,className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){i(r(e.target.value))},onKeyDown:function(e){switch(e.key){case"Escape":i("");break;case"Enter":e.preventDefault(),""!==r(o)&&(a(o),i(""))}}})})})},f=["all","active","completed"],v=function(){var e,t,n=null===(e=Object(c.useContext)(j))||void 0===e?void 0:e.clearCompleted,l=null===(t=Object(c.useContext)(j))||void 0===t?void 0:t.todos;return Object(s.jsx)(s.Fragment,{children:n&&l&&0!==(null===l||void 0===l?void 0:l.length)&&Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("span",{className:"todo-count",children:"".concat(l.filter((function(e){return!e.completed})).length," items left")}),Object(s.jsx)("div",{className:"filters",children:f.map((function(e){return Object(s.jsx)("li",{className:"selected",children:Object(s.jsx)(a.b,{to:"/".concat("all"===e?"":e),style:function(e){return e.isActive?{borderColor:"rgba(175, 47, 47, 0.2)"}:{}},children:e[0].toUpperCase()+e.substring(1)})},e)}))}),Object(s.jsx)("button",{type:"button",className:"clear-completed",onClick:n,children:"Clear completed"})]})})},p=function(){var e,t,n,l=null===(e=Object(c.useContext)(j))||void 0===e?void 0:e.todos,o=null===(t=Object(c.useContext)(j))||void 0===t?void 0:t.toggleAll,i=null===(n=Object(c.useContext)(j))||void 0===n?void 0:n.handlerToggleAll;return Object(s.jsx)(s.Fragment,{children:i&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{disabled:null===l,type:"checkbox",id:"toggle-all",className:"toggle-all",checked:"allCompleted"===o,onChange:function(){i()}}),Object(s.jsx)("label",{htmlFor:"toggle-all"})]})})},m=n(2),x=n(11),h=n.n(x),g=function(e){var t,n,l,o,i=e.todo,a=Object(c.useState)(!1),r=Object(u.a)(a,2),d=r[0],b=r[1],O=Object(c.useState)(i.title),f=Object(u.a)(O,2),v=f[0],p=f[1],m=null===(t=Object(c.useContext)(j))||void 0===t?void 0:t.checkedTodo,x=null===(n=Object(c.useContext)(j))||void 0===n?void 0:n.deleteTodo,g=null===(l=Object(c.useContext)(j))||void 0===l?void 0:l.onChangeTodo,C=null===(o=Object(c.useContext)(j))||void 0===o?void 0:o.validationTitle;return Object(c.useEffect)((function(){p(d?i.title:"")}),[d]),Object(s.jsx)(s.Fragment,{children:m&&x&&g&&C&&Object(s.jsxs)("li",{className:h()({completed:i.completed,editing:d}),children:[Object(s.jsxs)("div",{className:"view",children:[Object(s.jsx)("input",{id:i.id,type:"checkbox",className:"toggle",onChange:function(){m(i.id)},checked:i.completed}),Object(s.jsx)("label",{htmlFor:i.id,onDoubleClick:function(){b(!d)},children:i.title}),Object(s.jsx)("button",{type:"button",className:"destroy",onClick:function(){x(i.id)}})]}),Object(s.jsx)("input",{type:"text",value:v,className:"edit",onChange:function(e){var t=e.target;""!==C(t.value)&&p(C(t.value))},onBlur:function(e){e.preventDefault(),""!==C(v)&&(g(i.id,v),b(!d))},onKeyDown:function(e){switch(e.key){case"Escape":b(!d);break;case"Enter":e.preventDefault(),""!==C(v)&&(g(i.id,v),b(!d))}}})]})})},C=function(e){var t=e.todos;return Object(s.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(s.jsx)(l.a.Fragment,{children:Object(s.jsx)(g,{todo:e})},e.id)}))})},k=function(){var e,t=null===(e=Object(c.useContext)(j))||void 0===e?void 0:e.todos;return Object(s.jsx)(s.Fragment,{children:t&&Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{path:"*",element:Object(s.jsx)(C,{todos:t})}),Object(s.jsx)(m.a,{path:"/active",element:Object(s.jsx)(C,{todos:t.filter((function(e){return!e.completed}))})}),Object(s.jsx)(m.a,{path:"/completed",element:Object(s.jsx)(C,{todos:t.filter((function(e){return e.completed}))})})]})})},N=function(){return Object(s.jsx)(b,{children:Object(s.jsxs)("section",{className:"todoapp",children:[Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"todos"}),Object(s.jsx)(O,{})]}),Object(s.jsxs)("section",{className:"main",children:[Object(s.jsx)(p,{}),Object(s.jsx)(k,{})]}),Object(s.jsx)(v,{})]})})};i.a.render(Object(s.jsx)(a.a,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.61e35922.chunk.js.map