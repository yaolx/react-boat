import"./react.96fb3fa0.js";import{X as u}from"./index.ef5cdea7.js";import"./lodash.2667a9b6.js";import"./markmap.f7526f2f.js";const l={},F="wrapper";function E({components:e,...n}){return u(F,{...l,...n,components:e,mdxType:"MDXLayout"},u("h1",null,u("center",null,"noreferrer \u77E5\u591A\u5C11")),u("h2",null,"\u524D\u8A00"),u("p",null,"\u4ECA\u5929\u5728\u5BF9\u63A5\u91D1\u5C71",u("a",{parentName:"p",href:"https://open.wps.cn/docs/personal-doc/api-info"},"wps \u5F00\u653E\u5E73\u53F0"),"\u7684\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u9047\u5230\u4E00\u4E2A\u95EE\u9898\uFF1A"),u("p",null,"\u83B7\u53D6\u6587\u4EF6\u4E0B\u8F7D\u94FE\u63A5\uFF0C\u7136\u540E\u518D\u7528 window.open \u6253\u5F00 url \u4E0B\u8F7D\u6587\u4EF6\uFF0C\u5374\u4E0B\u8F7D\u4E0D\u4E86\u3002"),u("p",null,"\u5982\u679C\u628A\u94FE\u63A5\u653E\u5728\u6D4F\u89C8\u5668 url \u5730\u5740\u4E2D\uFF0C\u70B9\u51FB ENter \u952E\uFF0C\u5374\u80FD\u4E0B\u8F7D\u3002\u8FD9\u662F\u4E3A\u4F55\uFF1F"),u("p",null,u("a",{parentName:"p",href:"https://wpsfile.ks3-cn-beijing.ksyun.com/32a188aad17da4d7d19773aee887fd8da29d9a9c?response-content-disposition=attachment%3Bfilename%2A%3Dutf-8%27%27%25E6%2588%2591%25E6%2598%25AF%25E4%25B8%25AD%25E5%259B%25BD%25E4%25BA%25BA.ppt&KSSAccessKeyId=AKLTg4fpvC3aQgO_OBCuKYy98A&Expires=1661150099&Signature=KInq6T97UU5R98eoSlnRqrbTS8k%3D"},"\u6587\u6863\u5730\u5740")),u("h2",null,"\u5206\u6790\u95EE\u9898"),u("p",null,"\u7528 fiddler \u67E5\u770B\u8BF7\u6C42\u94FE\u63A5"),u("ol",null,u("li",{parentName:"ol"},"\u5206\u6790 response Headers")),u("ul",null,u("li",{parentName:"ul"},"\u7528 window.open \u6253\u5F00")),u("p",null,"response: ",u("inlineCode",{parentName:"p"},"Content-Type: application/xml; charset=UTF-8")),u("p",null,"\u8FD4\u56DE\u7684\u662F xml \u683C\u5F0F"),u("p",null,u("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/yaolx/picBed@main/blogs/pics/20220823094153.png",alt:"20220823094153"})),u("p",null,"\u63D0\u793A AccessDenied\uFF0C\u6CA1\u6709\u6743\u9650\u8BBF\u95EE"),u("ul",null,u("li",{parentName:"ul"},"\u5728\u5730\u5740\u680F\u76F4\u63A5\u6253\u5F00\u7684")),u("p",null,"response: ",u("inlineCode",{parentName:"p"},"Content-Type: application/octet-stream")),u("p",null,"\u8FD4\u56DE\u7684\u662F\u4E8C\u8FDB\u5236\u6D41\u6570\u636E\uFF0C\u53EF\u4EE5\u6B63\u5E38\u4E0B\u8F7D"),u("ol",{start:2},u("li",{parentName:"ol"},"\u4E3A\u4EC0\u4E48 2 \u6B21\u8BBF\u95EE\u91D1\u5C71\u6587\u6863 response \u7684 content-type \u4F1A\u4E0D\u4E00\u6837\u5462")),u("p",null,`\u8BD5\u4E86\u597D\u51E0\u79CD\u65B9\u5F0F\uFF0C\u7528 window.open \u6253\u5F00\u7684\uFF0Ca \u6807\u7B7E\u6253\u5F00\u7684\uFF0C\u90FD\u65E0\u6CD5\u6B63\u5E38\u4E0B\u8F7D\u6587\u4EF6\u3002
\u5206\u6790\u53EF\u80FD\u662F\u91D1\u5C71\u6587\u6863\u670D\u52A1\u7AEF\u505A\u4E86\u5B89\u5168\u6821\u9A8C\u3002
\u7136\u540E\u770B\u4E86\u4E0B request Headers\uFF0Cwindow.open \u7684\u591A\u4E86\u4E2A referer`),u("ol",{start:3},u("li",{parentName:"ol"},"\u5206\u6790 request Headers")),u("p",null,"window.open \u6BD4 \u5730\u5740\u680F\u76F4\u63A5\u6253\u5F00\u7684 \u591A\u4E86\u4E00\u4E2A ",u("inlineCode",{parentName:"p"},"Referer: https://localhost:8080/")),u("p",null,"Referer \u662F\u6307\u6765\u6E90\u9875\u9762\u7684\u5730\u5740\uFF0C\u91D1\u5C71\u6587\u6863\u670D\u52A1\u7AEF\u5BF9\u6765\u6E90\u7F51\u7AD9\u505A\u4E86\u5B89\u5168\u9650\u5236\uFF0C\u9632\u6B62\u4E00\u4E9B\u4FE1\u606F\u88AB\u7A83\u53D6"),u("p",null,"\u73B0\u5728\u8981\u505A\u7684\u5C31\u662F\u5728\u70B9\u51FB\u7684\u65F6\u5019\uFF0C\u628A referer \u7981\u7528"),u("ol",{start:4},u("li",{parentName:"ol"},"\u7981\u7528 Referer")),u("ul",null,u("li",{parentName:"ul"},"\u5728 html \u4E2D\u8BBE\u7F6E",u("inlineCode",{parentName:"li"},'<meta name="referrer" content="no-referrer" />'))),u("p",null,"\u8FD9\u4E2A\u5BF9\u5168\u7AD9\u751F\u6548"),u("ul",null,u("li",{parentName:"ul"},"\u5C06 window.open \u6539\u4E3A a \u6807\u7B7E\u70B9\u51FB\uFF0C\u7136\u540E\u8BBE\u7F6E rel = 'noreferrer'")),u("p",null,"\u53EA\u5BF9\u6253\u5F00\u7684 url \u751F\u6548"),u("ol",{start:5},u("li",{parentName:"ol"},"\u65B9\u6CD5\u5C01\u88C5")),u("pre",null,u("code",{parentName:"pre",className:"language-js"},`export function downloadFile(url) {
  const aLink = document.createElement('a')
  const evt = document.createEvent('MouseEvents')
  // \u521D\u59CB\u5316\u70B9\u51FB\u4E8B\u4EF6
  // \u6CE8\uFF1AinitEvent \u4E0D\u52A0\u540E\u4E24\u4E2A\u53C2\u6570\u5728FF\u4E0B\u4F1A\u62A5\u9519
  evt.initEvent('click', false, false)
  aLink.href = url
  // \u8981\u8BBE\u7F6Enoreferrer\uFF0C\u4E0D\u7136\u91D1\u5C71\u6587\u6863\u4F1A\u6821\u9A8C\u975E\u6CD5\u6765\u6E90
  aLink.rel = 'noreferrer'
  aLink.dispatchEvent(evt)
}
`)))}E.isMDXComponent=!0;export{E as default};
