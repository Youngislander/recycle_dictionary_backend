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
    uploadPost: function () {
      var _uploadPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, args, _ref) {
        var request, isAuthenticated, user, _args$caption, caption, _args$files, files, _args$title, title, _args$hashTags, hashTags, post;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                user = request.user;
                _args$caption = args.caption, caption = _args$caption === void 0 ? "" : _args$caption, _args$files = args.files, files = _args$files === void 0 ? [] : _args$files, _args$title = args.title, title = _args$title === void 0 ? "" : _args$title, _args$hashTags = args.hashTags, hashTags = _args$hashTags === void 0 ? "" : _args$hashTags;
                _context2.next = 6;
                return _prismaClient.prisma.createPost({
                  caption: caption,
                  title: title,
                  hashTags: hashTags,
                  user: {
                    connect: {
                      id: user.id
                    }
                  },
                  isLiked: false,
                  likeCount: 0,
                  commentCount: 0,
                  views: 0
                });

              case 6:
                post = _context2.sent;
                files.forEach( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _prismaClient.prisma.createFile({
                              url: file,
                              post: {
                                connect: {
                                  id: post.id
                                }
                              }
                            });

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                return _context2.abrupt("return", post);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function uploadPost(_x, _x2, _x3) {
        return _uploadPost.apply(this, arguments);
      }

      return uploadPost;
    }()
  }
};
exports["default"] = _default;