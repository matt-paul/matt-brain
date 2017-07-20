'use strict';

const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = GraphQL;

const RecipeQuery = require('./queries/Recipe');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provide by our application',
  fields: {
    recipes: RecipeQuery.index(),
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
