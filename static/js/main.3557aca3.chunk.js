(this["webpackJsonpspotify-react-app"]=this["webpackJsonpspotify-react-app"]||[]).push([[0],{27:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(11),i=a.n(s),r=a(22),o=a(35),l=a(38),u=a(141),p=a(138),d={seed_tracks:null,seed_artists:null,seed_albums:null,acousticness:null,danceability:null,energy:null,instumentalness:null,liveness:null,loudness:null,popularity:null,tempo:null,valence:null},m=c.a.createContext({params:d,setParams:function(){}}),j=a(4);var b=function(){var e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])},t=Object(n.useState)([]),a=Object(r.a)(t,2),s=a[0],i=a[1],d=Object(n.useContext)(m),b=d.params;return d.setParams,Object(j.jsx)("div",{className:"SearchBar",children:Object(j.jsx)(u.a,{options:s,getOptionLabel:function(e){return"".concat(e.name?"".concat(e.name," - "):"").concat(e.artists)},renderOption:function(e){return Object(j.jsxs)(c.a.Fragment,{children:[e.img&&Object(j.jsx)("img",{src:e.img,width:32,height:32,alt:"album artwork"}),"\xa0",e.name&&Object(j.jsxs)("span",{children:[e.name," -\xa0"]}),e.artists,"\xa0",e.explicit&&Object(j.jsx)("span",{style:{fontSize:".75em",fontWeight:"bold",color:"red"},children:"E"})]})},autoHighlight:!0,autoSelect:!0,onInputChange:function(t,a,n){a&&""!==a&&fetch("https://api.spotify.com/v1/search?q=".concat(a.split(" ").join("%20"),"&type=track,album,artist&limit=5"),{headers:e}).then((function(e){return e.json()})).then((function(e){var t=e.albums.items.map((function(e){return{type:"Albums",name:e.name,artists:e.artists.map((function(e){return e.name})).join(", "),img:e.images.length?e.images.slice(-1)[0].url:null,id:e.id}})),a=e.artists.items.map((function(e){return{type:"Artists",artists:e.name,img:e.images.length?e.images.slice(-1)[0].url:null,id:e.id}})),n=e.tracks.items.map((function(e){return{type:"Tracks",name:e.name,artists:e.artists.map((function(e){return e.name})).join(", "),img:e.album.images.length?e.album.images.slice(-1)[0].url:null,explicit:e.explicit,id:e.id}}));i([].concat(Object(l.a)(n),Object(l.a)(t),Object(l.a)(a)))})).catch((function(e){console.error("Error:",e)}))},filterOptions:function(e,t){return e},getOptionSelected:function(e,t){return e},renderInput:function(e){return Object(j.jsx)(p.a,Object(o.a)(Object(o.a)({},e),{},{label:"Start with a track, album or artist",variant:"outlined"}))},onChange:function(e,t){if(t)switch(t.type){case"Tracks":b.seed_tracks=t.id,b.seed_albums=null,b.seed_artists=null;break;case"Albums":b.seed_tracks=null,b.seed_albums=t.id,b.seed_artists=null;break;case"Artists":b.seed_tracks=null,b.seed_albums=null,b.seed_artists=t.id}},groupBy:function(e){return e.type}})})},h=a(133),f=a(134),O=a(65),y=a.n(O),g=a(140),x=(a(27),a(132));var v=function(e){var t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])},a=e.track,c=Object(n.useState)(),s=Object(r.a)(c,2),i=s[0],o=s[1];return Object(j.jsx)("div",{className:"PlaylistElement",style:{backgroundColor:e.color,borderRadius:10,paddingLeft:10},children:Object(j.jsxs)(g.a,{display:"flex",style:{alignItems:"center"},children:[Object(j.jsx)("img",{src:a.img,width:40,height:40,alt:"album artwork",style:{borderRadius:"50%"}}),Object(j.jsxs)(x.a,{children:["\xa0",a.artist," - ",a.title,"\xa0",a.explicit&&Object(j.jsx)("span",{style:{fontSize:".75em",fontWeight:"bold",color:"red"},children:"E"})]}),Object(j.jsx)("div",{className:"Right",children:Object(j.jsx)(h.a,{onClick:function(){fetch("https://api.spotify.com/v1/me/player/devices",{headers:t}).then((function(e){return e.json()})).then((function(e){e.devices.forEach((function(e){e.is_active&&o(e.id)}))}),(function(e){console.error("Error:",e)}));var e={method:"PUT",headers:t,body:JSON.stringify({uris:["spotify:track:".concat(a.id)]})};fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(i),e).then((function(e){return e.json()})).then((function(e){}),(function(e){console.error("Error:",e)}))},children:Object(j.jsx)(y.a,{})})})]},a.title)})};var k=function(){var e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])},t=Object(n.useContext)(m),a=t.params,c=(t.setParams,Object(n.useState)()),s=Object(r.a)(c,2),i=s[0],o=s[1],u=["#e3e3e3","#ffffff"];return Object(j.jsxs)("div",{className:"Playlist",children:[Object(j.jsx)(h.a,{color:"primary",variant:"contained",onClick:function(){if(console.log(a),a.seed_albums||a.seed_artists||a.seed_tracks){var t="https://api.spotify.com/v1/recommendations?market=US"+"".concat(a.seed_tracks?"&seed_tracks=".concat(a.seed_tracks):"")+"".concat(a.seed_albums?"&seed_albums=".concat(a.seed_albums):"")+"".concat(a.seed_artists?"&seed_artists=".concat(a.seed_artists):"")+"".concat(a.acousticness?"&target_acousticness=".concat(a.acousticness):"")+"".concat(a.danceability?"&target_danceability=".concat(a.danceability):"")+"".concat(a.energy?"&target_energy=".concat(a.energy):"")+"".concat(a.instumentalness?"&target_instumentalness=".concat(a.instumentalness):"")+"".concat(a.liveness?"&target_liveness=".concat(a.liveness):"")+"".concat(a.loudness?"&target_loudness=".concat(a.loudness):"")+"".concat(a.popularity?"&target_popularity=".concat(a.popularity):"")+"".concat(a.tempo?"&target_tempo=".concat(a.tempo):"")+"".concat(a.valence?"&target_valence=".concat(a.valence):"");console.log(t),fetch(t,{headers:e}).then((function(e){return e.json()})).then((function(e){o(e.tracks.map((function(e){return{title:e.name,artist:e.artists[0].name,img:e.album.images.slice(-1)[0].url,explicit:e.explicit,id:e.id}})))}),(function(e){console.error("Error:",e)}))}},children:"Generate playlist"}),i?Object(j.jsx)("div",{style:{marginTop:20},children:i.map((function(e,t){return Object(j.jsx)(v,{track:e,color:u[t%u.length]},e.id)}))}):Object(l.a)(Array(10)).map((function(){return Object(j.jsx)(f.a,{height:90,animation:!1})}))]})},_=a(47),C=a(143),S=a(135),w=a(142);function A(e){var t=e.children,a=e.open,n=e.value;return Object(j.jsx)(S.a,{open:a,enterTouchDelay:0,placement:"top",title:n,children:t})}var N=function(e){var t=Object(n.useContext)(m),a=t.params,s=(t.setParams,c.a.useState({checked:!1,value:50})),i=Object(r.a)(s,2),l=i[0],u=i[1];return Object(j.jsxs)(g.a,{display:"flex",style:{alignItems:"center"},children:[Object(j.jsx)(x.a,{style:{width:180,textAlign:"left",textTransform:"capitalize"},children:e.param}),Object(j.jsx)(w.a,{color:"primary",checked:l.checked,onChange:function(t){l.checked?a[e.param]=null:a[e.param]=l.value,u(Object(o.a)(Object(o.a)({},l),{},Object(_.a)({},t.target.name,t.target.checked))),console.log(a)},name:"checked",inputProps:{"aria-label":"Checkbox"}}),Object(j.jsx)(C.a,{color:"primary",disabled:!l.checked,ValueLabelComponent:A,"aria-label":"Value",defaultValue:50,onChange:function(t,n){u({checked:l.checked,value:n}),a[e.param]=n,console.log(a)}})]})};var P=function(){return Object(j.jsxs)("div",{className:"Controls",children:[Object(j.jsx)(N,{param:"acousticness"}),Object(j.jsx)(N,{param:"danceability"}),Object(j.jsx)(N,{param:"energy"}),Object(j.jsx)(N,{param:"instrumentalness"}),Object(j.jsx)(N,{param:"liveness"}),Object(j.jsx)(N,{param:"loudness"}),Object(j.jsx)(N,{param:"popularity"}),Object(j.jsx)(N,{param:"tempo"}),Object(j.jsx)(N,{param:"valence"})]})};var E=function(){var e=Object(n.useState)(d),t=Object(r.a)(e,2),a={params:t[0],setParams:t[1]};return Object(j.jsx)("div",{className:"Body",children:Object(j.jsxs)(m.Provider,{value:a,children:[Object(j.jsx)(b,{}),Object(j.jsx)(P,{}),Object(j.jsx)(k,{})]})})},T=a(136),z=a(137),B="https://accounts.spotify.com/authorize?client_id=".concat("3cf6931c4f974651b57c25157fe28427","&redirect_uri=").concat("https://tommygeiger.com/spotify-react-app/","&scope=").concat(["user-read-email","playlist-modify-public","playlist-modify-private","app-remote-control","user-modify-playback-state","user-read-currently-playing"].join("%20"),"&response_type=token&show_dialog=false"),I=window.location.hash.split("&")[0].split("=")[1];var R=function(){return Object(j.jsx)(h.a,{variant:"contained",href:B,children:"Connect to Spotify"})};var F=function(){return Object(j.jsx)(T.a,{position:"static",style:{background:"#2ab859"},children:Object(j.jsxs)(z.a,{children:[Object(j.jsx)(x.a,{variant:"h6",children:"spotify-react-app"}),!document.cookie&&Object(j.jsx)("div",{className:"Right",children:Object(j.jsx)(R,{})})]})})};var J=function(){return Object(j.jsx)("div",{className:"Footer",children:"Footer"})};var L=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Welcome to the app!"})})};var V=function(){return I&&(document.cookie="access-token=".concat(I,"; max-age=3600; path=/"),window.history.pushState(null,null," ")),console.log(document.cookie.split("=")[1]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(F,{}),document.cookie?Object(j.jsx)(E,{}):Object(j.jsx)(L,{}),Object(j.jsx)(J,{})]})};a(96);i.a.render(Object(j.jsx)(V,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.3557aca3.chunk.js.map