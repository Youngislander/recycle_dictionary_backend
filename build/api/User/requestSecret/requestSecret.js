"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../../../utils");

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    requestSecret: function () {
      var _requestSecret = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args) {
        var email, loginSecret;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = args.email;
                loginSecret = (0, _utils.generateSecret)();
                _context.prev = 2;
                _context.next = 5;
                return (0, _utils.sendSecretMail)(email, loginSecret);

              case 5:
                _context.next = 7;
                return _prismaClient.prisma.updateUser({
                  data: {
                    loginSecret: loginSecret
                  },
                  where: {
                    email: email
                  }
                });

              case 7:
                return _context.abrupt("return", true);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
                return _context.abrupt("return", false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      function requestSecret(_x, _x2) {
        return _requestSecret.apply(this, arguments);
      }

      return requestSecret;
    }()
  }
};
exports["default"] = _default;