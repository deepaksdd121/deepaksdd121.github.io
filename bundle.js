!function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=5)}([function(t,e,n){},function(t,e){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e})},function(t,e){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})},function(t,e){var n=!1;document.getElementById("navbar__menu-button").addEventListener("click",function(t){n?document.getElementById("nav-list").classList.remove("responsive"):document.getElementById("nav-list").classList.add("responsive"),n=!n})},function(t,e){document.getElementById("mapView").addEventListener("click",function(){window.open("https://www.google.com/maps/place/Hotel+Krishna+Palace/@28.6507264,77.1894002,17z/data=!4m5!3m4!1s0x390d029c4eb2b1f5:0xf07d572185b68f52!8m2!3d28.6512066!4d77.1911275","_blank")})},function(t,e,n){"use strict";n.r(e);n(0),n(1),n(2);var i=window,wi=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},r=window,Ci=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Mi(){for(var t,e,n,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(t=arguments[r]))for(e in t)i===(n=t[e])||void 0!==n&&(i[e]=n);return i}function Ti(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ei(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Bi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var o=document.documentElement;function Li(t){var e="";return t.fake&&(e=o.style.overflow,t.style.background="",t.style.overflow=o.style.overflow="hidden",o.appendChild(t)),e}function Si(t,e){t.fake&&(t.remove(),o.style.overflow=e,o.offsetHeight)}function Ai(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Ni(t){return("insertRule"in t?t.cssRules:t.rules).length}function Oi(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var a="classList"in document.createElement("_"),Di=a?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Hi=a?function(t,e){Di(t,e)||t.classList.add(e)}:function(t,e){Di(t,e)||(t.className+=" "+e)},Pi=a?function(t,e){Di(t,e)&&t.classList.remove(e)}:function(t,e){Di(t,e)&&(t.className=t.className.replace(e,""))};function ki(t,e){return t.hasAttribute(e)}function Ii(t,e){return t.getAttribute(e)}function u(t){return void 0!==t.item}function Ri(t,e){if(t=u(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function zi(t,e){t=u(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function Wi(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function ji(t,e){"none"!==t.style.display&&(t.style.display="none")}function Fi(t,e){"none"===t.style.display&&(t.style.display="")}function qi(t){return"none"!==window.getComputedStyle(t).display}function _i(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),r=(e.length,0);r<e.length;r++){var o=e[r];if(void 0!==t.style[o])return o}return!1}function Vi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var l=!1;try{var s=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,s)}catch(t){}var c=!!l&&{passive:!0};function Gi(t,e,n){for(var i in e){var r=0<=["touchstart","touchmove"].indexOf(i)&&!n&&c;t.addEventListener(i,e[i],r)}}function Ki(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&c;t.removeEventListener(n,e[n],i)}}function Qi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}var Xi=function(A){A=Mi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},A||{});var N=document,h=window,r={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=A.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var y=e.tC?Ti(e.tC):Ei(e,"tC",function(){var t=document,e=Bi(),n=Li(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var o,a="(10px * 10)",u=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],l=0;l<3;l++)if(o=u[l],i.style.width=o,100===i.offsetWidth){r=o.replace(a,"");break}}catch(t){}return e.fake?Si(e,n):i.remove(),r}(),n),g=e.tPL?Ti(e.tPL):Ei(e,"tPL",function(){var t,e=document,n=Bi(),i=Li(n),r=e.createElement("div"),o=e.createElement("div"),a="";r.className="tns-t-subp2",o.className="tns-t-ct";for(var u=0;u<70;u++)a+="<div></div>";return o.innerHTML=a,r.appendChild(o),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?Si(n,i):r.remove(),t}(),n),O=e.tMQ?Ti(e.tMQ):Ei(e,"tMQ",function(){var t,e=document,n=Bi(),i=Li(n),r=e.createElement("div"),o=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",r.className="tns-mq-test",n.appendChild(o),n.appendChild(r),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?Si(n,i):r.remove(),"absolute"===t}(),n),o=e.tTf?Ti(e.tTf):Ei(e,"tTf",_i("transform"),n),a=e.t3D?Ti(e.t3D):Ei(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Bi(),r=Li(i),o=n.createElement("p"),a=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(a),i.fake?Si(i,r):o.remove(),void 0!==e&&0<e.length&&"none"!==e}(o),n),x=e.tTDu?Ti(e.tTDu):Ei(e,"tTDu",_i("transitionDuration"),n),u=e.tTDe?Ti(e.tTDe):Ei(e,"tTDe",_i("transitionDelay"),n),b=e.tADu?Ti(e.tADu):Ei(e,"tADu",_i("animationDuration"),n),l=e.tADe?Ti(e.tADe):Ei(e,"tADe",_i("animationDelay"),n),s=e.tTE?Ti(e.tTE):Ei(e,"tTE",Vi(x,"Transition"),n),c=e.tAE?Ti(e.tAE):Ei(e,"tAE",Vi(b,"Animation"),n),f=h.console&&"function"==typeof h.console.warn,d=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],v={};if(d.forEach(function(t){if("string"==typeof A[t]){var e=A[t],n=N.querySelector(e);if(v[t]=e,!n||!n.nodeName)return void(f&&console.warn("Can't find",A[t]));A[t]=n}}),!(A.container.children.length<1)){var D=A.responsive,H=A.nested,P="carousel"===A.mode;if(D){0 in D&&(A=Mi(A,D[0]),delete D[0]);var p={};for(var m in D){var w=D[m];w="number"==typeof w?{items:w}:w,p[m]=w}D=p,p=null}if(P||function t(e){for(var n in e)P||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(A),!P){A.axis="horizontal",A.slideBy="page",A.edgePadding=!1;var k=A.animateIn,I=A.animateOut,C=A.animateDelay,R=A.animateNormal}var M,z,W="horizontal"===A.axis,T=N.createElement("div"),j=N.createElement("div"),F=A.container,E=F.parentNode,B=F.outerHTML,q=F.children,_=q.length,V=Ze(),G=!1;D&&xn(),P&&(F.className+=" tns-vpfix");var L,S,K,Q,X,Y=A.autoWidth,J=nn("fixedWidth"),U=nn("edgePadding"),Z=nn("gutter"),$=tn(),tt=nn("center"),et=Y?1:Math.floor(nn("items")),nt=nn("slideBy"),it=A.viewportMax||A.fixedWidthViewportWidth,rt=nn("arrowKeys"),ot=nn("speed"),at=A.rewind,ut=!at&&A.loop,lt=nn("autoHeight"),st=nn("controls"),ct=nn("controlsText"),ft=nn("nav"),dt=nn("touch"),vt=nn("mouseDrag"),pt=nn("autoplay"),mt=nn("autoplayTimeout"),ht=nn("autoplayText"),yt=nn("autoplayHoverPause"),gt=nn("autoplayResetOnVisibility"),xt=function(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}(),bt=A.lazyload,wt=(A.lazyloadSelector,[]),Ct=ut?(Q=function(){{if(Y||J&&!it)return _-1;var t=J?"fixedWidth":"items",e=[];if((J||A[t]<_)&&e.push(A[t]),D)for(var n in D){var i=D[n][t];i&&(J||i<_)&&e.push(i)}return e.length||e.push(0),Math.ceil(J?it/Math.min.apply(null,e):Math.max.apply(null,e))}}(),X=P?Math.ceil((5*Q-_)/2):4*Q-_,X=Math.max(Q,X),en("edgePadding")?X+1:X):0,Mt=P?_+2*Ct:_+Ct,Tt=!(!J&&!Y||ut),Et=J?Kn():null,Bt=!P||!ut,Lt=W?"left":"top",St="",At="",Nt=J?function(){return tt&&!ut?_-1:Math.ceil(-Et/(J+Z))}:Y?function(){for(var t=Mt;t--;)if(L[t]>=-Et)return t}:function(){return tt&&P&&!ut?_-1:ut||P?Math.max(0,Mt-Math.ceil(et)):Mt-1},Ot=Ye(nn("startIndex")),Dt=Ot,Ht=(Xe(),0),Pt=Y?null:Nt(),kt=A.preventActionWhenRunning,It=A.swipeAngle,Rt=!It||"?",zt=!1,Wt=A.onInit,jt=new Qi,Ft=" tns-slider tns-"+A.mode,qt=F.id||function(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}(),_t=nn("disable"),Vt=!1,Gt=A.freezable,Kt=!(!Gt||Y)&&gn(),Qt=!1,Xt={click:ei,keydown:function(t){t=si(t);var e=[r.LEFT,r.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?me.disabled||ei(t,-1):he.disabled||ei(t,1))}},Yt={click:function(t){if(zt){if(kt)return;$n()}var e=ci(t=si(t));for(;e!==be&&!ki(e,"data-nav");)e=e.parentNode;if(ki(e,"data-nav")){var n=Te=Number(Ii(e,"data-nav")),i=J||Y?n*_/Ce:n*et,r=ie?n:Math.min(Math.ceil(i),_-1);ti(r,t),Ee===n&&(Oe&&ai(),Te=-1)}},keydown:function(t){t=si(t);var e=N.activeElement;if(!ki(e,"data-nav"))return;var n=[r.LEFT,r.RIGHT,r.ENTER,r.SPACE].indexOf(t.keyCode),i=Number(Ii(e,"data-nav"));0<=n&&(0===n?0<i&&li(xe[i-1]):1===n?i<Ce-1&&li(xe[i+1]):ti(Te=i,t))}},Jt={mouseover:function(){Oe&&(ii(),De=!0)},mouseout:function(){De&&(ni(),De=!1)}},Ut={visibilitychange:function(){N.hidden?Oe&&(ii(),Pe=!0):Pe&&(ni(),Pe=!1)}},Zt={keydown:function(t){t=si(t);var e=[r.LEFT,r.RIGHT].indexOf(t.keyCode);0<=e&&ei(t,0===e?-1:1)}},$t={touchstart:pi,touchmove:mi,touchend:hi,touchcancel:hi},te={mousedown:pi,mousemove:mi,mouseup:hi,mouseleave:hi},ee=en("controls"),ne=en("nav"),ie=!!Y||A.navAsThumbnails,re=en("autoplay"),oe=en("touch"),ae=en("mouseDrag"),ue="tns-slide-active",le="tns-complete",se={load:function(t){Sn(ci(t))},error:function(t){!function(t){Hi(t,"failed"),An(t)}(ci(t))}},ce="force"===A.preventScrollOnTouch;if(ee)var fe,de,ve=A.controlsContainer,pe=A.controlsContainer?A.controlsContainer.outerHTML:"",me=A.prevButton,he=A.nextButton,ye=A.prevButton?A.prevButton.outerHTML:"",ge=A.nextButton?A.nextButton.outerHTML:"";if(ne)var xe,be=A.navContainer,we=A.navContainer?A.navContainer.outerHTML:"",Ce=Y?_:gi(),Me=0,Te=-1,Ee=Ue(),Be=Ee,Le="tns-nav-active",Se="Carousel Page ",Ae=" (Current Slide)";if(re)var Ne,Oe,De,He,Pe,ke="forward"===A.autoplayDirection?1:-1,Ie=A.autoplayButton,Re=A.autoplayButton?A.autoplayButton.outerHTML:"",ze=["<span class='tns-visually-hidden'>"," animation</span>"];if(oe||ae)var We,je,Fe={},qe={},_e=!1,Ve=W?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Y||Qe(_t||Kt),o&&(Lt=o,St="translate",At=a?(St+=W?"3d(":"3d(0px, ",W?", 0px, 0px)":", 0px)"):(St+=W?"X(":"Y(",")")),P&&(F.className=F.className.replace("tns-vpfix","")),function(){en("gutter");T.className="tns-outer",j.className="tns-inner",T.id=qt+"-ow",j.id=qt+"-iw",""===F.id&&(F.id=qt);Ft+=g||Y?" tns-subpixel":" tns-no-subpixel",Ft+=y?" tns-calc":" tns-no-calc",Y&&(Ft+=" tns-autowidth");Ft+=" tns-"+A.axis,F.className+=Ft,P?((M=N.createElement("div")).id=qt+"-mw",M.className="tns-ovh",T.appendChild(M),M.appendChild(j)):T.appendChild(j);if(lt){var t=M||j;t.className+=" tns-ah"}if(E.insertBefore(T,F),j.appendChild(F),Oi(q,function(t,e){Hi(t,"tns-item"),t.id||(t.id=qt+"-item"+e),!P&&R&&Hi(t,R),Ri(t,{"aria-hidden":"true",tabindex:"-1"})}),Ct){for(var e=N.createDocumentFragment(),n=N.createDocumentFragment(),i=Ct;i--;){var r=i%_,o=q[r].cloneNode(!0);if(zi(o,"id"),n.insertBefore(o,n.firstChild),P){var a=q[_-1-r].cloneNode(!0);zi(a,"id"),e.appendChild(a)}}F.insertBefore(e,F.firstChild),F.appendChild(n),q=F.children}}(),function(){if(!P)for(var t=Ot,e=Ot+Math.min(_,et);t<e;t++){var n=q[t];n.style.left=100*(t-Ot)/et+"%",Hi(n,k),Pi(n,R)}W&&(g||Y?(Ai(xt,"#"+qt+" > .tns-item","font-size:"+h.getComputedStyle(q[0]).fontSize+";",Ni(xt)),Ai(xt,"#"+qt,"font-size:0;",Ni(xt))):P&&Oi(q,function(t,e){t.style.marginLeft=function(t){return y?y+"("+100*t+"% / "+Mt+")":100*t/Mt+"%"}(e)}));if(O){if(x){var i=M&&A.autoHeight?sn(A.speed):"";Ai(xt,"#"+qt+"-mw",i,Ni(xt))}i=rn(A.edgePadding,A.gutter,A.fixedWidth,A.speed,A.autoHeight),Ai(xt,"#"+qt+"-iw",i,Ni(xt)),P&&(i=W&&!Y?"width:"+on(A.fixedWidth,A.gutter,A.items)+";":"",x&&(i+=sn(ot)),Ai(xt,"#"+qt,i,Ni(xt))),i=W&&!Y?an(A.fixedWidth,A.gutter,A.items):"",A.gutter&&(i+=un(A.gutter)),P||(x&&(i+=sn(ot)),b&&(i+=cn(ot))),i&&Ai(xt,"#"+qt+" > .tns-item",i,Ni(xt))}else{Pn(),j.style.cssText=rn(U,Z,J,lt),P&&W&&!Y&&(F.style.width=on(J,Z,et));var i=W&&!Y?an(J,Z,et):"";Z&&(i+=un(Z)),i&&Ai(xt,"#"+qt+" > .tns-item",i,Ni(xt))}if(D&&O)for(var r in D){r=parseInt(r);var o=D[r],i="",a="",u="",l="",s="",c=Y?null:nn("items",r),f=nn("fixedWidth",r),d=nn("speed",r),v=nn("edgePadding",r),p=nn("autoHeight",r),m=nn("gutter",r);x&&M&&nn("autoHeight",r)&&"speed"in o&&(a="#"+qt+"-mw{"+sn(d)+"}"),("edgePadding"in o||"gutter"in o)&&(u="#"+qt+"-iw{"+rn(v,m,f,d,p)+"}"),P&&W&&!Y&&("fixedWidth"in o||"items"in o||J&&"gutter"in o)&&(l="width:"+on(f,m,c)+";"),x&&"speed"in o&&(l+=sn(d)),l&&(l="#"+qt+"{"+l+"}"),("fixedWidth"in o||J&&"gutter"in o||!P&&"items"in o)&&(s+=an(f,m,c)),"gutter"in o&&(s+=un(m)),!P&&"speed"in o&&(x&&(s+=sn(d)),b&&(s+=cn(d))),s&&(s="#"+qt+" > .tns-item{"+s+"}"),(i=a+u+l+s)&&xt.insertRule("@media (min-width: "+r/16+"em) {"+i+"}",xt.cssRules.length)}}(),fn();var Ge=ut?P?function(){var t=Ht,e=Pt;t+=nt,e-=nt,U?(t+=1,e-=1):!J||($+Z)%(J+Z)&&(e-=1),Ct&&(e<Ot?Ot-=_:Ot<t&&(Ot+=_))}:function(){if(Pt<Ot)for(;Ht+_<=Ot;)Ot-=_;else if(Ot<Ht)for(;Ot<=Pt-_;)Ot+=_}:function(){Ot=Math.max(Ht,Math.min(Pt,Ot))},Ke=P?function(){Vn(F,""),x||!ot?(Yn(),ot&&qi(F)||$n()):function(e,n,i,r,t,o,a){var u=Math.min(o,10),l=0<=t.indexOf("%")?"%":"px",s=(t=t.replace(l,""),Number(e.style[n].replace(i,"").replace(r,"").replace(l,""))),c=(t-s)/o*u;setTimeout(function t(){o-=u,s+=c,e.style[n]=i+s+l+r,0<o?setTimeout(t,u):a()},u)}(F,Lt,St,At,Qn(),ot,$n),W||yi()}:function(){wt=[];var t={};t[s]=t[c]=$n,Ki(q[Dt],t),Gi(q[Ot],t),Jn(Dt,k,I,!0),Jn(Ot,R,k),s&&c&&ot&&qi(F)||$n()};return{version:"2.9.2",getInfo:bi,events:jt,goTo:ti,play:function(){pt&&!Oe&&(oi(),He=!1)},pause:function(){Oe&&(ai(),He=!0)},isOn:G,updateSliderHeight:In,refresh:fn,destroy:function(){if(xt.disabled=!0,xt.ownerNode&&xt.ownerNode.remove(),Ki(h,{resize:hn}),rt&&Ki(N,Zt),ve&&Ki(ve,Xt),be&&Ki(be,Yt),Ki(F,Jt),Ki(F,Ut),Ie&&Ki(Ie,{click:ui}),pt&&clearInterval(Ne),P&&s){var t={};t[s]=$n,Ki(F,t)}dt&&Ki(F,$t),vt&&Ki(F,te);var o=[B,pe,ye,ge,we,Re];for(var e in d.forEach(function(t,e){var n="container"===t?T:A[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,r=n.parentNode;n.outerHTML=o[e],A[t]=i?i.nextElementSibling:r.firstElementChild}}),d=k=I=C=R=W=T=j=F=E=B=q=_=z=V=Y=J=U=Z=$=et=nt=it=rt=ot=at=ut=lt=xt=bt=L=wt=Ct=Mt=Tt=Et=Bt=Lt=St=At=Nt=Ot=Dt=Ht=Pt=It=Rt=zt=Wt=jt=Ft=qt=_t=Vt=Gt=Kt=Qt=Xt=Yt=Jt=Ut=Zt=$t=te=ee=ne=ie=re=oe=ae=ue=le=se=S=st=ct=ve=pe=me=he=fe=de=ft=be=we=xe=Ce=Me=Te=Ee=Be=Le=Se=Ae=pt=mt=ke=ht=yt=Ie=Re=gt=ze=Ne=Oe=De=He=Pe=Fe=qe=We=_e=je=Ve=dt=vt=null,this)"rebuild"!==e&&(this[e]=null);G=!1},rebuild:function(){return Xi(Mi(A,v))}}}function Qe(t){t&&(st=ft=dt=vt=rt=pt=yt=gt=!1)}function Xe(){for(var t=P?Ot-Ct:Ot;t<0;)t+=_;return t%_+1}function Ye(t){return t=t?Math.max(0,Math.min(ut?_-1:_-et,t)):0,P?t+Ct:t}function Je(t){for(null==t&&(t=Ot),P&&(t-=Ct);t<0;)t+=_;return Math.floor(t%_)}function Ue(){var t,e=Je();return t=ie?e:J||Y?Math.ceil((e+1)*Ce/_-1):Math.floor(e/et),!ut&&P&&Ot===Pt&&(t=Ce-1),t}function Ze(){return h.innerWidth||N.documentElement.clientWidth||N.body.clientWidth}function $e(t){return"top"===t?"afterbegin":"beforeend"}function tn(){var t=U?2*U-Z:0;return function t(e){var n,i,r=N.createElement("div");return e.appendChild(r),i=(n=r.getBoundingClientRect()).right-n.left,r.remove(),i||t(e.parentNode)}(E)-t}function en(t){if(A[t])return!0;if(D)for(var e in D)if(D[e][t])return!0;return!1}function nn(t,e){if(null==e&&(e=V),"items"===t&&J)return Math.floor(($+Z)/(J+Z))||1;var n=A[t];if(D)for(var i in D)e>=parseInt(i)&&t in D[i]&&(n=D[i][t]);return"slideBy"===t&&"page"===n&&(n=nn("items")),P||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function rn(t,e,n,i,r){var o="";if(void 0!==t){var a=t;e&&(a-=e),o=W?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var u="-"+e+"px";o="margin: 0 "+(W?u+" 0 0":"0 "+u+" 0")+";"}return!P&&r&&x&&i&&(o+=sn(i)),o}function on(t,e,n){return t?(t+e)*Mt+"px":y?y+"("+100*Mt+"% / "+n+")":100*Mt/n+"%"}function an(t,e,n){var i;if(t)i=t+e+"px";else{P||(n=Math.floor(n));var r=P?Mt:n;i=y?y+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==H?i+";":i+" !important;"}function un(t){var e="";!1!==t&&(e=(W?"padding-":"margin-")+(W?"right":"bottom")+": "+t+"px;");return e}function ln(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function sn(t){return ln(x,18)+"transition-duration:"+t/1e3+"s;"}function cn(t){return ln(b,17)+"animation-duration:"+t/1e3+"s;"}function fn(){if(en("autoHeight")||Y||!W){var t=F.querySelectorAll("img");Oi(t,function(t){var e=t.src;e&&e.indexOf("data:image")<0?(Gi(t,se),t.src="",t.src=e,Hi(t,"loading")):bt||Sn(t)}),wi(function(){Dn(Wi(t),function(){S=!0})}),!Y&&W&&(t=Nn(Ot,Math.min(Ot+et-1,Mt-1))),bt?dn():wi(function(){Dn(Wi(t),dn)})}else P&&Xn(),pn(),mn()}function dn(){if(Y){var e=ut?Ot:_-1;!function t(){q[e-1].getBoundingClientRect().right.toFixed(2)===q[e].getBoundingClientRect().left.toFixed(2)?vn():setTimeout(function(){t()},16)}()}else vn()}function vn(){W&&!Y||(Rn(),Y?(Et=Kn(),Gt&&(Kt=gn()),Pt=Nt(),Qe(_t||Kt)):yi()),P&&Xn(),pn(),mn()}function pn(){if(zn(),T.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+En()+"</span>  of "+_+"</div>"),K=T.querySelector(".tns-liveregion .current"),re){var t=pt?"stop":"start";Ie?Ri(Ie,{"data-action":t}):A.autoplayButtonOutput&&(T.insertAdjacentHTML($e(A.autoplayPosition),'<button data-action="'+t+'">'+ze[0]+t+ze[1]+ht[0]+"</button>"),Ie=T.querySelector("[data-action]")),Ie&&Gi(Ie,{click:ui}),pt&&(oi(),yt&&Gi(F,Jt),gt&&Gi(F,Ut))}if(ne){if(be)Ri(be,{"aria-label":"Carousel Pagination"}),Oi(xe=be.children,function(t,e){Ri(t,{"data-nav":e,tabindex:"-1","aria-label":Se+(e+1),"aria-controls":qt})});else{for(var e="",n=ie?"":'style="display:none"',i=0;i<_;i++)e+='<button data-nav="'+i+'" tabindex="-1" aria-controls="'+qt+'" '+n+' aria-label="'+Se+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",T.insertAdjacentHTML($e(A.navPosition),e),be=T.querySelector(".tns-nav"),xe=be.children}if(xi(),x){var r=x.substring(0,x.length-18).toLowerCase(),o="transition: all "+ot/1e3+"s";r&&(o="-"+r+"-"+o),Ai(xt,"[aria-controls^="+qt+"-item]",o,Ni(xt))}Ri(xe[Ee],{"aria-label":Se+(Ee+1)+Ae}),zi(xe[Ee],"tabindex"),Hi(xe[Ee],Le),Gi(be,Yt)}ee&&(ve||me&&he||(T.insertAdjacentHTML($e(A.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+qt+'">'+ct[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+qt+'">'+ct[1]+"</button></div>"),ve=T.querySelector(".tns-controls")),me&&he||(me=ve.children[0],he=ve.children[1]),A.controlsContainer&&Ri(ve,{"aria-label":"Carousel Navigation",tabindex:"0"}),(A.controlsContainer||A.prevButton&&A.nextButton)&&Ri([me,he],{"aria-controls":qt,tabindex:"-1"}),(A.controlsContainer||A.prevButton&&A.nextButton)&&(Ri(me,{"data-controls":"prev"}),Ri(he,{"data-controls":"next"})),fe=jn(me),de=jn(he),_n(),ve?Gi(ve,Xt):(Gi(me,Xt),Gi(he,Xt))),bn()}function mn(){if(P&&s){var t={};t[s]=$n,Gi(F,t)}dt&&Gi(F,$t,A.preventScrollOnTouch),vt&&Gi(F,te),rt&&Gi(N,Zt),"inner"===H?jt.on("outerResized",function(){yn(),jt.emit("innerLoaded",bi())}):(D||J||Y||lt||!W)&&Gi(h,{resize:hn}),lt&&("outer"===H?jt.on("innerLoaded",On):_t||On()),Ln(),_t?Mn():Kt&&Cn(),jt.on("indexChanged",Hn),"inner"===H&&jt.emit("innerLoaded",bi()),"function"==typeof Wt&&Wt(bi()),G=!0}function hn(t){wi(function(){yn(si(t))})}function yn(t){if(G){"outer"===H&&jt.emit("outerResized",bi(t)),V=Ze();var e,n=z,i=!1;D&&(xn(),(e=n!==z)&&jt.emit("newBreakpointStart",bi(t)));var r,o,a=et,u=_t,l=Kt,s=rt,c=st,f=ft,d=dt,v=vt,p=pt,m=yt,h=gt,y=Ot;if(e){var g=J,x=lt,b=ct,w=tt,C=ht;if(!O)var M=Z,T=U}if(rt=nn("arrowKeys"),st=nn("controls"),ft=nn("nav"),dt=nn("touch"),tt=nn("center"),vt=nn("mouseDrag"),pt=nn("autoplay"),yt=nn("autoplayHoverPause"),gt=nn("autoplayResetOnVisibility"),e&&(_t=nn("disable"),J=nn("fixedWidth"),ot=nn("speed"),lt=nn("autoHeight"),ct=nn("controlsText"),ht=nn("autoplayText"),mt=nn("autoplayTimeout"),O||(U=nn("edgePadding"),Z=nn("gutter"))),Qe(_t),$=tn(),W&&!Y||_t||(Rn(),W||(yi(),i=!0)),(J||Y)&&(Et=Kn(),Pt=Nt()),(e||J)&&(et=nn("items"),nt=nn("slideBy"),(o=et!==a)&&(J||Y||(Pt=Nt()),Ge())),!e||_t!==u&&(_t?Mn():function(){if(!Vt)return;if(xt.disabled=!1,F.className+=Ft,Xn(),ut)for(var t=Ct;t--;)P&&Fi(q[t]),Fi(q[Mt-t-1]);if(!P)for(var e=Ot,n=Ot+_;e<n;e++){var i=q[e],r=e<Ot+et?k:R;i.style.left=100*(e-Ot)/et+"%",Hi(i,r)}wn(),Vt=!1}()),Gt&&(e||J||Y)&&(Kt=gn())!==l&&(Kt?(Yn(Qn(Ye(0))),Cn()):(function(){if(!Qt)return;U&&O&&(j.style.margin="");if(Ct)for(var t="tns-transparent",e=Ct;e--;)P&&Pi(q[e],t),Pi(q[Mt-e-1],t);wn(),Qt=!1}(),i=!0)),Qe(_t||Kt),pt||(yt=gt=!1),rt!==s&&(rt?Gi(N,Zt):Ki(N,Zt)),st!==c&&(st?ve?Fi(ve):(me&&Fi(me),he&&Fi(he)):ve?ji(ve):(me&&ji(me),he&&ji(he))),ft!==f&&(ft?Fi(be):ji(be)),dt!==d&&(dt?Gi(F,$t,A.preventScrollOnTouch):Ki(F,$t)),vt!==v&&(vt?Gi(F,te):Ki(F,te)),pt!==p&&(pt?(Ie&&Fi(Ie),Oe||He||oi()):(Ie&&ji(Ie),Oe&&ai())),yt!==m&&(yt?Gi(F,Jt):Ki(F,Jt)),gt!==h&&(gt?Gi(N,Ut):Ki(N,Ut)),e){if(J===g&&tt===w||(i=!0),lt!==x&&(lt||(j.style.height="")),st&&ct!==b&&(me.innerHTML=ct[0],he.innerHTML=ct[1]),Ie&&ht!==C){var E=pt?1:0,B=Ie.innerHTML,L=B.length-C[E].length;B.substring(L)===C[E]&&(Ie.innerHTML=B.substring(0,L)+ht[E])}}else tt&&(J||Y)&&(i=!0);if((o||J&&!Y)&&(Ce=gi(),xi()),(r=Ot!==y)?(jt.emit("indexChanged",bi()),i=!0):o?r||Hn():(J||Y)&&(Ln(),zn(),Tn()),o&&!P&&function(){for(var t=Ot+Math.min(_,et),e=Mt;e--;){var n=q[e];Ot<=e&&e<t?(Hi(n,"tns-moving"),n.style.left=100*(e-Ot)/et+"%",Hi(n,k),Pi(n,R)):n.style.left&&(n.style.left="",Hi(n,R),Pi(n,k)),Pi(n,I)}setTimeout(function(){Oi(q,function(t){Pi(t,"tns-moving")})},300)}(),!_t&&!Kt){if(e&&!O&&(lt===autoheightTem&&ot===speedTem||Pn(),U===T&&Z===M||(j.style.cssText=rn(U,Z,J,ot,lt)),W)){P&&(F.style.width=on(J,Z,et));var S=an(J,Z,et)+un(Z);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(xt,Ni(xt)-1),Ai(xt,"#"+qt+" > .tns-item",S,Ni(xt))}lt&&On(),i&&(Xn(),Dt=Ot)}e&&jt.emit("newBreakpointEnd",bi(t))}}function gn(){if(!J&&!Y)return _<=(tt?et-(et-1)/2:et);var t=J?(J+Z)*_:L[_],e=U?$+2*U:$+Z;return tt&&(e-=J?($-J)/2:($-(L[Ot+1]-L[Ot]-Z))/2),t<=e}function xn(){for(var t in z=0,D)(t=parseInt(t))<=V&&(z=t)}function bn(){!pt&&Ie&&ji(Ie),!ft&&be&&ji(be),st||(ve?ji(ve):(me&&ji(me),he&&ji(he)))}function wn(){pt&&Ie&&Fi(Ie),ft&&be&&Fi(be),st&&(ve?Fi(ve):(me&&Fi(me),he&&Fi(he)))}function Cn(){if(!Qt){if(U&&(j.style.margin="0px"),Ct)for(var t="tns-transparent",e=Ct;e--;)P&&Hi(q[e],t),Hi(q[Mt-e-1],t);bn(),Qt=!0}}function Mn(){if(!Vt){if(xt.disabled=!0,F.className=F.className.replace(Ft.substring(1),""),zi(F,["style"]),ut)for(var t=Ct;t--;)P&&ji(q[t]),ji(q[Mt-t-1]);if(W&&P||zi(j,["style"]),!P)for(var e=Ot,n=Ot+_;e<n;e++){var i=q[e];zi(i,["style"]),Pi(i,k),Pi(i,R)}bn(),Vt=!0}}function Tn(){var t=En();K.innerHTML!==t&&(K.innerHTML=t)}function En(){var t=Bn(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function Bn(t){null==t&&(t=Qn());var n,i,r,o=Ot;if(tt||U?(Y||J)&&(i=-(parseFloat(t)+U),r=i+$+2*U):Y&&(i=L[Ot],r=i+$),Y)L.forEach(function(t,e){e<Mt&&((tt||U)&&t<=i+.5&&(o=e),.5<=r-t&&(n=e))});else{if(J){var e=J+Z;n=tt||U?(o=Math.floor(i/e),Math.ceil(r/e-1)):o+Math.ceil($/e)-1}else if(tt||U){var a=et-1;if(n=tt?(o-=a/2,Ot+a/2):Ot+a,U){var u=U*et/$;o-=u,n+=u}o=Math.floor(o),n=Math.ceil(n)}else n=o+et-1;o=Math.max(o,0),n=Math.min(n,Mt-1)}return[o,n]}function Ln(){bt&&!_t&&Nn.apply(null,Bn()).forEach(function(t){if(!Di(t,le)){var e={};e[s]=function(t){t.stopPropagation()},Gi(t,e),Gi(t,se),t.src=Ii(t,"data-src");var n=Ii(t,"data-srcset");n&&(t.srcset=n),Hi(t,"loading")}})}function Sn(t){Hi(t,"loaded"),An(t)}function An(t){Hi(t,"tns-complete"),Pi(t,"loading"),Ki(t,se)}function Nn(t,e){for(var n=[];t<=e;)Oi(q[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function On(){var t=Nn.apply(null,Bn());wi(function(){Dn(t,In)})}function Dn(n,t){return S?t():(n.forEach(function(t,e){Di(t,le)&&n.splice(e,1)}),n.length?void wi(function(){Dn(n,t)}):t())}function Hn(){Ln(),zn(),Tn(),_n(),function(){if(ft&&(Ee=0<=Te?Te:Ue(),Te=-1,Ee!==Be)){var t=xe[Be],e=xe[Ee];Ri(t,{tabindex:"-1","aria-label":Se+(Be+1)}),Pi(t,Le),Ri(e,{"aria-label":Se+(Ee+1)+Ae}),zi(e,"tabindex"),Hi(e,Le),Be=Ee}}()}function Pn(){P&&lt&&(M.style[x]=ot/1e3+"s")}function kn(t,e){for(var n=[],i=t,r=Math.min(t+e,Mt);i<r;i++)n.push(q[i].offsetHeight);return Math.max.apply(null,n)}function In(){var t=lt?kn(Ot,et):kn(Ct,_),e=M||j;e.style.height!==t&&(e.style.height=t+"px")}function Rn(){L=[0];var n=W?"left":"top",i=W?"right":"bottom",r=q[0].getBoundingClientRect()[n];Oi(q,function(t,e){e&&L.push(t.getBoundingClientRect()[n]-r),e===Mt-1&&L.push(t.getBoundingClientRect()[i]-r)})}function zn(){var t=Bn(),n=t[0],i=t[1];Oi(q,function(t,e){n<=e&&e<=i?ki(t,"aria-hidden")&&(zi(t,["aria-hidden","tabindex"]),Hi(t,ue)):ki(t,"aria-hidden")||(Ri(t,{"aria-hidden":"true",tabindex:"-1"}),Pi(t,ue))})}function Wn(t){return t.nodeName.toLowerCase()}function jn(t){return"button"===Wn(t)}function Fn(t){return"true"===t.getAttribute("aria-disabled")}function qn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function _n(){if(st&&!at&&!ut){var t=fe?me.disabled:Fn(me),e=de?he.disabled:Fn(he),n=Ot<=Ht,i=!at&&Pt<=Ot;n&&!t&&qn(fe,me,!0),!n&&t&&qn(fe,me,!1),i&&!e&&qn(de,he,!0),!i&&e&&qn(de,he,!1)}}function Vn(t,e){x&&(t.style[x]=e)}function Gn(t){return null==t&&(t=Ot),Y?($-(U?Z:0)-(L[t+1]-L[t]-Z))/2:J?($-J)/2:(et-1)/2}function Kn(){var t=$+(U?Z:0)-(J?(J+Z)*Mt:L[Mt]);return tt&&!ut&&(t=J?-(J+Z)*(Mt-1)-Gn():Gn(Mt-1)-L[Mt-1]),0<t&&(t=0),t}function Qn(t){var e;if(null==t&&(t=Ot),W&&!Y)if(J)e=-(J+Z)*t,tt&&(e+=Gn());else{var n=o?Mt:et;tt&&(t-=Gn()),e=100*-t/n}else e=-L[t],tt&&Y&&(e+=Gn());return Tt&&(e=Math.max(e,Et)),e+=!W||Y||J?"px":"%"}function Xn(t){Vn(F,"0s"),Yn(t)}function Yn(t){null==t&&(t=Qn()),F.style[Lt]=St+t+At}function Jn(t,e,n,i){var r=t+et;ut||(r=Math.min(r,Mt));for(var o=t;o<r;o++){var a=q[o];i||(a.style.left=100*(o-Ot)/et+"%"),C&&u&&(a.style[u]=a.style[l]=C*(o-t)/1e3+"s"),Pi(a,e),Hi(a,n),i&&wt.push(a)}}function Un(t,e){Bt&&Ge(),Ot===Dt&&!e||(jt.emit("indexChanged",bi()),jt.emit("transitionStart",bi()),lt&&On(),Oe&&t&&0<=["click","keydown"].indexOf(t.type)&&ai(),zt=!0,Ke())}function Zn(t){return t.toLowerCase().replace(/-/g,"")}function $n(t){if(P||zt){if(jt.emit("transitionEnd",bi(t)),!P&&0<wt.length)for(var e=0;e<wt.length;e++){var n=wt[e];n.style.left="",l&&u&&(n.style[l]="",n.style[u]=""),Pi(n,I),Hi(n,R)}if(!t||!P&&t.target.parentNode===F||t.target===F&&Zn(t.propertyName)===Zn(Lt)){if(!Bt){var i=Ot;Ge(),Ot!==i&&(jt.emit("indexChanged",bi()),Xn())}"inner"===H&&jt.emit("innerLoaded",bi()),zt=!1,Dt=Ot}}}function ti(t,e){if(!Kt)if("prev"===t)ei(e,-1);else if("next"===t)ei(e,1);else{if(zt){if(kt)return;$n()}var n=Je(),i=0;if("first"===t?i=-n:"last"===t?i=P?_-et-n:_-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(_-1,t))),i=t-n)),!P&&i&&Math.abs(i)<et){var r=0<i?1:-1;i+=Ht<=Ot+i-_?_*r:2*_*r*-1}Ot+=i,P&&ut&&(Ot<Ht&&(Ot+=_),Pt<Ot&&(Ot-=_)),Je(Ot)!==Je(Dt)&&Un(e)}}function ei(t,e){if(zt){if(kt)return;$n()}var n;if(!e){for(var i=ci(t=si(t));i!==ve&&[me,he].indexOf(i)<0;)i=i.parentNode;var r=[me,he].indexOf(i);0<=r&&(n=!0,e=0===r?-1:1)}if(at){if(Ot===Ht&&-1===e)return void ti("last",t);if(Ot===Pt&&1===e)return void ti("first",t)}e&&(Ot+=nt*e,Y&&(Ot=Math.floor(Ot)),Un(n||t&&"keydown"===t.type?t:null))}function ni(){Ne=setInterval(function(){ei(null,ke)},mt),Oe=!0}function ii(){clearInterval(Ne),Oe=!1}function ri(t,e){Ri(Ie,{"data-action":t}),Ie.innerHTML=ze[0]+t+ze[1]+e}function oi(){ni(),Ie&&ri("stop",ht[1])}function ai(){ii(),Ie&&ri("start",ht[0])}function ui(){He=Oe?(ai(),!0):(oi(),!1)}function li(t){t.focus()}function si(t){return fi(t=t||h.event)?t.changedTouches[0]:t}function ci(t){return t.target||h.event.srcElement}function fi(t){return 0<=t.type.indexOf("touch")}function di(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function vi(){return function(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return 90-e<=i?n="horizontal":i<=e&&(n="vertical"),n}(function(t,e){return Math.atan2(t,e)*(180/Math.PI)}(qe.y-Fe.y,qe.x-Fe.x),It)===A.axis}function pi(t){if(zt){if(kt)return;$n()}pt&&Oe&&ii(),_e=!0,je&&(Ci(je),je=null);var e=si(t);jt.emit(fi(t)?"touchStart":"dragStart",bi(t)),!fi(t)&&0<=["img","a"].indexOf(Wn(ci(t)))&&di(t),qe.x=Fe.x=e.clientX,qe.y=Fe.y=e.clientY,P&&(We=parseFloat(F.style[Lt].replace(St,"")),Vn(F,"0s"))}function mi(t){if(_e){var e=si(t);qe.x=e.clientX,qe.y=e.clientY,P?je||(je=wi(function(){!function t(e){if(!Rt)return void(_e=!1);Ci(je);_e&&(je=wi(function(){t(e)}));"?"===Rt&&(Rt=vi());if(Rt){!ce&&fi(e)&&(ce=!0);try{e.type&&jt.emit(fi(e)?"touchMove":"dragMove",bi(e))}catch(t){}var n=We,i=Ve(qe,Fe);if(!W||J||Y)n+=i,n+="px";else{var r=o?i*et*100/(($+Z)*Mt):100*i/($+Z);n+=r,n+="%"}F.style[Lt]=St+n+At}}(t)})):("?"===Rt&&(Rt=vi()),Rt&&(ce=!0)),ce&&t.preventDefault()}}function hi(i){if(_e){je&&(Ci(je),je=null),P&&Vn(F,""),_e=!1;var t=si(i);qe.x=t.clientX,qe.y=t.clientY;var r=Ve(qe,Fe);if(Math.abs(r)){if(!fi(i)){var n=ci(i);Gi(n,{click:function t(e){di(e),Ki(n,{click:t})}})}P?je=wi(function(){if(W&&!Y){var t=-r*et/($+Z);t=0<r?Math.floor(t):Math.ceil(t),Ot+=t}else{var e=-(We+r);if(e<=0)Ot=Ht;else if(e>=L[Mt-1])Ot=Pt;else for(var n=0;n<Mt&&e>=L[n];)e>L[Ot=n]&&r<0&&(Ot+=1),n++}Un(i,r),jt.emit(fi(i)?"touchEnd":"dragEnd",bi(i))}):Rt&&ei(i,0<r?-1:1)}}"auto"===A.preventScrollOnTouch&&(ce=!1),It&&(Rt="?"),pt&&!Oe&&ni()}function yi(){(M||j).style.height=L[Ot+et]-L[Ot]+"px"}function gi(){var t=J?(J+Z)*_/$:_/et;return Math.min(Math.ceil(t),_)}function xi(){if(ft&&!ie&&Ce!==Me){var t=Me,e=Ce,n=Fi;for(Ce<Me&&(t=Ce,e=Me,n=ji);t<e;)n(xe[t]),t++;Me=Ce}}function bi(t){return{container:F,slideItems:q,navContainer:be,navItems:xe,controlsContainer:ve,hasControls:ee,prevButton:me,nextButton:he,items:et,slideBy:nt,cloneCount:Ct,slideCount:_,slideCountNew:Mt,index:Ot,indexCached:Dt,displayIndex:Xe(),navCurrentIndex:Ee,navCurrentIndexCached:Be,pages:Ce,pagesCached:Me,sheet:xt,isOn:G,event:t||{}}}f&&console.warn("No slides found in",A.container)};Xi({container:".my-slider",items:1,slideBy:1,mouseDrag:!0,navPosition:"bottonm",prevButton:".prevButton",nextButton:".nextButton",navContainer:".navigation",autoplay:!0,autoplayTimeout:4e3,autoplayButtonOutput:!1,speed:1e3}),n(3),n(4)}]);