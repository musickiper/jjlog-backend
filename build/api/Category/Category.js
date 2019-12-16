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
  Category: {
    count: function () {
      var _count = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_ref) {
        var id, posts;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                _context.next = 3;
                return _prismaClient.prisma.category({
                  id: id
                }).posts();

              case 3:
                posts = _context.sent;
                return _context.abrupt("return", posts.length);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function count(_x) {
        return _count.apply(this, arguments);
      }

      return count;
    }(),
    posts: function posts(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.category({
        id: id
      }).posts();
    }
  }
};
exports["default"] = _default;