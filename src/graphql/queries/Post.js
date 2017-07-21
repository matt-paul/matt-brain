'use strict';

const GraphQL = require('graphql');
const { GraphQLList, GraphQLString, GraphQLNonNull } = GraphQL;

const PostType = require('../types/Post');

const PostResolver = require('../resolvers/Post');

module.exports = {
  index() {
    return {
      type: new GraphQLList(PostType),
      description:
        'This will return all the posts we find in the given subreddit',
      args: {
        /* In the args, we have a specified a field 'subreddit'.  This means that
         * clients can optionally specify the subreddit name, but it is not required
         */
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name',
        },
      },
      resolve(parent, args, context, info) {
        return PostResolver.index(args);
      },
    };
  },
};
