import{j as e}from"./iframe-jZenK_OP.js";import{I as m}from"./Icon-D2bzZctV.js";import{f}from"./index-BZMk0N67.js";import"./preload-helper-PPVm8Dsz.js";function a({icon:t,label:c,layout:l="tile",className:u,type:d="button",...p}){return e.jsxs("button",{type:d,className:["ds-feature","ds-glass",`ds-feature--${l}`,u].filter(Boolean).join(" "),...p,children:[e.jsx("span",{className:"ds-feature__icon","aria-hidden":"true",children:t}),e.jsx("span",{className:"ds-feature__label",children:c}),l==="row"&&e.jsx(m,{name:"chevron-right",size:"lg",className:"ds-feature__chevron"})]})}a.__docgenInfo={description:"Glass entry tile for a primary feature (上傳音檔 / 即時字幕 / 會議助手).",methods:[],displayName:"FeatureButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:"56px illustration (3D icon). Pass an <img> or SVG."},label:{required:!0,tsType:{name:"string"},description:"Feature name, e.g. 上傳音檔."},layout:{required:!1,tsType:{name:"union",raw:"'tile' | 'row'",elements:[{name:"literal",value:"'tile'"},{name:"literal",value:"'row'"}]},description:"`tile` stacked (3-up grid on 首頁) · `row` horizontal with chevron (single-feature layout).",defaultValue:{value:"'tile'",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const{userEvent:g}=__STORYBOOK_MODULE_TEST__,i=({name:t})=>e.jsx("img",{src:f[t].src,alt:"",width:48,height:48}),w={title:"Components/FeatureButton",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"首頁主要功能入口（Figma: Button_Feature，node 55768:107401）。玻璃卡片、24px 圓角、56px 插圖槽＋Label XXL Medium 20。`tile` 為三欄直排（上傳音檔／即時字幕／會議助手）；`row` 為只有單一功能時的橫向長條＋右箭頭。插圖使用 `src/assets` 中從 Figma 匯出的 @3x PNG（`featureIllustrations`）。"}}},argTypes:{label:{control:"text",description:"功能名稱。"},layout:{control:"inline-radio",options:["tile","row"],description:"排列方式。",table:{defaultValue:{summary:"tile"}}},icon:{control:!1,description:'插圖：`<img src={featureIllustrations.upload.src} width={48} height={48} alt="" />`。'},onClick:{action:"click",description:"點擊。"}},args:{label:"上傳音檔",layout:"tile",icon:e.jsx(i,{name:"upload"})}},s={decorators:[t=>e.jsx("div",{style:{width:117},children:e.jsx(t,{})})]},o={args:{layout:"row"},decorators:[t=>e.jsx("div",{style:{width:361},children:e.jsx(t,{})})]},n={render:()=>e.jsxs("div",{style:{width:374,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[e.jsx(a,{label:"上傳音檔",icon:e.jsx(i,{name:"upload"})}),e.jsx(a,{label:"即時字幕",icon:e.jsx(i,{name:"cc"})}),e.jsx(a,{label:"會議助手",icon:e.jsx(i,{name:"bot"})})]})},r={args:{},play:async()=>{await g.tab()}},j=["Default","Row","HomeGrid","FocusVisible"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [S => <div style={{
    width: 117
  }}><S /></div>]
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'row'
  },
  decorators: [S => <div style={{
    width: 361
  }}><S /></div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 374,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12
  }}>
      <FeatureButton label="上傳音檔" icon={<Art name="upload" />} />
      <FeatureButton label="即時字幕" icon={<Art name="cc" />} />
      <FeatureButton label="會議助手" icon={<Art name="bot" />} />
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async () => {
    await userEvent.tab();
  }
}`,...r.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...r.parameters?.docs?.description}}};export{s as Default,r as FocusVisible,n as HomeGrid,o as Row,j as __namedExportsOrder,w as default};
