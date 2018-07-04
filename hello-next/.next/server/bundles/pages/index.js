module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Header.js


var linkStyle = {
  marginRight: 15
};

var Header_Header = function Header() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "Home")), external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "About")));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/MyLayout.js


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DADADA'
};

var MyLayout_Layout = function Layout(props) {
  return external__react__default.a.createElement("div", {
    style: layoutStyle
  }, external__react__default.a.createElement(components_Header, null), props.children);
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);




var arial = 'Arial';

var PostLink = function PostLink(_ref) {
  var id = _ref.id,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2237822260", [arial]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    as: "/p/".concat(id),
    href: "/post?title=".concat(title)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2237822260", [arial]]])
  }, title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2237822260",
    css: ["li.__jsx-style-dynamic-selector{list-style:none;margin:5px 0;font-family:".concat(arial, ";}"), "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:blue;}", "a.__jsx-style-dynamic-selector:hover{opacity:0.6;}"],
    dynamic: [arial]
  }));
};

var posts = [{
  title: 'Hello Next.js',
  id: 'hello-nextjs'
}, {
  title: 'Learn Next.js is awesome',
  id: 'learn-nextjs'
}, {
  title: 'Deploy apps with Zeit',
  id: 'deploy-nextjs'
}];

var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    className: "jsx-1664195823"
  }, "My Blog"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-1664195823"
  }, posts.map(function (_ref2, i) {
    var id = _ref2.id,
        title = _ref2.title;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PostLink, {
      id: id,
      title: title,
      key: i
    });
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1664195823",
    css: ["h1.jsx-1664195823{font-family:\"Arial\";}", "ul.jsx-1664195823{padding:0;}"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })
/******/ ]);