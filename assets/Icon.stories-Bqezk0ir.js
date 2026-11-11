import{j as e,r as y}from"./iframe-jZenK_OP.js";import{i as d,I as a,a as g}from"./Icon-D2bzZctV.js";import"./preload-helper-PPVm8Dsz.js";const n=r=>g[r],p={"icon/default":"var(--ad-sys-color-icon-default)","icon/muted":"var(--ad-sys-color-icon-muted)","icon/subtle":"var(--ad-sys-color-icon-subtle)","icon/brand":"var(--ad-sys-color-icon-brand)","icon/inverse":"var(--ad-sys-color-icon-inverse)","icon/success":"var(--ad-sys-color-icon-success)","icon/warning":"var(--ad-sys-color-icon-warning)","icon/danger":"var(--ad-sys-color-icon-danger)"},I={title:"Components/Icon",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"單色圖示（Figma: ❖ Component → Icon，node 50777:19124）。共 "+d.length+" 個，顏色跟著 `currentColor`，請用 `sys.color.icon.*` token 設定 `color`。尺寸 sm 16 / md 20 / lg 24 / xl 28（`comp.icon.*`），也可以傳數字。純裝飾圖示不需要 `label`（會自動加 aria-hidden）；單獨當按鈕使用時請提供 `label`。多色圖示（logo、Google、Record 等 13 個）、3D 圖示與 OrangeBorder 範本圖示不在這裡，範本圖示請用 `templateIcons`（src/assets）。"}}},argTypes:{name:{control:"select",options:d,description:"圖示名稱（kebab-case，對應 Figma 元件名稱，見 Gallery）。"},size:{control:"inline-radio",options:["sm","md","lg","xl"],description:"sm 16 · md 20 · lg 24 · xl 28，或傳入數字（px）。",table:{defaultValue:{summary:"lg"}}},label:{control:"text",description:"無障礙名稱。省略時視為裝飾圖示。"},color:{control:"select",options:Object.keys(p),description:"示範用：套用 sys.color.icon.* token（實際使用時在父層設定 color）。"}},args:{name:"microphone-stroke",size:"lg",color:"icon/default"},render:({color:r,...o})=>e.jsx("span",{style:{color:p[r],display:"inline-flex"},children:e.jsx(a,{...o})})},l={},t={render:({name:r})=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-end",color:"var(--ad-sys-color-icon-default)"},children:["sm","md","lg","xl"].map(o=>e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:6,font:"12px/1.4 var(--ad-sys-font-family-base)",color:"var(--ad-sys-color-text-secondary)"},children:[e.jsx("span",{style:{color:"var(--ad-sys-color-icon-default)",display:"inline-flex"},children:e.jsx(a,{name:r,size:o})}),o]},o))})},c={render:({name:r})=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:Object.keys(p).map(o=>e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:6,padding:12,borderRadius:12,minWidth:88,background:o==="icon/inverse"?"var(--ad-sys-color-surface-inverse)":"var(--ad-sys-color-surface-container)",font:"12px/1.4 var(--ad-sys-font-family-base)",color:o==="icon/inverse"?"var(--ad-sys-color-text-on-inverse)":"var(--ad-sys-color-text-secondary)"},children:[e.jsx("span",{style:{color:p[o],display:"inline-flex"},children:e.jsx(a,{name:r})}),o]},o))})};function b(){const[r,o]=y.useState(""),[f,m]=y.useState(null),u=y.useMemo(()=>{const s=r.trim().toLowerCase();return d.filter(x=>!s||x.includes(s)||n(x).source.toLowerCase().includes(s))},[r]),v=async s=>{try{await navigator.clipboard.writeText(`<Icon name="${s}" />`),m(s),setTimeout(()=>m(null),1200)}catch{}};return e.jsxs("div",{style:{font:"13px/1.4 var(--ad-sys-font-family-base)",color:"var(--ad-sys-color-text-primary)"},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:16,flexWrap:"wrap"},children:[e.jsx("input",{id:"icon-search",value:r,onChange:s=>o(s.target.value),placeholder:"Search icons (name or Figma name)","aria-label":"Search icons",style:{padding:"8px 12px",borderRadius:8,border:"1px solid var(--ad-sys-color-border-subtle)",minWidth:260,font:"inherit"}}),e.jsxs("span",{style:{color:"var(--ad-sys-color-text-secondary)"},children:[u.length," / ",d.length," · click to copy JSX"]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(112px, 1fr))",gap:8},children:u.map(s=>e.jsxs("button",{type:"button",onClick:()=>v(s),title:`${n(s).source}${n(s).node?` · node ${n(s).node}`:""}`,style:{display:"grid",justifyItems:"center",gap:8,padding:"14px 6px 10px",borderRadius:12,cursor:"pointer",border:"1px solid var(--ad-sys-color-border-subtle)",background:"var(--ad-sys-color-surface-container)",color:"var(--ad-sys-color-icon-default)",font:"inherit"},children:[e.jsx(a,{name:s,size:"lg"}),e.jsx("span",{style:{fontSize:11,color:"var(--ad-sys-color-text-secondary)",wordBreak:"break-all",textAlign:"center"},children:f===s?"Copied":s})]},s))})]})}const i={parameters:{controls:{disable:!0}},render:()=>e.jsx(b,{})},C=["Default","Sizes","Colors","Gallery"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ({
    name
  }) => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-end',
    color: 'var(--ad-sys-color-icon-default)'
  }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map(s => <div key={s} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 6,
      font: '12px/1.4 var(--ad-sys-font-family-base)',
      color: 'var(--ad-sys-color-text-secondary)'
    }}>
          <span style={{
        color: 'var(--ad-sys-color-icon-default)',
        display: 'inline-flex'
      }}><Icon name={name} size={s} /></span>
          {s}
        </div>)}
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    name
  }) => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      {(Object.keys(colorTokens) as ColorToken[]).map(c => <div key={c} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 6,
      padding: 12,
      borderRadius: 12,
      minWidth: 88,
      background: c === 'icon/inverse' ? 'var(--ad-sys-color-surface-inverse)' : 'var(--ad-sys-color-surface-container)',
      font: '12px/1.4 var(--ad-sys-font-family-base)',
      color: c === 'icon/inverse' ? 'var(--ad-sys-color-text-on-inverse)' : 'var(--ad-sys-color-text-secondary)'
    }}>
          <span style={{
        color: colorTokens[c],
        display: 'inline-flex'
      }}><Icon name={name} /></span>
          {c}
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <GalleryView />
}`,...i.parameters?.docs?.source}}};export{c as Colors,l as Default,i as Gallery,t as Sizes,C as __namedExportsOrder,I as default};
