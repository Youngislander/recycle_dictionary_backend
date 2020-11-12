"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadController = exports.uploadMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

require("./env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var s3 = new _awsSdk["default"].S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-northeast-2"
});
var upload = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    bucket: 'dancegram',
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function key(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});
var uploadMiddleware = upload.any();
exports.uploadMiddleware = uploadMiddleware;

var uploadController = function uploadController(req, res) {
  var files = req.files;
  res.json({
    files: files
  });
  console.log(req.files);
};

exports.uploadController = uploadController;