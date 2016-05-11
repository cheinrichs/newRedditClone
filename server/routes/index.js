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
      for (var i = 0; i < posts.length; i++) {
        posts[i].comments = [];
        for (var j = 0; j < comments.length; j++) {
          if(comments[j].post_id === posts[i].id){
            posts[i].comments.push(comments[j].comment);
          }
        }
      }
      res.json(posts);
    });
  });
});
module.exports = router;
