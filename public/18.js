(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/row */ "./resources/js/src/components/row.js");
/* harmony import */ var _components_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/col */ "./resources/js/src/components/col.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/button */ "./resources/js/src/components/button.js");
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/textfield */ "./resources/js/src/components/textfield.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/container */ "./resources/js/src/components/container.js");
/* harmony import */ var _store_api_investors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/api/investors */ "./resources/js/src/store/api/investors.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var schema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().trim().email().required(),
  address: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().trim().required(),
  bank: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().trim().required(),
  phone: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().length(11).required(),
  account_number: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().length(10).required(),
  account_name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().trim().matches("[a-zA-Z]{2,}[\\s]{1}[a-zA-Z]{2,}[\\s]{0}", "Invalid format").required(),
  name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().trim().matches("[a-zA-Z]{2,}[\\s]{1}[a-zA-Z]{2,}[\\s]{0}", "Invalid format").required()
});

var Investor = function Investor() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])(),
      slug = _useParams.slug;

  var _useFetchInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_11__["useFetchInvestor"])(slug),
      fetchInvestor = _useFetchInvestor.refetch,
      isFetching = _useFetchInvestor.isFetching;

  var investors = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQueryClient"])().getQueryData("investors");
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (investors !== null && investors !== void 0 && investors.length) return;
    console.log("got called");

    _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetchInvestor();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  var investor = investors === null || investors === void 0 ? void 0 : investors.find(function (i) {
    return (i === null || i === void 0 ? void 0 : i.slug) === slug;
  });

  var _useUpdateInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_11__["useUpdateInvestor"])(slug),
      updating = _useUpdateInvestor.isLoading,
      updateInvestor = _useUpdateInvestor.mutateAsync;

  var _useDeleteInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_11__["useDeleteInvestor"])(slug),
      deleting = _useDeleteInvestor.isLoading,
      deleteInvestor = _useDeleteInvestor.mutateAsync;

  var initialValues = {
    name: investor === null || investor === void 0 ? void 0 : investor.name,
    bank: investor === null || investor === void 0 ? void 0 : investor.bank,
    phone: investor === null || investor === void 0 ? void 0 : investor.phone,
    email: investor === null || investor === void 0 ? void 0 : investor.email,
    address: investor === null || investor === void 0 ? void 0 : investor.address,
    account_name: investor === null || investor === void 0 ? void 0 : investor.account_name,
    account_number: investor === null || investor === void 0 ? void 0 : investor.account_number
  };

  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return deleteInvestor(slug);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDelete() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleUpdate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return updateInvestor({
                slug: slug,
                values: values
              });

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleUpdate(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  if (isFetching) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "FETCHING");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_container__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    onSubmit: handleUpdate,
    validationSchema: schema,
    initialValues: initialValues
  }, function (_ref4) {
    var errors = _ref4.errors,
        values = _ref4.values,
        touched = _ref4.touched,
        handleBlur = _ref4.handleBlur,
        handleSubmit = _ref4.handleSubmit,
        handleChange = _ref4.handleChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: "name",
      label: "Name",
      value: values.name,
      onBlur: handleBlur,
      feedback: errors.name,
      onChange: handleChange,
      placeholder: "Firstname Lastname",
      error: touched.name && errors.name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "email",
      name: "email",
      onBlur: handleBlur,
      value: values.email,
      label: "Email address",
      feedback: errors.email,
      onChange: handleChange,
      placeholder: "Enter email",
      error: touched.email && errors.email
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: "phone",
      label: "Phone Number",
      onBlur: handleBlur,
      value: values.phone,
      onChange: handleChange,
      feedback: errors.phone,
      placeholder: "Enter phone number",
      error: touched.phone && errors.phone
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: "bank",
      label: "Bank Name",
      onBlur: handleBlur,
      value: values.bank,
      feedback: errors.bank,
      onChange: handleChange,
      placeholder: "Enter bank name",
      error: touched.bank && errors.bank
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: "account_name",
      onBlur: handleBlur,
      label: "Account Name",
      onChange: handleChange,
      value: values.account_name,
      feedback: errors.account_name,
      placeholder: "Enter account name",
      error: touched.account_name && errors.account_name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onBlur: handleBlur,
      name: "account_number",
      label: "Account Number",
      onChange: handleChange,
      value: values.account_number,
      feedback: errors.account_number,
      placeholder: "Enter account number",
      error: touched.account_number && errors.account_number
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 12,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_9__["default"], {
      rows: 3,
      as: "textarea",
      name: "address",
      onBlur: handleBlur,
      label: "Enter address",
      placeholder: "address",
      value: values.address,
      onChange: handleChange,
      feedback: errors.address,
      error: touched.address && errors.address
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_row__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      fullWidth: true,
      type: "button",
      variant: "danger",
      isLoading: deleting,
      onClick: handleDelete
    }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      fullWidth: true,
      type: "submit",
      variant: "primary",
      isLoading: updating
    }, "Update Investor")))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Investor);

/***/ }),

/***/ "./resources/js/src/components/col.js":
/*!********************************************!*\
  !*** ./resources/js/src/components/col.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var _cn;

  var as = _ref.as,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      width = _ref.width,
      alignSelf = _ref.alignSelf,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["as", "sm", "md", "lg", "xl", "width", "alignSelf", "className"]);

  var Component = as || "div";
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()("col", (_cn = {}, _defineProperty(_cn, "col-sm-".concat(sm), sm), _defineProperty(_cn, "col-md-".concat(md), md), _defineProperty(_cn, "col-lg-".concat(lg), lg), _defineProperty(_cn, "col-lg-".concat(xl), xl), _defineProperty(_cn, "col-".concat(width), width), _defineProperty(_cn, "align-self-".concat(alignSelf), alignSelf), _cn), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classes
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./resources/js/src/components/row.js":
/*!********************************************!*\
  !*** ./resources/js/src/components/row.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var _cn;

  var deck = _ref.deck,
      cards = _ref.cards,
      align = _ref.align,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["deck", "cards", "align", "className"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()("row", (_cn = {}, _defineProperty(_cn, "row-deck", deck), _defineProperty(_cn, "row-cards", cards), _defineProperty(_cn, "align-items-".concat(align), align), _cn), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    ref: ref
  }, props, {
    className: classes
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./resources/js/src/store/api/investors.js":
/*!*************************************************!*\
  !*** ./resources/js/src/store/api/investors.js ***!
  \*************************************************/
/*! exports provided: useFetchAllInvestors, useFetchInvestor, useUpdateInvestor, useDeleteInvestor, useCreateInvestor */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/arpeiks/career/josh/ausho/resources/js/src/store/api/investors.js: 'await' is only allowed within async functions and at the top levels of modules (109:6)\n\n\u001b[0m \u001b[90m 107 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 108 | \u001b[39m      \u001b[36mconst\u001b[39m update \u001b[33m=\u001b[39m investors\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mfilter(item \u001b[33m=>\u001b[39m item\u001b[33m.\u001b[39mslug \u001b[33m!==\u001b[39m slug)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 109 | \u001b[39m      await queryClient\u001b[33m.\u001b[39msetQueryData(\u001b[32m\"investors\"\u001b[39m\u001b[33m,\u001b[39m update)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 110 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 111 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 112 | \u001b[39m}\u001b[0m\n    at Object._raise (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:748:17)\n    at Object.raiseWithData (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.raise (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.checkReservedWord (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11386:14)\n    at Object.parseIdentifierName (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11350:12)\n    at Object.parseIdentifier (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11317:23)\n    at Object.parseExprAtom (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10408:27)\n    at Object.parseExprAtom (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:4763:20)\n    at Object.parseExprSubscripts (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Object.parseUpdate (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Object.parseMaybeUnary (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Object.parseExprOps (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Object.parseMaybeConditional (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Object.parseMaybeAssign (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Object.parseExpressionBase (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9865:39\n    at Object.allowInAnd (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Object.parseExpression (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Object.parseStatementContent (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11807:23)\n    at Object.parseStatement (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Object.parseBlockOrModuleBlockBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Object.parseBlockBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Object.parseBlock (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:12233:10)\n    at Object.parseFunctionBody (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11221:24)\n    at Object.parseArrowExpression (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11193:10)\n    at Object.parseExprAtom (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10428:25)\n    at Object.parseExprAtom (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:4763:20)\n    at Object.parseExprSubscripts (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Object.parseUpdate (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Object.parseMaybeUnary (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Object.parseExprOps (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Object.parseMaybeConditional (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Object.parseMaybeAssign (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9893:39\n    at Object.allowInAnd (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Object.parseMaybeAssignAllowIn (/home/arpeiks/career/josh/ausho/node_modules/@babel/parser/lib/index.js:9893:17)");

/***/ })

}]);