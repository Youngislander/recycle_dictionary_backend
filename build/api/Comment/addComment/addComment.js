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
    addComment: function () {
      var _addComment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, text, postId, user, comment;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request;
                (0, _middlewares.isAuthenticated)(request);
                text = args.text, postId = args.postId;
                user = request.user;
                _context.next = 6;
                return _prismaClient.prisma.createComment({
                  user: {
                    connect: {
                      id: user.id
                    }
                  },
                  document: {
                    connect: {
                      id: postId
                    }
                  },
                  text: text
                });

              case 6:
                comment = _context.sent;
                return _context.abrupt("return", comment);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addComment(_x, _x2, _x3) {
        return _addComment.apply(this, arguments);
      }

      return addComment;
    }()
  }
};
exports["default"] = _default;