'use strict';

const GraphQL = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = GraphQL;

const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  description: 'Recipe type, for all recipes that will live in Prismic.io',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the recipe',
    },
    title: {
      type: GraphQLString,
      description: 'Title of the recipe',
    },
    cuisine: {
      type: GraphQLString,
      description: 'Putting the recipe in a box',
    },
    content: {
      type: GraphQLString,
      description: 'Markdown content of the recipe',
    },
  }),
});

module.exports = RecipeType;
