import{r as c,b as E}from"./react.96fb3fa0.js";import{K as pe,q as Te,g as Ee,m as $e,M as ze,O as Oe,P as De,Q as je,b as O,p as he,j as Z,R as me,C as ie,w as fe,r as We,T as He,U as ae,V as ge}from"./index.8835e4f5.js";import{l as ce}from"./lodash.2667a9b6.js";import{D as Me}from"./index.53bad394.js";import{g as Fe,s as Ue}from"./scrollTo.ad6890fa.js";import"./markmap.f7526f2f.js";function xe(t){let n;const r=o=>()=>{n=null,t.apply(void 0,Te(o))},e=function(){if(n==null){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];n=pe(r(i))}};return e.cancel=()=>{pe.cancel(n),n=null},e}const Ve=t=>{const{componentCls:n}=t;return{[n]:{position:"fixed",zIndex:t.zIndexPopup}}};var Xe=Ee("Affix",t=>{const n=$e(t,{zIndexPopup:t.zIndexBase+10});return[Ve(n)]});function se(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ve(t,n,r){if(r!==void 0&&n.top>t.top-r)return r+n.top}function ye(t,n,r){if(r!==void 0&&n.bottom<t.bottom+r){const e=window.innerHeight-n.bottom;return r+e}}var ee="/home/runner/work/yaolx.github.io/yaolx.github.io/node_modules/antd/es/affix/index.js";const Ce=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function Ye(){return typeof window!="undefined"?window:null}var te;(function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"})(te||(te={}));let Re=function(t){ze(r,t);var n=Oe(r);function r(){var e;return De(this,r),e=n.apply(this,arguments),e.state={status:te.None,lastAffix:!1,prevTarget:null},e.placeholderNodeRef=c.exports.createRef(),e.fixedNodeRef=c.exports.createRef(),e.addListeners=()=>{const o=e.getTargetFunc(),i=o==null?void 0:o(),{prevTarget:s}=e.state;s!==i&&(Ce.forEach(a=>{s==null||s.removeEventListener(a,e.lazyUpdatePosition),i==null||i.addEventListener(a,e.lazyUpdatePosition)}),e.updatePosition(),e.setState({prevTarget:i}))},e.removeListeners=()=>{e.timer&&(clearTimeout(e.timer),e.timer=null);const{prevTarget:o}=e.state,i=e.getTargetFunc(),s=i==null?void 0:i();Ce.forEach(a=>{s==null||s.removeEventListener(a,e.lazyUpdatePosition),o==null||o.removeEventListener(a,e.lazyUpdatePosition)}),e.updatePosition.cancel(),e.lazyUpdatePosition.cancel()},e.getOffsetTop=()=>{const{offsetBottom:o,offsetTop:i}=e.props;return o===void 0&&i===void 0?0:i},e.getOffsetBottom=()=>e.props.offsetBottom,e.measure=()=>{const{status:o,lastAffix:i}=e.state,{onChange:s}=e.props,a=e.getTargetFunc();if(o!==te.Prepare||!e.fixedNodeRef.current||!e.placeholderNodeRef.current||!a)return;const p=e.getOffsetTop(),x=e.getOffsetBottom(),m=a();if(m){const d={status:te.None},u=se(e.placeholderNodeRef.current);if(u.top===0&&u.left===0&&u.width===0&&u.height===0)return;const v=se(m),g=ve(u,v,p),w=ye(u,v,x);g!==void 0?(d.affixStyle={position:"fixed",top:g,width:u.width,height:u.height},d.placeholderStyle={width:u.width,height:u.height}):w!==void 0&&(d.affixStyle={position:"fixed",bottom:w,width:u.width,height:u.height},d.placeholderStyle={width:u.width,height:u.height}),d.lastAffix=!!d.affixStyle,s&&i!==d.lastAffix&&s(d.lastAffix),e.setState(d)}},e.prepareMeasure=()=>{e.setState({status:te.Prepare,affixStyle:void 0,placeholderStyle:void 0});{const{onTestUpdatePosition:o}=e.props;o==null||o()}},e.updatePosition=xe(()=>{e.prepareMeasure()}),e.lazyUpdatePosition=xe(()=>{const o=e.getTargetFunc(),{affixStyle:i}=e.state;if(o&&i){const s=e.getOffsetTop(),a=e.getOffsetBottom(),p=o();if(p&&e.placeholderNodeRef.current){const x=se(p),m=se(e.placeholderNodeRef.current),d=ve(m,x,s),u=ye(m,x,a);if(d!==void 0&&i.top===d||u!==void 0&&i.bottom===u)return}}e.prepareMeasure()}),e}return je(r,[{key:"getTargetFunc",value:function(){const{getTargetContainer:o}=this.context,{target:i}=this.props;return i!==void 0?i:o!=null?o:Ye}},{key:"componentDidMount",value:function(){this.timer=setTimeout(this.addListeners)}},{key:"componentDidUpdate",value:function(o){this.addListeners(),(o.offsetTop!==this.props.offsetTop||o.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"render",value:function(){const{affixStyle:o,placeholderStyle:i}=this.state,{affixPrefixCls:s,rootClassName:a,children:p}=this.props,x=O(o&&a,{[s]:!!o});let m=he(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return m=he(m,["onTestUpdatePosition"]),Z.exports.jsxDEV(me,{onResize:this.updatePosition,children:Z.exports.jsxDEV("div",{...Object.assign({},m,{ref:this.placeholderNodeRef}),children:[o&&Z.exports.jsxDEV("div",{style:i,"aria-hidden":"true"},void 0,!1,{fileName:ee,lineNumber:240,columnNumber:38},this),Z.exports.jsxDEV("div",{className:x,ref:this.fixedNodeRef,style:o,children:Z.exports.jsxDEV(me,{onResize:this.updatePosition,children:p},void 0,!1,{fileName:ee,lineNumber:247,columnNumber:23},this)},void 0,!1,{fileName:ee,lineNumber:243,columnNumber:24},this)]},void 0,!0,{fileName:ee,lineNumber:238,columnNumber:23},this)},void 0,!1,{fileName:ee,lineNumber:236,columnNumber:27},this)}}]),r}(E.Component);Re.contextType=ie;const Pe=c.exports.forwardRef((t,n)=>{const{prefixCls:r,rootClassName:e}=t,{getPrefixCls:o}=c.exports.useContext(ie),i=o("affix",r),[s,a]=Xe(i),p=Object.assign(Object.assign({},t),{affixPrefixCls:i,rootClassName:O(e,a)});return s(Z.exports.jsxDEV(Re,{...Object.assign({},p,{ref:n})},void 0,!1,{fileName:ee,lineNumber:269,columnNumber:32},globalThis))});Pe.displayName="Affix";var qe=Pe;const be=t=>typeof t=="object"&&t!=null&&t.nodeType===1,we=(t,n)=>(!n||t!=="hidden")&&t!=="visible"&&t!=="clip",de=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const r=getComputedStyle(t,null);return we(r.overflowY,n)||we(r.overflowX,n)||(e=>{const o=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!o&&(o.clientHeight<e.scrollHeight||o.clientWidth<e.scrollWidth)})(t)}return!1},le=(t,n,r,e,o,i,s,a)=>i<t&&s>n||i>t&&s<n?0:i<=t&&a<=r||s>=n&&a>=r?i-t-e:s>n&&a<r||i<t&&a>r?s-n+o:0,Ge=t=>{const n=t.parentElement;return n==null?t.getRootNode().host||null:n},ke=(t,n)=>{var r,e,o,i;if(typeof document=="undefined")return[];const{scrollMode:s,block:a,inline:p,boundary:x,skipOverflowHiddenElements:m}=n,d=typeof x=="function"?x:R=>R!==x;if(!be(t))throw new TypeError("Invalid target");const u=document.scrollingElement||document.documentElement,v=[];let g=t;for(;be(g)&&d(g);){if(g=Ge(g),g===u){v.push(g);break}g!=null&&g===document.body&&de(g)&&!de(document.documentElement)||g!=null&&de(g,m)&&v.push(g)}const w=(e=(r=window.visualViewport)==null?void 0:r.width)!=null?e:innerWidth,k=(i=(o=window.visualViewport)==null?void 0:o.height)!=null?i:innerHeight,{scrollX:y,scrollY:$}=window,{height:A,width:S,top:M,right:D,bottom:F,left:B}=t.getBoundingClientRect();let C=a==="start"||a==="nearest"?M:a==="end"?F:M+A/2,T=p==="center"?B+S/2:p==="end"?D:B;const ne=[];for(let R=0;R<v.length;R++){const h=v[R],{height:U,width:V,top:X,right:oe,bottom:j,left:L}=h.getBoundingClientRect();if(s==="if-needed"&&M>=0&&B>=0&&F<=k&&D<=w&&M>=X&&F<=j&&B>=L&&D<=oe)return ne;const W=getComputedStyle(h),Y=parseInt(W.borderLeftWidth,10),q=parseInt(W.borderTopWidth,10),G=parseInt(W.borderRightWidth,10),J=parseInt(W.borderBottomWidth,10);let P=0,_=0;const K="offsetWidth"in h?h.offsetWidth-h.clientWidth-Y-G:0,l="offsetHeight"in h?h.offsetHeight-h.clientHeight-q-J:0,f="offsetWidth"in h?h.offsetWidth===0?0:V/h.offsetWidth:0,N="offsetHeight"in h?h.offsetHeight===0?0:U/h.offsetHeight:0;if(u===h)P=a==="start"?C:a==="end"?C-k:a==="nearest"?le($,$+k,k,q,J,$+C,$+C+A,A):C-k/2,_=p==="start"?T:p==="center"?T-w/2:p==="end"?T-w:le(y,y+w,w,Y,G,y+T,y+T+S,S),P=Math.max(0,P+$),_=Math.max(0,_+y);else{P=a==="start"?C-X-q:a==="end"?C-j+J+l:a==="nearest"?le(X,j,U,q,J+l,C,C+A,A):C-(X+U/2)+l/2,_=p==="start"?T-L-Y:p==="center"?T-(L+V/2)+K/2:p==="end"?T-oe+G+K:le(L,oe,V,Y,G+K,T,T+S,S);const{scrollLeft:b,scrollTop:Q}=h;P=Math.max(0,Math.min(Q+P/N,h.scrollHeight-U/N+l)),_=Math.max(0,Math.min(b+_/f,h.scrollWidth-V/f+K)),C+=Q-P,T+=b-_}ne.push({el:h,top:P,left:_})}return ne},Je=t=>t===!1?{block:"end",inline:"nearest"}:(n=>n===Object(n)&&Object.keys(n).length!==0)(t)?t:{block:"start",inline:"nearest"};function Ke(t,n){if(!t.isConnected||!(e=>{let o=e;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(t))return;if((e=>typeof e=="object"&&typeof e.behavior=="function")(n))return n.behavior(ke(t,n));const r=typeof n=="boolean"||n==null?void 0:n.behavior;for(const{el:e,top:o,left:i}of ke(t,Je(n)))e.scroll({top:o,left:i,behavior:r})}const Qe=c.exports.createContext(void 0);var _e=Qe;const Ze=t=>{const{href:n="#",title:r,prefixCls:e,children:o,className:i,target:s}=t,a=c.exports.useContext(_e),{registerLink:p,unregisterLink:x,scrollTo:m,onClick:d,activeLink:u,direction:v}=a||{};c.exports.useEffect(()=>(p==null||p(n),()=>{x==null||x(n)}),[n]);const g=S=>{d==null||d(S,{title:r,href:n}),m==null||m(n)};fe(!o||v!=="horizontal","Anchor.Link","`Anchor.Link children` is not supported when `Anchor` direction is horizontal");const{getPrefixCls:w}=c.exports.useContext(ie),k=w("anchor",e),y=u===n,$=O(`${k}-link`,i,{[`${k}-link-active`]:y}),A=O(`${k}-link-title`,{[`${k}-link-title-active`]:y});return c.exports.createElement("div",{className:$},c.exports.createElement("a",{className:A,href:n,title:typeof r=="string"?r:"",target:s,onClick:g},r),v!=="horizontal"?o:null)};var Ae=Ze;const et=t=>{const{componentCls:n,holderOffsetBlock:r,motionDurationSlow:e,lineWidthBold:o,colorPrimary:i,lineType:s,colorSplit:a}=t;return{[`${n}-wrapper`]:{marginBlockStart:-r,paddingBlockStart:r,[n]:Object.assign(Object.assign({},We(t)),{position:"relative",paddingInlineStart:o,[`${n}-link`]:{paddingBlock:t.linkPaddingBlock,paddingInline:`${t.linkPaddingInlineStart}px 0`,"&-title":Object.assign(Object.assign({},He),{position:"relative",display:"block",marginBlockEnd:t.anchorTitleBlock,color:t.colorText,transition:`all ${t.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${n}-link-title`]:{color:t.colorPrimary},[`${n}-link`]:{paddingBlock:t.anchorPaddingBlockSecondary}}}),[`&:not(${n}-wrapper-horizontal)`]:{[n]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${o}px ${s} ${a}`,content:'" "'},[`${n}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${e} ease-in-out`,width:o,backgroundColor:i,[`&${n}-ink-visible`]:{display:"inline-block"}}}},[`${n}-fixed ${n}-ink ${n}-ink`]:{display:"none"}}}},tt=t=>{const{componentCls:n,motionDurationSlow:r,lineWidthBold:e,colorPrimary:o}=t;return{[`${n}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`1px ${t.lineType} ${t.colorSplit}`,content:'" "'},[n]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${n}-link:first-of-type`]:{paddingInline:0},[`${n}-ink`]:{position:"absolute",bottom:0,transition:`left ${r} ease-in-out, width ${r} ease-in-out`,height:e,backgroundColor:o}}}}};var nt=Ee("Anchor",t=>{const{fontSize:n,fontSizeLG:r,paddingXXS:e}=t,o=$e(t,{holderOffsetBlock:e,anchorPaddingBlockSecondary:e/2,anchorTitleBlock:n/14*3,anchorBallSize:r/2});return[et(o),tt(o)]},t=>({linkPaddingBlock:t.paddingXXS,linkPaddingInlineStart:t.padding}));function ot(){return window}function Ne(t,n){if(!t.getClientRects().length)return 0;const r=t.getBoundingClientRect();return r.width||r.height?n===window?(n=t.ownerDocument.documentElement,r.top-n.clientTop):r.top-n.getBoundingClientRect().top:r.top}const Se=/#([\S ]+)$/,rt=t=>{var n;const{rootClassName:r,anchorPrefixCls:e,className:o="",style:i,offsetTop:s,affix:a=!0,showInkInFixed:p=!1,children:x,items:m,direction:d="vertical",bounds:u,targetOffset:v,onClick:g,onChange:w,getContainer:k,getCurrentAnchor:y}=t;fe(!x,"Anchor","`Anchor children` is deprecated. Please use `items` instead."),fe(!(d==="horizontal"&&(m==null?void 0:m.some(l=>"children"in l))),"Anchor","`Anchor items#children` is not supported when `Anchor` direction is horizontal.");const[$,A]=c.exports.useState([]),[S,M]=c.exports.useState(null),D=c.exports.useRef(S),F=c.exports.useRef(null),B=c.exports.useRef(null),C=c.exports.useRef(!1),{direction:T,getTargetContainer:ne}=c.exports.useContext(ie),R=(n=k!=null?k:ne)!==null&&n!==void 0?n:ot,h=JSON.stringify($),U=ae(l=>{$.includes(l)||A(f=>[].concat(Te(f),[l]))}),V=ae(l=>{$.includes(l)&&A(f=>f.filter(N=>N!==l))}),X=()=>{var l;const f=(l=F.current)===null||l===void 0?void 0:l.querySelector(`.${e}-link-title-active`);if(f&&B.current){const{style:N}=B.current,b=d==="horizontal";N.top=b?"":`${f.offsetTop+f.clientHeight/2}px`,N.height=b?"":`${f.clientHeight}px`,N.left=b?`${f.offsetLeft}px`:"",N.width=b?`${f.clientWidth}px`:"",b&&Ke(f,{scrollMode:"if-needed",block:"nearest"})}},oe=function(l){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const b=[],Q=R();return l.forEach(H=>{const I=Se.exec(H==null?void 0:H.toString());if(!I)return;const re=document.getElementById(I[1]);if(re){const ue=Ne(re,Q);ue<f+N&&b.push({link:H,top:ue})}}),b.length?b.reduce((I,re)=>re.top>I.top?re:I).link:""},j=ae(l=>{if(D.current===l)return;const f=typeof y=="function"?y(l):l;M(f),D.current=f,w==null||w(l)}),L=c.exports.useCallback(()=>{if(C.current||typeof y=="function")return;const l=oe($,v!==void 0?v:s||0,u);j(l)},[h,v,s]),W=c.exports.useCallback(l=>{j(l);const f=Se.exec(l);if(!f)return;const N=document.getElementById(f[1]);if(!N)return;const b=R(),Q=Fe(b,!0),H=Ne(N,b);let I=Q+H;I-=v!==void 0?v:s||0,C.current=!0,Ue(I,{getContainer:R,callback(){C.current=!1}})},[v,s]),Y=O(r,`${e}-wrapper`,{[`${e}-wrapper-horizontal`]:d==="horizontal",[`${e}-rtl`]:T==="rtl"},o),q=O(e,{[`${e}-fixed`]:!a&&!p}),G=O(`${e}-ink`,{[`${e}-ink-visible`]:S}),J=Object.assign({maxHeight:s?`calc(100vh - ${s}px)`:"100vh"},i),P=l=>Array.isArray(l)?l.map(f=>c.exports.createElement(Ae,Object.assign({},f,{key:f.key}),d==="vertical"&&P(f.children))):null,_=c.exports.createElement("div",{ref:F,className:Y,style:J},c.exports.createElement("div",{className:q},c.exports.createElement("span",{className:G,ref:B}),"items"in t?P(m):x));c.exports.useEffect(()=>{const l=R();return L(),l==null||l.addEventListener("scroll",L),()=>{l==null||l.removeEventListener("scroll",L)}},[h]),c.exports.useEffect(()=>{typeof y=="function"&&j(y(D.current||""))},[y]),c.exports.useEffect(()=>{X()},[d,y,h,S]);const K=c.exports.useMemo(()=>({registerLink:U,unregisterLink:V,scrollTo:W,activeLink:S,onClick:g,direction:d}),[S,g,W,d]);return c.exports.createElement(_e.Provider,{value:K},a?c.exports.createElement(qe,{offsetTop:s,target:R},_):_)},Be=t=>{const{prefixCls:n,rootClassName:r}=t,{getPrefixCls:e}=c.exports.useContext(ie),o=e("anchor",n),[i,s]=nt(o);return i(c.exports.createElement(rt,Object.assign({},t,{rootClassName:O(s,r),anchorPrefixCls:o})))};Be.displayName="Anchor";var it=Be;const Le=it;Le.Link=Ae;var Ie=Le;const st=new URL("/assets/avatar.d0686986.jpg",self.location);function lt(t){const{src:n,defaultSrc:r=st.href,...e}=t,o=E.useRef(null);return c.exports.useEffect(()=>{const{current:i}=o;if(i){const s=new Image;s.onload=()=>{i.src=n},n&&(s.src=n)}},[n]),E.createElement("img",{ref:o,src:r,...e})}const at="_site_16y90_1",ct="_category_16y90_9",dt="_content_16y90_21",ft="_item_16y90_25",ut="_img_16y90_36",pt="_title_16y90_45",ht="_search_16y90_53",mt="_left_16y90_56",gt="_anchor_16y90_59";var z={site:at,category:ct,content:dt,item:ft,img:ut,title:pt,search:ht,left:mt,anchor:gt};const{Link:xt}=Ie;function Nt(){const t=c.exports.useRef(null),n=(r,e)=>{r.preventDefault();const o=t.current,i=document.querySelector(`#${e.href}`);o&&i&&(o.scrollTop=i.offsetTop)};return E.createElement("div",{className:z.site,ref:t},E.createElement("div",{className:z.left},ce.exports.map(ge,r=>E.createElement("div",{className:z.category,key:r.id,id:r.id},E.createElement(Me,{orientation:"left"},r.title),E.createElement("div",{className:z.content},ce.exports.map(r.children,e=>E.createElement("a",{href:e.href,key:e.id,className:z.item,target:"_blank",rel:"noreferrer"},E.createElement(lt,{src:e.icon||"",className:z.img}),E.createElement("div",{className:z.title},e.title)))))),E.createElement(Ie,{affix:!1,onClick:n,className:z.anchor},ce.exports.map(ge,r=>E.createElement(xt,{href:`${r.id}`,title:r.title,key:r.id})))))}export{Nt as default};
