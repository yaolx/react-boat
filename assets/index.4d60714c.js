var W=Object.defineProperty;var U=(s,t,n)=>t in s?W(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var w=(s,t,n)=>(U(s,typeof t!="symbol"?t+"":t,n),n);import{a as e,r as l,b as H,c as G}from"./react-vendor.354bfc68.js";import{m as K,M as Q,o as k,u as S,c as y,S as F,E as Y,a as B,L as j,O as q,b as X,d as T,B as J,C as Z,T as ee,e as I,H as te,f as ne,t as oe,g as se,h as ie,i as ce,j as re,k as ae,l as le,U as me,P as ue,n as pe}from"./vendor.7b08bbb4.js";import{l as p}from"./lodash.b4f4b5bf.js";import"./__commonjsHelpers__.be7665b8.js";const de=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};de();const he="modulepreload",C={},fe="/",a=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${fe}${i}`,i in C)return;C[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${c}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":he,o||(r.as="script",r.crossOrigin=""),r.href=i,document.head.appendChild(r),o)return new Promise((u,d)=>{r.addEventListener("load",u),r.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},_e={"../page/md/component_\u7EC4\u4EF6\u5E93/20220509@\u7EC4\u4EF6\u5E93button.mdx":()=>a(()=>import("./20220509@\u7EC4\u4EF6\u5E93button.042d6a19.js"),["assets/20220509@组件库button.042d6a19.js","assets/20220509@组件库button.19fe4a8e.css","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/end_\u540E\u7AEF/20220425@\u81EA\u52A8\u5316\u90E8\u7F72\u4E00\uFF1Adocker + jenkins + ssh.mdx":()=>a(()=>import("./20220425@\u81EA\u52A8\u5316\u90E8\u7F72\u4E00\uFF1Adocker _ jenkins _ ssh.3887ff5b.js"),["assets/20220425@自动化部署一：docker _ jenkins _ ssh.3887ff5b.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/end_\u540E\u7AEF/20220426@\u81EA\u52A8\u5316\u90E8\u7F72\u4E8C\uFF1Ajenkins + github.mdx":()=>a(()=>import("./20220426@\u81EA\u52A8\u5316\u90E8\u7F72\u4E8C\uFF1Ajenkins _ github.f1ea0285.js"),["assets/20220426@自动化部署二：jenkins _ github.f1ea0285.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/end_\u540E\u7AEF/20220428@\u81EA\u52A8\u5316\u90E8\u7F72\u4E09\uFF1Anginx.mdx":()=>a(()=>import("./20220428@\u81EA\u52A8\u5316\u90E8\u7F72\u4E09\uFF1Anginx.7c580cb9.js"),["assets/20220428@自动化部署三：nginx.7c580cb9.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220422@Github Actions\u90E8\u7F72react\u9879\u76EE.mdx":()=>a(()=>import("./20220422@Github Actions\u90E8\u7F72react\u9879\u76EE.b76534c7.js"),["assets/20220422@Github Actions部署react项目.b76534c7.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220424@eslint-plugin-import\u771F\u9999\u8B66\u544A.mdx":()=>a(()=>import("./20220424@eslint-plugin-import\u771F\u9999\u8B66\u544A.7c6e5fba.js"),["assets/20220424@eslint-plugin-import真香警告.7c6e5fba.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220506@Promise \u4E2D setTimeout \u7684\u4F7F\u7528.mdx":()=>a(()=>import("./20220506@Promise \u4E2D setTimeout \u7684\u4F7F\u7528.296539ba.js"),["assets/20220506@Promise 中 setTimeout 的使用.296539ba.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220507@\u57FA\u4E8E vite \u6784\u5EFA\u7684\u9759\u6001\u7AD9 mdx \u535A\u5BA2\u7F51\u7AD9\u548C\u7EC4\u4EF6\u5E93\u6587\u6863.mdx":()=>a(()=>import("./20220507@\u57FA\u4E8E vite \u6784\u5EFA\u7684\u9759\u6001\u7AD9 mdx \u535A\u5BA2\u7F51\u7AD9\u548C\u7EC4\u4EF6\u5E93\u6587\u6863.c569ff07.js"),["assets/20220507@基于 vite 构建的静态站 mdx 博客网站和组件库文档.c569ff07.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220524@node cli\u4E0A\u624B.mdx":()=>a(()=>import("./20220524@node cli\u4E0A\u624B.95f456fe.js"),["assets/20220524@node cli上手.95f456fe.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220801@echarts\u7ED8\u5236geo\u5730\u56FE.mdx":()=>a(()=>import("./20220801@echarts\u7ED8\u5236geo\u5730\u56FE.e0a0c40d.js"),["assets/20220801@echarts绘制geo地图.e0a0c40d.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220805@\u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u65B9\u6848.mdx":()=>a(()=>import("./20220805@\u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u65B9\u6848.f2794f63.js"),["assets/20220805@移动端自适应方案.f2794f63.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220823@noreferrer\u77E5\u591A\u5C11.mdx":()=>a(()=>import("./20220823@noreferrer\u77E5\u591A\u5C11.57ff5448.js"),["assets/20220823@noreferrer知多少.57ff5448.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20220925@vite \u6253\u5305\u4F18\u5316\u4E4B\uFF1A\u61D2\u52A0\u8F7D\u548C\u5206\u5305.mdx":()=>a(()=>import("./20220925@vite \u6253\u5305\u4F18\u5316\u4E4B\uFF1A\u61D2\u52A0\u8F7D\u548C\u5206\u5305.0d6fcc31.js"),["assets/20220925@vite 打包优化之：懒加载和分包.0d6fcc31.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20221011@less\u8BED\u6CD5mixin\u4E4B\uFF1A@content\u7684\u5999\u7528.mdx":()=>a(()=>import("./20221011@less\u8BED\u6CD5mixin\u4E4B\uFF1A@content\u7684\u5999\u7528.31a87a1d.js"),["assets/20221011@less语法mixin之：@content的妙用.31a87a1d.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20221117@iconfont\uFF1A\u4F7F\u7528symbol\u505AIcon\u7EC4\u4EF6.mdx":()=>a(()=>import("./20221117@iconfont\uFF1A\u4F7F\u7528symbol\u505AIcon\u7EC4\u4EF6.20322f32.js"),["assets/20221117@iconfont：使用symbol做Icon组件.20322f32.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20221204@electron\u5F00\u53D1\u4E4B\u4E00\uFF1A\u811A\u624B\u67B6\u642D\u5EFA.mdx":()=>a(()=>import("./20221204@electron\u5F00\u53D1\u4E4B\u4E00\uFF1A\u811A\u624B\u67B6\u642D\u5EFA.6afe8cb4.js"),["assets/20221204@electron开发之一：脚手架搭建.6afe8cb4.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20221205@electron\u5F00\u53D1\u4E4B\u4E8C\uFF1A\u7248\u672C\u81EA\u52A8\u53D1\u5E03\u53CA\u66F4\u65B0.mdx":()=>a(()=>import("./20221205@electron\u5F00\u53D1\u4E4B\u4E8C\uFF1A\u7248\u672C\u81EA\u52A8\u53D1\u5E03\u53CA\u66F4\u65B0.f045cb63.js"),["assets/20221205@electron开发之二：版本自动发布及更新.f045cb63.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20221206@electron\u5F00\u53D1\u4E4B\u4E09\uFF1A\u8FDB\u7A0B\u901A\u8BAF.mdx":()=>a(()=>import("./20221206@electron\u5F00\u53D1\u4E4B\u4E09\uFF1A\u8FDB\u7A0B\u901A\u8BAF.de38ed41.js"),["assets/20221206@electron开发之三：进程通讯.de38ed41.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/front_\u524D\u7AEF/20221207@electron\u5F00\u53D1\u4E4B\u56DB\uFF1A\u7CFB\u7EDF\u6258\u76D8\u3001\u6D88\u606F\u95EA\u52A8\u63D0\u793A\u53CA\u5355\u5E94\u7528\u5B9E\u4F8B.mdx":()=>a(()=>import("./20221207@electron\u5F00\u53D1\u4E4B\u56DB\uFF1A\u7CFB\u7EDF\u6258\u76D8\u3001\u6D88\u606F\u95EA\u52A8\u63D0\u793A\u53CA\u5355\u5E94\u7528\u5B9E\u4F8B.91328c04.js"),["assets/20221207@electron开发之四：系统托盘、消息闪动提示及单应用实例.91328c04.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/tech_\u6280\u672F\u6808/20220530@\u6280\u672F\u6808.mdx":()=>a(()=>import("./20220530@\u6280\u672F\u6808.d7682521.js"),["assets/20220530@技术栈.d7682521.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/tech_\u6280\u672F\u6808/20220918@\u524D\u7AEF\u77E5\u8BC6\u4F53\u7CFB\u7B80\u5316\u7248.mdx":()=>a(()=>import("./20220918@\u524D\u7AEF\u77E5\u8BC6\u4F53\u7CFB\u7B80\u5316\u7248.2087c811.js"),["assets/20220918@前端知识体系简化版.2087c811.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/tools_\u5DE5\u5177/20220425@vscode\u63D2\u4EF6-Picgo.mdx":()=>a(()=>import("./20220425@vscode\u63D2\u4EF6-Picgo.2b89e016.js"),["assets/20220425@vscode插件-Picgo.2b89e016.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/tools_\u5DE5\u5177/20220505@fiddler\u4E00\uFF1A\u65AD\u70B9\u4FEE\u6539\u8BF7\u6C42\u6570\u636E.mdx":()=>a(()=>import("./20220505@fiddler\u4E00\uFF1A\u65AD\u70B9\u4FEE\u6539\u8BF7\u6C42\u6570\u636E.c5eb1d5b.js"),["assets/20220505@fiddler一：断点修改请求数据.c5eb1d5b.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/tools_\u5DE5\u5177/20221109@charles\u4E00\uFF1A\u6293\u5305\u914D\u7F6E.mdx":()=>a(()=>import("./20221109@charles\u4E00\uFF1A\u6293\u5305\u914D\u7F6E.8f2640fb.js"),["assets/20221109@charles一：抓包配置.8f2640fb.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"]),"../page/md/tools_\u5DE5\u5177/20221117@Tampermonkey\u5B9E\u6218\u4E00\uFF1A\u6846\u67B6\u642D\u5EFA.mdx":()=>a(()=>import("./20221117@Tampermonkey\u5B9E\u6218\u4E00\uFF1A\u6846\u67B6\u642D\u5EFA.f6f52e8b.js"),["assets/20221117@Tampermonkey实战一：框架搭建.f6f52e8b.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"])};let v=[];const ge=()=>{let s="";return p.exports.isEmpty(v)&&(v=p.exports.compact(p.exports.map(_e,(t,n)=>{const i=new RegExp("../page/md/(.*)/(.*).mdx"),c=n.replace(i,function(b,f,x){return f+"@"+x}).split("@"),r=c[0]||"",u=c[1]||"",d=c[2]||"",m=r.split("_")[0],_=r.split("_")[1],E={parentPath:m,parentTitle:_,path:`/${m}/${u}`,key:`/${m}/${u}`,name:d,date:u,element:t};return m!==s&&(s=m,E.path=`/${m}`),E}))),v},ve=s=>p.exports.filter(v,t=>t.parentPath===s),Ee=()=>{const s=p.exports.keyBy(v,"parentPath");return p.exports.map(s,(n,i)=>({key:i,title:n.parentTitle}))},we=[{key:"",title:"\u9996\u9875"}],be=[{key:"github",title:"github",url:"https://github.com/yaolx/yaolx.github.io"},{key:"md/about",title:"\u5173\u4E8E"},{key:"md/log",title:"\u66F4\u65B0\u65E5\u5FD7"}];class xe{constructor(){w(this,"mdxFiles",[]);w(this,"mdxMenus");w(this,"initMdx",async()=>{this.mdxFiles=v,this.mdxMenus=we.concat(Ee()).concat(be)});w(this,"search",t=>p.exports.filter(this.mdxFiles,i=>i.name.includes(t)));w(this,"getMdxByGroup",()=>p.exports.map(p.exports.toPairsIn(p.exports.groupBy(this.mdxFiles,"parentPath")),([n,i])=>{const o=p.exports.first(i),c=p.exports.take(i,3);return{category:o==null?void 0:o.parentTitle,files:c}}));K(this)}}var je=new xe;function D(s){const t=e.useContext(Q),{stores:n}=t;return s?n[s]:n}const L=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?"h5":"pc",$={h5:{mdSiderWidth:150,homeSiderWidth:"100%"},pc:{mdSiderWidth:200,homeSiderWidth:300}};$[L].mdSiderWidth;$[L].homeSiderWidth;const ye="\u5343\u79AE\u4E4B\u884C",Ht=[{title:"\u6559\u7A0B",id:"course",children:[{id:"runoob",href:"https://www.runoob.com/",icon:"https://static.runoob.com/images/favicon.ico",title:"\u83DC\u9E1F\u6559\u7A0B"},{id:"bilibili",href:"https://www.bilibili.com/",icon:"https://www.bilibili.com/favicon.ico?v=1",title:"\u54D4\u54E9\u54D4\u54E9"}]},{title:"\u793E\u533A",id:"community",children:[{id:"juejin",href:"https://juejin.cn/",icon:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png",title:"\u6398\u91D1"},{id:"github",href:"http://github.com/",icon:"https://images.frontendjs.com/github.png?imageView2/2/h/30",title:"github"},{id:"jianshu",href:"https://www.jianshu.com/",icon:"https://www.jianshu.com/favicon.ico",title:"\u7B80\u4E66"}]},{title:"UI\u6846\u67B6",id:"uiLib",children:[{id:"web-components",href:"https://www.webcomponents.org/introduction",icon:"https://wu-component.github.io/assets/logo.png",title:"web-components"},{id:"antd-react",href:"https://ant.design/docs/react/introduce-cn",icon:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",title:"antd-react"},{id:"antd-mobile",href:"https://mobile.ant.design/zh/",icon:"https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",title:"antd-mobile"},{id:"antd-vue",href:"https://www.antdv.com/docs/vue/introduce-cn/",icon:"https://qn.antdv.com/favicon.ico",title:"antd-vue"},{id:"element",href:"https://element.eleme.cn/#/zh-CN/component/installation",icon:"https://element.eleme.cn/favicon.ico",title:"element"}]},{title:"\u6846\u67B6",id:"frame",children:[{id:"react",href:"https://react.docschina.org/",icon:"https://react.docschina.org/favicon.ico",title:"react"},{id:"vue2",href:"https://cn.vuejs.org/",icon:"https://cn.vuejs.org/images/logo.svg",title:"vue2"},{id:"vue3",href:"https://staging-cn.vuejs.org/",icon:"https://cn.vuejs.org/images/logo.svg",title:"vue3"},{id:"electron",href:"https://www.electronjs.org/zh/",icon:"https://www.electronjs.org/zh/assets/img/logo.svg",title:"electron"},{id:"angular",href:"https://angular.cn/",icon:"https://angular.cn/assets/images/favicons/favicon.ico",title:"angular"},{id:"uniapp",href:"https://uniapp.dcloud.io/",icon:"https://hx.dcloud.net.cn/static/favicon/favicon.png",title:"uniapp"},{id:"weixin",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",icon:"https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"},{id:"tailwindcss",href:"https://www.tailwindcss.cn/",icon:"https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",title:"tailwindcss"},{id:"egg",href:"https://www.eggjs.org/zh-CN/",icon:"https://www.eggjs.org/favicon.png",title:"egg"},{id:"koa",href:"https://www.koajs.com.cn/#introduction",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-39734fbc-b241-4d89-ad87-0befd655e266/916e2040-8b90-43e9-9a13-e5d13caca955.svg",title:"koa"},{id:"nestjs",href:"https://nestjs.bootcss.com/",icon:"https://nestjs.bootcss.com/img/logo.png",title:"nestjs"},{id:"nextjs",href:"https://www.nextjs.cn/",icon:"https://www.nextjs.cn/static/favicon/favicon.ico",title:"nextjs"},{id:"qiankun",href:"https://qiankun.umijs.org/zh",icon:"https://gw.alipayobjects.com/mdn/rms_655822/afts/img/A*4sIUQpcos_gAAAAAAAAAAAAAARQnAQ",title:"qiankun"},{id:"microApp",href:"https://zeroing.jd.com/micro-app/",icon:"https://zeroing.jd.com/micro-app/favicon.ico",title:"microApp"}]},{title:"\u8DEF\u7531",id:"router",children:[{id:"reactrouter",href:"https://reactrouter.com/docs/en/v6",icon:"https://reactrouter.com/favicon.ico",title:"react-router"}]},{title:"\u72B6\u6001\u7BA1\u7406\u5E93",id:"archive",children:[{id:"usecontext",href:"https://reactjs.org/docs/context.html",icon:"https://react.docschina.org/favicon.ico",title:"usecontext"},{id:"redux",href:"https://www.redux.org.cn/",icon:"https://react.docschina.org/favicon.ico",title:"redux"},{id:"mobx",href:"https://cn.mobx.js.org/",icon:"https://cn.mobx.js.org/mobx.png",title:"mobx"},{id:"recoil",href:"https://recoiljs.org/docs/introduction/installation",icon:"https://recoiljs.org/img/logo.svg",title:"recoil"},{id:"pinia",href:"https://pinia.vuejs.org/",icon:"https://pinia.vuejs.org/logo.png",title:"pinia"},{id:"vuex",href:"https://vuex.vuejs.org/zh/",icon:"https://cn.vuejs.org/images/logo.svg",title:"vuex"},{id:"react-query",href:"https://react-query-v3.tanstack.com/overview",icon:"https://react-query-v3.tanstack.com/_next/static/images/logo-7a7896631260eebffcb031765854375b.svg",title:"react-query"}]},{title:"\u7C7B\u5E93",id:"classLib",children:[{id:"lodash",href:"https://lodash.com/docs/4.17.15",icon:"https://www.lodashjs.com/img/favicon.ico",title:"lodash"},{id:"jquery",href:"https://jquery.cuishifeng.cn/",icon:"https://jquery.cuishifeng.cn/images/favicon.ico",title:"jquery"},{id:"axios",href:"http://www.axios-js.com/",icon:"http://www.axios-js.com/logo.svg",title:"axios"},{id:"dayjs",href:"https://dayjs.fenxianglu.cn/",icon:"https://dayjs.fenxianglu.cn/assets/favicon.png",title:"dayjs"},{id:"ahooks",href:"https://ahooks.gitee.io/zh-CN",icon:"https://ahooks.gitee.io/simple-logo.svg",title:"ahooks"}]},{title:"\u6784\u5EFA\u5DE5\u5177",id:"buildTools",children:[{id:"npmjs",href:"https://www.npmjs.com/",icon:"https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",title:"npmjs"},{id:"yarn",href:"https://www.yarnpkg.cn/",icon:"https://www.yarnpkg.cn/favicon-32x32.png?v=6143f50112ddba9fdb635b0af2f32aff",title:"yarn"},{id:"pnpm",href:"https://pnpm.io/zh/",icon:"https://7463-tcb-spf487akrqqqcj95dc4b8-17356e-1305313853.tcb.qcloud.la/pnpm.webp",title:"pnpm"},{id:"webpack",href:"https://www.webpackjs.com/",icon:"https://www.webpackjs.com/assets/favicon.ico",title:"webpack"},{id:"vite",href:"https://vitejs.cn/",icon:"https://vitejs.cn/logo.svg",title:"vite"},{id:"rollup",href:"https://www.rollupjs.com/",icon:"https://www.rollupjs.com/img/favicon.png",title:"rollup"},{id:"gulp",href:"https://www.gulpjs.com.cn/",icon:"https://www.gulpjs.com.cn/img/favicon.png",title:"gulp"},{id:"electron-vite",href:"https://cn-evite.netlify.app/",icon:"https://cn-evite.netlify.app/favicon.svg",title:"electron-vite"}]},{title:"\u6D4B\u8BD5\u5DE5\u5177",id:"testTools",children:[{id:"vitest",href:"https://cn.vitest.dev/",icon:"hhttps://cn.vitest.dev/logo.svg",title:"vitest"},{id:"jest",href:"https://www.jestjs.cn/",icon:"https://cn.vuejs.org/images/logo.svg",title:"jest"}]},{title:"\u53EF\u89C6\u5316\u56FE\u8868\u5E93",id:"chartFrame",children:[{id:"echarts",href:"https://echarts.apache.org/zh/index.html",icon:"https://echarts.apache.org/zh/images/favicon.png",title:"echarts"},{id:"highcharts",href:"https://www.highcharts.com/docs/index",icon:"https://www.highcharts.com/docs/img/favicon.png",title:"highcharts"},{id:"antv",href:"https://charts.ant.design/zh",icon:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",title:"antv"},{id:"d3",href:"https://d3js.org/",icon:"https://camo.githubusercontent.com/586ccf0aad9684edc821658cee04146cf36d1f1d5ec904bbefd72728909ccb2e/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667",title:"d3"},{id:"threejs",href:"https://threejs.org/",icon:"https://threejs.org/files/favicon.ico",title:"threejs"},{id:"fabricjs",href:"http://fabricjs.com/",icon:"http://fabricjs.com/favicon.ico",title:"fabricjs"}]},{title:"\u5EFA\u7AD9\u5DE5\u5177",id:"siteTools",children:[{id:"vitepress",href:"https://vitepress.vuejs.org/guide/what-is-vitepress.html",icon:"http://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg",title:"vitepress"},{id:"vuepress",href:"https://vuepress.vuejs.org/zh/",icon:"https://cn.vuejs.org/images/logo.svg",title:"vuepress"}]},{title:"\u56FE\u6807",id:"icon",children:[{id:"iconfont",href:"https://www.iconfont.cn/",icon:"http://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg",title:"iconfont"},{id:"fontawesome",href:"http://www.fontawesome.com.cn/",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-39734fbc-b241-4d89-ad87-0befd655e266/ecd0c0ab-5bea-4d3f-ba7b-443d451407a3.png",title:"fontawesome"}]},{title:"\u8BED\u8A00",id:"language",children:[{id:"nodejs",href:"http://nodejs.cn/",icon:"http://img.nodejs.cn/favicon.png",title:"nodejs"},{id:"typescript",href:"https://www.tslang.cn/",icon:"https://www.tslang.cn/assets/images/icons/favicon.ico",title:"typescript"},{id:"sass",href:"https://www.sass.hk/",icon:"https://www.sass.hk/favicon.ico",title:"sass"},{id:"less",href:"https://less.bootcss.com/",icon:"https://less.bootcss.com/public/ico/favicon.ico",title:"less"},{id:"stylus",href:"https://www.stylus-lang.cn/",icon:"https://www.stylus-lang.cn/favicon.ico",title:"stylus"}]}];function ke(s){const{showPopMenu:t,children:n}=s;return e.createElement("div",{className:`popup ${L}`},e.createElement("div",{className:"popup-mask",onClick:t}),e.createElement("div",{className:"popup-body"},n))}const Ae=l.exports.forwardRef((s,t)=>{const n=l.exports.useRef(),[i,o]=l.exports.useState(!1);function c(){o(!i)}return l.exports.useImperativeHandle(t,()=>({show(){o(!0)},hide(){o(!1)}}),[n]),i?H.exports.createPortal(e.createElement(ke,{showPopMenu:c},s.children),document.querySelector("body")):null}),Me="_search_1ihip_1";var Pe={search:Me};const{Option:Re}=F;function Se(s){const t=D("globalStore"),{activeClass:n,handleClassSearch:i}=s,[o,c]=l.exports.useState(null),r=S(),[u,d]=l.exports.useState([]),m=f=>{const x=t.search(f);d(x)},_=(f,x)=>{r(x.path),c(f)},E=()=>{i("focus_active")},b=()=>{i("")};return e.createElement("div",{className:y(Pe.search,n)},e.createElement(F,{showSearch:!0,value:o,placeholder:"\u641C\u7D22\u6587\u7AE0",defaultActiveFirstOption:!1,showArrow:!0,filterOption:!1,onSearch:m,onChange:_,notFoundContent:null,onFocus:E,onBlur:b,style:{width:"100%"}},p.exports.map(u,f=>e.createElement(Re,{key:f.key,path:f.path},f.name))))}var De=k(Se);const Le="_header_1mk7v_1",Te="_logo_1mk7v_12",Ie="_name_1mk7v_19",Ce="_github_btn_1mk7v_24",Oe="_github_btn_1mk7v_24",Ne="_h5_menu_1mk7v_27",ze="_h5_menu_1mk7v_27",Ve="_menu_1mk7v_31",Fe="_menu_item_1mk7v_36",Be="_menu_item_1mk7v_36",qe="_active_1mk7v_40",$e="_pc_menu_1mk7v_46",We="_pc_menu_1mk7v_46",Ue="_layout_1mk7v_71",He="_mdSiderWidth_1mk7v_74",Ge="_folder_1mk7v_80",Ke="_sider_1mk7v_86";var h={header:Le,logo:Te,name:Ie,github_btn:Ce,githubBtn:Oe,h5_menu:Ne,h5Menu:ze,menu:Ve,menu_item:Fe,menuItem:Be,active:qe,pc_menu:$e,pcMenu:We,layout:Ue,mdSiderWidth:He,folder:Ge,sider:Ke};function Qe(s){const t=D("globalStore"),{hidePop:n,className:i}=s,o=location.hash,c=S(),r=m=>{m.url?window.open(m.url,"_blank"):(c(`/${m.key}`),n&&n())},u=o.slice(2),d=t.mdxMenus;return e.createElement("div",{className:y(h.menu,i)},p.exports.map(d,m=>{const _=m.key===u||u.includes(m.key)&&m.key!==""?h.active:"";return e.createElement("div",{key:m.key,onClick:()=>r(m),className:y(h.menu_item,_)},m.title,m.url?e.createElement(Y,{className:h.github_btn}):null)}))}var O=k(Qe);const{Header:Ye}=j;function Xe(){const[s,t]=l.exports.useState(""),n=l.exports.useRef(null),i=()=>{var r;(r=n.current)==null||r.show()},o=()=>{var r;(r=n.current)==null||r.hide()},c=r=>{t(r)};return e.createElement(Ye,{className:h.header},e.createElement("div",{className:h.logo}),e.createElement("div",{className:h.name},ye),e.createElement(De,{handleClassSearch:c,activeClass:s}),e.createElement("div",{className:s},e.createElement(O,{className:h.pc_menu}),e.createElement(B,{className:h.h5_menu,onClick:i}),e.createElement(Ae,{ref:n},e.createElement(O,{hidePop:o}))))}var Je=e.memo(Xe);const{Content:Ze}=j;function et(s){const{isMd:t}=s;return e.createElement(Ze,{className:t?"markdown-body":"home"},e.createElement(q,null))}const{Content:tt,Sider:nt}=j;function ot(s){const t=ve(s.type),[n,i]=l.exports.useState(""),[o,c]=l.exports.useState(!1),r=S(),u=({key:d})=>{i(d),r(d)};return l.exports.useEffect(()=>{i(window.location.hash.slice(1))},[location.hash]),e.createElement(j,{className:h.layout},e.createElement("div",{className:h.folder},o?e.createElement(X,{onClick:()=>c(!o)}):e.createElement(B,{onClick:()=>c(!o)})),e.createElement(nt,{className:y(h.sider,o?"":h.mdSiderWidth),collapsedWidth:"0",trigger:null,collapsed:o},e.createElement(T,{mode:"inline",onClick:u,selectedKeys:[n],style:{height:"100%",borderRight:0,overflowX:"hidden",overflowY:"auto"}},p.exports.map(t,d=>e.createElement(T.Item,{key:d.path,title:d.name},d.name)))),e.createElement(tt,null,e.createElement(q,null)))}function st(s){const t=D("globalStore"),[n,i]=l.exports.useState(!1),o=l.exports.useRef(document.body.clientHeight),{isMd:c,type:r}=s;return l.exports.useEffect(()=>{t.initMdx().then(()=>{i(!0)});const u=()=>{o.current!==document.body.clientHeight&&window.location.reload()};return window.addEventListener("resize",p.exports.debounce(u,100)),()=>{window.removeEventListener("resize",u)}},[]),n?e.createElement(j,null,e.createElement(Je,null),r?e.createElement(ot,{type:r}):e.createElement(et,{isMd:c})):e.createElement(e.Fragment,null)}var P=k(st),it=`# <center>\u6280\u672F\u6808</center>

## \u8BA1\u7B97\u673A\u7F51\u7EDC

1. \u7F16\u8BD1\u539F\u7406
2. \u7F51\u7EDC\u5B89\u5168
3. http
4. DNS
5. CDN
6. TCP
7. websocket

## \u6D4F\u89C8\u5668

1. [web \u7F13\u5B58](https://mp.weixin.qq.com/s/uwtKu0h-r2O6XrmWhiJhtQ)
2. \u8DE8\u57DF

   [\u8DE8\u57DF\u7684\u591A\u79CD\u89E3\u51B3\u65B9\u6848](https://juejin.cn/post/6999977495550394404)

- iframe + document.domain location.hash window.name \u7B49\u4E09\u79CD
- postMessage
- proxyTable
- nodejs \u4E2D\u95F4\u4EF6\u4EE3\u7406\u8DE8\u57DF
- cors
- websocket
- jsonp
- nginx \u53CD\u5411\u4EE3\u7406

## \u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5

1. \u6570\u636E\u7ED3\u6784

- \u6811

  [\u6241\u5E73\u6570\u636E\u7ED3\u6784\u8F6C\u6811](https://juejin.cn/post/6983904373508145189)

  - \u9012\u5F52
  - \u901A\u8FC7 Map \u7F13\u5B58

2. \u7B97\u6CD5
3. \u8BBE\u8BA1\u6A21\u5F0F

   [\u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F\u53CA\u573A\u666F\u4F8B\u5B50](https://juejin.cn/post/6844904138707337229)

## \u8BBE\u8BA1

1. UML

- \u7528\u4F8B\u56FE

  [\u641E\u4E8B\u60C5\u4E4B UML \u7684\u7528\u4F8B\u56FE](https://juejin.cn/post/6844903753414344712)

- \u7C7B\u56FE

  [UML \u7C7B\u56FE\u4ECB\u7ECD](https://juejin.cn/post/6844903497201106958)

  \u7EE7\u627F\u3001\u5B9E\u73B0\u3001\u5173\u8054\u3001\u4F9D\u8D56\u3001\u7EC4\u5408\u3001\u805A\u5408

- \u65F6\u5E8F\u56FE

  [UML \u65F6\u5E8F\u56FE](https://juejin.cn/post/7132018483394510878)

## javaScript \u57FA\u7840

1. \u53D8\u91CF\u548C\u7C7B\u578B
2. \u539F\u578B\u548C\u539F\u578B\u94FE
3. \u4F5C\u7528\u57DF\u548C\u95ED\u5305
4. \u6267\u884C\u673A\u5236

## \u524D\u7AEF\u6846\u67B6

1. react
2. vue
3. web components

## \u524D\u7AEF\u5DE5\u7A0B\u5316

1. webpack
2. vite

## \u524D\u7AEF\u76D1\u63A7

[\u4E00\u6587\u641E\u61C2\u524D\u7AEF\u76D1\u63A7](https://juejin.cn/post/6903133330196299783)

1. \u6027\u80FD\u76D1\u63A7
2. \u5F02\u5E38\u76D1\u63A7
3. \u6570\u636E\u57CB\u70B9

## web \u5B89\u5168

[\u524D\u7AEF\u5E94\u8BE5\u61C2\u7684 web \u5B89\u5168\u77E5\u8BC6](https://juejin.cn/post/7033406182127566879)

1. xss
2. csrf

## \u591A\u7AEF\u5F00\u53D1

1. \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F

2. \u9489\u9489\u5C0F\u7A0B\u5E8F

3. uniapp

4. electron

## \u81EA\u52A8\u5316\u90E8\u7F72

1. docker

   [Docker \u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F\u524D\u7AEF\u600E\u4E48\u7528 Docker \u505A\u90E8\u7F72\uFF1F](https://mp.weixin.qq.com/s/qShEqZcn903fWDxnj1KKQA)

2. nginx

3. jenkins

## \u81EA\u52A8\u5316\u6D4B\u8BD5

1. \u79FB\u52A8\u7AEF h5\uFF1Apython + appium

2. web \u7AEF\uFF1Apython + selenium

3. \u5355\u5143\u6D4B\u8BD5

- [Jest \u6587\u6863](https://jestjs.io/zh-Hans/)

- [vistest](https://cn.vitest.dev/)
`;const ct={techmdx:it},rt="_mind_1dnzr_1",at="_button_1dnzr_11",lt="_map_1dnzr_17";var A={mind:rt,button:at,map:lt};function mt(){const s=new ee,{root:t,features:n}=s.transform(ct.techmdx),{styles:i,scripts:o}=s.getUsedAssets(n),{Markmap:c,loadCSS:r,loadJS:u}=I;i&&r(i),o&&u(o,{getMarkmap:()=>I}),c.create("#markmap",void 0,t)}function ut(s){const{showMindMap:t}=s,[n,i]=l.exports.useState(!1),o=()=>{i(!n)};return l.exports.useEffect(()=>{n&&mt()},[n]),e.createElement(e.Fragment,null,t?e.createElement(J,{onClick:o},n?"\u5173\u95ED":"\u6253\u5F00","\u601D\u7EF4\u5BFC\u56FE"):null,n?e.createElement("div",{className:A.mind},e.createElement(Z,{onClick:o,className:A.button}),e.createElement("svg",{id:"markmap",className:A.map})):null)}const pt=({children:s="",className:t="",style:n})=>{const i=t==null?void 0:t.replace(/language-/,"");return e.createElement(te,{...ne,theme:oe,code:s.trim(),language:i},({className:o,style:c,tokens:r,getLineProps:u,getTokenProps:d})=>e.createElement("pre",{className:o,style:n?{...c,...n}:c},r.map((m,_)=>e.createElement("div",{key:_,...u({line:m,key:_})},m.map((E,b)=>e.createElement("span",{key:b,...d({token:E,key:b})}))))))},dt="_code_block_5k4xv_1",ht="_code_block_5k4xv_1",ft="_actions_5k4xv_6",_t="_action_5k4xv_6";var M={code_block:dt,codeBlock:ht,actions:ft,action:_t};function N(s){const{children:t,className:n="language-tsx",component:i}=s,o=()=>{ie(t),ce.success("\u4EE3\u7801\u590D\u5236\u6210\u529F")};return e.createElement("div",{className:M.code_block},e.createElement("div",{className:M.actions},e.createElement("div",{className:M.action,onClick:o,title:"\u590D\u5236\u4EE3\u7801"},e.createElement(se,null))),e.createElement(pt,{className:n,style:{overflow:"visible",background:"#f6f8fa"}},i||t))}const gt="_card_1buuw_1";var vt={card:gt};const Et=s=>{const{content:t}=s;return e.createElement("div",{className:vt.card},p.exports.map(t,(n,i)=>e.createElement("div",{key:i},n.title,e.createElement("ul",null,p.exports.map(n.desc,(o,c)=>e.createElement("li",{key:c},o))))))},wt="_title_uj8fb_1",bt="_text_uj8fb_4";var z={title:wt,text:bt};const xt=s=>{const{text:t}=s;return e.createElement("div",{className:z.title},e.createElement("div",{className:z.text},t))},jt="_isResum_12ul7_1";var yt={isResum:jt};const kt={CodeBlock:N,MdTitle:xt,MdCard:Et,code:N};function At(s){const{children:t,isResum:n,showMindMap:i=!1}=s;return e.createElement(re,{components:kt},e.createElement(ut,{showMindMap:i}),e.createElement("div",{id:"markdown",className:n?yt.isResum:""},t))}var R=k(At);const Mt=()=>e.createElement("div",null,"404");function g(s){const{children:t}=s;return e.createElement(l.exports.Suspense,{fallback:e.createElement(ae,{size:"large",className:"loading"})},t)}const Pt=l.exports.lazy(()=>a(()=>import("./index.505464ad.js"),["assets/index.505464ad.js","assets/index.4dd96b6f.css","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"])),Rt=l.exports.lazy(()=>a(()=>import("./index.c351e6d3.js"),["assets/index.c351e6d3.js","assets/index.c22a13ac.css","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"])),St=l.exports.lazy(()=>a(()=>import("./index.82dd5480.js"),["assets/index.82dd5480.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"])),Dt=l.exports.lazy(()=>a(()=>import("./index.07849a9a.js"),["assets/index.07849a9a.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"])),Lt=l.exports.lazy(()=>a(()=>import("./index.c41bd020.js"),["assets/index.c41bd020.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"])),Tt=l.exports.lazy(()=>a(()=>import("./resume.0a025e49.js"),["assets/resume.0a025e49.js","assets/react-vendor.354bfc68.js","assets/vendor.7b08bbb4.js","assets/__commonjsHelpers__.be7665b8.js","assets/lodash.b4f4b5bf.js"])),It=[{path:"/",element:e.createElement(P,null),children:[{index:!0,element:e.createElement(g,null,e.createElement(Pt,null))}]},{path:"/site",element:e.createElement(g,null,e.createElement(Rt,null))},{path:"/md",element:e.createElement(P,{isMd:!0}),children:[{path:"/md/about",element:e.createElement(g,null,e.createElement(St,null))},{path:"/md/log",element:e.createElement(g,null,e.createElement(Dt,null))},{path:"/md/resume",element:e.createElement(R,null,e.createElement(g,null,e.createElement(Lt,null)))},{path:"/md/myresume",element:e.createElement(R,{isResum:!0},e.createElement(g,null,e.createElement(Tt,null)))}]},{path:"*",element:e.createElement(Mt,null)}],Ct=()=>{const s=p.exports.groupBy(p.exports.cloneDeep(v),"parentPath");return p.exports.map(s,(t,n)=>({path:`/${n}`,element:e.createElement(P,{type:n}),children:p.exports.map(t,(i,o)=>{o===0&&(i.index=!0,i.path="");const c=l.exports.lazy(i.element);return{...i,element:e.createElement("div",{className:"markdown-body"},e.createElement(R,{showMindMap:i.parentPath==="tech"},e.createElement(g,null,e.createElement(c,null))))}})}))},Ot=()=>le(It.concat(Ct()));function Nt(){const{debug:s}=me.resolveQuery();s==="1"&&window.localStorage.setItem("debug","1"),window.localStorage.getItem("debug")==="1"&&a(()=>import("./vconsole.min.b9a2c473.js").then(function(t){return t.v}),["assets/vconsole.min.b9a2c473.js","assets/__commonjsHelpers__.be7665b8.js"]).then(t=>{new t.default})}const V=375,zt=1e3;function Vt(s=V,t=zt){const n=document.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){const{clientWidth:c}=n;if(!c)return;const r=100/s*100;let u=1;c>=t&&(u=c/V),n.style.fontSize=`${r/u}vw`};document.addEventListener&&(window.addEventListener(i,o,!1),document.addEventListener("DOMContentLoaded",o,!1))}Vt();const Ft={globalStore:je};ge();Nt();G.render(e.createElement(l.exports.StrictMode,null,e.createElement(ue,{stores:Ft},e.createElement(pe,null,e.createElement(Ot,null)))),document.getElementById("root"));export{ye as A,Ht as S,D as u};
