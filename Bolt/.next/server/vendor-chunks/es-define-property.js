"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-define-property";
exports.ids = ["vendor-chunks/es-define-property"];
exports.modules = {

/***/ "(rsc)/./node_modules/es-define-property/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-define-property/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(rsc)/./node_modules/get-intrinsic/index.js\");\n\n/** @type {import('.')} */\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true) || false;\nif ($defineProperty) {\n\ttry {\n\t\t$defineProperty({}, 'a', { value: 1 });\n\t} catch (e) {\n\t\t// IE 8 has a broken defineProperty\n\t\t$defineProperty = false;\n\t}\n}\n\nmodule.exports = $defineProperty;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXMtZGVmaW5lLXByb3BlcnR5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFlOztBQUUxQyxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsVUFBVTtBQUN2QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2x0Ly4vbm9kZV9tb2R1bGVzL2VzLWRlZmluZS1wcm9wZXJ0eS9pbmRleC5qcz9jMmY2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSkgfHwgZmFsc2U7XG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdCRkZWZpbmVQcm9wZXJ0eSA9IGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJGRlZmluZVByb3BlcnR5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/es-define-property/index.js\n");

/***/ })

};
;