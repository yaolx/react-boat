import{r as l,a as e}from"./react-vendor.354bfc68.js";import{I as _,S as r,B as v,h as k,o as w,U as O,u as T,L as S,c as C,D as u,p as h}from"./vendor.934c936f.js";/* empty css              */import{l as y}from"./lodash.b4f4b5bf.js";import{u as R,A as W}from"./index.3d70f8d4.js";import"./__commonjsHelpers__.be7665b8.js";const L="_copy_931d3_1",G="_total_931d3_4",H="_unit_931d3_7",I="_target_unit_931d3_10",Q="_target_unit_931d3_10";var m={copy:L,total:G,unit:H,target_unit:I,targetUnit:Q};function $(){const[i,p]=l.exports.useState(0),[s,E]=l.exports.useState(""),[d,n]=l.exports.useState(""),[o,c]=l.exports.useState("vw"),[g,A]=l.exports.useState("px"),F=(a,U)=>{const f=U.target.value;switch(a){case"a":p(parseFloat(f));break;case"b":E(f);break}};l.exports.useEffect(()=>{n(s?(i*parseFloat(s.replace(o,""))).toFixed(0)+g:"")},[i,s]);const N=()=>{k(d)},B=()=>{E("")},b=a=>{c(a)},D=a=>{A(a)};return e.createElement(e.Fragment,null,e.createElement(_,{onChange:a=>F("a",a),value:i,type:"number",addonBefore:"\u6362\u7B97\u7387"}),e.createElement(_,{onChange:a=>F("b",a),value:s,type:"text",className:m.unit,addonBefore:"\u5355\u4F4D",addonAfter:e.createElement(r,{onChange:b,value:o},e.createElement(r.Option,{value:"vw"},"vw"),e.createElement(r.Option,{value:"rem"},"rem"),e.createElement(r.Option,{value:"px"},"px"))}),e.createElement(_.Group,null,e.createElement(v,{className:m.target_unit},"\u76EE\u6807\u5355\u4F4D"),e.createElement(r,{onChange:D,value:g,style:{width:"calc(100% - 100px)"}},e.createElement(r.Option,{value:"vw"},"vw"),e.createElement(r.Option,{value:"rem"},"rem"),e.createElement(r.Option,{value:"px"},"px"))),e.createElement("div",{className:m.total},d,e.createElement(v,{type:"primary",onClick:N,className:m.copy},"\u590D\u5236"),e.createElement(v,{type:"primary",onClick:B,className:m.copy},"\u6E05\u9664")))}const M="_layout_f232v_1",P="_sider_f232v_7",j="_homeSiderWidth_f232v_14",q="_avatar_f232v_23",z="_dot_f232v_37",J="_body_f232v_40",K="_card_f232v_43",V="_title_f232v_60",X="_date_f232v_63",Y="_tag_f232v_68",Z="_file_f232v_81";var t={layout:M,sider:P,homeSiderWidth:j,avatar:q,dot:z,body:J,card:K,title:V,date:X,tag:Y,file:Z};const{Content:ee,Sider:x}=S,te=["\u535A\u5BA2\u7F51\u7AD9","\u7EC4\u4EF6\u5E93\u6216\u4EA7\u54C1\u7684\u6587\u6863\u7AD9\u70B9","React \u7EC4\u4EF6\u7684 Demo \u6F14\u793A"];function ae(){const i=R("globalStore"),{showResume:p}=O.resolveQuery(),s=T(),E=i.getMdxByGroup(),d=n=>{s(n.path)};return e.createElement(S,{className:t.layout},e.createElement(x,{className:C(t.sider,t.homeSiderWidth)},e.createElement("div",{className:t.avatar}),e.createElement("h1",null,W),e.createElement("h5",null,"\u5B9E\u8FF7\u9014\u5176\u672A\u8FDC\uFF0C\u89C9\u4ECA\u662F\u800C\u6628\u975E"),e.createElement(u,{orientation:"center"}," \u6280\u672F\u6808"),"vite + typescript + mdx + mobx\uFF0C\u7EB5\u4EABvite\u6784\u5EFA\u5E26\u6765\u7684\u4E1D\u6ED1\u5F00\u53D1\u4F53\u9A8C\u3002",e.createElement(u,{orientation:"center"},"\u9002\u7528\u573A\u666F"),y.exports.map(te,(n,o)=>e.createElement("div",{className:t.dot,key:o},o+1,". ",n)),p?e.createElement(u,{orientation:"center"},e.createElement(h,{to:"/md/resume"},"\u6211\u7684\u7B80\u5386")):null),e.createElement(ee,{className:t.body},y.exports.map(E,(n,o)=>e.createElement("div",{className:t.card,key:o},e.createElement("span",{className:t.tag},n.category),y.exports.map(n.files,c=>e.createElement("div",{className:t.file,key:c.path,onClick:()=>d(c)},e.createElement(u,{orientation:"left"},e.createElement("span",{className:t.date},c.date)),e.createElement("div",null,c.name)))))),e.createElement(x,{className:C(t.sider,t.homeSiderWidth)},e.createElement(u,{orientation:"center"},e.createElement(h,{to:"/site"},"\u524D\u7AEF\u5E38\u7528\u7F51\u7AD9")),e.createElement(u,{orientation:"center"},"\u6BCF\u65E5\u8B66\u8A00"),e.createElement(u,{orientation:"center"},"CSS\u5355\u4F4D\u6362\u7B97\u5668"),e.createElement($,null)))}var le=w(ae);export{le as default};
