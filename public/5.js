(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/src/store/api/investors.js":
/*!*************************************************!*\
  !*** ./resources/js/src/store/api/investors.js ***!
  \*************************************************/
/*! exports provided: useFetchAllInvestors, useFetchInvestor, useUpdateInvestor, useDeleteInvestor, useCreateInvestor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchAllInvestors", function() { return useFetchAllInvestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchInvestor", function() { return useFetchInvestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateInvestor", function() { return useUpdateInvestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteInvestor", function() { return useDeleteInvestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateInvestor", function() { return useCreateInvestor; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function createInvestor(_x) {
  return _createInvestor.apply(this, arguments);
}

function _createInvestor() {
  _createInvestor = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios.get("/sanctum/csrf-cookie").then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return axios.post("/api/investors", values).then(function (res) {
                        return res.data;
                      })["catch"](function (error) {
                        throw error;
                      });

                    case 2:
                      return _context.abrupt("return", _context.sent);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createInvestor.apply(this, arguments);
}

function fetchInvestor(_x2) {
  return _fetchInvestor.apply(this, arguments);
}

function _fetchInvestor() {
  _fetchInvestor = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(slug) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios.get("/sanctum/csrf-cookie").then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return axios.get("/api/investors/".concat(slug)).then(function (res) {
                        return res.data;
                      })["catch"](function (error) {
                        throw error;
                      });

                    case 2:
                      return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fetchInvestor.apply(this, arguments);
}

function updateInvestor(_x3) {
  return _updateInvestor.apply(this, arguments);
}

function _updateInvestor() {
  _updateInvestor = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios.get("/sanctum/csrf-cookie").then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return axios.put("/api/investors/".concat(data.slug), data.values).then(function (res) {
                        return res.data;
                      })["catch"](function (error) {
                        throw error;
                      });

                    case 2:
                      return _context5.abrupt("return", _context5.sent);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateInvestor.apply(this, arguments);
}

function deleteInvestor(_x4) {
  return _deleteInvestor.apply(this, arguments);
}

function _deleteInvestor() {
  _deleteInvestor = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(slug) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios.get("/sanctum/csrf-cookie").then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return axios["delete"]("/api/investors/".concat(slug)).then(function (res) {
                        return res.data;
                      })["catch"](function (error) {
                        throw error;
                      });

                    case 2:
                      return _context7.abrupt("return", _context7.sent);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })));

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _deleteInvestor.apply(this, arguments);
}

function fetchAllInvestors() {
  return _fetchAllInvestors.apply(this, arguments);
}

function _fetchAllInvestors() {
  _fetchAllInvestors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return axios.get("/sanctum/csrf-cookie").then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return axios.get("/api/investors").then(function (res) {
                        return res.data;
                      })["catch"](function (error) {
                        throw error;
                      });

                    case 2:
                      return _context9.abrupt("return", _context9.sent);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })));

          case 2:
            return _context10.abrupt("return", _context10.sent);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _fetchAllInvestors.apply(this, arguments);
}

function useFetchAllInvestors() {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])("investors", fetchAllInvestors);
}
function useFetchInvestor(slug) {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(["investor", slug], function () {
    return fetchInvestor(slug);
  });
}
function useUpdateInvestor() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(updateInvestor, {
    onError: function onError(error) {
      return dispatch({
        type: "ERROR",
        error: error
      });
    },
    onSuccess: function onSuccess(data) {
      return dispatch({
        type: "SUCCESS",
        data: data
      });
    }
  });
}
function useDeleteInvestor() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(deleteInvestor, {
    onError: function onError(error) {
      return dispatch({
        type: "ERROR",
        error: error
      });
    },
    onSuccess: function onSuccess(data) {
      return dispatch({
        type: "SUCCESS",
        data: data
      });
    }
  });
}
function useCreateInvestor() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(createInvestor, {
    onError: function onError(error) {
      return dispatch({
        type: "ERROR",
        error: error
      });
    },
    onSuccess: function onSuccess(data) {
      return dispatch({
        type: "SUCCESS",
        data: data
      });
    }
  });
}

/***/ })

}]);