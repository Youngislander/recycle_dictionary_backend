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
    postsCount: function postsCount(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.postsConnection({
        where: {
          user: {
            id: id
          }
        }
      }).aggregate().count();
    },
    likes: function likes(_ref3) {
      var id = _ref3.id;
      return _prismaClient.prisma.user({
        id: id
      }).likes();
    },
    comments: function comments(_ref4) {
      var id = _ref4.id;
      return _prismaClient.prisma.user({
        id: id
      }).comments();
    },
    discussions: function discussions(_ref5) {
      var id = _ref5.id;
      return _prismaClient.prisma.user({
        id: id
      }).discussions();
    },
    discussionsCount: function discussionsCount(_ref6) {
      var id = _ref6.id;
      return _prismaClient.prisma.discussionsConnection({
        where: {
          user: {
            id: id
          }
        }
      }).aggregate().count();
    },
    fullName: function fullName(parent) {
      return "".concat(parent.firstName, " ").concat(parent.lastName);
    },
    isSelf: function isSelf(parent, _, _ref7) {
      var request = _ref7.request;
      var user = request.user;
      var parentId = parent.id;
      return user.id === parentId;
    }
  }
};
exports["default"] = _default;