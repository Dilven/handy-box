/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/cache.ts":
/*!*************************!*\
  !*** ./config/cache.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultOptions\": function() { return /* binding */ defaultOptions; }\n/* harmony export */ });\nconst THIRTY_MINUTES = 1000 * 60 * 30;\nconst defaultOptions = {\n  queries: {\n    refetchOnWindowFocus: false,\n    refetchOnMount: false,\n    staleTime: THIRTY_MINUTES\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5keS1ib3gvLi9jb25maWcvY2FjaGUudHM/N2E2YiJdLCJuYW1lcyI6WyJUSElSVFlfTUlOVVRFUyIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicmVmZXRjaE9uTW91bnQiLCJzdGFsZVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsT0FBTyxFQUFQLEdBQVksRUFBbkM7QUFFTyxNQUFNQyxjQUE4QixHQUFHO0FBQzVDQyxTQUFPLEVBQUU7QUFDUEMsd0JBQW9CLEVBQUUsS0FEZjtBQUVQQyxrQkFBYyxFQUFFLEtBRlQ7QUFHUEMsYUFBUyxFQUFFTDtBQUhKO0FBRG1DLENBQXZDIiwiZmlsZSI6Ii4vY29uZmlnL2NhY2hlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVmYXVsdE9wdGlvbnMgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbmNvbnN0IFRISVJUWV9NSU5VVEVTID0gMTAwMCAqIDYwICogMzA7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9uczogRGVmYXVsdE9wdGlvbnMgPSB7XG4gIHF1ZXJpZXM6IHtcbiAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgcmVmZXRjaE9uTW91bnQ6IGZhbHNlLFxuICAgIHN0YWxlVGltZTogVEhJUlRZX01JTlVURVMsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/cache.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/cache */ \"./config/cache.ts\");\n\nvar _jsxFileName = \"/home/dilven/Desktop/handy-box/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n  defaultOptions: _config_cache__WEBPACK_IMPORTED_MODULE_3__.defaultOptions\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n    client: queryClient,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5keS1ib3gvLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbInF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFJQTtBQUVBLE1BQU1BLFdBQVcsR0FBRyxJQUFJQyxvREFBSixDQUFnQjtBQUFFQyxnQkFBY0E7QUFBaEIsQ0FBaEIsQ0FBcEI7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQ2pELHNCQUNFLDhEQUFDLDREQUFEO0FBQXFCLFVBQU0sRUFBRUwsV0FBN0I7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFDRCwrREFBZUYsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQge1xuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbn0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4uL2NvbmZpZy9jYWNoZSc7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHsgZGVmYXVsdE9wdGlvbnMgfSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();