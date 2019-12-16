"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Comment: {
    user: function () {
      var _user = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_ref) {
        var id;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                return _context.abrupt("return", _prismaClient.prisma.comment({
                  id: id
                }).user());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function user(_x) {
        return _user.apply(this, arguments);
      }

      return user;
    }(),
    post: function () {
      var _post = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(_ref2) {
        var id;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                return _context2.abrupt("return", _prismaClient.prisma.comment({
                  id: id
                }).post());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function post(_x2) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }
};
exports["default"] = _default;