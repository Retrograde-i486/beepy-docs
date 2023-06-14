"use strict";(self.webpackChunkbeepberry=self.webpackChunkbeepberry||[]).push([[434],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},i="RGB LED",l={unversionedId:"firmware/rgb-led",id:"firmware/rgb-led",title:"RGB LED",description:"The RGB LED is connected to the RP2040, and can be controlled by the Pi via i2c by writing to specific registers.",source:"@site/docs/firmware/rgb-led.md",sourceDirName:"firmware",slug:"/firmware/rgb-led",permalink:"/docs/firmware/rgb-led",draft:!1,editUrl:"https://github.com/sqfmi/beepberry-docs/blob/main/docs/firmware/rgb-led.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Power Management & Battery",permalink:"/docs/firmware/power"},next:{title:"Hardware",permalink:"/docs/category/hardware"}},c={},s=[{value:"Examples",id:"examples",level:2},{value:"Set RGB color",id:"set-rgb-color",level:3},{value:"Command-line Example",id:"command-line-example",level:4},{value:"Blink on trigger",id:"blink-on-trigger",level:3}],p={toc:s},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rgb-led"},"RGB LED"),(0,o.kt)("p",null,"The RGB LED is connected to the RP2040, and can be controlled by the Pi via i2c by writing to specific registers."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"set-rgb-color"},"Set RGB color"),(0,o.kt)("p",null,"To get/set the LED color on the Beepberry, you can read/write to the following registers over I2C. The values can be 0x00 - 0xFF."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REG_LED_R = 0x21\nREG_LED_G = 0x22\nREG_LED_B = 0x23\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: When writing to the registers, mask address with 0x80 e.g. to read use address 0x21, to write use address 0xA1")),(0,o.kt)("p",null,"To turn the LED on/off, you can write to the register ",(0,o.kt)("inlineCode",{parentName:"p"},"0x20"),". A value of 0 turns the LED off, while any other value turns it on."),(0,o.kt)("h4",{id:"command-line-example"},"Command-line Example"),(0,o.kt)("p",null,"First release the I2C bus from the keyboard driver, then set the RGB values to red and turn the LED on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo modprobe -r bbqX0kbd\nsudo i2cset -y 1 0x1F 0xA1 0xFF\nsudo i2cset -y 1 0x1F 0xA2 0x00\nsudo i2cset -y 1 0x1F 0xA3 0x00\nsudo i2cset -y 1 0x1F 0xA0 0xFF\n")),(0,o.kt)("h3",{id:"blink-on-trigger"},"Blink on trigger"),(0,o.kt)("p",null,"To Do"))}u.isMDXComponent=!0}}]);