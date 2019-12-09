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
    createPost: function () {
      var _createPost = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, title, contents, images, user, post, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, image;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                title = args.title, contents = args.contents, images = args.images;
                user = request.user;
                _context.prev = 4;
                _context.next = 7;
                return _prismaClient.prisma.createPost({
                  title: title,
                  contents: contents,
                  user: {
                    connect: {
                      email: user.email
                    }
                  }
                });

              case 7:
                post = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 11;
                _iterator = images[Symbol.iterator]();

              case 13:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 20;
                  break;
                }

                image = _step.value;
                _context.next = 17;
                return _prismaClient.prisma.createImage({
                  url: image,
                  post: {
                    connect: {
                      id: post.id
                    }
                  }
                });

              case 17:
                _iteratorNormalCompletion = true;
                _context.next = 13;
                break;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](11);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 26:
                _context.prev = 26;
                _context.prev = 27;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 29:
                _context.prev = 29;

                if (!_didIteratorError) {
                  _context.next = 32;
                  break;
                }

                throw _iteratorError;

              case 32:
                return _context.finish(29);

              case 33:
                return _context.finish(26);

              case 34:
                return _context.abrupt("return", post);

              case 37:
                _context.prev = 37;
                _context.t1 = _context["catch"](4);
                throw Error(_context.t1);

              case 40:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 37], [11, 22, 26, 34], [27,, 29, 33]]);
      }));

      function createPost(_x, _x2, _x3) {
        return _createPost.apply(this, arguments);
      }

      return createPost;
    }()
  }
};
exports["default"] = _default;