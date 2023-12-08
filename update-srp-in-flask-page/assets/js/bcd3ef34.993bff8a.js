"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[82],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),h=s,d=u["".concat(o,".").concat(h)]||u[h]||m[h]||r;return t?a.createElement(d,i(i({ref:n},l),{},{components:t})):a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=h;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:s,i[1]=p;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},38413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const r={description:"Learn about the Snaps Keyring API.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},i="About the Keyring API",p={unversionedId:"concepts/keyring-api",id:"concepts/keyring-api",title:"About the Keyring API",description:"Learn about the Snaps Keyring API.",source:"@site/snaps/concepts/keyring-api.md",sourceDirName:"concepts",slug:"/concepts/keyring-api",permalink:"/update-srp-in-flask-page/snaps/concepts/keyring-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/keyring-api.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Learn about the Snaps Keyring API.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Snaps design guidelines",permalink:"/update-srp-in-flask-page/snaps/concepts/design-guidelines"},next:{title:"Tutorials",permalink:"/update-srp-in-flask-page/snaps/tutorials"}},o={},c=[{value:"Terminology",id:"terminology",level:2},{value:"Components diagram",id:"components-diagram",level:2},{value:"Keyring interface",id:"keyring-interface",level:2},{value:"Snap account creation flow",id:"snap-account-creation-flow",level:3},{value:"Synchronous signing flow",id:"synchronous-signing-flow",level:3},{value:"Asynchronous signing flow",id:"asynchronous-signing-flow",level:3}],l={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,s.kt)(u,(0,a.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"about-the-keyring-api"},"About the Keyring API"),(0,s.kt)("admonition",{type:"flaskOnly"}),(0,s.kt)("admonition",{title:"API documentation",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"See the ",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/keyring-api/"},"Keyring API reference")," for all the Keyring API methods.")),(0,s.kt)("p",null,"The Snaps Keyring API integrates custom EVM accounts inside MetaMask.\nPreviously, you needed a companion dapp to display custom EVM accounts, such multi-party computation\n(MPC) accounts.\nNow you can display these custom accounts alongside regular MetaMask accounts in the UI:"),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(56517).Z,alt:"Keyring Snap accounts in Metamask UI",width:"360"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/tutorials/custom-evm-accounts"},"Create a Keyring Snap to integrate custom EVM accounts in MetaMask."),"\nYour dapp can then use the ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," MetaMask\nJSON-RPC API method to connect to the custom accounts, and seamlessly interact with them using other\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC methods"),"."),(0,s.kt)("h2",{id:"terminology"},"Terminology"),(0,s.kt)("p",null,"The following terminology is used across the Keyring API:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Blockchain account"),": An object in a single blockchain, representing an account, with its\nbalance, nonce, and other account details."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Request"),": A request from a dapp to MetaMask."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Keyring account"),": An account model that represents one or more blockchain accounts."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Keyring Snap"),": A Snap that implements the Keyring API."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Keyring request"),": A request from MetaMask to a Keyring Snap.\nMetaMask wraps the original request sent by the dapp and adds some metadata to it.")),(0,s.kt)("h2",{id:"components-diagram"},"Components diagram"),(0,s.kt)("p",null,"The following diagram shows the components you encounter when interacting with accounts managed by a\nKeyring Snap:"),(0,s.kt)("p",{align:"center"},(0,s.kt)("mermaid",{value:"graph TD\n  User --\x3e|Starts a request| Dapp\n  Dapp --\x3e|Submits a request| MetaMask\n  MetaMask --\x3e|Submits requests<br/>and manages accounts| Snap\n  Site[Snap UI] --\x3e|Manages requests<br/>and accounts| Snap\n  User -.->|Uses for<br/>Snap-specific logic| Site"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"User"),": The user interacting with the Snap, the dapp, and MetaMask."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Dapp"),": The dapp requesting an action to be performed on an account."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"MetaMask"),": The wallet the dapp connects to.\nMetaMask routes requests to the Keyring Snaps and lets the user perform some level of account management."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Snap"),": A Snap that implements the Keyring API to manage the user's accounts, and to handle\nrequests that use these accounts."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Snap UI"),": The Snap's UI component that allows the user to interact with the Snap to perform\ncustom operations on accounts and requests.")),(0,s.kt)("h2",{id:"keyring-interface"},"Keyring interface"),(0,s.kt)("p",null,"The first step to create a Keyring Snap is to implement the\n",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/keyring-api/type-aliases/Keyring"},(0,s.kt)("inlineCode",{parentName:"a"},"Keyring"))," interface.\nThis interface describes all the methods necessary to make your custom EVM accounts work inside\nMetaMask with your own logic."),(0,s.kt)("p",null,"The following sections describe the different flows that the ",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," interface handles."),(0,s.kt)("h3",{id:"snap-account-creation-flow"},"Snap account creation flow"),(0,s.kt)("p",null,"The first interaction between users and the Keyring Snap is the Snap account creation process.\nThe flow looks like the following:"),(0,s.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap UI\n\nalt Optional\n  User ->>+ MetaMask: Add new Snap account\n  MetaMask ->> MetaMask: Display suggested Snaps\n  User ->> MetaMask: Select Snap\n  MetaMask ->> Site: Open in a new tab\n  deactivate MetaMask\nend\n\nalt If the Snap is not installed yet\n  Site ->>+ MetaMask: Install Snap\n  MetaMask ->> MetaMask: Display permissions dialog\n  User ->> MetaMask: Approve permissions\n  MetaMask --\x3e>- Site: OK\nend\n\nUser ->>+ Site: Create new account\nSite ->> Site: Custom logic to create account\nSite ->>+ Snap: keyring_createAccount(options)\nSnap ->> Snap: Custom logic to create account\nSnap ->>+ MetaMask: snap_manageAccounts(\"event:accountCreated\", account)\nUser ->> MetaMask: Approve account creation\nMetaMask --\x3e>- Snap: OK\nSnap --\x3e>- Site: OK\nSite --\x3e>- User: Done"}),(0,s.kt)("p",null,"The MetaMask account selection modal has an option called ",(0,s.kt)("strong",{parentName:"p"},"Add Snap account"),":"),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(48061).Z,alt:"Add Snap account option",width:"360"})),(0,s.kt)("p",null,"This option shows a list of Keyring Snaps.\nEach Snap redirects the user to the companion dapp that contains all the UI to configure and manage the Snap."),(0,s.kt)("p",null,"The dapp presents a custom UI allowing the user to configure their custom EVM account.\nThe dapp uses the ",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#createaccount"},(0,s.kt)("inlineCode",{parentName:"a"},"createAccount")),"\nmethod of the ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),", which calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," interface's method of the same name.\nYou can find an example of this in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/blob/d3f7f0156c59059c995fea87f90a3d0ad3a4c135/packages/site/src/pages/index.tsx#L136"},"example Keyring Snap companion dapp"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"createAccount")," method of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," interface creates the account based on the parameters passed\nto the method.\nThe Snap keeps track of the accounts that it creates using ",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/rpc-api#snap_managestate"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_manageState")),".\nOnce the Snap has created an account, it notifies MetaMask using the\n",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/rpc-api#createaccount"},(0,s.kt)("inlineCode",{parentName:"a"},"createAccount"))," sub-method of ",(0,s.kt)("inlineCode",{parentName:"p"},"snap_manageAccounts"),".\nYou can find an example of this process in the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/blob/d3f7f0156c59059c995fea87f90a3d0ad3a4c135/packages/snap/src/keyring.ts#L61"},"example companion dapp"),"."),(0,s.kt)("p",null,"Once the Snap has created an account, that account can be used to sign messages and transactions."),(0,s.kt)("h3",{id:"synchronous-signing-flow"},"Synchronous signing flow"),(0,s.kt)("p",null,"If the Keyring Snap can sign transactions directly, it implements a simple synchronous signing flow.\nIf the Snap needs a third party such as a hardware key or a second account's signature (for example,\nin a threshold signature scheme), it implements an ",(0,s.kt)("a",{parentName:"p",href:"#asynchronous-signing-flow"},"asynchronous signing flow"),".\nThe synchronous flow looks like the following:"),(0,s.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\n  autonumber\n\n  actor User\n  participant Dapp\n  participant MetaMask\n  participant Snap\n\n  User ->>+ Dapp: Create new sign request\n  Dapp ->>+ MetaMask: personal_sign(request)\n  User -) MetaMask: Approve operation\n\n  MetaMask ->>+ Snap: keyring_submitRequest(request)\n  Snap ->> Snap: Add request to Snap's state\n  Snap ->> Snap: signature = signRequest(request)\n  Snap --\x3e>- MetaMask: signature\n\n  MetaMask --\x3e>- Dapp: signature\n\n  Dapp --\x3e>- User: Signature"}),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring"},"example Keyring Snap companion dapp")," for a\nfull example."),(0,s.kt)("p",null,"The flow starts when a dapp calls a ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC method"),", or\nwhen the user initiates a new funds transfer from the MetaMask UI.\nAt that point, MetaMask detects that this interaction is requested for an account controlled by the\nKeyring Snap."),(0,s.kt)("p",null,"After the user approves the transaction in the UI, MetaMask calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"submitRequest")," method of the\n",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," interface.\n",(0,s.kt)("inlineCode",{parentName:"p"},"submitRequest")," receives the original RPC request, and returns a\n",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/keyring-api/variables/SubmitRequestResponseStruct"},(0,s.kt)("inlineCode",{parentName:"a"},"SubmitRequestResponse")),"\nwith ",(0,s.kt)("inlineCode",{parentName:"p"},"pending")," set to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"result")," set to the requested signature."),(0,s.kt)("admonition",{title:"important",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If the Keyring Snap receives an\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," request, it should treat it like an\n",(0,s.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_signTransaction"))," request.\nThat is, the Snap is responsible for providing the signature in the response, and MetaMask is\nresponsible for broadcasting the transaction.")),(0,s.kt)("h3",{id:"asynchronous-signing-flow"},"Asynchronous signing flow"),(0,s.kt)("p",null,"If the Keyring Snap implements a complex scheme such as threshold signing, it implements an\nasynchronous signing flow with more ",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," methods.\nThe asynchronous flow looks like the following:"),(0,s.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 20,\n      'width': 200\n    }\n  }\n}%%\n\nsequenceDiagram\n  autonumber\n\n  actor User\n  participant Dapp\n  participant MetaMask\n  participant Snap\n  participant Site as Snap's UI\n\n  User ->>+ Dapp: Create new sign request\n  Dapp ->>+ MetaMask: personal_sign(request)\n  User -) MetaMask: Approve operation\n\n  MetaMask ->>+ Snap: keyring_submitRequest(request)\n  Snap ->> Snap: Add request to Snap's state\n  Snap --\x3e>- MetaMask: OK\n  deactivate MetaMask\n\n  loop Polling\n    Site ->>+ Snap: keyring_listRequests()\n    Snap --\x3e>- Site: requests\n\n    alt There is a pending request\n\t  User ->>+ Site: Approve request\n      Site ->>+ Snap: keyring_approveRequest(id)\n      Snap ->> Snap: signature = signRequest(request)\n      Snap ->>+ MetaMask: snap_manageAccounts(\"submit\", id, signature)\n\n\t  MetaMask --\x3e> Dapp: signature\n\t  MetaMask --\x3e>- Snap: OK\n\t  Snap --\x3e>- Site: OK\n\t  deactivate Site\n\n      Dapp --\x3e>- User: Signature\n    end\n  end"}),(0,s.kt)("p",null,"The flow starts the same way as the ",(0,s.kt)("a",{parentName:"p",href:"#synchronous-signing-flow"},"synchronous flow"),": a dapp or user\ninitiates a request to sign a transaction or arbitrary data.\nAfter approval, the ",(0,s.kt)("inlineCode",{parentName:"p"},"submitRequest")," method of the Snap's ",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," interface is called."),(0,s.kt)("p",null,"Since the Snap doesn't answer the request directly, it stores the pending request in its internal\nstate using ",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/rpc-api#snap_managestate"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThis list of pending requests is returned when the ",(0,s.kt)("inlineCode",{parentName:"p"},"listRequests")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"getRequest")," methods of the\n",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," interface are called."),(0,s.kt)("p",null,"After storing the pending request, the Snap creates a pop-up using\n",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/rpc-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," instructing the user to go to the companion\ndapp's URL."),(0,s.kt)("p",null,"The dapp lists the Snap's pending requests using an RPC call facilitated by the\n",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#listrequests"},(0,s.kt)("inlineCode",{parentName:"a"},"listRequests")),"\nmethod of the ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),".\nThe user can then act on those requests using whatever process applies to the Snap."),(0,s.kt)("p",null,"Once the signing process completes, the companion dapp resolves the request using the\n",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#approverequest"},(0,s.kt)("inlineCode",{parentName:"a"},"approveRequest")),"\nmethod of the ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),", which calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"Keyring")," interface's method of the same name.\nThis method receives the request's ID and final result."),(0,s.kt)("p",null,"When ",(0,s.kt)("inlineCode",{parentName:"p"},"approveRequest")," is called, it can resolve the pending request by using the\n",(0,s.kt)("a",{parentName:"p",href:"/update-srp-in-flask-page/snaps/reference/rpc-api#submitresponse"},(0,s.kt)("inlineCode",{parentName:"a"},"submitResponse"))," sub-method of ",(0,s.kt)("inlineCode",{parentName:"p"},"snap_manageAccounts"),"."))}m.isMDXComponent=!0},56517:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/accounts-ui-070dca33037f5063a08753cf792b8cb3.png"},48061:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/add-snap-account-dc3f67405f09d799d958d9829dd2189d.png"}}]);