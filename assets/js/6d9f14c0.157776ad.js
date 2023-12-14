"use strict";(self.webpackChunkxatom_document=self.webpackChunkxatom_document||[]).push([[491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>C,contentTitle:()=>I,default:()=>A,frontMatter:()=>x,metadata:()=>E,toc:()=>O});var n=r(7462),a=r(7294),o=r(3905),l=r(6010),i=r(2466),u=r(6550),s=r(1980),c=r(7392),p=r(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=y({queryString:r,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=u??c;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var g=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==o&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(T,(0,n.Z)({key:String(t)},e))}const N={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(N.tabItem,n),hidden:r},t)}const x={},I=void 0,E={unversionedId:"Installation",id:"Installation",title:"Installation",description:"To kickstart your journey with xAtom, let's get you set up with the necessary dependencies and fine-tune your TypeScript configuration. It's all about getting your project ready for action, developer-style \ud83e\uddd1\u200d\ud83d\udcbb!",source:"@site/guide/Installation.mdx",sourceDirName:".",slug:"/Installation",permalink:"/docs/guide/Installation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Configuration",permalink:"/docs/guide/Configuration"}},C={},O=[{value:"Create a project",id:"create-a-project",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Project structure rundown",id:"project-structure-rundown",level:3},{value:"Running the development server",id:"running-the-development-server",level:2},{value:"Build the app for production",id:"build-the-app-for-production",level:2}],S={toc:O},P="wrapper";function A(e){let{components:t,...r}=e;return(0,o.kt)(P,(0,n.Z)({},S,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To kickstart your journey with xAtom, let's get you set up with the necessary dependencies and fine-tune your TypeScript configuration. It's all about getting your project ready for action, developer-style \ud83e\uddd1\u200d\ud83d\udcbb!"),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Before we dive in, let's ensure your development environment is all set with the essentials: Node.js (minimum v14.17.0) and your favorite package manager (npm, yarn, or pnpm). ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Install Node.js")),(0,o.kt)("li",{parentName:"ul"},"Prior TypeScript knowledge is recommended ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/"},"Learn More")),(0,o.kt)("li",{parentName:"ul"},"Familiarity with Browser Web APIs and interfaces is necessary. ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"Learn More")))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"create-a-project"},"Create a project"),(0,o.kt)("p",null,"To kickstart a shiny new xAtom project, fire up your terminal and unleash the magic with this command"),(0,o.kt)(w,{mdxType:"Tabs"},(0,o.kt)(j,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"npx create-xatom-app my-site\n"))),(0,o.kt)(j,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"yarn create xatom-app my-site\n"))),(0,o.kt)(j,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm create xatom-app my-site\n")))),(0,o.kt)("h2",{id:"project-structure"},"Project structure"),(0,o.kt)("p",null,"Assuming you named your site ",(0,o.kt)("inlineCode",{parentName:"p"},"my-site"),". you can expect to find the following files neatly generated within a freshly minted ",(0,o.kt)("inlineCode",{parentName:"p"},"my-site/")," directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Directory tree"',title:'"Directory','tree"':!0},"my-site\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 modules\n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 routes\n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 app.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 xatom.json\n")),(0,o.kt)("h3",{id:"project-structure-rundown"},"Project structure rundown"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/dist/")," The treasure trove of production-ready, minified, and transpiled JavaScript code, primed for deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/")," Source directory, the nerve center of your project, housing TypeScript source files where ideas turn into code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/modules/")," Modules directory, the hub for your web app's modules, you can neatly organizing TypeScript files handling business logic such as authentication, forms, and REST APIs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/routes/")," App Route directory, Your web app's navigation center, where you fine-tune routes. Set up protected, public paths, and designate modules for seamless page loading"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/app.js")," This file serves as the entry point, where the intricate mechanics of your application are orchestrated and executed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/package.json")," Your gateway to npm packages. Feel free to install and utilize any npm packages of your choice, expanding your project's capabilities with ease."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/README.md")," Your project's handbook. detailing project information, setup instructions, and essential insights for seamless development and collaboration. make sure to maintain it well"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/tsconfig.json")," TypeScript configuration file, xAtom has you covered with all the essential configurations. Feel free to customize as needed, but we've got the basics covered for you."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/xatom.json")," xAtom configuration file, Your xAtom command center. This configuration file is your ally, allowing you to specify your Webflow project, set the local serving port for xAtom, and fine-tune other crucial settings for your web development adventure.")),(0,o.kt)("h2",{id:"running-the-development-server"},"Running the development server"),(0,o.kt)("p",null,"To experience real-time previews of your changes while editing files, \ud83d\ude80 launch a local development server. This server dynamically serves your Webflow site on localhost, allowing you to test your custom business logic without the need for Webflow publishing. Just make sure you're under your project directory! \ud83d\udcc2 and ",(0,o.kt)("inlineCode",{parentName:"p"},"xatom.json")," is configured ",(0,o.kt)("a",{parentName:"p",href:"#"},"Learn More"),"."),(0,o.kt)(w,{mdxType:"Tabs"},(0,o.kt)(j,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"npm run start\n"))),(0,o.kt)(j,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"yarn start\n"))),(0,o.kt)(j,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm start\n")))),(0,o.kt)("h2",{id:"build-the-app-for-production"},"Build the app for production"),(0,o.kt)("p",null,"To generate production-ready code, \ud83d\udd28 simply utilize the 'build' command. In production mode, your application undergoes automatic bundling and optimization, ensuring it's primed for deployment and peak performance. Don't forget to be in your project directory! \ud83d\udcc2"),(0,o.kt)(w,{mdxType:"Tabs"},(0,o.kt)(j,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"npm run build\n"))),(0,o.kt)(j,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"yarn build\n"))),(0,o.kt)(j,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm build\n")))),(0,o.kt)("p",null,"Your web app's production-grade custom code is ready for deployment ",(0,o.kt)("a",{parentName:"p",href:"#"},"Learn More"),"."))}A.isMDXComponent=!0}}]);