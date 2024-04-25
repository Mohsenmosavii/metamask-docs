"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9175],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=l(t),h=i,y=d["".concat(p,".").concat(h)]||d[h]||c[h]||r;return t?a.createElement(y,s(s({ref:n},g),{},{components:t})):a.createElement(y,s({ref:n},g))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},30812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(58168),i=(t(96540),t(15680));const r={description:"Learn about the RPC methods for signing transactions in MetaMask.",sidebar_position:5},s="Signing methods",o={unversionedId:"concepts/signing-methods",id:"concepts/signing-methods",title:"Signing methods",description:"Learn about the RPC methods for signing transactions in MetaMask.",source:"@site/wallet/concepts/signing-methods.md",sourceDirName:"concepts",slug:"/concepts/signing-methods",permalink:"/snaps-connect-eip-6963/wallet/concepts/signing-methods",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/signing-methods.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn about the RPC methods for signing transactions in MetaMask.",sidebar_position:5},sidebar:"walletSidebar",previous:{title:"Convenience libraries",permalink:"/snaps-connect-eip-6963/wallet/concepts/convenience-libraries"},next:{title:"Wallet interoperability",permalink:"/snaps-connect-eip-6963/wallet/concepts/wallet-interoperability"}},p={},l=[{value:"<code>eth_signTypedData_v4</code>",id:"eth_signtypeddata_v4",level:3},{value:"<code>personal_sign</code>",id:"personal_sign",level:3},{value:"Deprecated signing methods",id:"deprecated-signing-methods",level:2},{value:"<code>eth_sign</code>",id:"eth_sign",level:3},{value:"<code>eth_signTypedData_v1</code> and <code>eth_signTypedData_v3</code>",id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3",level:3}],g={toc:l},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"signing-methods"},"Signing methods"),(0,i.yg)("p",null,"This page describes the signing RPC methods in MetaMask.\nLearn how to ",(0,i.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/how-to/sign-data/"},"use the recommended signing methods"),"."),(0,i.yg)("h3",{id:"eth_signtypeddata_v4"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_signTypedData_v4")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/eth_signtypeddata_v4"},(0,i.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"\nis:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Cheap to verify on chain."),(0,i.yg)("li",{parentName:"ul"},"Human-readable."),(0,i.yg)("li",{parentName:"ul"},"Protected against phishing signatures.")),(0,i.yg)("p",null,"If onchain verifiability cost is a high priority,\n",(0,i.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/how-to/sign-data/#use-eth_signtypeddata_v4"},"use ",(0,i.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."),(0,i.yg)("h3",{id:"personal_sign"},(0,i.yg)("inlineCode",{parentName:"h3"},"personal_sign")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,i.yg)("inlineCode",{parentName:"a"},"personal_sign")),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Displays human-readable text when UTF-8 encoded, making it a popular choice for site logins\n(for example, ",(0,i.yg)("a",{parentName:"li",href:"/snaps-connect-eip-6963/wallet/how-to/sign-data/siwe"},"Sign-In with Ethereum"),")."),(0,i.yg)("li",{parentName:"ul"},"Is protected against phishing signatures.")),(0,i.yg)("p",null,"The text prefix of ",(0,i.yg)("inlineCode",{parentName:"p"},"personal_sign")," makes signatures expensive to verify on-chain.\nIf onchain verifiability cost is not a priority, you can\n",(0,i.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/how-to/sign-data/#use-personal_sign"},"use ",(0,i.yg)("inlineCode",{parentName:"a"},"personal_sign")),"."),(0,i.yg)("h2",{id:"deprecated-signing-methods"},"Deprecated signing methods"),(0,i.yg)("admonition",{title:"important",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_signTypedData_v1"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_signTypedData_v3")," are deprecated.\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"personal_sign"),".")),(0,i.yg)("h3",{id:"eth_sign"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_sign")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," allows signing an arbitrary hash, which means it can be used to sign transactions, or any other\ndata. Using ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," is a dangerous phishing risk."),(0,i.yg)("p",null,"MetaMask disables ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," by default and does not recommend using ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," in production.\nSome applications (usually internal administrator panels) use ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," for ease of\nuse, or due to an inability to change the associated dapp.\nIf a wallet user must interact with a dapp that uses ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," and accepts the risks,\nthe wallet user can re-enable ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," through advanced settings."),(0,i.yg)("h3",{id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_signTypedData_v1")," and ",(0,i.yg)("inlineCode",{parentName:"h3"},"eth_signTypedData_v3")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"eth_signTypedData")," was introduced by ",(0,i.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),".\nThe EIP-712 specification changed several times resulting in multiple versions\nof ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_signTypedData"),"."),(0,i.yg)("p",null,"The earlier versions are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"eth_signTypedData_v1")," \u2013 The same as ",(0,i.yg)("inlineCode",{parentName:"li"},"eth_signTypedData"),".\nRead the\n",(0,i.yg)("a",{parentName:"li",href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290"},"introductory blog post to this method"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"eth_signTypedData_v3")," \u2013 A highly used version of the EIP-712 specification.\nRead the\n",(0,i.yg)("a",{parentName:"li",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"introductory blog post to this method"),".")),(0,i.yg)("p",null,"The missing ",(0,i.yg)("inlineCode",{parentName:"p"},"v2")," represents an intermediary design that the Cipher browser implemented."),(0,i.yg)("p",null,"All early versions of this method lack later security improvements.\nUse the latest version, ",(0,i.yg)("a",{parentName:"p",href:"#eth_signtypeddata_v4"},(0,i.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."))}c.isMDXComponent=!0}}]);