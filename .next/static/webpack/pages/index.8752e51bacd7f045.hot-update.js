"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/joinroomDialogue.tsx":
/*!*****************************************!*\
  !*** ./components/joinroomDialogue.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/Button.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_Globalcontext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/Globalcontext */ \"./contexts/Globalcontext.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar JoinRoomDialogue = function() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), showModal = ref[0], setShowModal = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), roomId = ref1[0], setRoomId = ref1[1];\n    // const [name, setName] = useState(\"\");\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,_contexts_Globalcontext__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)(), name = ref2.name, setName = ref2.setName;\n    var createNewRoom = function(e) {\n        e.preventDefault();\n        var id = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\n        setRoomId(id);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"room created\");\n    };\n    var joinRoom = function(e) {\n        e.preventDefault();\n        if (!roomId.trim() || !name.trim()) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Room ID and username is required\");\n        }\n        router.push(\"/editor/\".concat(roomId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                text: \"Go to Editor\",\n                onClickFunc: function() {\n                    return setShowModal(true);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" text-white border-0 rounded-lg shadow-lg relative flex flex-col w-full pb-4 bg-bgdark outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl font-semibold\",\n                                                children: \"Join Room\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-aut text-white border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: function() {\n                                                    return setShowModal(false);\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-red-700 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\u2715\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex space-y-3 relative p-6 flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-lg font-semibold mb-2\",\n                                                children: \"Paste invitation ROOM ID\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: \"custom-input\",\n                                                id: \"exampleFormControlInput1\",\n                                                placeholder: \"ROOM ID\",\n                                                value: roomId,\n                                                onChange: function(e) {\n                                                    return setRoomId(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                value: name,\n                                                onChange: function(e) {\n                                                    return setName(e.target.value);\n                                                },\n                                                className: \"custom-input\",\n                                                id: \"exampleFormControlInput1\",\n                                                placeholder: \"USERNAME\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end pr-6 rounded-b\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gradient-to-r from-red-400 to-orange-800\",\n                                            type: \"button\",\n                                            onClick: joinRoom,\n                                            children: \"Join\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"my-2 text-slate-500 text-lg leading-relaxed mx-8\",\n                                        children: [\n                                            \" \",\n                                            \"Click here to create a\\xa0\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                onClick: createNewRoom,\n                                                href: \"\",\n                                                className: \"text-primary font-bold border-b-2 border-primary hover:animate-pulse from-red-400 to-orange-800\",\n                                                children: \"New room\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, _this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\components\\\\joinroomDialogue.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n};\n_s(JoinRoomDialogue, \"J7vtY9qcaOIg1tnvGlzojHLYRiA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _contexts_Globalcontext__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext\n    ];\n});\n_c = JoinRoomDialogue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinRoomDialogue);\nvar _c;\n$RefreshReg$(_c, \"JoinRoomDialogue\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvam9pbnJvb21EaWFsb2d1ZS50c3g/MDhkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvR2xvYmFsY29udGV4dFwiO1xyXG4gXHJcbmludGVyZmFjZSBKb2luUm9vbURpYWxvZ3VlUHJvcHMge31cclxuXHJcbmNvbnN0IEpvaW5Sb29tRGlhbG9ndWU6IFJlYWN0LkZDPEpvaW5Sb29tRGlhbG9ndWVQcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcm9vbUlkLCBzZXRSb29tSWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IG5hbWUsIHNldE5hbWUgfSA9IHVzZUdsb2JhbENvbnRleHQoKVxyXG5cclxuICBjb25zdCBjcmVhdGVOZXdSb29tID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaWQgPSB1dWlkdjQoKTtcclxuICAgIHNldFJvb21JZChpZCk7XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwicm9vbSBjcmVhdGVkXCIpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgam9pblJvb20gPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZighcm9vbUlkLnRyaW0oKSB8fCAhbmFtZS50cmltKCkpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJSb29tIElEIGFuZCB1c2VybmFtZSBpcyByZXF1aXJlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5wdXNoKGAvZWRpdG9yLyR7cm9vbUlkfWApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcmltYXJ5QnV0dG9uXHJcbiAgICAgICAgdGV4dD1cIkdvIHRvIEVkaXRvclwiXHJcbiAgICAgICAgb25DbGlja0Z1bmM9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgLz5cclxuICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIGggdGV4dC13aGl0ZSBhY3RpdmU6YmctcGluay02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMiByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgT3BlbiByZWd1bGFyIG1vZGFsIFxyXG4gICAgICAgIDwvYnV0dG9uPiAgKi99XHJcbiAgICAgIHtzaG93TW9kYWwgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIGZpeGVkIGluc2V0LTAgei01MCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1hdXRvIG15LTYgbXgtYXV0byBtYXgtdy0yeGxcIj5cclxuICAgICAgICAgICAgICB7Lypjb250ZW50Ki99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBwYi00IGJnLWJnZGFyayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC01IGJvcmRlci1iIGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPkpvaW4gUm9vbTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgbWwtYXV0IHRleHQtd2hpdGUgYm9yZGVyLTAgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtcmVkLTcwMCAgaC02IHctNiB0ZXh0LTJ4bCBibG9jayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAmI3gyNzE1O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS15LTMgcmVsYXRpdmUgcC02IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3RlIGludml0YXRpb24gUk9PTSBJRFxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xJbnB1dDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUk9PTSBJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvb21JZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvb21JZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xJbnB1dDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVVNFUk5BTUVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgcHItNiByb3VuZGVkLWJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWVtZXJhbGQtNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MCBob3ZlcjpiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTQwMCB0by1vcmFuZ2UtODAwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtqb2luUm9vbX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEpvaW5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgdGV4dC1zbGF0ZS01MDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIENsaWNrIGhlcmUgdG8gY3JlYXRlIGEmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVOZXdSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LWJvbGQgYm9yZGVyLWItMiBib3JkZXItcHJpbWFyeSBob3ZlcjphbmltYXRlLXB1bHNlIGZyb20tcmVkLTQwMCB0by1vcmFuZ2UtODAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5ldyByb29tXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrIFwiPjwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luUm9vbURpYWxvZ3VlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByaW1hcnlCdXR0b24iLCJ2NCIsInV1aWR2NCIsInRvYXN0IiwidXNlUm91dGVyIiwidXNlR2xvYmFsQ29udGV4dCIsIkpvaW5Sb29tRGlhbG9ndWUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJyb29tSWQiLCJzZXRSb29tSWQiLCJyb3V0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImNyZWF0ZU5ld1Jvb20iLCJlIiwicHJldmVudERlZmF1bHQiLCJpZCIsInN1Y2Nlc3MiLCJqb2luUm9vbSIsInRyaW0iLCJlcnJvciIsInB1c2giLCJ0ZXh0Iiwib25DbGlja0Z1bmMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/joinroomDialogue.tsx\n");

/***/ })

});