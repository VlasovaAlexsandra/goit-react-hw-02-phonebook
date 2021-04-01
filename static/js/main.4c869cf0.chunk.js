(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=n(13),o=n(2),u=n(6),l=n(7),b=n(9),d=n(8),m=n(3),j=n.n(m),h=n(5),f=(n(26),n(0)),O={name:"",number:""},p=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(o.a)({},O),t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.findInput=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(o.a)({},t.state)),t.reset()},t.reset=function(){t.setState(Object(o.a)({},O))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:"TaskEditor",onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{className:"TaskEditor_label",htmlFor:this.nameInputId,children:"Name"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"TaskEditor_input",type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{className:"TaskEditor_label",htmlFor:this.numberInputId,children:"Number"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"TaskEditor_input",type:"text",value:this.state.number,name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberInputId}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"TaskEditor_button",type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),x=(n(28),function(t){var e=t.value,n=t.onChangeFilter;return Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"Filter_text",children:"Find contacts by name"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"Filter_input",type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})}),g=(n(29),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsxs)("ul",{className:"TaskList",children:[" ",e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:"TaskList_item",children:[Object(f.jsxs)("p",{className:"TaskList_text",children:[a,": ",c]}),Object(f.jsx)("button",{className:"TaskList_button",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))]})}),C=n(12),v=(n(30),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:C,filter:""},t.addContact=function(e){var n=Object(o.a)(Object(o.a)({},e),{},{id:j.a.generate()});t.state.contacts.map((function(t){return t.name})).includes(n.name)?alert("".concat(n.name," is already in contacts")):0===n.name.length?alert("Fields must be filled!"):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"Title",children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.addContact}),Object(f.jsx)("h2",{className:"Title",children:"Contacts"}),Object(f.jsx)(x,{value:t,onChangeFilter:this.changeFilter}),Object(f.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));n(31);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4c869cf0.chunk.js.map