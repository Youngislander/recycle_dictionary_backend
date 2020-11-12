"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    editUser: function () {
      var _editUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, username, email, firstName, lastName, bio, avatar, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                username = args.username, email = args.email, firstName = args.firstName, lastName = args.lastName, bio = args.bio, avatar = args.avatar;
                user = request.user;
                return _context.abrupt("return", _prismaClient.prisma.updateUser({
                  where: {
                    id: user
                  },
                  data: {
                    username: username,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    bio: bio,
                    avatar: avatar
                  }
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editUser(_x, _x2, _x3) {
        return _editUser.apply(this, arguments);
      }

      return editUser;
    }()
  }
};
exports["default"] = _default;