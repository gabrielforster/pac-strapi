"use strict";(self.webpackChunkpac_strapi=self.webpackChunkpac_strapi||[]).push([[349],{52713:(L,c,t)=>{t.d(c,{r:()=>i});var e=t(67294),n=t(16607),l=t(45697),f=t.n(l),E=t(99168);function m(g,u,s){if(!g||!u)return{display:"none"};const{x:a,y:o}=s;return{transform:`translate(${a}px, ${o}px)`}}function i({renderItem:g}){const{itemType:u,isDragging:s,item:a,initialOffset:o,currentOffset:O,mouseOffset:y}=(0,E.useDragLayer)(v=>({item:v.getItem(),itemType:v.getItemType(),initialOffset:v.getInitialSourceClientOffset(),currentOffset:v.getSourceClientOffset(),isDragging:v.isDragging(),mouseOffset:v.getClientOffset()}));return s?e.createElement(n.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},e.createElement(n.x,{style:m(o,O,y)},g({type:u,item:a}))):null}i.propTypes={renderItem:f().func.isRequired}},75021:(L,c,t)=>{t.d(c,{q:()=>f});var e=t(67294),n=t(21141),l=t(88767);function f({enabled:E}={enabled:!0}){const{get:m}=(0,n.kY)(),{data:i,isError:g,isLoading:u}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:o}}=await m("/admin/license-limit-information");return o},{enabled:E}),s=e.useMemo(()=>i??{},[i]),a=e.useCallback(o=>(s?.features??[]).find(y=>y.name===o)?.options??{},[s?.features]);return{license:s,getFeature:a,isError:g,isLoading:u}}},43390:(L,c,t)=>{t.d(c,{eJ:()=>M,lx:()=>W,h4:()=>T,fC:()=>P});var e=t(67294),n=t(71590),l=t(40720),f=t(34726),E=t(90731),m=t(21141),i=t(97695),g=t(86896),u=t(52713),s=t(86978),a=t(96987),o=t(10574),O=t(58471),y=t(45697),v=t.n(y),S=t(88972);const D=(0,S.ZP)(a.k)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`;function h({name:w}){return e.createElement(a.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,m.Q1)(300)},e.createElement(D,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(O.Z,{width:`${8/16}rem`})),e.createElement(o.Z,{fontWeight:"bold"},w))}h.propTypes={name:v().string.isRequired};function C({type:w,item:p}){switch(w){case s.uL.STAGE:return e.createElement(h,{...p});default:return null}}function W(){return e.createElement(u.r,{renderItem:C})}function P({children:w}){return e.createElement(n.A,null,e.createElement(l.o,{tabIndex:-1},e.createElement(f.D,null,w)))}function M({href:w}){const{formatMessage:p}=(0,g.Z)();return e.createElement(m.rU,{startIcon:e.createElement(i.Z,null),to:w},p({id:"global.back",defaultMessage:"Back"}))}function T({title:w,subtitle:p,navigationAction:R,primaryAction:A}){return e.createElement(e.Fragment,null,e.createElement(m.SL,{name:w}),e.createElement(E.T,{navigationAction:R,primaryAction:A,title:w,subtitle:p}))}},38705:(L,c,t)=>{t.d(c,{uT:()=>C,fC:()=>M,Dx:()=>h});var e=t(67294),n=t(10574),l=t(96987),f=t(74622),E=t(71543),m=t(16607),i=t(96208),g=t(94101),u=t(35771),s=t(45697),a=t.n(s),o=t(86896),O=t(88972);const y=t.p+"0cd5f8915b265d5b1856.png",v="limits-title",S="https://strapi.io/pricing-cloud",D="https://strapi.io/contact-sales";function h({children:T}){return e.createElement(n.Z,{variant:"alpha",id:v},T)}h.propTypes={children:a().node.isRequired};function C({children:T}){return e.createElement(n.Z,{variant:"omega"},T)}C.propTypes={children:a().node.isRequired};function W(){const{formatMessage:T}=(0,o.Z)();return e.createElement(l.k,{gap:2,paddingTop:4},e.createElement(g.Q,{variant:"default",isExternal:!0,href:S},T({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(g.Q,{variant:"tertiary",isExternal:!0,href:D},T({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const P=O.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:T})=>`-${T.spaces[7]}`};
  margin-top: ${({theme:T})=>`-${T.spaces[7]}`};
  width: 360px;
`;function M({children:T,isOpen:w,onClose:p}){const{formatMessage:R}=(0,o.Z)();return w?e.createElement(f.P,{labelledBy:v},e.createElement(E.f,null,e.createElement(l.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(l.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},T,e.createElement(W,null)),e.createElement(l.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(P,{src:y,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(m.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(i.h,{icon:e.createElement(u.Z,null),"aria-label":R({id:"global.close",defaultMessage:"Close"}),onClick:p})))))):null}M.defaultProps={isOpen:!1},M.propTypes={children:a().node.isRequired,isOpen:a().bool,onClose:a().func.isRequired}},86978:(L,c,t)=>{t.d(c,{$k:()=>y,Ef:()=>C,FT:()=>D,Nj:()=>o,Ot:()=>s,QM:()=>g,VS:()=>v,_X:()=>W,bc:()=>a,gu:()=>l,k_:()=>O,lv:()=>S,qZ:()=>i,rg:()=>E,sN:()=>n,uL:()=>h,x4:()=>u,yq:()=>f,zn:()=>m});var e=t(12255);const n="settings_review-workflows",l="Settings/Review_Workflows/RESET_WORKFLOW",f="Settings/Review_Workflows/SET_CONTENT_TYPES",E="Settings/Review_Workflows/SET_IS_LOADING",m="Settings/Review_Workflows/SET_ROLES",i="Settings/Review_Workflows/SET_WORKFLOW",g="Settings/Review_Workflows/SET_WORKFLOWS",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",s="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",a="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",o="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",O="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",y="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",v="Settings/Review_Workflows/WORKFLOW_UPDATE",S={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},D=e.W.colors.primary600,h={STAGE:"stage"},C="numberOfWorkflows",W="stagesPerWorkflow"},52258:(L,c,t)=>{t.d(c,{n:()=>f});var e=t(67294),n=t(21141),l=t(88767);function f(E={}){const{get:m}=(0,n.kY)(),{id:i="",...g}=E,u={populate:"stages"},{data:s,isLoading:a,status:o,refetch:O}=(0,l.useQuery)(["review-workflows","workflows",i],async()=>(await m(`/admin/review-workflows/workflows/${i}`,{params:{...u,...g}})).data),y=e.useMemo(()=>i&&s?.data?[s.data]:Array.isArray(s?.data)?s.data:[],[s?.data,i]);return{meta:e.useMemo(()=>s?.meta??{},[s?.meta]),workflows:y,isLoading:a,status:o,refetch:O}}},26259:(L,c,t)=>{t.r(c),t.d(c,{default:()=>X});var e=t(67294),n=t(21141),l=t(86706),f=t(36364),E=t(96987),m=t(74863),i=t(5923),g=t(38454),u=t(3547),s=t(29299),a=t(69398),o=t(10574),O=t(22304),y=t(35752),v=t(96208),S=t(83598),D=t(2382),h=t(54425),C=t(86896),W=t(88767),P=t(16550),M=t(88972),T=t(92686),w=t(75021),p=t(43390),R=t(38705),A=t(86978),Y=t(52258);const V=(0,M.ZP)(n.rU)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:r})=>`${r.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:r})=>r.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral800};
      }
    }
  }
`;function z(){const{formatMessage:r}=(0,C.Z)(),{push:Z}=(0,P.k6)(),{collectionTypes:J,singleTypes:b,isLoading:q}=(0,T.G)(),{meta:x,workflows:$,isLoading:k,refetch:_}=(0,Y.n)(),[U,F]=e.useState(null),[ee,B]=e.useState(!1),{del:te}=(0,n.kY)(),{formatAPIError:ne}=(0,n.So)(),j=(0,n.lm)(),{getFeature:se,isLoading:G}=(0,w.q)(),{trackUsage:Q}=(0,n.rS)(),ae=(0,l.v9)(f._),{allowedActions:{canCreate:H,canDelete:oe}}=(0,n.ss)(ae.settings["review-workflows"]),I=se("review-workflows"),{mutateAsync:le,isLoading:re}=(0,W.useMutation)(async({workflowId:d,stages:N})=>{const{data:{data:K}}=await te(`/admin/review-workflows/workflows/${d}`,{data:N});return K},{onSuccess(){j({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=d=>[...J,...b].find(K=>K.uid===d).info.displayName,de=d=>{F(d)},ce=()=>{F(null)},fe=async()=>{try{const d=await le({workflowId:U});return await _(),F(null),d}catch(d){return j({type:"warning",message:ne(d)}),null}};return e.useEffect(()=>{!k&&!G&&I?.[A.Ef]&&x?.workflowCount>parseInt(I[A.Ef],10)&&B(!0)},[G,k,I,x?.workflowCount,x.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(p.h4,{primaryAction:H&&e.createElement(n.Qj,{startIcon:e.createElement(S.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:d=>{I?.[A.Ef]&&x?.workflowCount>=parseInt(I[A.Ef],10)?(d.preventDefault(),B(!0)):Q("willCreateWorkflow")}},r({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:r({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:r({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.createElement(p.fC,null,k||q?e.createElement(E.k,{justifyContent:"center"},e.createElement(m.a,null,r({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):e.createElement(i.i,{colCount:3,footer:H&&e.createElement(g.c,{icon:e.createElement(S.Z,null),onClick:()=>{I?.[A.Ef]&&x?.workflowCount>=parseInt(I[A.Ef],10)?B(!0):(Z("/settings/review-workflows/create"),Q("willCreateWorkflow"))}},r({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},e.createElement(u.h,null,e.createElement(s.Tr,null,e.createElement(a.Th,null,e.createElement(o.Z,{variant:"sigma"},r({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),e.createElement(a.Th,null,e.createElement(o.Z,{variant:"sigma"},r({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),e.createElement(a.Th,null,e.createElement(o.Z,{variant:"sigma"},r({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),e.createElement(a.Th,null,e.createElement(O.T,null,r({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),e.createElement(y.p,null,$.map(d=>e.createElement(s.Tr,{...(0,n.X7)({fn(N){N.target.nodeName!=="BUTTON"&&Z(`/settings/review-workflows/${d.id}`)}}),key:`workflow-${d.id}`},e.createElement(a.Td,{width:(0,n.Q1)(250)},e.createElement(o.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},d.name)),e.createElement(a.Td,null,e.createElement(o.Z,{textColor:"neutral800"},d.stages.length)),e.createElement(a.Td,null,e.createElement(o.Z,{textColor:"neutral800"},(d?.contentTypes??[]).map(ie).join(", "))),e.createElement(a.Td,null,e.createElement(E.k,{alignItems:"center",justifyContent:"end"},e.createElement(V,{to:`/settings/review-workflows/${d.id}`,"aria-label":r({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:d.name})},e.createElement(D.Z,null)),$.length>1&&oe&&e.createElement(v.h,{"aria-label":r({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:e.createElement(h.Z,null),noBorder:!0,onClick:()=>{de(d.id)}}))))))),e.createElement(n.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:re,isOpen:!!U,onToggleDialog:ce,onConfirm:fe}),e.createElement(R.fC,{isOpen:ee,onClose:()=>B(!1)},e.createElement(R.Dx,null,r({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(R.uT,null,r({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function X(){const r=(0,l.v9)(f._);return e.createElement(n.O4,{permissions:r.settings["review-workflows"].main},e.createElement(z,null))}},38454:(L,c,t)=>{t.d(c,{c:()=>u});var e=t(85893),n=t(88972),l=t(16607),f=t(26910),E=t(96987),m=t(10574);const i=(0,n.ZP)(l.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:s})=>s.colors.primary600};
  }
`,g=(0,n.ZP)(l.x)`
  border-radius: 0 0 ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,u=({children:s,icon:a,...o})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(f.i,{}),(0,e.jsx)(g,{as:"button",background:"primary100",padding:5,...o,children:(0,e.jsxs)(E.k,{children:[(0,e.jsx)(i,{"aria-hidden":!0,background:"primary200",children:a}),(0,e.jsx)(l.x,{paddingLeft:3,children:(0,e.jsx)(m.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:s})})]})})]})},97695:(L,c,t)=>{t.d(c,{Z:()=>l});var e=t(85893);const n=f=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...f,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),l=n}}]);
