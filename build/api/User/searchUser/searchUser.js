"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Query: {
    searchUser: function () {
      var _searchUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _prismaClient.prisma.users({
                  where: {
                    OR: [{
                      username_contains: args.term
                    }, {
                      firstName_contains: args.term
                    }, {
                      lastName_contains: args.term
                    }]
                  }
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchUser(_x, _x2) {
        return _searchUser.apply(this, arguments);
      }

      return searchUser;
    }()
  }
};
exports["default"] = _default;