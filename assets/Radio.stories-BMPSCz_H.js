import{r as p,j as e}from"./iframe-jZenK_OP.js";/* empty css                 */import"./preload-helper-PPVm8Dsz.js";function r({children:t,className:d,id:c,...u}){const l=p.useId(),i=c??l;return e.jsxs("label",{htmlFor:i,className:["ds-radio",d].filter(Boolean).join(" "),children:[e.jsx("input",{id:i,type:"radio",className:"ds-radio__input",...u}),e.jsx("span",{className:"ds-radio__dot","aria-hidden":"true"}),t&&e.jsx("span",{children:t})]})}r.__docgenInfo={description:"20px radio; selected = orange ring with white centre.",methods:[],displayName:"Radio",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label."},name:{required:!0,tsType:{name:"string"},description:"Group name — radios sharing a name are mutually exclusive."}},composes:["Omit"]};const{userEvent:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/Radio",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"單選鈕（Figma: Radio button，node 3226:123680）。20px；選取時為 Main600 粗環＋白色中心。同一 `name` 的選項互斥。Purple 款屬 Purple 主題，本 Orange 系統不提供。"}}},argTypes:{children:{control:"text",description:"可見標籤。"},name:{control:"text",description:"群組名稱（必填）。"},defaultChecked:{control:"boolean",description:"預設選取。"},disabled:{control:"boolean",description:"停用。"},onChange:{action:"change",description:"原生 change 事件。"}},args:{children:"個人使用",name:"usage"}},o={},s={render:()=>e.jsxs("div",{role:"radiogroup","aria-label":"使用身分",style:{display:"grid",gap:12},children:[e.jsx(r,{name:"who",defaultChecked:!0,children:"個人使用"}),e.jsx(r,{name:"who",children:"企業員工"}),e.jsx(r,{name:"who",disabled:!0,children:"學校（即將開放）"})]})},a={args:{},play:async()=>{await m.tab()}},n={args:{disabled:!0,defaultChecked:!0}},y=["Default","Group","FocusVisible","Disabled"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div role="radiogroup" aria-label="使用身分" style={{
    display: 'grid',
    gap: 12
  }}>
      <Radio name="who" defaultChecked>個人使用</Radio>
      <Radio name="who">企業員工</Radio>
      <Radio name="who" disabled>學校（即將開放）</Radio>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...n.parameters?.docs?.source}}};export{o as Default,n as Disabled,a as FocusVisible,s as Group,y as __namedExportsOrder,x as default};
