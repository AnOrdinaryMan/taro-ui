(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"144":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=_interopRequireDefault(a(1)),n=_interopRequireDefault(a(46)),i=_interopRequireDefault(a(0)),l=a(45),c=_interopRequireDefault(a(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(145);var u=function(e){function AtNoticebar(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtNoticebar);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtNoticebar.__proto__||Object.getPrototypeOf(AtNoticebar)).apply(this,arguments)),t="J_"+Math.ceil(1e6*Math.random()).toString(36);return e.state={"show":!0,"animElemId":t,"dura":15},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtNoticebar,i.default.Component),o(AtNoticebar,[{"key":"onClose","value":function onClose(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"onGotoMore","value":function onGotoMore(){var e;this.props.onGotoMore&&(e=this.props).onGotoMore.apply(e,arguments)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;this.props.marquee&&setTimeout(function(){if(r.default.getEnv()===r.default.ENV_TYPE.WEB){var t=document.querySelector("."+e.state.animElemId).getBoundingClientRect().width/+e.props.speed;e.setState({"dura":t})}else if(r.default.getEnv()===r.default.ENV_TYPE.WEAPP){r.default.createSelectorQuery().in(e.$scope).select("."+e.state.animElemId).boundingClientRect(function(t){var a=t.width,o=a/+e.props.speed,n=r.default.createAnimation({"duration":1e3*o,"timingFunction":"linear"}),i=r.default.createAnimation({"duration":0,"timingFunction":"linear"}),l=function animBody(){i.translateX(0).step(),e.setState({"animationData":i.export()}),setTimeout(function(){n.translateX(-a).step(),e.setState({"animationData":n.export()})},100)};l(),setInterval(l,1e3*o+100)}).exec()}},100)}},{"key":"render","value":function render(){var e=this.props,t=e.single,a=e.icon,o=e.marquee,n=this.props,u=n.showMore,s=n.close,f=this.state.dura,p=["at-noticebar"],d=this.props.moreText;t||(u=!1),d||(d="查看详情");var m={},N=["at-noticebar__content-inner"];return o?(s=!1,p.push("at-noticebar--marquee"),m["animation-duration"]=f+"s",r.default.getEnv()===r.default.ENV_TYPE.WEAPP&&p.push("at-noticebar--weapp"),N.push(this.state.animElemId)):(u&&p.push("at-noticebar--more"),t&&p.push("at-noticebar--single")),this.state.show&&i.default.createElement(l.View,{"className":p},s&&i.default.createElement(l.View,{"className":"at-noticebar__close","onClick":this.onClose.bind(this)},i.default.createElement(c.default,{"value":"close","size":"16","color":"#ccc"})),i.default.createElement(l.View,{"className":"at-noticebar__content"},a&&i.default.createElement(l.View,{"className":"at-noticebar__content-icon"},i.default.createElement(c.default,{"value":a,"size":"16"})),i.default.createElement(l.View,{"className":"at-noticebar__content-text"},i.default.createElement(l.Text,{"animation":this.state.animationData,"className":N,"style":m},this.props.children))),u&&i.default.createElement(l.View,{"className":"at-noticebar__more","onClick":this.onGotoMore.bind(this)},i.default.createElement(l.Text,{"className":"text"},d),i.default.createElement(l.View,{"className":"at-noticebar__more-icon"},i.default.createElement(c.default,{"value":"chevron-right","size":"16"}))))}}]),AtNoticebar}();t.default=u,u.defaultProps={"close":!1,"single":!1,"marquee":!1,"speed":100,"moreText":"查看详情","showMore":!1,"icon":""},u.propTypes={"close":n.default.bool,"single":n.default.bool,"marquee":n.default.bool,"speed":n.default.number,"moreText":n.default.string,"showMore":n.default.bool,"icon":n.default.string}},"145":function(e,t,a){},"147":function(e,t,a){},"16":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=_interopRequireDefault(a(1)),n=_interopRequireDefault(a(0)),i=a(45),l=_interopRequireDefault(a(144)),c=_interopRequireDefault(a(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(147);var u=function(e){function NoticebarPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NoticebarPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NoticebarPage.__proto__||Object.getPrototypeOf(NoticebarPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NoticebarPage,n.default.Component),o(NoticebarPage,[{"key":"onGotoMore","value":function onGotoMore(){r.default.getEnv()===r.default.ENV_TYPE.WEAPP?r.default.showModal({"content":"点击了更多!"}):r.default.getEnv()===r.default.ENV_TYPE.WEB&&alert("您点击了更多!")}},{"key":"render","value":function render(){return n.default.createElement(i.View,{"className":"page"},n.default.createElement(c.default,{"title":"NoticeBar 通告栏"}),n.default.createElement(i.View,{"className":"doc-body"},n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"文字"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,null,"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"跑马灯"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"marquee":!0},"[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"marquee":!0,"icon":"volume-plus"},"[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"marquee":!0},"[超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]")))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"图标"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"icon":"volume-plus"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"查看更多"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"showMore":!0,"single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"showMore":!0,"icon":"volume-plus","single":!0,"onGotoMore":this.onGotoMore.bind(this)},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"showMore":!0,"moreText":"更多内容","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"showMore":!0,"moreText":"更多内容","icon":"volume-plus","onGotoMore":this.onGotoMore.bind(this)},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"关闭按钮"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"close":!0,"single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"close":!0,"icon":"volume-plus","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"close":!0,"moreUrl":"https://taro.aotu.io/","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"close":!0,"icon":"volume-plus","moreUrl":"https://taro.aotu.io/","single":!0},"[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"close":!0},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"close":!0,"moreUrl":"https://taro.aotu.io/"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏")),n.default.createElement(i.View,{"className":"bar-item"},n.default.createElement(l.default,{"close":!0,"icon":"volume-plus","moreUrl":"https://taro.aotu.io/"},"[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏"))))))}}]),NoticebarPage}();t.default=u},"46":function(e,t,a){e.exports=a(50)()},"47":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(1),n=(_interopRequireDefault(r),_interopRequireDefault(a(0))),i=_interopRequireDefault(a(46)),l=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(48);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return n.default.createElement(l.View,{"className":"doc-header"},n.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"48":function(e,t,a){},"50":function(e,t,a){"use strict";var o=a(51);function emptyFunction(){}e.exports=function(){function shim(e,t,a,r,n,i){if(i!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"51":function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"52":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),n=_interopRequireDefault(a(46)),i=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(53);var l=function(e){function AtIcon(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtIcon),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtIcon.__proto__||Object.getPrototypeOf(AtIcon)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtIcon,r.default.Component),o(AtIcon,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.value,a=void 0===t?"":t,o={"fontSize":e.size+"px","color":e.color},n=["at-icon","at-icon-"+a];return r.default.createElement(i.Text,{"className":n,"style":o})}}]),AtIcon}();t.default=l,l.defaultProps={"color":"","size":"24","onClick":function onClick(){}},l.propTypes={"color":n.default.string,"size":n.default.oneOfType([n.default.string,n.default.number]),"onClick":n.default.func}},"53":function(e,t,a){}}]);