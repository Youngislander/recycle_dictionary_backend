"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeUser: function seeUser(_, args, _ref) {
      var request = _ref.request,
          isAuthenticated = _ref.isAuthenticated;
      isAuthenticated(request);
      var username = args.username;
      return _prismaClient.prisma.user({
        username: username
      });
    }
  }
};
exports["default"] = _default;