(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{136:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var i=n(5),c=n.n(i),o=n(15),s=n.n(o),l=(n(136),n(131)),u=n(52),a=n(1),r=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"CGU TODO APP"})})},j=n(125),d=n(126),O=n(40),b=n(132),h=n(130),f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(j.a)(this,n),(i=t.call(this,e)).state={value:""},i.handleChange=i.handleChange.bind(Object(O.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(O.a)(i)),i}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!=this.state.value&&(this.props.onAdd(this.state.value),this.setState({value:""}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Add"})]})})}}]),n}(c.a.Component),x=(n(138),function(e){var t=Object(i.useState)(e.item),n=Object(u.a)(t,2),c=(n[0],n[1]);return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{style:{display:"flex",listStyle:"none",justifyContent:"flex-start"},children:[!0===e.item.isDone?Object(a.jsx)("li",{style:{paddingRight:250},children:Object(a.jsx)("del",{children:e.item.TODO})}):Object(a.jsx)("li",{style:{paddingRight:250},children:e.item.TODO}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){e.item.isDone||(c((function(e){return e.isDone=!0})),e.onDone(e.item))},children:"isDone"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){e.onDelete(e.item)},children:"Delete"})})]})})}),v=function(e){return Object(a.jsx)("div",{children:e.list.map((function(t){return Object(a.jsx)(x,{item:t,onDelete:e.onDelete,onDone:e.onDone})}))})},D=function(e){var t=Object(i.useState)([]),n=Object(u.a)(t,2),c=n[0],o=n[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(r,{}),Object(a.jsx)(f,{onAdd:function(e){o((function(t){return[].concat(Object(l.a)(t),[{TODO:e,isDone:!1}])}))}}),Object(a.jsx)(v,{list:c,onDelete:function(e){o((function(t){return t.filter((function(t){return t.TODO!=e.TODO}))}))},onDone:function(e){console.log(e);var t=c.findIndex((function(t){return t.TODO===e.TODO})),n=c;n[t].isDone=!0,o(n),console.log(c)}})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,434)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),o(e),s(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),m()}},[[433,1,2]]]);
//# sourceMappingURL=main.95e309f5.chunk.js.map