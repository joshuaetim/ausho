(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/src/admin/pages/investors/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/admin/pages/investors/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _investors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investors */ "./resources/js/src/admin/pages/investors/investors.js");

/* harmony default export */ __webpack_exports__["default"] = (_investors__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/admin/pages/investors/investors.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/admin/pages/investors/investors.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/card */ "./resources/js/src/components/card.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/table */ "./resources/js/src/components/table.js");
/* harmony import */ var _store_api_investors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/api/investors */ "./resources/js/src/store/api/investors.js");






var Investors = function Investors() {
  var _useFetchAllInvestors = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_4__["useFetchAllInvestors"])(),
      investors = _useFetchAllInvestors.data,
      isLoading = _useFetchAllInvestors.isLoading;

  console.log(investors);
  if (isLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Loading");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    card: true,
    center: true,
    nowrap: true,
    datatable: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
    data: investors === null || investors === void 0 ? void 0 : investors.data
  })));
};

var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "id"
  }, "Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "user-id"
  }, "User Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-truncate phone"
  }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-truncate email"
  }, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-truncate account-name"
  }, "Account Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-truncate account-number"
  }, "Account Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "bank-name"
  }, "Bank Name")));
};

var Rows = function Rows(_ref) {
  var data = _ref.data;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    onClick: function onClick() {
      return history.push("/investor/".concat(data === null || data === void 0 ? void 0 : data.slug));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "w-1 id"
  }, data === null || data === void 0 ? void 0 : data.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "w-1 user-id"
  }, data === null || data === void 0 ? void 0 : data.user_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "py-3 text-truncate"
  }, data === null || data === void 0 ? void 0 : data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-truncate phone"
  }, data === null || data === void 0 ? void 0 : data.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-truncate email"
  }, data === null || data === void 0 ? void 0 : data.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-truncate account-name"
  }, data === null || data === void 0 ? void 0 : data.account_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "account-number"
  }, data === null || data === void 0 ? void 0 : data.account_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "bank-name"
  }, data === null || data === void 0 ? void 0 : data.bank));
};

var Body = function Body(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data === null || data === void 0 ? void 0 : data.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rows, {
      data: data,
      key: data.id
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Investors);

/***/ }),

/***/ "./resources/js/src/components/card.js":
/*!*********************************************!*\
  !*** ./resources/js/src/components/card.js ***!
  \*********************************************/
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



var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var as = _ref.as,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ["as", "width"]);

  var Component = as || "div";
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()("card", _defineProperty({}, "card-".concat(width), width));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classes
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./resources/js/src/components/table.js":
/*!**********************************************!*\
  !*** ./resources/js/src/components/table.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var card = _ref.card,
      center = _ref.center,
      nowrap = _ref.nowrap,
      className = _ref.className,
      datatable = _ref.datatable,
      responsive = _ref.responsive,
      props = _objectWithoutProperties(_ref, ["card", "center", "nowrap", "className", "datatable", "responsive"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()("table", {
    datatable: datatable,
    "card-table": card,
    "text-nowrap": nowrap,
    "table-vcenter": center
  }, className);
  var table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", _extends({}, props, {
    className: classes,
    ref: ref
  }));

  if (responsive) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive"
    }, table);
  }

  return table;
});
/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

}]);