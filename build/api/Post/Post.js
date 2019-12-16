"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Post: {
    user: function user(_ref) {
      var id = _ref.id;
      return _prismaClient.prisma.post({
        id: id
      }).user();
    },
    comments: function comments(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.post({
        id: id
      }).comments();
    },
    images: function images(_ref3) {
      var id = _ref3.id;
      return _prismaClient.prisma.post({
        id: id
      }).images();
    },
    categories: function categories(_ref4) {
      var id = _ref4.id;
      return _prismaClient.prisma.post({
        id: id
      }).categories();
    }
  }
};
exports["default"] = _default;