(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"318":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(0)),i=n(45),l=_interopRequireDefault(n(46)),u=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(319);var c=function(e){function AtRate(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtRate),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtRate.__proto__||Object.getPrototypeOf(AtRate)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtRate,o.default.Component),a(AtRate,[{"key":"handleClick","value":function handleClick(e){var t;(t=this.props).onChange.apply(t,[e+1].concat(Array.prototype.slice.call(arguments)))}},{"key":"render","value":function render(){for(var e=this,t=this.props,n=t.style,a=t.value,l=t.max,c=t.size,s=t.margin,f={"margin":r.default.pxTransform(s)},p=[],d=Math.floor(a),m=Math.ceil(a),h=0;h<l;h++)d>h?p.push("at-rate__icon at-rate__icon--on"):m-1===h?p.push("at-rate__icon at-rate__icon--half"):p.push("at-rate__icon at-rate__icon--off");return o.default.createElement(i.View,{"className":"at-rate","style":n},p.map(function(t,n){return o.default.createElement(i.View,{"className":t,"key":n,"style":f,"onClick":e.handleClick.bind(e,n)},o.default.createElement(u.default,{"value":"star-2","size":c}),o.default.createElement(i.View,{"className":"at-rate__left"},o.default.createElement(u.default,{"value":"star-2","size":c})))}))}}]),AtRate}();c.defaultProps={"style":"","size":20,"value":0,"max":5,"margin":5,"onChange":function onChange(){}},c.propTypes={"style":l.default.oneOfType([l.default.object,l.default.string]),"size":l.default.oneOfType([l.default.string,l.default.number]),"value":l.default.number,"max":l.default.number,"margin":l.default.number,"onChange":l.default.func},t.default=c},"319":function(e,t,n){},"321":function(e,t,n){},"44":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(45),i=_interopRequireDefault(n(318)),l=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(321);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"rateValue1":3,"rateValue2":3,"rateValue3":3,"rateValue4":3},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),a(Index,[{"key":"handleRateChange","value":function handleRateChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.rateValue1,n=e.rateValue2,a=e.rateValue3,u=e.rateValue4;return r.default.createElement(o.View,{"className":"page"},r.default.createElement(l.default,{"title":"Rate 评分"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"基础用法"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"value":t,"onChange":this.handleRateChange.bind(this,"rateValue1")})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义尺寸"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"size":"16","value":n,"onChange":this.handleRateChange.bind(this,"rateValue2")})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义评分数"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"max":10,"value":a,"onChange":this.handleRateChange.bind(this,"rateValue3")})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义星星间隔"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"margin":15,"value":u,"onChange":this.handleRateChange.bind(this,"rateValue4")})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"只读"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(o.View,null,"评分: 3.5"),r.default.createElement(o.View,null,r.default.createElement(i.default,{"value":3.5})))))))}}]),Index}();t.default=u},"46":function(e,t,n){e.exports=n(50)()},"47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),o=(_interopRequireDefault(r),_interopRequireDefault(n(0))),i=_interopRequireDefault(n(46)),l=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(48);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"48":function(e,t,n){},"50":function(e,t,n){"use strict";var a=n(51);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,o,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"51":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=_interopRequireDefault(n(46)),i=n(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(53);var l=function(e){function AtIcon(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtIcon),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtIcon.__proto__||Object.getPrototypeOf(AtIcon)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtIcon,r.default.Component),a(AtIcon,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.value,n=void 0===t?"":t,a={"fontSize":e.size+"px","color":e.color},o=["at-icon","at-icon-"+n];return r.default.createElement(i.Text,{"className":o,"style":a})}}]),AtIcon}();t.default=l,l.defaultProps={"color":"","size":"24","onClick":function onClick(){}},l.propTypes={"color":o.default.string,"size":o.default.oneOfType([o.default.string,o.default.number]),"onClick":o.default.func}},"53":function(e,t,n){}}]);