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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Parse Error: Line 10: Illegal import declaration\n    at throwError (C:\\data\\project1\\node_modules\\_esprima-fb@15001.1.0-dev-harmony-fb@esprima-fb\\esprima.js:2823:21)\n    at throwErrorTolerant (C:\\data\\project1\\node_modules\\_esprima-fb@15001.1.0-dev-harmony-fb@esprima-fb\\esprima.js:2835:24)\n    at parseSourceElement (C:\\data\\project1\\node_modules\\_esprima-fb@15001.1.0-dev-harmony-fb@esprima-fb\\esprima.js:6435:17)\n    at parseProgramElement (C:\\data\\project1\\node_modules\\_esprima-fb@15001.1.0-dev-harmony-fb@esprima-fb\\esprima.js:6491:16)\n    at parseProgramElements (C:\\data\\project1\\node_modules\\_esprima-fb@15001.1.0-dev-harmony-fb@esprima-fb\\esprima.js:6523:29)\n    at parseProgram (C:\\data\\project1\\node_modules\\_esprima-fb@15001.1.0-dev-harmony-fb@esprima-fb\\esprima.js:6536:16)\n    at Object.parse (C:\\data\\project1\\node_modules\\_esprima-fb@15001.1.0-dev-harmony-fb@esprima-fb\\esprima.js:7713:23)\n    at getAstForSource (C:\\data\\project1\\node_modules\\_jstransform@11.0.3@jstransform\\src\\jstransform.js:244:21)\n    at Object.transform (C:\\data\\project1\\node_modules\\_jstransform@11.0.3@jstransform\\src\\jstransform.js:267:11)\n    at Object.transform (C:\\data\\project1\\node_modules\\_jstransform@11.0.3@jstransform\\src\\simple.js:105:28)\n    at Object.module.exports (C:\\data\\project1\\node_modules\\_jsx-loader@0.13.2@jsx-loader\\index.js:15:31)");

/***/ })
/******/ ]);