(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{7527:function(e,s,i){Promise.resolve().then(i.bind(i,850))},850:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return G}});var l=i(7437),r=i(2749),t=i(2265),a=i(4994),n=i(8782),o=i(1441),c=i(9124),d=i(9561),u=i(2512),m=i(5562),h=i(7898),x=i(8744),p=i(9670),g=i(8168),f=i(3250),j=i(4562),b=i(3876),w=i(8e3),y=i(7250),k=i(5973),v=i(3509),S=i(8492),C=i(4556),P=i(3709),z=i(6479),q=i(9451),N=i(2261),D=i(8720),I=i(9679),T=i(1557);let F=(0,a.k)(e=>({list:{color:"dark"===e.colorScheme?e.white:e.black,fontSize:(0,n.h)(14)}}));function Z(e){let{index:s,manipulateModal:i}=e,[a,n]=(0,t.useState)("form"),{classes:o,theme:c,cx:d}=F(),{data:u}=(0,r.useSession)(),m=u.user.id,x=(0,T.c)({initialValues:{name:""},validate:{name:e=>e.length<5?"Username must be at least 5 characters long":null}}),g=async()=>{let e=await fetch("http://127.0.0.1:8000/api/accounts/".concat(m,"/username"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:x.values.name,email:"",password:""})});e.ok?n("success"):n("failure")},f=(0,T.c)({initialValues:{email:"",password:""},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",password:e=>e.length<=6?"Password should include at least 6 characters":null}}),j=async()=>{let e=await fetch("http://127.0.0.1:8000/api/accounts/".concat(m,"/email"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"",email:f.values.email,password:f.values.password})});e.ok?n("success"):n("failure")},b=(0,T.c)({initialValues:{currentPassword:"",newPassword:""},validate:{currentPassword:e=>e.length<=6?"Password should include at least 6 characters":null,newPassword:e=>e.length<=6?"Password should include at least 6 characters":null}}),w=async()=>{let e=await fetch("http://127.0.0.1:8000/api/accounts/".concat(m,"/password"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"",email:"",password:"".concat(b.values.currentPassword," ").concat(b.values.newPassword)})});e.ok?n("success"):n("failure")},y=(0,T.c)({initialValues:{email:"",password:""},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",password:e=>e.length<=6?"Password should include at least 6 characters":null}}),k=async()=>{let e=await fetch("http://127.0.0.1:8000/api/accounts/".concat(m),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"",email:y.values.email,password:y.values.password})});e.ok?(n("success"),await (0,r.signOut)({callbackUrl:"/auth/portal"})):n("failure")};return(0,l.jsxs)(l.Fragment,{children:[0===s&&(0,l.jsxs)(l.Fragment,{children:["form"===a&&(0,l.jsxs)("form",{onSubmit:x.onSubmit(()=>{}),children:[(0,l.jsx)(N.o,{required:!0,withAsterisk:!1,variant:"filled",radius:"md",label:"New username",placeholder:"Enter your new username...",mt:"md",mb:"md",...x.getInputProps("name")}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsxs)(h.Z,{mt:"xl",position:"right",children:[(0,l.jsx)(P.z,{type:"submit",onClick:x.isValid("name")?g:()=>{},children:"Confirm change"}),(0,l.jsx)(P.z,{style:{background:c.colors.dark[3]},onClick:()=>i(s),children:"Cancel"})]})]}),"success"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Your username has been successfully updated! To see the changes, please log out and log back in."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]}),"failure"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Something went wrong. Please try again with a different username."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]})]}),1===s&&(0,l.jsxs)(l.Fragment,{children:["form"===a&&(0,l.jsxs)("form",{onSubmit:f.onSubmit(()=>{}),children:[(0,l.jsx)(N.o,{required:!0,withAsterisk:!1,variant:"filled",radius:"md",label:"New email",placeholder:"Enter your new email address...",mt:"md",mb:"md",...f.getInputProps("email")}),(0,l.jsx)(D.W,{required:!0,withAsterisk:!1,variant:"filled",radius:"md",label:"Password",placeholder:"Enter your password...",...f.getInputProps("password")}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsxs)(h.Z,{mt:"xl",position:"right",children:[(0,l.jsx)(P.z,{onClick:f.isValid("email")&&f.isValid("password")?j:()=>{},type:"submit",children:"Confirm change"}),(0,l.jsx)(P.z,{style:{background:c.colors.dark[3]},onClick:()=>i(s),children:"Cancel"})]})]}),"success"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Your email has been successfully updated! To see the changes, please log out and log back in."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]}),"failure"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Something went wrong. Please try again with a different email and/or password."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]})]}),2===s&&(0,l.jsxs)(l.Fragment,{children:["form"===a&&(0,l.jsxs)("form",{onSubmit:b.onSubmit(()=>{}),children:[(0,l.jsx)(D.W,{required:!0,withAsterisk:!1,variant:"filled",radius:"md",label:"Current password",placeholder:"Enter your old password...",mt:"md",mb:"md",...b.getInputProps("currentPassword")}),(0,l.jsx)(D.W,{required:!0,withAsterisk:!1,variant:"filled",radius:"md",label:"New password",placeholder:"Enter your new password...",...b.getInputProps("newPassword")}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsxs)(h.Z,{mt:"xl",position:"right",children:[(0,l.jsx)(P.z,{onClick:b.isValid("currentPassword")&&b.isValid("newPassword")?w:()=>{},type:"submit",children:"Confirm change"}),(0,l.jsx)(P.z,{style:{background:c.colors.dark[3]},children:"Cancel"})]})]}),"success"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Your password has been successfully updated! To see the changes, please log out and log back in."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]}),"failure"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Something went wrong. Please try again with the correct current password."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]})]}),3===s&&(0,l.jsxs)(l.Fragment,{children:["form"===a&&(0,l.jsx)(l.Fragment,{children:"oauth"===u.user.type?(0,l.jsxs)(p.x,{mt:"md",mb:"md",children:["You cannot delete your account because you signed up with an OAuth provider. If you would like to delete your account, please contact us at"," ",(0,l.jsx)("a",{href:"mailto:help@qoaba.com",children:"help@qoaba.com"}),"."]}):(0,l.jsxs)("form",{onSubmit:y.onSubmit(()=>{}),children:[(0,l.jsx)(p.x,{mt:"md",mb:"sm",children:"Deleting your account is a permanent action with significant consequences. Before proceeding, carefully review the following information:"}),(0,l.jsx)(C.x,{w:400,children:(0,l.jsxs)(I.a,{mb:"sm",className:o.list,children:[(0,l.jsx)(I.a.Item,{children:"All your commercial licenses will be revoked."}),(0,l.jsx)(I.a.Item,{children:"Payments associated with your account will not be eligible for refunds."})]})}),(0,l.jsx)(p.x,{mb:"sm",c:"red",children:"Important: Account deletion is irreversible. Once your account is deleted, it cannot be recovered under any circumstances."}),(0,l.jsx)(p.x,{children:"If you fully understand the consequences outlined above and still wish to proceed, please confirm by entering your email and password below:"}),(0,l.jsx)(N.o,{required:!0,withAsterisk:!1,variant:"filled",radius:"md",label:"Email",placeholder:"Enter email to confirm...",mt:"md",mb:"md",...y.getInputProps("email")}),(0,l.jsx)(D.W,{required:!0,withAsterisk:!1,variant:"filled",radius:"md",label:"Password",placeholder:"Enter password to confirm...",...y.getInputProps("password")}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsxs)(h.Z,{mt:"xl",position:"right",children:[(0,l.jsx)(P.z,{color:"red",onClick:y.isValid("email")&&y.isValid("password")?k:()=>{},type:"submit",children:"Confirm change"}),(0,l.jsx)(P.z,{style:{background:c.colors.dark[3]},onClick:()=>i(s),children:"Cancel"})]})]})}),"success"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Your email has been successfully updated! To see the changes, please log out and log back in."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]}),"failure"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.x,{mt:"md",mb:"md",children:"Something went wrong. Please try again with a different email and/or password."}),(0,l.jsx)(q.i,{mt:"xl"}),(0,l.jsx)(h.Z,{mt:"xl",position:"right",children:(0,l.jsx)(P.z,{onClick:()=>i(s),children:"Got it"})})]})]})]})}let A=(0,a.k)(e=>({card:{border:"none"},cardTitle:{fontWeight:700,fontSize:(0,n.h)(30),color:"dark"===e.colorScheme?e.white:e.black},cardDescription:{fontSize:(0,n.h)(18),color:"dark"===e.colorScheme?e.white:e.black},cardLesserDescription:{fontSize:(0,n.h)(16)},buttonLabel:{fontSize:(0,n.h)(14)},modalDialogue:{border:"2px solid #ccc"}}));function E(e){let{title:s,fields:i}=e,{classes:a,theme:n,cx:o}=A(),[c,d]=t.useState(Array(i.length).fill(!1)),u=e=>{let s=[...c];s[e]=!0,d(s)},m=e=>{let s=[...c];s[e]=!1,d(s)},{data:x}=(0,r.useSession)();return(0,l.jsxs)(S.Z,{p:"lg",shadow:"md",radius:"md",className:a.card,children:[(0,l.jsx)(p.x,{className:a.cardTitle,children:s}),i.map((e,s)=>(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(p.x,{mt:0===s?"xl":"md",className:a.cardDescription,children:e.label}),(0,l.jsxs)(h.Z,{position:"apart",children:[(0,l.jsx)(C.x,{w:600,children:(0,l.jsx)(p.x,{c:s>1?"dimmed":"",className:s>1?a.cardLesserDescription:a.cardDescription,children:e.value})}),(0,l.jsx)(P.z,{style:{background:s<3?n.colors.dark[3]:n.colors.red[6]},onClick:()=>u(s),disabled:(null==x?void 0:x.user.type)==="oauth"&&s<3,children:(0,l.jsx)(p.x,{className:a.buttonLabel,children:s<3?"Change":"Delete"})},s)]}),(0,l.jsx)(z.u,{opened:c[s],onClose:()=>m(s),title:s<3?"Change your "+e.label.toLowerCase():"Delete your account",centered:!0,size:"md",radius:"md",children:(0,l.jsx)(Z,{index:s,manipulateModal:m})}),s<i.length-1&&(0,l.jsx)(q.i,{mt:"md"})]},s))]})}var V=i(473),O=i(904);let _=(0,a.k)(e=>({card:{border:"none"},cardTitle:{fontWeight:700,fontSize:(0,n.h)(30),color:"dark"===e.colorScheme?e.white:e.black},cardDescription:{fontSize:(0,n.h)(18),color:"dark"===e.colorScheme?e.white:e.black},cardLesserDescription:{fontSize:(0,n.h)(16)}}));function L(e){let{classes:s,theme:i,cx:r}=_(),t=(0,T.c)({initialValues:{topic:"",question_title:"",question:"",solution:"",difficulty:"",validate:{topic:e=>/^(?!\s*$).+/.test(e)?null:"Invalid topic",question_title:e=>/^(?!\s*$).+/.test(e)?null:"Invalid question title",question:e=>/^(?!\s*$).+/.test(e)?null:"Invalid question",solution:e=>/^(?!\s*$).+/.test(e)?null:"Invalid solution",difficulty:e=>/^(?!\s*$).+/.test(e)?null:"Invalid difficulty"}}}),a=async()=>{try{let e=await fetch("http://127.0.0.1:8000/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:t.values.topic,question_title:t.values.question_title,question:t.values.question,solution:t.values.solution,difficulty:t.values.difficulty})});if(e.ok);else throw Error("Error creating user account")}catch(e){}},n=async()=>{console.log("Fail")};return(0,l.jsxs)(S.Z,{p:"lg",shadow:"md",className:s.card,children:[(0,l.jsx)(p.x,{className:s.cardTitle,children:"Add a question"}),(0,l.jsxs)("form",{onSubmit:t.onSubmit(()=>{}),children:[(0,l.jsx)(p.x,{mt:"xl",className:s.cardDescription,children:"Topic"}),(0,l.jsx)(V.Ph,{id:"1",required:!0,placeholder:"Select a topic",mt:"sm",searchable:!0,data:["OOP","Networks","Algorithms","Virtualization"],onChange:e=>t.setFieldValue("topic",e),error:t.errors.topic,variant:"filled"}),(0,l.jsx)(p.x,{mt:"md",className:s.cardDescription,children:"Question Title"}),(0,l.jsx)(O.g,{id:"2",required:!0,autosize:!0,minRows:1,placeholder:"Enter your question title here...",mt:"sm",onChange:e=>t.setFieldValue("question_title",e.currentTarget.value),error:t.errors.question_title,variant:"filled"}),(0,l.jsx)(p.x,{mt:"md",className:s.cardDescription,children:"Question"}),(0,l.jsx)(O.g,{id:"3",required:!0,autosize:!0,minRows:1,placeholder:"Enter your question here...",mt:"sm",onChange:e=>t.setFieldValue("question",e.currentTarget.value),error:t.errors.question,variant:"filled"}),(0,l.jsx)(p.x,{mt:"md",className:s.cardDescription,children:"Solution"}),(0,l.jsx)(O.g,{id:"4",required:!0,autosize:!0,minRows:2,placeholder:"Enter your solution here...",mt:"sm",onChange:e=>t.setFieldValue("solution",e.currentTarget.value),error:t.errors.solution,variant:"filled"}),(0,l.jsx)(p.x,{mt:"md",className:s.cardDescription,children:"Difficulty"}),(0,l.jsx)(V.Ph,{id:"5",required:!0,placeholder:"Select a difficulty",mt:"sm",searchable:!0,data:["Beginner","Intermediate","Advanced"],onChange:e=>t.setFieldValue("difficulty",e),error:t.errors.difficulty,variant:"filled"}),(0,l.jsx)(q.i,{mt:"lg",mb:"lg"}),(0,l.jsxs)(h.Z,{position:"right",children:[(0,l.jsx)(P.z,{onClick:t.isDirty("topic")&&t.isDirty("question_title")&&t.isDirty("question")&&t.isDirty("solution")&&t.isDirty("difficulty")?a:n,type:"submit",children:"Add"}),(0,l.jsx)(P.z,{type:"reset",color:"red",children:"Clear"})]})]})]})}let W=(0,a.k)(e=>({navbar:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,borderRight:"none"},title:{textTransform:"uppercase",letterSpacing:(0,n.h)(-.25)},link:{...e.fn.focusStyles(),display:"flex",alignItems:"center",textDecoration:"none",fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[7],padding:"".concat(e.spacing.xs," ").concat(e.spacing.sm),borderRadius:e.radius.sm,fontWeight:500,"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:"dark"===e.colorScheme?e.white:e.black,["& .".concat((0,o.A)("icon"))]:{color:"dark"===e.colorScheme?e.white:e.black}}},logoutLink:{...e.fn.focusStyles(),display:"flex",alignItems:"center",textDecoration:"none",fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[7],padding:"".concat(e.spacing.xs," ").concat(e.spacing.sm),borderRadius:e.radius.sm,fontWeight:500,cursor:"pointer","&:hover":{backgroundColor:e.colors.red[6],color:e.white,["& .".concat((0,o.A)("icon"))]:{color:e.white}}},linkIcon:{ref:(0,o.A)("icon"),color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],marginRight:e.spacing.sm},linkActive:{"&, &:hover":{backgroundColor:e.fn.variant({variant:"dark",color:e.primaryColor}).background,color:e.fn.variant({variant:"dark",color:e.primaryColor}).color,["& .".concat((0,o.A)("icon"))]:{color:e.fn.variant({variant:"dark",color:e.primaryColor}).color}}}}));var G=()=>{let{classes:e,theme:s,cx:i}=W(),[a,n]=(0,t.useState)("account"),[o,S]=(0,t.useState)("Details"),{data:C}=(0,r.useSession)();if(!C)return(0,l.jsx)(c.W,{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:(0,l.jsx)(d.a,{size:"xl"})});var P=null,z=null;"admin"===C.user.role?(P={account:[{label:"Details",icon:j.Z}],general:[{label:"Questions",icon:b.Z}]},z=[{label:"Account",value:"account"},{label:"System",value:"general"}]):"user"===C.user.role&&(P={account:[{label:"Details",icon:j.Z},{label:"Billing",icon:w.Z}],general:[{label:"Performance",icon:y.Z}]},z=[{label:"Account",value:"account"},{label:"Statistics",value:"general"}]);let q=P[a].map(s=>(0,l.jsxs)("a",{className:i(e.link,{[e.linkActive]:s.label===o}),onClick:e=>{e.preventDefault(),S(s.label)},children:[(0,l.jsx)(s.icon,{className:e.linkIcon,stroke:1.5}),(0,l.jsx)("span",{children:s.label})]},s.label)),N=[{label:"Username",value:C.user.name},{label:"Email",value:C.user.email},{label:"Password",value:"Change your account password."},{label:"Delete account",value:"Permanently delete your account, and associated subscriptions. You will be asked for confirmation before the deletion proceeds."}];return(0,l.jsx)(u.M,{mt:"xl",children:(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{children:(0,l.jsxs)(m.w,{height:840,width:{sm:300},p:"md",className:e.navbar,children:[(0,l.jsxs)(m.w.Section,{children:[(0,l.jsxs)(h.Z,{style:{display:"flex",alignItems:"center"},mb:"xl",children:[(0,l.jsx)(x.E,{src:C.user.image,radius:"sm",alt:"Profile picture",width:40,height:40}),(0,l.jsx)(p.x,{weight:500,size:"sm",color:"dimmed",className:e.title,style:{marginLeft:"0.1rem"},children:C.user.role})]}),(0,l.jsx)(g.s,{value:a,onChange:e=>n(e),transitionTimingFunction:"ease",fullWidth:!0,data:z})]}),(0,l.jsxs)(m.w.Section,{grow:!0,mt:"xl",children:[q,(0,l.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,l.jsxs)("a",{href:"/",className:e.link,children:[(0,l.jsx)(k.Z,{className:e.linkIcon,stroke:1.5}),(0,l.jsx)("span",{children:"Back to main site"})]}),(0,l.jsxs)("a",{className:e.logoutLink,onClick:async e=>{e.preventDefault(),await (0,r.signOut)({callbackUrl:"/auth/portal"})},children:[(0,l.jsx)(v.Z,{className:e.linkIcon,stroke:1.5}),(0,l.jsx)("span",{children:"Log out"})]})]})]})]})}),(0,l.jsx)("div",{style:{flex:1,padding:"1rem"},children:(0,l.jsxs)(f.M,{w:750,cols:1,spacing:"lg",children:["Details"===o&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(E,{title:"Your account",fields:N})}),"Questions"===o&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(L,{})})]})})]})})}}},function(e){e.O(0,[588,954,749,967,15,657,402,223,258,971,596,744],function(){return e(e.s=7527)}),_N_E=e.O()}]);