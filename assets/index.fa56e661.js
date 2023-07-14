import{r as c,b as S}from"./react.96fb3fa0.js";import{K as me,s as $e,g as Re,m as Pe,M as De,O as je,P as We,Q as He,b as j,q as ge,j as K,R as xe,C as ie,w as pe,r as Me,T as Fe,U as de,V as ve}from"./index.6811c23c.js";import{l as fe}from"./lodash.2667a9b6.js";import{D as Ue}from"./index.2927abe4.js";import{g as Ve,s as Xe}from"./scrollTo.47ae4985.js";import"./markmap.f7526f2f.js";function ye(t){let n;const r=o=>()=>{n=null,t.apply(void 0,$e(o))},e=function(){if(n==null){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];n=me(r(i))}};return e.cancel=()=>{me.cancel(n),n=null},e}const Ye=t=>{const{componentCls:n}=t;return{[n]:{position:"fixed",zIndex:t.zIndexPopup}}};var qe=Re("Affix",t=>{const n=Pe(t,{zIndexPopup:t.zIndexBase+10});return[Ye(n)]});function le(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Ce(t,n,r){if(r!==void 0&&n.top>t.top-r)return r+n.top}function be(t,n,r){if(r!==void 0&&n.bottom<t.bottom+r){const e=window.innerHeight-n.bottom;return r+e}}var Q="/home/runner/work/yaolx.github.io/yaolx.github.io/node_modules/antd/es/affix/index.js";const we=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function Ge(){return typeof window!="undefined"?window:null}var Z;(function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"})(Z||(Z={}));let _e=function(t){De(r,t);var n=je(r);function r(){var e;return We(this,r),e=n.apply(this,arguments),e.state={status:Z.None,lastAffix:!1,prevTarget:null},e.placeholderNodeRef=c.exports.createRef(),e.fixedNodeRef=c.exports.createRef(),e.addListeners=()=>{const o=e.getTargetFunc(),i=o==null?void 0:o(),{prevTarget:s}=e.state;s!==i&&(we.forEach(l=>{s==null||s.removeEventListener(l,e.lazyUpdatePosition),i==null||i.addEventListener(l,e.lazyUpdatePosition)}),e.updatePosition(),e.setState({prevTarget:i}))},e.removeListeners=()=>{e.timer&&(clearTimeout(e.timer),e.timer=null);const{prevTarget:o}=e.state,i=e.getTargetFunc(),s=i==null?void 0:i();we.forEach(l=>{s==null||s.removeEventListener(l,e.lazyUpdatePosition),o==null||o.removeEventListener(l,e.lazyUpdatePosition)}),e.updatePosition.cancel(),e.lazyUpdatePosition.cancel()},e.getOffsetTop=()=>{const{offsetBottom:o,offsetTop:i}=e.props;return o===void 0&&i===void 0?0:i},e.getOffsetBottom=()=>e.props.offsetBottom,e.measure=()=>{const{status:o,lastAffix:i}=e.state,{onChange:s}=e.props,l=e.getTargetFunc();if(o!==Z.Prepare||!e.fixedNodeRef.current||!e.placeholderNodeRef.current||!l)return;const h=e.getOffsetTop(),v=e.getOffsetBottom(),g=l();if(g){const d={status:Z.None},f=le(e.placeholderNodeRef.current);if(f.top===0&&f.left===0&&f.width===0&&f.height===0)return;const y=le(g),m=Ce(f,y,h),w=be(f,y,v);m!==void 0?(d.affixStyle={position:"fixed",top:m,width:f.width,height:f.height},d.placeholderStyle={width:f.width,height:f.height}):w!==void 0&&(d.affixStyle={position:"fixed",bottom:w,width:f.width,height:f.height},d.placeholderStyle={width:f.width,height:f.height}),d.lastAffix=!!d.affixStyle,s&&i!==d.lastAffix&&s(d.lastAffix),e.setState(d)}},e.prepareMeasure=()=>{e.setState({status:Z.Prepare,affixStyle:void 0,placeholderStyle:void 0});{const{onTestUpdatePosition:o}=e.props;o==null||o()}},e.updatePosition=ye(()=>{e.prepareMeasure()}),e.lazyUpdatePosition=ye(()=>{const o=e.getTargetFunc(),{affixStyle:i}=e.state;if(o&&i){const s=e.getOffsetTop(),l=e.getOffsetBottom(),h=o();if(h&&e.placeholderNodeRef.current){const v=le(h),g=le(e.placeholderNodeRef.current),d=Ce(g,v,s),f=be(g,v,l);if(d!==void 0&&i.top===d||f!==void 0&&i.bottom===f)return}}e.prepareMeasure()}),e}return He(r,[{key:"getTargetFunc",value:function(){const{getTargetContainer:o}=this.context,{target:i}=this.props;return i!==void 0?i:o!=null?o:Ge}},{key:"componentDidMount",value:function(){this.timer=setTimeout(this.addListeners)}},{key:"componentDidUpdate",value:function(o){this.addListeners(),(o.offsetTop!==this.props.offsetTop||o.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"render",value:function(){const{affixStyle:o,placeholderStyle:i}=this.state,{affixPrefixCls:s,rootClassName:l,children:h}=this.props,v=j(o&&l,{[s]:!!o});let g=ge(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return g=ge(g,["onTestUpdatePosition"]),K.exports.jsxDEV(xe,{onResize:this.updatePosition,children:K.exports.jsxDEV("div",{...Object.assign({},g,{ref:this.placeholderNodeRef}),children:[o&&K.exports.jsxDEV("div",{style:i,"aria-hidden":"true"},void 0,!1,{fileName:Q,lineNumber:240,columnNumber:38},this),K.exports.jsxDEV("div",{className:v,ref:this.fixedNodeRef,style:o,children:K.exports.jsxDEV(xe,{onResize:this.updatePosition,children:h},void 0,!1,{fileName:Q,lineNumber:247,columnNumber:23},this)},void 0,!1,{fileName:Q,lineNumber:243,columnNumber:24},this)]},void 0,!0,{fileName:Q,lineNumber:238,columnNumber:23},this)},void 0,!1,{fileName:Q,lineNumber:236,columnNumber:27},this)}}]),r}(S.Component);_e.contextType=ie;const Ae=c.exports.forwardRef((t,n)=>{const{prefixCls:r,rootClassName:e}=t,{getPrefixCls:o}=c.exports.useContext(ie),i=o("affix",r),[s,l]=qe(i),h=Object.assign(Object.assign({},t),{affixPrefixCls:i,rootClassName:j(e,l)});return s(K.exports.jsxDEV(_e,{...Object.assign({},h,{ref:n})},void 0,!1,{fileName:Q,lineNumber:269,columnNumber:32},globalThis))});Ae.displayName="Affix";var Je=Ae;const ke=t=>typeof t=="object"&&t!=null&&t.nodeType===1,Ne=(t,n)=>(!n||t!=="hidden")&&t!=="visible"&&t!=="clip",ue=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const r=getComputedStyle(t,null);return Ne(r.overflowY,n)||Ne(r.overflowX,n)||(e=>{const o=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!o&&(o.clientHeight<e.scrollHeight||o.clientWidth<e.scrollWidth)})(t)}return!1},ae=(t,n,r,e,o,i,s,l)=>i<t&&s>n||i>t&&s<n?0:i<=t&&l<=r||s>=n&&l>=r?i-t-e:s>n&&l<r||i<t&&l>r?s-n+o:0,Ke=t=>{const n=t.parentElement;return n==null?t.getRootNode().host||null:n},Se=(t,n)=>{var r,e,o,i;if(typeof document=="undefined")return[];const{scrollMode:s,block:l,inline:h,boundary:v,skipOverflowHiddenElements:g}=n,d=typeof v=="function"?v:M=>M!==v;if(!ke(t))throw new TypeError("Invalid target");const f=document.scrollingElement||document.documentElement,y=[];let m=t;for(;ke(m)&&d(m);){if(m=Ke(m),m===f){y.push(m);break}m!=null&&m===document.body&&ue(m)&&!ue(document.documentElement)||m!=null&&ue(m,g)&&y.push(m)}const w=(e=(r=window.visualViewport)==null?void 0:r.width)!=null?e:innerWidth,$=(i=(o=window.visualViewport)==null?void 0:o.height)!=null?i:innerHeight,{scrollX:x,scrollY:R}=window,{height:T,width:P,top:N,right:ee,bottom:W,left:H}=t.getBoundingClientRect();let C=l==="start"||l==="nearest"?N:l==="end"?W:N+T/2,b=h==="center"?H+P/2:h==="end"?ee:H;const te=[];for(let M=0;M<y.length;M++){const u=y[M],{height:_,width:L,top:Y,right:ne,bottom:oe,left:q}=u.getBoundingClientRect();if(s==="if-needed"&&N>=0&&H>=0&&W<=$&&ee<=w&&N>=Y&&W<=oe&&H>=q&&ee<=ne)return te;const I=getComputedStyle(u),z=parseInt(I.borderLeftWidth,10),F=parseInt(I.borderTopWidth,10),G=parseInt(I.borderRightWidth,10),J=parseInt(I.borderBottomWidth,10);let A=0,B=0;const U="offsetWidth"in u?u.offsetWidth-u.clientWidth-z-G:0,V="offsetHeight"in u?u.offsetHeight-u.clientHeight-F-J:0,se="offsetWidth"in u?u.offsetWidth===0?0:L/u.offsetWidth:0,a="offsetHeight"in u?u.offsetHeight===0?0:_/u.offsetHeight:0;if(f===u)A=l==="start"?C:l==="end"?C-$:l==="nearest"?ae(R,R+$,$,F,J,R+C,R+C+T,T):C-$/2,B=h==="start"?b:h==="center"?b-w/2:h==="end"?b-w:ae(x,x+w,w,z,G,x+b,x+b+P,P),A=Math.max(0,A+R),B=Math.max(0,B+x);else{A=l==="start"?C-Y-F:l==="end"?C-oe+J+V:l==="nearest"?ae(Y,oe,_,F,J+V,C,C+T,T):C-(Y+_/2)+V/2,B=h==="start"?b-q-z:h==="center"?b-(q+L/2)+U/2:h==="end"?b-ne+G+U:ae(q,ne,L,z,G+U,b,b+P,P);const{scrollLeft:p,scrollTop:k}=u;A=Math.max(0,Math.min(k+A/a,u.scrollHeight-_/a+V)),B=Math.max(0,Math.min(p+B/se,u.scrollWidth-L/se+U)),C+=k-A,b+=p-B}te.push({el:u,top:A,left:B})}return te},Qe=t=>t===!1?{block:"end",inline:"nearest"}:(n=>n===Object(n)&&Object.keys(n).length!==0)(t)?t:{block:"start",inline:"nearest"};function Ze(t,n){if(!t.isConnected||!(e=>{let o=e;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(t))return;if((e=>typeof e=="object"&&typeof e.behavior=="function")(n))return n.behavior(Se(t,n));const r=typeof n=="boolean"||n==null?void 0:n.behavior;for(const{el:e,top:o,left:i}of Se(t,Qe(n)))e.scroll({top:o,left:i,behavior:r})}const et=c.exports.createContext(void 0);var Be=et;const tt=t=>{const{href:n,title:r,prefixCls:e,children:o,className:i,target:s,replace:l}=t,h=c.exports.useContext(Be),{registerLink:v,unregisterLink:g,scrollTo:d,onClick:f,activeLink:y,direction:m}=h||{};c.exports.useEffect(()=>(v==null||v(n),()=>{g==null||g(n)}),[n]);const w=N=>{l&&(N.preventDefault(),window.location.replace(n)),f==null||f(N,{title:r,href:n}),d==null||d(n)};pe(!o||m!=="horizontal","Anchor.Link","`Anchor.Link children` is not supported when `Anchor` direction is horizontal");const{getPrefixCls:$}=c.exports.useContext(ie),x=$("anchor",e),R=y===n,T=j(`${x}-link`,i,{[`${x}-link-active`]:R}),P=j(`${x}-link-title`,{[`${x}-link-title-active`]:R});return c.exports.createElement("div",{className:T},c.exports.createElement("a",{className:P,href:n,title:typeof r=="string"?r:"",target:s,onClick:w},r),m!=="horizontal"?o:null)};var Le=tt;const nt=t=>{const{componentCls:n,holderOffsetBlock:r,motionDurationSlow:e,lineWidthBold:o,colorPrimary:i,lineType:s,colorSplit:l}=t;return{[`${n}-wrapper`]:{marginBlockStart:-r,paddingBlockStart:r,[n]:Object.assign(Object.assign({},Me(t)),{position:"relative",paddingInlineStart:o,[`${n}-link`]:{paddingBlock:t.linkPaddingBlock,paddingInline:`${t.linkPaddingInlineStart}px 0`,"&-title":Object.assign(Object.assign({},Fe),{position:"relative",display:"block",marginBlockEnd:t.anchorTitleBlock,color:t.colorText,transition:`all ${t.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${n}-link-title`]:{color:t.colorPrimary},[`${n}-link`]:{paddingBlock:t.anchorPaddingBlockSecondary}}}),[`&:not(${n}-wrapper-horizontal)`]:{[n]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${o}px ${s} ${l}`,content:'" "'},[`${n}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${e} ease-in-out`,width:o,backgroundColor:i,[`&${n}-ink-visible`]:{display:"inline-block"}}}},[`${n}-fixed ${n}-ink ${n}-ink`]:{display:"none"}}}},ot=t=>{const{componentCls:n,motionDurationSlow:r,lineWidthBold:e,colorPrimary:o}=t;return{[`${n}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`1px ${t.lineType} ${t.colorSplit}`,content:'" "'},[n]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${n}-link:first-of-type`]:{paddingInline:0},[`${n}-ink`]:{position:"absolute",bottom:0,transition:`left ${r} ease-in-out, width ${r} ease-in-out`,height:e,backgroundColor:o}}}}};var rt=Re("Anchor",t=>{const{fontSize:n,fontSizeLG:r,paddingXXS:e}=t,o=Pe(t,{holderOffsetBlock:e,anchorPaddingBlockSecondary:e/2,anchorTitleBlock:n/14*3,anchorBallSize:r/2});return[nt(o),ot(o)]},t=>({linkPaddingBlock:t.paddingXXS,linkPaddingInlineStart:t.padding}));function it(){return window}function Te(t,n){if(!t.getClientRects().length)return 0;const r=t.getBoundingClientRect();return r.width||r.height?n===window?(n=t.ownerDocument.documentElement,r.top-n.clientTop):r.top-n.getBoundingClientRect().top:r.top}const Ee=/#([\S ]+)$/,st=t=>{var n;const{rootClassName:r,anchorPrefixCls:e,className:o,style:i,offsetTop:s,affix:l=!0,showInkInFixed:h=!1,children:v,items:g,direction:d="vertical",bounds:f,targetOffset:y,onClick:m,onChange:w,getContainer:$,getCurrentAnchor:x,replace:R}=t;pe(!v,"Anchor","`Anchor children` is deprecated. Please use `items` instead."),pe(!(d==="horizontal"&&(g==null?void 0:g.some(a=>"children"in a))),"Anchor","`Anchor items#children` is not supported when `Anchor` direction is horizontal.");const[T,P]=c.exports.useState([]),[N,ee]=c.exports.useState(null),W=c.exports.useRef(N),H=c.exports.useRef(null),C=c.exports.useRef(null),b=c.exports.useRef(!1),{direction:te,getTargetContainer:M,anchor:u}=c.exports.useContext(ie),_=(n=$!=null?$:M)!==null&&n!==void 0?n:it,L=JSON.stringify(T),Y=de(a=>{T.includes(a)||P(p=>[].concat($e(p),[a]))}),ne=de(a=>{T.includes(a)&&P(p=>p.filter(k=>k!==a))}),oe=()=>{var a;const p=(a=H.current)===null||a===void 0?void 0:a.querySelector(`.${e}-link-title-active`);if(p&&C.current){const{style:k}=C.current,E=d==="horizontal";k.top=E?"":`${p.offsetTop+p.clientHeight/2}px`,k.height=E?"":`${p.clientHeight}px`,k.left=E?`${p.offsetLeft}px`:"",k.width=E?`${p.clientWidth}px`:"",E&&Ze(p,{scrollMode:"if-needed",block:"nearest"})}},q=function(a){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const E=[],ce=_();return a.forEach(X=>{const O=Ee.exec(X==null?void 0:X.toString());if(!O)return;const re=document.getElementById(O[1]);if(re){const he=Te(re,ce);he<p+k&&E.push({link:X,top:he})}}),E.length?E.reduce((O,re)=>re.top>O.top?re:O).link:""},I=de(a=>{if(W.current===a)return;const p=typeof x=="function"?x(a):a;ee(p),W.current=p,w==null||w(a)}),z=c.exports.useCallback(()=>{if(b.current||typeof x=="function")return;const a=q(T,y!==void 0?y:s||0,f);I(a)},[L,y,s]),F=c.exports.useCallback(a=>{I(a);const p=Ee.exec(a);if(!p)return;const k=document.getElementById(p[1]);if(!k)return;const E=_(),ce=Ve(E,!0),X=Te(k,E);let O=ce+X;O-=y!==void 0?y:s||0,b.current=!0,Xe(O,{getContainer:_,callback(){b.current=!1}})},[y,s]),G=j(r,`${e}-wrapper`,{[`${e}-wrapper-horizontal`]:d==="horizontal",[`${e}-rtl`]:te==="rtl"},o,u==null?void 0:u.className),J=j(e,{[`${e}-fixed`]:!l&&!h}),A=j(`${e}-ink`,{[`${e}-ink-visible`]:N}),B=Object.assign(Object.assign({maxHeight:s?`calc(100vh - ${s}px)`:"100vh"},u==null?void 0:u.style),i),U=a=>Array.isArray(a)?a.map(p=>c.exports.createElement(Le,Object.assign({replace:R},p,{key:p.key}),d==="vertical"&&U(p.children))):null,V=c.exports.createElement("div",{ref:H,className:G,style:B},c.exports.createElement("div",{className:J},c.exports.createElement("span",{className:A,ref:C}),"items"in t?U(g):v));c.exports.useEffect(()=>{const a=_();return z(),a==null||a.addEventListener("scroll",z),()=>{a==null||a.removeEventListener("scroll",z)}},[L]),c.exports.useEffect(()=>{typeof x=="function"&&I(x(W.current||""))},[x]),c.exports.useEffect(()=>{oe()},[d,x,L,N]);const se=c.exports.useMemo(()=>({registerLink:Y,unregisterLink:ne,scrollTo:F,activeLink:N,onClick:m,direction:d}),[N,m,F,d]);return c.exports.createElement(Be.Provider,{value:se},l?c.exports.createElement(Je,{offsetTop:s,target:_},V):V)},Ie=t=>{const{prefixCls:n,rootClassName:r}=t,{getPrefixCls:e}=c.exports.useContext(ie),o=e("anchor",n),[i,s]=rt(o);return i(c.exports.createElement(st,Object.assign({},t,{rootClassName:j(s,r),anchorPrefixCls:o})))};Ie.displayName="Anchor";var lt=Ie;const ze=lt;ze.Link=Le;var Oe=ze;const at=new URL("/assets/avatar.d0686986.jpg",self.location);function ct(t){const{src:n,defaultSrc:r=at.href,...e}=t,o=S.useRef(null);return c.exports.useEffect(()=>{const{current:i}=o;if(i){const s=new Image;s.onload=()=>{i.src=n},n&&(s.src=n)}},[n]),S.createElement("img",{ref:o,src:r,...e})}const dt="_site_16y90_1",ft="_category_16y90_9",ut="_content_16y90_21",pt="_item_16y90_25",ht="_img_16y90_36",mt="_title_16y90_45",gt="_search_16y90_53",xt="_left_16y90_56",vt="_anchor_16y90_59";var D={site:dt,category:ft,content:ut,item:pt,img:ht,title:mt,search:gt,left:xt,anchor:vt};const{Link:yt}=Oe;function Tt(){const t=c.exports.useRef(null),n=(r,e)=>{r.preventDefault();const o=t.current,i=document.querySelector(`#${e.href}`);o&&i&&(o.scrollTop=i.offsetTop)};return S.createElement("div",{className:D.site,ref:t},S.createElement("div",{className:D.left},fe.exports.map(ve,r=>S.createElement("div",{className:D.category,key:r.id,id:r.id},S.createElement(Ue,{orientation:"left"},r.title),S.createElement("div",{className:D.content},fe.exports.map(r.children,e=>S.createElement("a",{href:e.href,key:e.id,className:D.item,target:"_blank",rel:"noreferrer"},S.createElement(ct,{src:e.icon||"",className:D.img}),S.createElement("div",{className:D.title},e.title)))))),S.createElement(Oe,{affix:!1,onClick:n,className:D.anchor},fe.exports.map(ve,r=>S.createElement(yt,{href:`${r.id}`,title:r.title,key:r.id})))))}export{Tt as default};
