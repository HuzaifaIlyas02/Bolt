"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c26396061f52\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NDI4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMyNjM5NjA2MWY1MlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/MobileNav.tsx":
/*!**************************************!*\
  !*** ./src/components/MobileNav.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MobileNav = (param)=>{\n    let { isAuth } = param;\n    _s();\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const toggleOpen = ()=>setOpen((prev)=>!prev);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isOpen) toggleOpen();\n    }, [\n        pathname\n    ]);\n    const closeOnCurrent = (href)=>{\n        if (pathname === href) {\n            toggleOpen();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: toggleOpen,\n                className: \"relative z-50 h-5 w-5 text-zinc-700\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8\",\n                    children: !isAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    onClick: ()=>closeOnCurrent(\"/sign-up\"),\n                                    className: \"flex items-center w-full font-semibold text-green-600\",\n                                    href: \"/sign-up\",\n                                    children: [\n                                        \"Get started\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"ml-2 h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"my-3 h-px w-full bg-gray-300\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    onClick: ()=>closeOnCurrent(\"/sign-in\"),\n                                    className: \"flex items-center w-full font-semibold\",\n                                    href: \"/sign-in\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"my-3 h-px w-full bg-gray-300\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    onClick: ()=>closeOnCurrent(\"/pricing\"),\n                                    className: \"flex items-center w-full font-semibold\",\n                                    href: \"/pricing\",\n                                    children: \"Pricing\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    onClick: ()=>closeOnCurrent(\"/dashboard\"),\n                                    className: \"flex items-center w-full font-semibold\",\n                                    href: \"/dashboard\",\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"my-3 h-px w-full bg-gray-300\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    className: \"flex items-center w-full font-semibold\",\n                                    href: \"/sign-out\",\n                                    children: \"Sign out\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PMYLS\\\\Desktop\\\\Bolt\\\\Bolt\\\\src\\\\components\\\\MobileNav.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MobileNav, \"E/+q7bzzoAQs5bdfiQcyY0esYkM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vYmlsZU5hdi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVnRDtBQUNuQjtBQUNpQjtBQUNGO0FBRTVDLE1BQU1NLFlBQVk7UUFBQyxFQUFFQyxNQUFNLEVBQXVCOztJQUNoRCxNQUFNLENBQUNDLFFBQVFDLFFBQVEsR0FBR0osK0NBQVFBLENBQVU7SUFFNUMsTUFBTUssYUFBYSxJQUFNRCxRQUFRLENBQUNFLE9BQVMsQ0FBQ0E7SUFFNUMsTUFBTUMsV0FBV1QsNERBQVdBO0lBRTVCQyxnREFBU0EsQ0FBQztRQUNSLElBQUlJLFFBQVFFO0lBQ2QsR0FBRztRQUFDRTtLQUFTO0lBRWIsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCLElBQUlGLGFBQWFFLE1BQU07WUFDckJKO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2YsMkZBQUlBO2dCQUNIZ0IsU0FBU1A7Z0JBQ1RNLFdBQVU7Ozs7OztZQUdYUix1QkFDQyw4REFBQ087Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFHRixXQUFVOzhCQUNYLENBQUNULHVCQUNBOzswQ0FDRSw4REFBQ1k7MENBQ0MsNEVBQUNqQixpREFBSUE7b0NBQ0hlLFNBQVMsSUFBTUosZUFBZTtvQ0FDOUJHLFdBQVU7b0NBQ1ZGLE1BQUs7O3dDQUNOO3NEQUVDLDhEQUFDZCwyRkFBVUE7NENBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUIsOERBQUNHO2dDQUFHSCxXQUFVOzs7Ozs7MENBQ2QsOERBQUNHOzBDQUNDLDRFQUFDakIsaURBQUlBO29DQUNIZSxTQUFTLElBQU1KLGVBQWU7b0NBQzlCRyxXQUFVO29DQUNWRixNQUFLOzhDQUNOOzs7Ozs7Ozs7OzswQ0FJSCw4REFBQ0s7Z0NBQUdILFdBQVU7Ozs7OzswQ0FDZCw4REFBQ0c7MENBQ0MsNEVBQUNqQixpREFBSUE7b0NBQ0hlLFNBQVMsSUFBTUosZUFBZTtvQ0FDOUJHLFdBQVU7b0NBQ1ZGLE1BQUs7OENBQ047Ozs7Ozs7Ozs7OztxREFNTDs7MENBQ0UsOERBQUNLOzBDQUNDLDRFQUFDakIsaURBQUlBO29DQUNIZSxTQUFTLElBQU1KLGVBQWU7b0NBQzlCRyxXQUFVO29DQUNWRixNQUFLOzhDQUNOOzs7Ozs7Ozs7OzswQ0FJSCw4REFBQ0s7Z0NBQUdILFdBQVU7Ozs7OzswQ0FDZCw4REFBQ0c7MENBQ0MsNEVBQUNqQixpREFBSUE7b0NBQ0hjLFdBQVU7b0NBQ1ZGLE1BQUs7OENBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBUVQ7Ozs7Ozs7QUFHVjtHQXRGTVI7O1FBS2FILHdEQUFXQTs7O0tBTHhCRztBQXdGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVOYXYudHN4P2MxNDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBNZW51IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNb2JpbGVOYXYgPSAoeyBpc0F1dGggfTogeyBpc0F1dGg6IGJvb2xlYW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT4gc2V0T3BlbigocHJldikgPT4gIXByZXYpO1xyXG5cclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNPcGVuKSB0b2dnbGVPcGVuKCk7XHJcbiAgfSwgW3BhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlT25DdXJyZW50ID0gKGhyZWY6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSBocmVmKSB7XHJcbiAgICAgIHRvZ2dsZU9wZW4oKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW59XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgei01MCBoLTUgdy01IHRleHQtemluYy03MDBcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge2lzT3BlbiA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS10b3AtNSBmYWRlLWluLTIwIGluc2V0LTAgei0wIHctZnVsbFwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci16aW5jLTIwMCBzaGFkb3cteGwgZ3JpZCB3LWZ1bGwgZ2FwLTMgcHgtMTAgcHQtMjAgcGItOFwiPlxyXG4gICAgICAgICAgICB7IWlzQXV0aCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlT25DdXJyZW50KFwiL3NpZ24tdXBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmVlbi02MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2lnbi11cFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cIm1sLTIgaC01IHctNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktMyBoLXB4IHctZnVsbCBiZy1ncmF5LTMwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VPbkN1cnJlbnQoXCIvc2lnbi1pblwiKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgZm9udC1zZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaWduLWluXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zIGgtcHggdy1mdWxsIGJnLWdyYXktMzAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZU9uQ3VycmVudChcIi9wcmljaW5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBmb250LXNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3ByaWNpbmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJpY2luZ1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VPbkN1cnJlbnQoXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBmb250LXNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zIGgtcHggdy1mdWxsIGJnLWdyYXktMzAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgZm9udC1zZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaWduLW91dFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTmF2O1xyXG4iXSwibmFtZXMiOlsiQXJyb3dSaWdodCIsIk1lbnUiLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1vYmlsZU5hdiIsImlzQXV0aCIsImlzT3BlbiIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwicHJldiIsInBhdGhuYW1lIiwiY2xvc2VPbkN1cnJlbnQiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MobileNav.tsx\n"));

/***/ })

});