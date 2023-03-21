"use strict";(self.webpackChunkcms_pyme_strapi=self.webpackChunkcms_pyme_strapi||[]).push([[801],{93858:($,M,n)=>{n.r(M),n.d(M,{default:()=>It});var e=n(67294),i=n(95489),S=n(23724),f=n(27361),H=n.n(f);const y={i8:"4.8.2"};var F=n(48474),d=n(49656),x=n(37424),R=n(99168),b=n(61080),U=n(38914),W=n.n(U),V=n(64729),C=n(71893),Me=n(45697),r=n.n(Me),k=n(97132),o=n(28702),v=n(41363);const Re=(0,C.default)(o.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,ne=({onClose:t,onSkip:a,children:s,hideSkip:l})=>{const{formatMessage:g}=(0,k.useIntl)();return e.createElement(o.Portal,null,e.createElement(Re,{onClick:t,padding:8,justifyContent:"center"},e.createElement(o.FocusTrap,{onEscape:t},e.createElement(o.Flex,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:p=>p.stopPropagation()},e.createElement(o.Flex,{justifyContent:"flex-end"},e.createElement(o.IconButton,{onClick:t,"aria-label":g({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(v.Cross,null)})),e.createElement(o.Box,{paddingLeft:7,paddingRight:7,paddingBottom:l?8:0},s),!l&&e.createElement(o.Flex,{justifyContent:"flex-end"},e.createElement(o.Button,{variant:"tertiary",onClick:a},g({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};ne.propTypes={children:r().node.isRequired,onClose:r().func.isRequired,onSkip:r().func.isRequired,hideSkip:r().bool.isRequired};const xe=ne;var ae=n(18172);const oe={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},Ie=(t=oe,a)=>(0,ae.default)(t,s=>{switch(a.type){case"UPDATE_MODAL":{s.stepContent=a.content,s.sectionIndex=a.newSectionIndex,s.stepIndex=a.newStepIndex,s.hasSectionAfter=a.newHasSectionAfter,s.hasStepAfter=a.newHasStepAfter;break}default:return s}}),Pe=C.default.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,se=({id:t,defaultMessage:a})=>{const{formatMessage:s}=(0,k.useIntl)();return e.createElement(o.Flex,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},s({id:t,defaultMessage:a},{documentationLink:Se,b:Ae,p:Le,light:be,ul:Oe,li:De}))},Se=t=>e.createElement(o.Typography,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),Ae=t=>e.createElement(o.Typography,{fontWeight:"semiBold"},t),Le=t=>e.createElement(o.Typography,null,t),be=t=>e.createElement(o.Typography,{textColor:"neutral600"},t),Oe=t=>e.createElement(o.Box,{paddingLeft:6},e.createElement("ul",null,t)),De=t=>e.createElement(Pe,null,t);se.propTypes={id:r().string.isRequired,defaultMessage:r().string.isRequired};const Be=se;var w=n(89285),Fe=n(96392);const Z=({number:t,last:a,type:s})=>e.createElement(o.Box,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Fe.Z,{number:t,type:s}));Z.defaultProps={number:void 0,last:!1,type:""},Z.propTypes={number:r().number,last:r().bool,type:r().string};const ie=Z;var G=n(99872);const Q=({title:t,content:a,cta:s,onCtaClick:l,sectionIndex:g,stepIndex:p,hasSectionAfter:E})=>{const{formatMessage:m}=(0,k.useIntl)(),h=g>0,u=p>0,T=g+1;return e.createElement(e.Fragment,null,e.createElement(o.Flex,{alignItems:"stretch"},e.createElement(o.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},h&&e.createElement(w.Z,{type:G.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(o.Typography,{variant:"sigma",textColor:"primary600"},m({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(o.Flex,null,e.createElement(o.Flex,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(ie,{number:g+1,type:u?G.hx:G.lW})),e.createElement(o.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},m(t))),e.createElement(o.Flex,{alignItems:"stretch"},e.createElement(o.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},E&&e.createElement(e.Fragment,null,e.createElement(w.Z,{type:G.hx}),u&&e.createElement(ie,{number:T+1,type:G.lW,last:!0}))),e.createElement(o.Box,null,e.createElement(Be,{...a}),s&&(s.target?e.createElement(i.LinkButton,{endIcon:e.createElement(v.ArrowRight,null),onClick:l,to:s.target},m(s.title)):e.createElement(o.Button,{endIcon:e.createElement(v.ArrowRight,null),onClick:l},m(s.title))))),u&&E&&e.createElement(o.Box,{paddingTop:3},e.createElement(o.Flex,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(w.Z,{type:G.hx,minHeight:(0,i.pxToRem)(24)}))))};Q.defaultProps={currentStep:null,cta:void 0},Q.propTypes={sectionIndex:r().number.isRequired,stepIndex:r().number.isRequired,hasSectionAfter:r().bool.isRequired,content:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired,cta:r().shape({target:r().string,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired})}),currentStep:r().string,onCtaClick:r().func.isRequired,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired};const ke=Q,Ge=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:s,setStepState:l,isGuidedTourVisible:g,setSkipped:p}=(0,i.useGuidedTour)(),[E,m]=(0,e.useState)(t),[{stepContent:h,sectionIndex:u,stepIndex:T,hasSectionAfter:O,hasStepAfter:A},K]=(0,e.useReducer)(Ie,oe),{trackUsage:N}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){m(!1);return}const[D]=W()(a,t);m(!D&&g)},[t,a,g]),(0,e.useEffect)(()=>{if(t){const[D]=W()(V.Z,t),L=Object.keys(a),[P,c]=t.split("."),B=L.indexOf(P),z=Object.keys(a[P]).indexOf(c),_=B<L.length-1,ee=z<Object.keys(a[P]).length-1;K({type:"UPDATE_MODAL",content:D,newSectionIndex:B,newStepIndex:z,newHasSectionAfter:_,newHasStepAfter:ee})}},[t,a]);const I=()=>{l(t,!0),N(h.trackingEvent),s(null)},j=()=>{p(!0),s(null),N("didSkipGuidedtour")};return E&&h?e.createElement(xe,{hideSkip:!A&&!O,onSkip:j,onClose:I},e.createElement(ke,{...h,onCtaClick:I,currentStep:t,sectionIndex:u,stepIndex:T,hasSectionAfter:O})):null};var Ne=n(64330),Ue=n(37907),We=n(98994),Y=n(38040),re=n(51974),Ke=n(45842),je=n(80760),$e=n(66550);const Ve=(0,C.default)(o.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,le=(0,C.default)(d.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,ce=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const s=(0,e.useRef)(),[l,g]=(0,e.useState)(!1),{logos:{menu:p}}=(0,F.um)(),[E,m]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:h}=(0,i.useAppInfos)(),{formatMessage:u}=(0,k.useIntl)(),{trackUsage:T}=(0,i.useTracking)(),{pathname:O}=(0,d.useLocation)(),A=(0,d.useHistory)(),{post:K}=(0,i.getFetchClient)(),N=h.split(" ").map(c=>c.substring(0,1)).join("").substring(0,2),I=()=>g(c=>!c),j=async()=>{await K("/admin/logout"),i.auth.clearAppStorage(),I(),A.push("/auth/login")},D=c=>{!c.currentTarget.contains(c.relatedTarget)&&c.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&g(!1)},L=(c=null)=>{T("willNavigate",{from:O,to:c})},P=u({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(Ne.$,{condensed:E},e.createElement(Ue.D,{as:d.NavLink,workplace:u({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:P,icon:e.createElement("img",{src:p.custom||p.default,alt:u({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(o.Divider,null),e.createElement(We._,null,e.createElement(Y.O,{as:d.NavLink,to:"/content-manager",icon:e.createElement(v.Write,null),onClick:()=>L("/content-manager")},u({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(re.y,{label:u({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(c=>{const B=c.icon;return e.createElement(Y.O,{as:d.NavLink,to:c.to,key:c.to,icon:e.createElement(B,null),onClick:()=>L(c.to)},u(c.intlLabel))})):null,t.length>0?e.createElement(re.y,{label:u({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(c=>{const B=c.icon;return e.createElement(Y.O,{as:d.NavLink,badgeContent:c.notificationsCount>0&&c.notificationsCount.toString()||void 0,to:c.to,key:c.to,icon:e.createElement(B,null),onClick:()=>L(c.to)},u(c.intlLabel))})):null),e.createElement(Ke.q,null,e.createElement(je.r,{id:"main-nav-user-button",ref:s,onClick:I,initials:N},h),l&&e.createElement(Ve,{onBlur:D,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(o.FocusTrap,{onEscape:I},e.createElement(o.Flex,{direction:"column",alignItems:"stretch",gap:0},e.createElement(le,{tabIndex:0,onClick:I,to:"/me"},e.createElement(o.Typography,null,u({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(le,{tabIndex:0,onClick:j,logout:"logout",to:"/auth/login"},e.createElement(o.Typography,{textColor:"danger600"},u({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(v.Exit,null))))),e.createElement($e.w,{onClick:()=>m(c=>!c)},u(E?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};ce.propTypes={generalSectionLinks:r().array.isRequired,pluginsSectionLinks:r().array.isRequired};const ze=ce,He=(0,C.default)(o.Box)`
  flex: 1;
`,de=({children:t,sideNav:a})=>{const{formatMessage:s}=(0,k.useIntl)();return e.createElement(o.Box,{background:"neutral100"},e.createElement(o.SkipToContent,null,s({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(o.Flex,{alignItems:"flex-start"},a,e.createElement(He,null,t)))};de.propTypes={children:r().node.isRequired,sideNav:r().node.isRequired};const we=de;var X=n(38683),Ze=n(36657);const Qe=n.p+"19eb2dfcf2603eb55733.png",Ye=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],ue={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},Xe=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:v.Book},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:v.PaperPlane}],Je=(0,C.default)(o.Button)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,qe=(0,C.default)(o.Flex)`
  transform: translate(-50%, -50%);
`,_e=(0,C.default)(o.Flex)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${o.Typography}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${o.Typography}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,et=C.default.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,pe=(0,C.default)(o.Typography)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,me=(0,C.default)(pe)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,tt=()=>{const t=(0,e.useRef)(),[a,s]=(0,e.useState)(!1),{formatMessage:l}=(0,k.useIntl)(),{communityEdition:g}=(0,i.useAppInfos)(),p=()=>{s(m=>!m)},E=[...Xe,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:v.Message,href:g?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(o.Box,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(Je,{"aria-label":l(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:p,ref:t},e.createElement(o.Icon,{as:a?v.Cross:v.Question,color:"buttonNeutral0"})),a&&e.createElement(o.Portal,null,e.createElement(o.PopoverPrimitives.Content,{padding:0,source:t,placement:"top-end",spacing:12},e.createElement(o.FocusTrap,{onEscape:p},e.createElement(o.Flex,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(pe,{fontWeight:"bold"},l({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(me,{as:"a",href:ue.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},l(ue.label))),e.createElement(o.Divider,null),Ye.map(({href:m,duration:h,label:u},T)=>e.createElement(_e,{as:"a",href:m,target:"_blank",rel:"noreferrer noopener",key:m,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(o.Box,{paddingRight:5},e.createElement(o.Typography,{textColor:"neutral200",variant:"alpha"},T+1)),e.createElement(o.Box,{position:"relative"},e.createElement(et,{src:Qe,alt:""}),e.createElement(qe,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(o.Icon,{as:v.Play,color:"buttonNeutral0",width:3,height:3}))),e.createElement(o.Flex,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(o.Typography,{fontWeight:"bold"},l(u)),e.createElement(o.VisuallyHidden,null,":"),e.createElement(o.Typography,{textColor:"neutral600",variant:"pi"},h)))),e.createElement(o.Flex,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},E.map(({label:m,href:h,icon:u})=>e.createElement(o.Flex,{gap:3,key:h},e.createElement(o.Icon,{as:u,color:"primary600"}),e.createElement(me,{as:"a",href:h,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},l(m)))))))))},nt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(3187),n.e(994)]).then(n.bind(n,79932))),at=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,91550))),ot=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),st=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5516)]).then(n.bind(n,43008))),ge=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),it=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),rt=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),he=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,62053))),lt=()=>{const{trackUsage:t}=(0,i.useTracking)(),a=(0,x.useDispatch)(),s=(0,x.useSelector)(l=>l.admin_app.status);(0,e.useEffect)(()=>{s==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:Ze.e}))},[s])},ct=()=>{lt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:s}=(0,F.H9)(),{menu:l}=(0,i.useStrapiApp)(),{showTutorials:g}=(0,F.um)(),p=(0,e.useMemo)(()=>l.filter(E=>E.Component).map(({to:E,Component:m,exact:h})=>(0,X.ot)(m,E,h)),[l]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(R.DndProvider,{backend:b.PD},e.createElement(we,{sideNav:e.createElement(ze,{generalSectionLinks:a,pluginsSectionLinks:s})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(d.Switch,null,e.createElement(d.Route,{path:"/",component:at,exact:!0}),e.createElement(d.Route,{path:"/me",component:rt,exact:!0}),e.createElement(d.Route,{path:"/content-manager",component:nt}),p,e.createElement(d.Route,{path:"/settings/:settingId",component:he}),e.createElement(d.Route,{path:"/settings",component:he,exact:!0}),e.createElement(d.Route,{path:"/marketplace"},e.createElement(st,null)),e.createElement(d.Route,{path:"/list-plugins",exact:!0},e.createElement(ot,null)),e.createElement(d.Route,{path:"/404",component:ge}),e.createElement(d.Route,{path:"/500",component:it}),e.createElement(d.Route,{path:"",component:ge}))),e.createElement(Ge,null),g&&e.createElement(tt,null)))},dt=t=>({plugins:Object.keys(t).reduce((a,s)=>(a[s]={...t[s]},a),{})});var ut=n(36968),pt=n.n(ut);const Ee={plugins:null},mt=(t=Ee,a)=>(0,ae.default)(t,s=>{switch(a.type){case"SET_PLUGIN_READY":{pt()(s,["plugins",a.pluginId,"isReady"],!0);break}default:return s}}),gt=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:a},s]=(0,e.useReducer)(mt,Ee,()=>dt(t)),l=(0,e.useRef)(p=>{s({type:"SET_PLUGIN_READY",pluginId:p})});if(Object.keys(a).some(p=>a[p].isReady===!1)){const p=Object.keys(a).reduce((E,m)=>{const h=a[m].initializer;if(h){const u=a[m].pluginId;E.push(e.createElement(h,{key:u,setPlugin:l.current}))}return E},[]);return e.createElement(e.Fragment,null,p,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(ct,null)};var fe=n(28344);const ht=()=>({type:fe.l}),Et=t=>({type:fe.m,permissions:t}),ye=({children:t,permissions:a,refetchPermissions:s})=>{const{allPermissions:l}=(0,x.useSelector)(p=>p.rbacProvider),g=(0,x.useDispatch)();return(0,e.useEffect)(()=>(g(Et(a)),()=>{g(ht())}),[a,g]),l?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:l,refetchPermissions:s}},t):e.createElement(i.LoadingIndicatorPage,null)};ye.propTypes={children:r().element.isRequired,permissions:r().array.isRequired,refetchPermissions:r().func.isRequired};const ft=ye;var yt=n(19325),Tt=n(81249),J=n.n(Tt);const Te=(t,a)=>!J().valid(t)||!J().valid(a)?!1:J().lt(t,a),Ce=y.i8,Ct=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:q}=(0,i.getFetchClient)(),vt=async t=>{try{const{data:{tag_name:a}}=await yt.Z.get("https://api.github.com/repos/strapi/strapi/releases/latest");return Te(Ce,a)&&Ct&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch{return Ce}},Mt=async()=>{try{const{data:t,headers:a}=await q("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Rt=async()=>{try{const{data:t,headers:a}=await q("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},xt=async()=>{try{const{data:{data:{roles:t}}}=await q("/admin/users/me");return t}catch(t){throw new Error(t)}},ve=y.i8,It=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),a=(0,i.useNotification)(),s=(0,e.useRef)(t),l=i.auth.getUserInfo(),g=H()(l,"username")||(0,X.Pp)(l.firstname,l.lastname),[p,E]=(0,e.useState)(g),[m,h]=(0,e.useState)(null),{showReleaseNotification:u}=(0,F.um)(),[{data:T,status:O},{data:A,isLoading:K},{data:N,status:I,refetch:j,isFetched:D,isFetching:L},{data:P}]=(0,S.useQueries)([{queryKey:"app-infos",queryFn:Mt},{queryKey:"strapi-release",queryFn:()=>vt(a),enabled:u,initialData:ve},{queryKey:"admin-users-permission",queryFn:Rt,initialData:[]},{queryKey:"user-roles",queryFn:xt}]),c=(0,e.useMemo)(()=>Te(ve,A),[A]);(0,e.useEffect)(()=>{P&&P.find(({code:te})=>te==="strapi-super-admin")&&T?.autoReload&&s.current(!0)},[P,T]),(0,e.useEffect)(()=>{(async()=>{const te=await(0,X.Qy)(l);h(te)})()},[l]);const z=K||(L&&D||O==="loading"||I==="loading"),_=(0,e.useMemo)(()=>({...T,userId:m,latestStrapiReleaseTag:A,setUserDisplayName:E,shouldUpdateStrapi:c,userDisplayName:p}),[T,A,c,p,m]);return z?e.createElement(i.LoadingIndicatorPage,null):O==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:_},e.createElement(ft,{permissions:N,refetchPermissions:j},e.createElement(gt,null)))}},89285:($,M,n)=>{n.d(M,{Z:()=>R});var e=n(67294),i=n(45697),S=n.n(i),f=n(95489),H=n.n(f),y=n(28702),F=n.n(y),d=n(99872);const x=({type:b,...U})=>e.createElement(y.Box,{width:(0,f.pxToRem)(2),height:"100%",background:b===d.VM?"neutral300":"primary500",hasRadius:!0,...U});x.defaultProps={type:d.VM},x.propTypes={type:S().oneOf([d.lW,d.hx,d.VM])};const R=x},96392:($,M,n)=>{n.d(M,{Z:()=>U});var e=n(67294),i=n(45697),S=n.n(i),f=n(95489),H=n.n(f),y=n(28702),F=n.n(y),d=n(41363),x=n.n(d),R=n(99872);const b=({type:W,number:V})=>W===R.hx?e.createElement(y.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,f.pxToRem)(30),height:(0,f.pxToRem)(30),justifyContent:"center"},e.createElement(y.Icon,{as:d.Check,"aria-hidden":!0,width:(0,f.pxToRem)(16),color:"neutral0"})):W===R.lW?e.createElement(y.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,f.pxToRem)(30),height:(0,f.pxToRem)(30),justifyContent:"center"},e.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral0"},V)):e.createElement(y.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,f.pxToRem)(30),height:(0,f.pxToRem)(30),justifyContent:"center"},e.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral600"},V));b.defaultProps={number:void 0,type:R.VM},b.propTypes={number:S().number,type:S().oneOf([R.lW,R.hx,R.VM])};const U=b},99872:($,M,n)=>{n.d(M,{VM:()=>S,hx:()=>i,lW:()=>e});const e="isActive",i="isDone",S="isNotDone"},64729:($,M,n)=>{n.d(M,{Z:()=>i});const i={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);