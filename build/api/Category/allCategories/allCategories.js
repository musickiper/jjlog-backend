"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    allCategories: function allCategories() {
      return _prismaClient.prisma.categories();
    }
  }
};
exports["default"] = _default;