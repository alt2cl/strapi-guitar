(self.webpackChunkcms_pyme_strapi=self.webpackChunkcms_pyme_strapi||[]).push([[4583],{76539:(b,M,n)=>{"use strict";n.d(M,{Z:()=>s});var e=n(67294),m=n(97132),a=n(45697),t=n.n(a),p=n(95489),A=n(41363),T=n(28702),k=n(48474);const g=({onRegenerate:u,idToRegenerate:E,backUrl:y})=>{const{formatMessage:_}=(0,m.useIntl)(),[R,x]=(0,e.useState)(!1),{regenerateData:F,isLoadingConfirmation:N}=(0,k.rW)(y,E,u),K=async()=>{F(),x(!1)};return e.createElement(e.Fragment,null,e.createElement(T.Button,{startIcon:e.createElement(A.Refresh,null),type:"button",size:"S",variant:"tertiary",onClick:()=>x(!0),name:"regenerate"},_({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),e.createElement(p.ConfirmDialog,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:e.createElement(A.Refresh,null),isConfirmButtonLoading:N,isOpen:R,onToggleDialog:()=>x(!1),onConfirm:K,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};g.defaultProps={onRegenerate(){}},g.propTypes={onRegenerate:t().func,idToRegenerate:t().oneOfType([t().number,t().string]).isRequired,backUrl:t().string.isRequired};const v=g,C=({title:u,token:E,setToken:y,canEditInputs:_,canRegenerate:R,isSubmitting:x,backUrl:F,regenerateUrl:N})=>{const{formatMessage:K}=(0,m.useIntl)(),G=Q=>{y({...E,accessKey:Q})};return e.createElement(T.HeaderLayout,{title:E?.name||K(u),primaryAction:_?e.createElement(T.Flex,{gap:2},R&&E?.id&&e.createElement(v,{backUrl:N,onRegenerate:G,idToRegenerate:E?.id}),e.createElement(T.Button,{disabled:x,loading:x,startIcon:e.createElement(A.Check,null),type:"submit",size:"S"},K({id:"global.save",defaultMessage:"Save"}))):R&&E?.id&&e.createElement(v,{onRegenerate:G,idToRegenerate:E?.id,backUrl:N}),navigationAction:e.createElement(p.Link,{startIcon:e.createElement(A.ArrowLeft,null),to:F},K({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};C.propTypes={token:t().shape({id:t().oneOfType([t().number,t().string]),type:t().string,lifespan:t().oneOfType([t().number,t().string]),name:t().string,accessKey:t().string,permissions:t().array,description:t().string,createdAt:t().string}),canEditInputs:t().bool.isRequired,canRegenerate:t().bool.isRequired,setToken:t().func.isRequired,isSubmitting:t().bool.isRequired,backUrl:t().string.isRequired,title:t().shape({id:t().string,label:t().string}).isRequired,regenerateUrl:t().string.isRequired},C.defaultProps={token:void 0};const s=C},60401:(b,M,n)=>{"use strict";n.d(M,{Z:()=>g});var e=n(67294),m=n(45697),a=n.n(m),t=n(97132),p=n(28702),A=n.n(p),T=n(75056);const k=({token:v,errors:C,values:s,onChange:u,isCreating:E})=>{const{formatMessage:y}=(0,t.useIntl)();return e.createElement(e.Fragment,null,e.createElement(p.Select,{name:"lifespan",label:y({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:s.lifespan!==null?s.lifespan:"0",error:C.lifespan?y(C.lifespan?.id?C.lifespan:{id:C.lifespan,defaultMessage:C.lifespan}):null,onChange:_=>{u({target:{name:"lifespan",value:_}})},required:!0,disabled:!E,placeholder:"Select"},e.createElement(p.Option,{value:"604800000"},y({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),e.createElement(p.Option,{value:"2592000000"},y({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),e.createElement(p.Option,{value:"7776000000"},y({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),e.createElement(p.Option,{value:"0"},y({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),e.createElement(p.Typography,{variant:"pi",textColor:"neutral600"},!E&&`${y({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,T.IX)(v?.createdAt,parseInt(s.lifespan,10))}`))};k.propTypes={errors:a().shape({lifespan:a().string}),onChange:a().func.isRequired,values:a().shape({lifespan:a().oneOfType([a().number,a().string])}).isRequired,isCreating:a().bool.isRequired,token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().string,name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string})},k.defaultProps={errors:{},token:{}};const g=k},24122:(b,M,n)=>{"use strict";n.d(M,{Z:()=>E});var e=n(67294),m=n(97132),a=n(95489),t=n.n(a),p=n(28702),A=n.n(p),T=n(41363),k=n.n(T),g=n(45697),v=n.n(g),C=n(74855),s=n.n(C);const u=({token:y,tokenType:_})=>{const{formatMessage:R}=(0,m.useIntl)(),x=(0,a.useNotification)(),{trackUsage:F}=(0,a.useTracking)(),N=(0,e.useRef)(F);return e.createElement(a.ContentBox,{endAction:y&&e.createElement("span",{style:{alignSelf:"start"}},e.createElement(C.CopyToClipboard,{onCopy:()=>{N.current("didCopyTokenKey",{tokenType:_}),x({type:"success",message:{id:"Settings.tokens.notification.copied"}})},text:y},e.createElement(p.IconButton,{label:R({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:e.createElement(T.Duplicate,null),style:{padding:0,height:"1rem"}}))),title:y||R({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:R(y?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:e.createElement(T.Key,null),iconBackground:"neutral100"})};u.defaultProps={token:null},u.propTypes={token:v().string,tokenType:v().string.isRequired};const E=u},40695:(b,M,n)=>{"use strict";n.d(M,{Z:()=>k});var e=n(67294),m=n(45697),a=n.n(m),t=n(97132),p=n(28702),A=n.n(p);const T=({errors:g,values:v,onChange:C,canEditInputs:s})=>{const{formatMessage:u}=(0,t.useIntl)();return e.createElement(p.Textarea,{label:u({id:"Settings.tokens.form.description",defaultMessage:"Description"}),name:"description",error:g.description?u(g.description?.id?g.description:{id:g.description,defaultMessage:g.description}):null,onChange:C,disabled:!s},v.description)};T.propTypes={errors:a().shape({description:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({description:a().string}).isRequired},T.defaultProps={errors:{}};const k=T},61053:(b,M,n)=>{"use strict";n.d(M,{Z:()=>k});var e=n(67294),m=n(45697),a=n.n(m),t=n(97132),p=n(28702),A=n.n(p);const T=({errors:g,values:v,onChange:C,canEditInputs:s})=>{const{formatMessage:u}=(0,t.useIntl)();return e.createElement(p.TextInput,{name:"name",error:g.name?u(g.name?.id?g.name:{id:g.name,defaultMessage:g.name}):null,label:u({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:C,value:v.name,disabled:!s,required:!0})};T.propTypes={errors:a().shape({name:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({name:a().string}).isRequired},T.defaultProps={errors:{}};const k=T},47670:(b,M,n)=>{"use strict";n.d(M,{Z:()=>e,f:()=>m});const e="api-token",m="transfer-token"},24583:(b,M,n)=>{"use strict";n.d(M,{Z:()=>De});var e=n(67294),m=n(97132),a=n(95489),t=n(28702),p=n(80831),A=n(49656),T=n(23724),k=n(38683),g=n(75056),v=n(41363),C=n(45697),s=n.n(C);const u=({apiTokenName:o})=>{const{formatMessage:i}=(0,m.useIntl)();return(0,a.useFocusWhenNavigate)(),e.createElement(t.Main,{"aria-busy":"true"},e.createElement(a.SettingsPageTitle,{name:"API Tokens"}),e.createElement(t.HeaderLayout,{primaryAction:e.createElement(t.Button,{disabled:!0,startIcon:e.createElement(v.Check,null),type:"button",size:"L"},i({id:"global.save",defaultMessage:"Save"})),title:o||i({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),e.createElement(t.ContentLayout,null,e.createElement(a.LoadingIndicatorPage,null)))};u.defaultProps={apiTokenName:null},u.propTypes={apiTokenName:s().string};const E=u;var y=n(87751);const _=(0,e.createContext)({}),R=({children:o,...i})=>e.createElement(_.Provider,{value:i},o),x=()=>(0,e.useContext)(_);R.propTypes={children:s().node.isRequired};const N=(o,i=[])=>({...o,selectedAction:null,routes:[],selectedActions:[],data:(0,g.mk)(i)});var K=n(18172),G=n(96486);const Q={data:{},selectedActions:[]},re=(o,i)=>(0,K.default)(o,r=>{switch(i.type){case"ON_CHANGE":{r.selectedActions.includes(i.value)?(0,G.pull)(r.selectedActions,i.value):r.selectedActions.push(i.value);break}case"SELECT_ALL_IN_PERMISSION":{i.value.every(c=>r.selectedActions.includes(c.actionId))?i.value.forEach(c=>{(0,G.pull)(r.selectedActions,c.actionId)}):i.value.forEach(c=>{r.selectedActions.push(c.actionId)});break}case"SELECT_ALL_ACTIONS":{r.selectedActions=[...r.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const h=r.data.allActionsIds.filter(c=>c.includes("find")||c.includes("findOne"));r.selectedActions=[...h];break}case"UPDATE_PERMISSIONS_LAYOUT":{r.data=(0,g.mk)(i.value);break}case"UPDATE_ROUTES":{r.routes={...i.value};break}case"UPDATE_PERMISSIONS":{r.selectedActions=[...i.value];break}case"SET_SELECTED_ACTION":{r.selectedAction=i.value;break}default:return r}});var Y=n(71893);const ie=Y.css`
  background: ${o=>o.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,le=(0,Y.default)(t.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${o=>o.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${o=>o.isActive&&ie}
  &:hover {
    ${ie}
  }
`,ce=Y.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:o})=>o.colors.neutral150};
`,J=({controllers:o,label:i,orderNumber:r,disabled:h,onExpanded:c,indexExpandendCollapsedContent:l})=>{const{value:{onChangeSelectAll:P,onChange:B,selectedActions:O,setSelectedAction:U,selectedAction:$}}=x(),[L,X]=(0,e.useState)(!1),{formatMessage:H}=(0,m.useIntl)(),S=()=>{X(D=>!D),c(r)};(0,e.useEffect)(()=>{l!==null&&l!==r&&L&&X(!1)},[l,r,L]);const Z=D=>D===$;return e.createElement(t.Accordion,{expanded:L,onToggle:S,variant:r%2?"primary":"secondary"},e.createElement(t.AccordionToggle,{title:(0,G.capitalize)(i)}),e.createElement(t.AccordionContent,null,o?.map(D=>{const j=D.actions.every(f=>O.includes(f.actionId)),ne=D.actions.some(f=>O.includes(f.actionId));return e.createElement(t.Box,{key:`${i}.${D?.controller}`},e.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center",padding:4},e.createElement(t.Box,{paddingRight:4},e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},D?.controller)),e.createElement(ce,null),e.createElement(t.Box,{paddingLeft:4},e.createElement(t.Checkbox,{value:j,indeterminate:!j&&ne,onValueChange:()=>{P({target:{value:[...D.actions]}})},disabled:h},H({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(t.Grid,{gap:4,padding:4},D?.actions&&D?.actions.map(f=>e.createElement(t.GridItem,{col:6,key:f.actionId},e.createElement(le,{isActive:Z(f.actionId),padding:2,hasRadius:!0},e.createElement(t.Checkbox,{value:O.includes(f.actionId),name:f.actionId,onValueChange:()=>{B({target:{value:f.actionId}})},disabled:h},f.action),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>U({target:{value:f.actionId}}),style:{display:"inline-flex",alignItems:"center"}},e.createElement(v.Cog,null)))))))})))};J.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},J.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};const de=J,w=({section:o,...i})=>{const[r,h]=(0,e.useState)(null),c=l=>h(l);return e.createElement(t.Box,{padding:4,background:"neutral0"},o&&o.map((l,P)=>e.createElement(de,{key:l.apiId,label:l.label,controllers:l.controllers,orderNumber:P,indexExpandendCollapsedContent:r,onExpanded:c,name:l.apiId,...i})))};w.defaultProps={section:null},w.propTypes={section:s().arrayOf(s().object)};const pe=w;var ue=n(35161),ge=n.n(ue),me=n(13217),Ee=n.n(me);const ye=o=>{switch(o){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},fe=(0,Y.default)(t.Box)`
  margin: -1px;
  border-radius: ${({theme:o})=>o.spaces[1]} 0 0 ${({theme:o})=>o.spaces[1]};
`;function q({route:o}){const{formatMessage:i}=(0,m.useIntl)(),{method:r,handler:h,path:c}=o,l=c?Ee()(c.split("/")):[],[P="",B=""]=h?h.split("."):[],O=ye(o.method);return e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:2},e.createElement(t.Typography,{variant:"delta",as:"h3"},i({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,P),e.createElement(t.Typography,{variant:"delta",textColor:"primary600"},".",B)),e.createElement(t.Flex,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(fe,{background:O.background,borderColor:O.border,padding:2},e.createElement(t.Typography,{fontWeight:"bold",textColor:O.text},r)),e.createElement(t.Box,{paddingLeft:2,paddingRight:2},ge()(l,U=>e.createElement(t.Typography,{key:U,textColor:U.includes(":")?"neutral600":"neutral900"},"/",U)))))}q.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},q.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};const Te=q,he=()=>{const{value:{selectedAction:o,routes:i}}=x(),{formatMessage:r}=(0,m.useIntl)(),h=o?.split(".")[0];return e.createElement(t.GridItem,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},o?e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:2},i[h]?.map(c=>c.config.auth?.scope?.includes(o)||c.handler===o?e.createElement(Te,{key:c.handler,route:c}):null)):e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:2},e.createElement(t.Typography,{variant:"delta",as:"h3"},r({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),e.createElement(t.Typography,{as:"p",textColor:"neutral600"},r({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Ce=({...o})=>{const{value:{data:i}}=x(),{formatMessage:r}=(0,m.useIntl)();return e.createElement(t.Grid,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(t.GridItem,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:2},e.createElement(t.Typography,{variant:"delta",as:"h2"},r({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),e.createElement(t.Typography,{as:"p",textColor:"neutral600"},r({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),i?.permissions&&e.createElement(pe,{section:i?.permissions,...o})),e.createElement(he,null))},Ae=(0,e.memo)(Ce);var Me=n(60401),Pe=n(61053),ve=n(40695);const ee=({errors:o,values:i,onChange:r,canEditInputs:h,options:c,label:l})=>{const{formatMessage:P}=(0,m.useIntl)();return e.createElement(t.Select,{name:"type",label:P({id:l.id,defaultMessage:l.defaultMessage}),value:i?.type,error:o.type?P(o.type?.id?o.type:{id:o.type,defaultMessage:o.type}):null,onChange:r,placeholder:"Select",required:!0,disabled:!h},c&&c.map(({value:B,label:O})=>e.createElement(t.Option,{key:B,value:B},P(O))))};ee.propTypes={options:s().arrayOf(s().shape({label:s().shape({id:s().string,defaultMessage:s().string}),value:s().string})),errors:s().shape({type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({type:s().string}).isRequired,label:s().shape({id:s().string,defaultMessage:s().string}).isRequired},ee.defaultProps={errors:{},options:[]};const Re=ee,te=({errors:o,onChange:i,canEditInputs:r,isCreating:h,values:c,apiToken:l,onDispatch:P,setHasChangedPermissions:B})=>{const{formatMessage:O}=(0,m.useIntl)(),U=({target:{value:L}})=>{B(!1),L==="full-access"&&P({type:"SELECT_ALL_ACTIONS"}),L==="read-only"&&P({type:"ON_CHANGE_READ_ONLY"})},$=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:4},e.createElement(t.Typography,{variant:"delta",as:"h2"},O({id:"global.details",defaultMessage:"Details"})),e.createElement(t.Grid,{gap:5},e.createElement(t.GridItem,{key:"name",col:6,xs:12},e.createElement(Pe.Z,{errors:o,values:c,canEditInputs:r,onChange:i})),e.createElement(t.GridItem,{key:"description",col:6,xs:12},e.createElement(ve.Z,{errors:o,values:c,canEditInputs:r,onChange:i})),e.createElement(t.GridItem,{key:"lifespan",col:6,xs:12},e.createElement(Me.Z,{isCreating:h,errors:o,values:c,onChange:i,token:l})),e.createElement(t.GridItem,{key:"type",col:6,xs:12},e.createElement(Re,{values:c,errors:o,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:L=>{U({target:{value:L}}),i({target:{name:"type",value:L}})},options:$,canEditInputs:r})))))};te.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().oneOfType([s().number,s().string]),type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},te.defaultProps={errors:{},apiToken:{}};const Oe=te;var Ie=n(24122),ke=n(76539),z=n(47670);const Se="Name already taken",De=()=>{(0,a.useFocusWhenNavigate)();const{formatMessage:o}=(0,m.useIntl)(),{lockApp:i,unlockApp:r}=(0,a.useOverlayBlocker)(),h=(0,a.useNotification)(),c=(0,A.useHistory)(),[l,P]=(0,e.useState)(c.location.state?.apiToken.accessKey?{...c.location.state.apiToken}:null),{trackUsage:B}=(0,a.useTracking)(),O=(0,e.useRef)(B),{setCurrentStep:U}=(0,a.useGuidedTour)(),{allowedActions:{canCreate:$,canUpdate:L,canRegenerate:X}}=(0,a.useRBAC)(y.Z.settings["api-tokens"]),[H,S]=(0,e.useReducer)(re,Q,d=>N(d,{})),{params:{id:Z}}=(0,A.useRouteMatch)("/settings/api-tokens/:id"),{get:D,post:j,put:ne}=(0,a.useFetchClient)(),f=Z==="create";(0,T.useQuery)("content-api-permissions",async()=>{const[d,W]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async V=>{const{data:I}=await D(V);return I.data}));S({type:"UPDATE_PERMISSIONS_LAYOUT",value:d}),S({type:"UPDATE_ROUTES",value:W}),l&&(l?.type==="read-only"&&S({type:"ON_CHANGE_READ_ONLY"}),l?.type==="full-access"&&S({type:"SELECT_ALL_ACTIONS"}),l?.type==="custom"&&S({type:"UPDATE_PERMISSIONS",value:l?.permissions}))},{onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,e.useEffect)(()=>{O.current(f?"didAddTokenFromList":"didEditTokenFromList",{tokenType:z.Z})},[f]);const{status:_e}=(0,T.useQuery)(["api-token",Z],async()=>{const{data:{data:d}}=await D(`/admin/api-tokens/${Z}`);return P({...d}),d?.type==="read-only"&&S({type:"ON_CHANGE_READ_ONLY"}),d?.type==="full-access"&&S({type:"SELECT_ALL_ACTIONS"}),d?.type==="custom"&&S({type:"UPDATE_PERMISSIONS",value:d?.permissions}),d},{enabled:!f&&!l,onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),xe=async(d,W)=>{O.current(f?"willCreateToken":"willEditToken",{tokenType:z.Z}),i();const V=d.lifespan&&parseInt(d.lifespan,10)&&d.lifespan!=="0"?parseInt(d.lifespan,10):null;try{const{data:{data:I}}=f?await j("/admin/api-tokens",{...d,lifespan:V,permissions:d.type==="custom"?H.selectedActions:null}):await ne(`/admin/api-tokens/${Z}`,{name:d.name,description:d.description,type:d.type,permissions:d.type==="custom"?H.selectedActions:null});f&&(c.replace(`/settings/api-tokens/${I.id}`,{apiToken:I}),U("apiTokens.success")),r(),P({...I}),h({type:"success",message:o(f?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),O.current(f?"didCreateToken":"didEditToken",{type:l.type,tokenType:z.Z})}catch(I){const oe=(0,k.Iz)(I.response.data);W.setErrors(oe),I?.response?.data?.error?.message===Se?h({type:"warning",message:I.response.data.message||"notification.error.tokennamenotunique"}):h({type:"warning",message:I?.response?.data?.message||"notification.error"}),r()}},[Le,se]=(0,e.useState)(!1),Be={...H,onChange:({target:{value:d}})=>{se(!0),S({type:"ON_CHANGE",value:d})},onChangeSelectAll:({target:{value:d}})=>{se(!0),S({type:"SELECT_ALL_IN_PERMISSION",value:d})},setSelectedAction:({target:{value:d}})=>{S({type:"SET_SELECTED_ACTION",value:d})}},ae=L&&!f||$&&f;return!f&&!l&&_e!=="success"?e.createElement(E,{apiTokenName:l?.name}):e.createElement(R,{value:Be},e.createElement(t.Main,null,e.createElement(a.SettingsPageTitle,{name:"API Tokens"}),e.createElement(p.Formik,{validationSchema:g.fK,validateOnChange:!1,initialValues:{name:l?.name||"",description:l?.description||"",type:l?.type,lifespan:l?.lifespan?l.lifespan.toString():l?.lifespan},enableReinitialize:!0,onSubmit:(d,W)=>xe(d,W)},({errors:d,handleChange:W,isSubmitting:V,values:I,setFieldValue:oe})=>(Le&&I?.type!=="custom"&&oe("type","custom"),e.createElement(a.Form,null,e.createElement(ke.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:l,setToken:P,canEditInputs:ae,canRegenerate:X,isSubmitting:V,regenerateUrl:"/admin/api-tokens/"}),e.createElement(t.ContentLayout,null,e.createElement(t.Flex,{direction:"column",alignItems:"stretch",gap:6},Boolean(l?.name)&&e.createElement(Ie.Z,{token:l?.accessKey,tokenType:z.Z}),e.createElement(Oe,{errors:d,onChange:W,canEditInputs:ae,isCreating:f,values:I,apiToken:l,onDispatch:S,setHasChangedPermissions:se}),e.createElement(Ae,{disabled:!ae||I?.type==="read-only"||I?.type==="full-access"}))))))))}},75056:(b,M,n)=>{"use strict";n.d(M,{IX:()=>t,fK:()=>k,mk:()=>C});var e=n(47292),m=n(73825);const t=(s,u,E="en")=>{if(u&&typeof u=="number"){const y=u/24/60/60/1e3;return(0,e.format)((0,e.addDays)(new Date(s),y),"PPP",{locale:m[E]})}return"Unlimited"};var p=n(53209),A=n(95489);const k=p.Ry().shape({name:p.Z_(A.translatedErrors.string).max(100).required(A.translatedErrors.required),type:p.Z_(A.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(A.translatedErrors.required),description:p.Z_().nullable(),lifespan:p.Rx().integer().min(0).nullable().defined(A.translatedErrors.required)});var g=n(96486);const C=s=>{const u={allActionsIds:[],permissions:[]};return u.permissions=Object.keys(s).map(E=>({apiId:E,label:E.split("::")[1],controllers:(0,g.flatten)(Object.keys(s[E].controllers).map(y=>({controller:y,actions:(0,g.flatten)(s[E].controllers[y].map(_=>{const R=`${E}.${y}.${_}`;return E.includes("api::")&&u.allActionsIds.push(R),{action:_,actionId:R}}))})))})),u}},13217:(b,M,n)=>{var e=n(14259);function m(a){var t=a==null?0:a.length;return t?e(a,1,t):[]}b.exports=m}}]);
