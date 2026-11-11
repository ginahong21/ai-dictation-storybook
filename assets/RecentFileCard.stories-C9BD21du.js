import{j as e}from"./iframe-jZenK_OP.js";import"./preload-helper-PPVm8Dsz.js";function r({title:o,className:n,type:i="button",...c}){return e.jsx("button",{type:i,className:["ds-recent","ds-accent-border",n].filter(Boolean).join(" "),...c,children:e.jsx("span",{className:"ds-recent__title",children:o})})}r.__docgenInfo={description:"Horizontal-scroll card for 最近檔案 on 首頁 — glass with a pink→orange gradient border.",methods:[],displayName:"RecentFileCard",props:{title:{required:!0,tsType:{name:"string"},description:"File title; clamps to two lines."},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const{userEvent:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/RecentFileCard",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"首頁「最近檔案」橫向卡片（Figma: Recent item / Summary item，node 55865:92769，Style=Orange）。181×74、24px 圓角、玻璃底＋粉→橘漸層邊框；標題最多兩行（Label XL Medium 17）。"}}},argTypes:{title:{control:"text",description:"檔案標題（兩行截斷）。"},onClick:{action:"click",description:"開啟檔案。"}},args:{title:"Standup Meeting 快攻事案"}},s={},a={render:()=>e.jsxs("div",{style:{width:374,display:"flex",gap:12,overflowX:"auto",paddingBottom:8},children:[e.jsx(r,{title:"Standup Meeting 快攻事案"}),e.jsx(r,{title:"讀書會｜AI世代與我們的未來"}),e.jsx(r,{title:"週會記錄 2026/10/30"})]})},t={args:{},play:async()=>{await d.tab()}},m=["Default","Row","FocusVisible"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 374,
    display: 'flex',
    gap: 12,
    overflowX: 'auto',
    paddingBottom: 8
  }}>
      <RecentFileCard title="Standup Meeting 快攻事案" />
      <RecentFileCard title="讀書會｜AI世代與我們的未來" />
      <RecentFileCard title="週會記錄 2026/10/30" />
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async () => {
    await userEvent.tab();
  }
}`,...t.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...t.parameters?.docs?.description}}};export{s as Default,t as FocusVisible,a as Row,m as __namedExportsOrder,p as default};
