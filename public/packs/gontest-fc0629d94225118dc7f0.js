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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 196);
/******/ })
/************************************************************************/
/******/ ({

/***/ 196:
/*!*****************************************!*\
  !*** ./app/javascript/packs/gontest.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var oneElement = document.getElementsByClassName("btn-link")[0];
var twoElement = document.getElementsByClassName("btn-link")[1];
var threeElement = document.getElementsByClassName("btn-link")[2];
var fourElement = document.getElementsByClassName("btn-link")[3];
var fiveElement = document.getElementsByClassName("btn-link")[4];
var sixElement = document.getElementsByClassName("btn-link")[5];
var sevenElement = document.getElementsByClassName("btn-link")[6];
var eightElement = document.getElementsByClassName("btn-link")[7];
var nineElement = document.getElementsByClassName("btn-link")[8];

oneElement.addEventListener("click", doSomething, false);
twoElement.addEventListener("click", doSomething, false);
threeElement.addEventListener("click", doSomething, false);
fourElement.addEventListener("click", doSomething, false);
fiveElement.addEventListener("click", doSomething, false);
sixElement.addEventListener("click", doSomething, false);
sevenElement.addEventListener("click", doSomething, false);
eightElement.addEventListener("click", doSomething, false);
nineElement.addEventListener("click", doSomething, false);

function doSomething(event) {
  var clickedItem_parent = event.target.closest(".card-goal-day");
  clickedItem_parent.remove();
  //alert("Your goal has been removed")
}

// var oneElement = document.getElementsByClassName("btn-link")[0];

// oneElement.addEventListener("click",(event) => {
//   var clickedItem_parent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//   console.log(clickedItem_parent);
//   clickedItem_parent.remove();
// });

// var oneElement = document.getElementsByClassName("btn-link")[0];

// oneElement.addEventListener("click",(event) => {
//    var clickedItem_parent = event.target.closest(".card-goal-day");
//   clickedItem_parent.remove();
//   console.log(event.target.getElementsByTagName("#id").value);
//   alert("Your goal has been removed")
// });

/***/ })

/******/ });
//# sourceMappingURL=gontest-fc0629d94225118dc7f0.js.map