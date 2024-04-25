"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2416],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const i={sidebar_position:2,description:"Learn about the Android SDK architecture.",tags:["Android SDK"]},o="Android SDK architecture",c={unversionedId:"concepts/sdk/android",id:"concepts/sdk/android",title:"Android SDK architecture",description:"Learn about the Android SDK architecture.",source:"@site/wallet/concepts/sdk/android.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/android",permalink:"/snaps-connect-eip-6963/wallet/concepts/sdk/android",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/android.md",tags:[{label:"Android SDK",permalink:"/snaps-connect-eip-6963/wallet/tags/android-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the Android SDK architecture.",tags:["Android SDK"]},sidebar:"walletSidebar",previous:{title:"SDK connections",permalink:"/snaps-connect-eip-6963/wallet/concepts/sdk/connections"},next:{title:"Convenience libraries",permalink:"/snaps-connect-eip-6963/wallet/concepts/convenience-libraries"}},l={},s=[{value:"Architecture",id:"architecture",level:2},{value:"Connection flow",id:"connection-flow",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(p,(0,a.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"android-sdk-architecture"},"Android SDK architecture"),(0,r.yg)("p",null,"The Android version of ",(0,r.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/concepts/sdk/"},"MetaMask SDK")," enables your users to easily connect with their\nMetaMask Mobile wallet.\nThe ",(0,r.yg)("a",{parentName:"p",href:"#architecture"},"architecture")," and ",(0,r.yg)("a",{parentName:"p",href:"#connection-flow"},"connection flow")," of\nthe Android SDK differs from the other SDK platforms."),(0,r.yg)("admonition",{title:"Get started",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Get started by ",(0,r.yg)("a",{parentName:"li",href:"/snaps-connect-eip-6963/wallet/how-to/use-sdk/mobile/android"},"setting up the SDK in your Android dapp"),"."),(0,r.yg)("li",{parentName:"ul"},"See the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository for advanced use cases."))),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)("p",null,"The following diagram outlines the high-level architecture of the Android SDK:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Android SDK architecture diagram",src:n(18292).A,width:"1512",height:"1122"})),(0,r.yg)("p",null,"The MetaMask Android SDK consists of two components:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"The client SDK"),", imported in the dapp"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"The server SDK"),", an Android Native Module embedded in the MetaMask React Native wallet")),(0,r.yg)("p",null,"The client SDK communicates with the server SDK using\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.android.com/guide/components/processes-and-threads#IPC"},"Interprocess communication (IPC)"),".\nThe JSON-RPC calls are implemented using the\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.android.com/guide/components/aidl"},"Android Interface Definition Language (AIDL)"),".\nCommunication over IPC is encrypted using elliptic curve integrated encryption scheme (ECIES)."),(0,r.yg)("p",null,"Within MetaMask, the wallet (written in React Native) communicates with the Native Module (written\nin Kotlin) using different mechanisms depending on the direction of communication:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Native Module ","\u2192"," React Native")," - The Native Module broadcasts messages as events that the wallet\nlistens to and handles upon receipt."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"React Native ","\u2192"," Native Module")," - The wallet calls the Native Module using the ",(0,r.yg)("inlineCode",{parentName:"li"},"NativeModules")," API,\nwhich enables React Native code to call native Kotlin primitives.")),(0,r.yg)("h2",{id:"connection-flow"},"Connection flow"),(0,r.yg)("p",null,"The following diagram outlines the communication flow between the Android client SDK and server SDK:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Android SDK communication diagram",src:n(51997).A,width:"1512",height:"1334"})),(0,r.yg)("p",null,"The flow is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The dapp, with the SDK installed, initiates communication when a user connects to MetaMask.\nThe dapp deeplinks to MetaMask, and MetaMask sets up the Android Native Module to receive client requests."),(0,r.yg)("li",{parentName:"ol"},"The dapp generates an ECIES public/private key pair.\nThe dapp and MetaMask exchange public keys over IPC."),(0,r.yg)("li",{parentName:"ol"},"The dapp and MetaMask perform end-to-end encrypted JSON-RPC calls.")))}u.isMDXComponent=!0},18292:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sdk-android-architecture-37023c4faf4a70fbda21e5a463252d65.png"},51997:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sdk-android-communication-10dcd9c63acfecb8a3274a0641499424.png"}}]);