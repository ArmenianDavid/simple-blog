(this["webpackJsonpsimple-blog"]=this["webpackJsonpsimple-blog"]||[]).push([[0],{62:function(e,t,a){e.exports=a(79)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=(a(67),a(19)),l=a(14),c=a(10),u=a(17),m=a(18),p=a(20),d=(a(68),a(27)),g=(a(69),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"registartion"},r.a.createElement("div",{className:"registartion-box"},r.a.createElement("span",{className:"log-in-btn",onClick:function(){return e.props.history.push("/simple-blog/verify")}},"Log in"," "),"and tell us your story!!!"))}}]),t}(r.a.Component)),h=Object(d.g)(g),b=(a(75),a(22)),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.isLoggedIn),r.a.createElement("div",{className:"navigation-container"},r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"left-nav"},r.a.createElement("div",null,r.a.createElement(b.b,{to:"/simple-blog"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-blog"}),"Blog"))),r.a.createElement(b.b,{to:"/simple-blog/create"},r.a.createElement("div",{className:"create-post-btn"},"create post"))),this.props.isLoggedIn?r.a.createElement("div",{className:"right-nav",onClick:function(){return e.props.history.push("/simple-blog/log-out-modal")}},r.a.createElement("div",{type:"button"},"Log out")):r.a.createElement("div",{className:"right-nav",onClick:function(){return e.props.history.push("/simple-blog/verify")}},r.a.createElement("div",{type:"button"},"Log in"))))}}]),t}(r.a.Component),v=Object(d.g)(f),E=(a(76),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).showValidationError=function(e,t){a.setState((function(a){return{errors:[].concat(Object(i.a)(a.errors),[{element:e,message:t}])}}))},a.clearValidationError=function(e){a.setState((function(t){var a=[],n=!0,r=!1,o=void 0;try{for(var s,i=t.errors[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var l=s.value;e!==l.element&&a.push(l)}}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return{errors:a}}))},a.handleChange=function(e){"username"===e.target.id?(a.setState({username:e.target.value}),a.clearValidationError("username")):"password"===e.target.id&&(a.setState({password:e.target.value}),a.clearValidationError("password"))},a.submitRegistration=function(){var e=a.state,t=e.username,n=e.password;""===t&&a.showValidationError("username","Username can't be empty"),""===n&&a.showValidationError("password","Password can't be empty"),t&&n&&a.setState({isLoggedIn:!0},(function(){return a.giveToApp()}))},a.giveToApp=function(){a.props.changeRegistrationStatus(a.state.isLoggedIn),a.props.history.push("/simple-blog/create"),a.props.handleUsername(a.state.username)},a.state={username:"",password:"",errors:[],isLoggedIn:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null,t=null,a=!0,n=!1,o=void 0;try{for(var s,i=this.state.errors[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var l=s.value;"username"===l.element&&(e=l.message),"password"===l.element&&(t=l.message)}}catch(l){n=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-title-container"},r.a.createElement("h2",{className:"login-title"},"Log in")),r.a.createElement("div",{className:"login"},r.a.createElement("input",{type:"text",placeholder:"Name *",id:"username",className:"login-input",onChange:this.handleChange}),r.a.createElement("sub",{className:"error"}," ",e||""," "),r.a.createElement("input",{type:"password",placeholder:"Password *",id:"password",className:"login-input",onChange:this.handleChange}),r.a.createElement("sub",{className:"error"}," ",t||""," "),r.a.createElement("button",{className:"login-btn",onClick:this.submitRegistration},"log in")))}}]),t}(r.a.Component)),y=Object(d.g)(E),O=(a(77),a(121)),j=a(114),S=a(4),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleGreetingStatusChange=function(){a.setState({isShowingGreeting:!1})},a.handleTitleValueChange=function(e){a.setState({titleValue:e.target.value})},a.handlePostValueChange=function(e){a.setState({postValue:e.target.value})},a.givePostToApp=function(){a.setState({inputId:a.state.inputId+1},(function(){return a.callback()}))},a.time=function(){return(new Date).toLocaleTimeString()},a.callback=function(){a.props.history.push("/simple-blog/"),a.props.handleAddPost({postId:a.state.inputId,titleValue:a.state.titleValue,postValue:a.state.postValue,username:a.props.username,time:a.time()})},a.state={isShowingGreeting:!0,titleValue:"",postValue:"",inputId:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"input-global-container"},r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(O.a,{className:e.title,id:"standard-basic",label:"Write a title",onChange:this.handleTitleValueChange}),r.a.createElement(O.a,{id:"outlined-basic",label:"Write a post",variant:"outlined",onChange:this.handlePostValueChange}),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.givePostToApp},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-check fa-2x"})))))}}]),t}(r.a.Component),N=Object(S.a)((function(e){return{root:{width:"80%","& > *":{margin:e.spacing(1),width:"100%"}}}}))(Object(d.g)(C)),w=a(115),k=a(116),V=a(117),L=a(118),I=a(119),x=a(123),R=a(120),A=a(41),P=(a(78),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Comment")}}]),t}(r.a.Component)),T=Object(w.a)((function(e){return{root:{width:"80%"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"lightskyblue"}}}));var U=function(e){var t=T();return e.posts.map((function(e,a){return r.a.createElement(k.a,{className:t.root,key:a},r.a.createElement(V.a,{avatar:r.a.createElement(x.a,{"aria-label":"recipe",className:t.avatar},e.username.charAt(0)),title:"".concat(e.titleValue," writed by ").concat(e.username," "),subheader:e.time}),r.a.createElement(L.a,null,r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},e.postValue)),r.a.createElement(I.a,{disableSpacing:!0},r.a.createElement(R.a,{"aria-label":"share",color:"primary"},r.a.createElement(P,null))))}))},G=a(35),B=a(122);function J(){return Math.round(20*Math.random())-10}function M(){var e=50+J(),t=50+J();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var W=Object(w.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var D=Object(d.g)((function(e){var t=W(),a=r.a.useState(M),n=Object(G.a)(a,1)[0],o=r.a.useState(!0),s=Object(G.a)(o,2),i=s[0],l=s[1],c=function(){l(!1)};return r.a.createElement("div",null,r.a.createElement(B.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:i,onClose:c},r.a.createElement("div",{style:n,className:t.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Log Out"),r.a.createElement("p",{id:"simple-modal-description"},"Are you sure ?"),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){e.changeRegistrationStatus(!1),c(),e.history.push("/simple-blog/verify")}},"Log out"))))})),q=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleAddPost=function(t){e.setState({posts:[t].concat(Object(i.a)(e.state.posts))})},e.changeRegistrationStatus=function(t){e.setState({isLoggedIn:t})},e.handleUsername=function(t){e.setState({username:t})},e.state={isLoggedIn:!1,posts:[],username:""},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.posts;return r.a.createElement("div",{className:"app"},r.a.createElement(v,{isLoggedIn:this.state.isLoggedIn,changeRegistrationStatus:this.changeRegistrationStatus}),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/simple-blog/log-out-modal",exact:!0},r.a.createElement(D,{changeRegistrationStatus:this.changeRegistrationStatus})),r.a.createElement(d.b,{path:"/simple-blog/verify"},r.a.createElement(y,{changeRegistrationStatus:this.changeRegistrationStatus,handleUsername:this.handleUsername})),r.a.createElement(d.b,{path:"/simple-blog/create"},t?r.a.createElement(N,{handleAddPost:this.handleAddPost,username:this.state.username}):r.a.createElement(d.a,{to:"/simple-blog/verify"})),r.a.createElement(d.b,{path:"/simple-blog",exact:!0},void 0!==a[0]?r.a.createElement(U,{posts:a}):r.a.createElement(h,null))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(b.a,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.bfbcbe47.chunk.js.map