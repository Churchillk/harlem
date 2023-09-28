"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1378],{91378:(e,t,o)=>{o.d(t,{Z:()=>LocationAutocomplete_LocationAutocomplete});var n,r,i,a=o(85351),c=o.n(a),l=o(67369),u=o.n(l),s=o(50399),p=o(71304),d=o(43969),f=o(23279),g=o.n(f),y=o(13311),_=o.n(y),m=o(41609),h=o.n(m),b=o(18505),v=o(41029),S=o(97993),P=o(79920),A=o(31469),L=o(1905),O=(o(330),o(24726));function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _arrayLikeToArray(e,t)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var w,j="AIzaSyAudqgjxOqK9Ek2UL3njdDHWpQOqydiWCI",T="undefined"!=typeof window&&(null===(n=window)||void 0===n||null===(r=n.__SERVER_DATA__)||void 0===r||null===(i=r.env)||void 0===i?void 0:i.googleMapsQAKey)||j,C={current:!1},I=function loadGoogleMaps(e){var t=e.onSuccess,n=e.onFailure;if(!function isGoogleMapsLoaded(){if(!d.v)return!1;if(C.current)return!0;var e=_toConsumableArray(document.getElementsByTagName("script")).some((function(e){return e.src.includes("maps.googleapis.com/maps/api/js")||e.src.includes("maps.google.com/maps/api/js")}));return e&&!C.current&&(C.current=!0),e}())try{var r=o(25671),i=(0,O.I)();r("https://maps.googleapis.com/maps/api/js?key=".concat("prod"===i?"AIzaSyC42yQSNEM_G4-F81tgVzgoeCmhJClADHc":T,"&libraries=places"),"googleMaps",{success:function success(){null==t||t(),C.current=!0},error:function error(){null==n||n()},numRetries:1})}catch(e){null==n||n()}},E=o(74037);function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},_extends.apply(this,arguments)}function LocationAutocompleteGoogle_toConsumableArray(e){return function LocationAutocompleteGoogle_arrayWithoutHoles(e){if(Array.isArray(e))return LocationAutocompleteGoogle_arrayLikeToArray(e)}(e)||function LocationAutocompleteGoogle_iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function LocationAutocompleteGoogle_unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return LocationAutocompleteGoogle_arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return LocationAutocompleteGoogle_arrayLikeToArray(e,t)}(e)||function LocationAutocompleteGoogle_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function LocationAutocompleteGoogle_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach((function(t){_defineProperty(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var o,n=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var G=(null===(w=(0,s.ih)("map area"))||void 0===w?void 0:w.toString())||"",F=function getPlaceObj(e){var t=e.value;return new Promise((function(o){(0,S.L)(t,!0).then((function(t){var n=t.place;if(n){var r,i,a;o({currentPlace:e.currentPlace,currentPlaceParent:(null==n||null===(r=n.localizations)||void 0===r||null===(i=r.default)||void 0===i||null===(a=i[n.derived_ancestor_type])||void 0===a?void 0:a.suggested_abbreviation)||e.currentPlaceParent,latitude:n.latitude,longitude:n.longitude,slug:n.location_slug,placeType:n.place_type,placeId:n.id,isOnline:!1})}else{var c=t.latitude,l=t.longitude,u=t.viewport_northeast,s=t.viewport_southwest,p={nw:{lng:s.longitude,lat:u.latitude},sw:{lng:s.longitude,lat:s.latitude},ne:{lng:u.longitude,lat:u.latitude},se:{lng:u.longitude,lat:s.latitude}};o({currentPlace:e.currentPlace,currentPlaceParent:e.currentPlaceParent,latitude:c,longitude:l,isOnline:!1,bbox:p}),function trackMissingWOFPlace(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"search",eventAction:"MissingWOFPlace",eventLabel:e,nonInteraction:!0}),(0,E.j)({eventName:"All - Search - Location - MissingWOFPlace",page:{locationName:e}})}("".concat(e.currentPlace,", ").concat(e.currentPlaceParent))}}))}))},k=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}(LocationAutocompleteGoogle,e);var t=_createSuper(LocationAutocompleteGoogle);function LocationAutocompleteGoogle(e){var o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LocationAutocompleteGoogle),_defineProperty(_assertThisInitialized(o=t.call(this,e)),"_handleLocationAutocompleteSelect",(function(e){var t=o.props,n=t.handleLocationSelect,r=t.handleUseCurrentLocation,i=t.isUseCurrentLocationEnabled,a=t.onLocationSelect;null==a||a();var c=o.state.googleSuggestions,l=_()(c,(function(t){return t.value===e}));if(o._isItemSelected=!0,e.startsWith("recent-")){var u=o.historySuggestions.find((function(t){return t.value===e}));o.setState({locationQuery:u.currentPlace,selectedLocation:u.currentPlace,isTyping:!1},(function(){n(u),o._isItemSelected=!1}))}else l&&l.value?F(l).then((function(e){o.props.storeQuery&&(0,A.q)(JSON.stringify(_objectSpread(_objectSpread({},e),{},{value:"recent-".concat(e.placeId),content:e.currentPlace,secondaryContent:e.currentPlaceParent,isHistorySuggestion:!0})).replace(/,/g,";"),L.Hp),n(e),o._mounted&&o.setState({locationQuery:l.currentPlace,selectedLocation:l.currentPlace,isTyping:!1},(function(){o._isItemSelected=!1}))})):"online"===e?o.setState({isTyping:!1},(function(){n(_objectSpread(_objectSpread({},(0,P.A$)()),{},{placeId:null})),o._isItemSelected=!1})):i&&o.setState({locationQuery:"",selectedLocation:"",isTyping:!1},(function(){r(),o._isItemSelected=!1}))})),_defineProperty(_assertThisInitialized(o),"_handleLocationAutocompleteChange",(function(e){o.setState({locationQuery:e}),e&&(o._suggestionsPending=!0),o._requestLocationSuggestions(e)})),_defineProperty(_assertThisInitialized(o),"_handleEnterKey",(function(e){o._suggestionsPending&&(o._requestLocationSuggestions.cancel(),o._handleGetSuggestionsFromGoogle(e,!0))})),_defineProperty(_assertThisInitialized(o),"_handleLocationAutocompleteBlur",(function(){var e=o.state.selectedLocation;o.setState({locationQuery:e,isTyping:!1}),o.props.onBlur&&o.props.onBlur()})),_defineProperty(_assertThisInitialized(o),"_handleLocationAutocompleteFocus",(function(){o.state.loadApiAttempted||(I({onSuccess:o.props.onGoogleMapsLoaded,onFailure:o.props.onGoogleMapsLoadFailed}),o.setState({loadApiAttempted:!0})),o._isItemSelected||(o.historySuggestions=(0,P.yE)({storageKey:L.Hp}),o.setState({locationQuery:"",isTyping:!0,googleSuggestions:[]}),o._requestLocationSuggestions("")),o.props.onFocus&&o.props.onFocus()})),_defineProperty(_assertThisInitialized(o),"_handleGetSuggestionsFromGoogle",(function(e,t){var n,r,i=o.props,a=i.latitude,c=i.longitude,l=d.v&&!!(null===(n=window)||void 0===n||null===(r=n.google)||void 0===r?void 0:r.maps);if(!e||!l)return o.setState({googleSuggestions:[]});var u={input:e,types:["(regions)"]};return a&&c&&(u=_objectSpread(_objectSpread({},u),{},{location:new window.google.maps.LatLng(a,c),radius:2e5})),(new window.google.maps.places.AutocompleteService).getPlacePredictions(u,(function(e,n){if(o._suggestionsPending=!1,"ZERO_RESULTS"!==n||e){if("OK"!==n)throw new Error("Received error from Google places: ".concat(n));var r=e.map((function(e){return{content:e.structured_formatting.main_text,secondaryContent:e.structured_formatting.secondary_text,value:e.place_id,currentPlace:e.structured_formatting.main_text,currentPlaceParent:e.structured_formatting.secondary_text}}));o.setState({googleSuggestions:r}),t&&o._handleLocationAutocompleteSelect(r[0].value)}}))})),_defineProperty(_assertThisInitialized(o),"_requestLocationSuggestions",g()(o._handleGetSuggestionsFromGoogle,250));var n=e.currentPlace,r=e.isBBoxSearch,i=e.locationSuggestions.suggestions,a=n;return r&&(a=G),o.state={locationQuery:a,suggestions:i,isTyping:!1,selectedLocation:n,googleSuggestions:[],loadApiAttempted:!1},o.historySuggestions=(0,P.yE)({storageKey:L.Hp}),o}return function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(LocationAutocompleteGoogle,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props.onComponentDidMount;e&&e(),this._isItemSelected=!1,this._suggestionsPending=!1,this._mounted=!0}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(e){var t=e.currentPlace,o=e.isBBoxSearch,n=t;o&&(n=G),this.setState((function(e){var t=e.isTyping,o=e.locationQuery,r=e.selectedLocation;return t||(o=n,r=n),{locationQuery:o,selectedLocation:r}}))}},{key:"componentWillUnmount",value:function componentWillUnmount(){var e=this.props.onComponentWillUnmount;this._mounted=!1,e&&e()}},{key:"render",value:function render(){var e=this.props,t=e.isWaitingForLocation,o=e.autocompleteProps,n=e.placeholder,r=e.isUseCurrentLocationEnabled,i=e.disabled,a=e.prefix,l=e.isOnline,u=e.isUsingCurrentLocation,p=e.showItemDivider,d=e.suffix,f=this.state,g=f.locationQuery,y=f.selectedLocation,_=f.googleSuggestions,m=g===(0,s.ih)("Your Location")?(0,s.ih)("Your Location"):g,S=n||y;S===(0,s.ih)("Your Location")&&(S=(0,s.ih)("Your Location"));var A=[];return h()(_)?(r&&!u&&(A=[{id:"use-current",content:(0,s.ih)("Use my current location"),value:"",iconType:c().createElement(b.Z,null),showDivider:p}]),l||(A=[].concat(LocationAutocompleteGoogle_toConsumableArray(A),[(0,P.A$)()])),A=[].concat(LocationAutocompleteGoogle_toConsumableArray(A),LocationAutocompleteGoogle_toConsumableArray(this.historySuggestions))):A=LocationAutocompleteGoogle_toConsumableArray(_),t&&(m="",S=(0,s.ih)("Finding your location...")),c().createElement("div",{className:"location-autocomplete","data-spec":"location-autocomplete"},c().createElement(v.Z,_extends({suggestions:A,value:m,onBlur:this._handleLocationAutocompleteBlur,onChange:this._handleLocationAutocompleteChange,onFocus:this._handleLocationAutocompleteFocus,onSelect:this._handleLocationAutocompleteSelect,onEnterKey:this._handleEnterKey,shouldFocusInputOnSelect:!1,isV2:!0,placeholder:S,disabled:i||t,prefix:a,suffix:d},o,{isAsideClickable:!0})))}}]),LocationAutocompleteGoogle}(a.PureComponent);function LocationAutocomplete_LocationAutocomplete(e){return c().createElement(k,e)}_defineProperty(k,"propTypes",{currentPlace:u().string,placeId:u().string,placeholder:p.r,onComponentDidMount:u().func,onComponentWillUnmount:u().func,onGoogleMapsLoaded:u().func,onGoogleMapsLoadFailed:u().func,handleUseCurrentLocation:u().func,handleLocationSuggestionChange:u().func,locationSuggestions:u().object,onLocationSelect:u().func,handleLocationSelect:u().func,isBBoxSearch:u().bool,isUseCurrentLocationEnabled:u().bool,isOnline:u().bool,isWaitingForLocation:u().bool,isUsingCurrentLocation:u().bool,disabled:u().bool,latitude:u().number,longitude:u().number,autocompleteProps:u().shape({borderType:u().string,id:u().string,name:u().string,hideOutline:u().bool,isLimitedSearch:u().bool,preventInputValuePrefill:u().bool}),prefix:u().node}),_defineProperty(k,"defaultProps",{autocompleteProps:{borderType:"none",id:"locationPicker",name:"locationPicker",hideOutline:!0,isLimitedSearch:!0,preventInputValuePrefill:!0}})},31469:(e,t,o)=>{o.d(t,{q:()=>P});var n=o(67065),r=o.n(n),i=o(65068),a=o.n(i),c=o(88846),l=o.n(c),u=o(8816),s=o.n(u),p=o(39693),d=o.n(p),f=o(92742),g=o.n(f),y=o(27361),_=o.n(y),m=o(18446),h=o.n(m),b=o(41609),v=o.n(b),S=o(26483),P=function storeQuery(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S.bj,o=localStorage.getItem(t);v()(o)?o=[e]:(o=o.split(",")).unshift(e);var n=s()(l()(g()),d(),r()((function(e,o){if(t===S.Hp){var n=JSON.parse(e.replace(/;/g,",")),r=JSON.parse(o.replace(/;/g,","));return h()(_()(n,"value"),_()(r,"value"))}return h()(e,o)})),a()(40))(o);localStorage.setItem(t,n)}},330:()=>{}}]);
//# sourceMappingURL=1378.866c060dbd83cfd9024a.async.web.js.map