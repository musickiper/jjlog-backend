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
        var request, isAuthenticated, title, contents, summary, images, categories, user, post, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, image, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, category, exist;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                title = args.title, contents = args.contents, summary = args.summary, images = args.images, categories = args.categories;
                user = request.user;
                _context.prev = 4;
                _context.next = 7;
                return _prismaClient.prisma.createPost({
                  title: title,
                  contents: contents,
                  summary: summary,
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
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 37;
                _iterator2 = categories[Symbol.iterator]();

              case 39:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 54;
                  break;
                }

                category = _step2.value;
                _context.next = 43;
                return _prismaClient.prisma.$exists.category({
                  title: category
                });

              case 43:
                exist = _context.sent;

                if (!exist) {
                  _context.next = 49;
                  break;
                }

                _context.next = 47;
                return _prismaClient.prisma.updateCategory({
                  where: {
                    title: category
                  },
                  data: {
                    posts: {
                      connect: {
                        id: post.id
                      }
                    }
                  }
                });

              case 47:
                _context.next = 51;
                break;

              case 49:
                _context.next = 51;
                return _prismaClient.prisma.createCategory({
                  title: category,
                  posts: {
                    connect: {
                      id: post.id
                    }
                  }
                });

              case 51:
                _iteratorNormalCompletion2 = true;
                _context.next = 39;
                break;

              case 54:
                _context.next = 60;
                break;

              case 56:
                _context.prev = 56;
                _context.t1 = _context["catch"](37);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t1;

              case 60:
                _context.prev = 60;
                _context.prev = 61;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 63:
                _context.prev = 63;

                if (!_didIteratorError2) {
                  _context.next = 66;
                  break;
                }

                throw _iteratorError2;

              case 66:
                return _context.finish(63);

              case 67:
                return _context.finish(60);

              case 68:
                return _context.abrupt("return", post);

              case 71:
                _context.prev = 71;
                _context.t2 = _context["catch"](4);
                throw Error(_context.t2);

              case 74:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 71], [11, 22, 26, 34], [27,, 29, 33], [37, 56, 60, 68], [61,, 63, 67]]);
      }));

      function createPost(_x, _x2, _x3) {
        return _createPost.apply(this, arguments);
      }

      return createPost;
    }()
  }
};
exports["default"] = _default;