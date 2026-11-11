import{j as e}from"./iframe-jZenK_OP.js";import{B as s}from"./Button-oEX-9zlT.js";import{I as t}from"./Icon-D2bzZctV.js";import"./preload-helper-PPVm8Dsz.js";const{userEvent:u}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Button",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"膠囊按鈕（Figma: Base Component → Button，node 5:444）。**primary** 為唯一的橘色焦點動作，每個畫面最多一顆；次要動作用 **glass**（玻璃）或 **dark**。尺寸對應 XS 32 / S 36 / M 48 / L 56；L 用在底部主要 CTA。"}}},argTypes:{variant:{control:"select",options:["primary","secondary","outline","glass","light","dark","gradient","text"],description:"Figma `Hierarchy` × `Type`：primary = Primary/Filled、secondary = Secondary/Filled、outline = Primary/Border、glass = Secondary/Opacity、light = Secondary-White、dark = Secondary-Dark、gradient = Gradient、text = 純文字。",table:{defaultValue:{summary:"primary"}}},size:{control:"inline-radio",options:["xs","s","m","l"],description:"高度 32 / 36 / 48 / 56。XS 字級 16、其餘 17。",table:{defaultValue:{summary:"l"}}},children:{control:"text",description:"按鈕文字（Label XL Regular 17）。"},disabled:{control:"boolean",description:"停用狀態：實心款改灰底（Grey400 / Grey100 字）。"},fullWidth:{control:"boolean",description:"撐滿容器寬度，用於底部固定 CTA。"},selected:{control:"boolean",description:"Figma `State=Active / Selected`：持續選取狀態（primary 變 Main500、outline 邊框變 Main500）。觸控按下時自動顯示同樣外觀。"},leftIcon:{control:!1,description:"左側圖示（ReactNode）。"},rightIcon:{control:!1,description:"右側圖示（ReactNode）。"}},args:{children:"按鈕文字",variant:"primary",size:"l"}},o={},i={args:{leftIcon:e.jsx(t,{name:"search"}),rightIcon:e.jsx(t,{name:"search"})}},c={render:a=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:["primary","secondary","outline","glass","light","dark","gradient","text"].map(r=>e.jsx(s,{...a,variant:r,children:r},r))})},l={render:a=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:["xs","s","m","l"].map(r=>e.jsx(s,{...a,size:r,leftIcon:e.jsx(t,{name:"search"}),children:`按鈕文字 ${r.toUpperCase()}`},r))})},d={render:a=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:["primary","outline","glass","dark"].map(r=>e.jsx(s,{...a,variant:r,disabled:!0,children:r},r))})},p={render:a=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, max-content)",gap:12},children:["primary","outline"].flatMap(r=>[e.jsx(s,{...a,variant:r,leftIcon:e.jsx(t,{name:"search"}),children:"Normal"},r+"n"),e.jsx(s,{...a,variant:r,selected:!0,leftIcon:e.jsx(t,{name:"search"}),children:"Active"},r+"a"),e.jsx(s,{...a,variant:r,disabled:!0,leftIcon:e.jsx(t,{name:"search"}),children:"Disable"},r+"d")])})},m={args:{fullWidth:!0,children:"上傳"},render:a=>e.jsxs("div",{style:{width:374,display:"grid",gap:12},children:[e.jsx(s,{...a}),e.jsx(s,{...a,variant:"glass",children:"取消"})]})},n={args:{},play:async()=>{await u.tab()}},f=["Default","WithIcons","Variants","Sizes","Disabled","States","BottomCTA","FocusVisible"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <Icon name="search" />,
    rightIcon: <Icon name="search" />
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12
  }}>
      {(['primary', 'secondary', 'outline', 'glass', 'light', 'dark', 'gradient', 'text'] as const).map(v => <Button key={v} {...args} variant={v}>{v}</Button>)}
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      {(['xs', 's', 'm', 'l'] as const).map(s => <Button key={s} {...args} size={s} leftIcon={<Icon name="search" />}>{\`按鈕文字 \${s.toUpperCase()}\`}</Button>)}
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12
  }}>
      {(['primary', 'outline', 'glass', 'dark'] as const).map(v => <Button key={v} {...args} variant={v} disabled>{v}</Button>)}
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, max-content)',
    gap: 12
  }}>
      {(['primary', 'outline'] as const).flatMap(v => [<Button key={v + 'n'} {...args} variant={v} leftIcon={<Icon name="search" />}>Normal</Button>, <Button key={v + 'a'} {...args} variant={v} selected leftIcon={<Icon name="search" />}>Active</Button>, <Button key={v + 'd'} {...args} variant={v} disabled leftIcon={<Icon name="search" />}>Disable</Button>])}
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: '上傳'
  },
  render: args => <div style={{
    width: 374,
    display: 'grid',
    gap: 12
  }}>
      <Button {...args} />
      <Button {...args} variant="glass">取消</Button>
    </div>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async () => {
    await userEvent.tab();
  }
}`,...n.parameters?.docs?.source},description:{story:"Keyboard focus ring (Tab). Touch users never see it; required for external keyboards and Switch Control.",...n.parameters?.docs?.description}}};export{m as BottomCTA,o as Default,d as Disabled,n as FocusVisible,l as Sizes,p as States,c as Variants,i as WithIcons,f as __namedExportsOrder,v as default};
