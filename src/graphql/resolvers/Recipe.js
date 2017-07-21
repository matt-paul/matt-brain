'use strict';
const Prismic = require('prismic.io');
const axios = require('axios');

const RecipeController = {
  // get something from reddit before getting into prismic etc for recipes..
  index: args => {
    const URL = `https://www.reddit.com/r/${args.subreddit ||
      'javascript'}.json`;

    return axios
      .get(URL)
      .then(response => {
        //restructure response
        const __posts = [];
        const posts = response.data.data.children;

        posts.map(post => {
          post.data.content = post.data.selftext_html;
          __posts.push(post.data);
        });
        return __posts;
      })
      .catch(error => {
        return { error: error };
      });
  },
};

// Prismic.api('https://recipe-book.prismic.io/api')
//   .then(api => {
//     return api.query(''); // An empty query will return all the documents
//   })
//   .then(
//     function(response) {
//       console.log('Documents: ', response.results);
//     },
//     function(err) {
//       console.log('Something went wrong: ', err);
//     },
//   );

module.exports = RecipeController;
