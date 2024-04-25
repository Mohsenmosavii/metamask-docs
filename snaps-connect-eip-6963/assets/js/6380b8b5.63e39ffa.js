"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4151],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(96540),r=t(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t},a)}},4865:(e,a,t)=>{t.d(a,{A:()=>m});var n=t(58168),r=t(96540),s=t(20053),o=t(23104),i=t(47751),l=t(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:a,block:t,selectedValue:i,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),m=e=>{const a=e.currentTarget,t=d.indexOf(a),n=c[t].value;n!==i&&(p(a),l(n))},h=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>d.push(e),onKeyDown:h,onClick:m},o,{className:(0,s.A)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":i===a})}),t??a)})))}function d(e){let{lazy:a,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function p(e){const a=(0,i.u)(e);return r.createElement("div",{className:(0,s.A)("tabs-container",u.tabList)},r.createElement(c,(0,n.A)({},e,a)),r.createElement(d,(0,n.A)({},e,a)))}function m(e){const a=(0,l.A)();return r.createElement(p,(0,n.A)({key:String(a)},e))}},47751:(e,a,t)=>{t.d(a,{u:()=>p});var n=t(96540),r=t(56347),s=t(57485),o=t(31682),i=t(89466);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function u(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??l(t);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function c(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const o=(0,r.W6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(o.location.search);a.set(i,e),o.replace({...o.location,search:a.toString()})}),[i,o])]}function p(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[p,m]=d({queryString:t,groupId:r}),[h,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,i.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=p??h;return c({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),g(e)}),[m,g,s]),tabValues:s}}},35586:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=t(58168),r=(t(96540),t(15680)),s=t(4865),o=t(19365);const i={sidebar_position:4,sidebar_label:"Enable human-readable addresses",description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",tags:["Unity SDK"]},l="Enable human-readable addresses in Unity",u={unversionedId:"how-to/use-sdk/gaming/unity/dweb",id:"how-to/use-sdk/gaming/unity/dweb",title:"Enable human-readable addresses in Unity",description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",source:"@site/wallet/how-to/use-sdk/gaming/unity/dweb.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/dweb",permalink:"/snaps-connect-eip-6963/wallet/how-to/use-sdk/gaming/unity/dweb",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/dweb.md",tags:[{label:"Unity SDK",permalink:"/snaps-connect-eip-6963/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Enable human-readable addresses",description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract provider",permalink:"/snaps-connect-eip-6963/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},next:{title:"Unreal Engine (coming soon)",permalink:"/snaps-connect-eip-6963/wallet/how-to/use-sdk/gaming/unreal-engine"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize the integration wrapper",id:"initialize-the-integration-wrapper",level:2},{value:"Convert a name to an Ethereum address",id:"convert-a-name-to-an-ethereum-address",level:2},{value:"Convert an Ethereum address to a name",id:"convert-an-ethereum-address-to-a-name",level:2},{value:"Example",id:"example",level:2}],p={toc:d},m="wrapper";function h(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"enable-human-readable-addresses-in-unity"},"Enable human-readable addresses in Unity"),(0,r.yg)("p",null,"You can integrate the ",(0,r.yg)("a",{parentName:"p",href:"https://decentraweb.org/"},"Decentraweb")," name resolver into your Unity game\nwith ",(0,r.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/how-to/use-sdk/gaming/unity/"},"MetaMask SDK")," installed.\nDecentraweb maps human-readable names to machine-readable identifiers, such as Ethereum addresses.\nIntegrating Decentraweb into your game allows users to interact with addresses in a more user-friendly way."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/snaps-connect-eip-6963/wallet/how-to/use-sdk/gaming/unity/"},"MetaMask SDK set up")," in your Unity game."),(0,r.yg)("h2",{id:"initialize-the-integration-wrapper"},"Initialize the integration wrapper"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"newDWebAPIWrapper()")," method to configure and initialize a C# integration wrapper, which\nacts as a bridge between the MetaMask Unity SDK and the Decentraweb name resolver API.\nThis method initializes the wrapper with necessary configuration parameters, including\nauthentication details required to interact with the Decentraweb name resolver API."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"// Initialize the wrapper.\nvar apiWrapper = newDWebAPIWrapper();\n")),(0,r.yg)("h2",{id:"convert-a-name-to-an-ethereum-address"},"Convert a name to an Ethereum address"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ResolveNameAsync(name)")," method to convert a human-readable name to the corresponding\nEthereum address."),(0,r.yg)("p",null,"The C# integration wrapper translates the request into a format that the Decentraweb name resolver\nAPI can understand, and sends the translated request to the name resolver using a standard HTTP POST request."),(0,r.yg)("p",null,"The name resolver processes the request and responds with the Ethereum address."),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Method",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'// Initialize the wrapper.\nvar apiWrapper = newDWebAPIWrapper();\n\n// Get the user\'s human-readable name.\nvar name = "user.dweb";\n\n// Resolve the name to an Ethereum address.\nvar address = await apiWrapper.ResolveNameAsync(name);\n'))),(0,r.yg)(o.A,{value:"JSON response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "result": "0xcB3E45F337Dd3Beeba98F5F9F9A16e9cD152cC86"\n}\n')))),(0,r.yg)("h2",{id:"convert-an-ethereum-address-to-a-name"},"Convert an Ethereum address to a name"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"GetNameAsync(address)")," method to convert an Ethereum address to the corresponding\nhuman-readable name."),(0,r.yg)("p",null,"The C# integration wrapper translates the request into a format the Unity SDK can understand, and\nsends the translated request to the SDK."),(0,r.yg)("p",null,"The SDK processes the request and responds with the human-readable name."),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Method",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'// Initialize the wrapper.\nvar apiWrapper = newDWebAPIWrapper();\n\n// Get the user\'s address.\nvar address = "0xcB3E45F337Dd3Beeba98F5F9F9A16e9cD152cC86"\n\n// Resolve the address to a human-readable name.\nvar name = await apiWrapper.GetNameAsync(address)\n'))),(0,r.yg)(o.A,{value:"JSON response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "result": {\n    "name": "lordsats",\n    "confirmed": true\n  }\n}\n')))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The following is an example of using the Unity SDK Decentraweb integration to create a transaction:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'public async Task FormTransactionAsync()\n{\n  // Initialize the wrapper.\n  var apiWrapper = new DWebAPIWrapper();\n\n  // Get the user\'s human-readable name.\n  var name = "user.dweb";\n\n  // Resolve the name to an Ethereum address.\n  var address = await apiWrapper.ResolveNameAsync(name);\n\n  // Form the transaction.\n  var transaction = new Transaction\n  {\n    To = address,\n    Value = 1.0m,\n    Gas = 21000\n  };\n\n  // The rest of the transaction formation code.\n}\n')))}h.isMDXComponent=!0}}]);