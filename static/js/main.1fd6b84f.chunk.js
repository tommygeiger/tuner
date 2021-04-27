(this.webpackJsonpTuner=this.webpackJsonpTuner||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(12),s=a.n(c),r=a(20),o=a(24),l=a(44),u=a(147),d=a(144),j={seed_tracks:null,seed_artists:null,acousticness:null,danceability:null,energy:null,instumentalness:null,popularity:null,valence:null},m=i.a.createContext({params:j,setParams:function(){}}),p=a(2);var h=function(){var e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(document.cookie.split("access-token=")[1].split(";")[0])},t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],s=a[1];function j(t,a,n){a&&""!==a&&fetch("https://api.spotify.com/v1/search?q=".concat(a.split(" ").join("%20"),"&type=track,artist&limit=5"),{headers:e}).then((function(e){return e.json()})).then((function(e){var t=e.artists.items.map((function(e){return{type:"Artists",artists:e.name,img:e.images.length?e.images.slice(-1)[0].url:null,id:e.id}})),a=e.tracks.items.map((function(e){return{type:"Tracks",name:e.name,artists:e.artists.map((function(e){return e.name})).join(", "),img:e.album.images.length?e.album.images.slice(-1)[0].url:null,explicit:e.explicit,id:e.id}}));s([].concat(Object(l.a)(a),Object(l.a)(t)))})).catch((function(e){console.error("Error:",e)}))}return Object(p.jsx)(m.Consumer,{children:function(e){var t=e.params,a=e.setParams;return Object(p.jsx)("div",{className:"SearchBar",children:Object(p.jsx)(u.a,{options:c,getOptionLabel:function(e){return"".concat(e.name?"".concat(e.name," - "):"").concat(e.artists)},renderOption:function(e){return Object(p.jsxs)(i.a.Fragment,{children:[e.img&&Object(p.jsx)("img",{src:e.img,width:32,height:32,alt:"album artwork"}),"\xa0",e.name&&Object(p.jsxs)("span",{children:[e.name," -\xa0"]}),e.artists,"\xa0",e.explicit&&Object(p.jsx)("span",{style:{fontSize:".75em",fontWeight:"bold",color:"red"},children:"E"})]})},autoHighlight:!0,autoSelect:!0,noOptionsText:"Search for Artists or Tracks...",onInputChange:j,filterOptions:function(e,t){return e},getOptionSelected:function(e,t){return e},renderInput:function(e){return Object(p.jsx)(d.a,Object(o.a)(Object(o.a)({},e),{},{label:"Pick a seed Song or Artist",variant:"outlined"}))},onChange:function(e,n){if(n)if("Tracks"===n.type){var i=Object(o.a)({},t);i.seed_tracks=n.id,a(i)}else if("Artists"===n.type){var c=Object(o.a)({},t);c.seed_artists=n.id,a(c)}},groupBy:function(e){return e.type}})})}})},b=a(146),f=a(138),g=a(139),O=a(137),x=a(148),y=a(140),v=a(73),k=a.n(v),w=a(104);a(28);var C=function(e){var t=e.track;return Object(p.jsx)("div",{className:"PlaylistElement",style:{backgroundColor:e.color,borderRadius:5,paddingLeft:10},children:Object(p.jsxs)(b.a,{display:"flex",style:{alignItems:"center"},children:[Object(p.jsx)("img",{src:t.img,width:40,height:40,alt:"album artwork"}),Object(p.jsxs)(w.a,{children:["\xa0",t.artist," - ",t.title,"\xa0",t.explicit&&Object(p.jsx)("span",{style:{fontSize:".75em",fontWeight:"bold",color:"red"},children:"E"})]}),Object(p.jsx)("div",{className:"Right",style:{paddingRight:10},children:Object(p.jsx)(O.a,{href:"spotify:track:".concat(t.id),children:Object(p.jsx)(k.a,{})})})]},t.title)})},S=a(74),_=a.n(S),T=a(75),P=a.n(T),z=["Girl put your records on","Pump up the jam","Fly me to the moon","Hit me baby one more time","Beat it","Thank you, next","Twist and shout","Don't bring me down","I need a one dance","Kiss me through the phone","Take a chance on me","Drop it like it's hot","Give it to me","Let's get it started","Come on Eileen","I'm sorry Ms. Jackson","Rock me like a wagon wheel","Send me on my way","Please don't stop the music","Gimme gimme more","Start me up","Light my fire","Go your own way","Take a walk on the wild side","Dream on","Let's dance","We will rock you","Just what I needed","Don't stop believing","I wanna dance with somebody","Girls just wanna have fun","Get down on it","Voulez vous"];var A=function(){var e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(document.cookie.split("access-token=")[1].split(";")[0])},t=Object(n.useContext)(m).params,a=Object(n.useState)(),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(z[Math.floor(Math.random()*z.length)]),u=Object(r.a)(o,2),d=u[0],j=u[1],h=["#e6e6e6a0","#ffffff00"],v=Object(n.useState)(!1),k=Object(r.a)(v,2),w=k[0],S=k[1],T=function(e,t){"clickaway"!==t&&S(!1)};return Object(p.jsxs)("div",{className:"Playlist",children:[Object(p.jsxs)(b.a,{display:"flex",alignItems:"center",children:[Object(p.jsx)("div",{className:"Center",children:Object(p.jsx)(f.a,{style:{textTransform:"capitalize"},color:"primary",variant:"contained",disabled:!t.seed_tracks,onClick:function(){if(j(z[Math.floor(Math.random()*z.length)]),t.seed_albums||t.seed_artists||t.seed_tracks){var a="https://api.spotify.com/v1/recommendations?market=US"+"".concat(t.seed_tracks?"&seed_tracks=".concat(t.seed_tracks):"")+"".concat(t.seed_artists?"&seed_artists=".concat(t.seed_artists):"")+"".concat(t.acousticness?"&target_acousticness=".concat(t.acousticness):"")+"".concat(t.danceability?"&target_danceability=".concat(t.danceability):"")+"".concat(t.energy?"&target_energy=".concat(t.energy):"")+"".concat(t.popularity?"&target_popularity=".concat(t.popularity):"")+"".concat(t.valence?"&target_valence=".concat(t.valence):"")+"".concat(t.instumentalness?"&target_instrumentalness=".concat(t.instumentalness):"");console.log(a),fetch(a,{headers:e}).then((function(e){return e.json()})).then((function(e){s(e.tracks.map((function(e){return{title:e.name,artist:e.artists[0].name,img:e.album.images.slice(-1)[0].url,explicit:e.explicit,id:e.id}})))}),(function(e){console.error("Error:",e)}))}},children:d})}),Object(p.jsx)("div",{className:"Right",children:Object(p.jsx)(g.a,{arrow:!0,title:"Save playlist to Spotify",placement:"left",children:Object(p.jsx)("span",{children:Object(p.jsx)(O.a,{onClick:function(){var t={method:"POST",headers:e,body:JSON.stringify({name:"New Tuner Playlist",public:!1})};fetch("https://api.spotify.com/v1/users/".concat(document.cookie.split("user-id=")[1].split(";")[0],"/playlists"),t).then((function(e){return e.json()})).then((function(e){t.body=JSON.stringify({uris:c.map((function(e){return"spotify:track:".concat(e.id)}))}),fetch("https://api.spotify.com/v1/playlists/".concat(e.id,"/tracks"),t).then((function(e){return e.json()})).then((function(e){}),(function(e){console.error("Error:",e)}))}),(function(e){console.error("Error:",e)})).then(S(!0))},disabled:!c,children:Object(p.jsx)(_.a,{style:{height:"1.25em",width:"1.25em"}})})})})})]}),c?Object(p.jsx)("div",{style:{marginTop:20},children:c.map((function(e,t){return Object(p.jsx)(C,{track:e,color:h[t%h.length]},e.id)}))}):Object(l.a)(Array(10)).map((function(e,t){return Object(p.jsx)(y.a,{height:90,animation:!1},t)})),Object(p.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:w,autoHideDuration:6e3,onClose:T,message:"Playlist created!",action:Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(O.a,{size:"small","aria-label":"close",color:"inherit",onClick:T,children:Object(p.jsx)(P.a,{fontSize:"small"})})})})]})},N=a(5),I=a(141),H=a(149),L=a(150),E=a(76),B=a.n(E),D=a(77),G=a(142),M=Object(N.a)((function(){return{tooltip:{backgroundColor:"#ffffff",color:"#000000",maxWidth:200,fontSize:".75em"},arrow:{"&::before":{backgroundColor:"#ffffff"}}}}))(g.a),R=Object(D.a)({overrides:{MuiSlider:{thumb:{border:"2px solid currentColor"}}}});var F=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(50),l=Object(r.a)(s,2),u=l[0],d=l[1],j=Object(n.useState)(!1),h=Object(r.a)(j,2),f=h[0],g=h[1],x=function(){g(!1)},y=function(){g(!f)};return Object(p.jsx)(m.Consumer,{children:function(t){var a=t.params,n=t.setParams;return Object(p.jsxs)(b.a,{display:"flex",style:{alignItems:"center",paddingTop:5,paddingRight:20,paddingLeft:5},children:[Object(p.jsx)(I.a,{onClickAway:x,children:Object(p.jsx)("div",{children:Object(p.jsx)(M,{arrow:!0,PopperProps:{disablePortal:!0},disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,onClose:x,open:f,title:e.description,placement:"right",children:Object(p.jsx)(O.a,{onClick:y,style:{height:".75em",width:".75em"},children:Object(p.jsx)(B.a,{style:{height:".75em",width:".75em"}})})})})}),Object(p.jsx)(w.a,{variant:"subtitle1",style:{minWidth:130,textAlign:"left",textTransform:"capitalize"},children:e.param}),Object(p.jsx)("div",{style:{paddingRight:20},children:Object(p.jsx)(H.a,{size:"small",color:"primary",checked:i,onChange:function(){if(i){var t=Object(o.a)({},a);t[e.param]=null,n(t),c(!1)}else{var s=Object(o.a)({},a);s[e.param]=u,n(s),c(!0)}},name:"checked",inputProps:{"aria-label":"switch"}})}),Object(p.jsx)(G.a,{theme:R,children:Object(p.jsx)(L.a,{min:1,max:100,disabled:!i,valueLabelDisplay:"auto",getAriaValueText:function(){return e.param},value:u,onChange:function(t,i){d(i);var c=Object(o.a)({},a);"popularity"===e.param?c[e.param]=i[0]:c[e.param]=i[0]/100,n(c)}})})]})}})};var J=function(){return Object(p.jsxs)("div",{className:"Controls",children:[Object(p.jsx)(F,{param:"acousticness",description:"How acoustic sounding a track is. Higher values mean  fewer electric instruments, like synthesizers and electric guitars."}),Object(p.jsx)(F,{param:"danceability",description:"Does that song make you want to dance? If yes, it's danceable. Higher values mean more dancable tracks."}),Object(p.jsx)(F,{param:"energy",description:"Some songs are perfect for pregames, while others are more suited for a dinner party. Higher values mean more energetic songs, while lower values means calmer ones."}),Object(p.jsx)(F,{param:"instrumentalness",description:"High values for instrumentalness find songs with few vocals, while lower values mean songs with more vocals."}),Object(p.jsx)(F,{param:"popularity",description:"An objective measurement of current popularity on Spotify. Use low values  to hipster-fy your playlist."}),Object(p.jsx)(F,{param:"valence",description:"Valence measures how happy or sad a song is. High values mean happier songs, while low values mean sad boi songs."})]})},W=a.p+"static/media/logo_text.0d1e5545.png",V=a.p+"static/media/logo_icon.0e932c0a.png";var U=function(e){return Object(p.jsxs)(b.a,{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)(w.a,{variant:"h2",children:"Tuner"}),Object(p.jsx)(b.a,{m:-2,children:Object(p.jsx)(w.a,{variant:"caption",children:"a playlist generator"})})]}),Object(p.jsx)(b.a,{px:3,mt:3,children:Object(p.jsx)(w.a,{variant:"subtitle2",children:"for"})}),Object(p.jsx)(b.a,{mt:3,children:"text"===e.variant?Object(p.jsx)("img",{src:W,width:236,height:70,alt:"spotify logo"}):Object(p.jsx)("img",{src:V,width:70,height:70,alt:"spotify logo"})})]})};var q=function(){var e=Object(n.useState)(j),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(p.jsx)("div",{className:"Body",children:Object(p.jsxs)(m.Provider,{value:{params:a,setParams:i},children:[Object(p.jsx)(U,{variant:"icon"}),Object(p.jsx)(h,{}),Object(p.jsx)(J,{}),Object(p.jsx)(A,{})]})})},K=a(143);var Q=function(){return Object(p.jsx)("div",{className:"Footer",children:Object(p.jsxs)(w.a,{children:[Object(p.jsx)(K.a,{style:{color:"black"},href:"https://github.com/tommygeiger/spotify-react-app",children:"GitHub"})," - ",Object(p.jsx)(K.a,{style:{color:"black"},href:"https://github.com/tommygeiger/spotify-react-app/blob/main/Cookies.md",children:"Cookies"})]})})},X="https://accounts.spotify.com/authorize?client_id=".concat("3cf6931c4f974651b57c25157fe28427","&redirect_uri=").concat("https://tommygeiger.com/spotify-react-app/","&scope=").concat(["user-read-email","playlist-modify-public","playlist-modify-private"].join("%20"),"&response_type=token&show_dialog=false"),Y=window.location.hash.split("&")[0].split("=")[1];var Z=function(){return Object(p.jsx)(f.a,{style:{textTransform:"none"},color:"primary",variant:"contained",size:"large",href:X,children:"Connect to Spotify"})};var $=function(){return Object(p.jsx)(b.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(p.jsxs)("div",{className:"LandingPage",children:[Object(p.jsxs)("div",{className:"Middle",children:[Object(p.jsx)(U,{variant:"text"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(Z,{})]}),Object(p.jsx)("div",{className:"Bottom",children:Object(p.jsx)(Q,{})})]})})};var ee=function(){var e;return Y&&(e=Y,document.cookie="access-token=".concat(e,"; max-age=3500; path=/"),window.history.pushState(null,null," "),function(e){var t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(e)};fetch("https://api.spotify.com/v1/me",{headers:t}).then((function(e){return e.json()})).then((function(e){document.cookie="user-id=".concat(e.id,"; max-age=3500; path=/")}),(function(e){console.error("Error:",e)}))}(Y)),console.log(document.cookie),Object(p.jsx)("div",{className:"App",children:document.cookie?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(q,{}),Object(p.jsx)(Q,{})]}):Object(p.jsx)($,{})})};a(100);s.a.render(Object(p.jsx)(ee,{}),document.getElementById("root"))},28:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.1fd6b84f.chunk.js.map