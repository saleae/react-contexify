!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom"],t):"object"==typeof exports?exports.ReactContexify=t(require("react"),require("prop-types"),require("react-dom")):e.ReactContexify=t(e.react,e["prop-types"],e["react-dom"])}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animation=t.theme=t.styles=void 0,t.styles={menu:"react-contexify",submenu:"react-contexify react-contexify__submenu",submenuArrow:"react-contexify__submenu-arrow",separator:"react-contexify__separator",item:"react-contexify__item",itemDisabled:"react-contexify__item--disabled",itemContent:"react-contexify__item__content",itemIcon:"react-contexify__item__icon",theme:"react-contexify__theme--",animationWillEnter:"react-contexify__will-enter--",animationWillLeave:"react-contexify__will-leave--",ignoreClick:"react-contexify__ignore_click"},t.theme={light:"light",dark:"dark"},t.animation={fade:"fade",flip:"flip",pop:"pop",zoom:"zoom"}},function(e,n){e.exports=t},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DISPLAY_MENU=t.HIDE_ALL=void 0,t.HIDE_ALL=0,t.DISPLAY_MENU=function(e){return"DISPLAY_"+e}},function(e,t,n){"use strict";var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.eventManager=void 0;var o={eventList:new Map,on:function(e,t){var n=this;return this.eventList.has(e)||this.eventList.set(e,new Set),this.eventList.get(e).add(t),function(){return n.eventList.get(e).delete(t)}},emit:function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return this.eventList.has(e)?(this.eventList.get(e).forEach(function(e){return e.call.apply(e,r([t],n))}),!0):(console.warn("<"+e+"> Event is not registered. Did you forgot to bind the event ?"),!1)}};t.eventManager=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cloneItem=void 0;var r=n(0);t.cloneItem=function(e,t){return r.Children.map(r.Children.toArray(e).filter(function(e){return Boolean(e)}),function(e){return r.cloneElement(e,t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8);Object.defineProperty(t,"Menu",{enumerable:!0,get:function(){return r.Menu}});var o=n(11);Object.defineProperty(t,"Item",{enumerable:!0,get:function(){return o.Item}});var i=n(12);Object.defineProperty(t,"Separator",{enumerable:!0,get:function(){return i.Separator}});var s=n(13);Object.defineProperty(t,"IconFont",{enumerable:!0,get:function(){return s.IconFont}});var a=n(14);Object.defineProperty(t,"Submenu",{enumerable:!0,get:function(){return a.Submenu}});var u=n(15);Object.defineProperty(t,"MenuProvider",{enumerable:!0,get:function(){return u.MenuProvider}});var c=n(16);Object.defineProperty(t,"contextMenu",{enumerable:!0,get:function(){return c.contextMenu}});var l=n(1);Object.defineProperty(t,"theme",{enumerable:!0,get:function(){return l.theme}}),Object.defineProperty(t,"animation",{enumerable:!0,get:function(){return l.animation}})},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&s(t,e,n);return a(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;var f=u(n(0)),d=l(n(2)),p=l(n(3)),h=n(6),v=n(9),y=n(4),m=n(1),_=n(5),b={ENTER:13,ESC:27,ARROW_UP:38,ARROW_DOWN:40,ARROW_LEFT:37,ARROW_RIGHT:39},g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={x:0,y:0,visible:!1,nativeEvent:{},propsFromTrigger:{},onShown:null,onHidden:null},t.menuRef=f.default.createRef(),t.unsub=[],t.bindWindowEvent=function(){window.addEventListener("resize",t.hide),window.addEventListener("contextmenu",t.hide),window.addEventListener("mousedown",t.hide),window.addEventListener("click",t.hide),window.addEventListener("scroll",t.hide),window.addEventListener("keydown",t.handleKeyboard)},t.unBindWindowEvent=function(){window.removeEventListener("resize",t.hide),window.removeEventListener("contextmenu",t.hide),window.removeEventListener("mousedown",t.hide),window.removeEventListener("click",t.hide),window.removeEventListener("scroll",t.hide),window.removeEventListener("keydown",t.handleKeyboard)},t.onMouseEnter=function(){return window.removeEventListener("mousedown",t.hide)},t.onMouseLeave=function(){return window.addEventListener("mousedown",t.hide)},t.hide=function(e){var n=e;(void 0===n||2!==n.button&&!0!==n.ctrlKey||"contextmenu"===n.type)&&(e&&"click"===e.type&&e.target.classList.contains(m.styles.ignoreClick)||(t.unBindWindowEvent(),t.setState({visible:!1})))},t.handleKeyboard=function(e){e.keyCode!==b.ENTER&&e.keyCode!==b.ESC||(t.unBindWindowEvent(),t.setState({visible:!1}))},t.show=function(e,n){e.stopPropagation(),_.eventManager.emit(y.HIDE_ALL);var r=t.getMousePosition(e),o=r.x,i=r.y;t.setState({visible:!0,x:o,y:i,nativeEvent:e,propsFromTrigger:n},t.setMenuPosition)},t}return o(t,e),t.prototype.componentDidMount=function(){this.unsub.push(_.eventManager.on(y.DISPLAY_MENU(this.props.id),this.show)),this.unsub.push(_.eventManager.on(y.HIDE_ALL,this.hide))},t.prototype.componentWillUnmount=function(){this.unsub.forEach(function(e){return e()}),this.unBindWindowEvent()},t.prototype.componentDidUpdate=function(e,t){this.state.visible!==t.visible&&(this.state.visible&&this.props.onShown?this.props.onShown():!this.state.visible&&this.props.onHidden&&this.props.onHidden())},t.prototype.setMenuPosition=function(){if(this.menuRef.current){var e=window.innerWidth,t=window.innerHeight,n=this.menuRef.current,r=n.offsetWidth,o=n.offsetHeight,i=this.state,s=i.x,a=i.y;s+r>e&&(s-=s+r-e),a+o>t&&(a-=a+o-t),this.setState({x:s,y:a},this.bindWindowEvent)}},t.prototype.getMousePosition=function(e){var t={x:e.clientX,y:e.clientY};return"touchend"===e.type&&(!t.x||!t.y)&&e.changedTouches&&e.changedTouches.length>0&&(t.x=e.changedTouches[0].clientX,t.y=e.changedTouches[0].clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t},t.prototype.render=function(){var e,t=this.props,n=t.theme,r=t.animation,o=t.style,s=t.className,a=t.children,u=t.menuWrapperProps,l=this.state,d=l.visible,y=l.nativeEvent,_=l.propsFromTrigger,b=l.x,g=l.y,O=u||{},w=O.className,j=c(O,["className"]),P=p.default(m.styles.menu,m.styles.ignoreClick,w,s,((e={})[m.styles.theme+n]=n,e[m.styles.animationWillEnter+r]=r,e)),E=i(i({},o),{left:b,top:g+1,opacity:1});return f.default.createElement(v.Portal,null,d&&f.default.createElement("div",i({className:P,style:E,ref:this.menuRef,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},j),f.default.createElement("div",{className:m.styles.ignoreClick},h.cloneItem(a,{nativeEvent:y,propsFromTrigger:_}))))},t.propTypes={id:d.default.oneOfType([d.default.string,d.default.number]).isRequired,children:d.default.node.isRequired,theme:d.default.string,animation:d.default.string,className:d.default.string,style:d.default.object,menuWrapperProps:d.default.object},t}(f.Component);t.Menu=g},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=void 0;var i=n(0),s=n(10),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={canRender:!1},t.container={},t}return o(t,e),t.prototype.componentDidMount=function(){this.container=document.createElement("div"),document.body.appendChild(this.container),this.setState({canRender:!0})},t.prototype.componentWillUnmount=function(){document.body.removeChild(this.container)},t.prototype.render=function(){return this.state.canRender&&s.createPortal(this.props.children,this.container)},t}(i.PureComponent);t.Portal=a},function(e,t){e.exports=n},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&s(t,e,n);return a(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;var l=u(n(0)),f=c(n(2)),d=c(n(3)),p=n(1),h=function(){},v=function(e){function t(t){var n=e.call(this,t)||this;n.handleClick=function(e){n.stayOpenOnClick&&e.stopPropagation(),n.isDisabled||n.props.onClick({event:n.props.nativeEvent,props:i(i({},n.props.propsFromTrigger),n.props.data)})};var r=n.props,o=r.disabled,s=r.nativeEvent,a=r.propsFromTrigger,u=r.data,c=r.closeOnClick;return n.isDisabled="function"==typeof o?o({event:s,props:i(i({},a),u)}):o,n.stayOpenOnClick=n.isDisabled||!("function"==typeof c?c({event:s,props:i(i({},a),u)}):c),n}return o(t,e),t.prototype.render=function(){var e,t=this.props,n=t.className,r=t.style,o=t.children,i=d.default(p.styles.item,n,((e={})[""+p.styles.itemDisabled]=this.isDisabled,e));return l.default.createElement("div",{className:i,style:r,onClick:this.handleClick,role:"presentation"},l.default.createElement("div",{className:p.styles.itemContent},o))},t.propTypes={children:f.default.node.isRequired,data:f.default.object,disabled:f.default.oneOfType([f.default.func,f.default.bool]),onClick:f.default.func,nativeEvent:f.default.object,propsFromTrigger:f.default.object,className:f.default.string,style:f.default.object,closeOnClick:f.default.bool},t.defaultProps={disabled:!1,onClick:h,closeOnClick:!0},t}(l.Component);t.Item=v},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Separator=void 0;var o=r(n(0)),i=n(1);t.Separator=function(){return o.default.createElement("div",{className:i.styles.separator})}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IconFont=void 0;var o=r(n(0)),i=r(n(2)),s=r(n(3)),a=n(1),u=function(e){var t=e.className,n=e.style,r=e.children;return o.default.createElement("i",{className:s.default(a.styles.itemIcon,t),style:n},r||"")};t.IconFont=u,u.propTypes={children:i.default.node,className:i.default.string,style:i.default.object}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&s(t,e,n);return a(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Submenu=void 0;var l=u(n(0)),f=c(n(2)),d=c(n(3)),p=n(6),h=n(1),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={left:"100%",top:0,bottom:"initial"},t.setRef=function(e){t.menu=e},t}return o(t,e),t.prototype.componentDidMount=function(){var e=window.innerWidth,t=window.innerHeight,n=this.menu.getBoundingClientRect(),r={};n.right<e?(r.left="100%",r.right=void 0):(r.right="100%",r.left=void 0),n.bottom>t?(r.bottom=0,r.top="initial"):(r.bottom="initial",r.top=0),this.setState(r)},t.prototype.handleClick=function(e){e.stopPropagation()},t.prototype.render=function(){var e,t=this.props,n=t.arrow,r=t.disabled,o=t.className,s=t.style,a=t.label,u=t.nativeEvent,c=t.children,f=t.propsFromTrigger,v=d.default(h.styles.item,h.styles.ignoreClick,o,((e={})[""+h.styles.itemDisabled]="function"==typeof r?r({event:u,props:i({},f)}):r,e)),y=i(i({},s),this.state);return l.default.createElement("div",{className:v,role:"presentation"},l.default.createElement("div",{className:h.styles.itemContent,onClick:this.handleClick},a,l.default.createElement("span",{className:h.styles.submenuArrow},n)),l.default.createElement("div",{className:d.default(h.styles.submenu,h.styles.ignoreClick),ref:this.setRef,style:y},p.cloneItem(c,{propsFromTrigger:f,nativeEvent:u})))},t.propTypes={label:f.default.node.isRequired,children:f.default.node.isRequired,nativeEvent:f.default.object,arrow:f.default.node,disabled:f.default.oneOfType([f.default.func,f.default.bool]),className:f.default.string,style:f.default.object},t.defaultProps={arrow:"▶",disabled:!1,nativeEvent:{}},t}(l.Component);t.Submenu=v},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MenuProvider=void 0;var u=n(0),c=a(n(2)),l=n(4),f=n(5),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.childrenRefs=[],t.handleEvent=function(e){e.preventDefault(),e.stopPropagation(),f.eventManager.emit(l.DISPLAY_MENU(t.props.id),e.nativeEvent,i({ref:1===t.childrenRefs.length?t.childrenRefs[0]:t.childrenRefs},t.props.data))},t.setChildRef=function(e){return null===e||t.childrenRefs.push(e)},t}return o(t,e),t.prototype.getChildren=function(){var e=this,t=this.props,n=(t.id,t.component,t.event,t.children),r=(t.className,t.style,t.storeRef),o=(t.data,s(t,["id","component","event","children","className","style","storeRef","data"]));return this.childrenRefs=[],u.Children.map(n,function(t){return u.isValidElement(t)?u.cloneElement(t,i(i({},o),r?{ref:e.setChildRef}:{})):t})},t.prototype.render=function(){var e,t=this.props,n=t.component,r=t.render,o=t.event,s=t.className,a=t.style,c=((e={})[o]=this.handleEvent,e.className=s,e.style=a,e);return"function"==typeof r?r(i(i({},c),{children:this.getChildren()})):u.createElement(n,c,this.getChildren())},t.propTypes={id:c.default.oneOfType([c.default.string,c.default.number]).isRequired,children:c.default.node.isRequired,component:c.default.oneOfType([c.default.node,c.default.func]),render:c.default.func,event:c.default.string,className:c.default.string,style:c.default.object,storeRef:c.default.bool,data:c.default.object},t.defaultProps={component:"div",event:"onContextMenu",storeRef:!0},t}(u.Component);t.MenuProvider=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contextMenu=void 0;var r=n(5),o=n(4),i={show:function(e){var t=e.id,n=e.event,i=e.props;r.eventManager.emit(o.DISPLAY_MENU(t),n.nativeEvent||n,i)},hideAll:function(){r.eventManager.emit(o.HIDE_ALL)}};t.contextMenu=i}])});
//# sourceMappingURL=ReactContexify.js.map