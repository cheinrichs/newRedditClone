//inject 'env'
// var host = env.apiHost
//factory.$inject = ['$http', 'env'];

//function factory ($http, env){

// }
(function() {
  'use strict';
    angular.module('redditClone.posts')
      .factory('postService', factory)

    factory.$inject = ['$http'];

    function factory($http){
      var posts = [];
      var showPostForm = false;


      return {
        add: addPost,
        delete: deletePost,
        list: listPosts,
        upvote: upvotePost,
        downvote: downvotePost,
        formVisible: postFormVisible,
        deletePost: deletePost
      }

      function postFormVisible(){
        showPostForm = !showPostForm;
        return showPostForm;
      }

      function addPost(title, image, description){
        var data = {
          title: title,
          image: image,
          description: description
        };

        return $http.post('http://localhost:3000/addPost/', data).then(function(res){
          posts.push(res.data[0]);
        });
      }

      function upvotePost(postId){
        var data = {
          id: postId
        }
        return $http.post('http://www.localhost:3000/upvotePost', data).then(function(res){
          console.log(res.data);
          //look through posts and find the votes
          for (var i = 0; i < posts.length; i++) {
            if(posts[i].id === postId){
              posts[i].votes++;
            }
          }
        });
      }

      function downvotePost(postId){
        var data = {
          id: postId
        }
        return $http.post('http://www.localhost:3000/downvotePost', data).then(function(res){
          console.log(res.data);
          //look through posts and find the votes
          for (var i = 0; i < posts.length; i++) {
            if(posts[i].id === postId){
              posts[i].votes--;
            }
          }
        });
      }

      function deletePost(postId){
        console.log("deleting post in factory");
        var data = {
          id: postId
        }
        return $http.post('http://www.localhost:3000/deletePost', data).then(function(res){
          console.log();
          for (var i = 0; i < posts.length; i++) {
            if(posts[i].id === postId){
              posts.splice(i, 1);
            }
          }
        })
      }

      function listPosts(){
        return $http.get('http://localhost:3000/posts')
          .then(function(response){
            posts = response.data;
            return posts;
          });
      }
    }

}());
