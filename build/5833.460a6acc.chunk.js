"use strict";(self.webpackChunkpac_strapi=self.webpackChunkpac_strapi||[]).push([[5833],{75021:(u,n,t)=>{t.d(n,{q:()=>o});var s=t(67294),E=t(21141),r=t(88767);function o({enabled:l}={enabled:!0}){const{get:d}=(0,E.kY)(),{data:i,isError:M,isLoading:D}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:a}}=await d("/admin/license-limit-information");return a},{enabled:l}),e=s.useMemo(()=>i??{},[i]),O=s.useCallback(a=>(e?.features??[]).find(_=>_.name===a)?.options??{},[e?.features]);return{license:e,getFeature:O,isError:M,isLoading:D}}},85833:(u,n,t)=>{t.r(n),t.d(n,{CreateActionEE:()=>_});var s=t(67294),E=t(96987),r=t(81315),o=t(85200),l=t(12473),d=t(94417),i=t(24116),M=t(14293),D=t.n(M),e=t(45697),O=t.n(e),a=t(86896),P=t(75021);const _=({onClick:C})=>{const{formatMessage:c}=(0,a.Z)(),{license:{permittedSeats:L,shouldStopCreate:m},isError:A,isLoading:f}=(0,P.q)();return A||f?null:s.createElement(E.k,{gap:2},!D()(L)&&m&&s.createElement(r.u,{description:c({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},s.createElement(o.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:d.Z})),s.createElement(l.z,{"data-testid":"create-user-button",onClick:C,startIcon:s.createElement(i.Z,null),size:"S",disabled:m},c({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};_.propTypes={onClick:O().func.isRequired}}}]);
