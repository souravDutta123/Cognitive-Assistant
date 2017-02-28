"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Register=exports.Login=exports.CustomMenu=exports.HomeContent=void 0;var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_Introduction=require("./Introduction.js"),_Introduction2=_interopRequireDefault(_Introduction),_Login=require("./Login.js"),_Login2=_interopRequireDefault(_Login),_Menu=require("./Menu.js"),_Menu2=_interopRequireDefault(_Menu),_Register=require("./Register.js"),_Register2=_interopRequireDefault(_Register),_react=require("react"),_react2=_interopRequireDefault(_react),_Paper=require("material-ui/Paper"),_Paper2=_interopRequireDefault(_Paper),_MuiThemeProvider=require("material-ui/styles/MuiThemeProvider"),_MuiThemeProvider2=_interopRequireDefault(_MuiThemeProvider),styles={},HomeContent=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={open:!0},e}return _inherits(t,e),_createClass(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({openLogin:this.props.openLogin})}},{key:"render",value:function(){return console.log("Render"),console.log(this.props),_react2.default.createElement(_Introduction2.default,null)}}]),t}(_react2.default.Component);exports.HomeContent=HomeContent,exports.CustomMenu=_Menu2.default,exports.Login=_Login2.default,exports.Register=_Register2.default;