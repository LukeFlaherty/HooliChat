(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(11),n=s(2),c=s.n(n),r=s(17),o=s.n(r),i=(s(53),s(35)),m=(s(54),s(87)),u=s(89),d=s(90),p=s(85),l=s(86),j=(s(55),Object(n.forwardRef)((function(e,t){var s=e.message,n=e.username===s.username;return Object(a.jsx)("div",{ref:t,className:"message ".concat(n&&"message__user"),children:Object(a.jsx)(d.a,{className:n?"message__userCard":"message__guestCard",children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(l.a,{color:"white",variant:"h5",component:"h2",children:[!n&&"".concat(s.username||"Anonymous",": ")," ",s.message]})})})})}))),b=s(34),f=b.a.initializeApp({apiKey:"AIzaSyBiwhDxKkOLHuwkC-OdbS6GtUaEEwoEdvc",authDomain:"messenger-b5472.firebaseapp.com",databaseURL:"https://messenger-b5472-default-rtdb.firebaseio.com",projectId:"messenger-b5472",storageBucket:"messenger-b5472.appspot.com",messagingSenderId:"894897027401",appId:"1:894897027401:web:70589e78103cd863044298",measurementId:"G-086PMPBKFY"}).firestore(),g=s(45),h=s(44),O=s.n(h),x=s(88);var v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],p=o[1],l=Object(n.useState)(""),h=Object(i.a)(l,2),v=h[0],_=h[1];return Object(n.useEffect)((function(){_(prompt("Enter your name:"))}),[]),Object(n.useEffect)((function(){f.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("img",{src:"https://hoolichat.com/wp-content/uploads/2020/04/HooliChat-e1587758763209.jpg"}),Object(a.jsx)("form",{className:"app__form",children:Object(a.jsxs)(m.a,{className:"app__formControl",children:[Object(a.jsx)(u.a,{className:"app__input",value:s,placeholder:"say hello...",onChange:function(e){return c(e.target.value)}}),Object(a.jsx)(x.a,{className:"app__iconButton",disabled:!s,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),f.collection("messages").add({message:s,username:v,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),c("")},children:Object(a.jsx)(O.a,{})})]})}),Object(a.jsx)(g.a,{children:d.map((function(e){var t=e.id,s=e.message;return Object(a.jsx)(j,{username:v,message:s},t)}))})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),_()}},[[68,1,2]]]);
//# sourceMappingURL=main.fecf53b8.chunk.js.map