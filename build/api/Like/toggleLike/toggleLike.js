"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    toggleLike: function () {
      var _toggleLike = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, postId, user, filterOptions, existingLike;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request;
                (0, _middlewares.isAuthenticated)(request);
                postId = args.postId;
                user = request.user;
                filterOptions = {
                  AND: [{
                    user: {
                      id: user.id
                    }
                  }, {
                    post: {
                      id: postId
                    }
                  }]
                };
                _context.prev = 5;
                _context.next = 8;
                return _prismaClient.prisma.$exists.like(filterOptions);

              case 8:
                existingLike = _context.sent;

                if (!existingLike) {
                  _context.next = 14;
                  break;
                }

                _context.next = 12;
                return _prismaClient.prisma.deleteManyLikes(filterOptions);

              case 12:
                _context.next = 16;
                break;

              case 14:
                _context.next = 16;
                return _prismaClient.prisma.createLike({
                  user: {
                    connect: {
                      id: user.id
                    }
                  },
                  post: {
                    connect: {
                      id: postId
                    }
                  }
                });

              case 16:
                return _context.abrupt("return", true);

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](5);
                return _context.abrupt("return", false);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 19]]);
      }));

      function toggleLike(_x, _x2, _x3) {
        return _toggleLike.apply(this, arguments);
      }

      return toggleLike;
    }()
  }
};
exports["default"] = _default;