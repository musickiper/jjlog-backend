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
  Mutation: {
    createComment: function () {
      var _createComment = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, userId, contents, postId;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                userId = request.user.id;
                contents = args.contents, postId = args.postId;
                _context.prev = 4;
                _context.next = 7;
                return _prismaClient.prisma.createComment({
                  contents: contents,
                  user: {
                    connect: {
                      id: userId
                    }
                  },
                  post: {
                    connect: {
                      id: postId
                    }
                  }
                });

              case 7:
                return _context.abrupt("return", true);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                console.error(_context.t0);
                return _context.abrupt("return", false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 10]]);
      }));

      function createComment(_x, _x2, _x3) {
        return _createComment.apply(this, arguments);
      }

      return createComment;
    }()
  }
};
exports["default"] = _default;