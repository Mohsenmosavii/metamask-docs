"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4939],{95012:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var o=s(74848),t=s(28453);const a={description:"Resolve names to addresses and vice versa.",sidebar_position:3,sidebar_custom_props:{flask_only:!0}},i="Custom name resolution",r={id:"features/custom-name-resolution",title:"Custom name resolution",description:"Resolve names to addresses and vice versa.",source:"@site/snaps/features/custom-name-resolution.md",sourceDirName:"features",slug:"/features/custom-name-resolution",permalink:"/zs/initialconnections-feature/snaps/features/custom-name-resolution",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-name-resolution.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Resolve names to addresses and vice versa.",sidebar_position:3,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Security guidelines",permalink:"/zs/initialconnections-feature/snaps/features/custom-evm-accounts/security"},next:{title:"Custom UI",permalink:"/zs/initialconnections-feature/snaps/features/custom-ui/"}},l={},m=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to provide name resolution",id:"1-request-permission-to-provide-name-resolution",level:3},{value:"2. Implement custom name resolution",id:"2-implement-custom-name-resolution",level:3},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"custom-name-resolution",children:"Custom name resolution"}),"\n",(0,o.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,o.jsx)(n.p,{children:"You can implement custom domain resolution and reverse resolution using the following steps."}),"\n",(0,o.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsx)(n.h3,{id:"1-request-permission-to-provide-name-resolution",children:"1. Request permission to provide name resolution"}),"\n",(0,o.jsxs)(n.p,{children:["Request the ",(0,o.jsx)(n.a,{href:"/zs/initialconnections-feature/snaps/reference/permissions#endowmentname-lookup",children:(0,o.jsx)(n.code,{children:"endowment:name-lookup"})})," permission."]}),"\n",(0,o.jsx)(n.p,{children:"For example, to resolve Ethereum Mainnet domains, add the following to your Snap's manifest file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:name-lookup": {\n    "chains": ["eip155:1"]\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"2-implement-custom-name-resolution",children:"2. Implement custom name resolution"}),"\n",(0,o.jsxs)(n.p,{children:["Expose an ",(0,o.jsx)(n.a,{href:"/zs/initialconnections-feature/snaps/reference/entry-points#onnamelookup",children:(0,o.jsx)(n.code,{children:"onNameLookup"})})," entry point, which receives a\n",(0,o.jsx)(n.code,{children:"chainId"})," and either a ",(0,o.jsx)(n.code,{children:"domain"})," or an ",(0,o.jsx)(n.code,{children:"address"}),".\nThe following example implements a very basic resolution from Unstoppable Domains domain names to\nEthereum addresses in ",(0,o.jsx)(n.code,{children:"onNameLookup"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnNameLookupHandler } from "@metamask/snaps-types";\n\nconst UNSTOPPABLE_API_KEY = "xxx";\n\nexport const onNameLookup: OnNameLookupHandler = async (request) => {\n  const { chainId, domain } = request;\n\n  if (domain && chainId === "eip155:1") {\n    const response = await fetch(`https://api.unstoppabledomains.com/resolve/domains/${domain}`, {\n      headers: {\n        accept: "application/json",\n        authorization: `Bearer ${UNSTOPPABLE_API_KEY}`,\n      },\n    });\n    const data = await response.json();\n    const resolvedAddress = data.records["crypto.ETH.address"];\n    if (address) {\n      return {\n        resolvedAddresses: [{ resolvedAddress, protocol: "Unstoppable Domains" }],\n      };\n    }\n  }\n\n  return null;\n};\n'})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/name-lookup",children:(0,o.jsx)(n.code,{children:"@metamask/name-lookup-example-snap"})}),"\npackage for a full example of implementing custom name resolution."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var o=s(96540);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);