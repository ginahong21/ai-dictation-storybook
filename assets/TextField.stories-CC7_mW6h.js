import{r as T,j as e}from"./iframe-jZenK_OP.js";import{I as p}from"./Icon-D2bzZctV.js";import{B as v}from"./Button-oEX-9zlT.js";import"./preload-helper-PPVm8Dsz.js";function b({label:l,error:s,hint:x,leftIcon:m,rightSlot:h,action:y,className:F,id:_,disabled:g,...S}){const j=T.useId(),d=_??j,f=`${d}-msg`,u=s??x,I=["ds-field",s&&"ds-field--error",g&&"ds-field--disabled",F].filter(Boolean).join(" ");return e.jsxs("div",{className:I,children:[e.jsx("label",{htmlFor:d,className:"ds-visually-hidden",children:l}),e.jsxs("div",{className:"ds-field__wrap",children:[m&&e.jsx("span",{className:"ds-field__icon",children:m}),e.jsx("input",{id:d,className:"ds-field__input","aria-invalid":s?!0:void 0,"aria-describedby":u?f:void 0,disabled:g,...S}),y,h&&e.jsx("span",{className:"ds-field__icon",children:h})]}),u&&e.jsx("p",{id:f,className:"ds-field__msg",role:s?"alert":void 0,children:u})]})}b.__docgenInfo={description:"Single-line input on a translucent white field.",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:"Visually hidden label for screen readers (Figma inputs carry no visible label)."},error:{required:!1,tsType:{name:"string"},description:"Error message — turns the border red and shows the message below."},hint:{required:!1,tsType:{name:"string"},description:"Helper text under the field when there is no error."},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon at the start of the field (e.g. search)."},rightSlot:{required:!1,tsType:{name:"ReactNode"},description:"Icon or control at the end (e.g. check, clear)."},action:{required:!1,tsType:{name:"ReactNode"},description:"Inline action, e.g. a small `兌換` button."}},composes:["Omit"]};const{userEvent:E}=__STORYBOOK_MODULE_TEST__,V={title:"Components/TextField",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"單行輸入框（Figma: input，node 5:686）。白 50% 半透明底、12px 圓角、高 52。錯誤時邊框與訊息轉為 Warning 紅；Figma 沒有可見標籤，`label` 以視覺隱藏方式提供給螢幕閱讀器。"}}},argTypes:{label:{control:"text",description:"無障礙標籤（視覺隱藏）。必填。"},placeholder:{control:"text",description:"提示文字（Grey600）。"},error:{control:"text",description:"錯誤訊息；有值時邊框變紅。"},hint:{control:"text",description:"無錯誤時的輔助說明。"},disabled:{control:"boolean",description:"停用。"},leftIcon:{control:!1,description:"前置圖示，例如搜尋。"},rightSlot:{control:!1,description:"後置圖示或控制項，例如勾選。"},action:{control:!1,description:"欄位內的行內動作，例如「兌換」按鈕。"}},args:{label:"輸入欄位",placeholder:"Placeholder"},decorators:[l=>e.jsx("div",{style:{width:382},children:e.jsx(l,{})})]},a={},t={args:{defaultValue:"已輸入文字",rightSlot:e.jsx(p,{name:"check"})}},o={args:{defaultValue:"已輸入文字",error:"Error Message",rightSlot:e.jsx(p,{name:"check"})}},n={args:{label:"搜尋檔案",placeholder:"輸入關鍵字搜尋檔案...",leftIcon:e.jsx(p,{name:"search"}),type:"search"}},i={args:{label:"序號",placeholder:"輸入序號",action:e.jsx(v,{size:"s",variant:"primary",disabled:!0,children:"兌換"})}},r={args:{},play:async()=>{await E.tab()}},c={args:{disabled:!0,defaultValue:"已輸入文字"}},C=["Default","Filled","Error","Search","WithAction","FocusVisible","Disabled"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '已輸入文字',
    rightSlot: <Icon name="check" />
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '已輸入文字',
    error: 'Error Message',
    rightSlot: <Icon name="check" />
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: '搜尋檔案',
    placeholder: '輸入關鍵字搜尋檔案...',
    leftIcon: <Icon name="search" />,
    type: 'search'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: '序號',
    placeholder: '輸入序號',
    action: <Button size="s" variant="primary" disabled>兌換</Button>
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async () => {
    await userEvent.tab();
  }
}`,...r.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '已輸入文字'
  }
}`,...c.parameters?.docs?.source}}};export{a as Default,c as Disabled,o as Error,t as Filled,r as FocusVisible,n as Search,i as WithAction,C as __namedExportsOrder,V as default};
