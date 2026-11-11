import{j as a}from"./iframe-jZenK_OP.js";import{N as g,L as f,a as v,n as k,p as h}from"./storyFrame-zJXJiMuZ.js";import{I as y}from"./Icon-D2bzZctV.js";import{t as s}from"./index-DsDfMrGB.js";import"./preload-helper-PPVm8Dsz.js";function l({title:c,subtitle:p,large:d,back:u,onBack:m,actions:i=[],transparent:b}){return a.jsx(g,{title:c,subtitle:p,large:d,transparent:b,colors:{bgMaterial:"bg-md-light-surface"},left:u?a.jsx(v,{text:s("native.back"),showText:!1,onClick:m,"aria-label":s("native.back")}):void 0,right:i.length?a.jsx("div",{style:{display:"flex",alignItems:"center"},children:i.slice(0,2).map(e=>a.jsx(f,{iconOnly:!0,onClick:e.onClick,"aria-label":e.label,title:e.label,children:a.jsx(y,{name:e.icon,size:"lg"})},e.label))}):void 0})}l.__docgenInfo={description:`Top navigation bar — iOS 26 navigation bar / Material 3 top app bar.
Title: a word or short phrase (Apple: under 15 characters; never the app name).`,methods:[],displayName:"NavBar",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactNode"},description:""},large:{required:!1,tsType:{name:"boolean"},description:"iOS large title (collapses to standard when scrolling in a real app). Material uses its large top app bar."},back:{required:!1,tsType:{name:"boolean"},description:'Standard back button (iOS 26 circular chevron / Material back arrow). Apple: no "Back" text label.'},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"NavBarAction"}],raw:"NavBarAction[]"},description:"Up to 2 trailing icon actions (Material: 1, 2 if necessary). Avoid overflow menus.",defaultValue:{value:"[]",computed:!1}},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background (over hero content)."}}};const{userEvent:T}=__STORYBOOK_MODULE_TEST__,N={title:"Native/NavBar",component:l,tags:["autodocs"],decorators:[h(360)],parameters:{...k,docs:{description:{component:`外觀與顏色都採用平台原生預設（iOS 系統藍與 SF Pro／Material 3 預設配色與 Roboto），不套 Orange 品牌色。

頂部導覽列：iOS 26 navigation bar／Material 3 top app bar，用工具列的 Platform 切換。

依官方規範：返回鍵用系統標準樣式（iOS 圓形箭頭、Material 返回箭頭），**不加「返回」文字**（Apple HIG）；標題用一個詞或短句，少於 15 個字元、不要放 App 名稱（Apple HIG）；右側動作最多 2 個圖示，盡量不要用溢出選單（Material 3）。每個圖示按鈕都要有 \`label\`。`}}},argTypes:{title:{control:"text",description:"頁面標題。"},subtitle:{control:"text",description:"副標題（選用）。"},large:{control:"boolean",description:"iOS 大標題／Material large top app bar。"},back:{control:"boolean",description:"顯示系統標準返回鍵。"},actions:{control:"object",description:"右側圖示按鈕 `{icon, label, onClick}[]`，最多 2 個。"},transparent:{control:"boolean",description:"透明背景（疊在主視覺上）。"}},args:{title:"我的檔案",back:!0,actions:[{icon:"more-2",label:"更多"}]}},r={},t={args:{large:!0,back:!1,actions:[{icon:"new-chat",label:"新增"},{icon:"more-2",label:"更多"}]}},o={args:{title:"逐字稿",back:!0,actions:[{icon:"share",label:"分享"}]}},n={play:async()=>{await T.tab()}},w=["Default","LargeTitle","WithBack","FocusVisible"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    large: true,
    back: false,
    actions: [{
      icon: 'new-chat',
      label: '新增'
    }, {
      icon: 'more-2',
      label: '更多'
    }]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '逐字稿',
    back: true,
    actions: [{
      icon: 'share',
      label: '分享'
    }]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...n.parameters?.docs?.source}}};export{r as Default,n as FocusVisible,t as LargeTitle,o as WithBack,w as __namedExportsOrder,N as default};
