import{r as g,j as n}from"./iframe-jZenK_OP.js";import{t as h}from"./index-DsDfMrGB.js";import"./preload-helper-PPVm8Dsz.js";function b({items:a,value:r,onChange:l,variant:p="segmented",label:i,className:y}){const v=g.useRef([]),f=(e,u)=>{const s=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(!s)return;e.preventDefault();const t=(u+s+a.length)%a.length;v.current[t]?.focus(),l(a[t].value)};return n.jsx("div",{role:"tablist","aria-label":i,className:["ds-tabs",`ds-tabs--${p}`,y].filter(Boolean).join(" "),children:a.map((e,u)=>{const s=e.value===r;return n.jsxs("button",{ref:t=>{v.current[u]=t},role:"tab",type:"button","aria-selected":s,tabIndex:s?0:-1,className:"ds-tabs__tab",onClick:()=>l(e.value),onKeyDown:t=>f(t,u),children:[e.label,e.dot&&n.jsx("span",{className:"ds-tabs__dot","aria-label":h("a11y.newContent")})]},e.value)})})}b.__docgenInfo={description:"Tab switcher. Segmented = 範本 / 自訂範本; line = 個人使用 / 企業員工. Arrow keys move focus.",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'segmented' | 'line'",elements:[{name:"literal",value:"'segmented'"},{name:"literal",value:"'line'"}]},description:"`segmented` glass pill track · `line` underline indicator.",defaultValue:{value:"'segmented'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Accessible name for the tab list."},className:{required:!1,tsType:{name:"string"},description:""}}};const{fn:T,userEvent:x}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Tabs",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"分頁切換（Figma: Tabs，node 56894:114550）。**segmented**：半透明軌道上的玻璃膠囊，用於同頁內容切換（範本／自訂範本、AI 重點整理／逐字稿）。**line**：灰底線＋橘色指示條，用於表單身分切換（個人使用／企業員工）。支援左右方向鍵。"}}},argTypes:{variant:{control:"inline-radio",options:["segmented","line"],description:"外觀。",table:{defaultValue:{summary:"segmented"}}},items:{control:"object",description:"分頁項目 `{ value, label, dot? }[]`。"},value:{control:"text",description:"目前選取的 value。"},label:{control:"text",description:"tablist 的無障礙名稱。"},onChange:{action:"change",description:"切換時回傳 value。"}},args:{onChange:T(),label:"範本類型",variant:"segmented",value:"preset",items:[{value:"preset",label:"範本"},{value:"custom",label:"自訂範本"}]},decorators:[a=>n.jsx("div",{style:{width:374},children:n.jsx(a,{})})],render:function(r){const[l,p]=g.useState(r.value);return n.jsx(b,{...r,value:l,onChange:i=>{p(i),r.onChange(i)}})}},c={},d={args:{label:"通知類型",value:"notice",items:[{value:"notice",label:"公告訊息"},{value:"mine",label:"我的通知",dot:!0}]}},m={args:{variant:"line",label:"使用身分",value:"personal",items:[{value:"personal",label:"個人使用"},{value:"company",label:"企業員工"}]}},o={args:{},play:async()=>{await x.tab()}},j=["Default","WithDot","Line","FocusVisible"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: '通知類型',
    value: 'notice',
    items: [{
      value: 'notice',
      label: '公告訊息'
    }, {
      value: 'mine',
      label: '我的通知',
      dot: true
    }]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    label: '使用身分',
    value: 'personal',
    items: [{
      value: 'personal',
      label: '個人使用'
    }, {
      value: 'company',
      label: '企業員工'
    }]
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async () => {
    await userEvent.tab();
  }
}`,...o.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...o.parameters?.docs?.description}}};export{c as Default,o as FocusVisible,m as Line,d as WithDot,j as __namedExportsOrder,A as default};
