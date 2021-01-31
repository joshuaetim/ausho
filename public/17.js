(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/src/admin/pages/investor/confirm-delete.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/admin/pages/investor/confirm-delete.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/row */ "./resources/js/src/components/row.js");
/* harmony import */ var _components_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/col */ "./resources/js/src/components/col.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modal */ "./resources/js/src/components/modal.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/button */ "./resources/js/src/components/button.js");
/* harmony import */ var _components_modal_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/modal-body */ "./resources/js/src/components/modal-body.js");
/* harmony import */ var _icons_alert_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icons/alert-triangle */ "./resources/js/src/icons/alert-triangle.js");
/* harmony import */ var _components_modal_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modal-footer */ "./resources/js/src/components/modal-footer.js");









var ConfirmDelete = function ConfirmDelete(_ref) {
  var show = _ref.show,
      toggle = _ref.toggle,
      deleteInvestor = _ref.deleteInvestor,
      permanentDeleteInvestor = _ref.permanentDeleteInvestor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    show: show,
    centered: true,
    onHide: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_modal_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text-center py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_alert_triangle__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Are you sure?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-muted"
  }, "Do you really want to delete the investor?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_modal_footer__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_row__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true,
    variant: "danger",
    onClick: permanentDeleteInvestor
  }, "Permanently Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mt-2 mt-sm-0",
    width: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "text-red",
    fullWidth: true,
    onClick: deleteInvestor
  }, "Safe Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 12,
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true,
    onClick: toggle
  }, "Cancel"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmDelete);

/***/ }),

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
/* harmony import */ var _confirm_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm-delete */ "./resources/js/src/admin/pages/investor/confirm-delete.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/button */ "./resources/js/src/components/button.js");
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/textfield */ "./resources/js/src/components/textfield.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/container */ "./resources/js/src/components/container.js");
/* harmony import */ var _store_api_investors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/api/investors */ "./resources/js/src/store/api/investors.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      deleteModal = _React$useState2[0],
      setDeleteModal = _React$useState2[1];

  var _useFetchInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_12__["useFetchInvestor"])(slug),
      fetchInvestor = _useFetchInvestor.refetch,
      isFetching = _useFetchInvestor.isFetching;

  var investors = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQueryClient"])().getQueryData("investors");
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (investors !== null && investors !== void 0 && investors.length) return;

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

  var _useUpdateInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_12__["useUpdateInvestor"])(slug),
      updating = _useUpdateInvestor.isLoading,
      updateInvestor = _useUpdateInvestor.mutateAsync;

  var _useDeleteInvestor = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_12__["useDeleteInvestor"])(slug),
      deleting = _useDeleteInvestor.isLoading,
      deleteInvestor = _useDeleteInvestor.mutateAsync;

  var _usePermanentDeleteIn = Object(_store_api_investors__WEBPACK_IMPORTED_MODULE_12__["usePermanentDeleteInvestor"])(slug),
      permanentlyDeleting = _usePermanentDeleteIn.isLoading,
      permanentDeleteInvestor = _usePermanentDeleteIn.mutateAsync;

  var initialValues = {
    name: investor === null || investor === void 0 ? void 0 : investor.name,
    bank: investor === null || investor === void 0 ? void 0 : investor.bank,
    phone: investor === null || investor === void 0 ? void 0 : investor.phone,
    email: investor === null || investor === void 0 ? void 0 : investor.email,
    address: investor === null || investor === void 0 ? void 0 : investor.address,
    account_name: investor === null || investor === void 0 ? void 0 : investor.account_name,
    account_number: investor === null || investor === void 0 ? void 0 : investor.account_number
  };

  var toggleDeleteModal = function toggleDeleteModal() {
    return setDeleteModal(!deleteModal);
  };

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
              return _context2.abrupt("return", _context2.sent);

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

  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              toggleDeleteModal();
              _context3.next = 3;
              return deleteInvestor(slug);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleDelete() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlePermanentDelete = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              toggleDeleteModal();
              _context4.next = 3;
              return permanentDeleteInvestor(slug);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handlePermanentDelete() {
      return _ref4.apply(this, arguments);
    };
  }();

  if (isFetching) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "FETCHING");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_container__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    onSubmit: handleUpdate,
    validationSchema: schema,
    initialValues: initialValues
  }, function (_ref5) {
    var errors = _ref5.errors,
        values = _ref5.values,
        touched = _ref5.touched,
        handleBlur = _ref5.handleBlur,
        handleSubmit = _ref5.handleSubmit,
        handleChange = _ref5.handleChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 6,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      fullWidth: true,
      type: "button",
      variant: "danger",
      onClick: toggleDeleteModal,
      isLoading: deleting || permanentlyDeleting
    }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: 12,
      sm: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      fullWidth: true,
      type: "submit",
      variant: "primary",
      isLoading: updating
    }, "Update Investor")))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_confirm_delete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: deleteModal,
    toggle: toggleDeleteModal,
    deleteInvestor: handleDelete,
    permanentDeleteInvestor: handlePermanentDelete
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Investor);

/***/ }),

/***/ "./resources/js/src/components/modal-footer.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/components/modal-footer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var ModalFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
    ref: ref,
    className: "modal-footer"
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ModalFooter);

/***/ }),

/***/ "./resources/js/src/icons/alert-triangle.js":
/*!**************************************************!*\
  !*** ./resources/js/src/icons/alert-triangle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AlertTriangle = function AlertTriangle(_ref) {
  var _cn;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "lg" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "danger" : _ref$color,
      className = _ref.className;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()("icon", "mb-3", (_cn = {}, _defineProperty(_cn, "icon-".concat(size), size), _defineProperty(_cn, "text-".concat(color), color), _cn), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    strokeWidth: "2",
    className: classes,
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 9v2m0 4v.01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AlertTriangle);

/***/ })

}]);