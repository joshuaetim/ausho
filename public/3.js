(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/src/admin/pages/investor/index.js":
/*!********************************************************!*\
  !*** ./resources/js/src/admin/pages/investor/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _investor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investor */ "./resources/js/src/admin/pages/investor/investor.js");

/* harmony default export */ __webpack_exports__["default"] = (_investor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/admin/pages/investor/investor.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/admin/pages/investor/investor.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/arpeiks/career/josh/ausho/resources/js/src/admin/pages/investor/investor.js: Const declarations require an initialization value (61:22)\n\n\u001b[0m \u001b[90m 59 | \u001b[39m  }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 60 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 61 | \u001b[39m    \u001b[36mconst\u001b[39m handleDelete async () \u001b[33m=>\u001b[39m deleteInvestor(slug)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 62 | \u001b[39m  \u001b[36mconst\u001b[39m handleUpdate \u001b[33m=\u001b[39m async values \u001b[33m=>\u001b[39m updateInvestor(values)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 63 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 64 | \u001b[39m  \u001b[36mreturn\u001b[39m (\u001b[0m\n    at Object._raise (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:748:17)\n    at Object.raiseWithData (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.raise (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.parseVar (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12343:18)\n    at Object.parseVarStatement (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12151:10)\n    at Object.parseStatementContent (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11743:21)\n    at Object.parseStatement (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Object.parseBlockOrModuleBlockBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Object.parseBlockBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Object.parseBlock (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12233:10)\n    at Object.parseFunctionBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11221:24)\n    at Object.parseArrowExpression (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11193:10)\n    at Object.parseParenAndDistinguishExpression (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10766:12)\n    at Object.parseExprAtom (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Object.parseExprAtom (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:4763:20)\n    at Object.parseExprSubscripts (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Object.parseUpdate (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Object.parseMaybeUnary (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Object.parseExprOps (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Object.parseMaybeConditional (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Object.parseMaybeAssign (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9893:39\n    at Object.allowInAnd (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Object.parseMaybeAssignAllowIn (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Object.parseVar (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12339:70)\n    at Object.parseVarStatement (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12151:10)\n    at Object.parseStatementContent (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11743:21)\n    at Object.parseStatement (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Object.parseBlockOrModuleBlockBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Object.parseBlockBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Object.parseTopLevel (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11607:10)\n    at Object.parse (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:13415:10)\n    at parse (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:13468:38)\n    at parser (/home/arpeiks/career/josh/ausho/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/arpeiks/career/josh/ausho/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)");

/***/ })

}]);