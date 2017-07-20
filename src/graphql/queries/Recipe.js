const GraphQL = require('graphql');

const { GraphQLList, GraphQLString, GraphQLNonNull } = GraphQL;

const RecipeType = require('../types/Recipe');
const RecipeResolver = require('../resolvers/Recipe');

module.exports = {
  index() {
    return {
      type: new GraphQLList(RecipeType),
      description: 'This will return all recipes we have',
      args: {
        recipe: {
          type: GraphQLString,
          description: 'Please enter recipe name',
        },
      },
      resolve(parent, args, context, info) {
        return RecipeResolver.index(args);
      },
    };
  },
};
