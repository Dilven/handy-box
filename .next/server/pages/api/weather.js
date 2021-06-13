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
exports.id = "pages/api/weather";
exports.ids = ["pages/api/weather"];
exports.modules = {

/***/ "./helpers/method-handler.ts":
/*!***********************************!*\
  !*** ./helpers/method-handler.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"methodHandler\": function() { return /* binding */ methodHandler; }\n/* harmony export */ });\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/boom */ \"@hapi/boom\");\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_boom__WEBPACK_IMPORTED_MODULE_0__);\n\nconst methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch', 'purge', 'link', 'unlink'];\n\n// TODO\n// eslint-disable-next-line max-len\nconst isHttpMethod = method => !!method && methods.some(m => m === method); // TODO\n// eslint-disable-next-line max-len\n\n\nconst methodHandler = handlers => (req, res) => {\n  var _req$method;\n\n  const method = (_req$method = req.method) === null || _req$method === void 0 ? void 0 : _req$method.toLowerCase();\n  if (!isHttpMethod(method)) throw _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default().notFound();\n  const handler = handlers[method];\n  if (!handler) throw _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default().notFound();\n  handler(req, res);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5keS1ib3gvLi9oZWxwZXJzL21ldGhvZC1oYW5kbGVyLnRzPzkyODYiXSwibmFtZXMiOlsibWV0aG9kcyIsImlzSHR0cE1ldGhvZCIsIm1ldGhvZCIsInNvbWUiLCJtIiwibWV0aG9kSGFuZGxlciIsImhhbmRsZXJzIiwicmVxIiwicmVzIiwidG9Mb3dlckNhc2UiLCJCb29tIiwiaGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixNQUFsQixFQUEwQixTQUExQixFQUFxQyxNQUFyQyxFQUE2QyxLQUE3QyxFQUFvRCxPQUFwRCxFQUE2RCxPQUE3RCxFQUFzRSxNQUF0RSxFQUE4RSxRQUE5RSxDQUFoQjs7QUFHQTtBQUNBO0FBQ0EsTUFBTUMsWUFBWSxHQUFJQyxNQUFELElBQTJDLENBQUMsQ0FBQ0EsTUFBRixJQUFZRixPQUFPLENBQUNHLElBQVIsQ0FBY0MsQ0FBRCxJQUFPQSxDQUFDLEtBQUtGLE1BQTFCLENBQTVFLEMsQ0FFQTtBQUNBOzs7QUFDTyxNQUFNRyxhQUFhLEdBQUlDLFFBQUQsSUFBMkQsQ0FBQ0MsR0FBRCxFQUFzQkMsR0FBdEIsS0FBK0M7QUFBQTs7QUFDckksUUFBTU4sTUFBTSxrQkFBR0ssR0FBRyxDQUFDTCxNQUFQLGdEQUFHLFlBQVlPLFdBQVosRUFBZjtBQUNBLE1BQUksQ0FBQ1IsWUFBWSxDQUFDQyxNQUFELENBQWpCLEVBQTJCLE1BQU1RLDBEQUFBLEVBQU47QUFDM0IsUUFBTUMsT0FBTyxHQUFHTCxRQUFRLENBQUNKLE1BQUQsQ0FBeEI7QUFDQSxNQUFJLENBQUNTLE9BQUwsRUFBYyxNQUFNRCwwREFBQSxFQUFOO0FBQ2RDLFNBQU8sQ0FBQ0osR0FBRCxFQUFNQyxHQUFOLENBQVA7QUFDRCxDQU5NIiwiZmlsZSI6Ii4vaGVscGVycy9tZXRob2QtaGFuZGxlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb29tIGZyb20gJ0BoYXBpL2Jvb20nO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpSGFuZGxlciwgTmV4dEFwaVJlc3BvbnNlLCBOZXh0QXBpUmVxdWVzdCB9IGZyb20gJ25leHQnO1xuXG5jb25zdCBtZXRob2RzID0gWydnZXQnLCAnZGVsZXRlJywgJ2hlYWQnLCAnb3B0aW9ucycsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdwdXJnZScsICdsaW5rJywgJ3VubGluayddIGFzIGNvbnN0O1xudHlwZSBIdHRwTWV0aG9kID0gdHlwZW9mIG1ldGhvZHNbbnVtYmVyXVxuXG4vLyBUT0RPXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuY29uc3QgaXNIdHRwTWV0aG9kID0gKG1ldGhvZD86IHN0cmluZyk6IG1ldGhvZCBpcyBIdHRwTWV0aG9kID0+ICEhbWV0aG9kICYmIG1ldGhvZHMuc29tZSgobSkgPT4gbSA9PT0gbWV0aG9kKTtcblxuLy8gVE9ET1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmV4cG9ydCBjb25zdCBtZXRob2RIYW5kbGVyID0gKGhhbmRsZXJzOiBQYXJ0aWFsPFJlY29yZDxIdHRwTWV0aG9kLCBOZXh0QXBpSGFuZGxlcj4+KSA9PiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZD8udG9Mb3dlckNhc2UoKTtcbiAgaWYgKCFpc0h0dHBNZXRob2QobWV0aG9kKSkgdGhyb3cgQm9vbS5ub3RGb3VuZCgpO1xuICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNbbWV0aG9kXTtcbiAgaWYgKCFoYW5kbGVyKSB0aHJvdyBCb29tLm5vdEZvdW5kKCk7XG4gIGhhbmRsZXIocmVxLCByZXMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/method-handler.ts\n");

/***/ }),

/***/ "./pages/api/weather/index.ts":
/*!************************************!*\
  !*** ./pages/api/weather/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/boom */ \"@hapi/boom\");\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_boom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_method_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/method-handler */ \"./helpers/method-handler.ts\");\n\n\n\n\nconst getHandler = async (req, res) => {\n  console.log('DEBUGGING:  ~ file: index.ts ~ line 8 ~ getHandler ~ req', req.query);\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.place}&units=metric&appid=${process.env.WEATHER_API_KEY}`);\n\n  try {\n    // const weather = WeatherSchema.parse(data);\n    res.status(200).json(JSON.stringify(data));\n  } catch (e) {\n    // logger.info(`Bad search request: ${query}`);\n    console.log(e);\n    throw _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default().badRequest(e.message, e);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_helpers_method_handler__WEBPACK_IMPORTED_MODULE_2__.methodHandler)({\n  get: getHandler\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5keS1ib3gvLi9wYWdlcy9hcGkvd2VhdGhlci9pbmRleC50cz80NjIxIl0sIm5hbWVzIjpbImdldEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJkYXRhIiwiYXhpb3MiLCJwbGFjZSIsInByb2Nlc3MiLCJlbnYiLCJXRUFUSEVSX0FQSV9LRVkiLCJzdGF0dXMiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJCb29tIiwibWVzc2FnZSIsIm1ldGhvZEhhbmRsZXIiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFHQSxNQUFNQSxVQUFVLEdBQUcsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDdEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBEQUFaLEVBQXdFSCxHQUFHLENBQUNJLEtBQTVFO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUMsZ0RBQUEsQ0FBVyxxREFBb0ROLEdBQUcsQ0FBQ0ksS0FBSixDQUFVRyxLQUFNLHVCQUFzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQWdCLEVBQWpJLENBQXZCOztBQUNBLE1BQUk7QUFDRjtBQUNBVCxPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVULElBQWYsQ0FBckI7QUFDRCxHQUhELENBR0UsT0FBT1UsQ0FBUCxFQUFVO0FBQ1Y7QUFDQWIsV0FBTyxDQUFDQyxHQUFSLENBQVlZLENBQVo7QUFDQSxVQUFNQyw0REFBQSxDQUFpQkQsQ0FBRCxDQUFJRSxPQUFwQixFQUE2QkYsQ0FBN0IsQ0FBTjtBQUNEO0FBQ0YsQ0FYRDs7QUFhQSwrREFBZUcsc0VBQWEsQ0FBQztBQUFFQyxLQUFHLEVBQUVwQjtBQUFQLENBQUQsQ0FBNUIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvd2VhdGhlci9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb29tIGZyb20gJ0BoYXBpL2Jvb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgbWV0aG9kSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbWV0aG9kLWhhbmRsZXInO1xuaW1wb3J0IHsgV2VhdGhlclNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvd2VhdGhlcic7XG5cbmNvbnN0IGdldEhhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coJ0RFQlVHR0lORzogIH4gZmlsZTogaW5kZXgudHMgfiBsaW5lIDggfiBnZXRIYW5kbGVyIH4gcmVxJywgcmVxLnF1ZXJ5KTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtyZXEucXVlcnkucGxhY2V9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWX1gKVxuICB0cnkge1xuICAgIC8vIGNvbnN0IHdlYXRoZXIgPSBXZWF0aGVyU2NoZW1hLnBhcnNlKGRhdGEpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGxvZ2dlci5pbmZvKGBCYWQgc2VhcmNoIHJlcXVlc3Q6ICR7cXVlcnl9YCk7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICB0aHJvdyBCb29tLmJhZFJlcXVlc3QoKGUpLm1lc3NhZ2UsIGUpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RIYW5kbGVyKHsgZ2V0OiBnZXRIYW5kbGVyIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/weather/index.ts\n");

/***/ }),

/***/ "@hapi/boom":
/*!*****************************!*\
  !*** external "@hapi/boom" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("@hapi/boom");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/weather/index.ts"));
module.exports = __webpack_exports__;

})();