"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,s(s({ref:t},l),{},{components:r})):a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={description:"Register a contract's method names with users.",sidebar_position:2},s="Display a contract's method names",i={unversionedId:"how-to/display/method-names",id:"how-to/display/method-names",title:"Display a contract's method names",description:"Register a contract's method names with users.",source:"@site/wallet/how-to/display/method-names.md",sourceDirName:"how-to/display",slug:"/how-to/display/method-names",permalink:"/update-srp-in-flask-page/wallet/how-to/display/method-names",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/method-names.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Register a contract's method names with users.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Display tokens",permalink:"/update-srp-in-flask-page/wallet/how-to/display/tokens"},next:{title:"Display a dapp icon",permalink:"/update-srp-in-flask-page/wallet/how-to/display/icon"}},p={},c=[],l={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"display-a-contracts-method-names"},"Display a contract's method names"),(0,n.kt)("p",null,"MetaMask uses the ",(0,n.kt)("a",{parentName:"p",href:"https://www.4byte.directory/"},"Ethereum Signature Database")," to display\nmethod names on the confirmation screen.\nFor many common method names, such as token methods, this allows MetaMask to look up the method\nnames by their ",(0,n.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"},"method signature"),".\nHowever, sometimes you're using a method that isn't in that database, and MetaMask simply\ndisplays ",(0,n.kt)("strong",{parentName:"p"},"Contract Interaction")," to the user."),(0,n.kt)("p",null,"To register your contract's method names so they show in the MetaMask interface,\n",(0,n.kt)("a",{parentName:"p",href:"https://www.4byte.directory/submit/"},"submit each method's signature to the Ethereum Signature Database"),"."))}d.isMDXComponent=!0}}]);