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
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, args) {
        var username, email, _args$firstName, firstName, _args$lastName, lastName, exists;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = args.username, email = args.email, _args$firstName = args.firstName, firstName = _args$firstName === void 0 ? "" : _args$firstName, _args$lastName = args.lastName, lastName = _args$lastName === void 0 ? "" : _args$lastName;
                _context.prev = 1;
                _context.next = 4;
                return _prismaClient.prisma.$exists.user({
                  OR: [{
                    username: username
                  }, {
                    email: email
                  }]
                });

              case 4:
                exists = _context.sent;

                if (!exists) {
                  _context.next = 9;
                  break;
                }

                throw Error("The username or email is already taken");

              case 9:
                _context.next = 11;
                return _prismaClient.prisma.createUser({
                  username: username,
                  email: email,
                  firstName: firstName,
                  lastName: lastName
                });

              case 11:
                return _context.abrupt("return", true);

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);
                return _context.abrupt("return", false);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 14]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports["default"] = _default;