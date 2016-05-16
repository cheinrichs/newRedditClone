var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'New Reddit Clone' });
});

router.get('/posts', function(req, res, next){
  knex('posts').then(function(posts){
    knex('comments').then(function(comments){
      //take all the comments associated with each post and add it to the comments array in each post object
      for (var i = 0; i < posts.length; i++) {
        posts[i].comments = [];
        for (var j = 0; j < comments.length; j++) {
          if(comments[j].post_id === posts[i].id){
            posts[i].comments.push(comments[j].comment);
          }
        }
      }
      //replace user id's with real author names
      knex('users').then(function(authors){
        for (var i = 0; i < posts.length; i++) {
          for (var j = 0; j < authors.length; j++) {
            if(posts[i].author === authors[j].id){
              posts[i].author = authors[j].username;
            }
          }
        }
        res.json(posts);
      });

    });
  });
});
module.exports = router;
