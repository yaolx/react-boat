import{a as e}from"./react-vendor.354bfc68.js";import{c as a,q as t}from"./vendor.7b08bbb4.js";import"./__commonjsHelpers__.be7665b8.js";import"./lodash.b4f4b5bf.js";const c="_button_1qvfz_1";var m={button:c};const s=o=>{const{children:n,className:u}=o;return e.createElement("div",{className:a(m.button,u)},n)},l="_button1_1papu_1",p="_button2_1papu_5";var r={button1:l,button2:p};const d=()=>e.createElement("div",null,e.createElement(s,{className:r.button1},"\u6D4B\u8BD51"),e.createElement(s,{className:r.button2},"\u6D4B\u8BD52"));var B=`import React from 'react'

import Button from '@/ui-component/button'

import styles from './index.module.less'
const Demo = () => {
  return (
    <div>
      <Button className={styles.button1}>\u6D4B\u8BD51</Button>
      <Button className={styles.button2}>\u6D4B\u8BD52</Button>
    </div>
  )
}

export default Demo
`;const i=o=>function(u){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),t("div",{...u})},D=i("CodeBlock"),b={},y="wrapper";function f({components:o,...n}){return t(y,{...b,...n,components:o,mdxType:"MDXLayout"},t("h1",null,"Button"),t("p",null,"\u7EC4\u4EF6\u5E93 demo \u6D4B\u8BD5"),t(d,{mdxType:"Button"}),t(D,{component:B,mdxType:"CodeBlock"}))}f.isMDXComponent=!0;export{f as default};
