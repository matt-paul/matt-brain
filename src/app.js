'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const expressGraphQL = require('express-graphql');

const GraphQLSchema = require('./graphql/schema');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.use(
  '/',
  /*Set up expressGraphQL as an express application middleware,
  running every time our index route is called and for every method call.
  It will handle everything related to GraphQL because we have specified our schema
  */
  expressGraphQL(() => {
    return {
      graphiql: true,
      schema: GraphQLSchema,
    };
  })
);

module.exports = app;
