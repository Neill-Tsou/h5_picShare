(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbe1805a"],{"02de":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("7a23");function r(e){var t=Object(i["H"])(e);if(!t)return!1;var a=window.getComputedStyle(t),r="none"===a.display,n=null===t.offsetParent&&"fixed"!==a.position;return r||n}},"07b4":function(e,t,a){},"095c":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("7a23");function r(e){var t;Object(i["u"])(()=>{e(),Object(i["p"])(()=>{t=!0})}),Object(i["q"])(()=>{t&&e()})}},"0b33":function(e,t,a){"use strict";var i=a("c199"),r=a("7a23"),n=a("d282"),l=a("db17"),c=a("2033"),o=a("6ba6"),u=a("b070"),d=Symbol();var v=a("fe86"),s=a("4eda"),[b,f]=Object(n["a"])("swipe-item"),O=Object(r["j"])({name:b,setup(e,{slots:t}){var a,i=Object(r["A"])({offset:0,inited:!1,mounted:!1}),{parent:n,index:l}=Object(o["a"])(v["a"]);if(n){var c=Object(r["e"])(()=>{var e={},{vertical:t}=n.props;return n.size.value&&(e[t?"height":"width"]=n.size.value+"px"),i.offset&&(e.transform="translate"+(t?"Y":"X")+"("+i.offset+"px)"),e}),u=Object(r["e"])(()=>{var{loop:e,lazyRender:t}=n.props;if(!t||a)return!0;if(!i.mounted)return!1;var r=n.activeIndicator.value,c=n.count.value-1,o=0===r&&e?c:r-1,u=r===c&&e?0:r+1;return a=l.value===r||l.value===o||l.value===u,a}),d=e=>{i.offset=e};return Object(r["u"])(()=>{Object(r["p"])(()=>{i.mounted=!0})}),Object(s["a"])({setOffset:d}),()=>Object(r["i"])("div",{class:f(),style:c.value},[u.value?null==t.default?void 0:t.default():null])}}}),j=Object(i["a"])(O),[p,h]=Object(n["a"])("tab"),g=Object(r["j"])({name:p,props:Object(l["a"])({},u["b"],{dot:Boolean,name:[Number,String],badge:[Number,String],title:String,disabled:Boolean,titleClass:l["f"],titleStyle:[String,Object]}),setup(e,{slots:t}){var a=Object(r["B"])(!1),{parent:i,index:n}=Object(o["a"])(c["a"]);if(i){var l=()=>{var t;return null!=(t=e.name)?t:n.value},u=()=>{a.value=!0,i.props.lazyRender&&Object(r["p"])(()=>{i.onRendered(l(),e.title)})},v=Object(r["e"])(()=>{var e=l()===i.currentName.value;return e&&!a.value&&u(),e});return Object(r["J"])(()=>e.title,()=>{i.setLine(),i.scrollIntoView()}),Object(r["y"])(d,v),()=>{var{animated:e,swipeable:n,scrollspy:l,lazyRender:c}=i.props;if(t.default||e){var o=l||v.value;if(e||n)return Object(r["i"])(j,{role:"tabpanel","aria-hidden":!v.value,class:h("pane-wrapper",{inactive:!v.value})},{default:()=>[Object(r["i"])("div",{class:h("pane")},[null==t.default?void 0:t.default()])]});var u=a.value||l||!c,d=u?null==t.default?void 0:t.default():null;return Object(r["L"])(Object(r["i"])("div",{role:"tabpanel",class:h("pane")},[d]),[[r["I"],o]])}}}}}),m=Object(i["a"])(g);t["a"]=m},"0f26":function(e,t,a){},"1c51":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var i=a("7a23"),r=Symbol();function n(e){var t=Object(i["m"])(r,null);t&&Object(i["J"])(t,t=>{t&&e()})}},2033:function(e,t,a){"use strict";a.d(t,"a",(function(){return F}));var i,r=a("7a23"),n=a("d282"),l=a("db17"),c=a("ea8e"),o=a("02de"),u=a("8da3"),d=a("a8c1"),v=a("22d1");function s(e,t,a){Object(v["a"])(i);var r=0,n=e.scrollLeft,l=0===a?1:Math.round(1e3*a/16);function c(){e.scrollLeft+=(t-n)/l,++r<l&&(i=Object(v["d"])(c))}c()}function b(e,t,a,i){var r=Object(d["b"])(e),n=r<t,l=0===a?1:Math.round(1e3*a/16),c=(t-r)/l;function o(){r+=c,(n&&r>t||!n&&r<t)&&(r=t),Object(d["g"])(e,r),n&&r<t||!n&&r>t?Object(v["d"])(o):i&&Object(v["d"])(i)}o()}var f=a("b1d2"),O=a("7e3e"),j=a("2eaa"),p=a("93f2"),h=a("a6cd"),g=a("095c"),m=a("3548"),w=a("b070");function y(){var e=Object(r["B"])([]);Object(r["s"])(()=>{e.value=[]});var t=t=>a=>{e.value[t]=a};return[e,t]}var x=a("4eda"),S=a("1c51"),B=a("c199"),C=a("8c53");function I(e,t){if(l["c"]&&window.IntersectionObserver){var a=new IntersectionObserver(e=>{t(e[0].intersectionRatio>0)},{root:document.body}),i=()=>{e.value&&a.observe(e.value)},n=()=>{e.value&&a.unobserve(e.value)};Object(r["t"])(n),Object(r["r"])(n),Object(g["a"])(i)}}var[N,T]=Object(n["a"])("sticky"),z=Object(r["j"])({name:N,props:{zIndex:[Number,String],container:Object,offsetTop:{type:[Number,String],default:0},offsetBottom:{type:[Number,String],default:0},position:{type:String,default:"top"}},emits:["scroll","change"],setup(e,{emit:t,slots:a}){var i=Object(r["B"])(),n=Object(p["b"])(i),u=Object(r["A"])({fixed:!1,width:0,height:0,transform:0}),v=Object(r["e"])(()=>Object(c["d"])("top"===e.position?e.offsetTop:e.offsetBottom)),s=Object(r["e"])(()=>{var{fixed:e,height:t,width:a}=u;if(e)return{width:a+"px",height:t+"px"}}),b=Object(r["e"])(()=>{if(u.fixed){var t=Object(l["a"])(Object(c["c"])(e.zIndex),{width:u.width+"px",height:u.height+"px",[e.position]:v.value+"px"});return u.transform&&(t.transform="translate3d(0, "+u.transform+"px, 0)"),t}}),f=e=>t("scroll",{scrollTop:e,isFixed:u.fixed}),O=()=>{if(i.value&&!Object(o["a"])(i)){var{container:t,position:a}=e,r=Object(C["a"])(i),n=Object(d["b"])(window);if(u.width=r.width,u.height=r.height,"top"===a)if(t){var l=Object(C["a"])(t),c=l.bottom-v.value-u.height;u.fixed=v.value>r.top&&l.bottom>0,u.transform=c<0?c:0}else u.fixed=v.value>r.top;else{var{clientHeight:s}=document.documentElement;if(t){var b=Object(C["a"])(t),O=s-b.top-v.value-u.height;u.fixed=s-v.value<r.bottom&&s>b.top,u.transform=O<0?-O:0}else u.fixed=s-v.value<r.bottom}f(n)}};return Object(r["J"])(()=>u.fixed,e=>t("change",e)),Object(m["b"])("scroll",O,{target:n}),I(i,O),()=>Object(r["i"])("div",{ref:i,style:s.value},[Object(r["i"])("div",{class:T({fixed:u.fixed}),style:b.value},[null==a.default?void 0:a.default()])])}}),k=Object(B["a"])(z),J=a("471a"),[A,M]=Object(n["a"])("tab"),R=Object(r["j"])({name:A,props:{dot:Boolean,type:String,color:String,title:String,badge:[Number,String],isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,renderTitle:Function,inactiveColor:String},setup(e){var t=Object(r["e"])(()=>{var t={},{type:a,color:i,disabled:r,isActive:n,activeColor:l,inactiveColor:c}=e,o="card"===a;i&&o&&(t.borderColor=i,r||(n?t.backgroundColor=i:t.color=i));var u=n?l:c;return u&&(t.color=u),t}),a=()=>{var t=Object(r["i"])("span",{class:M("text",{ellipsis:!e.scrollable})},[e.renderTitle?e.renderTitle():e.title]);return e.dot||Object(u["a"])(e.badge)&&""!==e.badge?Object(r["i"])(J["a"],{dot:e.dot,content:e.badge},{default:()=>[t]}):t};return()=>Object(r["i"])("div",{role:"tab",class:[M({active:e.isActive,disabled:e.disabled})],style:t.value,"aria-selected":e.isActive},[a()])}}),X=a("fe86"),H=Object(B["a"])(X["b"]),[L,Y]=Object(n["a"])("tabs"),W=Object(r["j"])({name:L,props:{inited:Boolean,animated:Boolean,swipeable:Boolean,lazyRender:Boolean,count:{type:Number,required:!0},duration:{type:[Number,String],required:!0},currentIndex:{type:Number,required:!0}},emits:["change"],setup(e,{emit:t,slots:a}){var i=Object(r["B"])(),n=e=>t("change",e),l=()=>{var t=null==a.default?void 0:a.default();return e.animated||e.swipeable?Object(r["i"])(H,{ref:i,loop:!1,class:Y("track"),duration:1e3*+e.duration,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:n},{default:()=>[t]}):t},c=t=>{var a=i.value;a&&a.state.active!==t&&a.swipeTo(t,{immediate:!e.inited})};return Object(r["J"])(()=>e.currentIndex,c),Object(r["u"])(()=>{c(e.currentIndex)}),()=>Object(r["i"])("div",{class:Y("content",{animated:e.animated||e.swipeable})},[l()])}}),[q,D]=Object(n["a"])("tabs"),F=Symbol(q),E={color:String,border:Boolean,sticky:Boolean,animated:Boolean,ellipsis:l["e"],swipeable:Boolean,scrollspy:Boolean,background:String,lazyRender:l["e"],lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},swipeThreshold:{type:[Number,String],default:5}};t["b"]=Object(r["j"])({name:q,props:E,emits:["click","change","scroll","disabled","rendered","update:active"],setup(e,{emit:t,slots:a}){var i,n,l,v=Object(r["B"])(),B=Object(r["B"])(),C=Object(r["B"])(),I=Object(j["a"])(),N=Object(p["b"])(v),[T,z]=y(),{children:J,linkChildren:A}=Object(h["a"])(F),M=Object(r["A"])({inited:!1,position:"",lineStyle:{},currentIndex:-1}),X=Object(r["e"])(()=>J.length>e.swipeThreshold||!e.ellipsis),H=Object(r["e"])(()=>({borderColor:e.color,background:e.background})),L=(e,t)=>{var a;return null!=(a=e.name)?a:t},Y=Object(r["e"])(()=>{var e=J[M.currentIndex];if(e)return L(e,M.currentIndex)}),q=Object(r["e"])(()=>Object(c["d"])(e.offsetTop)),E=Object(r["e"])(()=>e.sticky?q.value+i:0),$=t=>{var a=B.value,i=T.value;if(X.value&&a&&i&&i[M.currentIndex]){var r=i[M.currentIndex].$el,n=r.offsetLeft-(a.offsetWidth-r.offsetWidth)/2;s(a,n,t?0:+e.duration)}},P=()=>{var t=M.inited;Object(r["p"])(()=>{var a=T.value;if(a&&a[M.currentIndex]&&"line"===e.type&&!Object(o["a"])(v.value)){var i=a[M.currentIndex].$el,{lineWidth:r,lineHeight:n}=e,l=i.offsetLeft+i.offsetWidth/2,d={width:Object(c["a"])(r),backgroundColor:e.color,transform:"translateX("+l+"px) translateX(-50%)"};if(t&&(d.transitionDuration=e.duration+"s"),Object(u["a"])(n)){var s=Object(c["a"])(n);d.height=s,d.borderRadius=s}M.lineStyle=d}})},V=e=>{var t=e<M.currentIndex?-1:1;while(e>=0&&e<J.length){if(!J[e].disabled)return e;e+=t}},G=a=>{var i=V(a);if(Object(u["a"])(i)){var r=J[i],n=L(r,i),l=null!==M.currentIndex;M.currentIndex=i,n!==e.active&&(t("update:active",n),l&&t("change",n,r.title))}},K=e=>{var t=J.find((t,a)=>L(t,a)===e),a=t?J.indexOf(t):0;G(a)},Q=(t=!1)=>{if(e.scrollspy){var a=J[M.currentIndex].$el;if(a&&N.value){var i=Object(d["a"])(a,N.value)-E.value;n=!0,b(N.value,i,t?0:+e.duration,()=>{n=!1})}}},U=(a,i)=>{var{title:r,disabled:n}=J[i],l=L(J[i],i);n?t("disabled",l,r):(Object(O["a"])({interceptor:e.beforeChange,args:[l],done:()=>{G(i),Q()}}),t("click",l,r),Object(w["a"])(a))},Z=e=>{l=e.isFixed,t("scroll",e)},_=e=>{Object(r["p"])(()=>{K(e),Q(!0)})},ee=()=>{for(var e=0;e<J.length;e++){var t=Object(d["d"])(J[e].$el);if(t>E.value)return 0===e?0:e-1}return J.length-1},te=()=>{if(e.scrollspy&&!n){var t=ee();G(t)}},ae=()=>J.map((t,a)=>Object(r["i"])(R,{ref:z(a),dot:t.dot,type:e.type,badge:t.badge,title:t.title,color:e.color,style:t.titleStyle,class:t.titleClass,isActive:a===M.currentIndex,disabled:t.disabled,scrollable:X.value,renderTitle:t.$slots.title,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:()=>{U(t,a)}},null)),ie=()=>{var t,i,{type:n,border:l}=e;return Object(r["i"])("div",{ref:C,class:[D("wrap",{scrollable:X.value}),{[f["b"]]:"line"===n&&l}]},[Object(r["i"])("div",{ref:B,role:"tablist",class:D("nav",[n,{complete:X.value}]),style:H.value},[null==(t=a["nav-left"])?void 0:t.call(a),ae(),"line"===n&&Object(r["i"])("div",{class:D("line"),style:M.lineStyle},null),null==(i=a["nav-right"])?void 0:i.call(a)])])};Object(r["J"])([()=>e.color,I.width],P),Object(r["J"])(()=>e.active,e=>{e!==Y.value&&K(e)}),Object(r["J"])(()=>J.length,()=>{M.inited&&(K(e.active),P(),Object(r["p"])(()=>{$(!0)}))}),Object(r["J"])(()=>M.currentIndex,()=>{$(),P(),l&&!e.scrollspy&&Object(d["f"])(Math.ceil(Object(d["a"])(v.value)-q.value))});var re=()=>{K(e.active),Object(r["p"])(()=>{M.inited=!0,i=Object(d["c"])(C.value),$(!0)})},ne=(e,a)=>t("rendered",e,a);return Object(x["a"])({resize:P,scrollTo:_}),Object(r["q"])(P),Object(S["b"])(P),Object(g["a"])(re),Object(m["b"])("scroll",te,{target:N}),A({props:e,setLine:P,onRendered:ne,currentName:Y,scrollIntoView:$}),()=>Object(r["i"])("div",{ref:v,class:D([e.type])},[e.sticky?Object(r["i"])(k,{container:v.value,offsetTop:q.value,onScroll:Z},{default:()=>[ie()]}):ie(),Object(r["i"])(W,{count:J.length,inited:M.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:M.currentIndex,onChange:G},{default:()=>[null==a.default?void 0:a.default()]})])}})},"22d1":function(e,t,a){"use strict";(function(e){a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var i="undefined"!==typeof window,r=i?window:e,n=Date.now();function l(e){var t=Date.now(),a=Math.max(0,16-(t-n)),i=setTimeout(e,a);return n=t+a,i}function c(e){var t=r.requestAnimationFrame||l;return t.call(r,e)}function o(e){var t=r.cancelAnimationFrame||r.clearTimeout;t.call(r,e)}function u(e){c(()=>c(e))}}).call(this,a("c8ba"))},"2b0c":function(e,t,a){},"2eaa":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("7a23"),r=a("22d1"),n=a("3548");function l(){var e=Object(i["B"])(r["c"]?window.innerWidth:0),t=Object(i["B"])(r["c"]?window.innerHeight:0),a=()=>{e.value=window.innerWidth,t.value=window.innerHeight};return Object(n["b"])("resize",a),Object(n["b"])("orientationchange",a),{width:e,height:t}}},3548:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var i=a("7a23"),r=a("095c"),n=a("22d1"),l=!1;if(n["c"])try{var c={};Object.defineProperty(c,"passive",{get(){l=!0}}),window.addEventListener("test-passive",null,c)}catch(u){}function o(e,t,a={}){if(n["c"]){var c,{target:o=window,passive:u=!1,capture:d=!1}=a,v=()=>{var a=Object(i["H"])(o);a&&!c&&(a.addEventListener(e,t,l?{capture:d,passive:u}:d),c=!0)},s=()=>{var a=Object(i["H"])(o);a&&c&&(a.removeEventListener(e,t,d),c=!1)};Object(i["v"])(s),Object(i["t"])(s),Object(r["a"])(v)}}},"3cf6":function(e,t,a){},"558f":function(e,t,a){"use strict";a("3cd0"),a("0af7"),a("07b4"),a("ae3a"),a("3cf6"),a("2b0c"),a("0f26")},"5e46":function(e,t,a){"use strict";var i=a("c199"),r=a("2033"),n=Object(i["a"])(r["b"]);t["a"]=n},8990:function(e,t,a){"use strict";a("3cd0"),a("0af7"),a("07b4"),a("ae3a"),a("2b0c")},"93f2":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var i=a("7a23"),r=a("22d1"),n=/scroll|auto/i,l=r["c"]?window:void 0;function c(e){var t=1;return"HTML"!==e.tagName&&"BODY"!==e.tagName&&e.nodeType===t}function o(e,t=l){var a=e;while(a&&a!==t&&c(a)){var{overflowY:i}=window.getComputedStyle(a);if(n.test(i))return a;a=a.parentNode}return t}function u(e,t=l){var a=Object(i["B"])();return Object(i["u"])(()=>{e.value&&(a.value=o(e.value,t))}),a}},ae3a:function(e,t,a){},cdd8:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("7a23"),r=10;function n(e,t){return e>t&&e>r?"horizontal":t>e&&t>r?"vertical":""}function l(){var e=Object(i["B"])(0),t=Object(i["B"])(0),a=Object(i["B"])(0),r=Object(i["B"])(0),l=Object(i["B"])(0),c=Object(i["B"])(0),o=Object(i["B"])(""),u=()=>"vertical"===o.value,d=()=>"horizontal"===o.value,v=()=>{a.value=0,r.value=0,l.value=0,c.value=0,o.value=""},s=a=>{v(),e.value=a.touches[0].clientX,t.value=a.touches[0].clientY},b=i=>{var u=i.touches[0];a.value=u.clientX<0?0:u.clientX-e.value,r.value=u.clientY-t.value,l.value=Math.abs(a.value),c.value=Math.abs(r.value),o.value||(o.value=n(l.value,c.value))};return{move:b,start:s,reset:v,startX:e,startY:t,deltaX:a,deltaY:r,offsetX:l,offsetY:c,direction:o,isVertical:u,isHorizontal:d}}},fe86:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var i=a("7a23"),r=a("d282"),n=a("db17"),l=a("482d"),c=a("02de"),o=a("1325"),u=a("2eaa"),d=a("a6cd"),v=a("22d1"),s=a("3548");function b(){var e=Object(i["B"])("visible"),t=()=>{v["c"]&&(e.value=document.hidden?"hidden":"visible")};return t(),Object(s["b"])("visibilitychange",t),e}var f=a("cdd8"),O=a("4eda"),j=a("1c51"),[p,h]=Object(r["a"])("swipe"),g=Symbol(p),m={loop:n["e"],width:[Number,String],height:[Number,String],vertical:Boolean,touchable:n["e"],lazyRender:Boolean,indicatorColor:String,showIndicators:n["e"],stopPropagation:n["e"],autoplay:{type:[Number,String],default:0},duration:{type:[Number,String],default:500},initialSwipe:{type:[Number,String],default:0}};t["b"]=Object(i["j"])({name:p,props:m,emits:["change"],setup(e,{emit:t,slots:a}){var r,n,s=Object(i["B"])(),p=Object(i["A"])({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),m=Object(f["a"])(),w=Object(u["a"])(),{children:y,linkChildren:x}=Object(d["a"])(g),S=Object(i["e"])(()=>y.length),B=Object(i["e"])(()=>p[e.vertical?"height":"width"]),C=Object(i["e"])(()=>e.vertical?m.deltaY.value:m.deltaX.value),I=Object(i["e"])(()=>{if(p.rect){var t=e.vertical?p.rect.height:p.rect.width;return t-B.value*S.value}return 0}),N=Object(i["e"])(()=>Math.ceil(Math.abs(I.value)/B.value)),T=Object(i["e"])(()=>S.value*B.value),z=Object(i["e"])(()=>(p.active+S.value)%S.value),k=Object(i["e"])(()=>{var t=e.vertical?"vertical":"horizontal";return m.direction.value===t}),J=Object(i["e"])(()=>{var t={transitionDuration:(p.swiping?0:e.duration)+"ms",transform:"translate"+(e.vertical?"Y":"X")+"("+p.offset+"px)"};if(B.value){var a=e.vertical?"height":"width",i=e.vertical?"width":"height";t[a]=T.value+"px",t[i]=e[i]?e[i]+"px":""}return t}),A=t=>{var{active:a}=p;return t?e.loop?Object(l["b"])(a+t,-1,S.value):Object(l["b"])(a+t,0,N.value):a},M=(t,a=0)=>{var i=t*B.value;e.loop||(i=Math.min(i,-I.value));var r=a-i;return e.loop||(r=Object(l["b"])(r,I.value,0)),r},R=({pace:a=0,offset:i=0,emitChange:r})=>{if(!(S.value<=1)){var{active:n}=p,l=A(a),c=M(l,i);if(e.loop){if(y[0]&&c!==I.value){var o=c<I.value;y[0].setOffset(o?T.value:0)}if(y[S.value-1]&&0!==c){var u=c>0;y[S.value-1].setOffset(u?-T.value:0)}}p.active=l,p.offset=c,r&&l!==n&&t("change",z.value)}},X=()=>{p.swiping=!0,p.active<=-1?R({pace:S.value}):p.active>=S.value&&R({pace:-S.value})},H=()=>{X(),m.reset(),Object(v["b"])(()=>{p.swiping=!1,R({pace:-1,emitChange:!0})})},L=()=>{X(),m.reset(),Object(v["b"])(()=>{p.swiping=!1,R({pace:1,emitChange:!0})})},Y=()=>clearTimeout(r),W=()=>{Y(),e.autoplay>0&&S.value>1&&(r=setTimeout(()=>{L(),W()},+e.autoplay))},q=(t=+e.initialSwipe)=>{if(s.value){if(!Object(c["a"])(s)){var a,i,r={width:s.value.offsetWidth,height:s.value.offsetHeight};p.rect=r,p.width=+(null!=(a=e.width)?a:r.width),p.height=+(null!=(i=e.height)?i:r.height)}S.value&&(t=Math.min(S.value-1,t)),p.active=t,p.swiping=!0,p.offset=M(t),y.forEach(e=>{e.setOffset(0)})}},D=()=>q(p.active),F=t=>{e.touchable&&(m.start(t),n=Date.now(),Y(),X())},E=t=>{e.touchable&&p.swiping&&(m.move(t),k.value&&(Object(o["a"])(t,e.stopPropagation),R({offset:C.value})))},$=()=>{if(e.touchable&&p.swiping){var t=Date.now()-n,a=C.value/t,i=Math.abs(a)>.25||Math.abs(C.value)>B.value/2;if(i&&k.value){var r=e.vertical?m.offsetY.value:m.offsetX.value,l=0;l=e.loop?r>0?C.value>0?-1:1:0:-Math[C.value>0?"ceil":"floor"](C.value/B.value),R({pace:l,emitChange:!0})}else C.value&&R({pace:0});p.swiping=!1,W()}},P=(t,a={})=>{X(),m.reset(),Object(v["b"])(()=>{var i;i=e.loop&&t===S.value?0===p.active?0:t:t%S.value,a.immediate?Object(v["b"])(()=>{p.swiping=!1}):p.swiping=!1,R({pace:i-p.active,emitChange:!0})})},V=(t,a)=>{var r=a===z.value,n=r?{backgroundColor:e.indicatorColor}:void 0;return Object(i["i"])("i",{style:n,class:h("indicator",{active:r})},null)},G=()=>a.indicator?a.indicator({active:z.value}):e.showIndicators&&S.value>1?Object(i["i"])("div",{class:h("indicators",{vertical:e.vertical})},[Array(S.value).fill("").map(V)]):void 0;return Object(O["a"])({prev:H,next:L,state:p,resize:D,swipeTo:P}),x({size:B,props:e,count:S,activeIndicator:z}),Object(i["J"])(()=>e.initialSwipe,e=>q(+e)),Object(i["J"])(S,()=>q(p.active)),Object(i["J"])([S,()=>e.autoplay],W),Object(i["J"])([w.width,w.height],D),Object(i["J"])(b(),e=>{"visible"===e?W():Y()}),Object(i["u"])(q),Object(i["q"])(()=>q(p.active)),Object(j["b"])(()=>q(p.active)),Object(i["t"])(Y),Object(i["r"])(Y),()=>Object(i["i"])("div",{ref:s,class:h()},[Object(i["i"])("div",{style:J.value,class:h("track",{vertical:e.vertical}),onTouchstart:F,onTouchmove:E,onTouchend:$,onTouchcancel:$},[null==a.default?void 0:a.default()]),G()])}})}}]);