"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactDom=require("react-dom"),_reactDom2=_interopRequireDefault(_reactDom),_axios=require("axios"),_axios2=_interopRequireDefault(_axios),_TextField=require("material-ui/TextField"),_TextField2=_interopRequireDefault(_TextField),_RaisedButton=require("material-ui/RaisedButton"),_RaisedButton2=_interopRequireDefault(_RaisedButton),_FlatButton=require("material-ui/FlatButton"),_FlatButton2=_interopRequireDefault(_FlatButton),_Paper=require("material-ui/Paper"),_Paper2=_interopRequireDefault(_Paper),_Snackbar=require("material-ui/Snackbar"),_Snackbar2=_interopRequireDefault(_Snackbar),_MuiThemeProvider=require("material-ui/styles/MuiThemeProvider"),_MuiThemeProvider2=_interopRequireDefault(_MuiThemeProvider),_reactRouter=require("react-router"),_FontIcon=require("material-ui/FontIcon"),_FontIcon2=_interopRequireDefault(_FontIcon),styles={headerStyle:{color:"#999",textAlign:"left"},divStyle1:{textAlign:"center"},divStyle2:{textAlign:"center",height:window.innerHeight+"px",backgroundColor:"#eee"},iconImageStyle:{width:100,height:100},buttonStyle:{padding:"10px",width:"200px",backgroundColor:"#F57C00",borderRadius:"4px"},flatButtonStyle:{padding:"10px",height:"50px",fontSize:"20px"},buttonLabelStyle:{color:"#fff"}},Login=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("aa"),a.state={username:"",password:"",errorusername:"",errorpassword:"",message:"",open:!1},a.handleInputChange=a.handleInputChange.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a}return _inherits(t,e),_createClass(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,r=t.name;this.setState(_defineProperty({},r,a))}},{key:"handleSubmit",value:function(e){var t=""===this.state.username?"Required":"",a=""===this.state.password?"Required":"";this.setState({errorusername:t,errorpassword:a});t+a===""&&this.props.handleLogin({username:this.state.username,password:this.state.password})}},{key:"handleFocus",value:function(e){var t=e.target,a="error"+t.name;this.setState(_defineProperty({},a,""))}},{key:"render",value:function(){return console.log(this.props),_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-md-2"}),_react2.default.createElement("div",{className:"col-sm-12 col-md-4",style:styles.divStyle1},_react2.default.createElement("h2",{style:styles.headerStyle},"Sign In"),_react2.default.createElement("img",{src:"../../../images/user-info.png",style:styles.iconImageStyle}),_react2.default.createElement("br",null),_react2.default.createElement(_TextField2.default,{hintText:"Sourav",name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange,onFocus:this.handleFocus.bind(this),fullWidth:!0,errorText:this.state.errorusername,floatingLabelText:"Username"}),_react2.default.createElement("br",null),_react2.default.createElement(_TextField2.default,{hintText:"asdwz6a56agywe2#",type:"password",name:"password",value:this.state.password,fullWidth:!0,onChange:this.handleInputChange,onFocus:this.handleFocus.bind(this),errorText:this.state.errorpassword,floatingLabelText:"Password"}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),_react2.default.createElement("br",null),_react2.default.createElement(_RaisedButton2.default,{label:"LogIn",onClick:this.handleSubmit,backgroundColor:"#F57C00",fullWidth:!0,labelStyle:styles.buttonLabelStyle,style:styles.buttonStyle}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),_react2.default.createElement("br",null),_react2.default.createElement(_reactRouter.Link,{to:"/Register"},_react2.default.createElement(_FlatButton2.default,{style:styles.flatButtonStyle,primary:!0},_react2.default.createElement("span",null,"Create Account")))),_react2.default.createElement("div",{className:"col-sm-12 col-md-6",style:styles.divStyle2},_react2.default.createElement("br",null),_react2.default.createElement("br",null),_react2.default.createElement(_RaisedButton2.default,{label:"LogIn with Facebook",onClick:this.handleSubmit,className:"logInButtonStyle"}),_react2.default.createElement("br",null),_react2.default.createElement(_RaisedButton2.default,{label:"LogIn with Gmail",onClick:this.handleSubmit,className:"logInButtonStyle"}),_react2.default.createElement("br",null),_react2.default.createElement(_RaisedButton2.default,{icon:_react2.default.createElement(_FontIcon2.default,{className:"muidocs-icon-custom-github"}),label:"LogIn with Github",onClick:this.handleSubmit,className:"logInButtonStyle"}),_react2.default.createElement("br",null),_react2.default.createElement(_RaisedButton2.default,{label:"LogIn with Linked In",onClick:this.handleSubmit,className:"logInButtonStyle"}),_react2.default.createElement("br",null)))}}]),t}(_react2.default.Component);exports.default=Login;