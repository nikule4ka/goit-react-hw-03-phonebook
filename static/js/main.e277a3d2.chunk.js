(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactList__item:"ContactList_ContactList__item__2ZVsZ",ContactList__btn:"ContactList_ContactList__btn__2sZgO"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(19),n(14)),i=n(4),l=n(5),u=n(7),m=n(6),b=(n(20),n(11)),h=n.n(b),d=n(12),j=n(9),f=n.n(j),p=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hanldeChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{type:"text",name:"name",value:e,onChange:this.hanldeChange,placeholder:"Name...",required:!0})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{type:"phone",name:"number",value:n,onChange:this.hanldeChange,placeholder:"Phone...",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:f.a.btnForm,children:"Add contact"})]})}}]),n}(a.Component),O=n(2),v=n.n(O),_=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(p.jsx)("ul",{className:v.a.ContactList,children:e.length?e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{id:e,className:v.a.ContactList__item,children:[Object(p.jsxs)("p",{className:v.a.ContactList__text,children:[a,":"]}),Object(p.jsx)("p",{className:v.a.ContactList__text,children:c}),Object(p.jsx)("button",{className:v.a.ContactList__btn,onClick:function(){return n(e)},children:"Delete"})]},e)})):Object(p.jsx)("p",{children:"No contacts found"})})},x=n(13),g=n.n(x),y=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{htmlFor:"",className:g.a.filter__label,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,required:!0})]})};y.defaultProps={value:""};var L=y,S=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContacts=function(e){var n=e.name,a=e.number,c={id:h.a.generate(),name:n,number:a},r=t.state.contacts.find((function(t){return t.name===c.name}));if(r)return alert("".concat(r.name," is already in contacts"));t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return n.trim()?a.filter((function(t){var e=t.name,n=t.number;return e.toLowerCase().includes(c)||n.includes(c)})):a},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.addContacts}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(L,{value:t,onChange:this.changeFilter}),Object(p.jsx)(_,{contacts:e,onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",btnForm:"ContactForm_btnForm__RrRV0"}}},[[30,1,2]]]);
//# sourceMappingURL=main.e277a3d2.chunk.js.map