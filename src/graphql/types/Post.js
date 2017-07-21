'use strict';

const GraphQL = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = GraphQL;

/* We specify all the mfields for our post resource that clients can query.
 * Only the fields specified her can be asked for by clients
 */

const PostType = new GraphQL.GraphQLObjectType({
  name: 'POST',
  description: 'Post Type, for all the posts present in Reddit.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the post',
    },
    title: {
      type: GraphQLString,
      description: 'Title of the post',
    },
    url: {
      type: GraphQLString,
      description: 'URL of the post',
    },
    author: {
      type: GraphQLString,
      description: 'Name of the author who created the post',
    },
    ups: {
      type: GraphQLInt,
      description: 'Total number of upvotes received',
    },
    downs: {
      type: GraphQLString,
      description: 'Total number of downvotes',
    },
    content: {
      type: GraphQLString,
      description: 'Markdown content of the post',
    },
  }),
});

module.exports = PostType;
