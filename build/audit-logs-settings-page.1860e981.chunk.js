"use strict";(self.webpackChunkcms_pyme_strapi=self.webpackChunkcms_pyme_strapi||[]).push([[2812],{94699:(Q,D,n)=>{n.d(D,{Z:()=>S});var e=n(67294),d=n(45697),p=n.n(d),E=n(97132),t=n(28702),x=n.n(t),s=n(41363),N=n.n(s),M=n(95489),V=n.n(M);const v=({displayedFilters:T})=>{const[h,b]=(0,e.useState)(!1),{formatMessage:O}=(0,E.useIntl)(),I=(0,e.useRef)(),R=()=>{b(C=>!C)};return e.createElement(e.Fragment,null,e.createElement(t.Box,{paddingTop:1,paddingBottom:1},e.createElement(t.Button,{variant:"tertiary",ref:I,startIcon:e.createElement(s.Filter,null),onClick:R,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),h&&e.createElement(M.FilterPopoverURLQuery,{displayedFilters:T,isVisible:h,onToggle:R,source:I})),e.createElement(M.FilterListURLQuery,{filtersSchema:T}))};v.propTypes={displayedFilters:p().arrayOf(p().shape({name:p().string.isRequired,metadatas:p().shape({label:p().string}),fieldSchema:p().shape({type:p().string})})).isRequired};const S=v},35915:(Q,D,n)=>{n.r(D),n.d(D,{default:()=>X});var e=n(67294),d=n(95489),p=n(87751),E=n(97132),t=n(28702),x=n(45697),s=n.n(x),N=n(41363),M=n(51196),V=n.n(M);const S=()=>{const{formatDate:a}=(0,E.useIntl)();return u=>{const o=V()(u),i=a(o,{dateStyle:"long"}),m=a(o,{timeStyle:"medium",hourCycle:"h24"});return`${i}, ${m}`}},T={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},h=a=>T[a]||a,b=({headers:a,rows:l,onOpenModal:u})=>{const{formatMessage:o}=(0,E.useIntl)(),i=S(),m=({type:r,value:c,model:g})=>r==="date"?i(c):r==="action"?o({id:`Settings.permissions.auditLogs.${c}`,defaultMessage:h(c)},{model:g}):c||"-";return e.createElement(t.Tbody,null,l.map(r=>e.createElement(t.Tr,{key:r.id,...(0,d.onRowClick)({fn:()=>u(r.id)})},a.map(({key:c,name:g,cellFormatter:f})=>e.createElement(t.Td,{key:c},e.createElement(t.Typography,{textColor:"neutral800"},m({type:c,value:f?f(r[g]):r[g],model:r.payload?.model})))),e.createElement(t.Td,{...d.stopPropagation},e.createElement(t.Flex,{justifyContent:"end"},e.createElement(t.IconButton,{onClick:()=>u(r.id),"aria-label":o({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${r.action} action`}),noBorder:!0,icon:e.createElement(N.Eye,null)}))))))};b.defaultProps={rows:[]},b.propTypes={headers:s().array.isRequired,rows:s().array,onOpenModal:s().func.isRequired};const O=b,R=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.fullname:""}],C=({pagination:a})=>e.createElement(t.Box,{paddingTop:4},e.createElement(t.Flex,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(d.PageSizeURLQuery,null),e.createElement(d.PaginationURLQuery,{pagination:a})));C.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},C.propTypes={pagination:s().shape({page:s().number,pageCount:s().number,pageSize:s().number,total:s().number})};const j=C;var F=n(23724);const W=({actionLabel:a,actionName:l})=>e.createElement(t.Flex,{direction:"column",alignItems:"baseline",gap:1},e.createElement(t.Typography,{textColor:"neutral600",variant:"sigma"},a),e.createElement(t.Typography,{textColor:"neutral600"},l));W.propTypes={actionLabel:s().string.isRequired,actionName:s().string.isRequired};const A=W,U=({status:a,data:l,formattedDate:u})=>{const{formatMessage:o}=(0,E.useIntl)();if(a==="loading")return e.createElement(t.Flex,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(t.Loader,null,"Loading content..."));const{action:i,user:m,payload:r}=l;return e.createElement(e.Fragment,null,e.createElement(t.Box,{marginBottom:3},e.createElement(t.Typography,{variant:"delta",id:"title"},o({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(t.Grid,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(A,{actionLabel:o({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:o({id:`Settings.permissions.auditLogs.${i}`,defaultMessage:h(i)},{model:r?.model})}),e.createElement(A,{actionLabel:o({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:u}),e.createElement(A,{actionLabel:o({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:m?.fullname||"-"}),e.createElement(A,{actionLabel:o({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:m?.id.toString()||"-"})),e.createElement(t.JSONInput,{value:JSON.stringify(r,null,2),disabled:!0,label:o({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};U.defaultProps={data:{}},U.propTypes={status:s().oneOf(["idle","loading","error","success"]).isRequired,data:s().shape({action:s().string,date:s().string,payload:s().object,user:s().object}),formattedDate:s().string.isRequired};const w=U,$=({handleClose:a,logId:l})=>{const{get:u}=(0,d.useFetchClient)(),o=(0,d.useNotification)(),i=async f=>{const{data:y}=await u(`/admin/audit-logs/${f}`);if(!y)throw new Error("Audit log not found");return y},{data:m,status:r}=(0,F.useQuery)(["audit-log",l],()=>i(l),{onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),c=S(),g=m?c(m.date):"";return e.createElement(t.ModalLayout,{onClose:a,labelledBy:"title"},e.createElement(t.ModalHeader,null,e.createElement(t.Breadcrumbs,{label:g,id:"title"},e.createElement(t.Crumb,null,g))),e.createElement(t.ModalBody,null,e.createElement(w,{status:r,data:m,formattedDate:g})))};$.propTypes={handleClose:s().func.isRequired,logId:s().string.isRequired};const H=$;var z=n(94699);const B=({value:a,options:l,onChange:u})=>{const{formatMessage:o}=(0,E.useIntl)(),i=o({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(t.Combobox,{"aria-label":i,value:a,onChange:u},l.map(({label:m,customValue:r})=>e.createElement(t.ComboboxOption,{key:r,value:r},m)))};B.defaultProps={value:null},B.propTypes={value:s().string,options:s().arrayOf(s().shape({label:s().string.isRequired,customValue:s().string.isRequired}).isRequired).isRequired,onChange:s().func.isRequired};const K=B,_=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],Z=({formatMessage:a,users:l})=>{const u=Object.keys(T).map(i=>({label:a({id:`Settings.permissions.auditLogs.${i}`,defaultMessage:h(i)},{model:void 0}),customValue:i})),o=l&&l.results.map(i=>({label:a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:i.firstname,lastname:i.lastname}),customValue:i.id.toString()}));return[{name:"action",metadatas:{customOperators:_,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:u,customInput:K},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}},{name:"user",metadatas:{customOperators:_,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:o,customInput:K},fieldSchema:{type:"relation",mainField:{name:"id"}}}]};var J=n(49656);const Y=({canRead:a})=>{const{get:l}=(0,d.useFetchClient)(),{search:u}=(0,J.useLocation)(),o=(0,d.useNotification)(),i=async({queryKey:P})=>{const q=P[1],{data:ee}=await l(`/admin/audit-logs${q}`);return ee},m=async()=>{const{data:P}=await l("/admin/users");return P},r={enabled:a,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:P=>o({type:"warning",message:P.message})},{data:c,isLoading:g,isError:f}=(0,F.useQuery)(["auditLogs",u],i,r),{data:y,isError:L}=(0,F.useQuery)(["auditLogsUsers"],m,{...r,staleTime:2*(1e3*60)}),k=f||L;return{auditLogs:c,users:y?.data,isLoading:g,hasError:k}},G=()=>{const{formatMessage:a}=(0,E.useIntl)(),{allowedActions:{canRead:l}}=(0,d.useRBAC)(p.Z.settings.auditLogs),[{query:u},o]=(0,d.useQueryParams)(),{auditLogs:i,users:m,isLoading:r,hasError:c}=Y({canRead:l});(0,d.useFocusWhenNavigate)();const g=Z({formatMessage:a,users:m}),f=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),y=R.map(L=>({...L,metadatas:{...L.metadatas,label:a(L.metadatas.label)}}));return c?e.createElement(t.Layout,null,e.createElement(t.ContentLayout,null,e.createElement(t.Box,{paddingTop:8},e.createElement(d.AnErrorOccurred,null)))):e.createElement(t.Main,{"aria-busy":r},e.createElement(d.SettingsPageTitle,{name:f}),e.createElement(t.HeaderLayout,{title:f,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(t.ActionLayout,{startActions:e.createElement(z.Z,{displayedFilters:g})}),e.createElement(t.ContentLayout,{canRead:l},e.createElement(d.DynamicTable,{contentType:"Audit logs",headers:y,rows:i?.results||[],withBulkActions:!0,isLoading:r},e.createElement(O,{headers:y,rows:i?.results||[],onOpenModal:L=>o({id:L})})),e.createElement(j,{pagination:i?.pagination})),u?.id&&e.createElement(H,{handleClose:()=>o({id:null},"remove"),logId:u.id}))},X=()=>e.createElement(d.CheckPagePermissions,{permissions:p.Z.settings.auditLogs.main},e.createElement(G,null))}}]);