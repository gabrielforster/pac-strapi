"use strict";(self.webpackChunkpac_strapi=self.webpackChunkpac_strapi||[]).push([[8418],{38977:(Z,y,t)=>{t.r(y),t.d(y,{default:()=>ie});var e=t(67294),o=t(334),M=t(40720),x=t(90731),j=t(34726),a=t(21141),l=t(86896),f=t(88767),v=t(84419),n=t(99688),L=t(74622),P=t(36854),s=t(71543),r=t(31988),i=t(6498),m=t(457),c=t(37022),g=t(12473),S=t(82392),I=t(75071),F=t(41054),U=t(45697),u=t.n(U),R=t(87561);const k=R.Ry().shape({options:R.Ry().shape({from:R.Ry().shape({name:R.Z_().required(a.I0.required),email:R.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:R.Z_().email(a.I0.email),object:R.Z_().required(a.I0.required),message:R.Z_().required(a.I0.required)}).required(a.I0.required)}),$=({template:d,onToggle:T,onSubmit:p})=>{const{formatMessage:h}=(0,l.Z)();return e.createElement(L.P,{onClose:T,labelledBy:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(d.display),defaultMessage:d.display})}`},e.createElement(P.x,null,e.createElement(S.O,{label:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(d.display),defaultMessage:d.display})}`},e.createElement(I.$,null,h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(I.$,{isCurrent:!0},h({id:(0,n.OB)(d.display),defaultMessage:d.display})))),e.createElement(F.J9,{onSubmit:p,initialValues:d,validateOnChange:!1,validationSchema:k,enableReinitialize:!0},({errors:O,values:C,handleChange:b,isSubmitting:z})=>e.createElement(a.l0,null,e.createElement(s.f,null,e.createElement(r.r,{gap:5},e.createElement(i.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:b,value:C.options.from.name,error:O?.options?.from?.name,type:"text"})),e.createElement(i.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:b,value:C.options.from.email,error:O?.options?.from?.email,type:"text"})),e.createElement(i.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:b,value:C.options.response_email,error:O?.options?.response_email,type:"text"})),e.createElement(i.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:b,value:C.options.object,error:O?.options?.object,type:"text"})),e.createElement(i.P,{col:12,s:12},e.createElement(m.g,{label:h({id:(0,n.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:b,value:C.options.message,error:O?.options?.message&&h({id:O.options.message,defaultMessage:O.options.message})})))),e.createElement(c.m,{startActions:e.createElement(g.z,{onClick:T,variant:"tertiary"},"Cancel"),endActions:e.createElement(g.z,{loading:z,type:"submit"},"Finish")}))))};$.propTypes={template:u().shape({display:u().string,icon:u().string,options:u().shape({from:u().shape({name:u().string,email:u().string}),message:u().string,object:u().string,response_email:u().string})}).isRequired,onSubmit:u().func.isRequired,onToggle:u().func.isRequired};const w=$;var q=t(5923),_=t(3547),D=t(29299),B=t(69398),N=t(22304),H=t(10574),ee=t(35752),A=t(85200),K=t(96208),te=t(75975),V=t(2382),ae=t(18226);const G=({canUpdate:d,onEditClick:T})=>{const{formatMessage:p}=(0,l.Z)();return e.createElement(q.i,{colCount:3,rowCount:3},e.createElement(_.h,null,e.createElement(D.Tr,null,e.createElement(B.Th,{width:"1%"},e.createElement(N.T,null,p({id:(0,n.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(B.Th,null,e.createElement(H.Z,{variant:"sigma",textColor:"neutral600"},p({id:(0,n.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(B.Th,{width:"1%"},e.createElement(N.T,null,p({id:(0,n.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(ee.p,null,e.createElement(D.Tr,{...(0,a.X7)({fn:()=>T("reset_password")})},e.createElement(B.Td,null,e.createElement(A.J,null,e.createElement(te.Z,{"aria-label":p({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(B.Td,null,e.createElement(H.Z,null,p({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(B.Td,{...a.UW},e.createElement(K.h,{onClick:()=>T("reset_password"),label:p({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement(V.Z,null)}))),e.createElement(D.Tr,{...(0,a.X7)({fn:()=>T("email_confirmation")})},e.createElement(B.Td,null,e.createElement(A.J,null,e.createElement(ae.Z,{"aria-label":p({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(B.Td,null,e.createElement(H.Z,null,p({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(B.Td,{...a.UW},e.createElement(K.h,{onClick:()=>T("email_confirmation"),label:p({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement(V.Z,null)})))))};G.propTypes={canUpdate:u().bool.isRequired,onEditClick:u().func.isRequired};const ne=G,se=()=>e.createElement(a.O4,{permissions:v._.readEmailTemplates},e.createElement(le,null)),le=()=>{const{formatMessage:d}=(0,l.Z)(),{trackUsage:T}=(0,a.rS)(),{notifyStatus:p}=(0,o.G)(),h=(0,a.lm)(),{lockApp:O,unlockApp:C}=(0,a.o1)(),b=(0,f.useQueryClient)(),{get:z,put:oe}=(0,a.kY)(),{formatAPIError:J}=(0,a.So)();(0,a.go)();const[re,me]=e.useState(!1),[Q,de]=e.useState(null),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)({update:v._.updateEmailTemplates}),{isLoading:pe,data:X}=(0,f.useQuery)(["users-permissions","email-templates"],async()=>{const{data:E}=await z("/users-permissions/email-templates");return E},{onSuccess(){p(d({id:(0,n.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(E){h({type:"warning",message:J(E)})}}),Ee=ce||pe,W=()=>{me(E=>!E)},fe=E=>{de(E),W()},Y=(0,f.useMutation)(E=>oe("/users-permissions/email-templates",{"email-templates":E}),{async onSuccess(){await b.invalidateQueries(["users-permissions","email-templates"]),h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),T("didEditEmailTemplates"),C(),W()},onError(E){h({type:"warning",message:J(E)}),C()},refetchActive:!0}),ge=E=>{O(),T("willEditEmailTemplates");const he={...X,[Q]:E};Y.mutate(he)};return Ee?e.createElement(M.o,{"aria-busy":"true"},e.createElement(a.SL,{name:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(x.T,{title:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(j.D,null,e.createElement(a.dO,null))):e.createElement(M.o,{"aria-busy":Y.isLoading},e.createElement(a.SL,{name:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(x.T,{title:d({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(j.D,null,e.createElement(ne,{onEditClick:fe,canUpdate:ue}),re&&e.createElement(w,{template:X[Q],onToggle:W,onSubmit:ge})))},ie=se},99688:(Z,y,t)=>{t.d(y,{YX:()=>x,OB:()=>j.Z});var e=t(41609),o=t.n(e);const x=a=>Object.keys(a).reduce((l,f)=>{const v=a[f].controllers,n=Object.keys(v).reduce((L,P)=>(o()(v[P])||(L[P]=v[P]),L),{});return o()(n)||(l[f]={controllers:n}),l},{});var j=t(58655)},34726:(Z,y,t)=>{t.d(y,{D:()=>M});var e=t(85893),o=t(16607);const M=({children:x})=>(0,e.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:x})},90731:(Z,y,t)=>{t.d(y,{T:()=>n});var e=t(85893),o=t(67294),M=t(88972);const x=s=>{const r=(0,o.useRef)(null),[i,m]=(0,o.useState)(!0),c=([g])=>{m(g.isIntersecting)};return(0,o.useEffect)(()=>{const g=r.current,S=new IntersectionObserver(c,s);return g&&S.observe(r.current),()=>{g&&S.disconnect()}},[r,s]),[r,i]};var j=t(79698);const a=(s,r)=>{const i=(0,j.W)(r);(0,o.useLayoutEffect)(()=>{const m=new ResizeObserver(i);return Array.isArray(s)?s.forEach(c=>{c.current&&m.observe(c.current)}):s.current&&m.observe(s.current),()=>{m.disconnect()}},[s,i])};var l=t(16607),f=t(96987),v=t(10574);const n=s=>{const r=(0,o.useRef)(null),[i,m]=(0,o.useState)(null),[c,g]=x({root:null,rootMargin:"0px",threshold:0});return a(c,()=>{c.current&&m(c.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{r.current&&m(r.current.getBoundingClientRect())},[r]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:i?.height},ref:c,children:g&&(0,e.jsx)(P,{ref:r,...s})}),!g&&(0,e.jsx)(P,{...s,sticky:!0,width:i?.width})]})};n.displayName="HeaderLayout";const L=(0,M.ZP)(l.x)`
  width: ${({width:s})=>s?`${s/16}rem`:void 0};
  z-index: ${({theme:s})=>s.zIndices[1]};
`,P=o.forwardRef(({navigationAction:s,primaryAction:r,secondaryAction:i,subtitle:m,title:c,sticky:g,width:S,...I},F)=>{const U=typeof m=="string";return g?(0,e.jsx)(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{children:[s&&(0,e.jsx)(l.x,{paddingRight:3,children:s}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(v.Z,{variant:"beta",as:"h1",...I,children:c}),U?(0,e.jsx)(v.Z,{variant:"pi",textColor:"neutral600",children:m}):m]}),i?(0,e.jsx)(l.x,{paddingLeft:4,children:i}):null]}),(0,e.jsx)(f.k,{children:r?(0,e.jsx)(l.x,{paddingLeft:2,children:r}):void 0})]})}):(0,e.jsxs)(l.x,{ref:F,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0,children:[s?(0,e.jsx)(l.x,{paddingBottom:2,children:s}):null,(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{minWidth:0,children:[(0,e.jsx)(v.Z,{as:"h1",variant:"alpha",...I,children:c}),i?(0,e.jsx)(l.x,{paddingLeft:4,children:i}):null]}),r]}),U?(0,e.jsx)(v.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:m}):m]})})},40720:(Z,y,t)=>{t.d(y,{o:()=>j});var e=t(85893),o=t(88972),M=t(16607);const x=(0,o.ZP)(M.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,j=({labelledBy:a="main-content-title",...l})=>(0,e.jsx)(x,{"aria-labelledby":a,as:"main",id:"main-content",tabIndex:-1,...l})}}]);