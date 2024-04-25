"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1588],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||h[f]||c;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const c={sidebar_position:1,description:"See the high-level web3 architecture."},o="Architecture",i={unversionedId:"concepts/architecture",id:"concepts/architecture",title:"Architecture",description:"See the high-level web3 architecture.",source:"@site/wallet/concepts/architecture.md",sourceDirName:"concepts",slug:"/concepts/architecture",permalink:"/snaps-connect-eip-6963/wallet/concepts/architecture",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"See the high-level web3 architecture."},sidebar:"walletSidebar",previous:{title:"Concepts",permalink:"/snaps-connect-eip-6963/wallet/concepts"},next:{title:"About the Wallet API",permalink:"/snaps-connect-eip-6963/wallet/concepts/wallet-api"}},s={},l=[],p={toc:l},u="wrapper";function h(e){let{components:t,...c}=e;return(0,a.yg)(u,(0,n.A)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"architecture"},"Architecture"),(0,a.yg)("p",null,"The following diagram outlines the high-level architecture of the MetaMask web3 stack."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Architecture diagram",src:r(73283).A,width:"1512",height:"926"})),(0,a.yg)("p",null,"Using ",(0,a.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/concepts/sdk/"},"MetaMask SDK"),", dapps built on multiple platforms can connect to their users' Ethereum\naccounts through the MetaMask browser extension and MetaMask Mobile.\nDapps can send ",(0,a.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/concepts/wallet-api"},"Wallet API")," requests to the users' MetaMask wallet clients.\nMetaMask then responds to these requests directly or uses ",(0,a.yg)("a",{parentName:"p",href:"https://www.infura.io/"},"Infura")," (or\nanother user-configured node provider) when the call requires access to information on a blockchain network."))}h.isMDXComponent=!0},73283:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/web3-architecture-692705a57011e90a523806281fdf2219.png"}}]);