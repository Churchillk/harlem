"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9104],{14873:(e,t,r)=>{r.d(t,{vR:()=>s,nY:()=>f,SL:()=>b,X$:()=>y.X$,y2:()=>n.y2,F:()=>a,sV:()=>c,AB:()=>y.AB});var n=r(64081),o=r(85351),i=r.n(o);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=function useLocationContext(){var e=i().useContext(l);if(void 0===e)throw new Error("useLocationContext must be used within LocationProvider");return e},l=i().createContext({locationSlug:""}),s=function LocationProvider(e){var t=_slicedToArray(i().useState({locationSlug:e.locationSlug}),2),r=t[0],n=t[1];return i().useEffect((function(){n({locationSlug:e.locationSlug})}),[e.locationSlug]),i().createElement(l.Provider,{value:r},e.children)};function route_slicedToArray(e,t){return function route_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function route_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function route_unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return route_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return route_arrayLikeToArray(e,t)}(e,t)||function route_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function route_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function useRouteContext(){var e=i().useContext(u);if(void 0===e)throw new Error("useRouteContext must be used within RouteProvider");return e},u=i().createContext({}),f=function RouteProvider(e){var t=route_slicedToArray(i().useState({location:e.location,match:e.match,parsedValues:e.parsedValues,history:e.history,featureFlags:e.featureFlags}),2),r=t[0],n=t[1];return i().useEffect((function(){n({location:e.location,match:e.match,parsedValues:e.parsedValues,history:e.history,featureFlags:e.featureFlags})}),[e.location,e.match,e.parsedValues,e.history,e.featureFlags]),i().createElement(u.Provider,{value:r},e.children)};var y=r(13679);function SSRExperiments_slicedToArray(e,t){return function SSRExperiments_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function SSRExperiments_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function SSRExperiments_unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return SSRExperiments_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return SSRExperiments_arrayLikeToArray(e,t)}(e,t)||function SSRExperiments_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SSRExperiments_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d="overrideStatsigServerEnroll",p=(0,o.createContext)({}),b=function SSRExperimentsProvider(e){var t=e.experiments,r=e.location,n=e.children,a=(0,o.useMemo)((function(){var e=function getExperimentOverrideFromUrl(e){var t,r=new URLSearchParams(e||"");if(!r||!r.has(d))return{};var n=SSRExperiments_slicedToArray((null===(t=r.get(d))||void 0===t?void 0:t.split(":"))||[],3),o=n[0],i=n[1],a=n[2];return _defineProperty({},o,_defineProperty({},i,a))}(null==r?void 0:r.search);return _objectSpread(_objectSpread({},t),e)}),[t,r]);return i().createElement(p.Provider,{value:a},n)}},13679:(e,t,r)=>{r.d(t,{CJ:()=>i,AB:()=>a,X$:()=>s});var n=r(85351),o=r.n(n);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i={page_size:8,exclude:{ids:[]},aggs:{tags:{size:50},organizertagsautocomplete_agg:{size:50},dates:{}},dates:["current_future"]},a=function useSearchContext(){var e=o().useContext(l);if(void 0===e)throw new Error("useSearchContext must be used within SearchProvider");return e},l=o().createContext({query:i}),s=function SearchProvider(e){var t=e.initialQuery,r=_slicedToArray(o().useState(e.initialQuery?_objectSpread(_objectSpread({},i),e.initialQuery):i),2),a=r[0],s=r[1],c=o().useCallback((function(e){s((function(t){return _objectSpread(_objectSpread({},t),e)}))}),[]);return(0,n.useEffect)((function(){c(t)}),[t,c]),o().createElement(l.Provider,{value:{query:a,setQuery:c}},e.children)}},40888:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(85351),o=r.n(n),i=r(67369),a=r.n(i),l=r(16582),s=r.n(l),c=r(71304),u=r(8054),f=r(13582),y=r(17450),d=r(79709),p=r(83731),b=r(73979);function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_extends.apply(this,arguments)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function AsideElement(e){var t=e.image,r=e.label,n=e.iconType,i=e.iconColor,a=null;return n&&(a=o().createElement("div",{className:"eds-tag__icon eds-tag__item","data-spec":"tag-icon"},o().createElement(u.Z,{type:n,size:"small",color:i}))),t&&(a=o().createElement("div",{className:"eds-tag__image eds-tag__item","data-spec":"tag-image"},o().createElement("img",{className:"eds-tag__image--img",src:t,alt:r}))),a},v=function CloseButton(e){var t,r=e.shouldShow,n=e.onClick,i=e.isDisabled,a=e.backgroundColor,l=null;r&&(t=i?p.mK:a?p.R6:p.LZ,l=o().createElement("div",{className:"eds-tag__close-button eds-tag__item"},o().createElement(y.Z,{"aria-label":"Close tag button",onClick:n,style:d.Yx,disabled:i},o().createElement(u.Z,{type:o().createElement(b.Z,null),size:"small",color:t}))));return l},g=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}(Tag,e);var t=_createSuper(Tag);function Tag(e){var r;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tag),(r=t.call(this,e)).state={isActive:e.initialIsActive},r}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(Tag,[{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(e){void 0!==e.initialIsActive&&this.setState({isActive:e.initialIsActive})}},{key:"_toggleActive",value:function _toggleActive(){var e=this.props,t=e.onActiveToggle,r=e.onClickStatic;if(this._isInteractive()){if(r)return r();this.setState((function(e){return{isActive:!e.isActive}}));var n=this.state.isActive;t&&t(!n)}}},{key:"_handleClose",value:function _handleClose(){var e=this.props,t=e.onClose;!e.isDisabled&&t&&t()}},{key:"_handleKeyDown",value:function _handleKeyDown(e){"Enter"===e.key&&this._toggleActive()}},{key:"_isInteractive",value:function _isInteractive(){var e=this.props,t=e.isDisabled,r=e.isStatic;return!t&&!r}},{key:"_getTagClasses",value:function _getTagClasses(e){var t,r=e.style,n=e.isActive,o=e.isDisabled,i=e.isClosable,a=e.isInteractive,l=e.image,c=e.iconType,u=e.backgroundColor,f=e.showOverflow,y=e.__containerClassName;return s()("eds-tag",(_defineProperty(t={},"eds-tag--".concat(r),r),_defineProperty(t,"eds-tag--active eds-tag--active--".concat(r),n),_defineProperty(t,"eds-tag--disabled eds-tag--disabled--".concat(r),o),_defineProperty(t,"eds-tag--closeable eds-tag--closeable--".concat(r),i),_defineProperty(t,"eds-tag--interactive eds-tag--interactive--".concat(r),a),_defineProperty(t,"eds-tag--with-image",l),_defineProperty(t,"eds-tag--with-icon",c&&!l),_defineProperty(t,"".concat(u," eds-tag__background--").concat(r),u&&!o),_defineProperty(t,"eds-tag--show-overflow",f),_defineProperty(t,y,!!y),t))}},{key:"_getTextClasses",value:function _getTextClasses(e){var t=e.isDefault,r=e.isOutlined,n=e.isActive,o=e.shouldShowClose,i=e.backgroundColor,a=e.isDisabled;return s()("eds-tag__text","eds-tag__item",{"eds-text-bs eds-text-weight--heavy":t,"eds-text-bm":r,"eds-text-color--grey-800":r&&!n,"eds-tag__text--active--outlined":r&&n,"eds-tag__text--small-padding":o,"eds-tag__text--orange-shadow":t&&i&&!a,"eds-tag__text--background eds-text-color--white":i})}},{key:"render",value:function render(){var e,t,r,n=this.props,i=n.image,a=n.children,l=n.isClosable,c=n.isDisabled,u=n.isCloseButtonRemovable,f=n.label,y=n.iconType,d=n.backgroundColor,b=n.showOverflow,g=n.style,h=n.__containerClassName,m=this.state.isActive,S=this._isInteractive(),w=l&&!u||l&&m&&u,A=g===p.CD,O=g===p.$3,P=this._getTagClasses({style:g,isActive:m,isDisabled:c,isClosable:l,isInteractive:S,image:i,iconType:y,backgroundColor:d,showOverflow:b,__containerClassName:h}),C=this._getTextClasses({isDefault:A,isOutlined:O,isActive:m,shouldShowClose:w,backgroundColor:d,isDisabled:c});d&&(r=s()({"eds-tag__background-mask":A}),e=p.R6,t=o().createElement("div",{className:r}));var j={};return S&&(j={tabIndex:0,role:"button",onClick:this._toggleActive.bind(this),onKeyDown:this._handleKeyDown.bind(this)}),o().createElement("div",_extends({},j,{className:P,key:a}),t,o().createElement(_,{image:i,label:f,iconType:y,iconColor:e}),o().createElement("span",{className:C},a),o().createElement(v,{shouldShow:w,onClick:this._handleClose.bind(this),isDisabled:c,isActive:m,backgroundColor:d}))}}]),Tag}(n.PureComponent);_defineProperty(g,"propTypes",{children:a().node.isRequired,image:a().string,label:c.r,iconType:f.eK,initialIsActive:a().bool,backgroundColor:a().string,isDisabled:a().bool,isClosable:a().bool,isStatic:a().bool,isCloseButtonRemovable:a().bool,onClose:a().func,onActiveToggle:a().func,onClickStatic:a().func,showOverflow:a().bool,style:a().oneOf(p.x1)}),_defineProperty(g,"defaultProps",{isClosable:!1,isCloseButtonRemovable:!1,isDisabled:!1,isStatic:!1,showOverflow:!1,style:p.CD})},83731:(e,t,r)=>{r.d(t,{R6:()=>n,mK:()=>o,LZ:()=>i,a_:()=>a,CD:()=>l,$3:()=>s,x1:()=>c});var n="white",o="grey-300",i="grey-700",a="pale",l="default",s="outlined",c=[l,s,a]}}]);
//# sourceMappingURL=9104.e3756adce2b609193157.async.web.js.map