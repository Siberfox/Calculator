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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_calculator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/calculator.js */ "./js/calculator.js");



const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-clear]');
const floatBtn = document.querySelector('[data-float]');
const previousDisplay = document.querySelector('[data-display-previous]');
const currentDisplay = document.querySelector('[data-display-current]');

const calculator = new _js_calculator_js__WEBPACK_IMPORTED_MODULE_1__["default"](previousDisplay, currentDisplay);

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.getValues(button.innerText);
    calculator.updateDisplay();
  });
});

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.getOperator(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener('click', () => {
  calculator.equal();
  calculator.updateDisplay();
});

clearBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

floatBtn.addEventListener('click', () => {
  calculator.getFloatValues();
  calculator.updateDisplay();
});


/***/ }),

/***/ "./js/calculator.js":
/*!**************************!*\
  !*** ./js/calculator.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
class Calculator {
  constructor(prevDisplay, currDisplay) {
    this.prevDisplay = prevDisplay;
    this.currDisplay = currDisplay;
    this.valueArray = [];
  }

  getValues(number) {
    if (this.currDisplay.innerText === '0' || this.currDisplay.innerText === 'Invalid expression') {
      this.currDisplay.innerText = number;
    } else {
      this.currDisplay.innerText += number;
    }
  }

  getFloatValues() {
    if (this.currDisplay.innerText.includes('.')) {
      return;
    }
    this.currDisplay.innerText += '.';
  }

  getOperator(operator) {
    if (this.currDisplay.innerText === 'Invalid expression') {
      this.currDisplay.innerText = '0';
    }
    if (this.valueArray.length === 2 && this.currDisplay.innerText) {
      this.equal();
    }
    this.valueArray.push(this.currDisplay.innerText, operator);
    this.prevDisplay.innerText = this.valueArray.join(' ');
    this.currDisplay.innerText = '';
  }

  equal() {
    const prev = parseFloat(this.valueArray[0]);
    const curr = parseFloat(this.currDisplay.innerText);
    switch (this.valueArray[1]) {
      case '+':
        this.currDisplay.innerText = prev + curr;
        break;
      case '-':
        this.currDisplay.innerText = prev - curr;
        break;
      case 'x':
        this.currDisplay.innerText = prev * curr;
        break;
      case '÷':
        this.currDisplay.innerText = prev / curr;
        break;
      default:
    }
    if (this.valueArray.length > 2 || !isFinite(this.currDisplay.innerText)) {
      this.currDisplay.innerText = 'Invalid expression';
    } else if (parseFloat(this.currDisplay.innerText) % 1 !== 0) {
      this.currDisplay.innerText = parseFloat(this.currDisplay.innerText).toFixed(3);
    }
    this.valueArray.length = 0;
    this.prevDisplay.innerText = '';
  }

  clear() {
    this.prevDisplay.innerText = '';
    this.currDisplay.innerText = '0';
    this.valueArray.length = 0;
  }

  updateDisplay() {
    this.currDisplay.style.fontSize = '';
    if (this.currDisplay.innerText.length > 7) {
      this.currDisplay.style.fontSize = '40px';
    }
    if (this.currDisplay.innerText.length > 11) {
      this.currDisplay.style.fontSize = '30px';
    }
  }
}


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=index.js.map