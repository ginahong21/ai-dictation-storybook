import{j as e}from"./iframe-jZenK_OP.js";import{B as o}from"./Badge-CkzjIduH.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Components/Badge",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"徽章（Figma: Badge，node 50801:16819）。`dot` 6px 未讀點（橘 / 黃）、`count` 數字膠囊、`label` 文字標籤（例：Microsoft Teams，紫）。純圓點請提供 `srLabel`，讓顏色以外也能傳達意義。"}}},argTypes:{kind:{control:"inline-radio",options:["dot","count","label"],description:"型態。",table:{defaultValue:{summary:"dot"}}},tone:{control:"inline-radio",options:["orange","yellow","purple"],description:"色調：orange 品牌 / yellow 提醒 / purple 資訊。",table:{defaultValue:{summary:"orange"}}},children:{control:"text",description:"數字或文字（dot 時忽略）。"},srLabel:{control:"text",description:"圓點的無障礙文字。"}},args:{kind:"count",tone:"orange",children:"3",srLabel:"有新通知"}},n={},t={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:16,alignItems:"center"},children:[e.jsx(o,{kind:"dot",srLabel:"未讀"}),e.jsx(o,{kind:"count",children:"3"}),e.jsx(o,{kind:"count",children:"32"}),e.jsx(o,{kind:"label",tone:"purple",children:"Microsoft Teams"}),e.jsx(o,{kind:"dot",tone:"yellow",srLabel:"提醒"}),e.jsx(o,{kind:"count",tone:"yellow",children:"3"}),e.jsx(o,{kind:"count",tone:"yellow",children:"32"}),e.jsx("span",{})]})},l=["Default","Gallery"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, max-content)',
    gap: 16,
    alignItems: 'center'
  }}>
      <Badge kind="dot" srLabel="未讀" /><Badge kind="count">3</Badge><Badge kind="count">32</Badge><Badge kind="label" tone="purple">Microsoft Teams</Badge>
      <Badge kind="dot" tone="yellow" srLabel="提醒" /><Badge kind="count" tone="yellow">3</Badge><Badge kind="count" tone="yellow">32</Badge><span />
    </div>
}`,...t.parameters?.docs?.source}}};export{n as Default,t as Gallery,l as __namedExportsOrder,s as default};
