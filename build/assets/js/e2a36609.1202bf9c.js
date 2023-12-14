"use strict";(self.webpackChunkxatom_document=self.webpackChunkxatom_document||[]).push([[4535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,g=m["".concat(s,".").concat(h)]||m[h]||d[h]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"reference/auth/WFAuth",id:"reference/auth/WFAuth",title:"WFAuth",description:"The WFAuth class is your go-to authentication blueprint for web applications within the xAtom Framework. With WFAuth, you gain access to a world of possibilities:",source:"@site/docs/reference/auth/WFAuth.mdx",sourceDirName:"reference/auth",slug:"/reference/auth/WFAuth",permalink:"/docs/reference/auth/WFAuth",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/auth/WFAuth.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WFRoute",permalink:"/docs/reference/routing/WFRoute"},next:{title:"WFAuthMiddleware",permalink:"/docs/reference/auth/WFAuthMiddleware"}},s={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Syntax",id:"syntax",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>setUser(user)</code>",id:"setuseruser",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Parameters",id:"set-user-parameters",level:4},{value:"<code>getUser()</code>",id:"getuser",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"<code>setRole(role)</code>",id:"setrolerole",level:3},{value:"Example",id:"example",level:4},{value:"Syntax",id:"syntax-3",level:4},{value:"Parameters",id:"set-role-parameters",level:4},{value:"<code>getRole()</code>",id:"getrole",level:3},{value:"Example",id:"example-1",level:4},{value:"Syntax",id:"syntax-4",level:4},{value:"<code>setConfig(config)</code>",id:"setconfigconfig",level:3},{value:"Example",id:"example-2",level:4},{value:"Syntax",id:"syntax-5",level:4},{value:"Parameters",id:"set-role-parameters",level:4},{value:"<code>getConfig()</code>",id:"getconfig",level:3},{value:"Example",id:"example-3",level:4},{value:"Syntax",id:"syntax-6",level:4},{value:"<code>isLoggedIn()</code>",id:"isloggedin",level:3},{value:"Example",id:"example-4",level:4},{value:"Syntax",id:"syntax-7",level:4},{value:"<code>logout()</code>",id:"logout",level:3},{value:"Example",id:"example-5",level:4},{value:"Syntax",id:"syntax-8",level:4}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth")," class is your go-to authentication blueprint for web applications within the xAtom Framework. With ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth"),", you gain access to a world of possibilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Role-Based Support:")," Seamlessly manage user privileges based on roles. \ud83d\udc65"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configure User Information:")," Easily set and manage user details such as email and display name. \ud83d\udd27"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multiple Instances:")," Create and manage multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"WFAuth")," instances for versatility. \ud83d\udd04"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexible and Extensible:")," Easily adapt and extend ",(0,r.kt)("inlineCode",{parentName:"li"},"WFAuth")," to meet your project's unique requirements. \ud83d\udee0\ufe0f")),(0,r.kt)("p",null,"Empower your web application with the flexibility and security of ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth"),"! \ud83d\udcaa\ud83d\udd10"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialization"),": To begin using the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth")," class, follow these steps:"),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"pro-tip"},"Pro Tip"),(0,r.kt)("p",{parentName:"blockquote"},"It's considered best practice to configure with types. these enable TypeScript validation in your favorite IDE or during transpilation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'import { WFAuth } from "@xatom/core";\n\n// Initialize the WFAuth instance with user data, roles, and configuration\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set the default role after initialization\nuserAuth.setRole("GUEST");\n\n// Check if the user is logged in (should return false)\nconsole.log(userAuth.isLoggedIn()); // false\n\n// Set user information\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Configure the user\'s token\nuserAuth.setConfig({\n  token: "XYZ",\n});\n\n// Change the user\'s role\nuserAuth.setRole("USER");\n\n// Check if the user is logged in (should return true)\nconsole.log(userAuth.isLoggedIn()); // true\n\n// Log the user out\nuserAuth.logout();\n\n// Check if the user is logged in after logout (should return false)\nconsole.log(userAuth.isLoggedIn()); // false\n')),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"WFAuth<U = WFUserDefaultType, R = WFUserDefaultRole, C = WFAuthConfig>(config?:C);\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth")," class provides an extensive set of properties and methods to enhance the security of your web application:"),(0,r.kt)("h3",{id:"setuseruser"},(0,r.kt)("inlineCode",{parentName:"h3"},"setUser(user)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setUser")," method allows you to set user information, such as the user's name and email address, as needed for your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n')),(0,r.kt)("h4",{id:"syntax-1"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"setUser(user: U): void\n")),(0,r.kt)("h4",{id:"set-user-parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WFUserDefaultType")),(0,r.kt)("td",{parentName:"tr",align:null},"An object containing user information.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getuser"},(0,r.kt)("inlineCode",{parentName:"h3"},"getUser()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getUser")," method allows you to retrieve user information stored within the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Retrieve user information using the `getUser` method.\nconst userInfo = userAuth.getUser();\nconsole.log(userInfo); // {fullName: "John Doe", email: "john@doe.com"}\n')),(0,r.kt)("h4",{id:"syntax-2"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getUser(): U\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setrolerole"},(0,r.kt)("inlineCode",{parentName:"h3"},"setRole(role)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setRole")," method allows you to set the user's role, specifying whether they are a ",(0,r.kt)("inlineCode",{parentName:"p"},"GUEST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"USER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VIP"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN"),". enabling role-based access control in your application."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Set the user\'s role to "USER"\nuserAuth.setRole("USER");\n')),(0,r.kt)("h4",{id:"syntax-3"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"setRole(role: R): void\n")),(0,r.kt)("h4",{id:"set-role-parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WFUserDefaultRole")),(0,r.kt)("td",{parentName:"tr",align:null},"User role")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getrole"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRole()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getRole")," method allows you to retrieve user role information stored within the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth")," instance."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Set the user\'s role to "USER"\nuserAuth.setRole("USER");\n\n// Retrieve user role information using the `getRole` method.\nconst userRole = userAuth.getRole();\nconsole.log(userRole); // USER\n\n// Set the user\'s role to "GUEST"\nuserAuth.setRole("GUEST");\n\n// Retrieve user role information using the `getRole` method.\nconst newUserRole = userAuth.getRole();\nconsole.log(newUserRole); // GUEST\n')),(0,r.kt)("h4",{id:"syntax-4"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getRole(): R\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setconfigconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"setConfig(config)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setConfig")," method allows you to set user extra configuration, such as tokens, refresh tokens, or current user status, based on your requirements."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Set user config information using the `setConfig` method.\nuserAuth.setConfig({\n  token: "xyz",\n});\n')),(0,r.kt)("h4",{id:"syntax-5"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"setConfig(config: C): void\n")),(0,r.kt)("h4",{id:"set-role-parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WFAuthConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"User config object")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"getConfig()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getConfig")," method allows you to retrieve configuration information stored within the ",(0,r.kt)("inlineCode",{parentName:"p"},"WFAuth")," instance."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Set user config information using the `setConfig` method.\nuserAuth.setConfig({\n  token: "xyz",\n});\n\n// Retrieve user config information using the `getConfig` method.\nconst config = userAuth.getConfig();\nconsole.log(config); // {token:"xyz"}\n')),(0,r.kt)("h4",{id:"syntax-6"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getConfig(): C\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isloggedin"},(0,r.kt)("inlineCode",{parentName:"h3"},"isLoggedIn()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoggedIn")," method allows you to check whether a user is currently logged in and if user data is stored."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Check if the user is initially logged in (should be false)\nconst isLoggedIn = userAuth.isLoggedIn();\nconsole.log(isLoggedIn); // false\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Set the user\'s role to "USER"\nuserAuth.setRole("USER");\n\n// Check if the user is now logged in (should be true)\nconst isNowLoggedIn = userAuth.isLoggedIn();\nconsole.log(isNowLoggedIn); // true\n')),(0,r.kt)("h4",{id:"syntax-7"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"isLoggedIn(): boolean\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"logout"},(0,r.kt)("inlineCode",{parentName:"h3"},"logout()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method allows you to clear all stored information about the user, including user data, user config, and user role."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example"',title:'"Example"'},'// Initialize a WFAuth instance\nconst userAuth = new WFAuth<\n  {\n    fullName: string;\n    email: string;\n  },\n  "GUEST" | "USER",\n  {\n    token: string;\n  }\n>();\n\n// Set user information using the `setUser` method.\nuserAuth.setUser({\n  fullName: "John Doe",\n  email: "john@doe.com",\n});\n\n// Set the user\'s role to "USER"\nuserAuth.setRole("USER");\n\n// Check if the user is initially logged in (should be true)\nconst isLoggedIn = userAuth.isLoggedIn();\nconsole.log(isLoggedIn); // true\n\n// Log the user out\nuserAuth.logout();\n\n// Check if the user is now logged out (should be false)\nconst isNowLoggedIn = userAuth.isLoggedIn();\nconsole.log(isNowLoggedIn); // false\n')),(0,r.kt)("h4",{id:"syntax-8"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"logout(): void\n")))}d.isMDXComponent=!0}}]);