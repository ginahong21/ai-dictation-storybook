import{r as p,j as e}from"./iframe-jZenK_OP.js";import{I as h}from"./Icon-D2bzZctV.js";/* empty css                 */import"./preload-helper-PPVm8Dsz.js";function s({children:t,className:d,id:i,...l}){const u=p.useId(),n=i??u;return e.jsxs("label",{htmlFor:n,className:["ds-check",d].filter(Boolean).join(" "),children:[e.jsx("input",{id:n,type:"checkbox",className:"ds-check__input",...l}),e.jsx("span",{className:"ds-check__box","aria-hidden":"true",children:e.jsx(h,{name:"check",size:"sm"})}),t&&e.jsx("span",{className:"ds-check__label",children:t})]})}s.__docgenInfo={description:"20px square checkbox; checked = orange fill with white tick.",methods:[],displayName:"Checkbox",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label beside the box."}},composes:["Omit"]};const{userEvent:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Checkbox",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'核取方塊（Figma: checkbox，node 5:741）。20px、4px 圓角；未勾選為 Grey400 1px 框線，勾選為 Main600 底＋白色勾。使用原生 `<input type="checkbox">`，支援鍵盤與表單。'}}},argTypes:{children:{control:"text",description:"可見標籤。"},defaultChecked:{control:"boolean",description:"預設勾選（非受控）。"},checked:{control:"boolean",description:"勾選（受控）。"},disabled:{control:"boolean",description:"停用。"},onChange:{action:"change",description:"原生 change 事件。"}},args:{children:"我已閱讀並同意使用者條款",defaultChecked:!1}},a={},o={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(s,{children:"未勾選"}),e.jsx(s,{defaultChecked:!0,children:"已勾選"}),e.jsx(s,{disabled:!0,children:"停用"}),e.jsx(s,{disabled:!0,defaultChecked:!0,children:"停用已勾選"})]})},r={args:{},play:async()=>{await m.tab()}},c={args:{disabled:!0,defaultChecked:!0}},f=["Default","States","FocusVisible","Disabled"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <Checkbox>未勾選</Checkbox>
      <Checkbox defaultChecked>已勾選</Checkbox>
      <Checkbox disabled>停用</Checkbox>
      <Checkbox disabled defaultChecked>停用已勾選</Checkbox>
    </div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async () => {
    await userEvent.tab();
  }
}`,...r.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}};export{a as Default,c as Disabled,r as FocusVisible,o as States,f as __namedExportsOrder,g as default};
