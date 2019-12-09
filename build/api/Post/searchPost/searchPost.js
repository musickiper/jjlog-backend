"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    searchPost: function () {
      var _searchPost = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, args) {
        var term;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                term = args.term;
                return _context.abrupt("return", _prismaClient.prisma.posts({
                  where: {
                    OR: [{
                      title_contains: term
                    }, {
                      contents_contains: term
                    }]
                  }
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchPost(_x, _x2) {
        return _searchPost.apply(this, arguments);
      }

      return searchPost;
    }()
  }
};
exports["default"] = _default;