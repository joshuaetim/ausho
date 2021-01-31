(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/src/auth/pages/signin.js":
/*!***********************************************!*\
  !*** ./resources/js/src/auth/pages/signin.js ***!
  \***********************************************/
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
/* harmony import */ var _components_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/box */ "./resources/js/src/components/box.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/card */ "./resources/js/src/components/card.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form */ "./resources/js/src/components/form.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/button */ "./resources/js/src/components/button.js");
/* harmony import */ var _store_api_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/api/auth */ "./resources/js/src/store/api/auth.js");
/* harmony import */ var _components_card_body__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/card-body */ "./resources/js/src/components/card-body.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/container */ "./resources/js/src/components/container.js");
/* harmony import */ var _components_textfield__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/textfield */ "./resources/js/src/components/textfield.js");
/* harmony import */ var _components_card_title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/card-title */ "./resources/js/src/components/card-title.js");
/* harmony import */ var _components_form_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/form-footer */ "./resources/js/src/components/form-footer.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var initialValues = {
  email: "arpeiks@gmail.com",
  password: "password"
};
var schema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().trim().email().required(),
  password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(8).required()
});

var Signin = function Signin() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    initialValues: initialValues
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var _useLogin = Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_9__["useLogin"])(values),
      refetch = _useLogin.refetch,
      isFetching = _useLogin.isFetching;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(values);
              _context.next = 3;
              return refetch();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    onSubmit: handleSubmit,
    validationSchema: schema,
    initialValues: initialValues
  }, function (_ref2) {
    var errors = _ref2.errors,
        values = _ref2.values,
        touched = _ref2.touched,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        handleChange = _ref2.handleChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      flex: true,
      fullHeight: true,
      align: "center",
      justify: "center",
      className: "border-top-wide border-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
      fluid: "tight"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      center: true,
      mb: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/img/tabler.svg",
      height: 36
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_box__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      as: _components_form__WEBPACK_IMPORTED_MODULE_7__["default"],
      onSubmit: handleSubmit,
      width: "md"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card_body__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card_title__WEBPACK_IMPORTED_MODULE_13__["default"], {
      mb: 4,
      center: true
    }, "Login to your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_12__["default"], {
      type: "email",
      name: "email",
      onBlur: handleBlur,
      value: values.email,
      label: "Email address",
      feedback: errors.email,
      onChange: handleChange,
      placeholder: "Enter email",
      error: touched.email && errors.email
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_textfield__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: "password",
      type: "password",
      label: "Password",
      onBlur: handleBlur,
      value: values.password,
      onChange: handleChange,
      feedback: errors.password,
      placeholder: "Enter password",
      error: touched.password && errors.password
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/password"
    }, "I forgot my password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_form_footer__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      fullWidth: true,
      type: "submit",
      variant: "primary",
      disabled: isFetching,
      isLoading: isFetching
    }, "Login")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      center: true,
      muted: true,
      mt: 3
    }, "Don't have account yet? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/signup"
    }, "Sign up")))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ })

}]);