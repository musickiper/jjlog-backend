// Import modules
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import "./env"; // Hide credentials using 'dotenv' module
import schema from "./schema"; // Auto generate schemas and resolvers of GraphQLServer from 'api' directory
import "./passport";
import {authenticateJwt} from "./passport";
import {isAuthenticated} from "./middlewares";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema, context: ({request}) => ({request, isAuthenticated})});

// Record logs using 'morgan'
server.express.use(logger("dev"));
// Auth using JWT
server.express.use(authenticateJwt);

// Server start
server.start({port: PORT}, () => console.log(`Server is on port ${PORT}`));
