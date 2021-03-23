!function(e){var t={};function a(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(l,r,function(t){return e[t]}.bind(null,r));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,a){var l;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var a=t.length,l=0;l<a;++l)r(e,t[l])}e.prototype=Object.create(null);var a={}.hasOwnProperty;var l=/\s+/;function r(e,r){if(r){var n=typeof r;"string"===n?function(e,t){for(var a=t.split(l),r=a.length,n=0;n<r;++n)e[a[n]]=!0}(e,r):Array.isArray(r)?t(e,r):"object"===n?function(e,t){for(var l in t)a.call(t,l)&&(e[l]=!!t[l])}(e,r):"number"===n&&function(e,t){e[t]=!0}(e,r)}}return function(){for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];var n=new e;t(n,l);var o=[];for(var i in n)n[i]&&o.push(i);return o.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()},function(e,t,a){var l;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)&&l.length){var o=r.apply(null,l);o&&e.push(o)}else if("object"===n)for(var i in l)a.call(l,i)&&l[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()},function(e,t){var a=wp.i18n.__;wp.blocks.registerBlockStyle("core/group",{name:"flexible-row",label:a("Flexible Row")})},function(e,t){var a=wp.i18n.__;wp.blocks.registerBlockStyle("core/heading",{name:"mega-title",label:a("Mega Title")})},function(e,t){var a=wp.i18n.__;wp.blocks.registerBlockStyle("core/image",{name:"framed",label:a("Framed")})},function(e,t){var a=wp.i18n.__;wp.blocks.registerBlockStyle("core/column",[{name:"padded",label:a("Padded"),isDefault:!0},{name:"tight",label:a("Tight")}])},,,function(e,t,a){"use strict";a.r(t);var l=a(0),r=wp.i18n.__,n=wp.element.Fragment,o=wp.blocks.registerBlockType,i=wp.components,c=i.Button,s=i.Panel,u=i.PanelBody,m=i.PanelRow,d=wp.blockEditor,b=d.RichText,p=d.InspectorControls,g=d.MediaUpload,f=d.ColorPalette,v=d.URLInput,h=(o("tastydigital/splash-box",{title:r("Splash CTA"),description:r("Big pic media, logo and link."),icon:"cover-image",category:"layout",styles:[{name:"default",label:r("Default"),isDefault:!0},{name:"bordered",label:r("Bordered")}],attributes:{title:{type:"string",source:"text",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img.splash-image",attribute:"src"},mediaALT:{type:"string",source:"attribute",selector:"img.splash-image",attribute:"alt"},bgColor:{type:"string",default:"#002A3D"},url:{type:"string",source:"attribute",attribute:"href",selector:"a"}},example:{attributes:{title:r("Tasty Glutenberg","tastydigital"),mediaURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg"}},supports:{align:["wide","full"],html:!1},edit:function(e){var t=e.className,a=e.attributes,o=a.title,i=a.mediaID,d=a.mediaURL,h=a.mediaALT,y=a.bgColor,O=a.url,j=e.setAttributes;return Object(l.createElement)(n,null,Object(l.createElement)(p,null,Object(l.createElement)(s,null,Object(l.createElement)(u,{title:"Splash CTA Block Settings",initialOpen:!0},Object(l.createElement)(m,null,r("Choose background colour")),Object(l.createElement)(m,null,Object(l.createElement)(f,{value:y,onChange:function(e){j({bgColor:e})}})),Object(l.createElement)(m,null,r("Choose link destination")),Object(l.createElement)(m,null,Object(l.createElement)(v,{className:"url-input",value:O,onChange:function(e,t){return j({url:e,titleText:t&&t.title||"Click here"})}}))))),Object(l.createElement)("div",{className:t},Object(l.createElement)("div",{className:"splash-holder"},Object(l.createElement)("div",{className:"splash-image"},Object(l.createElement)(g,{onSelect:function(e){var t=void 0!==e.sizes["homepage-splash"]?e.sizes["homepage-splash"].url:e.url;j({mediaURL:t,mediaID:e.id,mediaALT:e.alt})},allowedTypes:"image",value:i,render:function(e){var t=e.open;return Object(l.createElement)(c,{className:i?"image-button media-button":"button button-large",onClick:t},i?Object(l.createElement)("img",{id:"image-"+i,src:d,alt:h}):r("Upload Image","tastydigital"))}}))),Object(l.createElement)("div",{className:"overlay",style:{backgroundColor:y+"e9"}},Object(l.createElement)(b,{tagName:"h2",placeholder:r("Call to action text","tastydigital"),value:o,onChange:function(e){j({title:e})},allowedFormats:[]}))))},save:function(e){var t=e.className,a=e.attributes,r=a.title,n=(a.mediaID,a.mediaURL),o=a.mediaALT,i=a.bgColor,c=a.url;return Object(l.createElement)("div",{className:t,style:{backgroundColor:i}},Object(l.createElement)("a",{href:c},Object(l.createElement)("div",{className:"splash-holder"},n&&Object(l.createElement)("img",{className:"splash-image",src:n,alt:o})),Object(l.createElement)("div",{className:"overlay"},Object(l.createElement)(b.Content,{tagName:"h2",value:r}),Object(l.createElement)("div",{class:"arrow-right"}))))}}),wp.i18n.__),y=wp.element.Fragment,O=wp.blocks.registerBlockType,j=wp.components,C=j.Button,E=j.Panel,w=j.PanelBody,k=j.PanelRow,T=wp.blockEditor,x=T.RichText,N=T.InspectorControls,A=T.MediaUpload,L=T.ColorPalette,I=T.URLInput,R=(O("tastydigital/splash-box-overlay",{title:h("Splash CTA with Overlay"),description:h("Big pic media, logo and link."),icon:"welcome-view-site",category:"layout",attributes:{title:{type:"string",source:"text",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img.splash-image",attribute:"src"},mediaALT:{type:"string",source:"attribute",selector:"img.splash-image",attribute:"alt"},logoID:{type:"number"},logoURL:{type:"string",source:"attribute",selector:"img.logo-image",attribute:"src"},logoALT:{type:"string",source:"attribute",selector:"img.logo-image",attribute:"alt"},overlayColor:{type:"string",default:"#002A3D"},url:{type:"string",source:"attribute",attribute:"href",selector:"a"},titleText:{type:"string",source:"attribute",attribute:"title",selector:"a"}},example:{attributes:{title:h("Tasty Gluten","tastydigital"),mediaURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg"}},supports:{align:["wide","full"],html:!1},edit:function(e){var t=e.className,a=e.attributes,r=a.title,n=a.mediaID,o=a.mediaURL,i=a.mediaALT,c=a.logoID,s=a.logoURL,u=a.logoALT,m=a.overlayColor,d=a.url,b=(a.titleText,e.setAttributes);return Object(l.createElement)(y,null,Object(l.createElement)(N,null,Object(l.createElement)(E,null,Object(l.createElement)(w,{title:"Splash CTA with Overlay Block Settings",initialOpen:!0},Object(l.createElement)(k,null,h("Choose overlay colour")),Object(l.createElement)(k,null,Object(l.createElement)(L,{value:m,onChange:function(e){b({overlayColor:e})}})),Object(l.createElement)(k,null,h("Choose link destination")),Object(l.createElement)(k,null,Object(l.createElement)(I,{className:"url-input",value:d,onChange:function(e,t){return b({url:e,titleText:t&&t.title||"Click here"})}}))))),Object(l.createElement)("div",{className:t},Object(l.createElement)("div",{className:"overlay",style:{backgroundColor:m+"e9"}},!s&&Object(l.createElement)(x,{tagName:"h2",placeholder:h("Call to action text","tastydigital"),value:r,onChange:function(e){b({title:e})},allowedFormats:[]}),Object(l.createElement)(A,{onSelect:function(e){var t=e.sizes["logo-list"].url?e.sizes["logo-list"].url:e.url;b({logoURL:t,logoID:e.id,logoALT:e.alt})},allowedTypes:"image",value:c,render:function(e){var t=e.open;return Object(l.createElement)(C,{className:c?"image-button logo-button":"button button-large",onClick:t},c?Object(l.createElement)("img",{id:"image-"+c,src:s,alt:u}):h("Upload Logo","tastydigital"))}})),Object(l.createElement)("div",{className:"splash-image"},Object(l.createElement)(A,{onSelect:function(e){var t=e.sizes["homepage-splash"].url?e.sizes["homepage-splash"].url:e.url;b({mediaURL:t,mediaID:e.id,mediaALT:e.alt})},allowedTypes:"image",value:n,render:function(e){var t=e.open;return Object(l.createElement)(C,{className:n?"image-button media-button":"button button-large",onClick:t},n?Object(l.createElement)("img",{id:"image-"+n,src:o,alt:i}):h("Upload Image","tastydigital"))}}))))},save:function(e){var t=e.className,a=e.attributes,r=a.title,n=(a.mediaID,a.mediaURL),o=a.mediaALT,i=(a.logoID,a.logoURL),c=a.logoALT,s=a.overlayColor,u=a.url,m=a.titleText;return Object(l.createElement)("div",{className:t},Object(l.createElement)("a",{href:u,title:m},Object(l.createElement)("div",{className:"overlay opacity-90",style:{backgroundColor:s}}),Object(l.createElement)("div",{className:"overlay"},!i&&Object(l.createElement)(x.Content,{tagName:"h2",value:r}),i&&Object(l.createElement)("img",{className:"logo-image",src:i,alt:c})),n&&Object(l.createElement)("img",{className:"splash-image",src:n,alt:o})))}}),a(2)),S=a.n(R),_=wp.i18n.__,U=wp.hooks.addFilter,B=wp.element.Fragment,D=wp.blockEditor.InspectorAdvancedControls,P=wp.compose.createHigherOrderComponent,M=wp.components.ToggleControl,F=["core/paragraph","core/heading"];var z=P((function(e){return function(t){var a=t.name,r=t.attributes,n=t.setAttributes,o=t.isSelected,i=r.visibleOnMobile;return Object(l.createElement)(B,null,Object(l.createElement)(e,t),o&&F.includes(a)&&Object(l.createElement)(D,null,Object(l.createElement)(M,{label:_("Mobile Devices Visibity"),checked:!!i,onChange:function(){return n({visibleOnMobile:!i})},help:_(i?"Showing on mobile devices.":"Hidden on mobile devices.")})))}}),"withAdvancedControls");U("blocks.registerBlockType","tasty-digital/custom-attributes",(function(e){return void 0!==e.attributes&&F.includes(e.name)&&(e.attributes=Object.assign(e.attributes,{visibleOnMobile:{type:"boolean",default:!0}})),e})),U("editor.BlockEdit","tasty-digital/custom-advanced-control",z),U("blocks.getSaveContent.extraProps","tasty-digital/applyExtraClass",(function(e,t,a){var l=a.visibleOnMobile;return void 0!==l&&!l&&F.includes(t.name)&&(e.className=S()(e.className,"mobile-hidden")),e}));var H=a(1),G=a.n(H),V=wp.i18n.__,q=wp.hooks.addFilter,J=wp.element.Fragment,K=wp.blockEditor.InspectorAdvancedControls,Q=wp.compose.createHigherOrderComponent,W=wp.components.ToggleControl,X=["core/group"];var Y=Q((function(e){return function(t){var a=t.name,r=t.attributes,n=t.setAttributes,o=t.isSelected,i=r.constrainInnerContainer,c=r.className;return Object(l.createElement)(J,null,Object(l.createElement)(e,t),o&&X.includes(a)&&Object(l.createElement)(K,null,Object(l.createElement)(W,{label:V("Constrain Inner Container"),checked:!!i,onChange:function(){return n({className:G()(c,{"constrain-content":!i}),constrainInnerContainer:!i})},help:V(i?"Restrict width of content area.":"Content fills background area.")})))}}),"withAdvancedControls");q("blocks.registerBlockType","tasty-digital/custom-attributes",(function(e){return void 0!==e.attributes&&X.includes(e.name)&&(e.attributes=Object.assign(e.attributes,{constrainInnerContainer:{type:"boolean",default:!1}})),e})),q("editor.BlockEdit","tasty-digital/custom-advanced-control",Y);a(3),a(4),a(5),a(6)}]);