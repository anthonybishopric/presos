(function(){try{var g=void 0,l=!0,m=null,s=!1,t=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return u.apply(m,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}},w=function(a,b){var c=a.split("."),d=t;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==g?d[e]=b:d=d[e]?d[e]:d[e]={}};window.gbar.tev&&window.gbar.tev(3,"ppal");window.gbar.bls&&window.gbar.bls("ppal");var x=window.gbar;var y={j:1,z:2,w:3,n:4,k:5,p:6,o:7,u:8};var z=[],B=m,C=function(a,b){var c=m;b&&(c={m:b});x.tev&&x.tev(a,"ppal",c)};w("gbar.mddn",function(){for(var a=[],b=0,c;c=z[b];++b)a.push(c[0]);return a.join(",")});var ea=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};var D=function(a,b,c){var d={};d._sn=["ppal",b,c].join(".");window.gbar.logger.ml(a,d)};var E=function(){};E.v=function(){return E.e?E.e:E.e=new E};var fa=m;var I=function(a,b){this.b=this.d="";this.a=[];this.logger=b;a.appListUrl&&(this.d=a.appListUrl);a.hd&&(this.b=a.hd);a.useApiary?w("gbar.alcb",u(this.f,this)):w("gbar.alcb",u(this.g,this));w("gbar.pli",u(this.h,this))};I.prototype.r=function(a,b){var c={ppd:b,ppa:a},d;if(!fa){a:{d=["gbar","logger"];for(var e=t,h;h=d.shift();)if(e[h]!=m)e=e[h];else{d=m;break a}d=e}fa=d||{}}d=fa;"function"==aa(d.il)&&d.il(14,c)};
I.prototype.g=function(a){a?(a=ea(a))?ga(this,a):D(Error("Bad Pikeplace JSON Response"),"ppal","falcb"):D(Error("No Pikeplace JSON response."),"ppal","falcb")};I.prototype.f=function(a){a?(a=a.installedApps)&&ga(this,a):D(Error("apiaryJsonResponse is invalid"),"ppal","aalcb")};var ga=function(a,b){a.a=[];for(var c=0,d;d=b[c];c++){var e=document.createElement("a");e.href=d.url;e.appendChild(document.createTextNode(d.name));e.onclick=u(a.r,a,d.name,a.b);e.target="_blank";a.a.push(e)}};
I.prototype.h=function(){var a=u(this.t,this),b=document.createElement("script");b.id="gbaljsp";b.onerror=b.onload=function(){a();return s};b.onreadystatechange=function(){if("loaded"==this.readyState)return a(),s};b.src=this.d;var c=document.getElementsByTagName("head");c&&c.length?c[0].appendChild(b):document.body&&document.body.appendChild(b)};var ha=function(a,b){this.width=a;this.height=b};var J,ia,K,ja,ka=function(){return t.navigator?t.navigator.userAgent:m};ja=K=ia=J=s;var L;if(L=ka()){var la=t.navigator;J=0==L.indexOf("Opera");ia=!J&&-1!=L.indexOf("MSIE");K=!J&&-1!=L.indexOf("WebKit");ja=!J&&!K&&"Gecko"==la.product}var M=ia,ma=ja,na=K,oa=function(){var a=t.document;return a?a.documentMode:g},pa;
a:{var O="",P;if(J&&t.opera)var qa=t.opera.version,O="function"==typeof qa?qa():qa;else if(ma?P=/rv\:([^\);]+)(\)|;)/:M?P=/MSIE\s+([^\);]+)(\)|;)/:na&&(P=/WebKit\/(\S+)/),P)var va=P.exec(ka()),O=va?va[1]:"";if(M){var wa=oa();if(wa>parseFloat(O)){pa=String(wa);break a}}pa=O}
var xa=pa,ya={},za=function(a){if(!ya[a]){for(var b=0,c=String(xa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var f=c[h]||"",n=d[h]||"",k=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var q=k.exec(f)||["","",""],r=p.exec(n)||["","",""];if(0==q[0].length&&0==r[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==r[1].length?0:parseInt(r[1],10))?-1:(0==q[1].length?0:
parseInt(q[1],10))>(0==r[1].length?0:parseInt(r[1],10))?1:0)||((0==q[2].length)<(0==r[2].length)?-1:(0==q[2].length)>(0==r[2].length)?1:0)||(q[2]<r[2]?-1:q[2]>r[2]?1:0)}while(0==b)}ya[a]=0<=b}},Aa=t.document,Ba=!Aa||!M?g:oa()||("CSS1Compat"==Aa.compatMode?parseInt(xa,10):5);if(ma||M){var Ca;if(Ca=M)Ca=M&&9<=Ba;Ca||ma&&za("1.9.1")}M&&za("9");var Da=function(a){Da[" "](a);return a};Da[" "]=function(){};var Ea=function(a,b){try{return Da(a[b]),l}catch(c){}return s};var Fa,Wa=function(){Ga();w("gbar.addHover",Ha);w("gbar.close",Ia);w("gbar.cls",Ja);w("gbar.tg",Ka);w("gbar.rdd",La);w("gbar.bsy",Ma);x.adh("gbd4",function(){Na(5)});x.adh("gbd5",function(){Na(6)});Va()},Va=function(){var a=S("gbg6"),b=S("gbg4");a&&b&&(T(a,"click",function(){x.logger.il(42)}),T(b,"click",function(){x.logger.il(43)}))},Xa=function(){Fa===g&&(Fa=/MSIE (\d+)\.(\d+);/.exec(navigator.userAgent));return Fa},U="",V=g,Ya=g,Za=g,$a=g,ab=s,W=g,bb="gbzt gbgt gbg0l gbmt gbml1 gbmlb gbqfb gbqfba gbqfbb gbqfqw".split(" "),
T=document.addEventListener?function(a,b,c,d){a.addEventListener(b,c,!!d)}:document.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:function(a,b,c){b="on"+b;var d=a[b];a[b]=function(){var a=d.apply(this,arguments),b=c.apply(this,arguments);return a==g?b:b==g?a:b&&a}},S=function(a){return document.getElementById(a)},cb=function(){var a=S("gbx1");return x.kn&&x.kn()&&a?a.clientWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth},
db=function(a){if(Za===g){var b=document.body.style;Za=!(b.WebkitBoxShadow!==g||b.MozBoxShadow!==g||b.boxShadow!==g||b.BoxShadow!==g)}if(Za){var b=a.id+"-gbxms",c=S(b);c||(c=document.createElement("span"),c.id=b,c.className="gbxms",a.appendChild(c));$a===g&&($a=c.offsetHeight<a.offsetHeight/2);$a&&(c.style.height=a.offsetHeight-5+"px",c.style.width=a.offsetWidth-3+"px")}},eb=function(a,b){if(a){var c=a.style,d=b||S(U);d&&(a.parentNode&&a.parentNode.appendChild(d),d=d.style,d.width=a.offsetWidth+"px",
d.height=a.offsetHeight+"px",d.left=c.left,d.right=c.right)}},X=function(a){try{if(V&&(!x.eh[V]||!(!a&&!window.event?0:(a||window.event).ctrlKey||(a||window.event).metaKey||2==(a||window.event).which))){var b=S(U);b&&(b.style.cssText="",b.style.visibility="hidden");var c=S(V);if(c){c.style.cssText="";c.style.visibility="hidden";var d=c.getAttribute("aria-owner"),e=d?S(d):m;e&&(fb(e.parentNode,"gbto"),e.blur())}Ya&&(Ya(),Ya=g);var h=x.ch[V];if(h){a=0;for(var f;f=h[a];a++)try{f()}catch(n){D(n,"sb",
"cdd1")}}V=g}}catch(k){D(k,"sb","cdd2")}},Na=function(a){var b={s:!V?"o":"c"};-1!=a&&x.logger.il(a,b)},gb=function(a,b){if(Ea(a,"className")){var c=a.className;Y(a,b)||(a.className+=(""!=c?" ":"")+b)}},fb=function(a,b){var c=a.className,d=RegExp("\\s?\\b"+b+"\\b");c&&c.match(d)&&(a.className=c.replace(d,""))},Y=function(a,b){var c=RegExp("\\b"+b+"\\b"),d=a.className;return!(!d||!d.match(c))},Ka=function(a,b,c,d){try{a=a||window.event;c=c||s;if(!U){var e=document.createElement("iframe");e.frameBorder=
"0";e.tabIndex="-1";U=e.id="gbs";e.src="javascript:''";e.setAttribute("aria-hidden","true");e.setAttribute("title","empty");S("gbw").appendChild(e)}ab||(T(document,"click",Ia),T(document,"keyup",hb),ab=l);c||(a.preventDefault&&a.preventDefault(),a.returnValue=s,a.cancelBubble=l);if(!b){b=a.target||a.srcElement;for(var h=b.parentNode.id;!Y(b.parentNode,"gbt");){if("gb"==h)return;b=b.parentNode;h=b.parentNode.id}}var f=b.getAttribute("aria-owns");if(f&&f.length)if(d||b.focus(),V==f)Ja(f);else{var n=
b.offsetWidth;a=0;do a+=b.offsetLeft||0;while(b=b.offsetParent);if(W===g){var k=S("gb"),p,q=document.defaultView;if(q&&q.getComputedStyle){var r=q.getComputedStyle(k,"");r&&(p=r.direction)}else p=k.currentStyle?k.currentStyle.direction:k.style.direction;W="rtl"==p}b=W?s:l;k=W?s:l;"gbd"==f&&(k=!k);V&&X();var v=x.bh[f];if(v)for(var F=0,N;N=v[F];F++)try{N()}catch(mb){D(mb,"sb","t1")}var v=a,G=S(f);if(G){var Q=G.style,Z=G.offsetWidth;if(Z<n){Q.width=n+"px";var Z=n,H=G.offsetWidth;H!=n&&(Q.width=n-(H-
n)+"px")}H=5;if(0>v)var R=cb(),ra=window.document,Oa="CSS1Compat"==ra.compatMode?ra.documentElement:ra.body,H=H-(R-(new ha(Oa.clientWidth,Oa.clientHeight)).width);var $,A,R=cb();if(k){if($=b?Math.max(R-v-Z,H):R-v-n,A=-(R-v-n-$),Xa()){var sa,ta=Xa();sa=ta&&1<ta.length?new Number(ta[1]):m;if(6==sa||7==sa&&"BackCompat"==document.compatMode)A-=2}}else $=b?v:Math.max(v+n-Z,H),A=$-v;var Pa=S("gbw"),Qa=S("gb");if(Pa&&Qa){var Ra=Pa.offsetLeft;Ra!=Qa.offsetLeft&&(A-=Ra)}db(G);Q.right=k?A+"px":"auto";Q.left=
k?"auto":A+"px";Q.visibility="visible";var Sa=G.getAttribute("aria-owner"),Ta=Sa?S(Sa):m;Ta&&gb(Ta.parentNode,"gbto");var ua=S(U);ua&&(eb(G,ua),ua.style.visibility="visible");V=f}var Ua=x.dh[f];if(Ua)for(F=0;N=Ua[F];F++)try{N()}catch(nb){D(nb,"sb","t2")}}}catch(ob){D(ob,"sb","t3")}},hb=function(a){if(V)try{a=a||window.event;var b=a.target||a.srcElement;if(a.keyCode&&b)if(a.keyCode&&27==a.keyCode)X();else if("a"==b.tagName.toLowerCase()&&-1!=b.className.indexOf("gbgt")&&(13==a.keyCode||3==a.keyCode)){var c=
document.getElementById(V);if(c){var d=c.getElementsByTagName("a");d&&(d.length&&d[0].focus)&&d[0].focus()}}}catch(e){D(e,"sb","kuh")}},Ga=function(){var a=S("gb");if(a){fb(a,"gbpdjs");for(var b=a.getElementsByTagName("a"),a=[],c=S("gbqfw"),d=0,e;e=b[d];d++)a.push(e);if(c){var h=S("gbqfqw"),d=S("gbqfwc"),b=S("gbqfwe");e=c.getElementsByTagName("button");c=[];h&&!x.sg.c&&c.push(h);if(e&&0<e.length)for(var h=0,f;f=e[h];h++)c.push(f);d&&b&&(c.push(d),c.push(b));for(d=0;b=c[d];d++)a.push(b)}for(d=0;c=
a[d];d++)(b=ib(c))&&jb(c,da(kb,b))}},Ha=function(a){var b=ib(a);b&&jb(a,da(kb,b))},ib=function(a){for(var b=0,c;c=bb[b];b++)if(Y(a,c))return c},jb=function(a,b){var c=function(a,b){return function(c){try{c=c||window.event;var f,n=c.relatedTarget;f=n&&Ea(n,"parentNode")?n:m;var k;if(!(k=a===f))if(a===f)k=s;else{for(;f&&f!==a;)f=f.parentNode;k=f===a}k||b(c,a)}catch(p){D(p,"sb","bhe")}}}(a,b);T(a,"mouseover",c);T(a,"mouseout",c)},kb=function(a,b,c){try{if(a+="-hvr","mouseover"==b.type){gb(c,a);var d=
document.activeElement;if(d&&Ea(d,"className")){var e=Y(d,"gbgt")||Y(d,"gbzt"),h=Y(c,"gbgt")||Y(c,"gbzt");e&&h&&d.blur()}}else"mouseout"==b.type&&fb(c,a)}catch(f){D(f,"sb","moaoh")}},Ia=function(a){X(a)},Ja=function(a){a==V&&X()},La=function(a){a&&"visible"==a.style.visibility&&(db(a),eb(a))},Ma=function(){try{var a=document.getElementById("gbd3");if(a)return"visible"==a.style.visibility.toLowerCase()}catch(b){D(b,"sb","bsy")}return s};z.push(["base",{init:function(){Wa()}}]);var lb=function(a,b){I.call(this,a,b)};(function(){function a(){}a.prototype=I.prototype;lb.A=I.prototype;lb.prototype=new a})();lb.prototype.t=function(){var a=S("gbli");if(a){for(var a=a.parentNode,b=a.parentNode,c=0,d;d=this.a[c];c++){var e;e=document.createElement(a.tagName);e.className="gbmtc";gb(d,"gbmt");jb(d,da(kb,"gbmt"));e.appendChild(d);b.insertBefore(e,a)}b.removeChild(a);(a=document.getElementById("gbd"))&&x.rdd&&x.rdd(a)}};z.push(["ppal",{init:function(a){new lb(a,E.v())}}]);C(y.u);
(function(){C(y.n);var a,b;for(a=0;(b=x.bnc[a])&&"ppal"!=b[0];++a);b&&!b[1].l&&(a=function(){for(var a=x.mdc,d=x.mdi||{},e=0,h;h=z[e];++e){var f=h[0],n=a[f],k=d[f],p;if(p=n){if(k=!k){var q;a:{k=f;if(p=x.mdd)try{if(!B){B={};var r=p.split(/;/);for(p=0;p<r.length;++p)B[r[p]]=l}q=B[k];break a}catch(v){x.logger&&x.logger.ml(v)}q=s}k=!q}p=k}if(p){C(y.p,f);try{h[1].init(n),d[f]=l}catch(F){x.logger&&x.logger.ml(F)}C(y.o,f)}}if(a=x.qd.ppal){x.qd.ppal=[];for(d=0;e=a[d];++d)try{e()}catch(N){x.logger&&x.logger.ml(N)}}b[1].l=
l;C(y.k);a:{for(a=0;d=x.bnc[a];++a)if((d[1].auto||"m"==d[0])&&!d[1].l){a=s;break a}a=l}a&&C(y.j)},!b[1].libs||x.agl&&x.agl(b[1].libs)?a():b[1].i=a)})();}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e,{"_sn":"ppal.init","_mddn":(gbar.mddn?gbar.mddn():"0")});}})();