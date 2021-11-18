(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var a=s(2),i=s.n(a),c=s(14),l=s.n(c),n=s(3),o=s(4),r=s(6),d=s(5),m=s(15),j=s(0),b=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){new m.a("#dev",{strings:["Front-end Developer","Back-end Developer","Full-Stack Web Developer"],breakLines:!1,speed:150,deleteSpeed:150,loop:!0,waitUntilVisible:!0}).pause(2e3).go()}},{key:"render",value:function(){return Object(j.jsxs)("section",{id:"intro",className:"intro",children:[Object(j.jsx)("div",{className:"container h-100",children:Object(j.jsx)("div",{className:"row h-100 align-items-center",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("span",{className:"text-white nom",children:"I am Albinot Fetahi"}),Object(j.jsxs)("h1",{className:"text-white",children:["I am ",Object(j.jsx)("span",{id:"dev",className:"dev"})]}),Object(j.jsx)("p",{className:"text-white w-50 my-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae quam impedit dicta, blanditiis quisquam ducimus esse voluptatum dolores quo?"}),Object(j.jsx)("a",{href:"https://albinoty.com/docs/Fetahi_Albinot_CV.pdf",children:Object(j.jsx)("button",{className:"btn px-4 py-2 jaune text-white",children:"Download cv"})})]})})}),Object(j.jsx)("canvas",{})]})}}]),s}(i.a.Component),h=s.p+"static/media/logo.fc9fed69.png",u=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={home:!1,about:!1,skill:!1,services:!1,portfolio:!1,contact:!1,click:!1},e}return Object(o.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY>=57&&window.scrollY<935?e.setState({home:!0}):e.setState({home:!1}),window.scrollY>=936&&window.scrollY<1698?e.setState({about:!0}):e.setState({about:!1}),window.scrollY>=1699&&window.scrollY<2356?e.setState({skill:!0}):e.setState({skill:!1}),window.scrollY>=2357&&window.scrollY<3128?e.setState({services:!0}):e.setState({services:!1}),window.scrollY>=3129&&window.scrollY<3580?e.setState({portfolio:!0}):e.setState({portfolio:!1}),window.scrollY>=3581?e.setState({contact:!0}):e.setState({contact:!1})}))}},{key:"isMobile",value:function(){!this.state.click&&window.scrollY<56?(document.getElementsByTagName("header")[0].setAttribute("class","fonce"),this.setState({click:!0})):this.state.click&&window.scrollY<56&&(setTimeout((function(){document.getElementsByTagName("header")[0].setAttribute("class","")}),340),this.setState({click:!1}))}},{key:"render",value:function(){return Object(j.jsx)("header",{className:this.props.fixed?"position-fixed animated fadeInDown fonce":"",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light px-0 w-100",children:[Object(j.jsx)("a",{className:"navbar-brand text-white mr-0 w-75 pl-2",href:"#intro",children:Object(j.jsx)("img",{src:h,alt:"",className:"d-block w-25"})}),Object(j.jsx)("button",{className:"navbar-toggler text-white",onClick:this.isMobile.bind(this),type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon text-white"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:this.state.home?Object(j.jsx)("a",{className:"nav-link text-jaune active",href:"#intro",children:"Home"}):Object(j.jsx)("a",{className:"nav-link text-white",href:"#intro",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:this.state.about?Object(j.jsx)("a",{className:"nav-link text-jaune active",href:"#about",children:"About"}):Object(j.jsx)("a",{className:"nav-link text-white",href:"#about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:this.state.skill?Object(j.jsx)("a",{className:"nav-link text-jaune active",href:"#skill",children:"Skill"}):Object(j.jsx)("a",{className:"nav-link text-white",href:"#skill",children:"Skill"})}),Object(j.jsx)("li",{className:"nav-item",children:this.state.services?Object(j.jsx)("a",{className:"nav-link text-jaune active",href:"#service",children:"Services"}):Object(j.jsx)("a",{className:"nav-link text-white",href:"#service",children:"Services"})}),Object(j.jsx)("li",{className:"nav-item",children:this.state.portfolio?Object(j.jsx)("a",{className:"nav-link text-jaune active",href:"#portfolio",children:"Portfolio"}):Object(j.jsx)("a",{className:"nav-link text-white",href:"#portfolio",children:"Portfolio"})}),Object(j.jsx)("li",{className:"nav-item",children:this.state.contact?Object(j.jsx)("a",{className:"nav-link text-jaune active",href:"#contact",children:"Contact"}):Object(j.jsx)("a",{className:"nav-link text-white",href:"#contact",children:"Contact"})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle text-white",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Other Link"}),Object(j.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(j.jsx)("a",{className:"dropdown-item",href:"https://www.albinoty.com/portfolio/codingweek",children:"CodingWeek"}),Object(j.jsx)("a",{className:"dropdown-item",href:"https://www.albinoty.com/docs/lexique.html",children:"Lexique"})]})]})]})})]})})})}}]),s}(i.a.Component),x=s.p+"static/media/carre2.52d4daad.png",p=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){var e,t;window.addEventListener("scroll",(function(){window.scrollY>=200&&window.scrollY<500?(e=document.getElementById("titreAbout"),t="fadeInDown",e.classList.add(t)):window.scrollY>=501&&window.scrollY<900&&(e=document.getElementById("texteAbout"),t="slideInLeft",e.classList.add(t),e=document.getElementById("photoAbout"),t="slideInRight",e.classList.add(t))}))}},{key:"render",value:function(){return Object(j.jsx)("section",{id:"about",className:"about clair py-5",children:Object(j.jsxs)("div",{className:"container py-4",children:[Object(j.jsx)("div",{className:"row mx-auto w-75 text-center animated slower",id:"titreAbout",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("h2",{className:"text-white text-center d-flex flex-column",children:[Object(j.jsx)("span",{className:"mx-auto mb-2 line-titre",children:"about"}),"about myself"]}),Object(j.jsx)("span",{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique."})]})}),Object(j.jsxs)("div",{className:"row mt-5 align-items-center",children:[Object(j.jsxs)("div",{className:"col-lg-7 px-5 animated",id:"texteAbout",children:[Object(j.jsx)("p",{className:"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sint necessitatibus fuga nisi fugiat dolor non ab ex molestias at blanditiis ut, sit eveniet, labore nobis voluptate sequi amet harum explicabo. Veritatis repudiandae cumque natus hic sed dicta dignissimos totam laudantium doloribus, temporibus, eaque earum ipsum, molestiae incidunt quas dolore!"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Name: Albinot Fetahi"}),Object(j.jsx)("li",{children:"Date of Birth: 25 November 1997"})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Email: info@albinoty.com"}),Object(j.jsx)("li",{children:"Phone: +32 489 12 34 56"})]})})]})]}),Object(j.jsx)("div",{className:"col-lg-5 animated",id:"photoAbout",children:Object(j.jsx)("img",{src:x,className:"d-block w-100 rounded-circle",alt:""})})]})]})})}}]),s}(i.a.Component),O=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={bar:!1},e}return Object(o.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){var e,t,s=this;window.addEventListener("scroll",(function(){window.scrollY>=925&&window.scrollY<1025?(e=document.getElementById("titreSkill"),t="fadeInDown",e.classList.add(t)):window.scrollY>=1100&&window.scrollY<1500&&(e=document.getElementById("texteSkill"),t="fadeInDown",e.classList.add(t),e=document.getElementById("barSkill"),t="fadeInUp",e.classList.add(t)),window.scrollY>=1100&&window.scrollY<2100?s.setState({bar:!0}):s.setState({bar:!1})}))}},{key:"render",value:function(){return Object(j.jsx)("section",{id:"skill",className:"skill fonce py-5",children:Object(j.jsxs)("div",{className:"container py-4",children:[Object(j.jsx)("div",{className:"row mx-auto mb-5 w-100 text-center animated ",id:"titreSkill",children:Object(j.jsxs)("div",{className:"col-lg-12",children:[Object(j.jsxs)("h2",{className:"text-white text-center d-flex flex-column",children:[Object(j.jsx)("span",{className:"mx-auto mb-2 line-titre",children:"skill"}),"Developement Skill"]}),Object(j.jsx)("span",{className:"d-block mx-auto w-75",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique."})]})}),Object(j.jsxs)("div",{className:"row mt-5 pt-5 align-items-center",children:[Object(j.jsxs)("div",{className:"col-lg-6 animated ",id:"texteSkill",children:[Object(j.jsx)("h2",{className:"text-capitalize",children:"Some talk About my professional web development skill"}),Object(j.jsx)("p",{className:"mt-3",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione."}),Object(j.jsx)("p",{className:"mt-3",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed amet alias expedita. Vitae architecto laborum quos, velit nam ratione."})]}),Object(j.jsxs)("div",{className:"col-lg-6 animated ",id:"barSkill",children:[Object(j.jsxs)("div",{className:"text-white d-flex mt-2",children:[Object(j.jsx)("span",{className:"d-block mr-auto span",children:"HTML, CSS"}),Object(j.jsx)("span",{className:"d-block ml-auto span",children:"95%"})]}),Object(j.jsx)("div",{className:"progress mt-2",children:Object(j.jsx)("div",{className:this.state.bar?"progress-bar jaune animated slideInLeft slow":"progress-bar jaune",role:"progressbar",style:{width:"95%"},"aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100"})}),Object(j.jsxs)("div",{className:"text-white d-flex mt-2",children:[Object(j.jsx)("span",{className:"d-block mr-auto span",children:"Javascript, React"}),Object(j.jsx)("span",{className:"d-block ml-auto span",children:"80%"})]}),Object(j.jsx)("div",{className:"progress mt-2",children:Object(j.jsx)("div",{className:this.state.bar?"progress-bar jaune animated slideInLeft slow":"progress-bar jaune",role:"progressbar",style:{width:"80%"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"})}),Object(j.jsxs)("div",{className:"text-white d-flex mt-2",children:[Object(j.jsx)("span",{className:"d-block mr-auto span",children:"Java"}),Object(j.jsx)("span",{className:"d-block ml-auto span",children:"55%"})]}),Object(j.jsx)("div",{className:"progress mt-2",children:Object(j.jsx)("div",{className:this.state.bar?"progress-bar jaune animated slideInLeft slow":"progress-bar jaune",role:"progressbar",style:{width:"55%"},"aria-valuenow":"55","aria-valuemin":"0","aria-valuemax":"100"})}),Object(j.jsxs)("div",{className:"text-white d-flex mt-2",children:[Object(j.jsx)("span",{className:"d-block mr-auto span",children:"PHP, MYSQL"}),Object(j.jsx)("span",{className:"d-block ml-auto span",children:"75%"})]}),Object(j.jsx)("div",{className:"progress mt-2",children:Object(j.jsx)("div",{className:this.state.bar?"progress-bar jaune animated slideInLeft slow":"progress-bar jaune",role:"progressbar",style:{width:"75%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"})}),Object(j.jsxs)("div",{className:"text-white d-flex mt-2",children:[Object(j.jsx)("span",{className:"d-block mr-auto span",children:"Photoshop, Illustrator"}),Object(j.jsx)("span",{className:"d-block ml-auto span",children:"70%"})]}),Object(j.jsx)("div",{className:"progress mt-2",children:Object(j.jsx)("div",{className:this.state.bar?"progress-bar jaune animated slideInLeft slow":"progress-bar jaune",role:"progressbar",style:{width:"70%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"})})]})]})]})})}}]),s}(i.a.Component),v=s(7),w=s(11),N=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){var e,t;window.addEventListener("scroll",(function(){window.scrollY>=1520&&window.scrollY<1700?(e=document.getElementById("titreService"),t="fadeInDown",e.classList.add(t)):window.scrollY>=1701&&window.scrollY<2200&&(e=document.getElementById("contenuService"),t="fadeInUp",e.classList.add(t))}))}},{key:"render",value:function(){return Object(j.jsx)("section",{id:"service",className:"clair py-5",children:Object(j.jsxs)("div",{className:"container py-4",children:[Object(j.jsx)("div",{className:"row mx-auto w-75 text-center pb-5 animated ",id:"titreService",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("h2",{className:"text-white text-center d-flex flex-column",children:[Object(j.jsx)("span",{className:"mx-auto mb-2 line-titre",children:"services"}),"What i do"]}),Object(j.jsx)("span",{className:"text-white",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique."})]})}),Object(j.jsxs)("div",{className:"row animated ",id:"contenuService",children:[Object(j.jsx)("div",{className:"col-lg-4 service",children:Object(j.jsxs)("div",{className:"text-white bg-secondary pt-1",children:[Object(j.jsx)("div",{className:"nombre",children:Object(j.jsx)("span",{children:"01."})}),Object(j.jsx)("h3",{className:"text-center text-bleu py-4",children:"Website Development"}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(v.a,{icon:w.b,size:"3x"})}),Object(j.jsx)("p",{className:"px-5 py-3",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae. Quaerat adipisci nobis doloremque, quia quo nesciunt exercitationem tempore nisi."})]})}),Object(j.jsx)("div",{className:"col-lg-4 service",children:Object(j.jsxs)("div",{className:"text-white bg-secondary",children:[Object(j.jsx)("div",{className:"nombre",children:Object(j.jsx)("span",{children:"02."})}),Object(j.jsx)("h3",{className:"text-center text-bleu py-4",children:"Hardware Repair"}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(v.a,{icon:w.c,size:"3x"})}),Object(j.jsx)("p",{className:"px-5 py-3",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae. Quaerat adipisci nobis doloremque, quia quo nesciunt exercitationem tempore nisi."})]})}),Object(j.jsx)("div",{className:"col-lg-4 service",children:Object(j.jsxs)("div",{className:"text-white bg-secondary",children:[Object(j.jsx)("div",{className:"nombre",children:Object(j.jsx)("span",{children:"03."})}),Object(j.jsx)("h3",{className:"text-center text-bleu py-4",children:"Deploy Website"}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(v.a,{icon:w.a,size:"3x"})}),Object(j.jsx)("p",{className:"px-5 py-3",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae. Quaerat adipisci nobis doloremque, quia quo nesciunt exercitationem tempore nisi."})]})})]})]})})}}]),s}(i.a.Component),f=s.p+"static/media/portfolio.3d802e8d.png",g=s.p+"static/media/SitDuChef.76919244.png",k=s.p+"static/media/react-portfolio.065a5daf.png",y=s.p+"static/media/codingWeek.5f6b7b73.png",S=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={html:!0,js:!0},e}return Object(o.a)(s,[{key:"UNSAGE_componentWillMount",value:function(){var e,t;window.addEventListener("scroll",(function(){window.scrollY>=2300&&window.scrollY<2500?(e=document.getElementById("titrePortfolio"),t="fadeInDown",e.classList.add(t)):window.scrollY>=2501&&window.scrollY<2925&&(e=document.getElementById("contenuPortfolio"),t="fadeInUp",e.classList.add(t))}))}},{key:"handleType",value:function(e){"all"===e.target.id?this.setState({html:!0,js:!0}):"html"===e.target.id?this.setState({html:!0,js:!1}):"js"===e.target.id&&this.setState({html:!1,js:!0})}},{key:"render",value:function(){return Object(j.jsx)("section",{id:"portfolio",className:"portfolio fonce py-5",children:Object(j.jsxs)("div",{className:"container py-4",children:[Object(j.jsx)("div",{className:"row mx-auto w-75 text-center animated ",id:"titrePortfolio",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("h2",{className:"text-white text-center d-flex flex-column",children:[Object(j.jsx)("span",{className:"mx-auto mb-2 line-titre",children:"portfolio"}),"RECENT PROJECTS"]}),Object(j.jsx)("span",{className:"text-white",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique."})]})}),Object(j.jsx)("div",{className:"row mt-5",children:Object(j.jsxs)("div",{className:"col-12 text-center",children:[Object(j.jsx)("button",{className:"btn text-white mx-2",onClick:this.handleType.bind(this),id:"all",children:"All"}),Object(j.jsx)("button",{className:"btn text-white mx-2",onClick:this.handleType.bind(this),id:"html",children:"HTML/CSS"}),Object(j.jsx)("button",{className:"btn text-white mx-2",onClick:this.handleType.bind(this),id:"js",children:"JS"})]})}),Object(j.jsxs)("div",{className:"row mt-5 animated ",id:"contenuPortfolio",children:[Object(j.jsx)("div",{className:this.state.js?"col-lg-3 mb-5":"col-lg-3 mb-5 d-none",children:Object(j.jsx)("a",{href:"https://albinoty.com/",children:Object(j.jsx)("img",{src:k,alt:"Portfolio React",title:"Portfolio React",className:"d-block w-100"})})}),Object(j.jsx)("div",{className:this.state.html?"col-lg-3 mb-5":"col-lg-3 mb-5 d-none",children:Object(j.jsx)("a",{href:"https://albinoty.com/portfolio/oldPortfolio",children:Object(j.jsx)("img",{src:f,alt:"Portfolio V1.0",title:"Old Version of my first portfolio",className:"d-block w-100"})})}),Object(j.jsx)("div",{className:this.state.html?"col-lg-3 mb-5":"col-lg-3 mb-5 d-none",children:Object(j.jsx)("a",{href:"https://albinoty.com/portfolio/siteduchef",children:Object(j.jsx)("img",{src:g,alt:"Site du chef",title:"Site du chef",className:"d-block w-100"})})}),Object(j.jsx)("div",{className:this.state.html?"col-lg-3 mb-5":"col-lg-3 mb-5 d-none",children:Object(j.jsx)("a",{href:"https://albinoty.com/portfolio/codingweek",children:Object(j.jsx)("img",{src:y,alt:"Coding Week 2019",title:"Coding Week 2019",className:"d-block w-100"})})})]})]})})}}]),s}(i.a.Component),L=s(8),Y=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={nom:"",mail:"",sujet:"",msg:""},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsx)("section",{id:"contact",className:"contact py-5 clair",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row mx-auto w-75 text-center",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("h2",{className:"text-white text-center d-flex flex-column",children:[Object(j.jsx)("span",{className:"mx-auto mb-2 line-titre",children:"contact"}),"Get in touch"]}),Object(j.jsx)("span",{className:"text-white",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus est quos suscipit autem beatae vitae ab ducimus provident similique."})]})}),Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsx)("div",{className:"col-lg-4",children:Object(j.jsxs)("ul",{className:"text-white pl-0",children:[Object(j.jsxs)("li",{className:"mt-3",children:[Object(j.jsx)("h5",{className:"font-weight-bold",children:"Email"}),Object(j.jsx)("span",{className:"font-weight-lighter",children:"info@albinoty.com"})]}),Object(j.jsxs)("li",{className:"mt-3",children:[Object(j.jsx)("h5",{className:"font-weight-bold",children:"Phone"}),Object(j.jsx)("span",{className:"font-weight-lighter",children:"+32 489 11 12 15"})]}),Object(j.jsxs)("li",{className:"mt-3",children:[Object(j.jsx)("h5",{className:"font-weight-bold",children:"Adress"}),Object(j.jsx)("span",{className:"font-weight-lighter",children:"Brussel 1030, Belgium"})]}),Object(j.jsxs)("li",{className:"mt-3",children:[Object(j.jsx)("h5",{className:"font-weight-bold",children:"Website"}),Object(j.jsx)("span",{className:"font-weight-lighter",children:"www.albinoty.com"})]}),Object(j.jsxs)("li",{className:"mt-3",children:[Object(j.jsx)("a",{href:"https://facebook.com/A.Noty0Kumanova",className:"mr-3 lien",children:Object(j.jsx)(v.a,{icon:L.a,size:"1x"})}),Object(j.jsx)("a",{href:"https://instagram.com/albinotknoty/",className:"mr-3 lien",children:Object(j.jsx)(v.a,{icon:L.c,size:"1x"})}),Object(j.jsx)("a",{href:"https://twitter.com",className:"mr-3 lien",children:Object(j.jsx)(v.a,{icon:L.f,size:"1x"})}),Object(j.jsx)("a",{href:"https://www.snapchat.com/add/albinotknoty",className:"mr-3 lien",children:Object(j.jsx)(v.a,{icon:L.e,size:"1x"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/albinotfetahi",className:"mr-3 lien",children:Object(j.jsx)(v.a,{icon:L.d,size:"1x"})}),Object(j.jsx)("a",{href:"https://github.com/Albinoty",className:"lien",children:Object(j.jsx)(v.a,{icon:L.b,size:"1x"})})]})]})}),Object(j.jsx)("div",{className:"col-lg-8",children:Object(j.jsx)("form",{action:"",method:"post",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control clair",placeholder:"Your Name",onChange:function(t){return e.setState({nom:t.target.value})}})})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"email",className:"form-control clair",placeholder:"Email Address",onChange:function(t){return e.setState({mail:t.target.value})}})})}),Object(j.jsx)("div",{className:"col-lg-12",children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control clair",placeholder:"Subject",onChange:function(t){return e.setState({sujet:t.target.value})}})})}),Object(j.jsx)("div",{className:"col-lg-12",children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{name:"",id:"",className:"form-control clair",placeholder:"Your message",cols:"30",rows:"10",onChange:function(t){return e.setState({msg:t.target.value})}})})}),Object(j.jsx)("div",{className:"col-lg-12",children:Object(j.jsx)("button",{className:"btn px-4 py-2 jaune text-white",onClick:this.handleSubmit,disabled:!0,children:"coming soon"})})]})})})]})]})})}}]),s}(i.a.Component),I=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)("footer",{className:"fonce",children:Object(j.jsx)("div",{className:"container py-4",children:Object(j.jsx)("p",{className:"text-center m-0 text-white",children:"Albinoty \xa9 2019. All Right Reserved."})})})}}]),s}(i.a.Component),q=(s(26),s(13),s(28),s.p+"static/media/left.024c2638.svg"),A=s.p+"static/media/right.86fb84c9.svg",E=s.p+"static/media/middle.2dd8198a.svg";document.title="I am Albinot Fetahi",document.description="Web Developer Portfolio - by Albinot Fetahi";var C=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={navFixed:!1,page:!1},e}return Object(o.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY>56?e.setState({navFixed:!0}):e.setState({navFixed:!1})}))}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({page:!0})}),2500)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:!0===this.state.page?"loaded":"",children:[Object(j.jsxs)("div",{id:"loader-wrapper",children:[Object(j.jsxs)("div",{id:"loader",children:[Object(j.jsx)("img",{src:q,className:"animated fadeInLeft slow w-25"}),Object(j.jsx)("img",{src:E,className:"animated fadeInUp slow w-25"}),Object(j.jsx)("img",{src:A,className:"animated fadeInRight slow w-25"})]}),Object(j.jsx)("div",{className:"loader-section section-left"}),Object(j.jsx)("div",{className:"loader-section section-right"})]}),Object(j.jsx)(u,{fixed:this.state.navFixed}),Object(j.jsx)(b,{}),Object(j.jsx)(p,{}),Object(j.jsx)(O,{}),Object(j.jsx)(N,{}),Object(j.jsx)(S,{}),Object(j.jsx)(Y,{}),Object(j.jsx)(I,{})]})}}]),s}(i.a.Component);s(29),s(30);l.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6b75af55.chunk.js.map