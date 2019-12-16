"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    userByUsername: function userByUsername(_, _ref) {
      var username = _ref.username;
      return _prismaClient.prisma.user({
        username: username
      });
    }
  }
};
exports["default"] = _default;