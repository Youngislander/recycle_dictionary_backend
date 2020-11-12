"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateJwt = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _prismaClient = require("../generated/prisma-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jwtOptions = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

var verifyUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, done) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _prismaClient.prisma.user({
              id: payload.id
            });

          case 3:
            user = _context.sent;

            if (!(user !== null)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", done(null, user));

          case 8:
            return _context.abrupt("return", done(null, false));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", done(_context.t0, false));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function verifyUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var authenticateJwt = function authenticateJwt(req, res, next) {
  return _passport["default"].authenticate("jwt", {
    sessions: false
  }, function (error, user) {
    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);
};

exports.authenticateJwt = authenticateJwt;

_passport["default"].use(new _passportJwt.Strategy(jwtOptions, verifyUser));

_passport["default"].initialize();