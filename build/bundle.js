/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/About/About.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/About/About.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".b5McLCNY15Njnor5MwKOl {\\n    color: red;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"title\": \"b5McLCNY15Njnor5MwKOl\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/About/About.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/Index/Index.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/Index/Index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".M5Zr_NgKpshGyy4P6w_zM {\\n    color: aqua;\\n}\\n\\n.fGZwDo1znmzprmNojTSFv {\\n    background-color: burlywood;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"title\": \"M5Zr_NgKpshGyy4P6w_zM\",\n\t\"container\": \"fGZwDo1znmzprmNojTSFv\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/Index/Index.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/User/User.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/User/User.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._3-XFzjFSzcNV-hyMgDjmpE {\\n    color: dimgrey;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"title\": \"_3-XFzjFSzcNV-hyMgDjmpE\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/User/User.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/notfound/404.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/notfound/404.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*-- reset --*/\\r\\nhtml,body,div,span,applet,object,iframe,h1,h1,h2,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\\r\\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\\r\\nol,ul{list-style:none;margin:0px;padding:0px;}\\r\\nblockquote,q{quotes:none;}\\r\\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\\r\\ntable{border-collapse:collapse;border-spacing:0;}\\r\\n/*-- start editing from here --*/\\r\\na{text-decoration:none;}\\r\\n._1JMwjc2scqmJSdDORAvyfd{text-align:right;}/* text align right */\\r\\n._1pXYTO78THTwPgDnnaBAxE{text-align:left;}/* text align left */\\r\\n._3moLdIfexGyJLGddBNGeml{text-align:center;}/* text align center */\\r\\n._3QFj0qRQQV04036TQf9R26{float:right;}/* float right */\\r\\n._2R4RYV6EdZ_MjQVDGNWnLi{float:left;}/* float left */\\r\\n._1ae7xyQxIJRWlYIilZlr78{clear:both;}/* clear float */\\r\\n._29FBSg1o9geRrMO-xGrZBw{position:relative;}/* Position Relative */\\r\\n._2bsXbJUs739JuYiFkvMcPj{position:absolute;}/* Position Absolute */\\r\\n._2grBsjyWL0zxDX8fA2A86H{\\tvertical-align:baseline;}/* vertical align baseline */\\r\\n.Vo6Satc9GaUGfb7a0aGgq{\\tvertical-align:top;}/* vertical align top */\\r\\nnav._33Yrw7n28Nt-r48E_M0455 ul li{\\tdisplay:block;}/* vertical menu */\\r\\nnav.ko93TPqeHxAXf5WZ3eSfF ul li{\\tdisplay: inline-block;}/* horizontal menu */\\r\\nimg{max-width:100%;}\\r\\n/*-- end reset --*/\\r\\nbody {\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    background: url(/payet_sumiao.jpeg)no-repeat center 0px;\\r\\n\\t-webkit-background-size:cover;\\r\\n\\t-moz-background-size:cover; \\r\\n\\tbackground-size:cover;\\r\\n    background-attachment: fixed;\\r\\n} \\r\\n/*-- main --*/ \\r\\n._3I2CNEahsgKntJCyOw9-9F {\\r\\n    width: 65%;\\r\\n    margin:0 auto;\\r\\n}\\r\\n/*-- top-nav --*/\\r\\n._3ojueOySz-vmEJyhYizaLy {\\r\\n    margin-top: 4em;\\r\\n}\\r\\n._3_euftcY8zi717fZfGk4mM h1 {\\r\\n    font-size: 3em; \\r\\n    font-weight: 100;\\r\\n\\tline-height: .9em;\\r\\n}\\r\\n._3_euftcY8zi717fZfGk4mM h1 a {\\r\\n    color: #fff;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy ul li {\\r\\n    display: inline-block;\\r\\n    margin:0 1.2em;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy ul li a{\\t\\r\\n\\tcolor:#fff;\\r\\n\\tfont-size: 1em;\\r\\n\\t-webkit-transition: 0.5s all;\\r\\n\\t-moz-transition: 0.5s all;\\r\\n\\t-o-transition: 0.5s all;\\r\\n\\t-ms-transition: 0.5s all;\\r\\n\\ttransition: 0.5s all;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy ul li a:hover{\\t\\r\\n\\tcolor:#fbb034;\\r\\n}\\r\\n/*-- //top-nav --*/\\r\\n/*-- //errortext --*/\\r\\n._3HYe3f8bM3JfdNyxPsFOJW{\\r\\n    padding-top:4em;\\r\\n    text-align: center;\\r\\n} \\r\\nh1 {\\r\\n    font-size: 1.2em;\\r\\n    color: #fff;\\r\\n    font-weight: 900; \\r\\n\\tline-height: 1.8em;\\r\\n}  \\r\\np.QPUckxEXGfL719og476E- {\\r\\n    font-size: 0.9em;\\r\\n    color: #fff;\\r\\n    line-height: 1.8em;\\r\\n    font-weight: 400;\\r\\n    width: 65%;\\r\\n    text-transform: capitalize;\\r\\n    margin: 1.5em auto 2.5em;\\r\\n}\\r\\np.QPUckxEXGfL719og476E- a {\\r\\n    color: #fbb034;\\r\\n\\tpadding-right:10px;\\r\\n}\\r\\np.QPUckxEXGfL719og476E- a:hover{\\r\\n    color: #ffffff;\\r\\n}\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"text\\\"] {\\r\\n    width: 50%;\\r\\n    padding: 0.8em 1.5em;\\r\\n    font-size: 1em;\\r\\n    color: #fff;\\r\\n    outline: none;\\r\\n    border: 1px solid #fbb034;\\r\\n    background: none;\\r\\n    border-radius: 50px;\\r\\n    -webkit-appearance: none;\\r\\n    -webkit-transition: 0.5s all;\\r\\n    -moz-transition: 0.5s all;\\r\\n    transition: 0.5s all;\\r\\n}\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"submit\\\"] {\\r\\n    outline: none;\\r\\n    box-shadow: none;\\r\\n    background: #fbb034;\\r\\n    border: 1px solid #fbb034;\\r\\n    padding: .8em 3em;\\r\\n    color: #fff;\\r\\n    cursor: pointer;\\r\\n    border-radius: 50px;\\r\\n    font-size: 1em;\\r\\n    margin-left: 0.5em;\\r\\n    -webkit-transition: 0.5s all;\\r\\n    -moz-transition: 0.5s all;\\r\\n    transition: 0.5s all;\\r\\n}\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"submit\\\"]:hover {\\r\\n    color: #fbb034;\\r\\n    background: transparent;\\r\\n}\\r\\n::-webkit-input-placeholder { \\r\\n\\tcolor:#fff !important;\\r\\n}\\r\\n:-moz-placeholder { /* Firefox 18- */\\r\\n\\tcolor:#fff !important;\\r\\n}\\r\\n::-moz-placeholder {  /* Firefox 19+ */\\r\\n\\tcolor:#fff !important;\\r\\n}\\r\\n:-ms-input-placeholder {  \\r\\n\\tcolor:#fff !important;\\r\\n}\\r\\n/*-- errortext --*/\\r\\n/*-- copyright --*/\\r\\n.YP9WLKRRZ6nAus1eIWlqX {\\r\\n    margin:3em 0 2em;\\r\\n    text-align: center;\\r\\n}\\r\\n.YP9WLKRRZ6nAus1eIWlqX p {\\r\\n    font-size: 1em;\\r\\n    color: #fff;\\r\\n\\tline-height:1.8em;\\r\\n}\\r\\n.YP9WLKRRZ6nAus1eIWlqX p a{\\r\\n    color: #fff; \\r\\n\\t-webkit-transition: 0.5s all;\\r\\n\\t-moz-transition: 0.5s all;\\r\\n\\t-o-transition: 0.5s all;\\r\\n\\t-ms-transition: 0.5s all;\\r\\n\\ttransition: 0.5s all;\\r\\n}\\r\\n.YP9WLKRRZ6nAus1eIWlqX p a:hover{\\r\\n    color: #fbb034;\\t\\r\\n}\\r\\n/*-- //copyright --*/\\r\\n/*-- //main --*/\\r\\n._3HYe3f8bM3JfdNyxPsFOJW h2{\\r\\n    font-size: 14em;\\r\\n    letter-spacing: 20px;\\r\\n    color: #fff;\\r\\n}\\r\\nspan {\\r\\n    color: #fbb034;\\r\\n}\\r\\n/*-- responsive-design --*/ \\r\\n@media(max-width:1366px){\\r\\np.QPUckxEXGfL719og476E- { \\r\\n    width: 75%; \\r\\n}\\r\\n} \\r\\n@media(max-width:1080px){\\r\\n._3I2CNEahsgKntJCyOw9-9F {\\r\\n    width: 75%; \\r\\n}\\r\\n} \\r\\n@media(max-width:991px){\\r\\np.QPUckxEXGfL719og476E- {\\r\\n    width: 85%;\\r\\n}\\r\\n}\\r\\n@media(max-width:900px){\\r\\n._3I2CNEahsgKntJCyOw9-9F {\\r\\n    width: 85%;\\r\\n}\\r\\n._3zP_A_4wpmoms1P3HkP4U0 {\\r\\n    padding-top: 2em;\\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW {\\r\\n    padding-top: 5em;\\r\\n    text-align: center;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy ul li { \\r\\n    margin: 0 1em;\\r\\n} \\r\\np.QPUckxEXGfL719og476E- {\\r\\n    width: 95%;\\r\\n}\\r\\n} \\r\\n@media(max-width:736px){\\r\\n._3HYe3f8bM3JfdNyxPsFOJW {\\r\\n    padding-top: 3em;\\r\\n}\\r\\n}\\r\\n@media(max-width:667px){\\r\\n._3ojueOySz-vmEJyhYizaLy ul li {\\r\\n    margin: 0 0.5em;\\r\\n}\\r\\nh1 {\\r\\n    font-size: 1em; \\r\\n}\\r\\np.QPUckxEXGfL719og476E- {\\r\\n    width: 100%;\\r\\n    font-size: 0.85em;\\r\\n    line-height: 2em;\\r\\n}\\r\\n.YP9WLKRRZ6nAus1eIWlqX {\\r\\n    margin: 2em 0 2em; \\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW {\\r\\n    padding-top: 2em;\\r\\n}\\r\\n}\\r\\n@media(max-width:480px){\\r\\n._3_euftcY8zi717fZfGk4mM,._3ojueOySz-vmEJyhYizaLy{\\r\\n    float: none;\\r\\n    text-align: center;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy {\\r\\n    margin-top: 1.5em;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy ul li a { \\r\\n    font-size: 0.9em;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy ul li {\\r\\n    margin: 0 1em;\\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW img {\\r\\n    width: 52%;\\r\\n}\\r\\nh1 {\\r\\n    font-size: 0.9em;\\r\\n}\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"text\\\"],._22THvFqPd0KW3IQkWAxrpP input[type=\\\"submit\\\"]{ \\r\\n    font-size: 0.9em; \\r\\n}\\r\\n.YP9WLKRRZ6nAus1eIWlqX p {\\r\\n    font-size: 0.9em; \\r\\n    padding: 0 1em;\\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW {\\r\\n    padding-top: 6em; \\r\\n}\\r\\n} \\r\\n@media(max-width:414px){\\r\\n._3HYe3f8bM3JfdNyxPsFOJW h2 {\\r\\n    font-size: 9em;\\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW {\\r\\n    padding-top: 2em;\\r\\n}\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"text\\\"] {\\r\\n    width: 80%;\\r\\n    margin-bottom: 1em;\\r\\n}\\r\\n}\\r\\n@media(max-width:384px){\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"text\\\"] {\\r\\n    width: 85%;\\r\\n}\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"submit\\\"] {\\r\\n    margin: 0em 0 0 0;\\r\\n\\tpadding: .7em 2em;\\r\\n}\\r\\n._3zP_A_4wpmoms1P3HkP4U0 {\\r\\n    padding-top: 1em;\\r\\n}\\r\\np.QPUckxEXGfL719og476E- { \\r\\n    font-size: 0.8em; \\r\\n}\\r\\n._3I2CNEahsgKntJCyOw9-9F {\\r\\n    width: 87%;\\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW {\\r\\n    padding-top: 1em;\\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW h2 {\\r\\n    letter-spacing: 10px;\\r\\n}\\r\\n} \\r\\n@media(max-width:320px){\\r\\n._3ojueOySz-vmEJyhYizaLy ul li a {\\r\\n    font-size: 0.85em;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy ul li {\\r\\n    margin: 0 0.6em;\\r\\n}\\r\\nh1 {\\r\\n    font-size: 0.85em;\\r\\n} \\r\\np.QPUckxEXGfL719og476E- { \\r\\n    margin: 0.8em auto;\\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW {\\r\\n    padding-top: 0em;\\r\\n}\\r\\n._3ojueOySz-vmEJyhYizaLy {\\r\\n    margin-top: 1em;\\r\\n}\\r\\n._22THvFqPd0KW3IQkWAxrpP input[type=\\\"submit\\\"] { \\r\\n    padding: .6em 2em;\\r\\n}\\r\\n.YP9WLKRRZ6nAus1eIWlqX {\\r\\n    margin: 1em 0 1em;\\r\\n}\\r\\n.YP9WLKRRZ6nAus1eIWlqX p {\\r\\n    font-size: 0.8em; \\r\\n}\\r\\n._3HYe3f8bM3JfdNyxPsFOJW h2 {\\r\\n    font-size: 7em;\\r\\n}\\r\\n}\\r\\n/*-- //responsive-design --*/\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"txt-rt\": \"_1JMwjc2scqmJSdDORAvyfd\",\n\t\"txt-lt\": \"_1pXYTO78THTwPgDnnaBAxE\",\n\t\"txt-center\": \"_3moLdIfexGyJLGddBNGeml\",\n\t\"float-rt\": \"_3QFj0qRQQV04036TQf9R26\",\n\t\"float-lt\": \"_2R4RYV6EdZ_MjQVDGNWnLi\",\n\t\"clear\": \"_1ae7xyQxIJRWlYIilZlr78\",\n\t\"pos-relative\": \"_29FBSg1o9geRrMO-xGrZBw\",\n\t\"pos-absolute\": \"_2bsXbJUs739JuYiFkvMcPj\",\n\t\"vertical-base\": \"_2grBsjyWL0zxDX8fA2A86H\",\n\t\"vertical-top\": \"Vo6Satc9GaUGfb7a0aGgq\",\n\t\"vertical\": \"_33Yrw7n28Nt-r48E_M0455\",\n\t\"horizontal\": \"ko93TPqeHxAXf5WZ3eSfF\",\n\t\"agileinfo-row\": \"_3I2CNEahsgKntJCyOw9-9F\",\n\t\"w3top-nav-right\": \"_3ojueOySz-vmEJyhYizaLy\",\n\t\"w3top-nav-left\": \"_3_euftcY8zi717fZfGk4mM\",\n\t\"w3layouts-errortext\": \"_3HYe3f8bM3JfdNyxPsFOJW\",\n\t\"w3lstext\": \"QPUckxEXGfL719og476E-\",\n\t\"agile-search\": \"_22THvFqPd0KW3IQkWAxrpP\",\n\t\"copyright\": \"YP9WLKRRZ6nAus1eIWlqX\",\n\t\"w3top-nav\": \"_3zP_A_4wpmoms1P3HkP4U0\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/notfound/404.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/store/store */ \"./src/store/store.js\");\n/* harmony import */ var _src_component_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/component/Header */ \"./src/component/Header.js\");\n/* harmony import */ var _src_container_User_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/container/User/User */ \"./src/container/User/User.js\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar store = Object(_src_store_store__WEBPACK_IMPORTED_MODULE_8__[\"getServerStore\"])();\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a[\"static\"](\"public\"));\napp.use('/api', http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11___default()({\n  target: 'http://localhost:9090',\n  changeOrigin: true\n}));\n\nfunction csrRender(res) {\n  //此函数的目的是将输出的html模版读取并写入到response里\n  //step1 获取模版路径\n  var filepath = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(process.cwd(), 'public/index.csr.html');\n  var html = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(filepath, 'utf-8');\n  return res.send(html);\n}\n\napp.get('*', function (req, res) {\n  //检查url参数中是否存在csr， 如果有就开启客户端渲染的指令\n  var isOpenCSR = req.query._mode;\n\n  if (isOpenCSR && isOpenCSR.toLowerCase() === 'csr') {\n    console.log('csr mode is open for now!!');\n    csrRender(res);\n  } else {\n    var promises = [];\n    _src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"].some(function (route) {\n      var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"matchPath\"])(req.path, route);\n\n      if (match) {\n        var loadData = route.component.loadData;\n\n        if (loadData) {\n          promises.push(loadData(store));\n        }\n      } // return match;\n\n    });\n    Promise.all(promises).then(function () {\n      var context = {\n        css: []\n      }; //把react组建，解析成html\n\n      var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n        store: store\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n        location: req.url,\n        context: context\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_component_Header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Switch\"], null, _src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"].map(function (route) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], route);\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_container_User_User__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))));\n\n      if (context.statuscode) {\n        res.status(context.statuscode);\n      }\n\n      if (context.action == \"REPLACE\") {\n        res.redirect(301, context.url);\n      }\n\n      var css = context.css && context.css.length > 0 ? \"<style>\".concat(context.css.join(\"\\n\"), \"</style>\") : '';\n      console.log(\"css outpt: \", css); //字符串模版\n\n      res.send(\"\\n                <html>\\n                    <head>\\n                        <meta charset=\\\"utf-8\\\" />\\n                        <title>React SSR</title>\\n                        \".concat(css, \"\\n                    </head>\\n                    <body>\\n                        <div id=\\\"root\\\">\").concat(content, \"</div>\\n                        <script>\\n                            window.__context = \").concat(JSON.stringify(store.getState()), \"\\n                        </script>\\n                        <script src=\\\"/bundle.js\\\"></script>\\n                    </body>\\n                </html>\\n            \"));\n    });\n  }\n});\napp.listen(9093, function () {\n  console.log(\"listen done\");\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/Index */ \"./src/container/Index/index.js\");\n/* harmony import */ var _container_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/About/About */ \"./src/container/About/About.js\");\n/* harmony import */ var _container_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/Login */ \"./src/container/Login.js\");\n/* harmony import */ var _container_User_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/User/User */ \"./src/container/User/User.js\");\n/* harmony import */ var _container_notfound_404__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/notfound/404 */ \"./src/container/notfound/404.js\");\n\n\n\n\n\n // import './App.css'\n// export default (\n//     <>\n//         <Route path=\"/\" exact component={Index}></Route>\n//         <Route path=\"/about\" exact component={About}></Route>\n//     </>\n// );\n//导出路由配置\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: \"/\",\n  exact: true,\n  component: _container_Index__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  key: \"index\"\n}, {\n  path: \"/about\",\n  exact: true,\n  component: _container_About_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  key: \"about\"\n}, {\n  path: \"/login\",\n  exact: true,\n  component: _container_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  key: \"login\"\n}, {\n  path: \"/user\",\n  exact: true,\n  component: _container_User_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  key: \"user\"\n}, {\n  component: _container_notfound_404__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  key: \"404\"\n}]);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/WithStyle.js":
/*!**************************!*\
  !*** ./src/WithStyle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WithStyle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction WithStyle(Comp, styles) {\n  return function (props) {\n    if (props.staticContext && props.staticContext.css && Array.isArray(props.staticContext.css)) {\n      props.staticContext.css.push(styles._getCss());\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, props);\n  };\n}\n\n//# sourceURL=webpack:///./src/WithStyle.js?");

/***/ }),

/***/ "./src/action/mainAction.js":
/*!**********************************!*\
  !*** ./src/action/mainAction.js ***!
  \**********************************/
/*! exports provided: GET_LIST, getIndexList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LIST\", function() { return GET_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexList\", function() { return getIndexList; });\n//action type\nvar GET_LIST = \"INDEX/GET_LIST\"; //action creator\n\nvar changeList = function changeList(list) {\n  return {\n    type: GET_LIST,\n    list: list\n  };\n}; //异步请求\n\n\nvar getIndexList = function getIndexList() {\n  return function (dispatch, getState, $axios) {\n    return $axios.get(\"/api/course/list\").then(function (res) {\n      var list = res.data.list;\n      console.log(\"update list: \", list);\n      dispatch(changeList(list));\n    }).then(null, function (err) {\n      console.log(\"Error: \", err);\n      return Promise.resolve();\n    });\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/action/mainAction.js?");

/***/ }),

/***/ "./src/action/userAction.js":
/*!**********************************!*\
  !*** ./src/action/userAction.js ***!
  \**********************************/
/*! exports provided: GET_USERINFO, getUserDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USERINFO\", function() { return GET_USERINFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserDetail\", function() { return getUserDetail; });\n//action type\nvar GET_USERINFO = \"INDEX/GET_USERINFO\"; //action creator\n\nvar viewUser = function viewUser(data) {\n  return {\n    type: GET_USERINFO,\n    data: data\n  };\n}; //异步请求\n\n\nvar getUserDetail = function getUserDetail() {\n  return function (dispatch, getState, $axios) {\n    return $axios.get(\"/api/user/details\").then(function (res) {\n      var data = res.data.data;\n      console.log(\"update user: \", data);\n      dispatch(viewUser(data));\n    }).then(null, function (err) {\n      console.log(\"Error: \", err);\n      return Promise.resolve();\n    });\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/action/userAction.js?");

/***/ }),

/***/ "./src/component/Header.js":
/*!*********************************!*\
  !*** ./src/component/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"\\u9996\\u9875\"), \" \\uFF5C\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"\\u5173\\u4E8E\"), \" |\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/user\"\n  }, \"\\u7528\\u6237\\u4FE1\\u606F\"), \" |\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/404\"\n  }, \"404\"));\n});\n\n//# sourceURL=webpack:///./src/component/Header.js?");

/***/ }),

/***/ "./src/container/About/About.css":
/*!***************************************!*\
  !*** ./src/container/About/About.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./About.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/About/About.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/About/About.css?");

/***/ }),

/***/ "./src/container/About/About.js":
/*!**************************************!*\
  !*** ./src/container/About/About.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ \"./src/container/About/About.css\");\n/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction About() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n    to: \"/login\"\n  }); //return <div className={styles.title}>This SSR Demo is produced by 开课吧</div>\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/container/About/About.js?");

/***/ }),

/***/ "./src/container/Index/Index.css":
/*!***************************************!*\
  !*** ./src/container/Index/Index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Index.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/Index/Index.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/Index/Index.css?");

/***/ }),

/***/ "./src/container/Index/index.js":
/*!**************************************!*\
  !*** ./src/container/Index/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_mainAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/mainAction */ \"./src/action/mainAction.js\");\n/* harmony import */ var _WithStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../WithStyle */ \"./src/WithStyle.js\");\n/* harmony import */ var _Index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Index.css */ \"./src/container/Index/Index.css\");\n/* harmony import */ var _Index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Index_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction Index(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var size = props.list.length;\n\n    if (size === 0) {\n      props.getIndexList();\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Index_css__WEBPACK_IMPORTED_MODULE_4___default.a.container\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: _Index_css__WEBPACK_IMPORTED_MODULE_4___default.a.title\n  }, \"This is my demo react SSR, provied by \", props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"if you like it, please star it. current star is \", count, \"\\uD83C\\uDF1F\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, \"\\u70B9\\u8D5E\\uD83D\\uDC4D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.list.map(function (element) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: element.id\n    }, element.name);\n  })));\n}\n\nIndex.loadData = function (store) {\n  //通过传递全局的store对象，手动派发一个更新store的操作\n  return store.dispatch(Object(_action_mainAction__WEBPACK_IMPORTED_MODULE_2__[\"getIndexList\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    list: state.index.list\n  };\n}, {\n  getIndexList: _action_mainAction__WEBPACK_IMPORTED_MODULE_2__[\"getIndexList\"]\n})(Object(_WithStyle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _Index_css__WEBPACK_IMPORTED_MODULE_4___default.a)));\n\n//# sourceURL=webpack:///./src/container/Index/index.js?");

/***/ }),

/***/ "./src/container/Login.js":
/*!********************************!*\
  !*** ./src/container/Login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Login() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Login \\u5F00\\u8BFE\\u5427\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/container/Login.js?");

/***/ }),

/***/ "./src/container/User/User.css":
/*!*************************************!*\
  !*** ./src/container/User/User.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./User.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/User/User.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/User/User.css?");

/***/ }),

/***/ "./src/container/User/User.js":
/*!************************************!*\
  !*** ./src/container/User/User.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_userAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/userAction */ \"./src/action/userAction.js\");\n/* harmony import */ var _User_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User.css */ \"./src/container/User/User.css\");\n/* harmony import */ var _User_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_User_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction User(props) {\n  //need login\n  // return <Redirect to='/about'></Redirect>;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var data = props.user;\n\n    if (Object.keys(data).length === 0 && data.constructor === Object) {\n      props.getUserDetail();\n    }\n  }, []);\n  var columnStyle = {\n    \"display\": \"flex\",\n    \"flexDirection\": \"column\"\n  };\n  var rowStyle = {\n    \"display\": \"flex\",\n    \"flexDirection\": \"row\",\n    \"justifyContent\": \"space-between\"\n  };\n  var Userinfo = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: _User_css__WEBPACK_IMPORTED_MODULE_3___default.a.title\n  }, \"\\u7528\\u6237\\u8BE6\\u7EC6\\u4FE1\\u606F\\u9884\\u89C8\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: columnStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: rowStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u59D3\\u540D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.user.familyName, \" \", props.user.surname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: rowStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u624B\\u673A\\u53F7\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.user.mobile)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: rowStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6240\\u5728\\u90E8\\u95E8\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.user.department)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: rowStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u804C\\u4F4D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.user.post))));\n  return Userinfo;\n}\n\nUser.loadData = function (store) {\n  //通过传递全局的store对象，手动派发一个更新store的操作\n  return store.dispatch(Object(_action_userAction__WEBPACK_IMPORTED_MODULE_2__[\"getUserDetail\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    user: state.user.data\n  };\n}, {\n  getUserDetail: _action_userAction__WEBPACK_IMPORTED_MODULE_2__[\"getUserDetail\"]\n})(User));\n\n//# sourceURL=webpack:///./src/container/User/User.js?");

/***/ }),

/***/ "./src/container/notfound/404.css":
/*!****************************************!*\
  !*** ./src/container/notfound/404.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./404.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/notfound/404.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/notfound/404.css?");

/***/ }),

/***/ "./src/container/notfound/404.js":
/*!***************************************!*\
  !*** ./src/container/notfound/404.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notfound; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _404_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.css */ \"./src/container/notfound/404.css\");\n/* harmony import */ var _404_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_404_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Status(_ref) {\n  var code = _ref.code,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    render: function render(_ref2) {\n      var staticContext = _ref2.staticContext;\n\n      if (staticContext) {\n        staticContext.statusCode = code;\n      }\n\n      return children;\n    }\n  });\n}\n\nfunction Notfound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Status, {\n    code: 404\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"agileits-main\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"agileinfo-row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"w3layouts-errortext\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"4\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"0\"), \"4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Sorry! The page you were looking for could not be found \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"w3lstext\"\n  }, \"You have been tricked into click on a link that can not be found. Please check the url or go to \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\"\n  }, \"main page\"), \" and see if you can locate what you are looking for \")))));\n}\n\n//# sourceURL=webpack:///./src/container/notfound/404.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_mainAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/mainAction */ \"./src/action/mainAction.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  list: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_mainAction__WEBPACK_IMPORTED_MODULE_0__[\"GET_LIST\"]:\n      console.log(\"data: \", action);\n      return _objectSpread({}, state, {\n        list: action.list\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: getClientStore, getServerStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/store/index.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./src/store/user.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\nvar reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  index: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  user: _user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  baseURL: \"http://localhost:9090/\"\n});\nvar clientAxios = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  baseURL: \"/\"\n}); // const store = createStore(reducers, applyMiddleware(thunk))\n// export default store;\n//分别导出客户端的store接口和服务端的store接口\n\nvar getClientStore = function getClientStore() {\n  console.log(\"the type of window.__type\", _typeof(window.__context));\n  var defaultState = window.__context || {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(clientAxios)));\n};\nvar getServerStore = function getServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(serverAxios)));\n};\n\n//# sourceURL=webpack:///./src/store/store.js?");

/***/ }),

/***/ "./src/store/user.js":
/*!***************************!*\
  !*** ./src/store/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_userAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/userAction */ \"./src/action/userAction.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  data: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_userAction__WEBPACK_IMPORTED_MODULE_0__[\"GET_USERINFO\"]:\n      console.log(\"data: \", action);\n      return _objectSpread({}, state, {\n        data: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/user.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });