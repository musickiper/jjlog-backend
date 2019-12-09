"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _utils = require("../../../utils");

var _default = {
  Mutation: {
    confirmSecret: function () {
      var _confirmSecret = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, args) {
        var email, secret, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = args.email, secret = args.secret;
                _context.prev = 1;
                _context.next = 4;
                return _prismaClient.prisma.user({
                  email: email
                });

              case 4:
                user = _context.sent;

                if (!(user.loginSecret === secret)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 8;
                return _prismaClient.prisma.updateUser({
                  data: {
                    loginSecret: null
                  },
                  where: {
                    email: email
                  }
                });

              case 8:
                return _context.abrupt("return", (0, _utils.generateToken)(user.id));

              case 11:
                throw Error("Wrong email/secret conversion");

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                throw Error(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 14]]);
      }));

      function confirmSecret(_x, _x2) {
        return _confirmSecret.apply(this, arguments);
      }

      return confirmSecret;
    }()
  }
};
exports["default"] = _default;