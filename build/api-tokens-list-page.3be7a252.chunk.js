"use strict";(self.webpackChunkcms_pyme_strapi=self.webpackChunkcms_pyme_strapi||[]).push([[8056],{56856:(x,C,n)=>{n.d(C,{Z:()=>b});var e=n(67294),s=n(49656),v=n(45697),t=n.n(v),a=n(28702),d=n(95489),A=n(41363),D=n(97132);const k=({tokenName:o,onClickDelete:c,tokenType:E})=>{const{formatMessage:l}=(0,D.useIntl)(),{trackUsage:p}=(0,d.useTracking)(),[u,T]=(0,e.useState)(!1),h=()=>{T(!1),p("willDeleteToken",{tokenType:E}),c()};return e.createElement(a.Box,{paddingLeft:1,onClick:y=>y.stopPropagation()},e.createElement(a.IconButton,{onClick:()=>{T(!0)},label:l({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${o}`}),name:"delete",noBorder:!0,icon:e.createElement(A.Trash,null)}),e.createElement(d.ConfirmDialog,{onToggleDialog:()=>T(!1),onConfirm:h,isOpen:u}))};k.propTypes={tokenName:t().string.isRequired,onClickDelete:t().func.isRequired,tokenType:t().string.isRequired};const L=k;var H=n(71893);const B={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},w=(0,H.default)(d.Link)`
  svg {
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`,g=({tokenName:o,tokenId:c,buttonType:E,children:l})=>{const{formatMessage:p}=(0,D.useIntl)(),{location:{pathname:u}}=(0,s.useHistory)();return e.createElement(w,{to:`${u}/${c}`,title:p(B[E],{target:o})},l)};g.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired,buttonType:t().string,children:t().node.isRequired},g.defaultProps={buttonType:"edit"};const U=g,S=({tokenName:o,tokenId:c})=>e.createElement(U,{tokenName:o,tokenId:c},e.createElement(A.Pencil,null));S.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired};const Q=S,P=({tokenName:o,tokenId:c})=>e.createElement(U,{tokenName:o,tokenId:c,buttonType:"read"},e.createElement(A.Eye,null));P.propTypes={tokenName:t().string.isRequired,tokenId:t().oneOfType([t().string,t().number]).isRequired};const V=P,m=({permissions:o,headers:c,contentType:E,isLoading:l,tokens:p,onConfirmDelete:u,tokenType:T})=>{const{canDelete:h,canUpdate:y,canRead:M}=o,N=h||y||M,[{query:f}]=(0,d.useQueryParams)(),[,R]=f?f.sort.split(":"):"ASC",{push:F,location:{pathname:I}}=(0,s.useHistory)(),{trackUsage:Z}=(0,d.useTracking)(),O=p.sort((i,$)=>{const r=i.name.localeCompare($.name);return R==="DESC"?-r:r});return e.createElement(d.DynamicTable,{headers:c,contentType:E,rows:p,withBulkActions:N,isLoading:l,onConfirmDelete:u},e.createElement(a.Tbody,null,O.map(i=>e.createElement(a.Tr,{key:i.id,...(0,d.onRowClick)({fn(){Z("willEditTokenFromList",{tokenType:T}),F(`${I}/${i.id}`)},condition:y})},e.createElement(a.Td,null,e.createElement(a.Typography,{textColor:"neutral800",fontWeight:"bold"},i.name)),e.createElement(a.Td,{maxWidth:(0,d.pxToRem)(250)},e.createElement(a.Typography,{textColor:"neutral800",ellipsis:!0},i.description)),e.createElement(a.Td,null,e.createElement(a.Typography,{textColor:"neutral800"},e.createElement(d.RelativeTime,{timestamp:new Date(i.createdAt)}))),e.createElement(a.Td,null,i.lastUsedAt&&e.createElement(a.Typography,{textColor:"neutral800"},e.createElement(d.RelativeTime,{timestamp:new Date(i.lastUsedAt)}))),N&&e.createElement(a.Td,null,e.createElement(a.Flex,{justifyContent:"end"},y&&e.createElement(Q,{tokenName:i.name,tokenId:i.id}),!y&&M&&e.createElement(V,{tokenName:i.name,tokenId:i.id}),h&&e.createElement(L,{tokenName:i.name,onClickDelete:()=>u(i.id),tokenType:T})))))))};m.propTypes={tokens:t().array,permissions:t().shape({canRead:t().bool,canDelete:t().bool,canUpdate:t().bool}).isRequired,headers:t().arrayOf(t().shape({cellFormatter:t().func,key:t().string.isRequired,metadatas:t().shape({label:t().string.isRequired,sortable:t().bool}).isRequired,name:t().string.isRequired})),contentType:t().string.isRequired,isLoading:t().bool,onConfirmDelete:t().func,tokenType:t().string.isRequired},m.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const b=m},47670:(x,C,n)=>{n.d(C,{Z:()=>e,f:()=>s});const e="api-token",s="transfer-token"},87427:(x,C,n)=>{n.r(C),n.d(C,{default:()=>P});var e=n(67294),s=n(95489),v=n(87751),t=n(97132),a=n(23724),d=n(49656),A=n(80129),D=n.n(A),k=n(28702),L=n(41363);const B=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var w=n(56856),g=n(47670);const S=()=>{(0,s.useFocusWhenNavigate)();const V=(0,a.useQueryClient)(),{formatMessage:m}=(0,t.useIntl)(),b=(0,s.useNotification)(),{allowedActions:{canCreate:o,canDelete:c,canUpdate:E,canRead:l}}=(0,s.useRBAC)(v.Z.settings["api-tokens"]),{push:p}=(0,d.useHistory)(),{trackUsage:u}=(0,s.useTracking)(),{startSection:T}=(0,s.useGuidedTour)(),h=(0,e.useRef)(T),{get:y,del:M}=(0,s.useFetchClient)();(0,e.useEffect)(()=>{h.current&&h.current("apiTokens")},[]),(0,e.useEffect)(()=>{p({search:D().stringify({sort:"name:ASC"},{encode:!1})})},[p]);const N=B.map(r=>({...r,metadatas:{...r.metadatas,label:m(r.metadatas.label)}})),{data:f,status:R,isFetching:F}=(0,a.useQuery)(["api-tokens"],async()=>{u("willAccessTokenList",{tokenType:g.Z});const{data:{data:r}}=await y("/admin/api-tokens");return u("didAccessTokenList",{number:r.length,tokenType:g.Z}),r},{enabled:l,onError(){b({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),I=l&&(R!=="success"&&R!=="error"||R==="success"&&F),Z=(0,a.useMutation)(async r=>{await M(`/admin/api-tokens/${r}`)},{async onSuccess(){await V.invalidateQueries(["api-tokens"]),u("didDeleteToken")},onError(r){r?.response?.data?.data?b({type:"warning",message:r.response.data.data}):b({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),O=l&&f,i=l&&!f&&!o,$=l&&!f&&o;return e.createElement(k.Main,{"aria-busy":I},e.createElement(s.SettingsPageTitle,{name:"API Tokens"}),e.createElement(k.HeaderLayout,{title:m({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:m({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:o?e.createElement(s.LinkButton,{"data-testid":"create-api-token-button",startIcon:e.createElement(L.Plus,null),size:"S",onClick:()=>u("willAddTokenFromList",{tokenType:g.Z}),to:"/settings/api-tokens/create"},m({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),e.createElement(k.ContentLayout,null,!l&&e.createElement(s.NoPermissions,null),O&&e.createElement(w.Z,{permissions:{canRead:l,canDelete:c,canUpdate:E},headers:N,contentType:"api-tokens",rows:f,isLoading:I,onConfirmDelete:r=>Z.mutateAsync(r),tokens:f,tokenType:g.Z}),$&&e.createElement(s.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(k.Button,{variant:"secondary",startIcon:e.createElement(L.Plus,null)},m({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),i&&e.createElement(s.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},P=()=>e.createElement(s.CheckPagePermissions,{permissions:v.Z.settings["api-tokens"].main},e.createElement(S,null))}}]);
