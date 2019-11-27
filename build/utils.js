"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.sendSecretMail = exports.generateSecret = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerSendgridTransport = _interopRequireDefault(require("nodemailer-sendgrid-transport"));

var _words = require("./words");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

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

var sendSecretMail = function sendSecretMail(address, secret) {
  var email = {
    from: "james.jung.ysj@gmail.com",
    to: address,
    subject: "🔒 Login Secret for JJLOG 🔒",
    html: "Hello! Your login secret is <b>".concat(secret, "</b>.</br>Copy and paste on the app/website to log in")
  };
  sendMail(email);
};

exports.sendSecretMail = sendSecretMail;

var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET);
};

exports.generateToken = generateToken;