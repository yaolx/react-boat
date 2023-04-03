import{r as a,b as T}from"./react.96fb3fa0.js";import{y as ce,i as _e,g as $e,m as Re,M as We,O as je,P as Me,Q as Fe,T as Ve,b as z,o as me,j as te,R as ge,C as ae,w as ue,V as Ue,r as Xe,W as Ye,X as xe}from"./index.1f56e35f.js";import{l as fe}from"./lodash.2667a9b6.js";import{D as Ge}from"./index.e266dc48.js";import"./markmap.f7526f2f.js";function ve(e){let t;const o=i=>()=>{t=null,e.apply(void 0,_e(i))},n=function(){if(t==null){for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];t=ce(o(r))}};return n.cancel=()=>{ce.cancel(t),t=null},n}const qe=e=>{const{componentCls:t}=e;return{[t]:{position:"fixed",zIndex:e.zIndexPopup}}};var Je=$e("Affix",e=>{const t=Re(e,{zIndexPopup:e.zIndexBase+10});return[qe(t)]});function se(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ye(e,t,o){if(o!==void 0&&t.top>e.top-o)return o+t.top}function we(e,t,o){if(o!==void 0&&t.bottom<e.bottom+o){const n=window.innerHeight-t.bottom;return o+n}}const Ae=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];let re=[];function Ce(e,t){if(!e)return;let o=re.find(n=>n.target===e);o?o.affixList.push(t):(o={target:e,affixList:[t],eventHandlers:{}},re.push(o),Ae.forEach(n=>{o.eventHandlers[n]=We(e,n,()=>{o.affixList.forEach(i=>{i.lazyUpdatePosition()})})}))}function be(e){const t=re.find(o=>{const n=o.affixList.some(i=>i===e);return n&&(o.affixList=o.affixList.filter(i=>i!==e)),n});t&&t.affixList.length===0&&(re=re.filter(o=>o!==t),Ae.forEach(o=>{const n=t.eventHandlers[o];n&&n.remove&&n.remove()}))}var ne="/home/runner/work/yaolx.github.io/yaolx.github.io/node_modules/antd/es/affix/index.js";function Qe(){return typeof window!="undefined"?window:null}var oe;(function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"})(oe||(oe={}));let Le=function(e){je(o,e);var t=Me(o);function o(){var n;return Fe(this,o),n=t.apply(this,arguments),n.state={status:oe.None,lastAffix:!1,prevTarget:null},n.placeholderNodeRef=a.exports.createRef(),n.fixedNodeRef=a.exports.createRef(),n.getOffsetTop=()=>{const{offsetBottom:i,offsetTop:r}=n.props;return i===void 0&&r===void 0?0:r},n.getOffsetBottom=()=>n.props.offsetBottom,n.measure=()=>{const{status:i,lastAffix:r}=n.state,{onChange:s}=n.props,c=n.getTargetFunc();if(i!==oe.Prepare||!n.fixedNodeRef.current||!n.placeholderNodeRef.current||!c)return;const m=n.getOffsetTop(),u=n.getOffsetBottom(),d=c();if(!d)return;const f={status:oe.None},N=se(d),h=se(n.placeholderNodeRef.current),S=ye(h,N,m),w=we(h,N,u);h.top===0&&h.left===0&&h.width===0&&h.height===0||(S!==void 0?(f.affixStyle={position:"fixed",top:S,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}):w!==void 0&&(f.affixStyle={position:"fixed",bottom:w,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}),f.lastAffix=!!f.affixStyle,s&&r!==f.lastAffix&&s(f.lastAffix),n.setState(f))},n.prepareMeasure=()=>{n.setState({status:oe.Prepare,affixStyle:void 0,placeholderStyle:void 0});{const{onTestUpdatePosition:i}=n.props;i==null||i()}},n.updatePosition=ve(()=>{n.prepareMeasure()}),n.lazyUpdatePosition=ve(()=>{const i=n.getTargetFunc(),{affixStyle:r}=n.state;if(i&&r){const s=n.getOffsetTop(),c=n.getOffsetBottom(),m=i();if(m&&n.placeholderNodeRef.current){const u=se(m),d=se(n.placeholderNodeRef.current),f=ye(d,u,s),N=we(d,u,c);if(f!==void 0&&r.top===f||N!==void 0&&r.bottom===N)return}}n.prepareMeasure()}),n}return Ve(o,[{key:"getTargetFunc",value:function(){const{getTargetContainer:i}=this.context,{target:r}=this.props;return r!==void 0?r:i!=null?i:Qe}},{key:"componentDidMount",value:function(){const i=this.getTargetFunc();i&&(this.timer=setTimeout(()=>{Ce(i(),this),this.updatePosition()}))}},{key:"componentDidUpdate",value:function(i){const{prevTarget:r}=this.state,s=this.getTargetFunc(),c=(s==null?void 0:s())||null;r!==c&&(be(this),c&&(Ce(c,this),this.updatePosition()),this.setState({prevTarget:c})),(i.offsetTop!==this.props.offsetTop||i.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),be(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"render",value:function(){const{affixStyle:i,placeholderStyle:r}=this.state,{affixPrefixCls:s,rootClassName:c,children:m}=this.props,u=z(i&&c,{[s]:!!i});let d=me(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return d=me(d,["onTestUpdatePosition"]),te.exports.jsxDEV(ge,{onResize:this.updatePosition,children:te.exports.jsxDEV("div",{...Object.assign({},d,{ref:this.placeholderNodeRef}),children:[i&&te.exports.jsxDEV("div",{style:r,"aria-hidden":"true"},void 0,!1,{fileName:ne,lineNumber:235,columnNumber:38},this),te.exports.jsxDEV("div",{className:u,ref:this.fixedNodeRef,style:i,children:te.exports.jsxDEV(ge,{onResize:this.updatePosition,children:m},void 0,!1,{fileName:ne,lineNumber:242,columnNumber:23},this)},void 0,!1,{fileName:ne,lineNumber:238,columnNumber:24},this)]},void 0,!0,{fileName:ne,lineNumber:233,columnNumber:23},this)},void 0,!1,{fileName:ne,lineNumber:231,columnNumber:27},this)}}]),o}(T.Component);Le.contextType=ae;const Pe=a.exports.forwardRef((e,t)=>{const{prefixCls:o,rootClassName:n}=e,{getPrefixCls:i}=a.exports.useContext(ae),r=i("affix",o),[s,c]=Je(r),m=Object.assign(Object.assign({},e),{affixPrefixCls:r,rootClassName:z(n,c)});return s(te.exports.jsxDEV(Le,{...Object.assign({},m,{ref:t})},void 0,!1,{fileName:ne,lineNumber:264,columnNumber:32},globalThis))});Pe.displayName="Affix";var Ke=Pe;let ke=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Te=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",de=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let o=getComputedStyle(e,null);return Te(o.overflowY,t)||Te(o.overflowX,t)||(n=>{let i=(r=>{if(!r.ownerDocument||!r.ownerDocument.defaultView)return null;try{return r.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!i&&(i.clientHeight<n.scrollHeight||i.clientWidth<n.scrollWidth)})(e)}return!1},le=(e,t,o,n,i,r,s,c)=>r<e&&s>t||r>e&&s<t?0:r<=e&&c<=o||s>=t&&c>=o?r-e-n:s>t&&c<o||r<e&&c>o?s-t+i:0,Ze=e=>{let t=e.parentElement;return t==null?e.getRootNode().host||null:t};var Ne=(e,t)=>{var o,n,i,r,s,c;if(typeof document=="undefined")return[];let{scrollMode:m,block:u,inline:d,boundary:f,skipOverflowHiddenElements:N}=t,h=typeof f=="function"?f:M=>M!==f;if(!ke(e))throw new TypeError("Invalid target");let S=document.scrollingElement||document.documentElement,w=[],x=e;for(;ke(x)&&h(x);){if(x=Ze(x),x===S){w.push(x);break}x!=null&&x===document.body&&de(x)&&!de(document.documentElement)||x!=null&&de(x,N)&&w.push(x)}let v=(n=(o=window.visualViewport)==null?void 0:o.width)!=null?n:innerWidth,C=(r=(i=window.visualViewport)==null?void 0:i.height)!=null?r:innerHeight,_=(s=window.scrollX)!=null?s:pageXOffset,b=(c=window.scrollY)!=null?c:pageYOffset,{height:H,width:P,top:W,right:$,bottom:j,left:Y}=e.getBoundingClientRect(),k=u==="start"||u==="nearest"?W:u==="end"?j:W+H/2,y=d==="center"?Y+P/2:d==="end"?$:Y,B=[];for(let M=0;M<w.length;M++){let g=w[M],{height:G,width:q,top:D,right:F,bottom:J,left:Q}=g.getBoundingClientRect();if(m==="if-needed"&&W>=0&&Y>=0&&j<=C&&$<=v&&W>=D&&j<=J&&Y>=Q&&$<=F)return B;let K=getComputedStyle(g),Z=parseInt(K.borderLeftWidth,10),ee=parseInt(K.borderTopWidth,10),V=parseInt(K.borderRightWidth,10),U=parseInt(K.borderBottomWidth,10),R=0,l=0,p="offsetWidth"in g?g.offsetWidth-g.clientWidth-Z-V:0,A="offsetHeight"in g?g.offsetHeight-g.clientHeight-ee-U:0,O="offsetWidth"in g?g.offsetWidth===0?0:q/g.offsetWidth:0,X="offsetHeight"in g?g.offsetHeight===0?0:G/g.offsetHeight:0;if(S===g)R=u==="start"?k:u==="end"?k-C:u==="nearest"?le(b,b+C,C,ee,U,b+k,b+k+H,H):k-C/2,l=d==="start"?y:d==="center"?y-v/2:d==="end"?y-v:le(_,_+v,v,Z,V,_+y,_+y+P,P),R=Math.max(0,R+b),l=Math.max(0,l+_);else{R=u==="start"?k-D-ee:u==="end"?k-J+U+A:u==="nearest"?le(D,J,G,ee,U+A,k,k+H,H):k-(D+G/2)+A/2,l=d==="start"?y-Q-Z:d==="center"?y-(Q+q/2)+p/2:d==="end"?y-F+V+p:le(Q,F,q,Z,V+p,y,y+P,P);let{scrollLeft:L,scrollTop:E}=g;R=Math.max(0,Math.min(E+R/X,g.scrollHeight-G/X+A)),l=Math.max(0,Math.min(L+l/O,g.scrollWidth-q/O+p)),k+=E-R,y+=L-l}B.push({el:g,top:R,left:l})}return B};let et=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function tt(e,t){let o=e.isConnected||e.ownerDocument.documentElement.contains(e);if((s=>typeof s=="object"&&typeof s.behavior=="function")(t))return t.behavior(o?Ne(e,t):[]);if(!o)return;let n=et(t),i=Ne(e,n),r="scrollBehavior"in document.body.style;i.forEach(s=>{let{el:c,top:m,left:u}=s;c.scroll&&r?c.scroll({top:m,left:u,behavior:n.behavior}):(c.scrollTop=m,c.scrollLeft=u)})}function pe(e){return e!=null&&e===e.window}function Be(e,t){var o,n;if(typeof window=="undefined")return 0;const i=t?"scrollTop":"scrollLeft";let r=0;return pe(e)?r=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?r=e.documentElement[i]:(e instanceof HTMLElement||e)&&(r=e[i]),e&&!pe(e)&&typeof r!="number"&&(r=(n=((o=e.ownerDocument)!==null&&o!==void 0?o:e).documentElement)===null||n===void 0?void 0:n[i]),r}function nt(e,t,o,n){const i=o-t;return e/=n/2,e<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}function ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:o=()=>window,callback:n,duration:i=450}=t,r=o(),s=Be(r,!0),c=Date.now(),m=()=>{const d=Date.now()-c,f=nt(d>i?i:d,s,e,i);pe(r)?r.scrollTo(window.pageXOffset,f):r instanceof Document||r.constructor.name==="HTMLDocument"?r.documentElement.scrollTop=f:r.scrollTop=f,d<i?ce(m):typeof n=="function"&&n()};ce(m)}const it=a.exports.createContext(void 0);var Oe=it;const rt=e=>{const{href:t="#",title:o,prefixCls:n,children:i,className:r,target:s}=e,c=a.exports.useContext(Oe),{registerLink:m,unregisterLink:u,scrollTo:d,onClick:f,activeLink:N,direction:h}=c||{};a.exports.useEffect(()=>(m==null||m(t),()=>{u==null||u(t)}),[t,m,u]);const S=w=>{f==null||f(w,{title:o,href:t}),d==null||d(t)};return ue(!i||h!=="horizontal","Anchor.Link","`Anchor.Link children` is not supported when `Anchor` direction is horizontal"),a.exports.createElement(Ue,null,w=>{let{getPrefixCls:x}=w;const v=x("anchor",n),C=N===t,_=z(`${v}-link`,r,{[`${v}-link-active`]:C}),b=z(`${v}-link-title`,{[`${v}-link-title-active`]:C});return a.exports.createElement("div",{className:_},a.exports.createElement("a",{className:b,href:t,title:typeof o=="string"?o:"",target:s,onClick:S},o),h!=="horizontal"?i:null)})};var De=rt;const st=e=>{const{componentCls:t,holderOffsetBlock:o,motionDurationSlow:n,lineWidthBold:i,colorPrimary:r,lineType:s,colorSplit:c}=e;return{[`${t}-wrapper`]:{marginBlockStart:-o,paddingBlockStart:o,backgroundColor:"transparent",[t]:Object.assign(Object.assign({},Xe(e)),{position:"relative",paddingInlineStart:i,[`${t}-link`]:{paddingBlock:e.anchorPaddingBlock,paddingInline:`${e.anchorPaddingInline}px 0`,"&-title":Object.assign(Object.assign({},Ye),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${t}-link-title`]:{color:e.colorPrimary},[`${t}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${t}-horizontal)`]:{[t]:{"&::before":{position:"absolute",left:{_skip_check_:!0,value:0},top:0,height:"100%",borderInlineStart:`${i}px ${s} ${c}`,content:'" "'},[`${t}-ink`]:{position:"absolute",left:{_skip_check_:!0,value:0},display:"none",transform:"translateY(-50%)",transition:`top ${n} ease-in-out`,width:i,backgroundColor:r,[`&${t}-ink-visible`]:{display:"inline-block"}}}},[`${t}-fixed ${t}-ink ${t}-ink`]:{display:"none"}}}},lt=e=>{const{componentCls:t,motionDurationSlow:o,lineWidthBold:n,colorPrimary:i}=e;return{[`${t}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`1px ${e.lineType} ${e.colorSplit}`,content:'" "'},[t]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${t}-link:first-of-type`]:{paddingInline:0},[`${t}-ink`]:{position:"absolute",bottom:0,transition:`left ${o} ease-in-out, width ${o} ease-in-out`,height:n,backgroundColor:i}}}}};var ct=$e("Anchor",e=>{const{fontSize:t,fontSizeLG:o,padding:n,paddingXXS:i}=e,r=Re(e,{holderOffsetBlock:i,anchorPaddingBlock:i,anchorPaddingBlockSecondary:i/2,anchorPaddingInline:n,anchorTitleBlock:t/14*3,anchorBallSize:o/2});return[st(r),lt(r)]});function at(){return window}function Ee(e,t){if(!e.getClientRects().length)return 0;const o=e.getBoundingClientRect();return o.width||o.height?t===window?(t=e.ownerDocument.documentElement,o.top-t.clientTop):o.top-t.getBoundingClientRect().top:o.top}const Se=/#([\S ]+)$/,ft=e=>{var t;const{rootClassName:o,anchorPrefixCls:n,className:i="",style:r,offsetTop:s,affix:c=!0,showInkInFixed:m=!1,children:u,items:d,direction:f="vertical",bounds:N,targetOffset:h,onClick:S,onChange:w,getContainer:x,getCurrentAnchor:v}=e;ue(!u,"Anchor","`Anchor children` is deprecated. Please use `items` instead."),ue(!(f==="horizontal"&&(d==null?void 0:d.some(l=>"children"in l))),"Anchor","`Anchor items#children` is not supported when `Anchor` direction is horizontal.");const[C,_]=a.exports.useState([]),[b,H]=a.exports.useState(null),P=a.exports.useRef(b),W=a.exports.useRef(null),$=a.exports.useRef(null),j=a.exports.useRef(!1),{direction:Y,getTargetContainer:k}=a.exports.useContext(ae),y=(t=x!=null?x:k)!==null&&t!==void 0?t:at,B=JSON.stringify(C),M=a.exports.useCallback(l=>{C.includes(l)||_(p=>[].concat(_e(p),[l]))},[B]),g=a.exports.useCallback(l=>{C.includes(l)&&_(p=>p.filter(A=>A!==l))},[B]),G=()=>{var l;const p=(l=W.current)===null||l===void 0?void 0:l.querySelector(`.${n}-link-title-active`);p&&$.current&&(f!=="horizontal"?($.current.style.top=`${p.offsetTop+p.clientHeight/2}px`,$.current.style.height=`${p.clientHeight}px`):($.current.style.left=`${p.offsetLeft}px`,$.current.style.width=`${p.clientWidth}px`,tt(p,{scrollMode:"if-needed",block:"nearest"})))},q=function(l){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const O=[],X=y();return l.forEach(L=>{const E=Se.exec(L==null?void 0:L.toString());if(!E)return;const ie=document.getElementById(E[1]);if(ie){const he=Ee(ie,X);he<p+A&&O.push({link:L,top:he})}}),O.length?O.reduce((E,ie)=>ie.top>E.top?ie:E).link:""},D=l=>{if(P.current===l)return;const p=typeof v=="function"?v(l):l;H(p),P.current=p,w==null||w(l)},F=a.exports.useCallback(()=>{if(j.current||typeof v=="function")return;const l=q(C,h!==void 0?h:s||0,N);D(l)},[B,h,s]),J=a.exports.useCallback(l=>{D(l);const p=y(),A=Be(p,!0),O=Se.exec(l);if(!O)return;const X=document.getElementById(O[1]);if(!X)return;const L=Ee(X,p);let E=A+L;E-=h!==void 0?h:s||0,j.current=!0,ot(E,{getContainer:y,callback(){j.current=!1}})},[h,s]),Q=z(o,`${n}-wrapper`,{[`${n}-wrapper-horizontal`]:f==="horizontal",[`${n}-rtl`]:Y==="rtl"},i),K=z(n,{[`${n}-fixed`]:!c&&!m}),Z=z(`${n}-ink`,{[`${n}-ink-visible`]:b}),ee=Object.assign({maxHeight:s?`calc(100vh - ${s}px)`:"100vh"},r),V=l=>Array.isArray(l)?l.map(p=>a.exports.createElement(De,Object.assign({},p,{key:p.key}),f==="vertical"&&V(p.children))):null,U=a.exports.createElement("div",{ref:W,className:Q,style:ee},a.exports.createElement("div",{className:K},a.exports.createElement("span",{className:Z,ref:$}),"items"in e?V(d):u));a.exports.useEffect(()=>{const l=y();return F(),l==null||l.addEventListener("scroll",F),()=>{l==null||l.removeEventListener("scroll",F)}},[B]),a.exports.useEffect(()=>{typeof v=="function"&&D(v(P.current||""))},[v]),a.exports.useEffect(()=>{G()},[f,v,B,b]);const R=a.exports.useMemo(()=>({registerLink:M,unregisterLink:g,scrollTo:J,activeLink:b,onClick:S,direction:f}),[b,S,J,f]);return a.exports.createElement(Oe.Provider,{value:R},c?a.exports.createElement(Ke,{offsetTop:s,target:y},U):U)},Ie=e=>{const{prefixCls:t,rootClassName:o}=e,{getPrefixCls:n}=a.exports.useContext(ae),i=n("anchor",t),[r,s]=ct(i);return r(a.exports.createElement(ft,Object.assign({},e,{rootClassName:z(s,o),anchorPrefixCls:i})))};Ie.displayName="Anchor";var dt=Ie;const ze=dt;ze.Link=De;var He=ze;const ut=new URL("/assets/avatar.d0686986.jpg",self.location);function pt(e){const{src:t,defaultSrc:o=ut.href,...n}=e,i=T.useRef(null);return a.exports.useEffect(()=>{const{current:r}=i;if(r){const s=new Image;s.onload=()=>{r.src=t},t&&(s.src=t)}},[t]),T.createElement("img",{ref:i,src:o,...n})}const ht="_site_16y90_1",mt="_category_16y90_9",gt="_content_16y90_21",xt="_item_16y90_25",vt="_img_16y90_36",yt="_title_16y90_45",wt="_search_16y90_53",Ct="_left_16y90_56",bt="_anchor_16y90_59";var I={site:ht,category:mt,content:gt,item:xt,img:vt,title:yt,search:wt,left:Ct,anchor:bt};const{Link:kt}=He;function $t(){const e=a.exports.useRef(null),t=(o,n)=>{o.preventDefault();const i=e.current,r=document.querySelector(`#${n.href}`);i&&r&&(i.scrollTop=r.offsetTop)};return T.createElement("div",{className:I.site,ref:e},T.createElement("div",{className:I.left},fe.exports.map(xe,o=>T.createElement("div",{className:I.category,key:o.id,id:o.id},T.createElement(Ge,{orientation:"left"},o.title),T.createElement("div",{className:I.content},fe.exports.map(o.children,n=>T.createElement("a",{href:n.href,key:n.id,className:I.item,target:"_blank",rel:"noreferrer"},T.createElement(pt,{src:n.icon||"",className:I.img}),T.createElement("div",{className:I.title},n.title)))))),T.createElement(He,{affix:!1,onClick:t,className:I.anchor},fe.exports.map(xe,o=>T.createElement(kt,{href:`${o.id}`,title:o.title,key:o.id})))))}export{$t as default};