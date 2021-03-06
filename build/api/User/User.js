"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  User: {
    posts: function posts(_ref) {
      var id = _ref.id;
      return _prismaClient.prisma.user({
        id: id
      }).posts();
    },
    comments: function comments(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.user({
        id: id
      }).comments();
    }
  }
};
exports["default"] = _default;