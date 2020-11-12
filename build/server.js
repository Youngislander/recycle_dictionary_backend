"use strict";

require("./env");

var _morgan = _interopRequireDefault(require("morgan"));

var _schema = _interopRequireDefault(require("./schema"));

var _graphqlYoga = require("graphql-yoga");

var _passport = require("./passport");

var _middlewares = require("./middlewares");

var _upload = require("./upload");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 4000;
var server = new _graphqlYoga.GraphQLServer({
  schema: _schema["default"],
  context: function context(_ref) {
    var request = _ref.request;
    return {
      request: request,
      isAuthenticated: _middlewares.isAuthenticated
    };
  }
});
server.express.use((0, _morgan["default"])("dev"));
server.express.use(_passport.authenticateJwt);
server.express.post("/api/upload", _upload.uploadMiddleware, _upload.uploadController);
server.start({
  port: PORT
}, function () {
  return console.log("Server running on http://localhost:".concat(PORT));
});