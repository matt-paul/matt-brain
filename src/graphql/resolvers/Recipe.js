'use strict';

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

module.exports = RecipeController;
