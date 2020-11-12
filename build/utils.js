"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.sendSecretMail = exports.sendMail = exports.generateSecret = void 0;

var _words = require("./words");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerSendgridTransport = _interopRequireDefault(require("nodemailer-sendgrid-transport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateSecret = function generateSecret() {
  var randomNumber = Math.floor(Math.random() * _words.adjectives.length);
  return "".concat(_words.adjectives[randomNumber], " ").concat(_words.nouns[randomNumber]);
};

exports.generateSecret = generateSecret;

var sendMail = function sendMail(email) {
  var options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };

  var client = _nodemailer["default"].createTransport((0, _nodemailerSendgridTransport["default"])(options));

  return client.sendMail(email);
};

exports.sendMail = sendMail;

var sendSecretMail = function sendSecretMail(adress, secret) {
  var email = {
    from: "yjmnopainnogain@gmail.com",
    to: adress,
    subject: "Login Secret for Eco dictionary.",
    html: "Hello! Your login secret is <strong>".concat(secret, "</strong>.")
  };
  return sendMail(email);
};

exports.sendSecretMail = sendSecretMail;

var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET);
};

exports.generateToken = generateToken;