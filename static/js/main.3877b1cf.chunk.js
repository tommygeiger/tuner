(this["webpackJsonpspotify-react-app"]=this["webpackJsonpspotify-react-app"]||[]).push([[0],{40:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),a=n(11),o=n.n(a),s=n(28),r=n(41),l=n(42),u=n(23),p=n(52),h=n(51),j=n(34),d=n(50),b=n(114),m=n(113),f=n(5);var O=function(){var t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])};console.log(document.cookie.split("=")[1]);var e=Object(i.useState)([]),n=Object(d.a)(e,2),a=n[0],o=n[1];return Object(f.jsxs)("div",{className:"SearchBar",children:[Object(f.jsx)("br",{}),Object(f.jsx)(b.a,{options:a,getOptionLabel:function(t){return t.title},renderOption:function(t){return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)("img",{src:t.img,width:32,height:32}),"\xa0",t.artist," - ",t.title,"\xa0",t.explicit&&Object(f.jsx)("span",{style:{fontSize:".75em",fontWeight:"bold",color:"red"},children:"E"})]})},fullWidth:!0,autoHighlight:!0,autoSelect:!0,onInputChange:function(e,n,i){console.log("https://api.spotify.com/v1/search?q=".concat(n.split(" ").join("%20"),"&type=track&limit=5")),n&&""!=n&&fetch("https://api.spotify.com/v1/search?q=".concat(n.split(" ").join("%20"),"&type=track&limit=5"),{headers:t}).then((function(t){return t.json()})).then((function(t){console.log(t.tracks.items.map((function(t){return{title:t.name,artist:t.artists[0].name,explicit:t.explicit}}))),o(t.tracks.items.map((function(t){return{title:t.name,artist:t.artists[0].name,img:t.album.images.slice(-1)[0].url,explicit:t.explicit}})))})).catch((function(t){console.error("Error:",t)}))},filterOptions:function(t,e){return t},getOptionSelected:function(t,e){return t},renderInput:function(t){return Object(f.jsx)(m.a,Object(j.a)(Object(j.a)({},t),{},{label:"Search for Tracks",variant:"outlined"}))}})]})},x=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={error:null,isLoaded:!1,items:[],token:document.cookie.split("=")[1],seed_track:"",min_pop:""},i.handleChange=i.handleChange.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i}return Object(l.a)(n,[{key:"handleChange",value:function(t){var e=t.target.value,n=t.target.name;this.setState(Object(s.a)({},n,e))}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])};console.log(this.state.seed_track),this.state.seed_track&&this.state.min_pop&&fetch("https://api.spotify.com/v1/recommendations?market=US&seed_tracks=".concat(this.state.seed_track,"&min_popularity=").concat(this.state.min_pop),{headers:n}).then((function(t){return t.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var t=this.state,e=t.error,n=t.isLoaded,i=t.items;return e?Object(f.jsxs)("div",{children:["Error: ",e.message]}):n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:["Seed Track ID:",Object(f.jsx)("input",{name:"seed_track",type:"text",value:this.state.seed_track,onChange:this.handleChange})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{children:["Min Popularity (0-100):",Object(f.jsx)("input",{name:"min_pop",type:"text",value:this.state.min_popularity,onChange:this.handleChange})]}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"submit",value:"Submit"})]}),Object(f.jsx)("br",{}),"//Print reponse from API call",Object(f.jsx)("ul",{children:i.tracks.map((function(t){return Object(f.jsxs)("li",{children:[t.artists[0].name," - ",t.name]})}))})]}):Object(f.jsx)("div",{children:Object(f.jsx)(O,{})})}}]),n}(c.a.Component),g=n(110),v=n(111),k=n(112),y="https://accounts.spotify.com/authorize?client_id=".concat("3cf6931c4f974651b57c25157fe28427","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-private","user-read-email"].join("%20"),"&response_type=token&show_dialog=false"),S=window.location.hash.split("&")[0].split("=")[1],_=n(109);var C=function(){return Object(f.jsx)(_.a,{variant:"contained",href:y,children:"Connect to Spotify"})};n(40);var w=function(){return Object(f.jsx)(g.a,{position:"static",style:{background:"#2ab859"},children:Object(f.jsxs)(v.a,{children:[Object(f.jsx)(k.a,{variant:"h6",children:"spotify-react-app"}),!document.cookie&&Object(f.jsx)("div",{className:"Right",children:Object(f.jsx)(C,{})})]})})};var A=function(){return S&&(document.cookie="access-token=".concat(S,"; max-age=3600; path=/"),window.history.pushState(null,null," ")),console.log(document.cookie.split("=")[1]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(w,{}),document.cookie&&Object(f.jsx)(x,{})]})};n(69);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.3877b1cf.chunk.js.map