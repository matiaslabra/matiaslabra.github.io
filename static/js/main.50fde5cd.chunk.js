(this["webpackJsonpmatiaslabra.github.io.react"]=this["webpackJsonpmatiaslabra.github.io.react"]||[]).push([[0],{107:function(e){e.exports=JSON.parse('[{"name":"Service tracker","language":["Javascript"],"description":"Keep track of services, rooms and dates in real-time.","technologies":["React","Redux","Socket.IO","styled-components","Webpack","MongoDB"],"url":"","year":"2020","country":["Australia","AUS"]},{"name":"GIS Dashboard","language":["Javascript","PHP"],"description":"Consuming 10.000+ points, vectors, polygons and rasters in a map layer.","technologies":["React","Webpack","Symfony","OpenLayers","PostgreSQL","PostGIS"],"url":"","year":"2016-2018","country":["Chile","CHL"]},{"name":"IoT Dashboard","language":["Javascript","Python"],"description":"Monitoring valve conditions in real time.","technologies":["React","Socket.IO","MQTT","Webpack","MongoDB"],"url":"","year":"2016","country":["Chile","CHL"]},{"name":"Cloud based ERP","language":["Javascript","PHP"],"description":"SaaS ERP for small to medium businesses ","technologies":["JQuery","Symfony","PostgreSQL"],"url":"","year":"2015","country":["Chile","CHL"]}]')},108:function(e){e.exports=JSON.parse('[{"name":"La Espa\xf1ola","description":"Domain name, server setup and temporary website for their new beverage.","technologies":["WordPress 5","Custom CSS","2019"],"link":"site1x1200.png","url":"http://www.sangrialaespa\xf1ola.cl"},{"name":"Andino","description":"Domain name, server setup and theming for a small logistics business.","technologies":["WordPress 5","Custom CSS","2018"],"link":"site2x1200.png","url":"http://www.transportesandino.cl"}]')},113:function(e,t,a){e.exports=a(253)},118:function(e,t,a){},247:function(e,t,a){var n={"./site1x1200.png":248,"./site2x1200.png":249};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=247},248:function(e,t,a){e.exports=a.p+"static/media/site1x1200.8a9b1061.png"},249:function(e,t,a){e.exports=a.p+"static/media/site2x1200.daa4c049.png"},253:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(104),i=a.n(o),l=(a(118),a(1)),s=a(255),c=a(8);var m=Object(c.a)(),p=a(105),d=a(57);let u=d.a.timeline();var g=(e,t,a,n)=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.getElementsByTagName("body")[0].scrollIntoView({block:"start"}),d.a.to("body",0,{css:{visibility:"visible"}}),u.from([t.current,a.current],.75,{y:120,ease:"power4.out",delay:.5,skewY:7,stagger:{amount:.3}}).to(n.current,1,{autoAlpha:0,ease:"expo.inOut"}).to("body",0,{css:{"overflow-y":"auto"},onComplete:e})},b=a(107),h=a(108),f=l.b.nav`
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eee;
  color: #000;
  z-index: 7;
`;var x=l.b.div`
  font-weight: 600;
  font-size: 1em;
  margin: auto 0;

  animation: Fade 0.5s ease-out;
  opacity: 1;

  @keyframes Fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    order: 0;
  }
`;const v={giant:1920,desktop:1440,tablet:1200,phablet:992,phone:639},w=Object.keys(v).reduce((e,t)=>{const a=v[t];return e[t]=function(){return l.a`
    @media (max-width: ${a}px) {
      ${Object(l.a)(...arguments)};
    }
  `},e},{});var y=l.b.div`
  display: flex;
  margin: 0 8rem;
  justify-content: space-between;
  height: 5.6rem;

  ${w.tablet`
    margin: 0 4rem;
  `}
`;var E=function(e){let{triggerLogo:t,open:a,setOpen:n}=e;return r.a.createElement(f,null,r.a.createElement(y,null,t?r.a.createElement(x,null,"Mat\xedas Labra"):r.a.createElement("p",null,"M.L")))};const k=l.b.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 8;
  left: 0;
`,$=l.b.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  bottom: 0;
  left: 0;
  right: 0;
`;var C=Object(n.forwardRef)((e,t)=>r.a.createElement(k,{ref:t},r.a.createElement($,null))),j=a(56);var O=l.b.a`
  color: #000;

  &:hover {
    color: #000;
  }
`;var S=l.b.h2`
  font-size: 2rem;
  line-height: 1;
  text-transform: uppercase;
`;var z=l.b.h3`
  font-size: 1.5rem;
  line-height: 1;
  margin: 0;
  margin: 8px 0px;
`;var L=Object(l.b)(z)`
  display: block;
  margin: 0px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;

  ${w.phablet`
    display: block;
    ${""}
    padding: 1.25em 0;
    ${""}
    font-size: 1em;
    z-index:3;
  `}
`;var R=l.b.div`
  margin-bottom: 8px;
  height: 1em;
  position: relative;
  overflow: hidden;
  mix-blend-mode: difference;

  span {
    position: absolute;
  
  }

  ${w.phone`
    margin-bottom: 2px;
    height: 44px;
  `}


  ${e=>e.animationComplete&&l.a`&:nth-child(2) > span{
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 90%;
    animation: Animation 0.5s ease-in;
  `}}

  @keyframes Animation {
    0%{background-position: 0% 130%}
    50%{background-position: 0% 100%;}
    100%{background-position: 0% 90%;}
  }


`;var P=l.b.a`
  flex: 1 0 45%;
  display: block;
  color: #000;
  margin: 1rem 1rem;
  padding: 2.5rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid #000;
  cursor: ${e=>"#"===e.href?"default":"pointer"};
  // Scale the item and reset the opacity (previously set to 0.5 by List component )
  &:hover {
    ${""}
    opacity: 1 !important;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease-in;
  }

  ${w.tablet`
    
    transition: none;
  
    &:hover{
      transform: none;
      box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
    }

    &:first-child{

    }
  `}

  ${w.phablet`
    flex: 1 0 100%;
  `}
`;var A=l.b.a`
  display: flex;
  flex: 1 0 45%;
  color: #000;
  margin: 1rem 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  min-height: 100%;
  border: 2px solid black;

  // Scale the item and reset the opacity (previously set to 0.5 by List component )
  &:hover {
    ${""}
    opacity: 1 !important;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease-in;
  }

  ${w.tablet`
    
    transition: none;
  
    &:hover{
      transform: none;
      box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
    }

  `}

  ${w.phablet`
    flex-direction: column;
    flex: 1 0 100%;
  `}
`;var D=l.b.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -1rem;
  margin-right: -1rem;

  // Changes all items opacity when List section gets hover so the main (under the cursor ) List > Card gets attention
  &:hover > ${P}, &:hover > ${A} {
    opacity: 0.5;
  }
  ${w.tablet`
    flex-direction:column;
    &:hover > ${P}{
      opacity: 1;
    }
  `}
`;var I=function(e){let{items:t,component:a}=e;const n=a,o=e=>{e.preventDefault();const t="A"!==e.target.tag?e.target.closest("a"):e.target;"#"!==t.href.split("/").pop()&&window.open(t.href,"_blank")};return r.a.createElement(D,null,t.map((e,t)=>r.a.createElement(n,{item:e,key:t,onClickAction:o})))};var J=l.b.section`
  display: flex;
  flex: 1;
  padding: 4rem 5rem;
`;var M=Object(l.b)(J)`
  flex-direction: column;
  padding: 8rem;
  padding-top: 4rem;
  flex: 1 1 auto;
  ${""}

  ${w.tablet`
    padding: 4rem;
  `}
  
  ${w.phablet`
    ${""}
    position: static;
    height: auto;
    width: 100%;
  `}

`;var _=Object(l.b)(J)`
  flex-direction: column;
  flex: 1 0 auto;
  padding: 8rem;
  padding-right: 0rem;
  padding-bottom: 4rem;
  background-color: white;
  width: 634px;

  ${w.tablet`
    padding: 4rem 0rem 4rem 4rem;
    flex: 1 0 auto;
    width: 534px;
  `}
  ${w.phablet`
    padding: 4rem;
    height: auto; //fallback
    flex: 1 0 auto; // auto height
    position: static;
    width: 100%;
  `}
`;var H=l.b.div`
  display: flex;
  margin-top: 4rem;

  ${w.tablet`
    margin-top: 4rem;
  `}
`;var W=Object(l.b)(O)`
  text-align: center;
  display: inline-block;
  font-weight: 300;
  margin-right: 2rem;

  & > svg {
    display: inline-block;
    font-size: 2rem;
    vertical-align: middle;
    margin-right: 1rem;
  }
`;var F=l.b.h1`
  font-size: 6em;
  line-height: 1;
  margin: 0;

  ${w.tablet`
    font-size: 5.3em;
  `}

  ${w.phone`
    font-size: 2.9em;
  `}
`;var B=Object(l.b)(F)`
  font-weight: 700;
  z-index: 10;
  color: white;
  mix-blend-mode: difference;
  margin-left: -5px;

  ${e=>e.animationComplete&&"\n    mix-blend-mode: normal;\n    color: black;\n  "}}
}
`;var N=l.b.div`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: justify;
`;var T=l.b.p`
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
`;var Q=l.b.p`
  font-size: 0.5em;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 800;
`;var G=function(e){let{item:t,onClickAction:a}=e;return r.a.createElement(P,{href:t.url?t.url:"#",target:t.url?"_blank":"_self",rel:"noopener noreferrer",onClick:a},r.a.createElement(T,null,t.language?`${t.language.join(" - ")} ${t.url}`:""),r.a.createElement(z,null,t.name),r.a.createElement("p",null,t.description),r.a.createElement(Q,null,t.technologies?t.technologies.join(" - "):""))};var U=l.b.footer`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 800;
`;var K=l.b.div`
  display: flex;
  flex: 1 0 ${e=>e.basis};
  flex-direction: column;
  align-items: stretch;
  padding: ${e=>e.padding?e.padding:"0"};
  & > img {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    height: 100%;
  }

  & > p {
    font-size: 1.25rem;
  }
`;var V=function(e){let{item:t,onClickAction:n}=e,o=a(247)("./"+t.link);return r.a.createElement(A,{href:t.url,onClick:n},r.a.createElement(K,{basis:"45%"},r.a.createElement("img",{src:o,alt:"project"})),r.a.createElement(K,{basis:"55%",padding:"2.5rem"},r.a.createElement(z,null,t.name),r.a.createElement("p",null,t.description),r.a.createElement(U,null,t.technologies?t.technologies.join(" - "):"")))};var Y=l.b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  overflow-y: unset;

  ${w.giant`
    width: 1440px;
  `}
  
  ${w.desktop`
    width: 100%;
  `}
  
  ${w.phablet`
    flex-direction: column;
  `}
  
`;var q=l.b.footer`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 800;
  text-align: center;
  padding: 2rem 0rem;
`;function X(){const[e,t]=Object(n.useState)(!1),a=Object(n.useRef)(null),o=Object(n.useRef)(null),i=Object(n.useRef)(null),l=()=>{t(!0)};Object(n.useEffect)(()=>{g(l,a,o,i)},[]);const s=[Object(n.useRef)(null),Object(n.useRef)(null),Object(n.useRef)(null)],c=Object(p.a)({offsetPx:-16,sectionElementRefs:s});return r.a.createElement(r.a.Fragment,null,!1===e?r.a.createElement(C,{ref:i}):"",r.a.createElement(E,{triggerLogo:c>=1}),r.a.createElement(Y,null,r.a.createElement(_,{animationComplete:e},r.a.createElement(B,{animationComplete:e,ref:s[0]},r.a.createElement(R,{animationComplete:e},r.a.createElement("span",{ref:a}," Hello, I'm ")),r.a.createElement(R,{animationComplete:e},r.a.createElement("span",{ref:o}," Mat\xedas Labra."))),r.a.createElement(N,{ref:s[1]},r.a.createElement("p",null,"Chilean Software Engineer based in Adelaide, Australia.")),r.a.createElement(H,null,r.a.createElement(W,{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/matias-labra-a2bb4a172/"},r.a.createElement(j.b,null),"LinkedIn"),r.a.createElement(W,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/matiaslabra"},r.a.createElement(j.a,null),"GitHub"))),r.a.createElement(M,{animationComplete:e,ref:s[2]},r.a.createElement("div",{id:"projects"},r.a.createElement(S,null,"Recent works"),r.a.createElement(L,null,"Full Stack"),r.a.createElement(I,{items:b,component:G}),r.a.createElement(L,null,"Front End"),r.a.createElement(I,{items:h,component:V})))),r.a.createElement(q,null,"Made with"," ",r.a.createElement("span",{role:"img","aria-label":"coffee and heart emoji"},"\u2665\ufe0f & \u2615\ufe0f")," ","with"," ",r.a.createElement(O,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/matiaslabra/matiaslabra.github.io"},"React and Styled Components")))}const Z=l.b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;var ee=function(){return r.a.createElement(Z,null,r.a.createElement(s.b,{history:m},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[113,1,2]]]);
//# sourceMappingURL=main.50fde5cd.chunk.js.map