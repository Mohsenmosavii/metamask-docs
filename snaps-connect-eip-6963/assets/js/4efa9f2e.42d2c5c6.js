"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9375],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=s,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(58168),s=(t(96540),t(15680));const a={description:"Request and revoke permissions to call restricted methods.",sidebar_position:6},o="Manage permissions",i={unversionedId:"how-to/manage-permissions",id:"how-to/manage-permissions",title:"Manage permissions",description:"Request and revoke permissions to call restricted methods.",source:"@site/wallet/how-to/manage-permissions.md",sourceDirName:"how-to",slug:"/how-to/manage-permissions",permalink:"/snaps-connect-eip-6963/wallet/how-to/manage-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/manage-permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Request and revoke permissions to call restricted methods.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Display a dapp icon",permalink:"/snaps-connect-eip-6963/wallet/how-to/display/icon"},next:{title:"Use MetaMask SDK",permalink:"/snaps-connect-eip-6963/wallet/how-to/use-sdk/"}},p={},l=[{value:"Request permissions example",id:"request-permissions-example",level:2},{value:"Revoke permissions example",id:"revoke-permissions-example",level:2}],c={toc:l},m="wrapper";function u(e){let{components:n,...a}=e;return(0,s.yg)(m,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"manage-permissions"},"Manage permissions"),(0,s.yg)("p",null,"To call a restricted RPC method, your dapp must request permission from the user using\nthe ",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_requestPermissions"},(0,s.yg)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," RPC method.\nYou can get the user's current permissions using ",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_getPermissions"},(0,s.yg)("inlineCode",{parentName:"a"},"wallet_getPermissions")),",\nand revoke permissions previously granted to your dapp using\n",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_revokePermissions"},(0,s.yg)("inlineCode",{parentName:"a"},"wallet_revokePermissions")),".\nThese methods are specified by ",(0,s.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255")," and\n",(0,s.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md"},"MIP-2"),"."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," creates a confirmation asking the user to connect to an account and\nallow the dapp to call the requested method.\nThe confirmation screen describes the functions and data the requested method can access.\nFor example, something like the following confirmation displays when you request permission to call\nthe restricted method ",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_accounts")),":"),(0,s.yg)("div",{class:"row margin-bottom--md"},(0,s.yg)("div",{class:"column"},(0,s.yg)("img",{src:t(94257).A,alt:"Request permissions confirmation 1",style:{border:"1px solid #DCDCDC"}})),(0,s.yg)("div",{class:"column"},(0,s.yg)("img",{src:t(22544).A,alt:"Request permissions confirmation 2",style:{border:"1px solid #DCDCDC"}}))),(0,s.yg)("admonition",{title:"note",type:"info"},(0,s.yg)("p",{parentName:"admonition"},"To access accounts, we recommend using ",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts")),",\nwhich automatically asks for permission to use ",(0,s.yg)("inlineCode",{parentName:"p"},"eth_accounts")," by calling ",(0,s.yg)("inlineCode",{parentName:"p"},"wallet_requestPermissions"),"\ninternally.\nSee ",(0,s.yg)("a",{parentName:"p",href:"../connect/access-accounts"},"how to access a user's accounts")," for more information.\nGranting permission for ",(0,s.yg)("inlineCode",{parentName:"p"},"eth_accounts")," also grants access to ",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_sendTransaction")),", ",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,s.yg)("inlineCode",{parentName:"a"},"personal_sign")),", and ",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/eth_signTypedData_v4"},(0,s.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),". ")),(0,s.yg)("h2",{id:"request-permissions-example"},"Request permissions example"),(0,s.yg)("p",null,"The following example uses ",(0,s.yg)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," to request permission from the user to call ",(0,s.yg)("inlineCode",{parentName:"p"},"eth_accounts"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'document.getElementById("requestPermissionsButton", requestPermissions);\n\nfunction requestPermissions() {\n  provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n      method: "wallet_requestPermissions",\n      params: [{ eth_accounts: {} }],\n    })\n    .then((permissions) => {\n      const accountsPermission = permissions.find(\n        (permission) => permission.parentCapability === "eth_accounts"\n      );\n      if (accountsPermission) {\n        console.log("eth_accounts permission successfully requested!");\n      }\n    })\n    .catch((error) => {\n      if (error.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        console.log("Permissions needed to continue.");\n      } else {\n        console.error(error);\n      }\n    });\n}\n')),(0,s.yg)("h2",{id:"revoke-permissions-example"},"Revoke permissions example"),(0,s.yg)("p",null,"The following example uses ",(0,s.yg)("inlineCode",{parentName:"p"},"wallet_revokePermissions")," to revoke the dapp's permission to call ",(0,s.yg)("inlineCode",{parentName:"p"},"eth_accounts"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript"},'await provider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({\n    method: "wallet_revokePermissions",\n    params: [\n      {\n        eth_accounts: {},\n      },\n    ],\n  });\n')))}u.isMDXComponent=!0},22544:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/request-permissions-2-7526e02a3555f5aeaa609955aea97821.png"},94257:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/request-permissions-81ec11205503d1b5dfde85316a3da5a1.png"}}]);