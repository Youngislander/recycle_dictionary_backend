"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DELETE = "DELETE";
var EDIT = "EDIT";
var _default = {
  Mutation: {
    editDiscussion: function () {
      var _editDiscussion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, _args$caption, caption, _args$title, title, _args$files, files, _args$hashTags, hashTags, action, user, discussion;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id, _args$caption = args.caption, caption = _args$caption === void 0 ? "" : _args$caption, _args$title = args.title, title = _args$title === void 0 ? "" : _args$title, _args$files = args.files, files = _args$files === void 0 ? [] : _args$files, _args$hashTags = args.hashTags, hashTags = _args$hashTags === void 0 ? "" : _args$hashTags, action = args.action;
                user = request.user;
                _context.next = 6;
                return _prismaClient.prisma.$exists.discussion({
                  id: id,
                  user: {
                    id: user.id
                  }
                });

              case 6:
                discussion = _context.sent;

                if (!discussion) {
                  _context.next = 16;
                  break;
                }

                if (!(action === EDIT)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", _prismaClient.prisma.updateDiscussion({
                  data: {
                    caption: caption,
                    title: title,
                    hashTags: hashTags,
                    files: files
                  },
                  where: {
                    id: id
                  }
                }));

              case 12:
                if (!(action === DELETE)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", _prismaClient.prisma.deleteDiscussion({
                  id: id
                }));

              case 14:
                _context.next = 17;
                break;

              case 16:
                throw Error("You can't do that");

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editDiscussion(_x, _x2, _x3) {
        return _editDiscussion.apply(this, arguments);
      }

      return editDiscussion;
    }()
  }
};
exports["default"] = _default;