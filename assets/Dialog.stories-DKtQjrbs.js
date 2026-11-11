import{j as o,r as S}from"./iframe-jZenK_OP.js";import{u as B,D as v,b as h,n as y,p as C}from"./storyFrame-zJXJiMuZ.js";import{B as E}from"./Button-oEX-9zlT.js";import"./preload-helper-PPVm8Dsz.js";function f({opened:r,title:m,message:t,actions:a,onClose:g}){const n=B(),F=n==="android"?2:3,D=a.filter(e=>e.role==="cancel").slice(0,1),s=[...a.filter(e=>e.role!=="cancel").slice(0,F-D.length),...D],A=s.filter(e=>e.role==="cancel"),b=s.filter(e=>e.role!=="cancel"),O=s.length>2?[...b.filter(e=>e.preferred),...b.filter(e=>!e.preferred),...A]:[...A,...b];return o.jsx(v,{opened:r,title:m,content:t,onBackdropClick:n==="android"?g:void 0,className:s.length>2?"ad-dialog--stack":void 0,role:"alertdialog","aria-modal":"true",buttons:O.map(e=>o.jsx(h,{strong:n==="ios"&&!!e.preferred&&e.role!=="cancel",disabled:e.role==="cancel"?!1:e.disabled,onClick:e.onClick,style:n==="ios"&&e.role==="destructive"?{color:"var(--ad-native-danger)"}:void 0,children:e.label},e.label))})}f.__docgenInfo={description:`Alert dialog — iOS 26 alert / Material 3 basic dialog.
Button order follows each guideline automatically:
- Row (≤ 2): cancel on the leading side, confirming action trailing (closest to the edge).
- iOS stack (3): preferred on top, cancel at the bottom.`,methods:[],displayName:"Dialog",props:{opened:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:'Short, specific statement or question (≤ 2 lines). Avoid "Error" or "Are you sure?".'},message:{required:!1,tsType:{name:"ReactNode"},description:"Optional supporting text — only if it adds value."},actions:{required:!0,tsType:{name:"Array",elements:[{name:"DialogAction"}],raw:"DialogAction[]"},description:"iOS: up to 3. Material: up to 2 (one confirming + one dismissive, or one acknowledgement)."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Material: scrim tap dismisses. iOS alerts ignore backdrop taps."}}};const{userEvent:x}=__STORYBOOK_MODULE_TEST__,j={title:"Native/Dialog",component:f,tags:["autodocs"],decorators:[C(560)],parameters:{...y,docs:{description:{component:`外觀與顏色都採用平台原生預設（iOS 系統藍與 SF Pro／Material 3 預設配色與 Roboto），不套 Orange 品牌色。

警示對話框：iOS 26 alert／Material 3 basic dialog。

**按鈕數量**：iOS 最多 3 個；Material 最多 2 個（一個確認＋一個取消，或單一個「知道了」類的確認）。
**順序（元件自動處理）**：取消放左側（iOS 3 個按鈕直排時放最下面），確認動作放右側、最靠近邊緣。
**樣式**：取消一律叫「取消」、不能是預設按鈕、不能停用；\`preferred\` 只在 iOS 變成實心按鈕，Material 一律文字按鈕；\`destructive\` 紅字只用在使用者不是刻意選擇的破壞性動作（Apple HIG）。
**何時用**：只用在需要使用者決定的高重要性情況；單純告知請用 Toast，可復原的刪除不需要確認。標題要具體（不要用「錯誤」或「確定嗎？」），兩行以內；按鈕文字用動詞，例如「刪除」而不是「確定」。`}}},argTypes:{opened:{control:"boolean",description:"是否顯示。"},title:{control:"text",description:"標題。"},message:{control:"text",description:"說明文字。"},actions:{control:"object",description:"`{label, role?, preferred?, onClick?, disabled?}[]`，1–3 個。"},onClose:{action:"close",description:"點背景（Material）時呼叫。"}},args:{opened:!0,title:"要永久刪除這份逐字稿嗎？",message:"刪除後無法復原。",actions:[{label:"取消",role:"cancel"},{label:"刪除",role:"destructive"}]},render:r=>{const[m,t]=S.useState(r.opened),a=()=>t(!1);return o.jsxs("div",{style:{padding:24},children:[o.jsx(E,{onClick:()=>t(!0),children:"Open"}),o.jsx(f,{...r,opened:m,onClose:a,actions:r.actions.map(g=>({...g,onClick:a}))})]})}},l={},i={args:{title:"開啟麥克風權限？",message:"需要麥克風才能即時聽寫。",actions:[{label:"稍後",role:"cancel"},{label:"開啟",preferred:!0}]}},c={args:{title:"無法連線到伺服器",message:"請確認網路連線後再試一次。",actions:[{label:"好"}]}},u={name:"Three actions (iOS only)",args:{title:"要儲存變更嗎？",message:void 0,actions:[{label:"儲存",preferred:!0},{label:"不儲存",role:"destructive"},{label:"取消",role:"cancel"}]}},d={play:async()=>{await x.tab()}},p={args:{title:"選擇匯出格式",message:"請先選擇一種格式。",actions:[{label:"取消",role:"cancel"},{label:"匯出",disabled:!0}]}},q=["Default","Preferred","Acknowledgement","ThreeActionsIOS","FocusVisible","Disabled"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: '開啟麥克風權限？',
    message: '需要麥克風才能即時聽寫。',
    actions: [{
      label: '稍後',
      role: 'cancel'
    }, {
      label: '開啟',
      preferred: true
    }]
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: '無法連線到伺服器',
    message: '請確認網路連線後再試一次。',
    actions: [{
      label: '好'
    }]
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Three actions (iOS only)',
  args: {
    title: '要儲存變更嗎？',
    message: undefined,
    actions: [{
      label: '儲存',
      preferred: true
    }, {
      label: '不儲存',
      role: 'destructive'
    }, {
      label: '取消',
      role: 'cancel'
    }]
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: '選擇匯出格式',
    message: '請先選擇一種格式。',
    actions: [{
      label: '取消',
      role: 'cancel'
    }, {
      label: '匯出',
      disabled: true
    }]
  }
}`,...p.parameters?.docs?.source}}};export{c as Acknowledgement,l as Default,p as Disabled,d as FocusVisible,i as Preferred,u as ThreeActionsIOS,q as __namedExportsOrder,j as default};
