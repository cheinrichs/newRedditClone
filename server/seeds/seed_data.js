// var bcrypt = require('bcryptjs');


exports.seed = function(knex, Promise) {
  return Promise.join(
      knex('comments').del(),
      knex('posts').del(),
      knex('users').del()
    )
    .then(function() {
      return Promise.join(
        knex('users').insert({
          username: 'Coopasetic',
          password: 'password'
          // password: bcrypt.hashSync('password', 10),
        }),
        knex('users').insert({
          username: 'Tupactopus',
          password: 'password'
        })
      );
    })
    .then(function() {
      return Promise.join(
        knex('posts').insert({
          title: 'Leroy Best Card NA',
          image: 'http://static1.gamespot.com/uploads/original/1544/15443861/2653777-1873906125-heart.png',
          author: 1,
          description: 'lEEEEEEERRRRRRRROOOOOOOOOYYYYYY JEEEEEEEEEEYYYNNNNKKIIIIINNNSSS',
          votes: 10
        }),
        knex('posts').insert({
          title: 'yolo yogg',
          image: 'http://i.imgur.com/ehx1T6G.png',
          author: 2,
          description: 'Give in to the RNG',
          votes: 4
        })
      );
    })
    .then(function() {
      return Promise.join(
        knex('comments').insert({
          author_id: 1,
          post_id: 1,
          comment: 'screw miracle rogue'
        }),
        knex('comments').insert({
          author_id: 2,
          post_id: 1,
          comment: 'oh yeah you play dragon pally'
        }),
        knex('comments').insert({
          author_id: 2,
          post_id: 2,
          comment: 'this card is so awesome'
        })
      );
    });
};
