(this["webpackJsonpbrian-todo"]=this["webpackJsonpbrian-todo"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(7),c=n.n(r),l=n(5),u=n(2);var i=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(a.useRef)(null);Object(a.useEffect)((function(){l.current.focus()}));var i=function(e){c(e.target.value)};return o.a.createElement("form",{className:"todo_form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:r}),c("")}},e.edit?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",placeholder:"Update your item",className:"todo_input edit",onChange:i,value:r,ref:l}),o.a.createElement("button",{className:"todo_button edit"},"Update")):o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",placeholder:"Add a todo",className:"todo_input",onChange:i,value:r,ref:l}),o.a.createElement("button",{className:"todo_button"},"Add todo")))},d=n(8),m=n(9);var s=function(e){var t=e.todos,n=e.completeTodo,r=e.removeTodo,c=e.updateTodo,l=Object(a.useState)({id:null,value:""}),s=Object(u.a)(l,2),f=s[0],p=s[1];return f.id?o.a.createElement(i,{edit:f,onSubmit:function(e){c(f.id,e),p({id:null,value:""})}}):t.map((function(e,t){return o.a.createElement("div",{className:e.isComplete?"todo_row complete":"todo_row",key:t},o.a.createElement("div",{className:"todo_text",key:e.id,onClick:function(){return n(e.id)}},e.text),o.a.createElement("div",{className:"icons"},o.a.createElement(d.a,{onClick:function(){return r(e.id)},className:"delete_icon"}),o.a.createElement(m.a,{onClick:function(){return p({id:e.id,value:e.text})},className:"edit_icon"})))}))};var f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"What's the plan for Today?"),o.a.createElement(i,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(l.a)(n));r(t)}}}),o.a.createElement(s,{todos:n,completeTodo:function(e){var t=n.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));r(t)},removeTodo:function(e){var t=Object(l.a)(n).filter((function(t){return t.id!==e}));r(t)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&r((function(n){return n.map((function(n){return n.id===e?t:n}))}))}}))};n(15);var p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"todo_app"},o.a.createElement(f,null)))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ada84f8a.chunk.js.map