"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _graphqlTools = require("graphql-tools");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    createAccount: function () {
      var _createAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args) {
        var _args$username, username, _args$email, email, _args$firstName, firstName, _args$lastName, lastName, _args$bio, bio, _args$loginSecret, loginSecret, exists;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _args$username = args.username, username = _args$username === void 0 ? "" : _args$username, _args$email = args.email, email = _args$email === void 0 ? "" : _args$email, _args$firstName = args.firstName, firstName = _args$firstName === void 0 ? "" : _args$firstName, _args$lastName = args.lastName, lastName = _args$lastName === void 0 ? "" : _args$lastName, _args$bio = args.bio, bio = _args$bio === void 0 ? "" : _args$bio, _args$loginSecret = args.loginSecret, loginSecret = _args$loginSecret === void 0 ? "default" : _args$loginSecret;
                _context.next = 3;
                return _prismaClient.prisma.$exists.user({
                  or: [{
                    username: username
                  }, {
                    email: email
                  }]
                });

              case 3:
                exists = _context.sent;

                if (!exists) {
                  _context.next = 6;
                  break;
                }

                throw Error("This username/ email is already taken");

              case 6:
                _context.next = 8;
                return _prismaClient.prisma.createUser({
                  username: username,
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  bio: bio,
                  loginSecret: loginSecret,
                  isSelf: true,
                  postsCount: 0,
                  level: 1,
                  discussionCount: 0
                });

              case 8:
                return _context.abrupt("return", true);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports["default"] = _default;