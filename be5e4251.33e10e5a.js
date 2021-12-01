(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),o=(n(0),n(218)),i={id:"whats-new",title:"What's new in 2.0",sidebar_label:"What's new in 2.0"},s={unversionedId:"whats-new",id:"version-2.0.0/whats-new",isDocsHomePage:!1,title:"What's new in 2.0",description:"RNGH2 introduces a new way of creating gestures. Instead of creating a gesture handler component for every gesture you want to create, you just need to create a GestureDetector component and assign to it all the gestures you want it to recognize. It is also designed to work seamlessly with Reanimated 2 and it will automatically detect if it is installed, and start using it if it is.",source:"@site/versioned_docs/version-2.0.0/whats-new.md",slug:"/whats-new",permalink:"/react-native-gesture-handler/docs/whats-new",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-2.0.0/whats-new.md",version:"2.0.0",sidebar_label:"What's new in 2.0",sidebar:"version-2.0.0/docs",previous:{title:"Manual gestures",permalink:"/react-native-gesture-handler/docs/manual-gestures/manual-gestures"},next:{title:"Running Example App",permalink:"/react-native-gesture-handler/docs/example"}},u=[{value:"Interoperability with gesture handlers",id:"interoperability-with-gesture-handlers",children:[]}],l={rightToc:u};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RNGH2 introduces a new way of creating gestures. Instead of creating a gesture handler component for every gesture you want to create, you just need to create a ",Object(o.b)("inlineCode",{parentName:"p"},"GestureDetector")," component and assign to it all the gestures you want it to recognize. It is also designed to work seamlessly with ",Object(o.b)("inlineCode",{parentName:"p"},"Reanimated 2")," and it will automatically detect if it is installed, and start using it if it is.\nYou can create gestures using the ",Object(o.b)("inlineCode",{parentName:"p"},"Gesture")," object and methods it provides, and configure them in the builder-like pattern. If you want to specify behavior between the gestures instead of using ",Object(o.b)("inlineCode",{parentName:"p"},"waitFor")," and ",Object(o.b)("inlineCode",{parentName:"p"},"simultaneousGestures")," you can use the new system of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./gesture-composition"}),"gesture composition"),".\nAlong the new API, version 2.0 brings one of the most requested features: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./manual-gestures/manual-gestures"}),"pointer events and manual gestures"),". Thanks to great work done by the Reanimated team, we were able to provide synchronous communication between gestures and their native implementation using worklets. This allows to manage gesture state from the JS without risking race-conditions."),Object(o.b)("h3",{id:"interoperability-with-gesture-handlers"},"Interoperability with gesture handlers"),Object(o.b)("p",null,"The new API with gestures is somewhat compatible with the old gesture handlers. Unfortunately you cannot use the new gesture composing with gesture handlers, however you can still mark relations using refs. If you want to make a gesture handler wait for (or simultaneous with) a gesture, simply use withRef method on the gesture to set the ref object and pass it to the appropriate property on the gesture handler."),Object(o.b)("p",null,"Similarly, if you want to make a gesture simultaneous with (or wait for failure of) a gesture handler, set the ref prop of the gesture handler and pass the same ref to the simultaneousWithExternalGesture or requireExternalGestureToFail method on the gesture object."),Object(o.b)("p",null,"This should allow you to migrate your codebase from the gesture handlers to gestures smoothly and at your own pace. Just keep in mind that the gesture handlers cannot have the GestureDetector as their direct child, as it's a functional component."))}c.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);