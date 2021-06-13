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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/boom */ \"@hapi/boom\");\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_boom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_method_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/method-handler */ \"./helpers/method-handler.ts\");\n/* harmony import */ var _schemas_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/weather */ \"./schemas/weather.ts\");\n\n\n\n\n\nconst getHandler = async (req, res) => {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://api.openweathermap.org/data/2.5/weather?q=wroclaw&units=metric&appid=${process.env.WEATHER_API_KEY}`);\n\n  try {\n    const weather = _schemas_weather__WEBPACK_IMPORTED_MODULE_3__.WeatherSchema.parse(data);\n    res.status(200).json(JSON.stringify(weather));\n  } catch (e) {\n    // logger.info(`Bad search request: ${query}`);\n    console.log(e);\n    throw _hapi_boom__WEBPACK_IMPORTED_MODULE_0___default().badRequest(e.message, e);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_helpers_method_handler__WEBPACK_IMPORTED_MODULE_2__.methodHandler)({\n  get: getHandler\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5keS1ib3gvLi9wYWdlcy9hcGkvd2VhdGhlci9pbmRleC50cz80NjIxIl0sIm5hbWVzIjpbImdldEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiYXhpb3MiLCJwcm9jZXNzIiwiZW52IiwiV0VBVEhFUl9BUElfS0VZIiwid2VhdGhlciIsIldlYXRoZXJTY2hlbWEiLCJzdGF0dXMiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJjb25zb2xlIiwibG9nIiwiQm9vbSIsIm1lc3NhZ2UiLCJtZXRob2RIYW5kbGVyIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ3RFLFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1DLGdEQUFBLENBQVcsZ0ZBQStFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBZ0IsRUFBdEgsQ0FBdkI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBR0MsaUVBQUEsQ0FBb0JOLElBQXBCLENBQWhCO0FBQ0FELE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsT0FBZixDQUFyQjtBQUNELEdBSEQsQ0FHRSxPQUFPTSxDQUFQLEVBQVU7QUFDVjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFVBQU1HLDREQUFBLENBQWlCSCxDQUFELENBQUlJLE9BQXBCLEVBQTZCSixDQUE3QixDQUFOO0FBQ0Q7QUFDRixDQVZEOztBQVlBLCtEQUFlSyxzRUFBYSxDQUFDO0FBQUVDLEtBQUcsRUFBRXBCO0FBQVAsQ0FBRCxDQUE1QiIsImZpbGUiOiIuL3BhZ2VzL2FwaS93ZWF0aGVyL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvb20gZnJvbSAnQGhhcGkvYm9vbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBtZXRob2RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tZXRob2QtaGFuZGxlcic7XG5pbXBvcnQgeyBXZWF0aGVyU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcy93ZWF0aGVyJztcblxuY29uc3QgZ2V0SGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT13cm9jbGF3JnVuaXRzPW1ldHJpYyZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWX1gKVxuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBXZWF0aGVyU2NoZW1hLnBhcnNlKGRhdGEpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04uc3RyaW5naWZ5KHdlYXRoZXIpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGxvZ2dlci5pbmZvKGBCYWQgc2VhcmNoIHJlcXVlc3Q6ICR7cXVlcnl9YCk7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICB0aHJvdyBCb29tLmJhZFJlcXVlc3QoKGUpLm1lc3NhZ2UsIGUpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RIYW5kbGVyKHsgZ2V0OiBnZXRIYW5kbGVyIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/weather/index.ts\n");

/***/ }),

/***/ "./schemas/weather.ts":
/*!****************************!*\
  !*** ./schemas/weather.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WeatherSchema\": function() { return /* binding */ WeatherSchema; }\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WeatherSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n  coord: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    lon: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    lat: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()\n  }),\n  weather: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    main: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    icon: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n  })),\n  base: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n  main: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    temp: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    feels_like: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    temp_min: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    temp_max: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    pressure: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    humidity: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()\n  }),\n  visibility: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n  wind: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    speed: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    deg: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()\n  }),\n  cloud: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    all: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()\n  }).optional(),\n  dt: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n  sys: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    message: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().optional(),\n    country: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    sunrise: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n    sunset: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()\n  }),\n  timezone: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n  id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n  name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n  cod: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5keS1ib3gvLi9zY2hlbWFzL3dlYXRoZXIudHM/NDVmYiJdLCJuYW1lcyI6WyJXZWF0aGVyU2NoZW1hIiwieiIsImNvb3JkIiwibG9uIiwibGF0Iiwid2VhdGhlciIsImlkIiwibWFpbiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImJhc2UiLCJ0ZW1wIiwiZmVlbHNfbGlrZSIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJwcmVzc3VyZSIsImh1bWlkaXR5IiwidmlzaWJpbGl0eSIsIndpbmQiLCJzcGVlZCIsImRlZyIsImNsb3VkIiwiYWxsIiwib3B0aW9uYWwiLCJkdCIsInN5cyIsInR5cGUiLCJtZXNzYWdlIiwiY291bnRyeSIsInN1bnJpc2UiLCJzdW5zZXQiLCJ0aW1lem9uZSIsIm5hbWUiLCJjb2QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUEsYUFBYSxHQUFHQyx5Q0FBQSxDQUFTO0FBQ3BDQyxPQUFLLEVBQUVELHlDQUFBLENBQVM7QUFDZEUsT0FBRyxFQUFFRix5Q0FBQSxFQURTO0FBRWRHLE9BQUcsRUFBRUgseUNBQUE7QUFGUyxHQUFULENBRDZCO0FBS3BDSSxTQUFPLEVBQUVKLHdDQUFBLENBQVFBLHlDQUFBLENBQVM7QUFDeEJLLE1BQUUsRUFBRUwseUNBQUEsRUFEb0I7QUFFeEJNLFFBQUksRUFBRU4seUNBQUEsRUFGa0I7QUFHeEJPLGVBQVcsRUFBRVAseUNBQUEsRUFIVztBQUl4QlEsUUFBSSxFQUFFUix5Q0FBQTtBQUprQixHQUFULENBQVIsQ0FMMkI7QUFXcENTLE1BQUksRUFBRVQseUNBQUEsRUFYOEI7QUFZcENNLE1BQUksRUFBRU4seUNBQUEsQ0FBUztBQUNiVSxRQUFJLEVBQUVWLHlDQUFBLEVBRE87QUFFYlcsY0FBVSxFQUFFWCx5Q0FBQSxFQUZDO0FBR2JZLFlBQVEsRUFBRVoseUNBQUEsRUFIRztBQUliYSxZQUFRLEVBQUViLHlDQUFBLEVBSkc7QUFLYmMsWUFBUSxFQUFFZCx5Q0FBQSxFQUxHO0FBTWJlLFlBQVEsRUFBRWYseUNBQUE7QUFORyxHQUFULENBWjhCO0FBb0JwQ2dCLFlBQVUsRUFBRWhCLHlDQUFBLEVBcEJ3QjtBQXFCcENpQixNQUFJLEVBQUVqQix5Q0FBQSxDQUFTO0FBQ2JrQixTQUFLLEVBQUVsQix5Q0FBQSxFQURNO0FBRWJtQixPQUFHLEVBQUVuQix5Q0FBQTtBQUZRLEdBQVQsQ0FyQjhCO0FBeUJwQ29CLE9BQUssRUFBRXBCLHlDQUFBLENBQVM7QUFDZHFCLE9BQUcsRUFBRXJCLHlDQUFBO0FBRFMsR0FBVCxFQUVKc0IsUUFGSSxFQXpCNkI7QUE0QnBDQyxJQUFFLEVBQUV2Qix5Q0FBQSxFQTVCZ0M7QUE2QnBDd0IsS0FBRyxFQUFFeEIseUNBQUEsQ0FBUztBQUNaeUIsUUFBSSxFQUFFekIseUNBQUEsRUFETTtBQUVaSyxNQUFFLEVBQUVMLHlDQUFBLEVBRlE7QUFHWjBCLFdBQU8sRUFBRTFCLHlDQUFBLEdBQVdzQixRQUFYLEVBSEc7QUFJWkssV0FBTyxFQUFFM0IseUNBQUEsRUFKRztBQUtaNEIsV0FBTyxFQUFFNUIseUNBQUEsRUFMRztBQU1aNkIsVUFBTSxFQUFFN0IseUNBQUE7QUFOSSxHQUFULENBN0IrQjtBQXFDcEM4QixVQUFRLEVBQUU5Qix5Q0FBQSxFQXJDMEI7QUFzQ3BDSyxJQUFFLEVBQUVMLHlDQUFBLEVBdENnQztBQXVDcEMrQixNQUFJLEVBQUUvQix5Q0FBQSxFQXZDOEI7QUF3Q3BDZ0MsS0FBRyxFQUFFaEMseUNBQUE7QUF4QytCLENBQVQsQ0FBdEIiLCJmaWxlIjoiLi9zY2hlbWFzL3dlYXRoZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgV2VhdGhlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY29vcmQ6IHoub2JqZWN0KHtcbiAgICBsb246IHoubnVtYmVyKCksXG4gICAgbGF0OiB6Lm51bWJlcigpLFxuICB9KSxcbiAgd2VhdGhlcjogei5hcnJheSh6Lm9iamVjdCh7XG4gICAgaWQ6IHoubnVtYmVyKCksXG4gICAgbWFpbjogei5zdHJpbmcoKSxcbiAgICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgICBpY29uOiB6LnN0cmluZygpLFxuICB9KSksXG4gIGJhc2U6IHouc3RyaW5nKCksXG4gIG1haW46IHoub2JqZWN0KHtcbiAgICB0ZW1wOiB6Lm51bWJlcigpLFxuICAgIGZlZWxzX2xpa2U6IHoubnVtYmVyKCksXG4gICAgdGVtcF9taW46IHoubnVtYmVyKCksXG4gICAgdGVtcF9tYXg6IHoubnVtYmVyKCksXG4gICAgcHJlc3N1cmU6IHoubnVtYmVyKCksXG4gICAgaHVtaWRpdHk6IHoubnVtYmVyKClcbiAgfSksXG4gIHZpc2liaWxpdHk6IHoubnVtYmVyKCksXG4gIHdpbmQ6IHoub2JqZWN0KHtcbiAgICBzcGVlZDogei5udW1iZXIoKSxcbiAgICBkZWc6IHoubnVtYmVyKClcbiAgfSksXG4gIGNsb3VkOiB6Lm9iamVjdCh7XG4gICAgYWxsOiB6Lm51bWJlcigpLFxuICB9KS5vcHRpb25hbCgpLFxuICBkdDogei5udW1iZXIoKSxcbiAgc3lzOiB6Lm9iamVjdCh7XG4gICAgdHlwZTogei5udW1iZXIoKSxcbiAgICBpZDogei5udW1iZXIoKSxcbiAgICBtZXNzYWdlOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgY291bnRyeTogei5zdHJpbmcoKSxcbiAgICBzdW5yaXNlOiB6Lm51bWJlcigpLCAgXG4gICAgc3Vuc2V0OiB6Lm51bWJlcigpLFxuICB9KSxcbiAgdGltZXpvbmU6IHoubnVtYmVyKCksXG4gIGlkOiB6Lm51bWJlcigpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBjb2Q6IHoubnVtYmVyKCksXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./schemas/weather.ts\n");

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

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("zod");;

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