import{j as e}from"./iframe-jZenK_OP.js";import{t as u}from"./index-BZMk0N67.js";import"./preload-helper-PPVm8Dsz.js";function t({icon:i,title:g,description:l,ribbon:m,trailing:d,onClick:p,className:h}){const x=p?"button":"div";return e.jsxs(x,{type:p?"button":void 0,onClick:p,className:["ds-template","ds-glass",l?"ds-template--two-line":"ds-template--one-line",h].filter(Boolean).join(" "),children:[e.jsx("span",{className:"ds-template__icon","aria-hidden":"true",children:i}),e.jsxs("span",{className:"ds-template__text",children:[e.jsx("span",{className:"ds-template__title",children:g}),l&&e.jsx("span",{className:"ds-template__desc",children:l})]}),d&&e.jsx("span",{className:"ds-template__trailing",children:d}),m&&e.jsx("span",{className:"ds-template__ribbon",children:m})]})}function T({children:i}){return e.jsx("span",{className:"ds-template__chip",children:i})}t.Chip=T;t.__docgenInfo={description:"Glass list card for a template (推薦範本 / 全部範本).",methods:[{name:"Chip",docblock:null,modifiers:["static"],params:[{name:"{ children }: { children: ReactNode }",optional:!1,type:{name:"signature",type:"object",raw:"{ children: ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"TemplateItem",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:"32px template icon (Icon / OrangeBorder / *)."},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:"One-line description; truncates. Omit for the compact list row."},ribbon:{required:!1,tsType:{name:"string"},description:"Corner ribbon, e.g. HOT."},trailing:{required:!1,tsType:{name:"ReactNode"},description:"Trailing element: `<TemplateItem.Chip>預覽</TemplateItem.Chip>` or status text 已套用."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const{fn:j,userEvent:y}=__STORYBOOK_MODULE_TEST__,n=({name:i})=>e.jsx("img",{src:u[i].src,alt:"",width:32,height:32}),C={title:"Components/TemplateItem",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"範本卡片（Figma: Recommend item，node 55166:100659；全部範本列表）。玻璃底、24px 圓角、32px 範本圖示＋標題（Label XL Medium 17）＋說明（Paragraph S 15，Grey600）。可加右上角紫色 HOT 標籤或尾端「預覽」膠囊／「已套用」文字。圖示為 Figma 匯出的 @3x PNG（`templateIcons`，OrangeBorder 系列）。"}}},argTypes:{title:{control:"text",description:"範本名稱。"},description:{control:"text",description:"一行說明；省略時為單行列表樣式。"},ribbon:{control:"text",description:"右上角標籤（例：HOT）。"},icon:{control:!1,description:'32px 範本圖示：`<img src={templateIcons.meeting.src} width={32} height={32} alt="" />`。'},trailing:{control:!1,description:"尾端元素（`TemplateItem.Chip` 或狀態文字）。"},onClick:{action:"click",description:"提供時整張卡片可點擊。"}},args:{icon:e.jsx(n,{name:"chat"}),title:"社群爆文",description:"打破靈感卡關，產出流量內容"},decorators:[i=>e.jsx("div",{style:{width:374},children:e.jsx(i,{})})]},s={},r={args:{ribbon:"HOT",icon:e.jsx(n,{name:"meeting"}),title:"會議記錄",description:"閃神不用怕，重要指示全記牢"}},o={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(t,{icon:e.jsx(n,{name:"chat"}),title:"社群爆文",trailing:e.jsx(t.Chip,{children:"預覽"})}),e.jsx(t,{icon:e.jsx(n,{name:"meeting"}),title:"會議記錄",trailing:"已套用"}),e.jsx(t,{icon:e.jsx(n,{name:"todo"}),title:"生活管家",trailing:e.jsx(t.Chip,{children:"預覽"})}),e.jsx(t,{icon:e.jsx(n,{name:"note"}),title:"學霸筆記",trailing:e.jsx(t.Chip,{children:"預覽"})}),e.jsx(t,{icon:e.jsx(n,{name:"medical"}),title:"照護幫手",trailing:e.jsx(t.Chip,{children:"預覽"})})]})},c={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 56px)",gap:12},children:Object.keys(u).map(i=>e.jsxs("figure",{style:{margin:0,textAlign:"center",fontSize:11},children:[e.jsx(n,{name:i}),e.jsx("figcaption",{children:i})]},i))})},a={args:{onClick:j()},play:async()=>{await y.tab()}},_=["Default","WithRibbon","ListRows","IconSet","FocusVisible"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ribbon: 'HOT',
    icon: <Ico name="meeting" />,
    title: '會議記錄',
    description: '閃神不用怕，重要指示全記牢'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <TemplateItem icon={<Ico name="chat" />} title="社群爆文" trailing={<TemplateItem.Chip>預覽</TemplateItem.Chip>} />
      <TemplateItem icon={<Ico name="meeting" />} title="會議記錄" trailing="已套用" />
      <TemplateItem icon={<Ico name="todo" />} title="生活管家" trailing={<TemplateItem.Chip>預覽</TemplateItem.Chip>} />
      <TemplateItem icon={<Ico name="note" />} title="學霸筆記" trailing={<TemplateItem.Chip>預覽</TemplateItem.Chip>} />
      <TemplateItem icon={<Ico name="medical" />} title="照護幫手" trailing={<TemplateItem.Chip>預覽</TemplateItem.Chip>} />
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 56px)',
    gap: 12
  }}>
      {(Object.keys(templateIcons) as TemplateIconName[]).map(k => <figure key={k} style={{
      margin: 0,
      textAlign: 'center',
      fontSize: 11
    }}>
          <Ico name={k} />
          <figcaption>{k}</figcaption>
        </figure>)}
    </div>
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn()
  },
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...a.parameters?.docs?.description}}};export{s as Default,a as FocusVisible,c as IconSet,o as ListRows,r as WithRibbon,_ as __namedExportsOrder,C as default};
