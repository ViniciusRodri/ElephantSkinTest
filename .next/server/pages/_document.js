"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={29:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.r(r),t.d(r,{default:()=>u});var s=t(997);t(6689);var o=t(6859),n=t.n(o),i=t(7518),l=t(2210),c=t(262),d=e([l,c]);[l,c]=d.then?(await d)():d;class u extends n(){static async getInitialProps(e){let r=new i.ServerStyleSheet,t=e.renderPage;try{e.renderPage=()=>t({enhanceApp:e=>t=>r.collectStyles(s.jsx(e,{...t}))});let a=await n().getInitialProps(e);return{...a,styles:[(0,s.jsxs)(s.Fragment,{children:[a.styles,r.getStyleElement()]})]}}finally{r.seal()}}render(){return(0,s.jsxs)(o.Html,{lang:"pt-BR",children:[s.jsx(o.Head,{}),(0,s.jsxs)("body",{children:[s.jsx(o.Main,{}),s.jsx(o.NextScript,{}),s.jsx(l.ColorModeScript,{initialColorMode:c.rS.config.initialColorMode})]})]})}}a()}catch(e){a(e)}})},262:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{nz:()=>c,rS:()=>l});var s=t(2210),o=t(7518),n=t.n(o),i=e([s]);s=(i.then?(await i)():i)[0];let l=(0,s.extendTheme)({colors:{gray:{100:"#F6F7FA",200:"#EBF2FA",300:"#747474"},white:"#FFFFFF",black:"#000000"},fonts:{heading:"'Open Sans', sans-serif",body:"'Open Sans', sans-serif"},styles:{global:{body:{bg:"#FFFFFF",color:"#FFFFFF",fontSize:"0.9em"},a:{textDecoration:"none",transition:"transform 0.15s ease-out, background 0.15s ease-out",_hover:{textDecoration:"underline",transform:"scale(1.03, 1.03)"},_active:{transform:"scale(1, 1)"}},button:{transition:"transform 0.15s ease-out, background 0.15s ease-out",_hover:{transform:"scale(1.03, 1.03)"},_active:{transform:"scale(1, 1)"}}}}}),c=o.createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;     
    height: 10px;
    scrollbar-width: thin;         
  }      

  ::-webkit-scrollbar-track {
    background: #f1f1f1;       
  }

  ::-webkit-scrollbar-thumb {
    background-color: #929191;    
    border-radius: 10px;     
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;n().div`
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0em 0em;
`,a()}catch(e){a(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},7518:e=>{e.exports=require("styled-components")},2210:e=>{e.exports=import("@chakra-ui/react")},1017:e=>{e.exports=require("path")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[859],()=>t(29));module.exports=a})();