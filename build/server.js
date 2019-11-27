"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _graphqlYoga = require("graphql-yoga");

var _morgan = _interopRequireDefault(require("morgan"));

require("./env");

var _schema = _interopRequireDefault(require("./schema"));

var _passport = require("./passport");

// Import modules
// Hide credentials using 'dotenv' module
// Auto generate schemas and resolvers of GraphQLServer from 'api' directory
var PORT = process.env.PORT || 4000;
var server = new _graphqlYoga.GraphQLServer({
  schema: _schema["default"],
  context: function context(_ref) {
    var request = _ref.request;
    return {
      request: request
    };
  }
}); // Record logs using 'morgan'

server.express.use((0, _morgan["default"])("dev")); // Auth using JWT

server.express.use(_passport.authenticateJwt); // Server start

server.start({
  port: PORT
}, function () {
  return console.log("Server is on port ".concat(PORT));
});