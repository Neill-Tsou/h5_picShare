(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b57504"],{"24b0":function(e,t,a){},"5cc2":function(e,t,a){},"9aa9":function(e,t,a){"use strict";a("24b0")},e382:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=Object(n["N"])("data-v-aa717bbc"),r=c((function(e,t,a,c,r,i){var o=Object(n["D"])("user-card"),u=Object(n["D"])("router-view");return Object(n["w"])(),Object(n["g"])("div",null,[Object(n["i"])(o),Object(n["i"])(u)])})),i=Object(n["N"])("data-v-2bc4aa85");Object(n["z"])("data-v-2bc4aa85");var o={class:"card"},u=Object(n["i"])("div",null,"用户名，响应式渲染",-1),l=Object(n["i"])("div",null,"id号，响应式渲染",-1),b=Object(n["i"])("div",null,"关注",-1),s=Object(n["i"])("div",null,"数字",-1),d=Object(n["i"])("div",null,"粉丝",-1),j=Object(n["i"])("div",null,"数字",-1),O=Object(n["i"])("div",null,"收藏与获赞",-1),v=Object(n["i"])("div",null,"数字",-1),f=Object(n["h"])("编辑资料"),g={ref:"container",style:{height:"94px"}};Object(n["x"])();var p=i((function(e,t,a,c,r,p){var m=Object(n["D"])("van-image"),h=Object(n["D"])("van-col"),w=Object(n["D"])("van-row"),_=Object(n["D"])("van-button"),y=Object(n["D"])("van-tab"),S=Object(n["D"])("van-tabs"),x=Object(n["D"])("van-sticky");return Object(n["w"])(),Object(n["g"])(n["a"],null,[Object(n["i"])("div",o,[Object(n["i"])("div",null,[Object(n["i"])(w,{class:"userImgBox",gutter:"20"},{default:i((function(){return[Object(n["i"])(h,{span:"8"},{default:i((function(){return[Object(n["i"])(m,{class:"userImg",width:"6rem",height:"6rem",fit:"cover",round:"",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"})]})),_:1}),Object(n["i"])(h,{class:"userNameBox",span:"16"},{default:i((function(){return[u,l]})),_:1})]})),_:1})]),Object(n["i"])("div",null,[Object(n["i"])(w,{class:"userInfoBox",gutter:"20"},{default:i((function(){return[Object(n["i"])(h,{span:"4"},{default:i((function(){return[b,s]})),_:1}),Object(n["i"])(h,{span:"4"},{default:i((function(){return[d,j]})),_:1}),Object(n["i"])(h,{span:"6"},{default:i((function(){return[O,v]})),_:1}),Object(n["i"])(h,{offset:"3",span:"7"},{default:i((function(){return[Object(n["i"])(_,{color:"#bebebe",round:"",hairline:"",type:"primary",size:"small"},{default:i((function(){return[f]})),_:1})]})),_:1})]})),_:1}),Object(n["i"])(w)])]),Object(n["i"])("div",g,[Object(n["i"])(x,{container:c.container,"offset-top":0},{default:i((function(){return[Object(n["i"])("div",null,[Object(n["i"])(w,null,{default:i((function(){return[Object(n["i"])(h,{offset:"4",span:"16"},{default:i((function(){return[Object(n["i"])(S,{active:e.activeName,"onUpdate:active":t[1]||(t[1]=function(t){return e.activeName=t}),animated:""},{default:i((function(){return[Object(n["i"])(y,{title:"故事",name:"a",to:"/user/story"}),Object(n["i"])(y,{title:"收藏",name:"b",to:"/user/collection"}),Object(n["i"])(y,{title:"赞过",name:"c",to:"/user/likes"})]})),_:1},8,["active"])]})),_:1})]})),_:1})])]})),_:1},8,["container"])],512)],64)})),m=(a("3cd0"),a("0af7"),a("acc2"),a("5cc2"),a("c199")),h=a("d282"),w=a("db17"),_=a("8da3"),y=a("ea8e"),S=a("ad06"),[x,z]=Object(h["a"])("image"),I=Object(n["j"])({name:x,props:{src:String,alt:String,fit:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconSize:[Number,String],showError:w["e"],iconPrefix:String,showLoading:w["e"],errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},emits:["load","error"],setup(e,{emit:t,slots:a}){var c=Object(n["B"])(!1),r=Object(n["B"])(!0),i=Object(n["B"])(),{$Lazyload:o}=Object(n["k"])().proxy,u=Object(n["e"])(()=>{var t={};return Object(_["a"])(e.width)&&(t.width=Object(y["a"])(e.width)),Object(_["a"])(e.height)&&(t.height=Object(y["a"])(e.height)),Object(_["a"])(e.radius)&&(t.overflow="hidden",t.borderRadius=Object(y["a"])(e.radius)),t});Object(n["K"])(()=>e.src,()=>{c.value=!1,r.value=!0});var l=e=>{r.value=!1,t("load",e)},b=e=>{c.value=!0,r.value=!1,t("error",e)},s=()=>a.loading?a.loading():Object(n["i"])(S["a"],{size:e.iconSize,name:e.loadingIcon,class:z("loading-icon"),classPrefix:e.iconPrefix},null),d=()=>a.error?a.error():Object(n["i"])(S["a"],{size:e.iconSize,name:e.errorIcon,class:z("error-icon"),classPrefix:e.iconPrefix},null),j=()=>r.value&&e.showLoading?Object(n["i"])("div",{class:z("loading")},[s()]):c.value&&e.showError?Object(n["i"])("div",{class:z("error")},[d()]):void 0,O=()=>{if(!c.value&&e.src){var t={alt:e.alt,class:z("img"),style:{objectFit:e.fit}};return e.lazyLoad?Object(n["M"])(Object(n["i"])("img",Object(n["o"])({ref:i},t),null),[[Object(n["E"])("lazy"),e.src]]):Object(n["i"])("img",Object(n["o"])({src:e.src,onLoad:l,onError:b},t),null)}},v=({el:e})=>{e===i.value&&r.value&&l()},f=({el:e})=>{e!==i.value||c.value||b()};return o&&w["c"]&&(o.$on("loaded",v),o.$on("error",f),Object(n["r"])(()=>{o.$off("loaded",v),o.$off("error",f)})),()=>Object(n["i"])("div",{class:z({round:e.round}),style:u.value},[O(),j(),null==a.default?void 0:a.default()])}}),B=Object(m["a"])(I),D=B,N=(a("558f"),a("0b33")),k=(a("8990"),a("5e46")),L=(a("c625"),a("b650")),P=(a("07b4"),a("3104")),$=(a("47d1"),a("9ffb")),E=(a("4bc8"),a("d1e1")),U={name:"UserCard",components:{"van-row":E["a"],"van-col":$["a"],"van-sticky":P["b"],"van-button":L["a"],"van-tabs":k["a"],"van-tab":N["a"],VanImage:D},setup:function(){var e=Object(n["B"])(null);return{container:e}}};a("9aa9");U.render=p,U.__scopeId="data-v-2bc4aa85";var C=U,J={name:"User",components:{UserCard:C},setup:function(){return{}}};J.render=r,J.__scopeId="data-v-aa717bbc";t["default"]=J}}]);