(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/row */ "./resources/js/src/components/row.js");
/* harmony import */ var _components_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/col */ "./resources/js/src/components/col.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/button */ "./resources/js/src/components/button.js");
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/textfield */ "./resources/js/src/components/textfield.js");
/* harmony import */ var _store_api_investors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/api/investors */ "./resources/js/src/store/api/investors.js");


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
  var _investor$data, _investor$data2, _investor$data3, _investor$data4, _investor$data5, _investor$data6, _investor$data7;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])(),
      slug = _useParams.slug;

  var _useDeleteInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_9__["useDeleteInvestor"])(),
      deleteInvestor = _useDeleteInvestor.mutateAsync;

  var _useUpdateInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_9__["useUpdateInvestor"])(),
      updateInvestor = _useUpdateInvestor.mutateAsync;

  var _useFetchInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_9__["useFetchInvestor"])(slug),
      investor = _useFetchInvestor.data,
      refetch = _useFetchInvestor.refetch,
      isLoading = _useFetchInvestor.isLoading;

  if (isLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading");
  var initialValues = {
    name: investor === null || investor === void 0 ? void 0 : (_investor$data = investor.data) === null || _investor$data === void 0 ? void 0 : _investor$data.name,
    bank: investor === null || investor === void 0 ? void 0 : (_investor$data2 = investor.data) === null || _investor$data2 === void 0 ? void 0 : _investor$data2.bank,
    phone: investor === null || investor === void 0 ? void 0 : (_investor$data3 = investor.data) === null || _investor$data3 === void 0 ? void 0 : _investor$data3.phone,
    email: investor === null || investor === void 0 ? void 0 : (_investor$data4 = investor.data) === null || _investor$data4 === void 0 ? void 0 : _investor$data4.email,
    address: investor === null || investor === void 0 ? void 0 : (_investor$data5 = investor.data) === null || _investor$data5 === void 0 ? void 0 : _investor$data5.address,
    account_name: investor === null || investor === void 0 ? void 0 : (_investor$data6 = investor.data) === null || _investor$data6 === void 0 ? void 0 : _investor$data6.account_name,
    account_number: investor === null || investor === void 0 ? void 0 : (_investor$data7 = investor.data) === null || _investor$data7 === void 0 ? void 0 : _investor$data7.account_number
  };

  var handleDelete = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", deleteInvestor(slug));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleUpdate = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return updateInvestor({
                slug: slug,
                values: values
              });

            case 2:
              refetch();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleUpdate(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    onSubmit: handleUpdate,
    validationSchema: schema,
    initialValues: initialValues
  }, function (_ref3) {
    var errors = _ref3.errors,
        values = _ref3.values,
        touched = _ref3.touched,
        handleBlur = _ref3.handleBlur,
        handleSubmit = _ref3.handleSubmit,
        handleChange = _ref3.handleChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "name",
      label: "Name",
      value: values.name,
      onBlur: handleBlur,
      feedback: errors.name,
      onChange: handleChange,
      placeholder: "Firstname Lastname",
      error: touched.name && errors.name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "email",
      name: "email",
      onBlur: handleBlur,
      value: values.email,
      label: "Email address",
      feedback: errors.email,
      onChange: handleChange,
      placeholder: "Enter email",
      error: touched.email && errors.email
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "phone",
      label: "Phone Number",
      onBlur: handleBlur,
      value: values.phone,
      onChange: handleChange,
      feedback: errors.phone,
      placeholder: "Enter phone number",
      error: touched.phone && errors.phone
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "bank",
      label: "Bank Name",
      onBlur: handleBlur,
      value: values.bank,
      feedback: errors.bank,
      onChange: handleChange,
      placeholder: "Enter bank name",
      error: touched.bank && errors.bank
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "account_name",
      onBlur: handleBlur,
      label: "Account Name",
      onChange: handleChange,
      value: values.account_name,
      feedback: errors.account_name,
      placeholder: "Enter account name",
      error: touched.account_name && errors.account_name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onBlur: handleBlur,
      name: "account_number",
      label: "Account Number",
      onChange: handleChange,
      value: values.account_number,
      feedback: errors.account_number,
      placeholder: "Enter account number",
      error: touched.account_number && errors.account_number
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 12,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      fullWidth: true,
      type: "button",
      variant: "danger",
      onClick: handleDelete
    }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: 12,
      sm: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      fullWidth: true,
      type: "submit",
      variant: "primary" // disabled={isLoading}
      // isLoading={isLoading}

    }, "Update Investor")))));
  });
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

/***/ })

}]);