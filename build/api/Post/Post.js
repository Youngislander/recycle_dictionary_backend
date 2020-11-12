"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Post: {
    files: function files(_ref) {
      var id = _ref.id;
      return _prismaClient.prisma.post({
        id: id
      }).files();
    },
    comments: function comments(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.post({
        id: id
      }).comments();
    },
    user: function user(_ref3) {
      var id = _ref3.id;
      return _prismaClient.prisma.post({
        id: id
      }).user();
    },
    likes: function likes(_ref4) {
      var id = _ref4.id;
      return _prismaClient.prisma.post({
        id: id
      }).likes();
    },
    isLiked: function () {
      var _isLiked = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _, _ref5) {
        var request, user, id;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref5.request;
                user = request.user;
                id = parent.id;
                return _context.abrupt("return", _prismaClient.prisma.$exists.like({
                  AND: [{
                    user: {
                      id: user.id
                    }
                  }, {
                    post: {
                      id: id
                    }
                  }]
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isLiked(_x, _x2, _x3) {
        return _isLiked.apply(this, arguments);
      }

      return isLiked;
    }(),
    likeCount: function likeCount(parent) {
      return _prismaClient.prisma.likesConnection({
        where: {
          post: {
            id: parent.id
          }
        }
      }).aggregate().count();
    },
    views: function views(_ref6) {
      var id = _ref6.id;
      return _prismaClient.prisma.post({
        id: id
      }).views();
    }
  }
};
exports["default"] = _default;